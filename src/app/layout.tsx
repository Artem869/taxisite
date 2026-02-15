import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://taxisite-three.vercel.app/'),
    title: {
        default: 'Ridera - Аренда автомобилей с выкупом в Алматы',
        template: '%s | Ridera'
    },
    description: 'Ridera Kazakhstan - аренда автомобилей с выкупом в Алматы. Kia Seltos, Chevrolet Monza. Простые условия аренды, доступные цены от 13000₸/сутки, быстрое оформление за 30 минут.',
    keywords: [
        // Основные запросы
        'аренда авто Алматы',
        'прокат автомобилей Алматы',
        'аренда машины Алматы',
        'авто в аренду Алматы',
        'аренда авто',
        'авто под выкуп',

        // Модели автомобилей
        'Kia Seltos',
        'Chevrolet Monza',
        'аренда кроссовера Алматы',

        // Брендовые запросы
        'Ridera',
        'Ridera Kazakhstan',
        'Ridera Алматы',
        'Ридера',

        // Длинные хвосты
        'аренда авто недорого Алматы',
        'аренда автомобилей посуточно',
        'аренда машины для выкупа',
        'где арендовать авто в Алматы',

        // Казахский язык
        'Алматы көлік жалдау',
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
        url: 'https://taxisite-three.vercel.app/',
        siteName: 'Ridera - Аренда автомобилей',
        title: 'Ridera - Аренда автомобилей в Алматы | Авто под выкуп',
        description: 'Аренда автомобилей в Алматы. Kia Seltos, Chevrolet Monza. Цены от 13000₸/сутки. Быстрое оформление за 30 минут. Звоните: +7 775 042 69 45',
        images: [
            {
                url: '/og-image-v3.png',
                width: 1200,
                height: 630,
                alt: 'Ridera - Аренда автомобилей в Алматы',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ridera - Аренда автомобилей в Алматы',
        description: 'Авто под выкуп. Kia Seltos, Chevrolet Monza. От 13000₸/сутки.',
        images: ['/og-image-v3.png'],
        creator: '',
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
        description: 'Авто под выкуп в Алматы',
        url: 'https://taxisite-three.vercel.app/',
        telephone: '+77750426945',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Алматы',
            addressCountry: 'KZ'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.1694,
            longitude: 71.4491
        },
        priceRange: '$$',
        openingHours: 'Пн-Пт 10:00-18:00',
        image: 'https://taxisite-three.vercel.app/logo.png',
        sameAs: [
            'https://www.instagram.com/ridera.kz'
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
