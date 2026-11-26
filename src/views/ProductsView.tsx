'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';

const PRODUCTS = [
  {
    id: 'rooftop',
    title: 'Rooftop Solar Systems',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80',
    text: 'Complete on-grid, hybrid and off-grid systems for homes, societies and businesses.',
    features: [
      'Net-metering ready',
      'PM Surya Ghar subsidy eligible',
      'Custom design for your roof',
    ],
    capacity: '1 kW – 1 MW+',
  },
  {
    id: 'panels',
    title: 'Solar Panels',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80',
    text: 'High-efficiency Mono PERC, TOPCon and bifacial panels from ALMM-listed manufacturers.',
    features: ['20–22%+ efficiency', '25-year performance warranty', 'Weather & PID resistant'],
    capacity: '440 W – 600 W per panel',
  },
  {
    id: 'inverters',
    title: 'Inverters & Batteries',
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=900&q=80',
    text: 'Reliable string and hybrid inverters with optional lithium battery storage.',
    features: [
      'Wi-Fi app monitoring',
      'Backup during power cuts (hybrid)',
      'Manufacturer warranty',
    ],
    capacity: '1 kW – 100 kW',
  },
  {
    id: 'water-heater',
    title: 'Solar Water Heaters',
    image:
      'https://images.unsplash.com/photo-1618397746666-63405ce5d015?auto=format&fit=crop&w=900&q=80',
    text: 'Hot water all year round while saving up to 70% on water-heating electricity.',
    features: ['ETC & FPC options', 'Low maintenance', 'Quick payback'],
    capacity: '100 L – 500 L',
  },
  {
    id: 'pump',
    title: 'Solar Water Pumps',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    text: 'Daytime irrigation without diesel or grid dependence — ideal for farms.',
    features: ['PM-KUSUM subsidy support', 'Surface & submersible', 'No fuel cost'],
    capacity: '1 HP – 10 HP',
  },
  {
    id: 'epc',
    title: 'Commercial EPC',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    text: 'End-to-end engineering, procurement and construction for commercial & industrial projects.',
    features: ['Detailed engineering', 'Project management', 'Accelerated depreciation benefits'],
    capacity: '10 kW – 1 MW+',
  },
];

const SYSTEMS = [
  {
    title: 'On-grid',
    tag: 'Most popular',
    text: 'Connected to the grid with net metering. Lowest cost and fastest payback.',
    points: [
      'No battery needed',
      'Export extra units for bill credit',
      'Subsidy eligible',
      'Best for cities',
    ],
  },
  {
    title: 'Hybrid',
    tag: 'Power backup',
    text: 'Grid connection plus batteries — savings and backup during power cuts.',
    points: ['Battery backup', 'Net metering', 'Smart switching', 'Best for frequent outages'],
  },
  {
    title: 'Off-grid',
    tag: 'No grid needed',
    text: 'Independent system with batteries for remote sites without reliable grid power.',
    points: ['Full independence', 'Battery storage', 'Remote farms & sites', 'No electricity bill'],
  },
];

const Products = () => {
  const { openPopup } = useLeadPopup();

  return (
    <Box>
      <PageHero
        eyebrow="Products"
        title="Quality solar products, chosen for Indian conditions"
        subtitle="We only install components with strong warranties and local service support — and we name every brand in your quote."
        actions={
          <Button variant="contained" size="large" onClick={() => openPopup('products_hero')}>
            Get a Free Quote
          </Button>
        }
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {PRODUCTS.map((p) => (
              <Card
                key={p.id}
                id={p.id}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  scrollMarginTop: 100,
                  overflow: 'hidden',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '16 / 10' }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
                    style={{ objectFit: 'cover' }}
                  />
                  <Chip
                    label={p.capacity}
                    size="small"
                    sx={{
                      position: 'absolute',
                      left: 12,
                      bottom: 12,
                      bgcolor: 'rgba(6,26,58,0.85)',
                      color: '#fff',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {p.text}
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 1, mb: 3, flexGrow: 1 }}>
                    {p.features.map((f) => (
                      <Box key={f} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                        <Typography variant="body2">{f}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    endIcon={<ArrowForward />}
                    onClick={() => openPopup(`product_${p.id}`)}
                  >
                    Get a quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="System types"
            title="On-grid, hybrid or off-grid?"
            subtitle="Not sure which one suits you? We recommend the right type during your free site survey."
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {SYSTEMS.map((s, i) => (
              <Card
                key={s.title}
                sx={{
                  height: '100%',
                  borderColor: i === 0 ? 'primary.main' : 'divider',
                  borderWidth: i === 0 ? 2 : 1,
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Chip
                    label={s.tag}
                    size="small"
                    color={i === 0 ? 'primary' : 'default'}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2.5 }}>
                    {s.text}
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 1 }}>
                    {s.points.map((p) => (
                      <Box key={p} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                        <Typography variant="body2">{p}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <CTABand source="products_cta" />
    </Box>
  );
};

export default Products;
