'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.ru;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ru');
    const [isLoaded, setIsLoaded] = useState(false);

    // Загрузка языка из localStorage при монтировании
    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferred-language') as Language;
        if (savedLanguage === 'ru' || savedLanguage === 'kz') {
            setLanguage(savedLanguage);
        }
        setIsLoaded(true);
    }, []);

    // Сохранение языка в localStorage при изменении
    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('preferred-language', lang);
    };

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language]
    };

    // Предотвращаем flash неправильного языка
    if (!isLoaded) {
        return null;
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
