import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Политика конфиденциальности',
    description: 'Политика конфиденциальности Ridera - информация о сборе, использовании и защите персональных данных пользователей нашего сервиса аренды автомобилей.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Политика конфиденциальности | Ridera',
        description: 'Политика конфиденциальности Ridera - защита ваших персональных данных.',
        url: '/privacy',
    },
}

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
