'use client';
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FAQAccordion = () => {
  const faqs = [
    {
      id: 1,
      question: 'How much can I save with solar panels?',
      answer:
        'On average, customers save 70-80% on their electricity bills. The exact savings depend on your energy consumption, roof size, and location. Most systems pay for themselves within 5-7 years.',
    },
    {
      id: 2,
      question: 'What is the warranty on solar panels?',
      answer:
        'Our solar panels come with a 25-year performance warranty and 10-year product warranty. We also offer comprehensive maintenance packages to ensure optimal performance.',
    },
    {
      id: 3,
      question: 'Do I need battery storage?',
      answer:
        'Battery storage is optional but recommended for areas with frequent power cuts. For grid-tied systems, you can use net metering to sell excess power back to the grid.',
    },
    {
      id: 4,
      question: 'How long does installation take?',
      answer:
        'Residential installations typically take 2-5 days, while commercial projects may take 1-3 weeks depending on the system size and complexity.',
    },
    {
      id: 5,
      question: 'Are there government subsidies available?',
      answer:
        'Yes! We help you apply for various government subsidies and schemes. Subsidies can cover up to 40% of the installation cost depending on your location and system type.',
    },
    {
      id: 6,
      question: 'What maintenance is required?',
      answer:
        'Solar panels require minimal maintenance - just periodic cleaning and annual inspections. We offer Annual Maintenance Contracts (AMC) to keep your system running optimally.',
    },
    {
      id: 7,
      question: 'Will solar panels work during monsoon/cloudy days?',
      answer:
        'Yes, solar panels work even on cloudy days, though at reduced efficiency (around 10-25% of peak capacity). They generate power from daylight, not just direct sunlight.',
    },
    {
      id: 8,
      question: 'Can I install solar on a rented property?',
      answer:
        "You'll need written permission from the property owner. We can help you draft the necessary agreements and ensure all legal requirements are met.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.default',
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
          Frequently Asked Questions
        </Typography>

        <Box>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '16px 0',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      my: 2,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQAccordion;
