/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';
import type { ThemeContextType } from './ThemeContext.types';

export { ThemeProvider } from './ThemeProvider';
export type {
  Theme,
  ThemeContextType,
} from './ThemeContext.types';

export const ThemeContext =
  createContext<ThemeContextType | undefined>(undefined);