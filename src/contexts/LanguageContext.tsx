'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
  isAutoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(false);

  // Load language from localStorage or detect browser language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      // Use saved language preference
      setLanguage(savedLanguage);
    } else {
      // Auto-detect browser/device language
      const detectLanguage = () => {
        // Get all browser languages in order of preference
        const browserLanguages: readonly string[] = navigator.languages || [navigator.language] || ['en'];
        
        // Check each language preference
        for (const lang of browserLanguages) {
          const languageCode = lang.toLowerCase();
          
          // Check for Spanish variants (es, es-ES, es-MX, es-AR, etc.)
          const spanishVariants = ['es', 'es-es', 'es-mx', 'es-ar', 'es-co', 'es-pe', 'es-ve', 'es-cl', 'es-ec', 'es-gt', 'es-cu', 'es-bo', 'es-do', 'es-hn', 'es-py', 'es-sv', 'es-ni', 'es-cr', 'es-pa', 'es-uy'];
          
          if (spanishVariants.some(variant => languageCode.startsWith(variant))) {
            return 'es';
          }
          
          // Check for English variants
          if (languageCode.startsWith('en')) {
            return 'en';
          }
        }
        
        // Default to English if no supported language found
        return 'en';
      };
      
      const detectedLanguage = detectLanguage();
       setLanguage(detectedLanguage);
       setIsAutoDetected(true);
       
       // Save the detected language for future visits
       localStorage.setItem('language', detectedLanguage);
       
       // Optional: Show a brief notification that language was auto-detected
       const languageName = detectedLanguage === 'es' ? 'Español' : 'English';
       console.log(`🌐 Language auto-detected: ${languageName}`);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' || Array.isArray(value) ? value : key;
  };

  // Custom setLanguage that marks manual selection
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsAutoDetected(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isAutoDetected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}