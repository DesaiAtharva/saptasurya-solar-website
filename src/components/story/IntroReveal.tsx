import React from 'react';

const RAYS = [
  'M14.61 39.34 6.89 37.27',
  'M18.21 32.43l-6.13-5.14',
  'M24.39 27.69l-3.38-7.25',
  'M32 26V15',
  'M39.61 27.69l3.38-7.25',
  'M45.79 32.43l6.13-5.14',
  'M49.39 39.34l7.72-2.07',
];

/**
 * Section 1 — cinematic opener. Pure CSS (index.css → .ss-intro), ~1.25s:
 * horizon draws, sun rises, seven rays draw one by one, name fades in, then a
 * sunrise wipe reveals the page. Skipped on repeat visits and for reduced motion.
 */
export default function IntroReveal() {
  return (
    <div className="ss-intro" aria-hidden="true">
      <div className="ss-intro__inner">
        <svg viewBox="0 3.5 64 64">
          <defs>
            <clipPath id="ss-intro-horizon">
              <rect x="0" y="0" width="64" height="45" />
            </clipPath>
          </defs>
          <g clipPath="url(#ss-intro-horizon)">
            <g className="sun">
              <path d="M18 44a14 14 0 0 1 28 0z" fill="#F97316" />
              <path
                d="M25 43.2v-10.6M32 43.2V31.2M39 43.2v-10.6M20.4 37.5h23.2"
                stroke="#061A3A"
                strokeWidth={1.6}
                strokeLinecap="round"
              />
            </g>
          </g>
          {RAYS.map((d, i) => (
            <path
              key={d}
              className="ray"
              d={d}
              stroke="#F97316"
              strokeWidth={3.6}
              strokeLinecap="round"
              style={{ ['--i' as string]: i }}
            />
          ))}
          <path className="hz" d="M6 49h52" stroke="#fff" strokeWidth={3.6} strokeLinecap="round" />
          <path
            className="hz"
            d="M16 56h32"
            stroke="#fff"
            strokeWidth={3.6}
            strokeLinecap="round"
          />
        </svg>
        <div className="ss-intro__word">
          <div
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Saptasurya
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.28em',
              color: '#FB923C',
              marginTop: 8,
            }}
          >
            SOLAR ENERGY
          </div>
        </div>
      </div>
    </div>
  );
}
