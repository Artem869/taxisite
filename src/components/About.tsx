'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Marquee } from '@/components/ui/marquee'

// Компонент анимированного счетчика
function AnimatedCounter({ value, isVisible }: { value: string, isVisible: boolean }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isVisible) return

        // Извлекаем число из строки (например, "5+" -> 5, "10,000+" -> 10000, "90%" -> 90)
        const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
        const hasPlus = value.includes('+')
        const hasPercent = value.includes('%')
        const hasComma = value.includes(',')

        let current = 0
        const increment = numericValue / 50 // 50 шагов анимации
        const duration = 3000 // 3 секунды
        const stepTime = duration / 50

        const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
                setCount(numericValue)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, stepTime)

        return () => clearInterval(timer)
    }, [isVisible, value])

    // Форматируем число обратно с + или %
    const formatCount = (num: number) => {
        const hasPlus = value.includes('+')
        const hasPercent = value.includes('%')
        const hasComma = value.includes(',')

        let formatted = num.toString()
        if (hasComma && num >= 1000) {
            formatted = num.toLocaleString('en-US')
        }
        if (hasPlus) formatted += '+'
        if (hasPercent) formatted += '%'

        return formatted
    }

    return <>{formatCount(count)}</>
}

export default function About() {
    const { t } = useLanguage()
    const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStatsVisible(true)
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Debug: проверяем данные
    console.log('About stats items:', t.about.stats?.items)

    const statsIcons = [
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>,
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ]

    const statsGradients = [
        'from-blue-500 to-cyan-500',
        'from-emerald-500 to-teal-500',
        'from-violet-500 to-purple-500'
    ]

    const partners = [
        { id: 1, name: 'Яндекс', categoryKey: 'taxi', color: 'from-red-500 to-yellow-500', logo: '/partners/png/yandex.png' },
        { id: 2, name: 'InDrive', categoryKey: 'taxi', color: 'from-emerald-500 to-teal-500', logo: '/partners/png/indrive.jpeg' },
        { id: 3, name: 'Astana Motors', categoryKey: 'dealer', color: 'from-blue-500 to-indigo-500', logo: '/partners/png/astana.png' },
        { id: 4, name: 'Geely', categoryKey: 'manufacturer', color: 'from-slate-600 to-slate-800', logo: '/partners/png/geely.webp' },
        { id: 5, name: 'Freedom Insurance', categoryKey: 'insurance', color: 'from-orange-500 to-red-500', logo: '/partners/png/freedom.png' },
        { id: 6, name: 'Hyundai', categoryKey: 'manufacturer', color: 'from-blue-600 to-blue-800', logo: '/partners/png/hyundai.jpg' },
        { id: 7, name: 'Orbis Auto', categoryKey: 'dealer', color: 'from-purple-500 to-pink-500', logo: '/partners/png/orbissauto.webp' },
        { id: 8, name: 'Kaiya', categoryKey: 'dealer', color: 'from-cyan-500 to-blue-500', logo: '/partners/png/kaiyi.png' },
        { id: 9, name: 'MG', categoryKey: 'manufacturer', color: 'from-red-600 to-black', logo: '/partners/png/mg.png' }
    ]

    // Разделяем партнеров на две группы для двух каруселей
    const firstRow = partners.slice(0, Math.ceil(partners.length / 2))
    const secondRow = partners.slice(Math.ceil(partners.length / 2))

    return (
        <section ref={sectionRef} id="о-компании" className="relative py-20 overflow-hidden">
            {/* Анимированный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100"></div>

            {/* Декоративные элементы */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Заголовок */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent mb-4">
                        {t.about.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.about.subtitle}
                    </p>
                </div>

                {/* Миссия */}
                <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg border-2 border-gray-100">
                                    <Image
                                        src="/logo.png"
                                        alt="Ridera"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.mission.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {t.about.mission.description}
                                </p>
                                <div className="space-y-3">
                                    {t.about.mission.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.mission.goal}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {t.about.mission.goalText}
                                </p>
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                                    <p className="text-orange-600 font-bold text-xl mb-2">
                                        {t.about.mission.quote}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {t.about.mission.quoteSubtext}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Достижения - минималистичный блок */}
            <div
                ref={statsRef}
                className="relative mt-20 mb-20"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                        <div className="grid md:grid-cols-3 gap-12">
                            {t.about.stats.items.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center group"
                                >
                                    <div className="text-6xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                                        <AnimatedCounter value={stat.value} isVisible={statsVisible} />
                                    </div>
                                    <p className="text-gray-600 text-lg font-medium">
                                        {stat.label}
                                    </p>
                                    <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Партнёры */}
                <div className="mb-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {t.about.partners.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                            {t.about.partners.subtitle}
                        </p>
                    </div>

                    {/* Двойная карусель партнёров */}
                    <div className="relative mb-12">
                        {/* Первая карусель - слева направо */}
                        <Marquee pauseOnHover className="[--duration:25s] mb-6">
                            {firstRow.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="group relative mx-4"
                                >
                                    {/* Светящийся фон */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}></div>

                                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-gray-200 w-64 h-48">
                                        {/* Логотип компании */}
                                        <div className="w-full h-20 mb-3 flex items-center justify-center rounded-xl">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={partner.name === 'Яндекс' ? 80 : partner.name === 'InDrive' ? 100 : partner.name === 'Freedom Insurance' ? 290 : partner.name === 'MG' || partner.name === 'Kaiya' ? 70 : 120}
                                                height={partner.name === 'Яндекс' ? 53 : partner.name === 'InDrive' ? 67 : partner.name === 'Freedom Insurance' ? 110 : partner.name === 'MG' || partner.name === 'Kaiya' ? 47 : 80}

                                            />
                                        </div>

                                        {/* Название */}
                                        <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                                            {partner.name}
                                        </h4>

                                        {/* Категория */}
                                        <div className="flex items-center justify-center gap-1.5 mb-2">
                                            <span className="text-xs font-semibold text-gray-600">
                                                {t.about.partners.categories[partner.categoryKey as keyof typeof t.about.partners.categories]}
                                            </span>
                                        </div>

                                        {/* Галочка партнёрства - оранжевая */}
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>

                        {/* Вторая карусель - справа налево (reverse) */}
                        <Marquee reverse pauseOnHover className="[--duration:25s]">
                            {secondRow.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="group relative mx-4"
                                >
                                    {/* Светящийся фон */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}></div>

                                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-gray-200 w-64 h-48">
                                        {/* Логотип компании */}
                                        <div className="w-full h-20 mb-3 flex items-center justify-center rounded-xl">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={partner.name === 'Яндекс' ? 80 : partner.name === 'InDrive' ? 100 : partner.name === 'Freedom Insurance' ? 180 : partner.name === 'MG' || partner.name === 'Kaiya' ? 99 : 160}
                                                height={partner.name === 'Яндекс' ? 53 : partner.name === 'InDrive' ? 67 : partner.name === 'Freedom Insurance' ? 120 : partner.name === 'MG' || partner.name === 'Kaiya' ? 77 : 80}
                                                className={`object-contain group-hover:scale-110 transition-transform duration-300 ${partner.name === 'Orbis Auto' ? 'w-full h-full scale-110' :
                                                    partner.name === 'MG' || partner.name === 'Kaiya' ? '' :
                                                        'w-full h-full'
                                                    }`}
                                            />
                                        </div>

                                        {/* Название */}
                                        <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                                            {partner.name}
                                        </h4>

                                        {/* Категория */}
                                        <div className="flex items-center justify-center gap-1.5 mb-2">
                                            <span className="text-xs font-semibold text-gray-600">
                                                {t.about.partners.categories[partner.categoryKey as keyof typeof t.about.partners.categories]}
                                            </span>
                                        </div>

                                        {/* Галочка партнёрства - оранжевая */}
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>

                        {/* Градиенты по краям */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
                    </div>

                    {/*  блок снизу */}
                    <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl p-8 md:p-12 border border-gray-200 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                        <div className="relative text-center">
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold text-gray-800">{t.about.partners.trust}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {t.about.partners.trustTitle}
                            </h3>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                {t.about.partners.trustText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
