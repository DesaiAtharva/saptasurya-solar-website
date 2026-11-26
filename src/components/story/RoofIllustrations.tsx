import React from 'react';
import type { PropertyType } from '@/lib/solarCalc';

/**
 * Four roof types drawn in the hero's illustration style (pure SVG, no downloads).
 * Each roof has a fixed number of panel "slots"; `filled` of them light up, front row first,
 * with a staggered transition so panels appear one after another as the bill changes.
 */

const BODY = '#12305E';
const BODY_DARK = '#0B2347';
const WIN = '#0A1E40';
const WIN_LIT = '#FDBA2C';
const PANEL = '#2F6BD8';
const PANEL_EDGE = '#8FB3F0';
const EMPTY = 'rgba(255,255,255,0.28)';

type GridSpec = { x: number; y: number; cols: number; rows: number; pw: number; ph: number };

/** Slot capacity per roof type — used by the configurator to scale panel counts. */
export const ROOF_SLOTS: Record<PropertyType, number> = {
  home: 18,
  society: 21,
  commercial: 30,
  farm: 12,
};

function PanelGrid({ x, y, cols, rows, pw, ph, filled }: GridSpec & { filled: number }) {
  const slots: React.ReactNode[] = [];
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = x + c * (pw + 4) + r * 7;
      const y0 = y - r * (ph + 3);
      const on = idx < filled;
      slots.push(
        <polygon
          key={idx}
          points={`${x0},${y0} ${x0 + pw},${y0} ${x0 + pw + 7},${y0 - ph} ${x0 + 7},${y0 - ph}`}
          fill={on ? PANEL : 'transparent'}
          stroke={on ? PANEL_EDGE : EMPTY}
          strokeWidth={on ? 1.2 : 1}
          strokeDasharray={on ? undefined : '3 3'}
          style={{
            transition: 'fill .35s ease, stroke .35s ease',
            transitionDelay: `${(idx % 12) * 22}ms`,
          }}
        />
      );
      idx++;
    }
  }
  return <g>{slots}</g>;
}

function Windows({
  x,
  y,
  cols,
  rows,
  gx,
  gy,
  seed,
}: {
  x: number;
  y: number;
  cols: number;
  rows: number;
  gx: number;
  gy: number;
  seed: number;
}) {
  const out: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const lit = (seed + r * 5 + c * 3) % 7 === 0;
      out.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * gx}
          y={y + r * gy}
          width={14}
          height={18}
          rx={2}
          fill={lit ? WIN_LIT : WIN}
          opacity={lit ? 0.9 : 1}
        />
      );
    }
  return <g>{out}</g>;
}

function Home({ filled }: { filled: number }) {
  return (
    <g>
      <rect x={150} y={204} width={300} height={136} fill={BODY} />
      <rect x={150} y={196} width={300} height={10} fill={BODY_DARK} />
      <Windows x={178} y={228} cols={6} rows={2} gx={46} gy={46} seed={1} />
      <rect x={278} y={290} width={44} height={50} rx={3} fill={WIN} />
      <rect x={410} y={170} width={28} height={22} rx={4} fill={BODY_DARK} />
      <PanelGrid x={172} y={194} cols={6} rows={3} pw={33} ph={15} filled={filled} />
    </g>
  );
}

function Society({ filled }: { filled: number }) {
  return (
    <g>
      {/* kept below the chips: top panel row sits at y≈112 */}
      <rect x={160} y={160} width={280} height={180} fill={BODY} />
      <rect x={160} y={152} width={280} height={10} fill={BODY_DARK} />
      <Windows x={182} y={176} cols={7} rows={4} gx={36} gy={40} seed={2} />
      <rect x={88} y={230} width={70} height={110} fill={BODY_DARK} />
      <rect x={442} y={215} width={80} height={125} fill={BODY_DARK} />
      <PanelGrid x={172} y={150} cols={7} rows={3} pw={29} ph={13} filled={filled} />
    </g>
  );
}

function Commercial({ filled }: { filled: number }) {
  return (
    <g>
      <rect x={60} y={220} width={480} height={120} fill={BODY} />
      <rect x={60} y={212} width={480} height={10} fill={BODY_DARK} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={92 + i * 112} y={270} width={70} height={70} rx={3} fill={WIN} />
      ))}
      <rect x={490} y={150} width={18} height={62} fill={BODY_DARK} />
      <PanelGrid x={74} y={210} cols={10} rows={3} pw={36} ph={14} filled={filled} />
    </g>
  );
}

function Farm({ filled }: { filled: number }) {
  return (
    <g>
      {/* field rows */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${352 + i * 14} Q300 ${340 + i * 14} 600 ${352 + i * 14}`}
          stroke="#1F5A3A"
          strokeWidth={6}
          fill="none"
          opacity={0.8}
        />
      ))}
      {/* array legs */}
      {[150, 250, 350].map((x) => (
        <line
          key={x}
          x1={x + 20}
          y1={300}
          x2={x + 20}
          y2={340}
          stroke={BODY_DARK}
          strokeWidth={5}
        />
      ))}
      <PanelGrid x={128} y={300} cols={6} rows={2} pw={40} ph={18} filled={filled} />
      {/* pump house + pipe + water */}
      <rect x={430} y={286} width={70} height={54} fill={BODY} />
      <polygon points="424,288 465,262 506,288" fill={BODY_DARK} />
      <path d="M465 340 V350 H560" stroke="#8FB3F0" strokeWidth={5} fill="none" />
      <ellipse cx={560} cy={356} rx={30} ry={7} fill="#3B82F6" opacity={0.7} />
    </g>
  );
}

const SCENES: Record<PropertyType, (p: { filled: number }) => React.ReactElement> = {
  home: Home,
  society: Society,
  commercial: Commercial,
  farm: Farm,
};

/** All four scenes stacked; the active one is shown with a crossfade. */
export default function RoofIllustrations({
  active,
  filled,
  zoom = false,
}: {
  active: PropertyType;
  filled: number;
  /** Phones: crop the sides (slice) so the building fills the frame. */
  zoom?: boolean;
}) {
  return (
    <svg
      viewBox="0 60 600 330"
      preserveAspectRatio={zoom ? 'xMidYMax slice' : 'xMidYMax meet'}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    >
      {/* sun */}
      {/* sun sits below the overlay chips */}
      <circle cx={500} cy={168} r={26} fill="#FDBA2C" opacity={0.95} />
      <circle cx={500} cy={168} r={56} fill="#FDBA2C" opacity={0.12} />
      {/* ground */}
      <rect x={0} y={338} width={600} height={60} fill="#071631" />
      {(Object.keys(SCENES) as PropertyType[]).map((key) => {
        const Scene = SCENES[key];
        const on = key === active;
        return (
          <g
            key={key}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'translateY(12px)',
              transition:
                'opacity .5s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1)',
            }}
          >
            <Scene filled={on ? filled : 0} />
          </g>
        );
      })}
    </svg>
  );
}

/** A single static scene (used by the solutions cards). */
export function RoofScene({ type, filled }: { type: PropertyType; filled?: number }) {
  const Scene = SCENES[type];
  return (
    <svg
      viewBox="0 60 600 330"
      preserveAspectRatio="xMidYMax slice"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    >
      <circle cx={500} cy={168} r={26} fill="#FDBA2C" opacity={0.95} />
      <circle cx={500} cy={168} r={56} fill="#FDBA2C" opacity={0.12} />
      <rect x={0} y={338} width={600} height={60} fill="#071631" />
      <Scene filled={filled ?? ROOF_SLOTS[type]} />
    </svg>
  );
}
