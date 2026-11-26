import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar, { NAV_ITEMS } from '../Navbar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@/theme/theme';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}));

const renderNavbar = () =>
  render(
    <ThemeContextProvider>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
      </ThemeProvider>
    </ThemeContextProvider>
  );

describe('Navbar', () => {
  it('renders the brand', () => {
    renderNavbar();
    expect(screen.getAllByText(/Saptasurya/i).length).toBeGreaterThan(0);
  });

  it('renders every navigation link', () => {
    renderNavbar();
    NAV_ITEMS.forEach((item) => {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
    });
  });

  it('renders the Get Free Quote button', () => {
    renderNavbar();
    expect(screen.getAllByText(/Get Free Quote/i).length).toBeGreaterThan(0);
  });
});
