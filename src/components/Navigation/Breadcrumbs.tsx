'use client';
import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Container, Box } from '@mui/material';
import { Home as HomeIcon, NavigateNext } from '@mui/icons-material';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.saptasuryasolar.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.path ? `https://www.saptasuryasolar.com${item.path}` : undefined,
      })),
    ],
  };

  return (
    <Box sx={{ bgcolor: 'background.alt', py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <MuiBreadcrumbs
          separator={<NavigateNext fontSize="small" sx={{ color: 'text.disabled' }} />}
          aria-label="breadcrumb"
          sx={{
            fontSize: '0.875rem',
            '& .MuiBreadcrumbs-ol': { flexWrap: 'nowrap' },
            '& li': { minWidth: 0 },
          }}
        >
          <Link
            href="/"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontWeight: 500 }}
          >
            <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
            Home
          </Link>
          {items.map((item, index) =>
            index === items.length - 1 || !item.path ? (
              <Typography
                key={item.label}
                color="text.primary"
                sx={{
                  fontWeight: 600,
                  fontSize: 'inherit',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                underline="hover"
                sx={{ color: 'text.secondary', fontWeight: 500, whiteSpace: 'nowrap' }}
              >
                {item.label}
              </Link>
            )
          )}
        </MuiBreadcrumbs>
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
