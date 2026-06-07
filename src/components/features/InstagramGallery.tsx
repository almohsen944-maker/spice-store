import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

const instagramPosts = [
  { id: 1, src: '/assets/hero.png', alt: 'Spices on a table' },
  { id: 2, src: '/assets/hero.png', alt: 'Premium cinnamon' },
  { id: 3, src: '/assets/hero.png', alt: 'Saffron threads' },
  { id: 4, src: '/assets/hero.png', alt: 'Cooking process' },
  { id: 5, src: '/assets/hero.png', alt: 'Packaged spices' },
  { id: 6, src: '/assets/hero.png', alt: 'Close-up texture' }
];

export const InstagramGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-fluid-h2 font-serif text-brand-brown mb-16">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              className="aspect-square overflow-hidden cursor-pointer rounded-luxury"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(post.src)}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-brand-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Selected post"
                className="w-full h-auto rounded-luxury"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
