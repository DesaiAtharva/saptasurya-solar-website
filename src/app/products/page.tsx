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
  Button,
  Chip,
  useTheme as useMuiTheme,
} from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Products = () => {
  const router = useRouter();
  const theme = useMuiTheme();

  const products = [
    {
      id: 'panels',
      title: 'Solar Panels',
      image:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
      description: 'High-efficiency monocrystalline and polycrystalline solar panels',
      features: [
        '25-year performance warranty',
        'High efficiency (20-22%)',
        'Weather-resistant design',
        'Tier-1 manufacturer quality',
      ],
      capacity: '250W - 550W per panel',
    },
    {
      id: 'rooftop',
      title: 'Solar Rooftop Systems',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
      description: 'Complete rooftop solar solutions for residential and commercial',
      features: [
        'On-grid, Off-grid, Hybrid options',
        'Net metering compatible',
        'Customized system design',
        'Professional installation',
      ],
      capacity: '1KW - 1MW+',
    },
    {
      id: 'water-heater',
      title: 'Solar Water Heater',
      image:
        'https://images.unsplash.com/photo-1618397746666-63405ce5d015?auto=format&fit=crop&q=80',
      description: 'Eco-friendly solar water heating systems',
      features: [
        'Save 70% on water heating costs',
        'Works in all weather conditions',
        'Low maintenance',
        '5-7 year payback period',
      ],
      capacity: '100L - 500L',
    },
    {
      id: 'pump',
      title: 'Solar Pump',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80',
      description: 'Solar-powered water pumps for agriculture and irrigation',
      features: [
        'No electricity required',
        'Ideal for remote locations',
        'Long lifespan',
        'Government subsidy available',
      ],
      capacity: '0.5HP - 10HP',
    },
    {
      id: 'inverters',
      title: 'Inverters & Batteries',
      image:
        'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80',
      description: 'High-quality inverters and battery storage solutions',
      features: [
        'Pure sine wave inverters',
        'Lithium-ion batteries',
        'Smart monitoring systems',
        'Backup power during outages',
      ],
      capacity: '1KW - 100KW',
    },
    {
      id: 'epc',
      title: 'EPC Services',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      description: 'End-to-end Engineering, Procurement, and Construction',
      features: [
        'Complete project management',
        'Quality assurance',
        'Timely project delivery',
        'Post-installation support',
      ],
      capacity: 'Any scale',
    },
  ];

  const systemTypes = [
    {
      title: 'On-Grid System',
      description: 'Connected to the utility grid. Excess power is sold back to the grid.',
      benefits: ['Net metering', 'No battery required', 'Maximum savings', 'Grid backup'],
    },
    {
      title: 'Off-Grid System',
      description: 'Independent system with battery storage. Perfect for remote locations.',
      benefits: ['Complete independence', 'Battery backup', 'No grid required', 'Reliable power'],
    },
    {
      title: 'Hybrid System',
      description: 'Combines grid connection with battery storage for maximum flexibility.',
      benefits: [
        'Best of both worlds',
        'Grid + battery backup',
        'Optimal savings',
        'Smart switching',
      ],
    },
  ];

  return (
    <Box sx={{ pt: 0, pb: 8, position: 'relative', overflow: 'hidden' }}>
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
          pt: { xs: 8, md: 10 },
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
            opacity: 0.25,
            backgroundImage: `url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80")`,
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
              Our Solar Products
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
              Comprehensive range of solar energy solutions for all your needs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {/* Products Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Product Categories
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} md={6} lg={4} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <Chip label={product.capacity} color="primary" sx={{ mb: 2 }} />
                        <Box>
                          {product.features.map((feature, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 1,
                              }}
                            >
                              <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                              <Typography variant="body2">{feature}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        onClick={() => router.push('/contact')}
                      >
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* System Types */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            System Types
          </Typography>
          <Grid container spacing={4}>
            {systemTypes.map((system, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                      {system.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.8 }}
                    >
                      {system.description}
                    </Typography>
                    <Box>
                      {system.benefits.map((benefit, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                          <Typography variant="body2">{benefit}</Typography>
                        </Box>
                      ))}
                    </Box>
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

export default Products;
