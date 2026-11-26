import React from 'react';

/**
 * Saptasurya "Sapta Rashmi" mark — a solar-panel sun rising with seven rays
 * (Sapta = seven, Surya = sun) over the horizon.
 * `light` switches the horizon lines to white for dark backgrounds.
 */
export default function LogoMark({
  size = 48,
  light = false,
  title,
}: {
  size?: number | string;
  light?: boolean;
  title?: string;
}) {
  const sun = light ? '#F97316' : '#EA580C';
  const horizon = light ? '#FFFFFF' : '#0B2A5B';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 3.5 64 64"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path d="M18 44a14 14 0 0 1 28 0z" fill={sun} />
      <path
        d="M25 43.2v-10.6M32 43.2V31.2M39 43.2v-10.6M20.4 37.5h23.2"
        stroke="#fff"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path
        d="M14.61 39.34 6.89 37.27M18.21 32.43l-6.13-5.14M24.39 27.69l-3.38-7.25M32 26V15M39.61 27.69l3.38-7.25M45.79 32.43l6.13-5.14M49.39 39.34l7.72-2.07"
        stroke={sun}
        strokeWidth={3.6}
        strokeLinecap="round"
      />
      <path d="M6 49h52M16 56h32" stroke={horizon} strokeWidth={3.6} strokeLinecap="round" />
    </svg>
  );
}
