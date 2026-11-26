'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2rem', md: '2.8rem' } }}
        >
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Last updated: {updated}
        </Typography>
        <Typography sx={{ mb: 4, lineHeight: 1.8 }}>{intro}</Typography>
        {sections.map((s) => (
          <Box key={s.heading} sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {s.heading}
            </Typography>
            {s.body.map((p, i) => (
              <Typography key={i} color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.8 }}>
                {p}
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
