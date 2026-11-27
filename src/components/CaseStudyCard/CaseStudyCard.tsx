'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

export type CaseStudy = {
  id: number;
  title: string;
  image: string;
  location: string;
  capacity: string;
  savings: string;
  description: string;
  category: string;
};

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const d = caseStudy;
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:hover': { transform: 'translateY(-4px)' },
        '&:hover img': { transform: 'scale(1.04)' },
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
        <Image
          src={d.image}
          alt={d.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
          style={{ objectFit: 'cover', transition: 'transform .5s ease' }}
        />
        <Chip
          label={d.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: 'rgba(6,26,58,0.85)',
            color: '#fff',
          }}
        />
      </Box>
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h2" sx={{ mb: 0.75 }}>
          {d.title}
        </Typography>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}
        >
          <LocationOn sx={{ fontSize: 18, color: 'primary.main' }} />
          <Typography variant="body2">{d.location}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, flexGrow: 1 }}>
          {d.description}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            pt: 2,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
              Capacity
            </Typography>
            <Typography sx={{ fontWeight: 800 }}>{d.capacity}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
              Annual savings
            </Typography>
            <Typography sx={{ fontWeight: 800, color: 'success.main' }}>{d.savings}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
