import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Button } from '../ui/atoms/Button';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section 
      ref={ref}
      className="relative h-[80vh] flex items-center justify-center overflow-hidden rounded-luxury"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.img 
        src="/hero.png" 
        alt="Hero Background" 
        style={{ y }}
        className="absolute inset-0 w-full h-[150%] object-cover"
      />
      <div className="absolute inset-0 bg-brand-brown/40" />
      
      <div className="relative z-10 text-center text-brand-cream px-4">
        <motion.h1 variants={fadeInUp} className="text-fluid-h1 font-serif mb-6">
          The Essence of Luxury
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-fluid-body mb-8 max-w-2xl mx-auto">
          Discover our curated collection of premium spices, sourced from the finest origins.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button variant="gold">Shop Now</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
