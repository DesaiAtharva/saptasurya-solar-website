'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroBanner = () => {
  const theme = useTheme();
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
        overflow: 'hidden',
        pt: { xs: 8, md: 10 },
        pb: 8,
      }}
    >
      {/* Rich Background Image */}
      {/* 4K Background Video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/new_logo.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://cdn.pixabay.com/video/2020/06/17/42388-431511474_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dynamic Overlay based on theme */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 100%)'
              : 'linear-gradient(to right, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 100%)',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mt: { xs: 8, md: 12 }, // Increased top margin for better spacing
                    mb: 3,
                    background: theme.palette.mode === 'dark' 
                      ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #FFFFFF 100%)`
                      : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #121212 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '3.5rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Solar Panel Installation Across
                  <br />
                  All Maharashtra Districts
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
                >
                  Save up to{' '}
                  <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                    80%
                  </Box>{' '}
                  on Electricity Bills
                  <br />
                  Join thousands of satisfied customers switching to clean, renewable energy
                </Typography>
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push('/contact')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: `0px 8px 24px ${theme.palette.primary.main}40`,
                  }}
                >
                  Get Free Quote
                </Button>
                {/* <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Download Brochure
                </Button> */}
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} style={{ marginTop: '48px' }}>
                <Grid container spacing={4}>
                  {[
                    { number: '100+', label: 'Happy Customers' },
                    { number: '950KW+', label: 'System Installed' },
                    { number: '250+', label: 'Projects Done' },
                  ].map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          mb: 0.5,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: { xs: '400px', md: '600px' },
                }}
              >
                {/* Background-less Logo Display */}
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: 300, md: 500 },
                        height: { xs: 300, md: 500 },
                        zIndex: 1,
                        filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.4))',
                      }}
                    >
                      <Image
                        src="/new_logo.png"
                        alt="Saptasurya Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBanner;
