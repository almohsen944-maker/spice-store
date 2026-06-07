import { useEffect } from 'react';

/**
 * Native implementation of smooth scrolling to avoid dependency issues
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};
