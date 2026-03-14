'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
          backgroundImage: `url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to right, ${theme.palette.background.default} 20%, transparent 100%)`,
          }
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mt: { xs: 8, md: 12 }, // Increased top margin for better spacing
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '3.5rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Power Your Future With<br />Saptasurya Solar Energy
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
                >
                  Save up to <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>80%</Box> on Electricity Bills
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
              <motion.div
                variants={itemVariants}
                style={{ marginTop: '48px' }}
              >
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
                {/* Premium Solar Image Illustration */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '550px',
                    height: '450px',
                    backgroundImage: `url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Centered alignment
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0px 30px 60px rgba(0,0,0,0.6)`,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle, rgba(10, 17, 40, 0.6) 0%, rgba(10, 17, 40, 0.9) 100%)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="/new_logo.png"
                    alt="Saptasurya Logo"
                    sx={{
                      height: { xs: '150px', md: '220px' }, // Increased size
                      mb: 3,
                      position: 'relative',
                      zIndex: 1,
                      objectFit: 'cover',
                      transform: 'scale(1.05)', // Cropping edges
                      // Assuming isDarkMode is defined in the component's scope, otherwise this line will cause an error.
                      // If not defined, consider removing or defining it.
                      filter: theme.palette.mode === 'dark' ? 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' : 'none',
                      borderRadius: '4px',
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'center',
                      px: 2,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1rem',
                      textShadow: '0px 4px 12px rgba(0,0,0,0.5)',
                    }}
                  >
                    Premium Solar Solutions
                  </Typography>
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
