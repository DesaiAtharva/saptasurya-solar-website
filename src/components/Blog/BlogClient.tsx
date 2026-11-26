'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Box, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { ArrowForward, AccessTime } from '@mui/icons-material';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/ui/CTABand';
import { BLOG_POSTS, BlogPostMeta } from '@/data/blogPosts';

const CATEGORIES = ['All', 'Solar Costs', 'Subsidy & Finance', 'Solar Basics', 'Local Guide'];

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Card
      component={Link}
      href={`/blog/${post.slug}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
        '&:hover img': { transform: 'scale(1.04)' },
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
          style={{ objectFit: 'cover', transition: 'transform .5s ease' }}
        />
      </Box>
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <Chip label={post.category} size="small" sx={{ bgcolor: 'background.alt' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
            <AccessTime sx={{ fontSize: 16 }} />
            <Typography variant="caption">{post.readTime}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" component="h2" sx={{ mb: 1, lineHeight: 1.35 }}>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.excerpt}
        </Typography>
        <Typography
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          Read article <ArrowForward fontSize="small" />
        </Typography>
      </CardContent>
    </Card>
  );
}

const BlogClient = () => {
  const [category, setCategory] = useState('All');
  const [featured, ...rest] = BLOG_POSTS;
  const filtered = category === 'All' ? rest : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <Box>
      <PageHero
        eyebrow="Solar knowledge hub"
        title="Solar guides for Maharashtra homeowners"
        subtitle="Honest pricing, subsidy walkthroughs and buying advice — written by our solar engineers."
      />

      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Featured */}
          {category === 'All' && (
            <Card
              component={Link}
              href={`/blog/${featured.slug}`}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                mb: 6,
                '&:hover': { borderColor: 'primary.main' },
              }}
            >
              <Box sx={{ position: 'relative', minHeight: { xs: 220, md: 340 } }}>
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 600px"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <CardContent
                sx={{
                  p: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Chip
                  label="Featured guide"
                  color="primary"
                  size="small"
                  sx={{ alignSelf: 'flex-start', mb: 2 }}
                />
                <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>
                  {featured.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  {featured.excerpt}
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Read the guide
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Filter */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
            {CATEGORIES.map((c) => (
              <Chip
                key={c}
                label={c}
                clickable
                onClick={() => setCategory(c)}
                color={category === c ? 'primary' : 'default'}
                variant={category === c ? 'filled' : 'outlined'}
                sx={{ px: 1, py: 2.25, fontSize: '0.9rem' }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            }}
          >
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Box>
          {filtered.length === 0 && (
            <Typography color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
              No articles in this category yet.
            </Typography>
          )}
        </Container>
      </Box>

      <CTABand source="blog_cta" />
    </Box>
  );
};

export default BlogClient;
