'use client';
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  AccountBalance,
  Description,
  SupportAgent,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Subsidy = () => {
  const router = useRouter();

  const subsidyInfo = [
    {
      title: 'Central Government Schemes',
      schemes: [
        'PM-KUSUM Scheme - Up to 30% subsidy',
        'Rooftop Solar Programme - Up to 40% subsidy',
        'Solar Park Scheme - Infrastructure support',
      ],
    },
    {
      title: 'State Government Schemes',
      schemes: [
        'State-specific solar policies',
        'Additional state subsidies',
        'Net metering benefits',
        'Tax exemptions',
      ],
    },
  ];

  const financeOptions = [
    {
      title: 'Bank Loans',
      description: 'Low-interest loans from leading banks',
      features: [
        'Interest rates from 7% p.a.',
        'Loan tenure up to 15 years',
        'Quick approval process',
        'Minimal documentation',
      ],
    },
    {
      title: 'EMI Options',
      description: 'Easy monthly installments',
      features: [
        'Zero down payment available',
        'Flexible tenure options',
        'No hidden charges',
        'Quick processing',
      ],
    },
    {
      title: 'Leasing Options',
      description: 'Solar system leasing programs',
      features: [
        'No upfront investment',
        'Pay from savings',
        'Ownership transfer option',
        'Maintenance included',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Eligibility Check',
      description: 'We verify your eligibility for various subsidy schemes',
      icon: <CheckCircle />,
    },
    {
      step: 2,
      title: 'Documentation',
      description: 'We help you prepare all required documents',
      icon: <Description />,
    },
    {
      step: 3,
      title: 'Application Filing',
      description: 'We file your subsidy application with relevant authorities',
      icon: <AccountBalance />,
    },
    {
      step: 4,
      title: 'Follow-up',
      description: 'We track your application and ensure timely approval',
      icon: <SupportAgent />,
    },
  ];

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
              Subsidy & Finance
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              Get up to 40% subsidy and flexible financing options for your solar installation
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 8 }}>
        {/* Subsidy Information */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Government Subsidies
          </Typography>
          <Grid container spacing={4}>
            {subsidyInfo.map((info, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                      {info.title}
                    </Typography>
                    <List>
                      {info.schemes.map((scheme, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle sx={{ color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={scheme} />
                        </ListItem>
                      ))}
                    </List>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Finance Options */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            Financing Options
          </Typography>
          <Grid container spacing={4}>
            {financeOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {option.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {option.description}
                    </Typography>
                    <List>
                      {option.features.map((feature, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Process Steps */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 6,
            }}
          >
            How We Help
          </Typography>
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Ready to Apply for Subsidy?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Our team will guide you through the entire process
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => router.push('/contact')}
            sx={{ px: 6, py: 1.5, fontSize: '1.1rem' }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subsidy;

