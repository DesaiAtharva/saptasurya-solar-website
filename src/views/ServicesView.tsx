'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';

const SERVICES = [
  {
    id: 'survey',
    title: 'Free site survey & proposal',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    text: 'Our engineer visits your property to understand your consumption, roof and shading — then designs the right system for you.',
    features: [
      'Roof strength & shadow analysis',
      'Consumption & bill review',
      'Custom system design',
      'Generation, ROI & subsidy estimate',
    ],
  },
  {
    id: 'installation',
    title: 'Solar installation',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    text: 'Neat, safe installation by our trained team using quality structures, cabling and protection devices.',
    features: [
      'Galvanised / aluminium mounting structures',
      'Proper earthing & lightning protection',
      'Testing & commissioning',
      'Handover with monitoring app setup',
    ],
  },
  {
    id: 'subsidy',
    title: 'Subsidy & net metering',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    text: 'We handle the paperwork end to end — from PM Surya Ghar registration to net-meter installation by your electricity company.',
    features: [
      'PM Surya Ghar portal registration',
      'Subsidy up to ₹78,000 for homes',
      'Net metering with MSEDCL, BEST, Tata & Adani',
      'Follow-up until subsidy is credited',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & AMC',
    image:
      'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&w=1200&q=80',
    text: 'Keep your system generating at its best with scheduled cleaning, health checks and quick repairs.',
    features: [
      'Scheduled panel cleaning',
      'Electrical & structure health checks',
      'Generation monitoring',
      'Fast fault diagnosis & repair',
    ],
  },
];

const STEPS = [
  ['Consultation', 'Tell us about your needs by phone, WhatsApp or the quote form.'],
  ['Site survey', 'Free on-site assessment of roof, shading and consumption.'],
  ['Proposal', 'Itemised quote with design, generation and subsidy.'],
  ['Installation', 'Completed in 1–2 days by our certified team.'],
  ['Net metering', 'We coordinate DISCOM inspection and net-meter installation.'],
  ['Support', 'Subsidy follow-up, monitoring and after-sales service.'],
];

const Services = () => {
  const { openPopup } = useLeadPopup();

  return (
    <Box>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to go solar — handled by one team"
        subtitle="From the first site visit to the subsidy landing in your bank account, Saptasurya takes care of every step."
        actions={
          <Button variant="contained" size="large" onClick={() => openPopup('services_hero')}>
            Book a Free Site Survey
          </Button>
        }
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 8, md: 12 }}>
            {SERVICES.map((s, i) => (
              <Box
                key={s.id}
                id={s.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 4, md: 8 },
                  alignItems: 'center',
                  scrollMarginTop: 100,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderRadius: 4,
                    overflow: 'hidden',
                    order: { md: i % 2 ? 2 : 1 },
                    boxShadow: '0 24px 48px -28px rgba(11,42,91,0.45)',
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ order: { md: i % 2 ? 1 : 2 } }}>
                  <Typography variant="overline" component="p" color="primary.main">
                    Step {i + 1}
                  </Typography>
                  <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem' }}>
                    {s.text}
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gap: 1.25,
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      mb: 3.5,
                    }}
                  >
                    {s.features.map((f) => (
                      <Box key={f} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <CheckCircle sx={{ color: 'success.main', fontSize: 20, mt: 0.3 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {f}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<ArrowForward />}
                    onClick={() => openPopup(`service_${s.id}`)}
                  >
                    Get a free quote
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="Our process" title="How a Saptasurya project works" />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {STEPS.map(([title, text], i) => (
              <Box
                key={title}
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    fontWeight: 800,
                  }}
                >
                  {i + 1}
                </Box>
                <Box>
                  <Typography variant="h6" component="h3">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <CTABand source="services_cta" />
    </Box>
  );
};

export default Services;
