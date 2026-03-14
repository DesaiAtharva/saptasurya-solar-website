'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Container, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Prakash Patil',
      role: 'Homeowner, Satara',
      rating: 5,
      text: 'Saptasurya installed a 5KW system for my home. The generation is exactly as promised. Our electricity bill is zero now! Best solar company in the region.',
      avatar: 'P',
    },
    {
      id: 2,
      name: 'Sneha Deshmukh',
      role: 'Business Owner, Mumbai',
      rating: 5,
      text: 'We opted for a 20KW commercial rooftop installation. The Saptasurya team handled all the Net Metering paperwork seamlessly. Highly professional service.',
      avatar: 'S',
    },
    {
      id: 3,
      name: 'Vishal Pawar',
      role: 'Farmer, Baramati',
      rating: 5,
      text: 'Their solar water pump solution is incredible. It works flawlessly even during low sunlight, ensuring my crops get water on time. Highly recommended!',
      avatar: 'V',
    },
    {
      id: 4,
      name: 'Nitin Mane',
      role: 'Residential Customer, Satara',
      rating: 5,
      text: 'Quality panels and a very neat installation process. The after-sales support from Saptasurya is quick and extremely helpful. Complete peace of mind.',
      avatar: 'N',
    },
    {
      id: 5,
      name: 'Anjali Shah',
      role: 'Housing Society Member, Mumbai',
      rating: 5,
      text: 'We installed a solar system for our society\'s common areas. Our monthly maintenance costs have dropped by 40%. The Saptasurya team was very transparent.',
      avatar: 'A',
    },
    {
      id: 6,
      name: 'Suraj Jadhav',
      role: 'Agri-Business Owner, Baramati',
      rating: 5,
      text: 'Excellent work by Saptasurya Solar. The 15KW system they set up for my cold storage is running perfectly. True experts in solar energy.',
      avatar: 'S',
    },
    {
      id: 7,
      name: 'Ramesh Bhosale',
      role: 'Factory Owner, Satara',
      rating: 5,
      text: 'Their EPC execution is top-notch. They completed our 50KW project before the deadline. We are extremely happy with the premium quality of the structure.',
      avatar: 'R',
    },
    {
      id: 8,
      name: 'Neha Kadam',
      role: 'Homeowner, Mumbai',
      rating: 5,
      text: 'I was hesitant about solar initially, but Saptasurya guided me through the entire subsidy process. Now I enjoy 24/7 power without the heavy bills.',
      avatar: 'N',
    },
    {
      id: 9,
      name: 'Sanjay Thite',
      role: 'Dairy Farm Owner, Baramati',
      rating: 5,
      text: 'The solar water heater and panels have drastically cut down our operational costs. Genuine service, authentic products, and a great local team.',
      avatar: 'S',
    },
    {
      id: 10,
      name: 'Kiran Shinde',
      role: 'Commercial complex owner, Satara',
      rating: 5,
      text: 'Best investment ever. Saptasurya Solar offered a premium solution with high-efficiency panels. Their technical knowledge is unmatched in this area.',
      avatar: 'K',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 6,
            color: 'text.primary',
          }}
        >
          What Our Customers Say
        </Typography>

        <Box
          sx={{
            position: 'relative',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: 3,
                  position: 'relative',
                }}
              >
                <FormatQuote
                  sx={{
                    fontSize: 60,
                    color: 'primary.main',
                    opacity: 0.2,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                  }}
                />
                <Rating
                  value={testimonials[currentIndex].rating}
                  readOnly
                  sx={{ mb: 3 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: 'italic',
                    mb: 4,
                    color: 'text.primary',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "{testimonials[currentIndex].text}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 60,
                      height: 60,
                      fontSize: '2rem',
                    }}
                  >
                    {testimonials[currentIndex].avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {testimonials[currentIndex].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonials[currentIndex].role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Dots Indicator */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
            flexWrap: 'wrap'
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: currentIndex === index ? 32 : 12,
                height: 12,
                borderRadius: 6,
                bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                mb: 1
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
