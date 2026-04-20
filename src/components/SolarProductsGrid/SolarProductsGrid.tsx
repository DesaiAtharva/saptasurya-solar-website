'use client';
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SolarProductsGridProps {
  products?: any[];
  showViewAll?: boolean;
}

const SolarProductsGrid = ({ products, showViewAll = true }: SolarProductsGridProps) => {
  const router = useRouter();

  const defaultProducts = [
    {
      id: 1,
      title: 'Solar Panels',
      description:
        'High-efficiency monocrystalline and polycrystalline solar panels for maximum energy output.',
      image:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Solar Rooftop Systems',
      description: 'Complete rooftop solar solutions for residential and commercial buildings.',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Solar Water Heater',
      description: 'Eco-friendly solar water heating systems to reduce electricity consumption.',
      image:
        'https://images.unsplash.com/photo-1618397746666-63405ce5d015?auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Solar Pump',
      description: 'Solar-powered water pumps for agriculture and irrigation needs.',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'Inverters & Batteries',
      description:
        'High-quality inverters and battery storage solutions for reliable power backup.',
      image:
        'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      title: 'EPC Services',
      description:
        'End-to-end Engineering, Procurement, and Construction services for solar projects.',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {displayProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={product.id || index}>
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
                  cursor: 'pointer',
                  '&:hover': {
                    '& .product-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                    '& .MuiCardMedia-root::before': {
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },
                  },
                }}
                onClick={() => router.push('/products')}
              >
                <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                      },
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateX(4px)',
                      },
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {showViewAll && (
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/products')}
            sx={{ px: 4 }}
          >
            View All Products
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SolarProductsGrid;
