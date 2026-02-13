'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function NotFound() {
    const { language } = useLanguage();

    const translations = {
        ru: {
            title: '404',
            subtitle: 'Страница не найдена',
            description: 'К сожалению, запрашиваемая страница не существует',
            home: 'На главную'
        },
        kz: {
            title: '404',
            subtitle: 'Бет табылмады',
            description: 'Өкінішке орай, сұралған бет жоқ',
            home: 'Басты бетке'
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/* Large 404 */}
                <div className="mb-12">
                    <h1 className="text-[160px] md:text-[200px] font-black text-slate-900 leading-none tracking-tighter">
                        {t.title}
                    </h1>
                </div>

                {/* Divider Line */}
                <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {t.subtitle}
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-lg mb-12">
                    {t.description}
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block px-10 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors duration-200"
                >
                    {t.home}
                </Link>
            </div>
        </div>
    );
}
