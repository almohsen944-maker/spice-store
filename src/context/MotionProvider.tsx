import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionContext } from './MotionContext';

/**
 * Provides global AnimatePresence and shared motion configuration
 */
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MotionContext.Provider value={{}}>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </MotionContext.Provider>
  );
};
