'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FINE_POINTER_QUERY, REDUCED_MOTION_QUERY } from './config';

/** Gently pulls its child toward the cursor on desktop. No effect on touch / reduced motion. */
export default function Magnetic({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(FINE_POINTER_QUERY).matches) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'expo.out' });
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [strength]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', willChange: 'transform' }}>
      {children}
    </span>
  );
}
