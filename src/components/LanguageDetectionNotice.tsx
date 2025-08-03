'use client'

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LanguageDetectionNotice() {
  const { language, isAutoDetected } = useLanguage();
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Show notice only if language was auto-detected and user hasn't dismissed it
    if (isAutoDetected && !localStorage.getItem('language-notice-dismissed')) {
      const timer = setTimeout(() => {
        setShowNotice(true);
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isAutoDetected]);

  const dismissNotice = () => {
    setShowNotice(false);
    localStorage.setItem('language-notice-dismissed', 'true');
  };

  const noticeText = {
    es: {
      title: '🌐 Idioma detectado automáticamente',
      message: 'Hemos configurado el sitio en español basado en tu configuración del navegador.',
      action: 'Puedes cambiar el idioma en cualquier momento usando el selector en la navegación.',
      dismiss: 'Entendido'
    },
    en: {
      title: '🌐 Language auto-detected',
      message: 'We\'ve set the site to English based on your browser settings.',
      action: 'You can change the language anytime using the selector in the navigation.',
      dismiss: 'Got it'
    }
  };

  const currentText = noticeText[language];

  return (
    <AnimatePresence>
      {showNotice && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <Card className="shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold text-sm">{currentText.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentText.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentText.action}
                  </p>
                  <Button
                    size="sm"
                    onClick={dismissNotice}
                    className="w-full mt-3 h-8 text-xs"
                  >
                    {currentText.dismiss}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={dismissNotice}
                  className="w-6 h-6 p-0 hover:bg-muted"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}