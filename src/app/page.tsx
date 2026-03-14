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
            Our Premium Products
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
              Our Expert Services
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
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 6 }}>
              Our Global Impact
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
                  Customers
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedCounter value={950} suffix="KW+" delay={0.4} />
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
                  System Installed
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AnimatedCounter value={250} suffix="+" delay={0.6} />
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
                  Projects Completed
                </Typography>
              </motion.div>
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
