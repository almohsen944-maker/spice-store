import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';

/**
 * Hook to consume Locale and Direction state
 */
export const useLocale = () => {
  const context = useContext(LocaleContext);
  
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  
  return context;
};
