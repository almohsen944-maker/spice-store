import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { ProductCard } from '../components/features/ProductCard';
import type { Product } from '../components/features/ProductCard';
import { mockApi } from '../services/mockApi';
import { useCart } from '../hooks/useCart';
import { staggerContainer, fadeInUp } from '../utils/animations';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const { addItem } = useCart();

  useEffect(() => {
    mockApi.getProducts().then(setProducts);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (filter !== 'all') {
      result = result.filter(p => p.categoryIds.includes(filter));
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, filter, sortBy]);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-fluid-h1 font-serif text-brand-brown mb-8 text-center">
          Our Spices
        </h1>
        
        <div className="flex justify-center gap-4 mb-12">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-brand-brown/20 rounded-premium"
          >
            <option value="all">All Categories</option>
            {/* Ideally fetch categories */}
          </select>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-brand-brown/20 rounded-premium"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard 
                product={product} 
                onAddToCart={(productId) => addItem({
                  id: productId,
                  name: product.name,
                  price: product.price,
                  image: product.images[0]
                })}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};
