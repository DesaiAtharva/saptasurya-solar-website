'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography, CardActionArea } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { PropertyType } from '@/lib/solarCalc';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';
import { RoofScene } from './RoofIllustrations';
import { EASE, DURATION, STAGGER, REDUCED_MOTION_QUERY } from '@/motion/config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Card copy — keep short and factual. No numbers or guarantees unless the owner has confirmed them.
 * `type` matches the quote form's property types (Farms → "Farm / Solar Pump").
 */
const SOLUTIONS: { type: PropertyType; title: string; text: string }[] = [
  {
    type: 'home',
    title: 'Homes & bungalows',
    // TODO(owner): verify — confirms we assist with PM Surya Ghar subsidy applications.
    text: 'Rooftop solar sized to your monthly bill, with help on the PM Surya Ghar subsidy application.',
  },
  {
    type: 'society',
    title: 'Housing societies',
    text: 'Solar on the shared terrace to run lifts, water pumps and common-area lighting.',
  },
  {
    type: 'commercial',
    title: 'Shops, offices & factories',
    text: 'Rooftop systems that offset the daytime electricity your business uses most.',
  },
  {
    type: 'farm',
    title: 'Farms & solar pumps',
    // TODO(owner): verify — confirms we advise on PM-KUSUM eligibility.
    text: 'Solar water pumps for daytime irrigation. Ask us about PM-KUSUM eligibility.',
  },
];

/** Section 7 — "One sun. Every roof." Four cards with a staggered reveal; each opens the quote form pre-set to its type. */
export default function SolutionsGrid() {
  const root = useRef<HTMLElement>(null);
  const { openPopup } = useLeadPopup();

  useGSAP(
    () => {
      if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
      const cards = gsap.utils.toArray<HTMLElement>('[data-sol-card]');
      gsap.set(cards, { y: 48, opacity: 0 });
      ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          // Movement on expo-out; opacity on a softer curve so the fade reads as a reveal, not a pop.
          gsap.to(batch, { y: 0, duration: DURATION.slow, ease: EASE.out, stagger: STAGGER.items });
          gsap.to(batch, {
            opacity: 1,
            duration: DURATION.reveal,
            ease: EASE.soft,
            stagger: STAGGER.items,
          });
        },
      });
    },
    { scope: root }
  );

  return (
    <Box
      component="section"
      ref={root}
      aria-labelledby="solutions-heading"
      sx={{ py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 720, mb: { xs: 4, md: 6 } }}>
          <Typography variant="overline" component="p" sx={{ color: 'primary.main' }}>
            Who we serve
          </Typography>
          <Typography id="solutions-heading" variant="h2">
            One sun. <span className="ss-accent">Every</span> roof.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
            Tell us what you&apos;re powering — we design the system around how you use electricity.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, md: 3 },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
          }}
        >
          {SOLUTIONS.map((s) => (
            <Box
              key={s.type}
              data-sol-card
              sx={{
                borderRadius: 4,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                transition:
                  'transform .35s cubic-bezier(.16,1,.3,1), border-color .25s, box-shadow .35s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: 'primary.main',
                  boxShadow: '0 24px 48px -28px rgba(11,42,91,0.45)',
                },
                '&:hover .sol-arrow': { transform: 'translateX(4px)' },
                '&:hover .sol-ray': { transform: 'scaleX(1)' },
              }}
            >
              <CardActionArea
                onClick={() => openPopup(`solutions_${s.type}`, { propertyType: s.type })}
                aria-label={`Get a quote for ${s.title.toLowerCase()}`}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    background:
                      'linear-gradient(180deg, #0A2550 0%, #3A3468 45%, #C2603A 80%, #F2A03C 100%)',
                  }}
                >
                  <RoofScene type={s.type} />
                </Box>
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2.5 }}>
                    {s.text}
                  </Typography>
                  <Box sx={{ position: 'relative', alignSelf: 'flex-start', pb: 0.5 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      Get a quote
                      <ArrowForward
                        className="sol-arrow"
                        sx={{ fontSize: 18, transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}
                      />
                    </Typography>
                    <Box
                      className="sol-ray"
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 2,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform .45s cubic-bezier(.16,1,.3,1)',
                      }}
                    />
                  </Box>
                </Box>
              </CardActionArea>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
