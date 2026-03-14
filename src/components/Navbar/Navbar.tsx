'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  useScrollTrigger,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, Phone } from '@mui/icons-material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '@/context/ThemeContext';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import DesktopNav from './DesktopNav';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const router = useRouter();
  const pathname = usePathname();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    // { label: 'Portfolio', path: '/portfolio' },
    // { label: 'Subsidy & Finance', path: '/subsidy' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? muiTheme.palette.mode === 'dark'
              ? 'rgba(30, 41, 59, 0.98)'
              : 'rgba(255, 255, 255, 0.98)'
            : 'transparent',
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0px 4px 20px rgba(0,0,0,0.1)' : 'none',
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: { xs: 1, sm: 1.5 },
              minHeight: { xs: 64, sm: 70 },
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  background: `linear-gradient(135deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => router.push('/')}
              >
                <Box
                  component="img"
                  src="/new_logo.png"
                  alt="Logo"
                  sx={{
                    height: { xs: '60px', sm: '75px', md: '85px' },
                    width: 'auto',
                    mr: { xs: 1.5, md: 2 },
                    objectFit: 'contain',
                    // Removed filter for a cleaner edge
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    display: { xs: 'none', lg: 'inline' },
                    whiteSpace: 'nowrap',
                    lineHeight: 1,
                    background: `linear-gradient(135deg, #D4AF37 0%, #F8E076 50%, #AA8529 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  Saptasurya Solar Energy
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: 'none', sm: 'inline', lg: 'none' }, whiteSpace: 'nowrap' }}
                >
                  Saptasurya Solar
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: 'inline', sm: 'none' }, whiteSpace: 'nowrap' }}
                >
                  Saptasurya
                </Box>
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <DesktopNav navItems={navItems} pathname={pathname} router={router} />

            {/* Desktop Actions */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'rotate(180deg)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/contact')}
                startIcon={<Phone />}
                sx={{
                  ml: 1,
                  px: { lg: 2, xl: 3 },
                  py: 1,
                  fontSize: { lg: '0.875rem', xl: '1rem' },
                  fontWeight: 600,
                  boxShadow: `0px 4px 12px ${muiTheme.palette.primary.main}40`,
                  '&:hover': {
                    boxShadow: `0px 6px 16px ${muiTheme.palette.primary.main}60`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Quote
              </Button> */}
            </Box>

            {/* Tablet Navigation (Condensed) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex', lg: 'none' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {navItems.slice(0, 4).map((item) => (
                <Button
                  key={item.label}
                  onClick={() => router.push(item.path)}
                  size="small"
                  sx={{
                    color: pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: pathname === item.path ? 700 : 500,
                    fontSize: '0.8rem',
                    minWidth: 'auto',
                    px: 1,
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} size="small" sx={{ color: 'text.primary' }}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Actions */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '100%', sm: 320 },
          },
        }}
      >
        <MobileDrawer
          navItems={navItems}
          pathname={pathname}
          router={router}
          handleDrawerToggle={handleDrawerToggle}
          setMobileOpen={setMobileOpen}
          muiTheme={muiTheme}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
