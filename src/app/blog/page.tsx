'use client';
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from '@mui/material';
import { CalendarToday, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Benefits of Solar Energy for Homeowners',
      excerpt:
        'Discover how solar energy can reduce your electricity bills, increase property value, and contribute to a sustainable future.',
      date: 'March 15, 2024',
      category: 'Solar Basics',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600',
    },
    {
      id: 2,
      title: 'Understanding Net Metering: A Complete Guide',
      excerpt:
        'Learn how net metering works, its benefits, and how it can help you maximize your solar investment.',
      date: 'March 10, 2024',
      category: 'Solar Basics',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
    },
    {
      id: 3,
      title: 'Government Subsidies for Solar: Everything You Need to Know',
      excerpt:
        'A comprehensive guide to available government subsidies and how to apply for them.',
      date: 'March 5, 2024',
      category: 'Subsidy & Finance',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600',
    },
    {
      id: 4,
      title: 'Solar Panel Maintenance: Tips for Optimal Performance',
      excerpt:
        'Essential maintenance tips to keep your solar panels performing at peak efficiency for years to come.',
      date: 'February 28, 2024',
      category: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
    },
    {
      id: 5,
      title: 'On-Grid vs Off-Grid vs Hybrid: Which Solar System is Right for You?',
      excerpt:
        'Compare different solar system types and find the best option for your energy needs.',
      date: 'February 20, 2024',
      category: 'Solar Basics',
      image: 'https://images.unsplash.com/photo-1605647540924-852290d6e597?w=600',
    },
    {
      id: 6,
      title: 'ROI Calculation: How Long Until Your Solar System Pays for Itself?',
      excerpt:
        'Learn how to calculate the return on investment for your solar installation and understand payback periods.',
      date: 'February 15, 2024',
      category: 'Subsidy & Finance',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600',
    },
  ];

  const categories = ['All', 'Solar Basics', 'Subsidy & Finance', 'Maintenance', 'Case Studies'];

  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" sx={{ fontWeight: 800, mb: 3 }}>
              Solar Energy Blog
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              Stay updated with the latest news, tips, and insights about solar energy
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 8 }}>
        {/* Categories */}
        <Box sx={{ mb: 6, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              sx={{
                px: 2,
                py: 3,
                fontSize: '1rem',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                },
              }}
            />
          ))}
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                    }}
                  >
                    ☀️
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          color: 'text.secondary',
                        }}
                      >
                        <CalendarToday sx={{ fontSize: 16 }} />
                        <Typography variant="caption">{post.date}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, flexGrow: 1 }}
                    >
                      {post.excerpt}
                    </Typography>
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter CTA */}
        <Box
          sx={{
            mt: 8,
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Get the latest solar energy news and tips delivered to your inbox
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, maxWidth: 500, mx: 'auto' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <Button variant="contained" size="large" sx={{ px: 4 }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;

