import React from 'react';
import { ShieldCheck, Truck, Clock, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const reasons = [
  {
    icon: ShieldCheck,
    title: { en: 'Authentic Quality', ar: 'جودة أصلية' },
    description: { en: 'We source only the finest premium spices.', ar: 'نستورد فقط أجود التوابل الفاخرة.' }
  },
  {
    icon: Truck,
    title: { en: 'Fast Delivery', ar: 'توصيل سريع' },
    description: { en: 'Delivered to your doorstep in 2-3 days.', ar: 'توصيل إلى باب منزلك خلال ٢-٣ أيام.' }
  },
  {
    icon: Clock,
    title: { en: 'Freshness Guaranteed', ar: 'طزاجة مضمونة' },
    description: { en: 'Hand-picked and packaged for maximum aroma.', ar: 'منتجات مختارة بعناية ومغلفة للحفاظ على النكهة.' }
  },
  {
    icon: Leaf,
    title: { en: '100% Organic', ar: 'عضوي ١٠٠٪' },
    description: { en: 'Ethically sourced, eco-friendly practices.', ar: 'مصادر أخلاقية وممارسات صديقة للبيئة.' }
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream border-y border-brand-brown/10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-fluid-h2 font-serif text-brand-brown mb-16">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-serif text-brand-brown mb-3">{reason.title.en}</h3>
              <p className="text-brand-brown/70 leading-relaxed">{reason.description.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
