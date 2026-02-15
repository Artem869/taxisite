import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://ridera.kz'),
    title: {
        default: 'Ridera - Аренда автомобилей в Астане | Прокат авто без водителя',
        template: '%s | Ridera'
    },
    description: 'Ridera Kazakhstan - аренда автомобилей премиум-класса в Астане без водителя. Kia Seltos, Geely Monjaro. Простые условия аренды, доступные цены от 15000₸/сутки, быстрое оформление за 15 минут.',
    keywords: [
        // Основные запросы
        'аренда авто Астана',
        'прокат автомобилей Астана',
        'аренда машины Астана',
        'авто в аренду Астана',
        'прокат авто без водителя',

        // Модели автомобилей
        'Kia Seltos аренда',
        'Geely Monjaro прокат',
        'аренда кроссовера Астана',

        // Брендовые запросы
        'Ridera',
        'Ridera Kazakhstan',
        'Ridera Астана',

        // Длинные хвосты
        'аренда авто недорого Астана',
        'прокат автомобилей посуточно',
        'аренда машины на сутки',
        'где арендовать авто в Астане',

        // Казахский язык
        'Астана көлік жалдау',
        'автомобиль жалға алу',
    ],
    authors: [{ name: 'Ridera Kazakhstan' }],
    creator: 'Ridera',
    publisher: 'Ridera',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
        languages: {
            'ru-KZ': '/',
            'kk-KZ': '/',
        },
    },
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    openGraph: {
        type: 'website',
        locale: 'ru_KZ',
        url: 'https://ridera.kz',
        siteName: 'Ridera - Аренда автомобилей',
        title: 'Ridera - Аренда автомобилей в Астане | Прокат премиум авто',
        description: 'Прокат автомобилей премиум-класса в Астане без водителя. Kia Seltos, Geely Monjaro. Цены от 15000₸/сутки. Быстрое оформление за 15 минут. Звоните: +7 775 042 69 45',
        images: [
            {
                url: '/og-image.png', // Создадим позже
                width: 1200,
                height: 630,
                alt: 'Ridera - Аренда автомобилей в Астане',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ridera - Аренда автомобилей в Астане',
        description: 'Прокат премиум авто без водителя. Kia Seltos, Geely Monjaro. От 15000₸/сутки.',
        images: ['/og-image.png'],
        creator: '@ridera_kz', // Замените на ваш Twitter, если есть
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Замените после регистрации в Google Search Console
        yandex: 'YOUR_YANDEX_VERIFICATION_CODE', // Замените после регистрации в Yandex Webmaster
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Ridera',
        description: 'Прокат автомобилей премиум-класса в Астане',
        url: 'https://ridera.kz',
        telephone: '+77750426945',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Астана',
            addressCountry: 'KZ'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.1694,
            longitude: 71.4491
        },
        priceRange: '$$',
        openingHours: 'Mo-Su 00:00-23:59',
        image: 'https://ridera.kz/logo.png',
        sameAs: [
            // Добавьте ссылки на соцсети, если есть
        ]
    };

    return (
        <html lang="ru">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
