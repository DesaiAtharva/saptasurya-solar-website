import { createTheme } from '@mui/material/styles';

// Premium Solar Theme Colors
const solarTheme = {
  primary: '#D4AF37',      // Metallic Gold
  secondary: '#005C97',    // Deep Solar Blue
  accent: '#B8860B',       // Dark Goldenrod
  background: '#F8F9FA',   // Soft Light Background
  text: '#050A15',         // Deep Blue/Black Text
};

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: solarTheme.primary,
      light: '#F8E076',
      dark: '#AA8529',
      contrastText: '#050A15', // Dark text on gold button
    },
    secondary: {
      main: solarTheme.secondary,
      light: '#3380B4',
      dark: '#00406A',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: solarTheme.accent,
      light: '#D4A017',
      dark: '#8B6508',
    },
    background: {
      default: solarTheme.background,
      paper: '#FFFFFF',
    },
    text: {
      primary: solarTheme.text,
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0px 4px 12px rgba(212, 175, 55, 0.2)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(212, 175, 55, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid rgba(0,0,0,0.05)',
          '&:hover': {
            boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)',
            borderColor: 'rgba(212, 175, 55, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: solarTheme.primary,
      light: '#F8E076',
      dark: '#AA8529',
      contrastText: '#050A15', // Dark text on gold button
    },
    secondary: {
      main: solarTheme.secondary,
      light: '#3380B4',
      dark: '#00406A',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: solarTheme.accent,
      light: '#D4A017',
      dark: '#8B6508',
    },
    background: {
      default: '#050A15', // Very deep blue/black
      paper: '#0A1128',   // Deep blue
    },
    text: {
      primary: '#F2F7F5',
      secondary: '#94A3B8',
    },
  },
  components: {
    ...lightTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
          backgroundColor: 'rgba(5, 10, 21, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)', // Subtle gold border
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0px 4px 12px rgba(212, 175, 55, 0.1)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(212, 175, 55, 0.3)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: 'rgba(212, 175, 55, 0.4)',
          color: '#D4AF37',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
          backgroundColor: '#0A1128',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 8px 30px rgba(212, 175, 55, 0.15)',
            transform: 'translateY(-4px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0A1128',
          borderRight: '1px solid rgba(212, 175, 55, 0.1)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0A1128',
          border: '1px solid rgba(212, 175, 55, 0.1)',
        },
      },
    },
  },
});


