'use client';
import React from 'react';
import { Box, Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';
import { pageWhatsappMessage } from '@/components/MobileCTABar/MobileCTABar';

/** Floating WhatsApp button — desktop/tablet only (mobile uses the sticky CTA bar). */
const WhatsAppButton = () => {
  const pathname = usePathname() || '/';

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        style={{ position: 'fixed', bottom: 32, left: 32, zIndex: 1000 }}
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
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsApp sx={{ fontSize: 32 }} />
        </Fab>
      </motion.div>
    </Box>
  );
};

export default WhatsAppButton;
