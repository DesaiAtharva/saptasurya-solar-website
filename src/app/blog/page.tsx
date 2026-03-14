'use client';
import React, { useState } from 'react';
import {
  Container, Box, Typography, Grid, Card, CardContent, Chip, Button,
  useTheme as useMuiTheme,
} from '@mui/material';
import { CalendarToday, ArrowForward, WbSunny } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Blog = () => {
  const theme = useMuiTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Solar Panel Cost in Pune: Complete 2024 Pricing Guide',
      excerpt:
        'Find out the exact cost of solar panel installation in Pune, including government subsidies, net metering, and projected savings for your home or business.',
      date: 'March 15, 2024',
      category: 'Solar Costs',
      slug: 'solar-panel-cost-pune',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      alt: 'Solar panel installation cost in Pune Maharashtra',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: 'Solar Subsidy Maharashtra 2024: How to Get PM Surya Ghar Benefit',
      excerpt:
        'A full guide on applying for the PM Surya Ghar Yojana solar subsidy in Maharashtra, eligibility criteria, and how to maximize your savings.',
      date: 'March 10, 2024',
      category: 'Subsidy & Finance',
      slug: 'solar-subsidy-maharashtra',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      alt: 'Government solar subsidy scheme in Maharashtra India',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: '5KW Solar System Price in India: What You Need to Know in 2024',
      excerpt:
        'Everything about 5KW solar system pricing in India — equipment costs, installation charges, subsidy deductions, and payback period analysis.',
      date: 'March 5, 2024',
      category: 'Solar Costs',
      slug: '5kw-solar-system-price-india',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      alt: '5KW rooftop solar system installation in India',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Rooftop Solar Benefits: Why Maharashtra Homeowners Are Switching',
      excerpt:
        'Discover why thousands of Maharashtra homeowners are installing rooftop solar panels — from 80% bill savings to 25-year ROI breakdowns.',
      date: 'February 28, 2024',
      category: 'Solar Basics',
      slug: 'rooftop-solar-benefits-maharashtra',
      image: 'https://images.unsplash.com/photo-1594398044738-3482bc03cb41?auto=format&fit=crop&w=800&q=80',
      alt: 'Rooftop solar panels on Maharashtra home',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'On-Grid vs Off-Grid vs Hybrid Solar: Which is Best for Maharashtra?',
      excerpt:
        'Compare on-grid, off-grid, and hybrid solar systems for Maharashtra weather and grid conditions. Which one gives the best savings?',
      date: 'February 20, 2024',
      category: 'Solar Basics',
      slug: 'on-grid-off-grid-hybrid-solar',
      image: 'https://images.unsplash.com/photo-1605647540924-852290d6e597?auto=format&fit=crop&w=800&q=80',
      alt: 'Solar system types comparison on-grid off-grid hybrid',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Solar Panel Installation in Nagpur: Costs, Subsidies & Process',
      excerpt:
        'A step-by-step guide to getting solar panels installed in Nagpur — from site survey to commissioning, with full government subsidy support.',
      date: 'February 15, 2024',
      category: 'Local Guide',
      slug: 'solar-panel-installation-nagpur-guide',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      alt: 'Solar panel installation guide Nagpur Maharashtra',
      readTime: '10 min read',
    },
  ];

  const categories = ['All', 'Solar Costs', 'Subsidy & Finance', 'Solar Basics', 'Local Guide'];

  const filtered = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>

      {/* Hero Section — matches Products/Services/About */}
      <Box
        sx={{
          minHeight: { xs: '40vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(5, 10, 21, 0.82)',
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
              }}
            >
              Solar Energy Blog
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
              Expert guides, cost breakdowns, subsidy tips and solar news for Maharashtra homeowners and businesses
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Category Filter */}
      <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                px: 2,
                py: 2.5,
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                bgcolor: selectedCategory === category ? 'primary.main' : 'transparent',
                color: selectedCategory === category ? 'primary.contrastText' : 'text.secondary',
                border: `1px solid ${selectedCategory === category ? theme.palette.primary.main : theme.palette.divider}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: selectedCategory === category ? 'primary.dark' : 'rgba(212, 175, 55, 0.08)',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Blog Posts Grid */}
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {filtered.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 20px 60px ${theme.palette.primary.main}25`,
                      borderColor: `${theme.palette.primary.main}50`,
                      '& .blog-image': { transform: 'scale(1.06)' },
                    },
                  }}
                >
                  {/* Card Image */}
                  <Box sx={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                    <Box
                      className="blog-image"
                      component="img"
                      src={post.image}
                      alt={post.alt}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    {/* Category badge on image */}
                    <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: 'primary.contrastText',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    {/* Date + Read time */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                        <CalendarToday sx={{ fontSize: 14 }} />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>{post.date}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                        <WbSunny sx={{ fontSize: 14, color: 'primary.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>{post.readTime}</Typography>
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.4, flexGrow: 1 }}
                    >
                      {post.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {post.excerpt}
                    </Typography>

                    {/* Read More */}
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: 'primary.main',
                        fontWeight: 700,
                        p: 0,
                        '&:hover': { bgcolor: 'transparent', gap: 1 },
                      }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="text.secondary">No articles in this category yet.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Blog;
