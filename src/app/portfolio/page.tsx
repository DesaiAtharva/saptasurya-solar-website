'use client';
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Card,
  useTheme as useMuiTheme,
} from '@mui/material';
import { CheckCircle, Verified, Security, Speed, Handyman } from '@mui/icons-material';
import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard/CaseStudyCard';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const theme = useMuiTheme();

  const caseStudies = [
    {
      id: 1,
      title: 'Luxury Villa Solar Setup',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
      location: 'Baner, Pune',
      capacity: '12 KW',
      savings: '₹55,000/year',
      description:
        'High-aesthetic rooftop solar installation integrated seamlessly with modern villa architecture.',
      category: 'Residential',
    },
    {
      id: 2,
      title: 'Textile Factory Plant',
      image: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80',
      location: 'Chakan MIDC, Pune',
      capacity: '150 KW',
      savings: '₹6,75,000/year',
      description:
        'Large-scale industrial solar solutions reducing carbon footprint for a major textile manufacturer.',
      category: 'Industrial',
    },
    {
      id: 3,
      title: 'IT Park Rooftop Array',
      image:
        'https://images.unsplash.com/photo-1594398044738-3482bc03cb41?auto=format&fit=crop&q=80',
      location: 'Hinjewadi IT Park, Pune',
      capacity: '80 KW',
      savings: '₹3,60,000/year',
      description:
        'Dual-purpose solar terrace providing sustainable energy and shade for corporate employees.',
      category: 'Commercial',
    },
    {
      id: 4,
      title: 'Orchard Irrigation System',
      image:
        'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80',
      location: 'Baramati District',
      capacity: '7.5 HP',
      savings: '₹85,000/year',
      description: 'Solar-powered irrigation pump system for a large-scale pomegranate orchard.',
      category: 'Agricultural',
    },
    {
      id: 5,
      title: 'Housing Society Project',
      image:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
      location: 'Wakad, Pune',
      capacity: '40 KW',
      savings: '₹1,80,000/year',
      description:
        'Cooperative housing society switch to solar for all common area lighting and elevators.',
      category: 'Residential',
    },
    {
      id: 6,
      title: 'Logistics Center Hybrid',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
      location: 'Talegaon MIDC',
      capacity: '60 KW',
      savings: '₹2,70,000/year',
      description:
        'Hybrid solar system with emergency battery backup for critical cold-storage logistics.',
      category: 'Industrial',
    },
  ];

  const categories = ['all', 'Residential', 'Commercial', 'Industrial', 'Agricultural'];

  const filteredCaseStudies =
    selectedCategory === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  const installationStandards = [
    {
      title: 'Certified Technicians',
      desc: 'Expert installation by factory-trained and certified solar engineers.',
      icon: <Verified sx={{ fontSize: 40 }} />,
    },
    {
      title: '25-Year Warranty',
      desc: 'Long-term performance assurance with Tier-1 manufacturer equipment.',
      icon: <Security sx={{ fontSize: 40 }} />,
    },
    {
      title: 'High Efficiency',
      desc: 'Advanced monocrystalline panels with efficiency ratings of 20-22%.',
      icon: <Speed sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Quality Execution',
      desc: 'Weather-resistant structures and premium electrical components.',
      icon: <Handyman sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box sx={{ pt: 0, pb: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Premium Hero Section with UNIQUE Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '280px', md: '350px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
          mb: 4,
          pt: { xs: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.25,
            backgroundImage: `url("https://images.unsplash.com/photo-1497366412874-dc939e3d09e3?auto=format&fit=crop&q=80")`,
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
              Our Project Portfolio
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
              Delivering high-performance solar solutions across Pune for a decade.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {/* Installation Excellence Info Section */}
        <Box
          sx={{
            mb: 10,
            py: 6,
            bgcolor: 'background.paper',
            borderRadius: 4,
            overflow: 'hidden',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 800, mb: 6 }}>
            Installation Excellence
          </Typography>
          <Grid container spacing={4} sx={{ px: 4 }}>
            {installationStandards.map((std, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {std.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {std.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {std.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Category Filter */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              sx={{
                px: 2,
                py: 3,
                fontSize: '1.05rem',
                fontWeight: selectedCategory === category ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor:
                    selectedCategory === category ? 'primary.dark' : 'rgba(212, 175, 55, 0.1)',
                },
              }}
            />
          ))}
        </Box>

        {/* Case Studies Grid */}
        <Grid container spacing={4}>
          {filteredCaseStudies.map((caseStudy, index) => (
            <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </Grid>
          ))}
        </Grid>

        {filteredCaseStudies.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No projects found in this category
            </Typography>
          </Box>
        )}

        {/* Stats Section */}
        <Box
          sx={{
            mt: 8,
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
            Impact Highlights
          </Typography>
          <Grid container spacing={4}>
            {[
              { label: 'System Installed', value: '950KW+' },
              { label: 'Carbon Saved', value: '1.2k Tons' },
              { label: 'Units Generated', value: '1.5M+' },
              { label: 'Happy Families', value: '100+' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
