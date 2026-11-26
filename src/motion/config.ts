/**
 * Single source of truth for motion. Tweak timings here, not in components.
 * CSS-driven reveals mirror these values in src/index.css (search "ss-").
 */
export const EASE = {
  out: 'expo.out',
  inOut: 'power3.inOut',
  soft: 'power2.out',
  /** CSS equivalent of expo.out */
  cssOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const DURATION = {
  fast: 0.6,
  reveal: 0.9,
  slow: 1.2,
} as const;

export const STAGGER = {
  words: 0.07,
  items: 0.08,
} as const;

/** Intro overlay length (ms). Keep in sync with .ss-intro keyframes in index.css. */
export const INTRO_MS = 1250;

/** Desktop-only effects (smooth scroll, cursor, magnetic buttons). */
export const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export const LENIS = {
  duration: 1.1,
  anchorOffset: -88,
} as const;
