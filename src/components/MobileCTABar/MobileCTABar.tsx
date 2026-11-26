'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import { Phone, WhatsApp, RequestQuote } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { BUSINESS, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';

/** Pre-filled WhatsApp message that tells you which page the visitor came from. */
export function pageWhatsappMessage(pathname: string): string {
  const city = pathname.match(/^\/solar-installation-(.+)$/)?.[1];
  if (city) {
    const name = city
      .split('-')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');
    return `Hi Saptasurya Solar, I'm interested in solar installation in ${name}.`;
  }
  const map: Record<string, string> = {
    '/subsidy': 'Hi Saptasurya Solar, I want to know about the PM Surya Ghar subsidy for my home.',
    '/products': 'Hi Saptasurya Solar, I want a quote for your solar products.',
    '/services': 'Hi Saptasurya Solar, I want to know more about your solar services.',
  };
  return (
    map[pathname] ||
    "Hi Saptasurya Solar, I'm interested in a rooftop solar system. Please share details."
  );
}

export default function MobileCTABar() {
  const pathname = usePathname() || '/';
  const { openPopup } = useLeadPopup();

  return (
    <>
      {/* Spacer so the bar never covers the footer */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, height: 64 }} />
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          boxShadow: '0 -4px 16px rgba(0,0,0,0.12)',
          p: 1,
          gap: 1,
          pb: 'calc(8px + env(safe-area-inset-bottom))',
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Phone />}
          href={`tel:${BUSINESS.phoneE164}`}
          onClick={() => trackContact('call', 'mobile_bar')}
          sx={{ fontWeight: 700 }}
        >
          Call
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<WhatsApp />}
          href={whatsappLink(pageWhatsappMessage(pathname))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('whatsapp', 'mobile_bar')}
          sx={{
            fontWeight: 700,
            bgcolor: '#25D366',
            color: '#fff',
            '&:hover': { bgcolor: '#1EBE5A' },
          }}
        >
          WhatsApp
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<RequestQuote />}
          onClick={() => openPopup('mobile_bar')}
          sx={{ fontWeight: 700 }}
        >
          Quote
        </Button>
      </Box>
    </>
  );
}
