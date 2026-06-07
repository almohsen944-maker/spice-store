import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { CategoryCard } from '../components/features/CategoryCard';
import type { Category } from '../components/features/CategoryCard';
import { mockApi } from '../services/mockApi';
import { staggerContainer, fadeInUp } from '../utils/animations';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    mockApi.getCategories().then(setCategories);
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-fluid-h1 font-serif text-brand-brown mb-12 text-center">
          Our Collections
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={fadeInUp}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};
