import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { Leaf, Award, Truck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const FEATURES = [
  { icon: Leaf, title: { en: 'Organic Sourced', ar: 'مستخلص عضوياً' } },
  { icon: Award, title: { en: 'Premium Quality', ar: 'جودة ممتازة' } },
  { icon: Truck, title: { en: 'Fast Delivery', ar: 'توصيل سريع' } },
];

export const WhyChooseUs: React.FC = () => {
  const { language } = useLocale();

  return (
    <motion.section 
      className="py-16 bg-brand-brown/5"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {FEATURES.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn}
            className="flex flex-col items-center text-center"
          >
            <feature.icon className="w-12 h-12 text-brand-gold mb-4" />
            <h3 className="text-xl font-serif text-brand-brown">
              {feature.title[language as 'en' | 'ar']}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
