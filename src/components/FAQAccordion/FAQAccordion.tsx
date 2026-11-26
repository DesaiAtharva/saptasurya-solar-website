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
import SectionHeader from '@/components/ui/SectionHeader';

export type FAQ = { question: string; answer: string };

const DEFAULT_FAQS: FAQ[] = [
  {
    question: 'What is the starting cost for solar in Maharashtra in 2026?',
    answer:
      'A residential rooftop system in Maharashtra costs about ₹75,000 per kW for systems up to 3 kW, ₹68,000 per kW for 3.5 – 10 kW and ₹60,000 per kW above 10 kW, before subsidy. With the PM Surya Ghar subsidy (up to ₹78,000), a typical home system pays for itself in about 3 – 5 years.',
  },
  {
    question: 'How much subsidy can I get for a 3kW residential system?',
    answer:
      'Under the 2026 PM Surya Ghar guidelines, a 3kW residential system in Maharashtra can qualify for a subsidy of up to ₹78,000. We handle all the documentation and application processing for you.',
  },
  {
    question: 'Is it worth investing in bifacial panels in 2026?',
    answer:
      'Yes, bifacial panels are highly recommended for the Maharashtra climate as they capture reflected light from the roof surface, providing up to 15% more generation compared to traditional panels for a slightly higher initial cost.',
  },
  {
    question: 'What is the warranty on the system components?',
    answer:
      'We provide a 25-year performance warranty on solar panels, a 5-10 year warranty on premium inverters, and a 5-year workmanship warranty on the entire installation.',
  },
  {
    question: 'Do I need to clean the panels every day?',
    answer:
      'No, in most Maharashtra districts, a bi-weekly cleaning (once every 15 days) is sufficient. However, in heavily industrial or dusty areas like parts of Thane or Nagpur, weekly cleaning may be required for optimal yield.',
  },
  {
    question: 'What happens if there is a power cut?',
    answer:
      'For on-grid systems, the solar plant shuts down during a power cut for safety reasons (anti-islanding). If you need power during outages, we recommend a hybrid solar system with battery storage.',
  },
  {
    question: 'Will solar panels work during monsoon/cloudy days?',
    answer:
      'Yes, solar panels work even on cloudy days, though at reduced efficiency (around 10-25% of peak capacity). They generate power from daylight, not just direct sunlight.',
  },
];

interface Props {
  faqs?: FAQ[];
  title?: string;
}

const FAQAccordion = ({ faqs = DEFAULT_FAQS, title = 'Frequently asked questions' }: Props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container maxWidth="md">
        <SectionHeader eyebrow="FAQ" title={title} />
        <Box>
          {faqs.map((faq) => (
            <Accordion key={faq.question} sx={{ bgcolor: 'background.paper' }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
                sx={{ px: { xs: 2, md: 3 }, '& .MuiAccordionSummary-content': { my: 2.25 } }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3, pt: 0 }}>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQAccordion;
