import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * Hook to consume Cart state with optimistic UI logic
 */
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
