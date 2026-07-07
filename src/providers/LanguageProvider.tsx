"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import en from "../locales/en.json";
import tr from "../locales/tr.json";
import de from "../locales/de.json";

type Language = "en" | "tr" | "de";

const dictionaries = {
  en,
  tr,
  de,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect browser language on mount
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "tr" || browserLang === "de") {
      setLanguage(browserLang as Language);
    } else {
      setLanguage("en");
    }
    setMounted(true);
  }, []);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = dictionaries[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        let fallbackValue: any = dictionaries["en"];
        for (const fbK of keys) {
          if (fallbackValue && typeof fallbackValue === "object" && fbK in fallbackValue) {
            fallbackValue = fallbackValue[fbK];
          } else {
            return key; // Return key if entirely missing
          }
        }
        return fallbackValue;
      }
    }
    return value as string;
  };

  if (!mounted) {
    // Prevent hydration mismatch by rendering nothing or a default language structure initially
    // We render the context to allow children to mount, but text might flash.
    // For a smoother experience, we still provide English as default before hydration.
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
