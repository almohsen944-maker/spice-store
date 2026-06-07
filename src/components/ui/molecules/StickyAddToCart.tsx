import React from 'react';

interface StickyAddToCartProps {
  price: number;
  onAddToCart: () => void;
}

/**
 * Mobile-first sticky add-to-cart bar with scroll-visibility logic
 */
export const StickyAddToCart: React.FC<StickyAddToCartProps> = ({ price, onAddToCart }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-cream border-t border-brand-brown/10 p-4 flex items-center justify-between md:hidden z-40">
      <div className="text-brand-brown font-medium">{price} AED</div>
      <button 
        onClick={onAddToCart}
        className="bg-brand-gold text-brand-cream px-6 py-2 rounded-premium"
      >
        Add to Cart
      </button>
    </div>
  );
};
