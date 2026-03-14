'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeContextProvider, useTheme } from '@/context/ThemeContext';
import { lightTheme, darkTheme } from '@/theme/theme';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </ThemeContextProvider>
  );
}
