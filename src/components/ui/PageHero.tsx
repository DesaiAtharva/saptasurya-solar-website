'use client';
import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  /** Optional right-hand column (e.g. a lead form). */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}

/** Consistent hero band for inner pages: navy brand surface with a soft sun glow. */
export default function PageHero({ eyebrow, title, subtitle, actions, aside, children }: Props) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.brand',
        color: '#fff',
        pt: { xs: 14, md: 18 },
        pb: { xs: 7, md: 10 },
        backgroundImage:
          'radial-gradient(900px 420px at 85% -10%, rgba(253,186,44,0.28), transparent 60%), radial-gradient(700px 400px at -10% 110%, rgba(30,76,154,0.55), transparent 60%)',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, md: 6 },
            gridTemplateColumns: { xs: '1fr', md: aside ? '1.15fr 0.85fr' : '1fr' },
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: aside ? 'none' : 820 }}>
            {eyebrow && (
              <Typography variant="overline" component="p" sx={{ color: 'primary.light', mb: 1.5 }}>
                {eyebrow}
              </Typography>
            )}
            <Typography variant="h1" sx={{ color: '#fff' }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  mt: 2.5,
                  color: 'rgba(255,255,255,0.82)',
                  maxWidth: 680,
                  fontSize: { md: '1.2rem' },
                }}
              >
                {subtitle}
              </Typography>
            )}
            {actions && (
              <Stack direction="row" useFlexGap spacing={1.5} sx={{ mt: 4, flexWrap: 'wrap' }}>
                {actions}
              </Stack>
            )}
            {children}
          </Box>
          {aside && <Box>{aside}</Box>}
        </Box>
      </Container>
    </Box>
  );
}
