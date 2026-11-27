import { createTheme } from '@mui/material/styles';

/**
 * Saptasurya design system — "clean & trustworthy".
 * Brand navy (from the logo) for identity & text, sun-orange for actions.
 * primary   = sun-orange  → buttons, CTAs, highlights
 * secondary = brand navy  → brand surfaces, icons, links
 * background.alt          → alternating section background (use `bgcolor: 'background.alt'`)
 */
export const brand = {
  /** Text/CTA orange on light surfaces — WCAG AA: 5.2:1 on cream, 4.8:1 on alt cream, 5.6:1 white-on-orange. */
  orangeText: '#B93E0B',
  orangeDeep: '#9A3412',
  orange: '#EA580C',
  orangeLight: '#FB923C',
  orangeDark: '#C2410C',
  navy: '#0B2A5B',
  navyLight: '#1E4C9A',
  navyDark: '#061A3A',
  sun: '#FDBA2C',
};

const fontFamily =
  "var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

/** Display serif (Fraunces) for big headlines — warm, with character. */
export const displayFont = "var(--font-display), 'Fraunces', Georgia, 'Times New Roman', serif";

const typography = {
  fontFamily,
  h1: {
    fontFamily: displayFont,
    fontWeight: 500,
    fontSize: 'clamp(2.5rem, 1.6rem + 3.4vw, 4.5rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.03em',
    fontVariationSettings: '"SOFT" 50, "opsz" 144',
  },
  h2: {
    fontFamily: displayFont,
    fontWeight: 500,
    fontSize: 'clamp(2rem, 1.4rem + 2.2vw, 3.25rem)',
    lineHeight: 1.08,
    letterSpacing: '-0.025em',
    fontVariationSettings: '"SOFT" 50, "opsz" 120',
  },
  h3: {
    fontFamily: displayFont,
    fontWeight: 500,
    fontSize: 'clamp(1.65rem, 1.3rem + 1.3vw, 2.4rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    fontVariationSettings: '"SOFT" 50, "opsz" 72',
  },
  h4: {
    fontWeight: 700,
    fontSize: 'clamp(1.35rem, 1.2rem + 0.6vw, 1.75rem)',
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  },
  h5: { fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.35 },
  h6: { fontWeight: 700, fontSize: '1.075rem', lineHeight: 1.4 },
  subtitle1: { fontSize: '1.125rem', lineHeight: 1.6 },
  body1: { fontSize: '1rem', lineHeight: 1.7 },
  body2: { fontSize: '0.925rem', lineHeight: 1.6 },
  overline: { fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.75rem' },
  button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
};

function components(mode) {
  const dark = mode === 'dark';
  const border = dark ? 'rgba(255,255,255,0.08)' : '#E9E1D3';
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily },
        '::selection': { background: brand.orange, color: '#fff' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 22px',
          fontSize: '0.975rem',
          transition: 'background-color .2s, box-shadow .2s, border-color .2s, color .2s',
        },
        sizeLarge: { padding: '13px 28px', fontSize: '1.05rem' },
        sizeSmall: { padding: '6px 14px', fontSize: '0.875rem' },
        containedPrimary: {
          boxShadow: '0 6px 16px -6px rgba(234,88,12,0.55)',
          '&:hover': {
            backgroundColor: dark ? brand.orange : brand.orangeDeep,
            boxShadow: '0 8px 20px -6px rgba(234,88,12,0.6)',
          },
        },
        outlined: { borderWidth: 1.5, '&:hover': { borderWidth: 1.5 } },
        outlinedPrimary: { borderColor: dark ? brand.orangeLight : brand.orange },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${border}`,
          backgroundColor: dark ? '#0F1B30' : '#FFFFFF',
          boxShadow: dark
            ? 'none'
            : '0 1px 2px rgba(16,24,40,0.04), 0 4px 16px -8px rgba(16,24,40,0.08)',
          transition: 'box-shadow .25s ease, transform .25s ease, border-color .25s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: { rounded: { borderRadius: 16 } },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 600, borderRadius: 8 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: dark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
        },
      },
    },
    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true },
      styleOverrides: {
        root: {
          border: `1px solid ${border}`,
          borderRadius: 14,
          marginBottom: 12,
          '&:before': { display: 'none' },
          '&.Mui-expanded': { marginBottom: 12 },
        },
      },
    },
    MuiDialog: {
      styleOverrides: { paper: { borderRadius: 20 } },
    },
    MuiToggleButton: {
      styleOverrides: { root: { textTransform: 'none', borderRadius: 10 } },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
    },
    // Subtitles are paragraphs, not <h6> — keeps heading levels sequential (a11y).
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
          inherit: 'p',
        },
      },
    },
  };
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.orangeText,
      light: brand.orange,
      dark: brand.orangeDeep,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: brand.navy,
      light: brand.navyLight,
      dark: brand.navyDark,
      contrastText: '#FFFFFF',
    },
    background: { default: '#FBF6EE', paper: '#FFFFFF', alt: '#F4ECDF', brand: brand.navyDark },
    text: { primary: '#0F1B33', secondary: '#4B5871' },
    divider: '#E9E1D3',
    success: { main: '#15803D' }, // 5.0:1 on white (AA for text)
  },
  typography,
  shape: { borderRadius: 12 },
  components: components('light'),
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F97316',
      light: brand.orangeLight,
      dark: brand.orange,
      // Dark text on bright orange: 6.9:1 (white on #F97316 would only be ~2.8:1).
      contrastText: '#1C0A02',
    },
    secondary: {
      main: '#8FB3F0',
      light: '#B9D0F7',
      dark: brand.navyLight,
      contrastText: '#061A3A',
    },
    background: { default: '#0A1324', paper: '#0F1B30', alt: '#0D182B', brand: '#071531' },
    text: { primary: '#E8EEF8', secondary: '#9DAAC0' },
    divider: 'rgba(255,255,255,0.08)',
    success: { main: '#22C55E' },
  },
  typography,
  shape: { borderRadius: 12 },
  components: components('dark'),
});
