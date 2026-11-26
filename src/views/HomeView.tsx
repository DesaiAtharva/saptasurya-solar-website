'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import {
  FactCheck,
  DesignServices,
  Construction,
  ElectricMeter,
  CurrencyRupee,
  Verified,
  Engineering,
  SupportAgent,
  Shield,
  Receipt,
} from '@mui/icons-material';
import IntroReveal from '@/components/story/IntroReveal';
import HeroDawn from '@/components/story/HeroDawn';
import SunriseSequence from '@/components/story/SunriseSequence';
import RoofConfigurator from '@/components/story/RoofConfigurator';
import ProjectRail from '@/components/story/ProjectRail';
import type { Project } from '@/data/projects';
import PanelExplode from '@/components/story/PanelExplode';
import SolutionsGrid from '@/components/story/SolutionsGrid';
import type { SequenceSets } from '@/motion/useImageSequence';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';

// Below-the-fold sections are code-split for faster first load on mobile.
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion/FAQAccordion'));

const STEPS = [
  {
    icon: <FactCheck />,
    title: 'Free site survey',
    text: 'We inspect your roof, shading and bills — at no cost.',
  },
  {
    icon: <DesignServices />,
    title: 'Design & quote',
    text: 'A custom design with exact generation, price and subsidy.',
  },
  {
    icon: <Construction />,
    title: 'Installation',
    text: 'Certified team installs your system in 1–2 days.',
  },
  {
    icon: <ElectricMeter />,
    title: 'Net meter & subsidy',
    text: 'We handle DISCOM net metering and your subsidy claim.',
  },
];

const REASONS = [
  {
    icon: <Receipt />,
    title: 'Transparent, itemised quotes',
    text: 'Panel brand, inverter model and structure specs in writing — no hidden costs.',
  },
  {
    icon: <CurrencyRupee />,
    title: 'Subsidy handled for you',
    text: 'We file your PM Surya Ghar application and follow up until it is credited.',
  },
  {
    icon: <Verified />,
    title: 'Quality components',
    text: 'ALMM-listed panels and reputed inverters with full manufacturer warranties.',
  },
  {
    icon: <Engineering />,
    title: 'Engineered for your climate',
    text: 'Structures and protection designed for Konkan rain, Vidarbha heat and Marathwada dust.',
  },
  {
    icon: <Shield />,
    title: 'Workmanship warranty',
    text: '25-year panel performance warranty plus our own installation warranty.',
  },
  {
    icon: <SupportAgent />,
    title: 'Local after-sales service',
    text: 'Quick support, cleaning and AMC plans from our Pune-based team.',
  },
];

const iconBox = {
  width: 48,
  height: 48,
  borderRadius: 3,
  display: 'grid',
  placeItems: 'center',
  bgcolor: (t: { palette: { mode: string } }) =>
    t.palette.mode === 'dark' ? 'rgba(249,115,22,0.14)' : '#FFF1E6',
  color: 'primary.main',
  mb: 2,
} as const;

const Home = ({
  projects,
  panelSequence,
}: {
  projects: Project[];
  panelSequence: SequenceSets;
}) => {
  return (
    <Box>
      <IntroReveal />
      <HeroDawn />
      <SunriseSequence />
      <RoofConfigurator />
      <ProjectRail projects={projects} />
      <PanelExplode sequence={panelSequence} />
      <SolutionsGrid />

      {/* How it works */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="How it works"
            title="From enquiry to free electricity in 4 simple steps"
            subtitle="Most homes are generating solar power within 3–6 weeks, including subsidy and net-meter approvals."
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              counterReset: 'step',
            }}
          >
            {STEPS.map((s, i) => (
              <Box key={s.title} sx={{ position: 'relative' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'secondary.main',
                      color: 'secondary.contrastText',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </Box>
                  {i < STEPS.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        flexGrow: 1,
                        height: 2,
                        bgcolor: 'divider',
                      }}
                    />
                  )}
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Subsidy band */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            <Box>
              <SectionHeader
                align="left"
                eyebrow="Government subsidy"
                title="Get up to ₹78,000 back with PM Surya Ghar"
                subtitle="The central government pays the subsidy directly into your bank account. We register you on the national portal, file every document and follow up until it is credited."
                mb={3}
              />
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" component={Link} href="/subsidy">
                  Check my subsidy
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/blog/solar-subsidy-2026-guide"
                >
                  Read the guide
                </Button>
              </Box>
            </Box>
            <Card>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                {[
                  ['1 kW system', '₹30,000'],
                  ['2 kW system', '₹60,000'],
                  ['3 kW and above', '₹78,000'],
                  ['Housing society (per kW)', '₹18,000'],
                ].map(([k, v], i, arr) => (
                  <Box
                    key={k}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      py: 2,
                      px: 1,
                      borderBottom: i < arr.length - 1 ? 1 : 0,
                      borderColor: 'divider',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>{k}</Typography>
                    <Typography
                      sx={{ fontWeight: 800, fontSize: '1.35rem', color: 'primary.main' }}
                    >
                      {v}
                    </Typography>
                  </Box>
                ))}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', px: 1, pt: 1 }}
                >
                  Central Financial Assistance under PM Surya Ghar Muft Bijli Yojana for residential
                  rooftop solar.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Why us */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Why Saptasurya"
            title="A solar partner you can rely on for 25 years"
            subtitle="Solar is a long-term investment. We focus on doing it right the first time — and being there afterwards."
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {REASONS.map((r) => (
              <Card key={r.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={iconBox}>{r.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {r.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {r.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Testimonials />

      <Box sx={{ bgcolor: 'background.alt' }}>
        <FAQAccordion />
      </Box>

      <CTABand source="home_cta" />
    </Box>
  );
};

export default Home;
