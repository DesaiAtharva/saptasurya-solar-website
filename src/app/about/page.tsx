'use client';
import React from 'react';
import { Container, Box, Typography, Grid, Card, useTheme as useMuiTheme } from '@mui/material';
import { EmojiEvents, Visibility, EnergySavingsLeaf, VerifiedUser } from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const missionVision = [
    {
      icon: <EmojiEvents sx={{ fontSize: 60 }} />,
      title: 'Our Mission',
      description:
        'To make clean, renewable solar energy accessible to every home and business, empowering communities to reduce their carbon footprint while saving on energy costs.',
    },
    {
      icon: <Visibility sx={{ fontSize: 60 }} />,
      title: 'Our Vision',
      description:
        "To become India's leading solar energy solutions provider, driving the transition to sustainable energy and creating a greener future for generations to come.",
    },
  ];

  const whySolar = [
    {
      title: 'Save Money',
      description: 'Reduce electricity bills by up to 80% and achieve ROI in 5-7 years.',
      icon: '💰',
    },
    {
      title: 'Eco-Friendly',
      description: 'Zero emissions, renewable energy source that helps combat climate change.',
      icon: '🌱',
    },
    {
      title: 'Low Maintenance',
      description: 'Solar panels require minimal maintenance and last for 25+ years.',
      icon: '🔧',
    },
    {
      title: 'Government Support',
      description: 'Avail subsidies and tax benefits on solar installations.',
      icon: '🏛️',
    },
    {
      title: 'Energy Independence',
      description: 'Reduce dependence on grid electricity and power cuts.',
      icon: '⚡',
    },
    {
      title: 'Increase Property Value',
      description: "Solar installations increase your property's market value.",
      icon: '📈',
    },
  ];

  const whyUs = [
    {
      icon: <VerifiedUser sx={{ fontSize: 48 }} />,
      title: 'Certified & Professional',
      description: 'Certified technicians and quality products from trusted manufacturers.',
    },
    {
      icon: <EnergySavingsLeaf sx={{ fontSize: 48 }} />,
      title: 'Premium Quality',
      description: 'We use only Tier-1 solar panels and components from leading manufacturers.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48 }} />,
      title: 'Customer-Focused',
      description:
        'Dedicated to providing personalized service and ensuring customer satisfaction.',
    },
  ];

  const theme = useMuiTheme();

  return (
    <Box sx={{ pt: 0, pb: 4, position: 'relative', overflow: 'hidden' }}>
      {/* Premium Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '260px', md: '320px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
          mb: 4,
          pt: { xs: 8, md: 10 }, // Internal padding to clear the fixed Navbar
        }}
      >
        {/* Background Overlay Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.2,
            backgroundImage: `url("/og-image.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.02em',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.8,
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'text.secondary',
              }}
            >
              Your trusted solar energy partner in Pune, led by Atharva Desai (Founder & Director).
              Committed to bringing clean, affordable solar solutions to your doorstep.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl">
        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {missionVision.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Why Solar */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Why Choose Solar Energy?
          </Typography>
          <Grid container spacing={4}>
            {whySolar.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Us */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {whyUs.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 4, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
