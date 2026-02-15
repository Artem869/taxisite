import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: {
        default: 'Ridera - Аренда автомобилей в Астане | Прокат авто',
        template: '%s | Ridera'
    },
    description: 'Ridera Kazakhstan - прокат автомобилей премиум-класса в Астане. Kia Seltos, Geely Monjaro. Простые условия аренды, доступные цены, быстрое оформление.',
    keywords: ['аренда авто Астана', 'прокат автомобилей', 'Ridera', 'аренда машины', 'Kia Seltos аренда', 'Geely Monjaro прокат', 'авто в аренду Астана'],
    authors: [{ name: 'Ridera Kazakhstan' }],
    creator: 'Ridera',
    publisher: 'Ridera',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
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
        locale: 'ru_RU',
        url: 'https://ridera.kz',
        siteName: 'Ridera',
        title: 'Ridera - Аренда автомобилей в Астане',
        description: 'Прокат автомобилей премиум-класса в Астане. Kia Seltos, Geely Monjaro и другие авто в аренду. Простые условия, доступные цены.',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Ridera - Аренда автомобилей',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ridera - Аренда автомобилей в Астане',
        description: 'Прокат автомобилей премиум-класса в Астане. Kia Seltos, Geely Monjaro.',
        images: ['/logo.png'],
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
