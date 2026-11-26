'use client';
import { useEffect, useRef, useState } from 'react';
import { REDUCED_MOTION_QUERY } from './config';

/** Smoothly animates a number toward `target` (expo-out). Jumps instantly for reduced motion. */
export function useTweenNumber(target: number, duration = 650): number {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  const raf = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      from.current = target;
      setValue(target);
      return;
    }
    const start = performance.now();
    const begin = from.current;
    cancelAnimationFrame(raf.current);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const v = begin + (target - begin) * eased;
      from.current = v;
      setValue(v);
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}
