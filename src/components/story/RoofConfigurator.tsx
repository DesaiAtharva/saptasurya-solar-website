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
  Button,
} from '@mui/material';
import {
  Home as HomeIcon,
  Apartment,
  Storefront,
  Agriculture,
  SolarPower,
  SquareFoot,
  ArrowForward,
} from '@mui/icons-material';
import { calculateSolar, inr, PropertyType } from '@/lib/solarCalc';
import LeadForm from '@/components/LeadForm/LeadForm';
import { trackEvent } from '@/lib/analytics';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';
import { useTweenNumber } from '@/motion/useTweenNumber';
import { useMediaQueryFlag } from '@/motion/useMediaQuery';
import RoofIllustrations, { ROOF_SLOTS } from './RoofIllustrations';

/* ───────── config ───────── */
const ROOFS: {
  value: PropertyType;
  label: string;
  icon: React.ReactElement;
  maxBill: number;
  step: number;
}[] = [
  { value: 'home', label: 'Home', icon: <HomeIcon fontSize="small" />, maxBill: 20000, step: 100 },
  {
    value: 'society',
    label: 'Society',
    icon: <Apartment fontSize="small" />,
    maxBill: 200000,
    step: 1000,
  },
  {
    value: 'commercial',
    label: 'Business',
    icon: <Storefront fontSize="small" />,
    maxBill: 200000,
    step: 1000,
  },
  {
    value: 'farm',
    label: 'Farm',
    icon: <Agriculture fontSize="small" />,
    maxBill: 20000,
    step: 100,
  },
];
const PANEL_WATTS = 550;
/** System size (kW) at which each illustration's roof is completely covered. */
const FULL_ROOF_KW: Record<PropertyType, number> = {
  home: 10,
  society: 100,
  commercial: 200,
  farm: 15,
};

function filledSlots(type: PropertyType, kw: number, panels: number) {
  const slots = ROOF_SLOTS[type];
  if (type === 'home') return Math.min(slots, panels);
  return Math.max(1, Math.min(slots, Math.round((kw / FULL_ROOF_KW[type]) * slots)));
}

/* ───────── component ───────── */
/**
 * Section 4 — "Pick your roof". Visual wrapper around the existing calculator logic
 * (calculateSolar, unchanged) and the existing quote form.
 */
export default function RoofConfigurator() {
  const { openPopup } = useLeadPopup();
  const [type, setType] = useState<PropertyType>('home');
  const [bill, setBill] = useState(3000);
  const [touched, setTouched] = useState(false);
  const roof = ROOFS.find((r) => r.value === type)!;
  const r = useMemo(() => calculateSolar(bill, type), [bill, type]);
  const panels = Math.ceil((r.systemKw * 1000) / PANEL_WATTS);
  const isPhone = useMediaQueryFlag('(max-width: 599px)');

  const monthly = useTweenNumber(r.monthlySavings);
  const payback = useTweenNumber(r.paybackYears);
  const lifetime = useTweenNumber(r.lifetimeSavings);
  const net = useTweenNumber(r.netCost);

  const markUsed = () => {
    if (!touched) {
      setTouched(true);
      trackEvent('calculator_used', { variant: 'roof_configurator' });
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
    <Box id="calculator" component="section" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 80 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, maxWidth: 720, mx: 'auto' }}>
          <Typography variant="overline" component="p" sx={{ color: 'primary.main', mb: 1 }}>
            Savings calculator
          </Typography>
          <Typography variant="h2">
            Pick your <span className="ss-accent">roof.</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
            Choose your property and move the slider to your monthly bill — watch your roof fill
            with panels and see what you'd save.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1.35fr 1fr' } }}>
          <Paper
            elevation={0}
            sx={{ p: { xs: 2, md: 3 }, border: 1, borderColor: 'divider', borderRadius: 4 }}
          >
            {/* 1. Roof type */}
            <ToggleButtonGroup
              exclusive
              fullWidth
              color="primary"
              value={type}
              onChange={(_, v: PropertyType | null) => {
                if (!v) return;
                setType(v);
                const max = ROOFS.find((x) => x.value === v)!.maxBill;
                setBill((b) => Math.min(b, max));
                markUsed();
              }}
              aria-label="Property type"
              sx={{
                mb: 2,
                gap: 1,
                '& .MuiToggleButton-root': {
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: '10px !important',
                  py: { xs: 0.9, sm: 1.1 },
                  gap: { xs: 0.25, sm: 0.75 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  fontSize: { xs: '0.72rem', sm: '0.875rem' },
                  fontWeight: 700,
                },
              }}
            >
              {ROOFS.map((o) => (
                <ToggleButton key={o.value} value={o.value} aria-label={o.label}>
                  {o.icon}
                  <Box component="span">{o.label}</Box>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            {/* Stage */}
            <Box
              sx={{
                position: 'relative',
                aspectRatio: { xs: '4 / 3', sm: '600 / 330' },
                borderRadius: 3,
                overflow: 'hidden',
                background:
                  'linear-gradient(180deg, #0A2550 0%, #3A3468 45%, #C2603A 80%, #F2A03C 100%)',
                mb: 3,
              }}
            >
              <Box sx={{ position: 'absolute', inset: 0 }}>
                <RoofIllustrations
                  active={type}
                  filled={filledSlots(type, r.systemKw, panels)}
                  zoom={isPhone}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  // Phones: over the ground so the chips never hide the roof panels.
                  top: { xs: 'auto', sm: 12 },
                  bottom: { xs: 10, sm: 'auto' },
                  left: 12,
                  right: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 1,
                  flexWrap: 'wrap',
                }}
              >
                <Chip
                  icon={<SolarPower sx={{ fontSize: 18 }} />}
                  text={
                    isPhone
                      ? `${r.systemKw} kW · ${panels} panels`
                      : `${r.systemKw} kW · ≈${panels} panels`
                  }
                />
                <Chip
                  icon={<SquareFoot sx={{ fontSize: 18 }} />}
                  text={
                    isPhone
                      ? `${r.roofSqft.toLocaleString('en-IN')} sq ft`
                      : `~${r.roofSqft.toLocaleString('en-IN')} sq ft roof`
                  }
                />
              </Box>
            </Box>

            {/* 2. Bill */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
                gap: 2,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Average monthly bill</Typography>
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
              value={Math.min(bill, roof.maxBill)}
              min={500}
              max={roof.maxBill}
              step={roof.step}
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
                mb: 2,
              }}
              aria-live="polite"
            >
              {[
                ['Per month', inr(monthly)],
                ['Payback', `${payback.toFixed(1)} yrs`],
                ['25-yr savings', inr(lifetime)],
              ].map(([k, v], i) => (
                <Box
                  key={k}
                  sx={{
                    p: { xs: 1.5, md: 2.25 },
                    borderLeft: i ? '1px solid rgba(255,255,255,0.12)' : 0,
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.75, fontWeight: 600 }}>
                    {k}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.05rem', md: '1.5rem' },
                      lineHeight: 1.2,
                      fontVariantNumeric: 'tabular-nums',
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
              </Box>
              <Box>
                {row('Your cost after subsidy', inr(net), true)}
                {row('CO₂ avoided / year', `${r.co2TonnesPerYear} tonnes`)}
              </Box>
            </Box>
            {type === 'farm' && (
              // TODO: replace with a dedicated HP-based solar pump calculator
              // (pump HP → cost → PM-KUSUM central/state share → farmer's share).
              <Button
                variant="text"
                onClick={() => openPopup('pm_kusum_link', { propertyType: 'farm' })}
                endIcon={<ArrowForward />}
                sx={{
                  mt: 1,
                  px: 0,
                  fontWeight: 700,
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                }}
              >
                Need a solar water pump instead? Get a PM-KUSUM pump quote
              </Button>
            )}
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
              Indicative estimate. Subsidy as per PM Surya Ghar Muft Bijli Yojana (homes up to
              ₹78,000; housing societies ₹18,000/kW for common areas).
              {type === 'farm' &&
                ' Farm solar pumps are covered under PM-KUSUM — ask us about eligibility.'}
              {type === 'commercial' &&
                ' Businesses can claim accelerated depreciation tax benefits.'}{' '}
              Final price depends on the site survey and chosen brands. Illustration not to scale.
            </Typography>
          </Paper>

          {/* Quote form */}
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
              subtitle="Free site survey — our engineer confirms the final price & subsidy."
              submitLabel="Send Me My Quote"
              defaultPropertyType={type}
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

function Chip({ icon, text }: { icon: React.ReactElement; text: string }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.25,
        py: 0.6,
        borderRadius: 2,
        bgcolor: 'rgba(6,26,58,0.72)',
        color: '#fff',
        fontSize: '0.8rem',
        fontWeight: 700,
        backdropFilter: 'blur(6px)',
        '& svg': { color: '#FDBA2C' },
      }}
    >
      {icon}
      {text}
    </Box>
  );
}
