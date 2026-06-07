import { createContext } from 'react';
import type { CartContextType } from './CartContext.types';
import type { LocaleContextType } from './LocaleContext.types';
import type { ThemeContextType } from './ThemeContext.types';

export const CartContext = createContext<CartContextType | undefined>(undefined);
export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
