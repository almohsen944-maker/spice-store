import React from 'react';
import { motion } from 'framer-motion';
import { luxuryHover, fadeIn } from '../../utils/animations';
import { useLocale } from '../../hooks/useLocale';

export interface Category {
  id: string;
  name: { en: string; ar: string };
  slug: string;
  image: string;
  description: { en: string; ar: string };
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { language } = useLocale();
  const name = category.name[language];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-luxury cursor-pointer"
      whileHover={luxuryHover}
      variants={fadeIn}
    >
      <img
        src={category.image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent flex items-end p-6">
        <h3 className="text-fluid-h3 font-serif text-brand-cream">{name}</h3>
      </div>
    </motion.div>
  );
};
