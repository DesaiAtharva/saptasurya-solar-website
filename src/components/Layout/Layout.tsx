'use client';
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import MobileCTABar from '../MobileCTABar/MobileCTABar';
import { LeadPopupProvider } from '../LeadPopup/LeadPopupContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LeadPopupProvider>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <MobileCTABar />
      </Box>
    </LeadPopupProvider>
  );
};

export default Layout;
