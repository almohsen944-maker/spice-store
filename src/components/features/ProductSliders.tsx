import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { ProductCard } from './ProductCard';
import type { Product } from './ProductCard';
import { useCart } from '../../hooks/useCart';

interface ProductSlidersProps {
  title: string;
  products: Product[];
}

export const ProductSliders: React.FC<ProductSlidersProps> = ({ title, products }) => {
  const { addItem } = useCart();
  
  return (
    <motion.section 
      className="py-16 px-4"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-fluid-h2 font-serif text-brand-brown mb-8 text-center">{title}</h2>
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {products.map((product) => (
          <motion.div key={product.id} variants={fadeIn} className="min-w-[280px]">
             <ProductCard product={product} onAddToCart={(id) => addItem({ id, name: product.name, price: product.price, image: product.images[0] })} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
