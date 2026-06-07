import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/features/Hero';
import { ProductSliders } from '../components/features/ProductSliders';
import { WhyChooseUs } from '../components/features/WhyChooseUs';
import { InstagramGallery } from '../components/features/InstagramGallery';
import type { Product } from '../components/features/ProductCard';
import { mockApi } from '../services/mockApi';

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    mockApi.getProducts().then(setProducts);
  }, []);

  return (
    <MainLayout>
      <div className="space-y-16">
        <Hero />
        <ProductSliders title="Featured Spices" products={products} />
        <WhyChooseUs />
        <InstagramGallery />
      </div>
    </MainLayout>
  );
};
