/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';
import type { LocaleContextType } from './LocaleContext.types';

export { LocaleProvider } from './LocaleProvider';
export type {
  Locale,
  Direction,
  LocaleContextType,
} from './LocaleContext.types';

export const LocaleContext =
  createContext<LocaleContextType | undefined>(undefined);