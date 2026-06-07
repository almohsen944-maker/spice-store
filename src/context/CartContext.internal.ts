import { createContext } from 'react';

export interface CartItem {
  id: string;
  name: { en: string; ar: string };
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
