'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme as useMuiTheme,
  Link,
} from '@mui/material';
import {
  CheckCircle,
  WbSunny,
  Bolt,
  Savings,
  Phone,
  WhatsApp,
  LocationOn,
  Star,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import JsonLd from './JsonLd';
import Breadcrumbs from '../Navigation/Breadcrumbs';

interface CityLandingPageProps {
  citySlug: string;
  cityName: string;
}

export default function CityLandingPage({ citySlug, cityName }: CityLandingPageProps) {
  const theme = useMuiTheme();

  const benefits = [
    'Up to 80% reduction in electricity bills',
    'Government subsidy available under PM Surya Ghar scheme',
    '25-year panel performance warranty',
    'Free site survey and detailed proposal',
    'Certified and experienced installation team',
    'On-grid, Off-grid, and Hybrid options',
    'Net metering support and grid connection',
    'AMC and maintenance services available',
  ];

  const services = [
    {
      icon: <WbSunny sx={{ color: theme.palette.primary.main, fontSize: 36 }} />,
      title: 'Rooftop Solar',
      desc: 'Complete rooftop solar system for homes and businesses.',
    },
    {
      icon: <Bolt sx={{ color: theme.palette.primary.main, fontSize: 36 }} />,
      title: 'Solar Water Heater',
      desc: 'Save 70% on water heating costs with solar technology.',
    },
    {
      icon: <Savings sx={{ color: theme.palette.primary.main, fontSize: 36 }} />,
      title: 'Solar Pump',
      desc: 'Government-subsidised solar pumps for agriculture.',
    },
    {
      icon: <EmojiEvents sx={{ color: theme.palette.primary.main, fontSize: 36 }} />,
      title: 'EPC Services',
      desc: 'End-to-end Engineering, Procurement & Construction.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Installed' },
    { number: '80%', label: 'Bill Savings' },
    { number: '25yr', label: 'Warranty' },
    { number: '24/7', label: 'Support' },
  ];

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saptasuryasolar.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solar Installation',
        item: 'https://saptasuryasolar.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityName,
        item: `https://saptasuryasolar.com/solar-installation-${citySlug}`,
      },
    ],
  };

  return (
    <Box>
      <JsonLd city={cityName} />
      <Breadcrumbs
        items={[
          { label: 'Solar Installation', path: '/services' },
          { label: cityName },
        ]}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `What is the cost of solar panels in ${cityName}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Solar system prices in ${cityName} start from ₹75,000 for a 1kW system, depending on the panel type and inverter quality.`,
                },
              },
              {
                '@type': 'Question',
                name: `Is government subsidy available in ${cityName}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Yes, residents in ${cityName} can apply for the PM Surya Ghar Muft Bijli Yojana, which offers significant subsidies for residential rooftop solar installations.`,
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label={`Serving ${cityName}, Maharashtra`}
              color="primary"
              sx={{ mb: 3, fontWeight: 600 }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.15,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Solar Panel Installation
              <br />
              in {cityName}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6, maxWidth: 650 }}
            >
              Maharashtra's trusted solar energy company. Get affordable rooftop solar systems with
              government subsidy in {cityName}.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                href={`https://wa.me/919860874908?text=Hello! I'm interested in solar panel installation in ${cityName}.`}
                target="_blank"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Get Free Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone />}
                href="tel:+919860874908"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Call Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: 'primary.main', py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {stats.map((s) => (
              <Grid item xs={6} md={3} key={s.label} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.contrastText' }}>
                  {s.number}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.7)', fontWeight: 600 }}>
                  {s.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 6, textAlign: 'center' }}>
            Our Solar Installation Process in {cityName}
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Site Survey',
                desc: 'Our experts visit your property in {cityName} to assess roof strength, shadow-free area, and electricity consumption patterns.',
              },
              {
                step: '02',
                title: 'System Design',
                desc: 'We create a customized engineering design for your rooftop solar plant, optimizing for maximum sunlight capture and efficiency.',
              },
              {
                step: '03',
                title: 'Quality Procurement',
                desc: 'We source high-efficiency monocrystalline PERC panels and premium inverters from top-tier global manufacturers.',
              },
              {
                step: '04',
                title: 'Professional Install',
                desc: 'Our certified team carries out the heavy-duty mounting and electrical wiring to ensure 25+ years of trouble-free operation.',
              },
              {
                step: '05',
                title: 'Net Metering',
                desc: 'We handle all the documentation and coordination with MSEDCL/BEST/Adani for the net metering process in {cityName}.',
              },
              {
                step: '06',
                title: 'Commissioning',
                desc: 'Your system goes live! We monitor the initial performance and hand over a complete maintenance guide to you.',
              },
            ].map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.step}>
                <Box sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="h3" sx={{ color: 'primary.main', opacity: 0.3, fontWeight: 800, mb: 2 }}>
                    {p.step}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {p.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {p.desc.replace('{cityName}', cityName)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Savings & ROI Section */}
      <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
            Solar ROI & Savings in {cityName}
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            A typical 3kW solar system in {cityName} can save you over ₹4,000 per month on electricity bills.
          </Typography>
          <Grid container spacing={4}>
            {[
              { label: 'Starting Price', value: '₹75,000/kW' },
              { label: 'Payback Period', value: '3.5 - 5 Years' },
              { label: '25-Year Savings', value: '₹8,00,000+' },
              { label: 'Property Value', value: '+4% Increase' },
            ].map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9 }}>
              With solar prices in {cityName} starting from just ₹75,000, and generous government subsidies under the PM Surya Ghar scheme, 
              the return on investment is at an all-time high. A solar plant is not just an expense; it is a financial asset that 
              provides inflation-free electricity for over 25 years.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Maintenance & Tips */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box component="img" 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80" 
                sx={{ width: '100%', borderRadius: 4, boxShadow: 10 }} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>
                Maintaining Your Solar Plant in {cityName}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                Maharashtra's changing seasons—from dusty summers to heavy monsoons—require professional care. 
                In {cityName}, we recommend a bi-weekly cleaning schedule to prevent dust accumulation, which can 
                reduce your solar generation by up to 20%.
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Automatic Solar Cleaning Systems available.',
                  'Professional structure health checks every 6 months.',
                  'Real-time app-based generation monitoring.',
                  'Lightning arresters and SPD for monsoon safety.',
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <CheckCircle sx={{ color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{ py: 8, bgcolor: 'background.paper', borderTop: `1px solid ${theme.palette.divider}` }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, textAlign: 'center' }}>
            Our Solar Services in {cityName}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 6, maxWidth: 550, mx: 'auto' }}
          >
            Complete solar energy solutions tailored for {cityName} residents and businesses.
          </Typography>
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={3} key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{s.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {s.title}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {s.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        }}
      >
        <Container maxWidth="md">
          <Star sx={{ fontSize: 48, color: 'white', mb: 2 }} />
          <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.contrastText', mb: 2 }}>
            Get a Free Solar Quote in {cityName}
          </Typography>
          <Typography sx={{ color: 'rgba(0,0,0,0.75)', mb: 4, fontSize: '1.1rem' }}>
            Our expert team will analyse your roof, calculate savings, and provide a transparent
            proposal — completely free.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              href={`https://wa.me/919860874908?text=Hi, I need solar installation in ${cityName}.`}
              target="_blank"
              sx={{
                bgcolor: '#ffffff',
                color: theme.palette.primary.dark,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              WhatsApp Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LocationOn />}
              href="/contact"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              View Contact Details
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Internal City Linking — helps Google crawl all city pages */}
      <Box sx={{ py: 6, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
            Solar Installation Across Maharashtra
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
            We serve all districts and major cities in Maharashtra
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {[
              { label: 'Pune', slug: 'pune' },
              { label: 'Nagpur', slug: 'nagpur' },
              { label: 'Mumbai', slug: 'mumbai' },
              { label: 'Nashik', slug: 'nashik' },
              { label: 'Chhatrapati Sambhajinagar', slug: 'chhatrapati-sambhajinagar' },
              { label: 'Solapur', slug: 'solapur' },
              { label: 'Kolhapur', slug: 'kolhapur' },
              { label: 'Amravati', slug: 'amravati' },
              { label: 'Nanded', slug: 'nanded' },
              { label: 'Sangli', slug: 'sangli' },
              { label: 'Jalgaon', slug: 'jalgaon' },
              { label: 'Satara', slug: 'satara' },
              { label: 'Akola', slug: 'akola' },
              { label: 'Latur', slug: 'latur' },
              { label: 'Thane', slug: 'thane' },
              { label: 'Kalyan', slug: 'kalyan' },
              { label: 'Dombivli', slug: 'dombivli' },
              { label: 'Navi Mumbai', slug: 'navi-mumbai' },
              { label: 'Panvel', slug: 'panvel' },
              { label: 'Ahmednagar', slug: 'ahmednagar' },
              { label: 'Dhule', slug: 'dhule' },
              { label: 'Chandrapur', slug: 'chandrapur' },
              { label: 'Parbhani', slug: 'parbhani' },
              { label: 'Jalna', slug: 'jalna' },
            ]
              .filter((c) => c.slug !== citySlug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/solar-installation-${c.slug}`}
                  underline="hover"
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    color: 'text.secondary',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      bgcolor: `${theme.palette.primary.main}08`,
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {c.label}
                </Link>
              ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
