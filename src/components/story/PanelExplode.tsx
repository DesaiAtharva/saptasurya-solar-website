'use client';
import React, { useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useImageSequence, type SequenceSets } from '@/motion/useImageSequence';
import { REDUCED_MOTION_QUERY } from '@/motion/config';
import { panelWarrantyLine } from '@/config/site';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ───────────────────────── config ───────────────────────── */
/** What a visitor learns at each step (top → bottom of the panel). */
const PARTS = [
  {
    name: 'Aluminium frame',
    detail: 'Anodised frame that keeps the panel rigid against wind and handles mounting.',
  },
  {
    name: 'Tempered glass',
    detail:
      'Toughened, anti-reflective front glass that shields the cells from hail, dust and rain.',
  },
  {
    name: 'EVA encapsulant',
    detail: 'Clear layers above and below the cells that seal them from moisture for decades.',
  },
  {
    name: 'Solar cells',
    detail:
      'Mono PERC / TOPCon silicon cells that turn sunlight into electricity — 20–22%+ efficient.',
  },
  {
    name: 'Backsheet',
    detail: 'Insulating rear layer that protects the cells from heat, UV and electrical faults.',
  },
  {
    name: 'Junction box',
    detail: 'Weather-sealed box with bypass diodes that carries the power safely to the inverter.',
  },
];

/** Visual layers, top → bottom. `part` = index into PARTS. EVA appears twice (above and below the cells). */
const LAYERS: { key: string; part: number }[] = [
  { key: 'frame', part: 0 },
  { key: 'glass', part: 1 },
  { key: 'eva-top', part: 2 },
  { key: 'cells', part: 3 },
  { key: 'eva-bottom', part: 2 },
  { key: 'backsheet', part: 4 },
  { key: 'jbox', part: 5 },
];

/** Scroll budget: first 25% explodes the panel, the rest walks through the parts. */
const EXPLODE_END = 0.25;
const partForProgress = (p: number) =>
  p < EXPLODE_END
    ? 0
    : Math.min(
        PARTS.length - 1,
        Math.floor(((p - EXPLODE_END) / (1 - EXPLODE_END)) * PARTS.length)
      );

/* ───────────────────────── layer visuals (CSS) ───────────────────────── */
const layerStyle = (key: string): React.CSSProperties => {
  switch (key) {
    case 'frame':
      return {
        border: '9px solid #C9CFD8',
        borderRadius: 6,
        boxShadow: 'inset 0 0 0 1px #8F98A6, 0 0 0 1px #8F98A6',
      };
    case 'glass':
      return {
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(190,215,255,0.16) 38%, rgba(255,255,255,0.06) 62%, rgba(255,255,255,0.32) 100%)',
        border: '1.5px solid rgba(255,255,255,0.85)',
        borderRadius: 3,
      };
    case 'eva-top':
    case 'eva-bottom':
      return {
        background: 'rgba(255,255,255,0.1)',
        border: '1.5px dashed rgba(255,255,255,0.6)',
        borderRadius: 3,
      };
    case 'cells':
      return {
        backgroundColor: '#163A80',
        backgroundImage:
          'linear-gradient(90deg, rgba(225,232,244,0.95) 2px, transparent 2px), linear-gradient(0deg, rgba(225,232,244,0.95) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
        backgroundSize:
          'calc(100% / 6) calc(100% / 10), calc(100% / 6) calc(100% / 10), calc(100% / 24) 100%',
        borderRadius: 3,
      };
    case 'backsheet':
      return { background: 'linear-gradient(135deg, #FFFFFF, #E9E6E0)', borderRadius: 3 };
    default:
      return {};
  }
};

/* ───────────────────────── component ───────────────────────── */
/**
 * Section 6 — "What's inside a panel". Scroll explodes a solar panel into its layers and steps
 * through each part. Uses a pre-rendered image sequence when frames exist in
 * /public/assets/sequence/panel/{desktop,mobile}/0001.webp…; otherwise a CSS 3D layered version.
 */
export default function PanelExplode({ sequence }: { sequence: SequenceSets }) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const hasFrames = sequence.desktop.count > 0 && sequence.mobile.count > 0;

  const onProgress = (p: number) => {
    const idx = partForProgress(p);
    setActive((prev) => (prev === idx ? prev : idx));
  };

  // Image-sequence mode (when frames have been dropped in).
  useImageSequence(section, canvas, {
    sets: sequence,
    fit: 'contain',
    onProgress,
    enabled: hasFrames,
  });

  // CSS layered mode: drive --p (0 → 1 explode) on the stage without re-rendering React.
  useGSAP(
    () => {
      if (hasFrames || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
      const setP = (v: number) => stage.current?.style.setProperty('--p', String(v));
      ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => {
          setP(gsap.parseEase('power2.out')(Math.min(1, self.progress / EXPLODE_END)));
          onProgress(self.progress);
        },
      });
    },
    { scope: section, dependencies: [hasFrames] }
  );

  const activeLayerKeys = LAYERS.filter((l) => l.part === active).map((l) => l.key);

  return (
    <Box
      component="section"
      ref={section}
      aria-labelledby="panel-heading"
      sx={{
        position: 'relative',
        height: { xs: '220svh', md: '260svh' },
        bgcolor: '#061A3A',
        color: '#fff',
        backgroundImage:
          'radial-gradient(700px 500px at 75% 45%, rgba(30,76,154,0.45), transparent 70%)',
        '@media (prefers-reduced-motion: reduce)': { height: 'auto' },
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100svh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          '@media (prefers-reduced-motion: reduce)': { position: 'static', height: 'auto', py: 10 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.95fr 1.05fr' },
            gridTemplateRows: { xs: 'auto 1fr auto', md: 'auto' },
            alignItems: 'center',
            gap: { xs: 1, md: 6 },
            height: { xs: '100%', md: 'auto' },
            pt: { xs: 10, md: 0 },
            pb: { xs: 11, md: 0 },
          }}
        >
          {/* Copy + parts list */}
          <Box>
            <Typography variant="overline" component="p" sx={{ color: '#FDBA2C' }}>
              Built to last 25 years
            </Typography>
            <Typography
              id="panel-heading"
              variant="h2"
              sx={{ mb: { xs: 0, md: 2 }, color: '#fff' }}
            >
              What&apos;s <span className="ss-accent">inside</span> a panel.
            </Typography>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                mb: 3,
                maxWidth: 460,
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Six layers work together to turn sunlight into power on your roof — here&apos;s what
              you&apos;re paying for.
            </Typography>

            {/* Desktop list (and the full list for reduced motion) */}
            <Box
              component="ol"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: { xs: 'none', md: 'grid' },
                gap: 0.5,
                '@media (prefers-reduced-motion: reduce)': { display: 'grid' },
              }}
            >
              {PARTS.map((part, i) => {
                const on = i === active;
                return (
                  <Box
                    component="li"
                    key={part.name}
                    sx={{
                      pl: 2,
                      py: 1,
                      borderLeft: 3,
                      borderColor: on ? '#F97316' : 'rgba(255,255,255,0.15)',
                      transition: 'border-color .3s',
                      '@media (prefers-reduced-motion: reduce)': {
                        borderColor: 'rgba(255,255,255,0.15)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: on ? '#fff' : 'rgba(255,255,255,0.6)',
                        transition: 'color .3s',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ color: 'primary.main', mr: 1, fontVariantNumeric: 'tabular-nums' }}
                      >
                        0{i + 1}
                      </Box>
                      {part.name}
                    </Typography>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateRows: on ? '1fr' : '0fr',
                        transition: 'grid-template-rows .45s cubic-bezier(.16,1,.3,1)',
                        '@media (prefers-reduced-motion: reduce)': { gridTemplateRows: '1fr' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          overflow: 'hidden',
                          pt: on ? 0.5 : 0,
                          color: 'rgba(255,255,255,0.72)',
                        }}
                      >
                        {part.detail}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
                mt: 3,
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <VerifiedUser sx={{ color: 'success.main' }} fontSize="small" />
              <Typography variant="body2">{panelWarrantyLine()}</Typography>
            </Box>
          </Box>

          {/* Stage */}
          <Box
            sx={{
              position: 'relative',
              height: { xs: '100%', md: '72svh' },
              minHeight: { xs: 280, md: 0 },
            }}
          >
            {hasFrames ? (
              <canvas
                ref={canvas}
                role="img"
                aria-label="Exploded view of a solar panel showing its layers"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              />
            ) : (
              <Box
                ref={stage}
                role="img"
                aria-label="Exploded view of a solar panel showing its layers"
                sx={{
                  ['--p' as string]: 0,
                  '@media (prefers-reduced-motion: reduce)': { ['--p' as string]: 1 },
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  perspective: '1600px',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 140, sm: 180, md: 220 },
                    height: { xs: 215, sm: 275, md: 340 },
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(58deg) rotateZ(-38deg)',
                    ['--gap' as string]: { xs: '40px', md: '74px' },
                  }}
                >
                  {LAYERS.map((layer, i) => {
                    const center = (LAYERS.length - 1) / 2;
                    const on = activeLayerKeys.includes(layer.key);
                    return (
                      <Box
                        key={layer.key}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          transform: `translateZ(calc(${(center - i).toFixed(2)} * var(--gap) * var(--p) + ${(center - i) * 2}px))`,
                          opacity: on ? 1 : 0.5,
                          filter: on ? 'drop-shadow(0 0 14px rgba(249,115,22,0.75))' : 'none',
                          transition: 'opacity .3s, filter .3s',
                          ...layerStyle(layer.key),
                        }}
                      >
                        {layer.key === 'jbox' && (
                          <Box
                            sx={{
                              position: 'absolute',
                              left: '50%',
                              top: '18%',
                              width: '34%',
                              height: '14%',
                              transform: 'translateX(-50%)',
                              bgcolor: '#1E2633',
                              borderRadius: 1,
                              boxShadow: '0 0 0 2px #3A4556',
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
          </Box>

          {/* Mobile: active part card */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'relative',
              minHeight: 110,
              '@media (prefers-reduced-motion: reduce)': { display: 'none' },
            }}
            aria-live="polite"
          >
            {PARTS.map((part, i) => (
              <Box
                key={part.name}
                aria-hidden={i !== active}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'none' : 'translateY(12px)',
                  transition:
                    'opacity .45s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1)',
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                  <Box component="span" sx={{ color: 'primary.main', mr: 1 }}>
                    0{i + 1}
                  </Box>
                  {part.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                  {part.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
