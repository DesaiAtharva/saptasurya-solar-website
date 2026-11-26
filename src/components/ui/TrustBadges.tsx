'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { VerifiedUser, AccountBalance, WorkspacePremium, Handshake } from '@mui/icons-material';

/**
 * Short trust signals shown near forms/CTAs.
 * Keep every item factually true for the business.
 */
const ITEMS = [
  { icon: <AccountBalance fontSize="small" />, label: 'PM Surya Ghar subsidy filing' },
  { icon: <VerifiedUser fontSize="small" />, label: '25-yr panel warranty' },
  { icon: <WorkspacePremium fontSize="small" />, label: '5+ years experience' },
  { icon: <Handshake fontSize="small" />, label: 'Free site survey' },
];

export default function TrustBadges({ inverted = false }: { inverted?: boolean }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.25, sm: 2.5 } }}>
      {ITEMS.map((i) => (
        <Box
          key={i.label}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            color: inverted ? 'rgba(255,255,255,0.88)' : 'text.secondary',
            '& svg': { color: inverted ? 'primary.light' : 'primary.main' },
          }}
        >
          {i.icon}
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {i.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
