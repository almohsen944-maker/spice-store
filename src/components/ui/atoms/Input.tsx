import React, { type InputHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-brand-brown">{label}</label>}
      <input
        className={cn(
          "px-4 py-2 border border-brand-brown/20 rounded-premium focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all",
          className
        )}
        {...props}
      />
    </div>
  );
};
