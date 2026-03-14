'use client';
import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import {
  Build,
  Engineering,
  Assignment,
  Assessment,
  SupportAgent,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ServicesGrid = () => {
  const router = useRouter();

  const services = [
    {
      id: 1,
      title: 'Solar Installation',
      description: 'Professional installation services with certified technicians and quality assurance.',
      icon: <Build sx={{ fontSize: 48 }} />,
      color: '#FFA500',
    },
    {
      id: 2,
      title: 'Maintenance & AMC',
      description: 'Annual Maintenance Contracts and regular servicing to ensure optimal performance.',
      icon: <Engineering sx={{ fontSize: 48 }} />,
      color: '#2B7A0B',
    },
    {
      id: 3,
      title: 'Government Subsidy Assistance',
      description: 'Help with subsidy applications and documentation for government solar schemes.',
      icon: <Assignment sx={{ fontSize: 48 }} />,
      color: '#1E293B',
    },
    {
      id: 4,
      title: 'Site Survey & Proposal',
      description: 'Comprehensive site assessment and detailed project proposals with ROI calculations.',
      icon: <Assessment sx={{ fontSize: 48 }} />,
      color: '#FFA500',
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency service for all your solar needs.',
      icon: <SupportAgent sx={{ fontSize: 48 }} />,
      color: '#2B7A0B',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    '& .service-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      color: service.color,
                    },
                  },
                }}
              >
                <Box
                  className="service-icon"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/services')}
                  sx={{
                    borderColor: service.color,
                    color: service.color,
                    '&:hover': {
                      borderColor: service.color,
                      bgcolor: `${service.color}10`,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;

