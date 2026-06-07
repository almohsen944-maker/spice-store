import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/features/Hero';
import { ProductSliders } from '../components/features/ProductSliders';
import { WhyChooseUs } from '../components/features/WhyChooseUs';
import { InstagramGallery } from '../components/features/InstagramGallery';
import type { Product } from '../components/features/ProductCard';
import { mockApi } from '../services/mockApi';
import { staggerContainer, fadeInUp } from '../utils/animations';

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    mockApi.getProducts().then(setProducts);
  }, []);

  return (
    <MainLayout>
      <motion.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Hero />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ProductSliders title="Featured Spices" products={products} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <WhyChooseUs />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <InstagramGallery />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};
