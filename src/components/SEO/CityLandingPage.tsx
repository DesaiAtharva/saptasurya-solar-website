'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  CheckCircle,
  WbSunny,
  Bolt,
  Savings,
  Phone,
  WhatsApp,
  EmojiEvents,
  ElectricMeter,
  Thermostat,
} from '@mui/icons-material';
import JsonLd from './JsonLd';
import Breadcrumbs from '../Navigation/Breadcrumbs';
import LeadForm from '../LeadForm/LeadForm';
import SolarCalculator from '../SolarCalculator/SolarCalculator';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import PageHero from '../ui/PageHero';
import SectionHeader from '../ui/SectionHeader';
import CTABand from '../ui/CTABand';
import { City, REGIONS, nearbyCities, CITIES } from '@/data/cities';
import { BUSINESS, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';

const MAJOR = [
  'pune',
  'mumbai',
  'nagpur',
  'nashik',
  'thane',
  'chhatrapati-sambhajinagar',
  'kolhapur',
  'solapur',
];

export default function CityLandingPage({ city }: { city: City }) {
  const theme = useMuiTheme();
  const region = REGIONS[city.region];
  const cityName = city.name;
  const discomText = city.discoms.join(' / ');
  const nearby = nearbyCities(city);
  const others = CITIES.filter((c) => c.region !== city.region && MAJOR.includes(c.slug));

  const iconBox = {
    width: 48,
    height: 48,
    borderRadius: 3,
    display: 'grid',
    placeItems: 'center',
    bgcolor: theme.palette.mode === 'dark' ? 'rgba(249,115,22,0.14)' : '#FFF1E6',
    color: 'primary.main',
    mb: 2,
  } as const;

  const faqs = [
    {
      question: `What is the cost of a rooftop solar system in ${cityName}?`,
      answer: `A 3 kW home system in ${cityName} costs about ₹2,25,000 before subsidy. After the PM Surya Ghar subsidy of ₹78,000, your net cost is about ₹1,47,000. The exact price depends on panel brand, inverter and roof type — we confirm it after a free site survey.`,
    },
    {
      question: `Is PM Surya Ghar subsidy available in ${cityName}?`,
      answer: `Yes. Homeowners in ${cityName} get ₹30,000/kW for the first 2 kW and ₹18,000 for the 3rd kW — up to ₹78,000. Housing societies get ₹18,000/kW for common-area systems. We register you on the national portal and handle all the paperwork.`,
    },
    {
      question: `Who handles net metering in ${cityName}?`,
      answer: `In ${cityName}, net metering is approved by ${discomText}. We prepare the application, coordinate the site inspection and get your bi-directional net meter installed, so extra units are credited to your bill.`,
    },
    {
      question: `How much electricity will solar generate in ${cityName}?`,
      answer: `In the ${region.name} region, each 1 kW of panels generates about ${region.unitsPerKwDay} units per day on average — roughly 115–140 units a month. A 3 kW system can cover a ₹3,000 – ₹4,000 monthly bill.`,
    },
    {
      question: `How long does solar installation take in ${cityName}?`,
      answer: `Physical installation takes 1–2 days. Including subsidy registration and net-meter approval from ${city.discoms[0]}, the full process usually takes 3–6 weeks.`,
    },
  ];

  const services = [
    {
      icon: <WbSunny />,
      title: 'Rooftop Solar',
      desc: 'On-grid, hybrid and off-grid systems for homes, societies and businesses.',
    },
    { icon: <Bolt />, title: 'Solar Water Heater', desc: 'Save up to 70% on water heating costs.' },
    {
      icon: <Savings />,
      title: 'Solar Pump',
      desc: 'PM-KUSUM subsidised solar pumps for agriculture.',
    },
    {
      icon: <EmojiEvents />,
      title: 'EPC & AMC',
      desc: 'Commercial projects and yearly maintenance contracts.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Free site survey',
      desc: `Our engineer visits your property in ${cityName} to check roof strength, shadow-free area and consumption.`,
    },
    {
      step: '02',
      title: 'Design & quote',
      desc: 'Custom system design with generation estimate, price and subsidy — no hidden costs.',
    },
    {
      step: '03',
      title: 'Subsidy registration',
      desc: 'We register your application on the PM Surya Ghar national portal.',
    },
    {
      step: '04',
      title: 'Installation',
      desc: `Our team installs in 1–2 days, with structures suited to ${region.name}'s climate.`,
    },
    {
      step: '05',
      title: 'Net metering',
      desc: `We coordinate with ${discomText} for inspection and net-meter installation.`,
    },
    {
      step: '06',
      title: 'Subsidy credited',
      desc: 'Subsidy is credited directly to your bank account after commissioning.',
    },
  ];

  const facts = [
    {
      icon: <WbSunny />,
      label: 'Solar generation',
      value: region.unitsPerKwDay,
      note: 'units per kW per day (yearly average)',
    },
    {
      icon: <ElectricMeter />,
      label: 'Net metering by',
      value: discomText,
      note: 'We file the application & coordinate inspection.',
    },
    { icon: <Thermostat />, label: 'Most popular here', value: '', note: region.popular },
  ];

  return (
    <Box>
      <JsonLd city={cityName} servicesOnly />

      <PageHero
        eyebrow={`Serving ${cityName} · ${city.district} district`}
        title={`Solar panel installation in ${cityName}`}
        subtitle={
          <>
            Rooftop solar with up to <b>₹78,000 PM Surya Ghar subsidy</b>. We handle the survey,
            installation, subsidy paperwork and {discomText} net metering — end to end.
            {city.note && (
              <Box component="span" sx={{ display: 'block', mt: 1.5 }}>
                {city.note}
              </Box>
            )}
          </>
        }
        actions={
          <>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackContact('call', 'city_hero')}
            >
              {BUSINESS.phoneDisplay}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              href={whatsappLink(
                `Hi Saptasurya Solar, I'm interested in solar panel installation in ${cityName}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact('whatsapp', 'city_hero')}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.45)',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
              }}
            >
              WhatsApp
            </Button>
          </>
        }
        aside={
          <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 4 }}>
            <LeadForm
              compact
              source="city_page"
              defaultCity={cityName}
              title={`Free solar quote in ${cityName}`}
              subtitle="Our engineer will call you within 24 hours."
            />
          </Paper>
        }
      />
      <Breadcrumbs
        items={[{ label: 'Solar Installation', path: '/services' }, { label: cityName }]}
      />

      {/* Local facts */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Local insight"
            title={`Solar in ${cityName}: what you should know`}
            subtitle={`${cityName} is in the ${region.name} region, which has ${region.climate}. Here is how that shapes your solar system.`}
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {facts.map((f) => (
              <Card key={f.label} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={iconBox}>{f.icon}</Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                    {f.label}
                  </Typography>
                  {f.value && (
                    <Typography
                      sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'text.primary', my: 0.5 }}
                    >
                      {f.value}
                    </Typography>
                  )}
                  <Typography color="text.secondary" sx={{ fontWeight: f.value ? 400 : 600 }}>
                    {f.note}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Card sx={{ mt: 3 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2.5 }}>
                How we build systems for {region.name}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gap: 1.75,
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                }}
              >
                {region.advice.map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                    <CheckCircle sx={{ color: 'success.main', mt: 0.25 }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.alt' }}>
        <SolarCalculator
          title={`Solar savings calculator for ${cityName}`}
          defaultCity={cityName}
        />
      </Box>

      {/* Process */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="Our process" title={`How we install solar in ${cityName}`} />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {process.map((p) => (
              <Card key={p.step} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.4rem', mb: 1 }}
                  >
                    {p.step}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Services */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
        <Container maxWidth="lg">
          <SectionHeader eyebrow="Services" title={`Our solar services in ${cityName}`} />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            }}
          >
            {services.map((s) => (
              <Card key={s.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={iconBox}>{s.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <FAQAccordion faqs={faqs} title={`Solar FAQs for ${cityName}`} />

      <CTABand source="city_cta" title={`Get a free solar quote in ${cityName}`} />

      {/* Internal linking — nearby cities first */}
      <Box component="section" sx={{ pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h6" component="h2" sx={{ mb: 2.5, textAlign: 'center' }}>
            Solar installation near {cityName}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {[...nearby, ...others].map((c) => (
              <Chip
                key={c.slug}
                label={c.name}
                component="a"
                href={`/solar-installation-${c.slug}`}
                clickable
                variant="outlined"
                sx={{ '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
