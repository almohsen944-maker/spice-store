import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const InstagramGallery: React.FC = () => {
  const images = [
    'https://placehold.co/400x400?text=Instagram+1', 
    'https://placehold.co/400x400?text=Instagram+2', 
    'https://placehold.co/400x400?text=Instagram+3', 
    'https://placehold.co/400x400?text=Instagram+4'
  ];

  return (
    <motion.section 
      className="py-16 px-4"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-fluid-h2 font-serif text-brand-brown mb-8 text-center">Follow Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn}
            className="aspect-square overflow-hidden rounded-luxury cursor-pointer"
          >
            <img 
              src={img} 
              alt="Instagram Post" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
