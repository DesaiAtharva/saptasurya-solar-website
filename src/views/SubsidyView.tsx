'use client';
import React from 'react';
import { Container, Box, Typography, Card, CardContent, Button } from '@mui/material';
import {
  CheckCircle,
  HowToReg,
  Description,
  ElectricMeter,
  AccountBalanceWallet,
  Calculate,
} from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABand from '@/components/ui/CTABand';
import SolarCalculator from '@/components/SolarCalculator/SolarCalculator';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

const SUBSIDY_ROWS = [
  ['1 kW', '₹30,000'],
  ['2 kW', '₹60,000'],
  ['3 kW and above', '₹78,000'],
  ['Housing society (per kW)', '₹18,000'],
];

const OTHER = [
  'PM-KUSUM — subsidised solar pumps for farmers',
  'Net metering with MSEDCL, BEST, Tata Power & Adani Electricity',
  'Businesses: accelerated depreciation tax benefit',
  'Collateral-free solar loans at concessional rates under PM Surya Ghar',
];

const FINANCE = [
  {
    title: 'Solar loans',
    text: 'Concessional loans from public-sector banks under PM Surya Ghar.',
    points: [
      'Collateral-free for small home systems',
      'Long tenure options',
      'Minimal documentation',
    ],
  },
  {
    title: 'EMI options',
    text: 'Spread the cost over easy monthly instalments — often less than your current bill.',
    points: ['Flexible tenure', 'Transparent charges', 'We help with the paperwork'],
  },
];

const STEPS = [
  {
    icon: <HowToReg />,
    title: 'Eligibility & registration',
    text: 'We check eligibility and register you on the PM Surya Ghar national portal.',
  },
  {
    icon: <Description />,
    title: 'Documents & approval',
    text: 'We prepare documents and get DISCOM feasibility approval.',
  },
  {
    icon: <ElectricMeter />,
    title: 'Install & net meter',
    text: 'We install your system and get the net meter installed.',
  },
  {
    icon: <AccountBalanceWallet />,
    title: 'Subsidy credited',
    text: 'Subsidy is credited directly to your bank account.',
  },
];

const FAQS = [
  {
    question: 'Who is eligible for the PM Surya Ghar subsidy?',
    answer:
      'Any Indian household with its own roof and an electricity connection in the applicant’s name, which has not already availed a rooftop solar subsidy. Housing societies can claim it for common-area systems.',
  },
  {
    question: 'How long does it take to receive the subsidy?',
    answer:
      'Usually 30–60 days after your system is commissioned and the net meter is installed. We follow up on your behalf until it is credited.',
  },
  {
    question: 'Which documents do I need?',
    answer:
      'Latest electricity bill, Aadhaar card, cancelled cheque or bank passbook, property ownership proof (or society NOC) and a passport-size photo.',
  },
  {
    question: 'Can I get the subsidy for a hybrid system with batteries?',
    answer:
      'Yes. The subsidy is calculated on the solar panel capacity; batteries are not subsidised.',
  },
];

const Subsidy = () => {
  return (
    <Box>
      <PageHero
        eyebrow="PM Surya Ghar Muft Bijli Yojana"
        title="Get up to ₹78,000 subsidy on rooftop solar"
        subtitle="The government pays the subsidy directly into your bank account. We handle registration, documents, net metering and follow-up — you just enjoy lower bills."
        actions={
          <Button variant="contained" size="large" href="#calculator" startIcon={<Calculate />}>
            Calculate My Subsidy
          </Button>
        }
        aside={
          <Card sx={{ bgcolor: 'background.paper' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 1 }} color="text.primary">
                Subsidy amounts
              </Typography>
              {SUBSIDY_ROWS.map(([k, v], i) => (
                <Box
                  key={k}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderTop: i ? 1 : 0,
                    borderColor: 'divider',
                  }}
                >
                  <Typography color="text.secondary">{k}</Typography>
                  <Typography sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.15rem' }}>
                    {v}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        }
      />

      <SolarCalculator
        title="Calculate your subsidy and savings"
        subtitle="See your system size, exact subsidy, and what the system costs you after the subsidy."
      />

      {/* Process */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="How we help" title="We take care of the entire subsidy process" />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            }}
          >
            {STEPS.map((s, i) => (
              <Card key={s.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: 'primary.main', '& svg': { fontSize: 32 } }}>{s.icon}</Box>
                    <Typography
                      sx={{ fontWeight: 800, color: 'text.disabled', fontSize: '1.5rem' }}
                    >
                      0{i + 1}
                    </Typography>
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

      {/* Other schemes + finance */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 5, md: 8 },
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            }}
          >
            <Box>
              <SectionHeader
                align="left"
                eyebrow="More benefits"
                title="Farms, businesses & net metering"
                mb={3}
              />
              <Box sx={{ display: 'grid', gap: 1.5 }}>
                {OTHER.map((o) => (
                  <Box key={o} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                    <CheckCircle sx={{ color: 'success.main', mt: 0.25 }} />
                    <Typography>{o}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <SectionHeader align="left" eyebrow="Finance" title="Easy financing options" mb={3} />
              <Box sx={{ display: 'grid', gap: 2 }}>
                {FINANCE.map((f) => (
                  <Card key={f.title}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" component="h3">
                        {f.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                        {f.text}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {f.points.map((p) => (
                          <Box key={p} sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
                            <CheckCircle sx={{ color: 'success.main', fontSize: 16 }} />
                            <Typography variant="body2">{p}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.alt' }}>
        <FAQAccordion faqs={FAQS} title="Subsidy questions, answered" />
      </Box>

      <CTABand source="subsidy_cta" title="Check your subsidy eligibility today" />
    </Box>
  );
};

export default Subsidy;
