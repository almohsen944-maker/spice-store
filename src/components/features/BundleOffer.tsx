import React from 'react';
import { Button } from '../ui/atoms/Button';

interface BundleOfferProps {
  products: { name: string; price: number }[];
  discount: number;
}

/**
 * Bundle offer component to encourage higher order value
 */
export const BundleOffer: React.FC<BundleOfferProps> = ({ products, discount }) => {
  return (
    <div className="bg-brand-brown/5 p-6 rounded-luxury border border-brand-brown/10">
      <h3 className="text-lg font-serif text-brand-brown mb-4">Bundle & Save</h3>
      <ul className="space-y-2 mb-6">
        {products.map((p, i) => (
          <li key={i} className="text-sm text-brand-brown/80">{p.name}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-brand-gold font-bold">{discount}% OFF</span>
        <Button variant="outline">Add Bundle</Button>
      </div>
    </div>
  );
};
