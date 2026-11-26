'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FINE_POINTER_QUERY, REDUCED_MOTION_QUERY, LENIS } from './config';

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scrolling, synced with GSAP ScrollTrigger.
 * Desktop (fine pointer) only, and never when the user prefers reduced motion —
 * phones keep native scrolling, which is smoother and cheaper on mid-range Android.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia(FINE_POINTER_QUERY).matches) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const lenis = new Lenis({
      duration: LENIS.duration,
      anchors: { offset: LENIS.anchorOffset },
      // Let dialogs, drawers and menus scroll natively.
      prevent: (node: HTMLElement) =>
        !!node.closest?.('.MuiDialog-root, .MuiDrawer-root, .MuiPopover-root, .MuiMenu-root'),
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
