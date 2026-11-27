'use client';
import React, { useMemo, useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  InputAdornment,
  Divider,
} from '@mui/material';
import { Home as HomeIcon, Apartment, Storefront, Agriculture } from '@mui/icons-material';
import { calculateSolar, inr, PropertyType } from '@/lib/solarCalc';
import LeadForm from '@/components/LeadForm/LeadForm';
import SectionHeader from '@/components/ui/SectionHeader';
import { trackEvent } from '@/lib/analytics';

const TYPES: { value: PropertyType; label: string; icon: React.ReactElement }[] = [
  { value: 'home', label: 'Home', icon: <HomeIcon fontSize="small" /> },
  { value: 'society', label: 'Society', icon: <Apartment fontSize="small" /> },
  { value: 'commercial', label: 'Business', icon: <Storefront fontSize="small" /> },
  { value: 'farm', label: 'Farm', icon: <Agriculture fontSize="small" /> },
];

interface Props {
  title?: string;
  subtitle?: string;
  defaultCity?: string;
  id?: string;
}

export default function SolarCalculator({
  title = 'How much can you save with solar?',
  subtitle = 'Move the slider to your average monthly bill to see your system size, subsidy and savings.',
  defaultCity,
  id = 'calculator',
}: Props) {
  const [bill, setBill] = useState(3000);
  const [type, setType] = useState<PropertyType>('home');
  const [touched, setTouched] = useState(false);
  const r = useMemo(() => calculateSolar(bill, type), [bill, type]);
  const maxBill = type === 'home' ? 20000 : 200000;

  const markUsed = () => {
    if (!touched) {
      setTouched(true);
      trackEvent('calculator_used');
    }
  };

  const row = (label: string, value: string, strong = false) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.1 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: strong ? 800 : 600, color: strong ? 'primary.main' : 'text.primary' }}
      >
        {value}
      </Typography>
    </Box>
  );

  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 80 }}>
      <Container maxWidth="lg">
        <SectionHeader eyebrow="Savings calculator" title={title} subtitle={subtitle} />
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1.35fr 1fr' } }}>
          {/* Inputs + results */}
          <Paper
            elevation={0}
            sx={{ p: { xs: 2.5, md: 4 }, border: 1, borderColor: 'divider', borderRadius: 4 }}
          >
            <Typography sx={{ fontWeight: 700, mb: 1.25 }}>1. Property type</Typography>
            <ToggleButtonGroup
              exclusive
              fullWidth
              color="primary"
              value={type}
              onChange={(_, v) => {
                if (v) {
                  setType(v);
                  setBill((b) => Math.min(b, v === 'home' ? 20000 : 200000));
                  markUsed();
                }
              }}
              sx={{
                mb: 4,
                gap: 1,
                '& .MuiToggleButton-root': {
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: '10px !important',
                  py: 1.1,
                  gap: 0.75,
                  fontWeight: 700,
                },
              }}
            >
              {TYPES.map((t) => (
                <ToggleButton key={t.value} value={t.value} aria-label={t.label}>
                  {t.icon}
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    {t.label}
                  </Box>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}
            >
              <Typography sx={{ fontWeight: 700 }}>2. Average monthly bill</Typography>
              <TextField
                size="small"
                type="number"
                value={bill}
                onChange={(e) => {
                  setBill(Math.max(0, Number(e.target.value) || 0));
                  markUsed();
                }}
                InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
                inputProps={{ 'aria-label': 'Monthly bill in rupees', min: 0 }}
                sx={{ width: 150, '& input': { fontWeight: 700 } }}
              />
            </Box>
            <Slider
              value={Math.min(bill, maxBill)}
              min={500}
              max={maxBill}
              step={type === 'home' ? 100 : 1000}
              onChange={(_, v) => {
                setBill(v as number);
                markUsed();
              }}
              aria-label="Monthly bill"
              sx={{ mb: 3 }}
            />

            {/* Headline results */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'background.brand',
                color: '#fff',
                mb: 2.5,
              }}
            >
              {[
                ['System size', `${r.systemKw} kW`],
                ['You save / month', inr(r.monthlySavings)],
                ['Payback', `${r.paybackYears} yrs`],
              ].map(([k, v], i) => (
                <Box
                  key={k}
                  sx={{
                    p: { xs: 1.75, md: 2.5 },
                    borderLeft: i ? '1px solid rgba(255,255,255,0.12)' : 0,
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.75, fontWeight: 600 }}>
                    {k}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.15rem', md: '1.6rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {v}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                columnGap: 4,
              }}
            >
              <Box>
                {row('Approx. system cost', inr(r.grossCost))}
                {row(
                  'Government subsidy',
                  r.subsidy ? `− ${inr(r.subsidy)}` : 'Not applicable',
                  !!r.subsidy
                )}
                <Divider />
                {row('Your cost after subsidy', inr(r.netCost), true)}
              </Box>
              <Box>
                {row('Roof area needed', `~${r.roofSqft} sq ft`)}
                {row('25-year savings', inr(r.lifetimeSavings), true)}
                <Divider />
                {row('CO₂ avoided / year', `${r.co2TonnesPerYear} tonnes`)}
              </Box>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2.5 }}>
              Indicative estimate. Subsidy as per PM Surya Ghar Muft Bijli Yojana (homes: up to
              ₹78,000; housing societies: ₹18,000/kW for common areas).
              {type === 'farm' &&
                ' Farm solar pumps are covered under PM-KUSUM — ask us about eligibility.'}
              {type === 'commercial' &&
                ' Businesses can claim accelerated depreciation tax benefits.'}{' '}
              Final price depends on site survey and chosen brands.
            </Typography>
          </Paper>

          {/* Lead capture */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: 4,
              border: 2,
              borderColor: 'primary.main',
              alignSelf: 'start',
              position: { md: 'sticky' },
              top: { md: 100 },
            }}
          >
            <LeadForm
              compact
              source="calculator"
              title={`Get an exact quote for your ${r.systemKw} kW system`}
              subtitle="Free site survey — our engineer confirms final price & subsidy."
              submitLabel="Send Me My Quote"
              defaultCity={defaultCity}
              details={{
                bill,
                propertyType: type,
                systemKw: r.systemKw,
                grossCost: r.grossCost,
                subsidy: r.subsidy,
                netCost: r.netCost,
              }}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
