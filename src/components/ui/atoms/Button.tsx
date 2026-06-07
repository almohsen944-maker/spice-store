import React, { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'brown' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'gold', 
  size,
  isLoading, 
  children, 
  ...props 
}) => {
  const variants = {
    gold: 'bg-brand-gold text-brand-cream hover:bg-primary-dark',
    brown: 'bg-brand-brown text-brand-cream hover:bg-secondary-light',
    outline: 'border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-cream',
    ghost: 'text-brand-brown hover:bg-brand-brown/5',
    secondary: 'bg-brand-brown/10 text-brand-brown hover:bg-brand-brown/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={cn(
        "rounded-premium transition-all font-medium disabled:opacity-50",
        sizes[size ?? 'md'],
        variants[variant],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
