'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Products', path: '/products' },
        { label: 'Services', path: '/services' },
        // { label: 'Portfolio', path: '/portfolio' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Solar Panels', path: '/products#panels' },
        { label: 'Solar Rooftop Systems', path: '/products#rooftop' },
        { label: 'Solar Water Heater', path: '/products#water-heater' },
        { label: 'Solar Pump', path: '/products#pump' },
        { label: 'Inverters & Batteries', path: '/products#inverters' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Solar Installation', path: '/services#installation' },
        { label: 'Maintenance & AMC', path: '/services#maintenance' },
        { label: 'Subsidy Assistance', path: '/services#subsidy' },
        { label: 'Site Survey', path: '/services#survey' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <Instagram />, url: '#', label: 'Instagram' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
        mt: 8,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src="/new_logo.png"
                  alt="Saptasurya Logo"
                  sx={{ height: '60px', mr: 2, objectFit: 'contain' }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1.2 }}
                >
                  Saptasurya
                  <br />
                  Solar Energy
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, maxWidth: 280, lineHeight: 1.7 }}
              >
                Powering your future with clean, renewable solar energy. Save up to 80% on
                electricity bills while contributing to a sustainable planet.
              </Typography>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {section.links.map(
                    (link) =>
                      link.label &&
                      !link.label.startsWith('//') && (
                        <Link
                          key={link.label}
                          href={link.path}
                          underline="none"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                            '&:hover': {
                              color: 'primary.main',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {link.label}
                        </Link>
                      )
                  )}
                </Box>
              </motion.div>
            </Grid>
          ))}

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'primary.main', display: 'flex' }}>
                    <Phone sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Link
                    href="https://wa.me/917058362510"
                    target="_blank"
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    +91 70583 62510
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'primary.main', display: 'flex' }}>
                    <Email sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.9rem', fontWeight: 500 }}
                  >
                    info@saptasuryasolar.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'primary.main', display: 'flex' }}>
                    <LocationOn sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.9rem', fontWeight: 500 }}
                  >
                    Alankapuri Complex, Laxmi Colony, Hadapsar, Pune - 411028
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Saptasurya Solar Energy. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="none" color="text.secondary" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" underline="none" color="text.secondary" variant="body2">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
