'use client';
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </Box>
  );
};

export default Layout;
