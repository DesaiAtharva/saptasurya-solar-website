'use client';
import React from 'react';
import { Container, Box, Typography, Paper, Card } from '@mui/material';
import { Phone, Email, LocationOn, WhatsApp, Schedule } from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import LeadForm from '@/components/LeadForm/LeadForm';
import TrustBadges from '@/components/ui/TrustBadges';
import { BUSINESS, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';

const METHODS = [
  {
    icon: <Phone />,
    title: 'Call us',
    detail: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phoneE164}`,
    onClick: () => trackContact('call', 'contact_page'),
    color: '#EA580C',
  },
  {
    icon: <WhatsApp />,
    title: 'WhatsApp',
    detail: 'Quick replies, share your bill',
    href: whatsappLink('Hi Saptasurya Solar, I want a quote for rooftop solar.'),
    external: true,
    onClick: () => trackContact('whatsapp', 'contact_page'),
    color: '#16A34A',
  },
  {
    icon: <Email />,
    title: 'Email',
    detail: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    color: '#1E4C9A',
  },
  {
    icon: <LocationOn />,
    title: 'Visit our office',
    detail: 'Alankapuri Complex, Laxmi Colony, Hadapsar, Pune – 411028',
    href: 'https://maps.google.com/?q=SaptaSurya+Solar+Energy+Hadapsar+Pune',
    external: true,
    color: '#0B2A5B',
  },
];

const Contact = () => {
  return (
    <Box>
      <PageHero
        eyebrow="Contact"
        title="Let's plan your solar system"
        subtitle="Fill the form and our solar engineer will call you within 24 hours (Mon–Sat). Prefer to talk now? Call or WhatsApp us."
      >
        <Box sx={{ mt: 4 }}>
          <TrustBadges inverted />
        </Box>
      </PageHero>

      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 4, md: 6 },
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              alignItems: 'start',
            }}
          >
            {/* Methods */}
            <Box sx={{ display: 'grid', gap: 2, order: { xs: 2, md: 1 } }}>
              {METHODS.map((m) => (
                <Card
                  key={m.title}
                  component="a"
                  href={m.href}
                  target={m.external ? '_blank' : undefined}
                  rel={m.external ? 'noopener noreferrer' : undefined}
                  onClick={m.onClick}
                  sx={{
                    p: 2.5,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: m.color,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {m.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{m.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {m.detail}
                    </Typography>
                  </Box>
                </Card>
              ))}
              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'center',
                  color: 'text.secondary',
                  px: 1,
                  mt: 1,
                }}
              >
                <Schedule fontSize="small" />
                <Typography variant="body2">Office hours: Mon – Sat, 9:00 am – 6:00 pm</Typography>
              </Box>
            </Box>

            {/* Form */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 4,
                border: 1,
                borderColor: 'divider',
                boxShadow: '0 30px 60px -36px rgba(11,42,91,0.4)',
                order: { xs: 1, md: 2 },
              }}
            >
              <LeadForm
                extended
                source="contact_page"
                title="Request a free quote"
                subtitle="Takes 30 seconds. Only your name and mobile number are required."
              />
            </Paper>
          </Box>

          {/* Map */}
          <Box
            sx={{
              mt: { xs: 6, md: 10 },
              height: { xs: 320, md: 440 },
              borderRadius: 4,
              overflow: 'hidden',
              border: 1,
              borderColor: 'divider',
            }}
          >
            <iframe
              title="Saptasurya Solar Energy office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.680345949989!2d73.95568519999999!3d18.498132899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f13552bcb43cc2f%3A0x87d26d9c9482abd5!2sSaptaSurya%20Solar%20Energy!5e0!3m2!1sen!2sin!4v1778478365423!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
