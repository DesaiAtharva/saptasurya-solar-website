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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme as useMuiTheme,
} from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Services = () => {
  const router = useRouter();
  const theme = useMuiTheme();

  const services = [
    {
      id: 'installation',
      title: 'Solar Installation',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
      description: 'Professional installation services with certified technicians',
      features: [
        'Site assessment and design',
        'Quality equipment installation',
        'Grid connection assistance',
        'System testing and commissioning',
        'User training and documentation',
      ],
    },
    {
      id: 'maintenance',
      title: 'Maintenance & AMC',
      image: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=80',
      description: 'Annual Maintenance Contracts and regular servicing',
      features: [
        'Regular system inspections',
        'Panel cleaning and maintenance',
        'Performance monitoring',
        'Fault detection and repair',
        '24/7 emergency support',
      ],
    },
    {
      id: 'subsidy',
      title: 'Government Subsidy Assistance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
      description: 'Help with subsidy applications and documentation',
      features: [
        'Subsidy eligibility check',
        'Documentation support',
        'Application filing',
        'Follow-up and tracking',
        'Up to 40% subsidy available',
      ],
    },
    {
      id: 'survey',
      title: 'Site Survey & Proposal',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&v=2',
      description: 'Comprehensive site assessment and detailed proposals',
      features: [
        'Detailed site analysis',
        'Shadow analysis',
        'ROI calculations',
        'Custom system design',
        'Financial projections',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We understand your energy needs and requirements',
    },
    {
      step: 2,
      title: 'Site Survey',
      description: 'Comprehensive assessment of your property',
    },
    {
      step: 3,
      title: 'Custom Proposal',
      description: 'Detailed proposal with system design and pricing',
    },
    {
      step: 4,
      title: 'Installation',
      description: 'Professional installation by certified technicians',
    },
    {
      step: 5,
      title: 'Commissioning',
      description: 'System testing and handover with training',
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing maintenance and support services',
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
            opacity: 0.2,
            backgroundImage: `url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80")`,
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
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                opacity: 0.8, 
                maxWidth: '700px', 
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'text.secondary'
              }}
            >
              End-to-end solar solutions from consultation to maintenance
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {/* Services Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Service Offerings
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        }
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {service.description}
                      </Typography>
                      <List sx={{ mb: 3 }}>
                        {service.features.map((feature, idx) => (
                          <ListItem key={idx} disablePadding sx={{ mb: 1.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={feature} 
                              primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        onClick={() => router.push('/contact')}
                        sx={{ mt: 'auto' }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Process Steps */}
        <Box sx={{ py: 8, bgcolor: 'background.paper', borderRadius: 4, px: { xs: 2, md: 4 }, border: `1px solid ${theme.palette.divider}` }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Our Process
          </Typography>
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      textAlign: 'center',
                      position: 'relative',
                      bgcolor: 'background.default',
                      '&:hover': {
                        borderColor: 'primary.main',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        boxShadow: `0 4px 10px ${theme.palette.primary.main}40`,
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
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

export default Services;
