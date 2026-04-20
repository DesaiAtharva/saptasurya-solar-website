'use client';
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import SolarProductsGrid from '@/components/SolarProductsGrid/SolarProductsGrid';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import AnimatedCounter from '@/components/AnimatedCounter/AnimatedCounter';

const Home = () => {
  const router = useRouter();

  return (
    <Box>
      {/* Hero Section */}
      <HeroBanner />

      {/* Products Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)', // Premium Gold Gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Residential Solar Solutions (All Maharashtra Districts)
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Discover our comprehensive range of high-efficiency solar energy solutions designed to
            meet all your needs.
          </Typography>
        </Box>
        <SolarProductsGrid />
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
              Commercial Solar Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              End-to-end solar solutions from professional installation to dedicated maintenance.
            </Typography>
          </Box>
          <ServicesGrid />
        </Container>
      </Box>

      {/* Stats Section with Image Background */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            color: 'white',
            backgroundImage: `url("https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(10, 17, 40, 0.85)', // Deep blue overlay matching the theme
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
              Government Subsidy Support
            </Typography>
            <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
              Benefit from PM Surya Ghar Yojana across Maharashtra
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedCounter value={100} suffix="+" delay={0.2} />
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
                  100+ Customers Served
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedCounter value={5} suffix="+" delay={0.4} />
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
                  5+ Years Experience
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h1" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  GOVT
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
                  Government Approved Vendor
                </Typography>
              </motion.div>
            </Box>
          </Box>
          <Box sx={{ position: 'relative', zIndex: 1, mt: 8, pt: 8, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
              Authorized Partners & Certifications
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, opacity: 0.8 }}>
              {['ISO 9001:2015', 'MNRE Approved', 'MCED Certified', 'PM Surya Ghar Partner'].map((cert) => (
                <Typography key={cert} variant="h6" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                  {cert}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section with Image Background */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            backgroundImage: `url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(10, 17, 40, 0.9)', // Deep blue overlay
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>
              Ready for Premium Solar?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, maxWidth: 600, mx: 'auto', color: 'rgba(255,255,255,0.7)' }}
            >
              Let's build a sustainable future together with our elite energy solutions.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => router.push('/contact')}
              sx={{ px: 6, py: 1.5, fontSize: '1.1rem' }}
            >
              Request a Consultation
            </Button>
          </Box>
        </Box>
      </Container>

      {/* FAQ Section */}
      <FAQAccordion />
    </Box>
  );
};

export default Home;
