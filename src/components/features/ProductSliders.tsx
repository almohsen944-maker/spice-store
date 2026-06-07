import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from './ProductCard';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/atoms/Button';
import { useCart } from '../../hooks/useCart';

interface ProductSlidersProps {
  title: string;
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const ProductSliders: React.FC<ProductSlidersProps> = ({ title, products, onQuickView }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const { addItem } = useCart();

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-fluid-h2 font-serif text-brand-brown">{title}</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={scrollPrev}>
            <ChevronLeft />
          </Button>
          <Button variant="ghost" size="sm" onClick={scrollNext}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_280px] min-w-0">
              <ProductCard 
                product={product} 
                onAddToCart={(productId) => addItem({
                  id: productId,
                  name: product.name,
                  price: product.price,
                  image: product.images[0]
                })}
                onQuickView={onQuickView}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
