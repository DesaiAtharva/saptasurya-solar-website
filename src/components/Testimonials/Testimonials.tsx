'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Stack,
} from '@mui/material';
import { ArrowBack, ArrowForward, FormatQuote } from '@mui/icons-material';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/data/testimonials';

const PER_PAGE = 3;

export default function Testimonials() {
  const pages = Math.ceil(TESTIMONIALS.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            mb: { xs: 4, md: 6 },
          }}
        >
          <SectionHeader
            align="left"
            eyebrow="Customer stories"
            title="Trusted by families and businesses across Maharashtra"
            mb={0}
          />
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="Previous reviews"
              onClick={() => setPage((p) => (p - 1 + pages) % pages)}
              sx={{ border: 1, borderColor: 'divider' }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              aria-label="Next reviews"
              onClick={() => setPage((p) => (p + 1) % pages)}
              sx={{ border: 1, borderColor: 'divider' }}
            >
              <ArrowForward />
            </IconButton>
          </Stack>
        </Box>

        <Box
          sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}
        >
          {visible.map((t) => (
            <Card key={t.id} sx={{ height: '100%' }}>
              <CardContent
                sx={{
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <FormatQuote
                  sx={{ color: 'primary.main', fontSize: 36, mb: 1, transform: 'scaleX(-1)' }}
                />
                <Typography sx={{ mb: 3, flexGrow: 1 }}>{t.text}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'secondary.contrastText',
                      fontWeight: 700,
                    }}
                  >
                    {t.avatar}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: 1.3 }}>{t.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.role}
                    </Typography>
                  </Box>
                  <Rating value={t.rating} readOnly size="small" />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
