import React from 'react';

/**
 * Illustrated dawn over a Maharashtra rooftop skyline (pure SVG — no image download).
 *
 * Drawn on a wide, short canvas (2400 × 300) so the *whole* skyline — rooftops and the full
 * sun — fits inside the hero's skyline band on any screen shape (the band uses `slice`, which
 * crops the sides rather than the tops). The sun sits at the centre with low buildings around it.
 * Layers are exposed via data attributes so the hero can parallax them.
 */

const VB = { x: 0, y: 600, w: 2400, h: 300 };
const GROUND = 900;
const SUN = { cx: 1200, cy: 812, r: 92 };

type Kind = 'panel' | 'tank' | 'plain';

/** Deterministic skyline: widths/heights cycle; buildings near the sun are kept low. */
function buildSkyline() {
  const widths = [120, 95, 145, 110, 160, 90, 135, 125];
  const heights = [170, 228, 150, 212, 186, 132, 204, 160];
  const kinds: Kind[] = ['tank', 'plain', 'panel', 'panel', 'tank', 'plain', 'panel', 'tank'];
  const out: { x: number; w: number; h: number; kind: Kind }[] = [];
  let x = -20;
  let i = 0;
  while (x < VB.w + 20) {
    const w = widths[i % widths.length];
    const nearSun = x + w > SUN.cx - 260 && x < SUN.cx + 260;
    const h = nearSun
      ? Math.min(heights[i % heights.length], 96 + (i % 3) * 8)
      : heights[i % heights.length];
    out.push({ x, w, h, kind: kinds[i % kinds.length] });
    x += w - 4;
    i++;
  }
  return out;
}
const BUILDINGS = buildSkyline();

function Building({
  x,
  w,
  h,
  kind,
  i,
}: {
  x: number;
  w: number;
  h: number;
  kind: Kind;
  i: number;
}) {
  const top = GROUND - h;
  const cols = Math.max(1, Math.floor((w - 20) / 28));
  const rows = Math.max(1, Math.floor((h - 40) / 34));
  const windows: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (i * 3 + r * 5 + c * 7) % 11 === 0;
      windows.push(
        <rect
          key={`${r}-${c}`}
          x={x + 14 + c * 28}
          y={top + 26 + r * 34}
          width={10}
          height={14}
          rx={1.5}
          fill={lit ? '#FDBA2C' : '#0D2550'}
          opacity={lit ? 0.85 : 1}
        />
      );
    }
  }

  let roof: React.ReactNode = null;
  if (kind === 'panel') {
    const x1 = x + 10;
    const x2 = x + w - 10;
    const lines = [];
    for (let lx = x1 + 22; lx < x2 - 8; lx += 22) {
      lines.push(
        <line
          key={lx}
          x1={lx}
          y1={top}
          x2={lx + 8}
          y2={top - 14}
          stroke="#5B86D6"
          strokeWidth={1}
        />
      );
    }
    roof = (
      <g>
        <polygon
          points={`${x1},${top} ${x2},${top} ${x2},${top - 14} ${x1 + 8},${top - 14}`}
          fill="#1E4C9A"
        />
        {lines}
        {/* first-light glint on the panel edge */}
        <line
          x1={x1 + 8}
          y1={top - 14}
          x2={x2}
          y2={top - 14}
          stroke="#FDBA2C"
          strokeWidth={2}
          opacity={0.75}
        />
      </g>
    );
  } else if (kind === 'tank') {
    roof = (
      <g fill="#04122B">
        <rect x={x + w - 44} y={top - 24} width={28} height={18} rx={3} />
        <rect x={x + w - 40} y={top - 8} width={3} height={8} />
        <rect x={x + w - 23} y={top - 8} width={3} height={8} />
      </g>
    );
  }

  return (
    <g>
      {roof}
      <rect x={x} y={top} width={w} height={h} fill="#061733" />
      {windows}
    </g>
  );
}

export default function DawnScene() {
  return (
    <svg
      viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="ss-sun" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFE3A3" />
          <stop offset="55%" stopColor="#FDBA2C" />
          <stop offset="100%" stopColor="#F97316" />
        </radialGradient>
        <radialGradient id="ss-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDBA2C" stopOpacity={0.5} />
          <stop offset="60%" stopColor="#F97316" stopOpacity={0.1} />
          <stop offset="100%" stopColor="#F97316" stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* Sun layer (parallax: rises on scroll) */}
      <g data-layer="sun">
        <g className="ss-sunrise">
          <circle cx={SUN.cx} cy={SUN.cy} r={300} fill="url(#ss-glow)" />
          <g stroke="#FDBA2C" strokeWidth={6} strokeLinecap="round" opacity={0.45}>
            {[165, 140, 115, 90, 65, 40, 15].map((deg) => {
              const a = (deg * Math.PI) / 180;
              const r1 = SUN.r + 30;
              const r2 = SUN.r + (deg === 90 ? 92 : 72);
              return (
                <line
                  key={deg}
                  x1={SUN.cx + Math.cos(a) * r1}
                  y1={SUN.cy - Math.sin(a) * r1}
                  x2={SUN.cx + Math.cos(a) * r2}
                  y2={SUN.cy - Math.sin(a) * r2}
                />
              );
            })}
          </g>
          <circle cx={SUN.cx} cy={SUN.cy} r={SUN.r} fill="url(#ss-sun)" />
        </g>
      </g>

      {/* Skyline layer */}
      <g data-layer="city">
        {BUILDINGS.map((b, i) => (
          <Building key={b.x} x={b.x} w={b.w} h={b.h} kind={b.kind} i={i} />
        ))}
        <rect x={-40} y={GROUND - 16} width={VB.w + 80} height={40} fill="#04112A" />
      </g>
    </svg>
  );
}
