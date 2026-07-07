"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple stub for translations
const translations = {
  tr: {
    'nav.platform': 'Platform',
    'nav.industries': 'Endüstriler',
    'nav.resources': 'Kaynaklar',
    'nav.company': 'Şirket',
    'nav.security': 'Güvenlik',
    'btn.connect': 'İletişime Geçin',
  },
  en: {
    'nav.platform': 'Platform',
    'nav.industries': 'Industries',
    'nav.resources': 'Resources',
    'nav.company': 'Company',
    'nav.security': 'Security',
    'btn.connect': 'Let\'s connect',
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
