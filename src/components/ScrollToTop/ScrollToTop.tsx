'use client';
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              zIndex: 1000,
              boxShadow: '0px 8px 24px rgba(255, 165, 0, 0.4)',
            }}
          >
            <KeyboardArrowUp />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
