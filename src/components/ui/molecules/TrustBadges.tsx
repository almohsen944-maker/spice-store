import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Truck,
  RotateCcw,
  Headphones,
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { cn } from '../../utils/cn';

interface TrustBadgeProps {
  className?: string;
}

/**
 * T038: TrustBadges component with security and service icons
 * Features:
 * - Security badges (encrypted, secure checkout)
 * - Service badges (fast shipping, returns)
 * - Customer support badge
 * - Luxury styling with icons
 * - Bilingual support
 * - Animated entrance
 */
export const TrustBadges: React.FC<TrustBadgeProps> = ({ className }) => {
  const { language, direction } = useLocale();
  const isRTL = direction === 'rtl';

  const badges = [
    {
      icon: Shield,
      en: 'Secure Checkout',
      ar: 'دفع آمن',
      description: {
        en: 'SSL Encrypted',
        ar: 'مشفر بـ SSL',
      },
    },
    {
      icon: Truck,
      en: 'Free Shipping',
      ar: 'شحن مجاني',
      description: {
        en: 'Orders over 200 AED',
        ar: 'الطلبات فوق 200 درهم',
      },
    },
    {
      icon: RotateCcw,
      en: 'Easy Returns',
      ar: 'إرجاع سهل',
      description: {
        en: '30-Day Returns',
        ar: 'إرجاع في 30 يوم',
      },
    },
    {
      icon: Headphones,
      en: 'Support',
      ar: 'الدعم',
      description: {
        en: '24/7 Customer Care',
        ar: 'خدمة العملاء 24/7',
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn('grid grid-cols-2 md:grid-cols-4 gap-4', className)}
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        const title = badge[language as 'en' | 'ar'];
        const description =
          badge.description[language as 'en' | 'ar'];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="text-center p-4 rounded-luxury bg-brand-brown/5 border border-brand-brown/10 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all"
          >
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <Icon size={24} className="text-brand-gold" />
              </div>
            </div>
            <h3 className="font-semibold text-sm text-brand-brown mb-1">
              {title}
            </h3>
            <p className="text-xs text-brand-brown/60">{description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
