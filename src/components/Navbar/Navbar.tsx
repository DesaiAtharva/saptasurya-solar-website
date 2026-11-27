'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  useScrollTrigger,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close,
  DarkModeOutlined,
  LightModeOutlined,
  Phone,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import LogoMark from '@/components/Logo/LogoMark';
import { useLeadPopup } from '@/components/LeadPopup/LeadPopupContext';
import { trackContact } from '@/lib/analytics';
import { BUSINESS, whatsappLink } from '@/config/site';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Subsidy', path: '/subsidy' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export function Brand({ light = false }: { light?: boolean }) {
  const muiTheme = useMuiTheme();
  return (
    <Box
      component={Link}
      href="/"
      aria-label="Saptasurya Solar — home"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.25,
        textDecoration: 'none',
        color: 'inherit',
        flexShrink: 0,
      }}
    >
      <Box sx={{ width: { xs: 40, md: 46 }, height: { xs: 40, md: 46 } }}>
        <LogoMark size="100%" light={light || muiTheme.palette.mode === 'dark'} />
      </Box>
      <Box sx={{ lineHeight: 1 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontWeight: 800,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            letterSpacing: '-0.02em',
            color: light ? '#fff' : 'text.primary',
            lineHeight: 1.1,
          }}
        >
          Saptasurya
        </Typography>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontWeight: 700,
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            color: light ? 'primary.light' : 'primary.main',
            textTransform: 'uppercase',
          }}
        >
          Solar Energy
        </Typography>
      </Box>
    </Box>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const pathname = usePathname() || '/';
  const { openPopup } = useLeadPopup();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  // Transparent over the full-bleed dawn hero on the home page, solid once scrolled.
  const overHero = pathname === '/' && !scrolled;
  const fg = overHero ? '#fff' : 'text.primary';

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          // Same colour as the top of the hero sky — looks seamless and gives the logo a real contrast background.
          bgcolor: overHero ? '#040F24' : 'background.default',
          borderBottom: 1,
          borderColor: scrolled ? 'divider' : 'transparent',
          boxShadow: scrolled ? '0 4px 20px -12px rgba(15,27,51,0.25)' : 'none',
          transition: 'background-color .3s, box-shadow .3s, border-color .3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 2 }}>
            <Brand light={overHero} />

            <Box
              component="nav"
              sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.25, mx: 'auto' }}
            >
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  href={item.path}
                  color="inherit"
                  sx={{
                    px: 1.5,
                    py: 1,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: isActive(item.path) ? (overHero ? '#FDBA2C' : 'primary.main') : fg,
                    '&:hover': {
                      bgcolor: overHero ? 'rgba(255,255,255,0.08)' : 'action.hover',
                      color: overHero ? '#FDBA2C' : 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ ml: { xs: 'auto', lg: 0 } }}
            >
              <Tooltip title={isDarkMode ? 'Light mode' : 'Dark mode'}>
                <IconButton
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  sx={{ color: overHero ? 'rgba(255,255,255,0.85)' : 'text.secondary' }}
                >
                  {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
              </Tooltip>
              <Button
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackContact('call', 'navbar')}
                startIcon={<Phone />}
                color="inherit"
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  fontWeight: 700,
                  color: fg,
                  whiteSpace: 'nowrap',
                }}
              >
                {BUSINESS.phoneDisplay.replace('+91 ', '')}
              </Button>
              <Button
                variant="contained"
                onClick={() => openPopup('navbar')}
                sx={{ display: { xs: 'none', sm: 'inline-flex' }, whiteSpace: 'nowrap' }}
              >
                Get Free Quote
              </Button>
              <IconButton
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                sx={{ display: { lg: 'none' }, color: fg }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 360 },
            bgcolor: 'background.default',
            backgroundImage: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 1.5,
          }}
        >
          <Brand />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1.5, py: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              href={item.path}
              onClick={() => setOpen(false)}
              selected={isActive(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&.Mui-selected': { bgcolor: 'action.hover', color: 'primary.main' },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.05rem' }}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2.5, mt: 'auto', pb: 4, display: 'grid', gap: 1.25 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setOpen(false);
              openPopup('mobile_menu');
            }}
          >
            Get Free Quote
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<Phone />}
            href={`tel:${BUSINESS.phoneE164}`}
            onClick={() => trackContact('call', 'mobile_menu')}
          >
            Call {BUSINESS.phoneDisplay}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<WhatsApp />}
            href={whatsappLink("Hi Saptasurya Solar, I'm interested in rooftop solar.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('whatsapp', 'mobile_menu')}
          >
            WhatsApp Us
          </Button>
          <Button
            color="inherit"
            onClick={toggleTheme}
            startIcon={isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
          >
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
