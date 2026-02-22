'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState } from 'react'

export default function Hero() {
    const { t } = useLanguage()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Запускаем анимацию после монтирования компонента
        setIsVisible(true)
    }, [])

    const scrollToCars = () => {
        document.getElementById('автомобили')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
            {/* Декоративные элементы */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Левая часть */}
                    <div className={`lg:col-span-5 space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}>
                        {/* Бейдж */}
                        <div className={`inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`} style={{ transitionDelay: '100ms' }}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-600"></span>
                            </span>
                            {t.hero.badge}
                        </div>

                        {/* Заголовок */}
                        <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '200ms' }}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-orange-500">
                                {t.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-xl">
                                {t.hero.subtitle}
                            </p>
                        </div>

                        {/* Преимущества */}
                        <div className={`grid grid-cols-2 gap-4 max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '400ms' }}>
                            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-3xl font-black text-slate-700 mb-1">{t.hero.stats.time}</div>
                                <div className="text-sm text-gray-600 font-medium">{t.hero.stats.timeLabel}</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-3xl font-black text-slate-700 mb-1">{t.hero.stats.approval}</div>
                                <div className="text-sm text-gray-600 font-medium">{t.hero.stats.approvalLabel}</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="text-3xl font-black text-slate-700 mb-1">{t.hero.stats.delivery}</div>
                                <div className="text-sm text-gray-600 font-medium">{t.hero.stats.deliveryLabel}</div>
                            </div>
                        </div>

                        {/* Уникальное предложение */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl">
                            <p className="text-white font-bold text-lg mb-3">
                                {t.hero.usp}
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{t.hero.features.feature1}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{t.hero.features.feature2}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Кнопки CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://wa.me/77750426945?text=Здравствуйте!%20Хочу%20узнать%20про%20авто%20в%20Ridera."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                {/* Анимированный фон */}
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                                <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="relative z-10">{t.hero.cta1}</span>

                                {/* Пульсирующее кольцо */}
                                <div className="absolute inset-0 border-2 border-white/50 rounded-2xl animate-ping opacity-0 group-hover:opacity-100"></div>
                            </a>
                            <button
                                onClick={scrollToCars}
                                className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-slate-800 transition-all duration-300"
                            >
                                <span>{t.hero.cta2}</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Правая часть  */}
                    <div className="lg:col-span-7 relative lg:flex hidden items-center justify-center h-full">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Декоративный фон */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-200/30 to-slate-300/20 rounded-full blur-3xl"></div>

                            {/* Изображение Киа */}
                            <div className="relative z-10 w-full">
                                <Image
                                    src="/kiaseltos.webp"
                                    alt="Kia Seltos"
                                    width={1000}
                                    height={800}
                                    className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
