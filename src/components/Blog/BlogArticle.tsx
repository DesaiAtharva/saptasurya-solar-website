'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Grid,
  Card,
  CardContent,
  Link,
  Button,
} from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import Image from 'next/image';
import Breadcrumbs from '@/components/Navigation/Breadcrumbs';
import SolarCalculator from '@/components/SolarCalculator/SolarCalculator';
import type { BlogPostMeta } from '@/data/blogPosts';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';
import type { Block } from '@/data/blogContent';

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'h2':
      return (
        <Typography key={i} variant="h4" component="h2" sx={{ fontWeight: 800, mt: 5, mb: 2 }}>
          {b.text}
        </Typography>
      );
    case 'p':
      return (
        <Typography key={i} sx={{ mb: 2.5, lineHeight: 1.9, fontSize: '1.08rem' }}>
          {b.text}
        </Typography>
      );
    case 'ul':
      return (
        <Box key={i} component="ul" sx={{ pl: 3, mb: 3 }}>
          {b.items.map((it) => (
            <Typography
              key={it}
              component="li"
              sx={{ mb: 1, lineHeight: 1.8, fontSize: '1.05rem' }}
            >
              {it}
            </Typography>
          ))}
        </Box>
      );
    case 'table':
      return (
        <TableContainer
          key={i}
          component={Paper}
          variant="outlined"
          sx={{ mb: 3, borderRadius: 2 }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                {b.head.map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 700, bgcolor: 'action.hover' }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {b.rows.map((r, ri) => (
                <TableRow key={ri}>
                  {r.map((c, ci) => (
                    <TableCell key={ci}>{c}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    case 'tip':
      return (
        <Alert key={i} severity="info" sx={{ mb: 3, fontSize: '1rem' }}>
          {b.text}
        </Alert>
      );
  }
}

export default function BlogArticle({
  post,
  blocks,
  related,
}: {
  post: BlogPostMeta;
  blocks: Block[];
  related: BlogPostMeta[];
}) {
  const { openPopup } = useLeadPopup();
  return (
    <Box sx={{ pt: { xs: '68px', md: '76px' } }}>
      <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: post.title }]} />
      <Container maxWidth="md" component="article" sx={{ py: 5 }}>
        <Chip label={post.category} size="small" sx={{ mb: 2, bgcolor: 'background.alt' }} />
        <Typography
          variant="h1"
          sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2 }}
        >
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, color: 'text.secondary', mb: 4, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CalendarToday fontSize="small" />
            <Typography variant="body2">{post.date}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <AccessTime fontSize="small" />
            <Typography variant="body2">{post.readTime}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: 3,
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400, mb: 3, lineHeight: 1.7 }}
        >
          {post.excerpt}
        </Typography>
        {blocks.map(renderBlock)}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: 'background.brand',
            color: '#fff',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: { sm: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: '1.25rem' }}>
              Want an exact quote for your home?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.78)' }}>
              Free site survey + subsidy check by our solar engineer.
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={() => openPopup('blog_inline')}
            sx={{ flexShrink: 0 }}
          >
            Get Free Quote
          </Button>
        </Box>
      </Container>

      <Box
        sx={{ bgcolor: 'background.paper', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}
      >
        <SolarCalculator title="Calculate Your Solar Savings" />
      </Box>

      {related.length > 0 && (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}
          >
            Related Articles
          </Typography>
          <Grid container spacing={3}>
            {related.map((r) => (
              <Grid item xs={12} md={4} key={r.slug}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Chip label={r.category} size="small" sx={{ mb: 1.5 }} />
                    <Link href={`/blog/${r.slug}`} underline="hover" color="inherit">
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 700, lineHeight: 1.4 }}
                      >
                        {r.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}
