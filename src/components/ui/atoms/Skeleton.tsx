import React from 'react';
import { cn } from '../../../utils/cn';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("animate-pulse bg-brand-brown/10 rounded-premium", className)} />
  );
};
