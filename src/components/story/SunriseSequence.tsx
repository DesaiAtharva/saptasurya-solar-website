'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { useImageSequence, type SequenceSets } from '@/motion/useImageSequence';

/* ───────────────────────── config ───────────────────────── */
const SEQUENCES: SequenceSets = {
  desktop: { dir: '/assets/sequence/sunrise/desktop', count: 74 },
  mobile: { dir: '/assets/sequence/sunrise/mobile', count: 50 },
};
const MOBILE_MAX_WIDTH = 899;
/** Horizontal focal point of the house in the frames (0–1) — keeps it centred when cropping. */
const FOCAL_X = 0.57; // v2 frames: house centre sits at ~57% of the width

/** Illustrative footage only — never describe this house as a Saptasurya project. */
const ILLUSTRATION_ALT = 'Illustration: solar panels on a home at sunrise';

const CAPTIONS = [
  { title: 'Morning:', rest: 'panels wake.', from: 0, to: 0.36 },
  { title: 'Noon:', rest: 'your meter runs backwards.', from: 0.36, to: 0.7 },
  { title: 'All day:', rest: 'free power, stored as credit.', from: 0.7, to: 1.01 },
];

/* ───────────────────────── component ───────────────────────── */
export default function SunriseSequence() {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);

  useImageSequence(section, canvas, {
    sets: SEQUENCES,
    focalX: FOCAL_X,
    mobileMaxWidth: MOBILE_MAX_WIDTH,
    onProgress: (p) => {
      const idx = CAPTIONS.findIndex((c) => p >= c.from && p < c.to);
      setActive((prev) => (idx >= 0 && idx !== prev ? idx : prev));
    },
  });

  const captionSx = (i: number) => ({
    position: 'absolute' as const,
    left: 0,
    right: 0,
    top: { xs: 0, md: 'auto' },
    bottom: { xs: 'auto', md: 0 },
    opacity: active === i ? 1 : 0,
    transform: active === i ? 'none' : i < active ? 'translateY(-24px)' : 'translateY(24px)',
    transition: 'opacity .6s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)',
  });

  return (
    <>
      {/* ───────── Animated version (hidden for reduced motion) ───────── */}
      <Box
        component="section"
        ref={section}
        aria-label="How solar works through the day"
        sx={{
          position: 'relative',
          height: { xs: '200svh', md: '240svh' },
          bgcolor: '#061A3A',
          '@media (prefers-reduced-motion: reduce)': { display: 'none' },
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            height: '100svh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
          }}
        >
          {/* Heading (mobile: above the frame; desktop: overlaid top-left) */}
          <Container
            maxWidth="lg"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              zIndex: 2,
              top: { md: 110 },
              left: { md: 0 },
              right: { md: 0 },
              pt: { xs: 11, md: 0 },
              pb: { xs: 2.5, md: 0 },
            }}
          >
            <Typography variant="overline" component="p" sx={{ color: '#FDBA2C' }}>
              A day with solar
            </Typography>
            <Typography variant="h2" sx={{ color: '#fff', maxWidth: 520 }}>
              Sunlight in. <span className="ss-accent">Savings</span> out.
            </Typography>
          </Container>

          {/* Canvas */}
          <Box
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              inset: { md: 0 },
              height: { xs: '56svh', md: 'auto' },
              flexShrink: 0,
            }}
          >
            {/* first frame as an instant poster until the canvas has drawn */}
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/assets/stills/sunrise-first.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: `${FOCAL_X * 100}% 50%`,
              }}
            />
            <canvas
              ref={canvas}
              role="img"
              aria-label={ILLUSTRATION_ALT}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
            {/* scrims for text legibility */}
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 0,
                background: {
                  xs: 'linear-gradient(180deg, #061A3A 0%, transparent 18%, transparent 80%, #061A3A 100%)',
                  md: 'linear-gradient(180deg, rgba(6,26,58,0.75) 0%, rgba(6,26,58,0) 32%, rgba(6,26,58,0) 55%, rgba(6,26,58,0.85) 100%)',
                },
              }}
            />
          </Box>

          {/* Captions + progress */}
          <Container
            maxWidth="lg"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              zIndex: 2,
              bottom: { md: 72 },
              left: { md: 0 },
              right: { md: 0 },
              flexGrow: { xs: 1 },
              pt: { xs: 3 },
            }}
          >
            <Box sx={{ position: 'relative', minHeight: { xs: 110, md: 150 }, maxWidth: 760 }}>
              {CAPTIONS.map((c, i) => (
                <Typography
                  key={c.title}
                  component="p"
                  aria-hidden={active !== i}
                  sx={{
                    ...captionSx(i),
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontWeight: 500,
                    fontSize: { xs: '2rem', md: '3.4rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <Box component="span" sx={{ color: '#FDBA2C', fontStyle: 'italic' }}>
                    {c.title}
                  </Box>{' '}
                  {c.rest}
                </Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 3 } }} aria-hidden>
              {CAPTIONS.map((c, i) => (
                <Box
                  key={c.title}
                  sx={{
                    height: 3,
                    width: active === i ? 44 : 18,
                    borderRadius: 2,
                    bgcolor: active >= i ? '#F97316' : 'rgba(255,255,255,0.3)',
                    transition: 'width .5s cubic-bezier(.16,1,.3,1), background-color .3s',
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* ───────── Reduced-motion version: two stills + captions ───────── */}
      <Box
        component="section"
        aria-label="How solar works through the day"
        sx={{
          display: 'none',
          '@media (prefers-reduced-motion: reduce)': { display: 'block' },
          bgcolor: '#061A3A',
          color: '#fff',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" component="p" sx={{ color: '#FDBA2C' }}>
            A day with solar
          </Typography>
          <Typography variant="h2" sx={{ color: '#fff', mb: 5 }}>
            Sunlight in. <span className="ss-accent">Savings</span> out.
          </Typography>
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            {[
              {
                src: '/assets/stills/sunrise-first.jpg',
                alt: ILLUSTRATION_ALT,
                caps: [CAPTIONS[0]],
              },
              {
                src: '/assets/stills/sunrise-last.jpg',
                alt: ILLUSTRATION_ALT,
                caps: [CAPTIONS[1], CAPTIONS[2]],
              },
            ].map((s) => (
              <figure key={s.src} style={{ margin: 0 }}>
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box component="figcaption" sx={{ mt: 2 }}>
                  {s.caps.map((c) => (
                    <Typography
                      key={c.title}
                      sx={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontSize: { xs: '1.5rem', md: '1.9rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      <Box component="span" sx={{ color: '#FDBA2C', fontStyle: 'italic' }}>
                        {c.title}
                      </Box>{' '}
                      {c.rest}
                    </Typography>
                  ))}
                </Box>
              </figure>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
