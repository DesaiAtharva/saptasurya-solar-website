'use client';
import React from 'react';
import { Box, Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';
import { pageWhatsappMessage } from '@/components/MobileCTABar/MobileCTABar';

/** Floating WhatsApp button — desktop/tablet only (mobile uses the sticky CTA bar). Pops in after 2s (CSS). */
const WhatsAppButton = () => {
  const pathname = usePathname() || '/';

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        bottom: 32,
        left: 32,
        zIndex: 1000,
        transform: 'scale(0)',
        animation: 'ss-pop .5s cubic-bezier(.34,1.56,.64,1) 2s forwards',
        '@keyframes ss-pop': { to: { transform: 'scale(1)' } },
        '@media (prefers-reduced-motion: reduce)': { transform: 'none', animation: 'none' },
      }}
    >
      <Fab
        component="a"
        href={whatsappLink(pageWhatsappMessage(pathname))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => trackContact('whatsapp', 'floating_button')}
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          width: 64,
          height: 64,
          '&:hover': {
            bgcolor: '#20BA5A',
            transform: 'scale(1.1)',
          },
          boxShadow: '0px 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
        }}
      >
        <WhatsApp sx={{ fontSize: 32 }} />
      </Fab>
    </Box>
  );
};

export default WhatsAppButton;
