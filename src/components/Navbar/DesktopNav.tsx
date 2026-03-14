import React from 'react';
import { Box, Button } from '@mui/material';

interface DesktopNavProps {
  navItems: { label: string; path: string }[];
  pathname: string;
  router: any;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, pathname, router }) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'flex' },
        gap: { lg: 1, xl: 2 },
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        mx: { lg: 1, xl: 4 },
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item.label}
          onClick={() => router.push(item.path)}
          sx={{
            color: pathname === item.path ? 'primary.main' : 'text.primary',
            fontWeight: pathname === item.path ? 700 : 500,
            fontSize: { lg: '0.9rem', xl: '1rem' },
            position: 'relative',
            px: { lg: 2, xl: 3 }, // More flexible padding
            height: '48px',
            minWidth: 'auto', // Remove fixed width
            textTransform: 'none',
            whiteSpace: 'nowrap',
            lineHeight: 1.2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: pathname === item.path ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
              width: pathname === item.path ? '60%' : '0%', // Slightly narrower than text
              height: '3px',
              backgroundColor: 'primary.main',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            },
            '&:hover': {
              color: 'primary.main',
              '&::after': {
                width: '60%',
                transform: 'translateX(-50%)',
              },
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNav;
