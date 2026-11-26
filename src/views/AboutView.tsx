'use client';
import React from 'react';
import { Container, Box, Typography, Card, CardContent, Button } from '@mui/material';
import {
  Flag,
  Visibility,
  Savings,
  EnergySavingsLeaf,
  Build,
  AccountBalance,
  Bolt,
  TrendingUp,
  VerifiedUser,
  Handshake,
  SupportAgent,
} from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';

const STATS = [
  { value: '100+', label: 'Happy customers' },
  { value: '950 kW+', label: 'Solar capacity installed' },
  { value: '5+', label: 'Years of experience' },
  { value: '36', label: 'Districts served' },
];

const MISSION = [
  {
    icon: <Flag />,
    title: 'Our mission',
    text: 'To make clean, affordable solar energy accessible to every home, society, business and farm in Maharashtra — with honest advice and quality workmanship.',
  },
  {
    icon: <Visibility />,
    title: 'Our vision',
    text: "To be Maharashtra's most trusted solar partner, helping thousands of families become energy independent and building a greener future for the next generation.",
  },
];

const WHY_SOLAR = [
  {
    icon: <Savings />,
    title: 'Save money',
    text: 'Cut electricity bills by up to 80% with a payback of about 3–5 years.',
  },
  {
    icon: <EnergySavingsLeaf />,
    title: 'Clean energy',
    text: 'Zero-emission power that reduces your carbon footprint every day.',
  },
  {
    icon: <Build />,
    title: 'Low maintenance',
    text: 'Just periodic cleaning — panels last 25+ years.',
  },
  {
    icon: <AccountBalance />,
    title: 'Government support',
    text: 'Up to ₹78,000 PM Surya Ghar subsidy for homes.',
  },
  {
    icon: <Bolt />,
    title: 'Energy independence',
    text: 'Protection from rising tariffs and, with hybrid systems, power cuts.',
  },
  {
    icon: <TrendingUp />,
    title: 'Higher property value',
    text: 'Solar-powered homes are more attractive to buyers and tenants.',
  },
];

const WHY_US = [
  {
    icon: <VerifiedUser />,
    title: 'Quality you can verify',
    text: 'Itemised quotes naming every brand and spec, with full manufacturer warranties.',
  },
  {
    icon: <Handshake />,
    title: 'End-to-end ownership',
    text: 'Survey, design, installation, subsidy and net metering — one team, one point of contact.',
  },
  {
    icon: <SupportAgent />,
    title: 'Here after installation',
    text: 'Local service team for cleaning, AMC and quick support for the life of your system.',
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

const About = () => {
  const { openPopup } = useLeadPopup();

  return (
    <Box>
      <PageHero
        eyebrow="About Saptasurya Solar"
        title="Powering Maharashtra with the strength of seven suns"
        subtitle="In Indian tradition, Surya's chariot is drawn by seven horses — Saptasurya. We bring that same energy to every rooftop we power: reliable, clean and built to last."
        actions={
          <Button variant="contained" size="large" onClick={() => openPopup('about_hero')}>
            Get a Free Quote
          </Button>
        }
      />

      {/* Stats strip */}
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -5 }, position: 'relative' }}>
        <Card sx={{ boxShadow: '0 20px 40px -24px rgba(11,42,91,0.35)' }}>
          <Box
            sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}
          >
            {STATS.map((s, i) => (
              <Box
                key={s.label}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  textAlign: 'center',
                  borderLeft: { md: i ? 1 : 0 },
                  borderTop: { xs: i > 1 ? 1 : 0, md: 0 },
                  borderColor: { xs: 'divider', md: 'divider' },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.6rem', md: '2.1rem' },
                    color: 'primary.main',
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Container>

      {/* Story + mission */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box>
              <SectionHeader
                align="left"
                eyebrow="Who we are"
                title="A Pune-based solar team serving all of Maharashtra"
                mb={3}
              />
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Saptasurya Solar Energy designs and installs rooftop solar systems, solar water
                heaters and solar pumps for homes, housing societies, businesses and farms. From our
                office in Hadapsar, Pune, our teams serve customers across all 36 districts of the
                state.
              </Typography>
              <Typography color="text.secondary">
                We believe going solar should be simple and transparent. That is why we handle
                everything — from the free site survey and system design to PM Surya Ghar subsidy
                filing and net-meter approval with your electricity company — so you just enjoy
                lower bills.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gap: 3 }}>
              {MISSION.map((m) => (
                <Card key={m.title}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={iconBox}>{m.icon}</Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                      {m.title}
                    </Typography>
                    <Typography color="text.secondary">{m.text}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why solar */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Why go solar"
            title="Six reasons Maharashtra is switching to solar"
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {WHY_SOLAR.map((w) => (
              <Card key={w.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={iconBox}>{w.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {w.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why us */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="Why choose us" title="What makes Saptasurya different" />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {WHY_US.map((w) => (
              <Box key={w.title} sx={{ p: 1 }}>
                <Box
                  sx={{ ...iconBox, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
                >
                  {w.icon}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                  {w.title}
                </Typography>
                <Typography color="text.secondary">{w.text}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <CTABand source="about_cta" />
    </Box>
  );
};

export default About;
