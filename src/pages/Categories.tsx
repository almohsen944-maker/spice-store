import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { CategoryCard } from '../components/features/CategoryCard';
import type { Category } from '../components/features/CategoryCard';
import { mockApi } from '../services/mockApi';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    mockApi.getCategories().then(setCategories);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-4xl font-serif text-brand-brown mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </MainLayout>
  );
};
