'use client';
import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '917058362510';
  const message = "Hello Saptasurya Solar! I'm interested in solar energy solutions.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      style={{ position: 'fixed', bottom: 32, left: 32, zIndex: 1000 }}
    >
      <Fab
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          '&:hover': {
            bgcolor: '#20BA5A',
            transform: 'scale(1.1)',
          },
          boxShadow: '0px 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </motion.div>
  );
};

export default WhatsAppButton;
