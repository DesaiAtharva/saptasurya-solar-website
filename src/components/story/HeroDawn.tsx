'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Paper, Stack } from '@mui/material';
import { Phone, ArrowDownward } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DawnScene from './DawnScene';
import SplitReveal from '@/motion/SplitReveal';
import Magnetic from '@/motion/Magnetic';
import LeadForm from '@/components/LeadForm/LeadForm';
import TrustBadges from '@/components/ui/TrustBadges';
import { trackContact } from '@/lib/analytics';
import { BUSINESS } from '@/config/site';
import { REDUCED_MOTION_QUERY } from '@/motion/config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Section 2 — Hero. Full-bleed dawn over a rooftop skyline. Headline reveals word by word
 * after the intro; on scroll the sun keeps rising while the city sinks slightly (parallax).
 * Desktop: quote form in the hero. Mobile: form directly below the hero.
 */
export default function HeroDawn() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('[data-layer="sun"]', { yPercent: -14, ease: 'none', scrollTrigger: st });
      gsap.to('[data-layer="city"]', { yPercent: 6, ease: 'none', scrollTrigger: st });
      gsap.to('[data-hero-copy]', { yPercent: -18, opacity: 0.2, ease: 'none', scrollTrigger: st });
    },
    { scope: root }
  );

  return (
    <>
      <Box
        component="section"
        ref={root}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 'auto', md: '100svh' },
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          background:
            'linear-gradient(180deg, #040F24 0%, #0A2550 34%, #3A3468 56%, #A34E4A 72%, #E2702C 86%, #F6A53A 100%)',
        }}
      >
        {/* readability scrim behind the copy */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(180deg, rgba(4,15,36,0.55) 0%, rgba(4,15,36,0.1) 55%, transparent 70%)',
              md: 'linear-gradient(90deg, rgba(4,15,36,0.6) 0%, rgba(4,15,36,0.15) 50%, transparent 70%)',
            },
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            pt: { xs: 12, md: 12 },
            pb: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
              gap: { md: 8 },
              alignItems: 'center',
            }}
          >
            <Box data-hero-copy>
              <Typography
                variant="overline"
                component="p"
                className="ss-fade ss-reveal-after-intro"
                sx={{ color: '#FDBA2C', mb: 2, display: 'block' }}
              >
                PM Surya Ghar subsidy up to ₹78,000
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '3.4rem', sm: '4.5rem', md: 'clamp(3.6rem, 9.5vh, 5.6rem)' },
                  lineHeight: 0.98,
                  mb: 3,
                }}
              >
                <SplitReveal
                  afterIntro
                  segments={[
                    { text: 'Your roof,', br: true },
                    { text: 'awake.', accent: true },
                  ]}
                />
              </Typography>
              <Typography
                className="ss-fade ss-reveal-after-intro"
                style={{ ['--d' as string]: '0.35s' }}
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: { xs: '1.08rem', md: '1.25rem' },
                  maxWidth: 520,
                  mb: 4,
                }}
              >
                Rooftop solar for homes, societies and businesses across Maharashtra — designed,
                installed and subsidy-filed by one team.
              </Typography>

              <Stack
                direction="row"
                useFlexGap
                spacing={1.5}
                sx={{ flexWrap: 'wrap', mb: 4 }}
                className="ss-fade ss-reveal-after-intro"
                style={{ ['--d' as string]: '0.5s' }}
              >
                <Magnetic>
                  <Button
                    variant="contained"
                    size="large"
                    href="#calculator"
                    sx={{ display: { xs: 'none', md: 'inline-flex' }, px: 3.5 }}
                  >
                    Calculate my savings
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    href="#quote-mobile"
                    endIcon={<ArrowDownward />}
                    sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                  >
                    Get my free quote
                  </Button>
                </Magnetic>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  href={`tel:${BUSINESS.phoneE164}`}
                  onClick={() => trackContact('call', 'hero')}
                  sx={{
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.45)',
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  {BUSINESS.phoneDisplay}
                </Button>
              </Stack>

              <Box
                className="ss-fade ss-reveal-after-intro"
                style={{ ['--d' as string]: '0.65s' }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <TrustBadges inverted />
              </Box>
            </Box>

            {/* Desktop form */}
            <Box
              className="ss-fade ss-reveal-after-intro"
              style={{ ['--d' as string]: '0.45s' }}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Paper
                id="quote"
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  boxShadow: '0 40px 80px -30px rgba(0,0,0,0.55)',
                }}
              >
                <LeadForm
                  compact
                  source="hero_form"
                  title="Get your free solar quote"
                  subtitle="Free site survey + subsidy check. We call within 24 hours."
                />
              </Paper>
            </Box>
          </Box>
        </Container>

        {/* Sun + skyline band — in normal flow below the content, so they can never overlap */}
        <Box
          aria-hidden
          sx={{
            position: 'relative',
            flexShrink: 0,
            // ≥ 12.5vw keeps the full 2400×300 drawing (rooftops + whole sun) visible on wide screens.
            height: { xs: 190, md: 'max(170px, min(26vh, 300px), 12.5vw)' },
          }}
        >
          <DawnScene />
        </Box>
      </Box>

      {/* Mobile form, directly under the hero */}
      <Box
        id="quote-mobile"
        sx={{
          display: { md: 'none' },
          px: 2,
          mt: -6,
          position: 'relative',
          zIndex: 1,
          scrollMarginTop: 80,
        }}
      >
        <Paper
          elevation={0}
          sx={{ p: 2.5, borderRadius: 4, boxShadow: '0 24px 48px -24px rgba(6,26,58,0.45)' }}
        >
          <LeadForm
            compact
            source="hero_form_mobile"
            title="Get your free solar quote"
            subtitle="Free site survey + subsidy check. We call within 24 hours."
          />
          <Box sx={{ mt: 2.5, pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <TrustBadges />
          </Box>
        </Paper>
      </Box>
    </>
  );
}
