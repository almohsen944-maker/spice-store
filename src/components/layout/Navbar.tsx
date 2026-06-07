import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { useCart } from '../../hooks/useCart';

export const Navbar: React.FC = () => {
  const { toggleLocale, locale } = useLocale();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif text-brand-brown">SpiceStore</Link>
        
        <div className="flex items-center gap-6">
          <button onClick={toggleLocale} className="text-sm uppercase tracking-widest text-brand-brown hover:text-brand-gold transition-colors">
            {locale === 'en' ? 'AR' : 'EN'}
          </button>
          <button className="text-brand-brown hover:text-brand-gold transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative text-brand-brown hover:text-brand-gold transition-colors">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-cream text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden text-brand-brown">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
