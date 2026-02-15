import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Условия использования',
    description: 'Условия использования сервиса Ridera - правила аренды автомобилей, права и обязанности сторон, порядок бронирования и оплаты.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Условия использования | Ridera',
        description: 'Условия использования сервиса аренды автомобилей Ridera.',
        url: '/terms',
    },
}

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
