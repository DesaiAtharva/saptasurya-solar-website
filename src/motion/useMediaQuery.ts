'use client';
import { useEffect, useState } from 'react';
import { FINE_POINTER_QUERY, REDUCED_MOTION_QUERY } from './config';

/** SSR-safe media query hook (false on the server and first client render). */
export function useMediaQueryFlag(query: string): boolean {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return match;
}

export const useReducedMotion = () => useMediaQueryFlag(REDUCED_MOTION_QUERY);
export const useFinePointer = () => useMediaQueryFlag(FINE_POINTER_QUERY);
