import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/atoms/Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-brown/10">
              <h2 className="text-xl font-serif text-brand-brown flex items-center gap-2">
                <ShoppingBag size={20} />
                Cart ({totalItems})
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-brand-brown/60 hover:text-brand-brown transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-brand-brown/20 mb-4" />
                  <p className="text-brand-brown/60 mb-2">Your cart is empty</p>
                  <Button variant="outline" onClick={onClose}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4" role="list">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 p-4 rounded-premium bg-brand-brown/[0.02] border border-brand-brown/5"
                    >
                      <div className="w-20 h-20 rounded-premium overflow-hidden bg-brand-brown/5 flex-shrink-0">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-brand-brown truncate">
                          {item.name.en}
                        </p>
                        <p className="text-brand-gold font-serif font-bold mt-1">
                          {item.price} USD
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-brand-brown/20 text-brand-brown/60 hover:bg-brand-brown/5 transition-colors"
                            aria-label={`Decrease quantity of ${item.name.en}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium text-brand-brown w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-brand-brown/20 text-brand-brown/60 hover:bg-brand-brown/5 transition-colors"
                            aria-label={`Increase quantity of ${item.name.en}`}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-brand-brown/30 hover:text-red-500 transition-colors self-start"
                        aria-label={`Remove ${item.name.en} from cart`}
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-brown/10 p-6 space-y-4">
                <div className="flex items-center justify-between text-brand-brown">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-serif font-bold">{totalPrice} USD</span>
                </div>
                <Link to="/checkout" onClick={onClose}>
                  <Button variant="gold" className="w-full">
                    Checkout
                  </Button>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full text-center text-sm text-brand-brown/50 hover:text-brand-brown transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
