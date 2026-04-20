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
      question: 'What is the starting cost for solar in Maharashtra in 2026?',
      answer:
        'Solar system prices in Maharashtra now start from ₹75,000 for a 1kW system. With the PM Surya Ghar Yojana subsidies, the effective out-of-pocket cost is significantly lower, and the system pays for itself in less than 4 years.',
    },
    {
      id: 2,
      question: 'How much subsidy can I get for a 3kW residential system?',
      answer:
        'Under the 2026 PM Surya Ghar guidelines, a 3kW residential system in Maharashtra can qualify for a subsidy of up to ₹78,000. We handle all the documentation and application processing for you.',
    },
    {
      id: 3,
      question: 'Is it worth investing in bifacial panels in 2026?',
      answer:
        'Yes, bifacial panels are highly recommended for the Maharashtra climate as they capture reflected light from the roof surface, providing up to 15% more generation compared to traditional panels for a slightly higher initial cost.',
    },
    {
      id: 4,
      question: 'What is the warranty on the system components?',
      answer:
        'We provide a 25-year performance warranty on solar panels, a 5-10 year warranty on premium inverters, and a 5-year workmanship warranty on the entire installation.',
    },
    {
      id: 5,
      question: 'Do I need to clean the panels every day?',
      answer:
        'No, in most Maharashtra districts, a bi-weekly cleaning (once every 15 days) is sufficient. However, in heavily industrial or dusty areas like parts of Thane or Nagpur, weekly cleaning may be required for optimal yield.',
    },
    {
      id: 6,
      question: 'What happens if there is a power cut?',
      answer:
        'For on-grid systems, the solar plant shuts down during a power cut for safety reasons (anti-islanding). If you need power during outages, we recommend a hybrid solar system with battery storage.',
    },
    {
      id: 7,
      question: 'Will solar panels work during monsoon/cloudy days?',
      answer:
        'Yes, solar panels work even on cloudy days, though at reduced efficiency (around 10-25% of peak capacity). They generate power from daylight, not just direct sunlight.',
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
