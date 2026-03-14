import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

const mockTheme = createTheme({
  palette: {
    primary: { main: '#FFA500' },
    secondary: { main: '#2B7A0B' },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeContextProvider>
      <MuiThemeProvider theme={mockTheme}>{component}</MuiThemeProvider>
    </ThemeContextProvider>
  );
};

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getAllByText(/Saptasurya/i).length).toBeGreaterThan(0);
  });

  it('renders all navigation items on desktop', () => {
    renderWithTheme(<Navbar />);
    const navItems = [
      'Home',
      'About Us',
      'Products',
      'Services',
      'Portfolio',
      'Subsidy & Finance',
      'Blog',
    ];

    // We expect these to be in the DOM
    navItems.forEach((item) => {
      const elements = screen.getAllByText(item);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders Get Quote button', () => {
    renderWithTheme(<Navbar />);
    const buttons = screen.getAllByText(/Get Quote/i);
    expect(buttons.length).toBeGreaterThan(0);
  });
});
