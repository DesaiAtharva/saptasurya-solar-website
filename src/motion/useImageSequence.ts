'use client';
import { RefObject, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { REDUCED_MOTION_QUERY } from './config';

gsap.registerPlugin(ScrollTrigger);

export type FrameSet = { dir: string; count: number };
export type SequenceSets = { desktop: FrameSet; mobile: FrameSet };

type Options = {
  sets: SequenceSets;
  /** Horizontal focal point (0–1) kept in view when cover-cropping. */
  focalX?: number;
  /** Fit: 'cover' crops to fill (scenes); 'contain' shows the whole frame (objects). */
  fit?: 'cover' | 'contain';
  mobileMaxWidth?: number;
  /** Called with scroll progress 0–1 (cheap — use for captions/labels). */
  onProgress?: (p: number) => void;
  /** Disable entirely (e.g. no frames yet). */
  enabled?: boolean;
};

/** Keyframes first (every Nth), then the gaps in chunks — scrubbing is usable almost immediately. */
const KEYFRAME_STEP = 6;
const CHUNK_SIZE = 8;

export const frameSrc = (dir: string, i: number) => `${dir}/${String(i + 1).padStart(4, '0')}.webp`;

function loadFrame(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function loadOrder(count: number): number[] {
  const keys: number[] = [];
  for (let i = 0; i < count; i += KEYFRAME_STEP) keys.push(i);
  if (keys[keys.length - 1] !== count - 1) keys.push(count - 1);
  const rest = Array.from({ length: count }, (_, i) => i).filter((i) => !keys.includes(i));
  return [...keys, ...rest];
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
  fit: 'cover' | 'contain',
  focalX: number
) {
  const scale =
    fit === 'cover'
      ? Math.max(w / img.naturalWidth, h / img.naturalHeight)
      : Math.min(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  const dx = fit === 'cover' ? Math.min(0, Math.max(w - dw, w / 2 - dw * focalX)) : (w - dw) / 2;
  const dy = (h - dh) / 2;
  if (fit === 'contain') ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, dx, dy, dw, dh);
}

/**
 * Scroll-scrubbed canvas image sequence.
 * - Picks the desktop or mobile frame set by viewport width.
 * - Starts loading only after page load + idle, and when the section is within half a screen.
 * - Draws the nearest loaded frame while the rest stream in.
 * - Progress runs from section top hitting the viewport top to section bottom hitting the bottom
 *   (i.e. a tall section with a sticky inner stage).
 * - Does nothing for prefers-reduced-motion (render a static fallback instead).
 */
export function useImageSequence(
  section: RefObject<HTMLElement | null>,
  canvas: RefObject<HTMLCanvasElement | null>,
  { sets, focalX = 0.5, fit = 'cover', mobileMaxWidth = 899, onProgress, enabled = true }: Options
) {
  const progressCb = useRef(onProgress);
  progressCb.current = onProgress;

  useEffect(() => {
    const sec = section.current;
    const cvs = canvas.current;
    if (!enabled || !sec || !cvs) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const seq = window.innerWidth <= mobileMaxWidth ? sets.mobile : sets.desktop;
    if (!seq.count) return;
    const frames: (HTMLImageElement | undefined)[] = new Array(seq.count);
    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    const state = { frame: 0 };
    let lastDrawn = -1;
    let raf = 0;
    let cancelled = false;

    function draw() {
      const target = Math.round(state.frame);
      let idx = -1;
      for (let d = 0; d < seq.count; d++) {
        if (frames[target - d]) {
          idx = target - d;
          break;
        }
        if (frames[target + d]) {
          idx = target + d;
          break;
        }
      }
      if (idx < 0 || idx === lastDrawn) return;
      lastDrawn = idx;
      cvs!.dataset.frame = String(idx); // for QA: last drawn frame index
      drawFrame(ctx!, frames[idx]!, cvs!.width, cvs!.height, fit, focalX);
    }
    // For async events (a frame finished loading): schedule at most one draw per frame.
    // Never cancel-and-reschedule — during scrolling that starves the draw completely.
    let pending = false;
    const requestDraw = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(() => {
        pending = false;
        draw();
      });
    };
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cvs.width = Math.round(cvs.clientWidth * dpr);
      cvs.height = Math.round(cvs.clientHeight * dpr);
      lastDrawn = -1;
      draw();
    };

    const order = loadOrder(seq.count);
    const preload = async () => {
      for (let c = 0; c < order.length && !cancelled; c += CHUNK_SIZE) {
        await Promise.all(
          order.slice(c, c + CHUNK_SIZE).map((i) =>
            loadFrame(frameSrc(seq.dir, i))
              .then((img) => {
                frames[i] = img;
                if (Math.abs(i - state.frame) < KEYFRAME_STEP) requestDraw();
              })
              .catch(() => undefined)
          )
        );
        lastDrawn = -1;
        requestDraw();
      }
    };
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!started && entries.some((e) => e.isIntersecting)) {
          started = true;
          preload();
          io.disconnect();
        }
      },
      { rootMargin: '50% 0px' }
    );
    const whenIdle = (fn: () => void) =>
      'requestIdleCallback' in window
        ? window.requestIdleCallback(fn, { timeout: 800 })
        : setTimeout(fn, 600);
    const begin = () => whenIdle(() => !cancelled && io.observe(sec));
    if (document.readyState === 'complete') begin();
    else window.addEventListener('load', begin, { once: true });

    const tween = gsap.to(state, {
      frame: seq.count - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => progressCb.current?.(self.progress),
      },
      // Already inside GSAP's rAF tick — draw synchronously (cheap: skipped when the frame is unchanged).
      onUpdate: draw,
    });

    size();
    const ro = new ResizeObserver(size);
    ro.observe(cvs);

    return () => {
      cancelled = true;
      window.removeEventListener('load', begin);
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [section, canvas, sets, focalX, fit, mobileMaxWidth, enabled]);
}
