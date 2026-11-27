'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { LocationOn, Bolt, Savings, CalendarMonth } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { Project } from '@/data/projects';
import { inr } from '@/lib/solarCalc';
import { FINE_POINTER_QUERY, REDUCED_MOTION_QUERY } from '@/motion/config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const monthLabel = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  if (!y || !m) return ym;
  return new Date(y, m - 1, 1).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
};

/**
 * Section 5 — "Rooftops we've woken": real projects only.
 * Receives already-verified projects from the server (see lib/projects.server.ts) and renders
 * nothing when the list is empty. Desktop: pinned, scrolls sideways. Phones: native swipe.
 */
export default function ProjectRail({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!projects.length) return;
      if (!window.matchMedia(FINE_POINTER_QUERY).matches || window.innerWidth < 900) return;
      if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
      const el = track.current!;
      const distance = () => Math.max(0, el.scrollWidth - el.clientWidth);
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root, dependencies: [projects.length] }
  );

  if (!projects.length) return null;

  return (
    <Box
      component="section"
      data-surface="dark"
      ref={root}
      aria-labelledby="projects-heading"
      sx={{
        bgcolor: '#061A3A',
        color: '#fff',
        py: { xs: 8, md: 0 },
        minHeight: { md: '100svh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ mb: { xs: 3, md: 5 } }}>
        <Typography variant="overline" component="p" sx={{ color: '#FDBA2C' }}>
          Our work
        </Typography>
        <Typography id="projects-heading" variant="h2" sx={{ color: '#fff' }}>
          Rooftops we&apos;ve <span className="ss-accent">woken.</span>
        </Typography>
      </Container>

      <Box
        ref={track}
        sx={{
          display: 'flex',
          gap: { xs: 2, md: 3 },
          px: { xs: 2, md: 'max(24px, calc((100vw - 1200px) / 2 + 24px))' },
          overflowX: { xs: 'auto', md: 'visible' },
          scrollSnapType: { xs: 'x mandatory', md: 'none' },
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          willChange: 'transform',
        }}
      >
        {projects.map((p) => (
          <Box
            key={p.photo}
            component="article"
            sx={{
              flex: '0 0 auto',
              width: { xs: '82vw', sm: 420, md: 520 },
              scrollSnapAlign: 'start',
              borderRadius: 4,
              overflow: 'hidden',
              bgcolor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Box sx={{ position: 'relative', aspectRatio: '16 / 10' }}>
              <Image
                src={p.photo}
                alt={p.alt ?? `${p.kw} kW rooftop solar installation by Saptasurya in ${p.city}`}
                fill
                sizes="(max-width: 600px) 82vw, 520px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{ p: { xs: 2, md: 2.5 } }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center', gap: 0.75, fontWeight: 700, mb: 1.25 }}
              >
                <LocationOn sx={{ color: '#FDBA2C', fontSize: 20 }} />
                {p.city}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                }}
              >
                <Stat icon={<Bolt />} text={`${p.kw} kW`} />
                <Stat icon={<Savings />} text={`${inr(p.monthlySaving)}/month saved`} />
                <Stat icon={<CalendarMonth />} text={monthLabel(p.installMonth)} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function Stat({ icon, text }: { icon: React.ReactElement; text: string }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        '& svg': { fontSize: 18, color: '#FB923C' },
      }}
    >
      {icon}
      {text}
    </Box>
  );
}
