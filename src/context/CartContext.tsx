/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';
import type { CartContextType } from './CartContext.types';

export { CartProvider } from './CartProvider';
export type { CartItem, CartContextType } from './CartContext.types';

export const CartContext = createContext<CartContextType | undefined>(undefined);
