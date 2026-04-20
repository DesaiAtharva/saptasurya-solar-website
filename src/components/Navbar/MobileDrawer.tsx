import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import { Close as CloseIcon, Brightness4, Brightness7, Phone } from '@mui/icons-material';

interface MobileDrawerProps {
  navItems: { label: string; path: string }[];
  pathname: string;
  router: any;
  handleDrawerToggle: () => void;
  setMobileOpen: (open: boolean) => void;
  muiTheme: any;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  navItems,
  pathname,
  router,
  handleDrawerToggle,
  setMobileOpen,
  muiTheme,
  toggleTheme,
  isDarkMode,
}) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 320 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
      }}
      role="presentation"
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/new_logo.png"
            alt="Saptasurya Logo"
            sx={{ height: '40px', mr: 1.5, objectFit: 'contain' }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: `linear-gradient(135deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.25rem',
            }}
          >
            Saptasurya Solar Energy
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'text.primary',
            '&:hover': { bgcolor: 'action.hover' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Content */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
                setMobileOpen(false);
              }}
              selected={pathname === item.path}
              sx={{
                mx: 1,
                borderRadius: 2,
                py: 1.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '& .MuiListItemText-primary': {
                    fontWeight: 700,
                  },
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: pathname === item.path ? 700 : 500,
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Drawer Footer */}
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        {/* <Button
          variant="contained"
          fullWidth
          startIcon={<Phone />}
          onClick={() => {
            router.push('/contact');
            setMobileOpen(false);
          }}
          sx={{ mb: 2 }}
        >
          Get Free Quote
        </Button> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton
            onClick={toggleTheme}
            sx={{
              bgcolor: 'action.hover',
              '&:hover': { bgcolor: 'action.selected' },
            }}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileDrawer;
