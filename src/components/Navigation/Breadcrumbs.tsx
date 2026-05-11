'use client';
import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Container, Box } from '@mui/material';
import { Home as HomeIcon, NavigateNext } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const router = useRouter();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://saptasuryasolar.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.path ? `https://saptasuryasolar.com${item.path}` : undefined,
      })),
    ],
  };

  return (
    <Box
      sx={{ bgcolor: 'background.paper', py: 2, borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <MuiBreadcrumbs
          separator={<NavigateNext fontSize="small" sx={{ color: 'text.disabled' }} />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              fontWeight: 500,
              cursor: 'pointer',
            }}
            onClick={() => router.push('/')}
          >
            <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
            Home
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return isLast ? (
              <Typography key={item.label} color="text.primary" sx={{ fontWeight: 600 }}>
                {item.label}
              </Typography>
            ) : (
              <Link
                key={item.label}
                underline="hover"
                sx={{ color: 'text.secondary', fontWeight: 500, cursor: 'pointer' }}
                onClick={() => item.path && router.push(item.path)}
              >
                {item.label}
              </Link>
            );
          })}
        </MuiBreadcrumbs>
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
