import React, { type ReactNode } from 'react';
import { useLocale } from '../hooks/useLocale';
import { cn } from '../utils/cn';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Core layout component providing RTL support and consistent luxury spacing
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const { direction } = useLocale();

  return (
    <div 
      dir={direction} 
      className={cn(
        "min-h-screen flex flex-col transition-colors duration-300",
        "bg-brand-cream text-brand-brown selection:bg-brand-gold/30",
        className
      )}
    >
      {/* AnnouncementBar, Navbar, and Footer will be integrated in Phase 2 */}
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
    </div>
  );
};
