import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { Button } from '../ui/atoms/Button';
import { Input } from '../ui/atoms/Input';
import { cn } from '../../utils/cn';

interface NewsletterProps {
  className?: string;
}

/**
 * T043: Newsletter section with luxury "Thank You" micro-interaction
 * Features:
 * - Email subscription form
 * - Validation
 * - Success animation
 * - Error handling
 * - RTL support
 * - Bilingual text
 */
export const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  const { language, direction } = useLocale();
  const isRTL = direction === 'rtl';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const labels = {
    en: {
      title: 'Subscribe to Our Newsletter',
      subtitle:
        'Get exclusive offers, recipes, and spice tips delivered to your inbox.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      success: 'Thank you for subscribing!',
      successMessage: 'Check your inbox for a welcome offer.',
      error: 'Please enter a valid email address',
    },
    ar: {
      title: 'اشترك في نشرتنا الإخبارية',
      subtitle:
        'احصل على عروض حصرية ووصفات ونصائح عن التوابل يتم تسليمها إلى صندوق بريدك.',
      placeholder: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      subscribing: 'جاري الاشتراك...',
      success: 'شكراً لاشتراكك!',
      successMessage: 'تحقق من صندوق البريد الخاص بك للحصول على عرض ترحيبي.',
      error: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    },
  };

  const t = labels[language as 'en' | 'ar'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('error');
      setErrorMessage(t.error);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'p-8 rounded-luxury bg-gradient-to-r from-brand-brown/10 to-brand-gold/10 border border-brand-brown/20',
        className
      )}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-4"
        >
          <Mail size={24} className="text-brand-gold" />
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-brown mb-2">
          {t.title}
        </h2>
        <p className="text-brand-brown/70 mb-6">{t.subtitle}</p>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex gap-2 flex-col sm:flex-row"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  disabled={isSubmitting}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="md"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="sm:w-auto"
              >
                {isSubmitting ? t.subscribing : t.subscribe}
              </Button>
            </motion.form>
          )}

          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={32} className="text-green-600" />
                </div>
              </motion.div>
              <div>
                <p className="font-semibold text-green-900">{t.success}</p>
                <p className="text-sm text-green-700">{t.successMessage}</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle size={20} />
                <span className="font-medium">{errorMessage}</span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setStatus('idle');
                  setErrorMessage('');
                }}
              >
                Try Again
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
