'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  /** Light text for use on dark/brand backgrounds. */
  inverted?: boolean;
  component?: 'h1' | 'h2' | 'h3';
  mb?: number | object;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
  component = 'h2',
  mb = { xs: 4, md: 6 },
}: Props) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb,
        maxWidth: align === 'center' ? 760 : 'none',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          component="p"
          sx={{
            color: inverted ? 'primary.light' : 'primary.main',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5,
            '&::before': {
              content: '""',
              width: 18,
              height: 2,
              borderRadius: 2,
              bgcolor: 'currentColor',
            },
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        component={component}
        sx={{ color: inverted ? '#fff' : 'text.primary' }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, color: inverted ? 'rgba(255,255,255,0.78)' : 'text.secondary' }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
