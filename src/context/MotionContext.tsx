import { createContext, useContext } from 'react';

type MotionContextType = object;

export const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};
