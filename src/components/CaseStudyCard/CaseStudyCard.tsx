'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { LocationOn, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  caseStudy?: any;
  index?: number;
}

const CaseStudyCard = ({ caseStudy, index = 0 }: CaseStudyCardProps) => {
  const defaultCaseStudy = {
    id: 1,
    title: 'Residential Solar Installation',
    location: 'Mumbai, Maharashtra',
    capacity: '10 KW',
    savings: '₹45,000/year',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600',
    description: 'Complete rooftop solar system installation for a 3BHK residential property.',
    category: 'Residential',
  };

  const data = caseStudy || defaultCaseStudy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            '& .case-study-image': {
              transform: 'scale(1.05)',
            }
          }
        }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="250"
            image={data.image}
            alt={data.title}
            className="case-study-image"
            sx={{
              transition: 'transform 0.5s ease',
            }}
          />
          <Chip
            label={data.category}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}>
            {data.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LocationOn sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
              {data.location}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
            {data.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              pt: 2.5,
              borderTop: '1px solid',
              borderColor: 'divider',
              mt: 'auto',
            }}
          >
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Capacity
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mt: 0.5 }}>
                {data.capacity}
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Annual Savings
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <TrendingUp sx={{ color: 'secondary.main', fontSize: 18 }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                  {data.savings}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
