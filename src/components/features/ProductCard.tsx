import React from 'react';
import { motion } from 'framer-motion';
import { luxuryHover, fadeIn } from '../../utils/animations';
import { Button } from '../ui/atoms/Button';
import { Badge } from '../ui/atoms/Badge';
import { useLocale } from '../../hooks/useLocale';
import { cn } from '../../utils/cn';

// Strictly aligned with data-model.md
export interface Product {
  id: string;
  name: { en: string; ar: string };
  slug: string;
  description: { en: string; ar: string };
  price: number;
  currency: string;
  images: string[];
  categoryIds: string[];
  rating: number;
  reviewsCount: number;
  isBestSeller: boolean;
  isFeatured: boolean;
  stock: number;
  tags: string[];
  // offers: Offer[]; // Omitted for now as Offer interface not defined in data-model.md
}

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
  onAddToCart: (productId: string) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid', onAddToCart, onQuickView }) => {
  const { language } = useLocale();
  const name = product.name[language as 'en' | 'ar'];

  return (
    <motion.div
      className={cn(
        "group relative bg-brand-cream rounded-luxury overflow-hidden border border-brand-brown/10",
        layout === 'list' ? "flex gap-4" : "flex flex-col"
      )}
      whileHover={luxuryHover}
      variants={fadeIn}
    >
      {product.isBestSeller && (
        <Badge className="absolute top-4 left-4 z-10" variant="gold">
          Best Seller
        </Badge>
      )}
      
      <div className={cn("relative overflow-hidden", layout === 'list' ? "w-1/3" : "aspect-square")}>
        <img
          src={product.images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-brown/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {onQuickView && (
          <Button
            variant="secondary"
            className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            onClick={() => onQuickView(product)}
          >
            Quick View
          </Button>
        )}
      </div>
      
      <div className={cn("p-4", layout === 'list' ? "flex-1 flex flex-col justify-center" : "")}>
        <h4 className="text-fluid-body font-semibold text-brand-brown mb-2">{name}</h4>
        <div className="flex items-center justify-between">
          <p className="text-brand-brown font-serif text-lg">
            {product.price} {product.currency}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
