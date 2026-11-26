'use client';
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';
import { BUSINESS, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';

interface Props {
  title?: string;
  subtitle?: string;
  source?: string;
}

/** Closing call-to-action band used at the bottom of pages. */
export default function CTABand({
  title = 'Ready to cut your electricity bill?',
  subtitle = 'Book a free site survey. We will design your system, confirm your subsidy and handle all the paperwork.',
  source = 'cta_band',
}: Props) {
  const { openPopup } = useLeadPopup();
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 5,
            px: { xs: 3, md: 8 },
            py: { xs: 5, md: 8 },
            bgcolor: 'background.brand',
            color: '#fff',
            backgroundImage:
              'radial-gradient(600px 300px at 100% 0%, rgba(253,186,44,0.35), transparent 60%), radial-gradient(500px 300px at 0% 100%, rgba(30,76,154,0.7), transparent 60%)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ color: '#fff', mb: 1.5 }}>
              {title}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
              {subtitle}
            </Typography>
          </Box>
          <Stack
            spacing={1.5}
            sx={{ justifySelf: { md: 'end' }, width: { xs: '100%', md: 'auto' } }}
          >
            <Button variant="contained" size="large" onClick={() => openPopup(source)}>
              Book Free Site Survey
            </Button>
            <Stack direction="row" spacing={1.5}>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<Phone />}
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackContact('call', source)}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                Call
              </Button>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<WhatsApp />}
                href={whatsappLink("Hi Saptasurya Solar, I'd like a free site survey.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('whatsapp', source)}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                WhatsApp
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
