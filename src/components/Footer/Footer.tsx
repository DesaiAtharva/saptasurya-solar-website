'use client';
import React from 'react';
import { Box, Container, Typography, Link, Divider, Stack } from '@mui/material';
import { Email, Phone, LocationOn, WhatsApp, Schedule } from '@mui/icons-material';
import { Brand } from '@/components/Navbar/Navbar';
import { BUSINESS, whatsappLink } from '@/config/site';
import { trackContact } from '@/lib/analytics';

const SECTIONS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Products', path: '/products' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Solar Guides',
    links: [
      { label: 'Subsidy Calculator', path: '/subsidy' },
      { label: 'PM Surya Ghar Guide', path: '/blog/solar-subsidy-2026-guide' },
      { label: 'Solar Price 2026', path: '/blog/solar-panel-price-maharashtra-2026' },
      { label: 'On-grid vs Hybrid', path: '/blog/on-grid-off-grid-hybrid-solar' },
      { label: 'Choosing an Installer', path: '/blog/best-solar-company-pune-thane' },
    ],
  },
];

const muted = 'rgba(255,255,255,0.68)';
const linkSx = { color: muted, fontSize: '0.925rem', '&:hover': { color: '#fff' } };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#061A3A', color: '#fff', pt: { xs: 8, md: 10 }, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, md: 6 },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.4fr 1fr 1fr 1.4fr' },
          }}
        >
          <Box>
            <Brand light />
            <Typography sx={{ color: muted, mt: 2.5, maxWidth: 320, fontSize: '0.95rem' }}>
              Rooftop solar, solar pumps and water heaters for homes, societies, businesses and
              farms — with complete PM Surya Ghar subsidy and net-metering support across
              Maharashtra.
            </Typography>
          </Box>

          {SECTIONS.map((s) => (
            <Box key={s.title}>
              <Typography sx={{ fontWeight: 700, mb: 2.5 }}>{s.title}</Typography>
              <Stack spacing={1.5}>
                {s.links.map((l) => (
                  <Link key={l.path} href={l.path} underline="none" sx={linkSx}>
                    {l.label}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}

          <Box>
            <Typography sx={{ fontWeight: 700, mb: 2.5 }}>Get in touch</Typography>
            <Stack spacing={2}>
              {[
                {
                  icon: <Phone fontSize="small" />,
                  content: (
                    <Link
                      href={`tel:${BUSINESS.phoneE164}`}
                      underline="none"
                      sx={linkSx}
                      onClick={() => trackContact('call', 'footer')}
                    >
                      {BUSINESS.phoneDisplay}
                    </Link>
                  ),
                },
                {
                  icon: <WhatsApp fontSize="small" />,
                  content: (
                    <Link
                      href={whatsappLink("Hi Saptasurya Solar, I'm interested in rooftop solar.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={linkSx}
                      onClick={() => trackContact('whatsapp', 'footer')}
                    >
                      Chat on WhatsApp
                    </Link>
                  ),
                },
                {
                  icon: <Email fontSize="small" />,
                  content: (
                    <Link href={`mailto:${BUSINESS.email}`} underline="none" sx={linkSx}>
                      {BUSINESS.email}
                    </Link>
                  ),
                },
                {
                  icon: <LocationOn fontSize="small" />,
                  content: (
                    <Typography sx={{ color: muted, fontSize: '0.925rem' }}>
                      Alankapuri Complex, Laxmi Colony, Hadapsar, Pune – 411028
                    </Typography>
                  ),
                },
                {
                  icon: <Schedule fontSize="small" />,
                  content: (
                    <Typography sx={{ color: muted, fontSize: '0.925rem' }}>
                      Mon – Sat, 9:00 am – 6:00 pm
                    </Typography>
                  ),
                },
              ].map((row, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ color: 'primary.light', mt: 0.25 }}>{row.icon}</Box>
                  {row.content}
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* City links removed from the UI for now. City pages stay discoverable via
            sitemap.xml and the "near you" links on each city page. */}
        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
            © {year} Saptasurya Solar Energy. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="/privacy-policy" underline="none" sx={{ ...linkSx, fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" underline="none" sx={{ ...linkSx, fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
