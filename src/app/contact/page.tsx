'use client';
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {
  const theme = useMuiTheme();

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 32 }} />,
      title: 'WhatsApp / Phone',
      details: ['+91 98608 74908'],
      color: theme.palette.primary.main,
      link: 'https://wa.me/919860874908',
    },
    {
      icon: <Email sx={{ fontSize: 32 }} />,
      title: 'Email',
      details: ['info@saptasuryasolar.com'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: 'Address',
      details: [
        'Pune, Maharashtra, India',
      ],
      color: theme.palette.primary.main,
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
            backgroundImage: `url("https://images.unsplash.com/photo-1516387085603-f018e63f587d?auto=format&fit=crop&q=80")`,
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
              Contact Us
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
              Get in touch with us for free consultation and quotes
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, textAlign: 'center' }}>
                Get in Touch
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card 
                        component={info.link ? 'a' : 'div'}
                        href={info.link}
                        target={info.link ? '_blank' : undefined}
                        sx={{ 
                          p: 4, 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          borderRadius: 4, 
                          border: `1px solid ${theme.palette.divider}`,
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: info.link ? 'pointer' : 'default',
                          '&:hover': {
                            borderColor: 'primary.main',
                            boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
                            transform: 'translateY(-8px)',
                            '& .info-icon-box': {
                              transform: 'scale(1.1)',
                              bgcolor: 'primary.main',
                              boxShadow: `0 8px 16px ${theme.palette.primary.main}40`,
                            }
                          }
                        }}
                      >
                        <Box
                          className="info-icon-box"
                          sx={{
                            p: 2,
                            mb: 3,
                            borderRadius: '50%',
                            color: 'white',
                            bgcolor: info.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            width: 64,
                            height: 64,
                            boxShadow: `0 4px 12px ${info.color}40`
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                          {info.title}
                        </Typography>
                        {info.details.map((detail, idx) => (
                          <Typography
                            key={idx}
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontWeight: 500, lineHeight: 1.6 }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Contact;
