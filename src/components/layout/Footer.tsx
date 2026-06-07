import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-serif mb-4">SpiceStore</h3>
          <p className="text-brand-cream/70 text-sm max-w-sm">
            Curating the finest spices from around the world, delivered with luxury and care to your kitchen.
          </p>
        </div>
        <div>
          <h4 className="font-serif mb-4">Shop</h4>
          <ul className="text-sm text-brand-cream/70 space-y-2">
            <li>All Spices</li>
            <li>Bundles</li>
            <li>Best Sellers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif mb-4">Support</h4>
          <ul className="text-sm text-brand-cream/70 space-y-2">
            <li>Contact</li>
            <li>FAQ</li>
            <li>Shipping</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
