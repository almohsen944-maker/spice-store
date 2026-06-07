import type { Variants } from 'framer-motion';

/**
 * Standard luxury transitions for the Spice Store
 */
export const LUXURY_TRANSITION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom cubic-bezier for elegant feel
} as const;

export const STAGGER_TRANSITION = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
};

/**
 * Base entrance animation presets
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: LUXURY_TRANSITION },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: LUXURY_TRANSITION },
  exit: { opacity: 0, y: 30 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: LUXURY_TRANSITION },
  exit: { opacity: 0, x: 30 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: LUXURY_TRANSITION },
  exit: { opacity: 0, x: -30 },
};

/**
 * Container variants for staggered child animations
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: STAGGER_TRANSITION,
  },
};

/**
 * Interaction presets
 */
export const luxuryHover = {
  scale: 1.02,
  transition: { duration: 0.3, ease: 'easeOut' as const },
};
