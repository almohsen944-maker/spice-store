import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/atoms/Button';
import type { Product } from './ProductCard';
import { useLocale } from '../../hooks/useLocale';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { language } = useLocale();

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-brown/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-brand-cream p-6 rounded-luxury shadow-2xl max-w-2xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-brown/60 hover:text-brand-brown"
            >
              Close
            </button>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={product.images[0]}
                alt={product.name[language as 'en' | 'ar']}
                className="w-full aspect-square object-cover rounded-luxury"
              />
              <div className="flex flex-col">
                <h2 className="text-fluid-h2 font-serif text-brand-brown mb-4">
                  {product.name[language as 'en' | 'ar']}
                </h2>
                <p className="text-brand-brown/80 mb-6 flex-grow">
                  Premium quality spice, sourced with care for the finest culinary experience.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-brand-brown font-serif text-2xl">
                    {product.price} {product.currency}
                  </p>
                  <Button variant="gold">Add to Cart</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
