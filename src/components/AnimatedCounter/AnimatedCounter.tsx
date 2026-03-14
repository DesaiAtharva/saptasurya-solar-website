'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({ value, suffix = '', duration = 2, delay = 0 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <Box ref={ref}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
        }}
      >
        {displayValue.toLocaleString()}
        {suffix}
      </Typography>
    </Box>
  );
};

export default AnimatedCounter;
