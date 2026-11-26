'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
  MenuItem,
  Typography,
  InputAdornment,
  Paper,
} from '@mui/material';
import { Send, WhatsApp, CheckCircle } from '@mui/icons-material';
import { submitLead } from '@/lib/leads';
import { BILL_RANGES, PROPERTY_TYPES, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';

interface LeadFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  defaultCity?: string;
  /** Pre-select the property type (e.g. from the roof configurator). Kept in sync when it changes. */
  defaultPropertyType?: string;
  /** Show optional email + message fields (contact page). */
  extended?: boolean;
  compact?: boolean;
  submitLabel?: string;
  details?: Record<string, unknown>;
  onSuccess?: () => void;
}

const empty = {
  name: '',
  phone: '',
  city: '',
  monthlyBill: '',
  propertyType: '',
  email: '',
  message: '',
  company: '',
};

export default function LeadForm({
  source,
  title,
  subtitle,
  defaultCity = '',
  defaultPropertyType = '',
  extended = false,
  compact = false,
  submitLabel = 'Get My Free Quote',
  details,
  onSuccess,
}: LeadFormProps) {
  const [form, setForm] = useState({
    ...empty,
    city: defaultCity,
    propertyType: defaultPropertyType,
  });

  useEffect(() => {
    if (defaultPropertyType) setForm((f) => ({ ...f, propertyType: defaultPropertyType }));
  }, [defaultPropertyType]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set =
    (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const phoneValid = /^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!phoneValid) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    const res = await submitLead({ ...form, source, details });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ ...empty, city: defaultCity, propertyType: defaultPropertyType });
      onSuccess?.();
    } else {
      setError(res.error || 'Something went wrong.');
    }
  };

  if (success) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: compact ? 3 : 4,
          textAlign: 'center',
          borderRadius: 3,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <CheckCircle color="primary" sx={{ fontSize: 56, mb: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Thank you! We&apos;ve received your request.
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Our solar expert will call you within 24 hours (Mon–Sat). Want a faster reply?
        </Typography>
        <Button
          variant="contained"
          startIcon={<WhatsApp />}
          href={whatsappLink(
            'Hi Saptasurya Solar, I just submitted a quote request on your website.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('whatsapp', `${source}_success`)}
          sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1EBE5A' } }}
        >
          Chat on WhatsApp
        </Button>
      </Paper>
    );
  }

  const size = compact ? 'small' : 'medium';

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {title && (
        <Typography variant={compact ? 'h6' : 'h5'} sx={{ fontWeight: 800, mb: 0.5 }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Honeypot — hidden from humans */}
      <Box
        component="input"
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={set('company')}
        aria-hidden="true"
        sx={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <Grid container spacing={compact ? 1.5 : 2}>
        <Grid item xs={12} sm={compact ? 12 : 6}>
          <TextField
            fullWidth
            required
            size={size}
            label="Your Name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={set('name')}
          />
        </Grid>
        <Grid item xs={12} sm={compact ? 12 : 6}>
          <TextField
            fullWidth
            required
            size={size}
            type="tel"
            label="Mobile Number"
            name="phone"
            autoComplete="tel-national"
            inputProps={{ inputMode: 'numeric', maxLength: 14 }}
            InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }}
            value={form.phone}
            onChange={set('phone')}
            error={form.phone.length >= 10 && !phoneValid}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            size={size}
            label="City / District"
            name="city"
            autoComplete="address-level2"
            value={form.city}
            onChange={set('city')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            size={size}
            label="Monthly Bill"
            name="monthlyBill"
            value={form.monthlyBill}
            onChange={set('monthlyBill')}
          >
            {BILL_RANGES.map((b) => (
              <MenuItem key={b.value} value={b.label}>
                {b.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            size={size}
            label="Property Type"
            name="propertyType"
            value={form.propertyType}
            onChange={set('propertyType')}
          >
            {PROPERTY_TYPES.map((p) => (
              <MenuItem key={p.value} value={p.value}>
                {p.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {extended && (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size={size}
                type="email"
                label="Email (optional)"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                size={size}
                label="Message (optional)"
                name="message"
                value={form.message}
                onChange={set('message')}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={loading}
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
            sx={{ py: compact ? 1.2 : 1.5, fontSize: '1.05rem', fontWeight: 700 }}
          >
            {loading ? 'Submitting…' : submitLabel}
          </Button>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', textAlign: 'center', mt: 1 }}
          >
            Free site survey · No spam. By submitting you agree to be contacted by call/WhatsApp
            about your enquiry (
            <Box component="a" href="/privacy-policy" sx={{ color: 'inherit' }}>
              Privacy Policy
            </Box>
            ).
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
