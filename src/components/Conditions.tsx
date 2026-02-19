'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'

export default function Conditions() {
    const { t } = useLanguage()
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
                        if (index !== -1 && !visibleCards.includes(index)) {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, index])
                            }, index * 150) // 150ms задержка между карточками
                        }
                    }
                })
            },
            { threshold: 0.1 }
        )

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card)
        })

        return () => observer.disconnect()
    }, [visibleCards])

    const icons = [
        <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>,
        <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
    ]

    return (
        <section id="условия" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-orange-50 rounded-full mb-4 border border-orange-100">
                        <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                            {t.conditions.badge}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
                        {t.conditions.title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {t.conditions.subtitle}
                    </p>
                </div>

                {/* Сетка условий - карточки с числами */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {t.conditions.items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el }}
                            className={`group bg-white border-2 p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:-translate-y-2 ${visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0 border-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] animate-[borderFade_1s_ease-out_forwards]'
                                    : 'opacity-0 translate-y-8 border-slate-200'
                                } hover:border-orange-300`}
                        >
                            {/* Иконка и номер */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                    <div className="text-slate-700 group-hover:text-orange-600 transition-colors">
                                        {icons[index]}
                                    </div>
                                </div>
                                <div className="text-6xl font-black text-slate-200 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Заголовок */}
                            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
                                {item.title}
                            </h3>

                            {/* Значение */}
                            <div className="text-3xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                                {item.value}
                            </div>

                            {/* Анимированная линия */}
                            <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4 w-0 group-hover:w-16 transition-all duration-500"></div>

                            {/* Описание */}
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Дополнительная информация */}
                <div className="bg-white border-2 border-orange-500 p-10 md:p-12 mb-16 relative overflow-hidden">
                    {/* Декоративные элементы */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>

                    <div className="grid md:grid-cols-2 gap-10 items-start relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 bg-orange-500 rounded-full mb-4">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    {t.conditions.why.badge}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                                {t.conditions.why.title}
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t.conditions.why.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {t.conditions.why.features.map((feature, idx) => (
                                <div key={idx} className="group flex items-start gap-4 bg-slate-50 border border-slate-200 p-5 hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 hover:-translate-x-2 hover:shadow-lg">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{feature.title}</h4>
                                        <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA кнопка */}
                <div className="text-center">
                    <a
                        href={`https://wa.me/77750426945?text=${encodeURIComponent(t.conditions.cta)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
                    >
                        {/* Анимированный фон */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                        <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span className="relative z-10">{t.conditions.cta}</span>

                        {/* Пульсирующее кольцо */}
                        <div className="absolute inset-0 border-2 border-white/50 animate-ping opacity-0 group-hover:opacity-100"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
