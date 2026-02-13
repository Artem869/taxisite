import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: 'Ridera - Автомобиль под выкуп в Алматы',
    description: 'Ridera Kazakhstan - аренда автомобилей с правом выкупа. Без проверки кредитной истории, решение за 2 минуты, 90% одобрение.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
