import React, { useEffect, useState, useMemo } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { ProductCard } from '../components/features/ProductCard';
import type { Product } from '../components/features/ProductCard';
import { mockApi } from '../services/mockApi';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    mockApi.getProducts().then(setProducts);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.categoryIds.includes(selectedCategory));
  }, [products, selectedCategory]);

  return (
    <MainLayout>
      <h1 className="text-4xl font-serif text-brand-brown mb-8">All Products</h1>
      
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-brand-brown text-white' : 'bg-brand-cream'}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('c1')}
          className={`px-4 py-2 rounded-full ${selectedCategory === 'c1' ? 'bg-brand-brown text-white' : 'bg-brand-cream'}`}
        >
          Spices
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => console.log('Add to cart', product.id)}
            onQuickView={(p) => console.log('Quick view', p.id)}
          />
        ))}
      </div>
    </MainLayout>
  );
};
