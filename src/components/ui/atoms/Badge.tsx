import React from 'react';
import { cn } from '../../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'sale' | 'new' | 'gold';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    sale: 'bg-red-100 text-red-800',
    new: 'bg-brand-gold text-brand-cream',
    gold: 'bg-brand-gold text-brand-cream',
  };

  return (
    <span className={cn("px-2 py-1 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
};
