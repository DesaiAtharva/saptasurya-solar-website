'use client';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Verified, Security, Speed, Handyman } from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';
import CaseStudyCard, { CaseStudy } from '@/components/CaseStudyCard/CaseStudyCard';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';

// TODO: replace with real Saptasurya projects & photos.
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: 'Luxury Villa Solar Setup',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80',
    location: 'Baner, Pune',
    capacity: '12 KW',
    savings: '₹55,000/year',
    description:
      'High-aesthetic rooftop solar installation integrated seamlessly with modern villa architecture.',
    category: 'Residential',
  },
  {
    id: 2,
    title: 'Textile Factory Plant',
    image:
      'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=900&q=80',
    location: 'Chakan MIDC, Pune',
    capacity: '150 KW',
    savings: '₹6,75,000/year',
    description:
      'Large-scale industrial solar solutions reducing carbon footprint for a major textile manufacturer.',
    category: 'Industrial',
  },
  {
    id: 3,
    title: 'IT Park Rooftop Array',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    location: 'Hinjewadi IT Park, Pune',
    capacity: '80 KW',
    savings: '₹3,60,000/year',
    description:
      'Dual-purpose solar terrace providing sustainable energy and shade for corporate employees.',
    category: 'Commercial',
  },
  {
    id: 4,
    title: 'Orchard Irrigation System',
    image:
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80',
    location: 'Baramati District',
    capacity: '7.5 HP',
    savings: '₹85,000/year',
    description: 'Solar-powered irrigation pump system for a large-scale pomegranate orchard.',
    category: 'Agricultural',
  },
  {
    id: 5,
    title: 'Housing Society Project',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80',
    location: 'Wakad, Pune',
    capacity: '40 KW',
    savings: '₹1,80,000/year',
    description:
      'Cooperative housing society switch to solar for all common area lighting and elevators.',
    category: 'Residential',
  },
  {
    id: 6,
    title: 'Logistics Center Hybrid',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    location: 'Talegaon MIDC',
    capacity: '60 KW',
    savings: '₹2,70,000/year',
    description:
      'Hybrid solar system with emergency battery backup for critical cold-storage logistics.',
    category: 'Industrial',
  },
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural'];

const STANDARDS = [
  {
    icon: <Verified />,
    title: 'Trained installers',
    text: 'Every project executed by our trained and supervised team.',
  },
  {
    icon: <Security />,
    title: '25-year warranty',
    text: 'Panels with long-term performance warranties from established brands.',
  },
  {
    icon: <Speed />,
    title: 'High efficiency',
    text: 'Modern Mono PERC / TOPCon panels with 20–22%+ efficiency.',
  },
  {
    icon: <Handyman />,
    title: 'Quality execution',
    text: 'Weather-resistant structures and proper electrical protection.',
  },
];

const Portfolio = () => {
  const [category, setCategory] = useState('All');
  const { openPopup } = useLeadPopup();
  const list =
    category === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === category);

  return (
    <Box>
      <PageHero
        eyebrow="Our work"
        title="Solar projects across Maharashtra"
        subtitle="Homes, housing societies, factories and farms — see how our customers are saving with solar."
        actions={
          <Button variant="contained" size="large" onClick={() => openPopup('portfolio_hero')}>
            Start Your Project
          </Button>
        }
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5, overflowX: 'auto' }}>
            <ToggleButtonGroup
              exclusive
              value={category}
              onChange={(_, v) => v && setCategory(v)}
              color="primary"
              size="small"
              sx={{
                gap: 1,
                '& .MuiToggleButton-root': {
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: '999px !important',
                  px: 2.5,
                  fontWeight: 700,
                },
              }}
            >
              {CATEGORIES.map((c) => (
                <ToggleButton key={c} value={c}>
                  {c}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {list.map((c) => (
              <CaseStudyCard key={c.id} caseStudy={c} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="Installation standards" title="Built right, built to last" />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            }}
          >
            {STANDARDS.map((s) => (
              <Card key={s.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 1.5, '& svg': { fontSize: 32 } }}>
                    {s.icon}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <CTABand source="portfolio_cta" />
    </Box>
  );
};

export default Portfolio;
