export interface LocaleContextType {
  locale: Locale;
  language: Locale;
  direction: Direction;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}
export type Locale = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';
