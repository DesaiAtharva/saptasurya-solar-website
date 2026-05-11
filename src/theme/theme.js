import { createTheme } from '@mui/material/styles';

// Premium Solar Theme Colors (Gold & Neutral)
const solarTheme = {
  primary: '#D4AF37', // Metallic Gold
  primaryLight: '#F8E076',
  primaryDark: '#AA8529',
  goldGradient: 'linear-gradient(135deg, #D4AF37 0%, #AA8529 100%)',
  black: '#000000',
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  deepBlack: '#050A15',
};

// Common Typography
const typography = {
  fontFamily: "'Outfit', 'Inter', sans-serif",
  h1: {
    fontWeight: 800,
    fontSize: '4rem',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width:768px)': { fontSize: '2.5rem' },
  },
  h2: {
    fontWeight: 800,
    fontSize: '3rem',
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    '@media (max-width:768px)': { fontSize: '2rem' },
  },
  h3: {
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: 1.3,
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.75rem',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.25rem',
  },
  h6: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  body1: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
};

// Common Components
const commonComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '12px 32px',
        fontSize: '1rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)',
        },
      },
      containedPrimary: {
        background: solarTheme.goldGradient,
        color: '#000',
        '&:hover': {
          background: 'linear-gradient(135deg, #F8E076 0%, #D4AF37 100%)',
        },
      },
      outlinedPrimary: {
        borderWidth: 2,
        borderColor: solarTheme.primary,
        '&:hover': {
          borderWidth: 2,
          backgroundColor: 'rgba(212, 175, 55, 0.05)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 24,
        transition: 'all 0.4s ease',
        border: '1px solid transparent',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backdropFilter: 'blur(20px)',
      },
    },
  },
};

// Light Theme (White & Gold)
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: solarTheme.primary,
      light: solarTheme.primaryLight,
      dark: solarTheme.primaryDark,
      contrastText: '#000000',
    },
    secondary: {
      main: '#1A1A1A', // Rich Black for contrast
    },
    background: {
      default: solarTheme.white,
      paper: '#FDFCFB',
    },
    text: {
      primary: '#121212',
      secondary: '#4A4A4A',
    },
    divider: 'rgba(212, 175, 55, 0.12)',
  },
  typography,
  shape: { borderRadius: 16 },
  components: {
    ...commonComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiAppBar.styleOverrides,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiCard.styleOverrides,
          backgroundColor: solarTheme.white,
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
          '&:hover': {
            borderColor: 'rgba(212, 175, 55, 0.3)',
            boxShadow: '0 20px 60px rgba(212, 175, 55, 0.1)',
          },
        },
      },
    },
  },
});

// Dark Theme (Black & Gold)
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: solarTheme.primary,
      light: solarTheme.primaryLight,
      dark: solarTheme.primaryDark,
      contrastText: '#000000',
    },
    secondary: {
      main: solarTheme.white,
    },
    background: {
      default: '#000000',
      paper: '#0A0A0A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
    },
    divider: 'rgba(212, 175, 55, 0.15)',
  },
  typography,
  shape: { borderRadius: 16 },
  components: {
    ...commonComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiAppBar.styleOverrides,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiCard.styleOverrides,
          backgroundColor: '#0A0A0A',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          '&:hover': {
            borderColor: 'rgba(212, 175, 55, 0.4)',
            boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        ...commonComponents.MuiButton.styleOverrides,
        outlinedPrimary: {
          ...commonComponents.MuiButton.styleOverrides.outlinedPrimary,
          color: solarTheme.primary,
        },
      },
    },
  },
});
