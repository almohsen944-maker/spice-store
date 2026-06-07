import React, { useState, useEffect } from 'react';
import { LocaleContext } from './LocaleContext';
import type { Locale, Direction } from './LocaleContext.types';
interface LocaleProviderProps {
  children: React.ReactNode;
}

/**
 * Manages LTR/RTL direction and language state
 */
export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Locale) || 'en';
  });

  const direction: Direction = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update HTML attributes for accessible RTL support
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    localStorage.setItem('language', locale);
  }, [locale, direction]);

  const setLocale = (newLocale: Locale) => setLocaleState(newLocale);
  
  const toggleLocale = () => {
    setLocaleState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LocaleContext.Provider value={{ locale, language: locale, direction, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
