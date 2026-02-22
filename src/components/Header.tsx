'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        // Анимация появления при загрузке
        setIsVisible(true)

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleLanguage = () => {
        setLanguage(language === 'ru' ? 'kz' : 'ru')
    }

    return (
        <>
            {/* Топ-бар с контактами */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                } ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-2">
                    <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                        <div className="flex items-center gap-6">
                            <a href={`tel:${t.header.phone}`} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="font-medium">{t.header.phone}</span>
                            </a>
                            <span className="hidden md:block text-slate-300">{t.header.address}</span>

                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 font-medium hover:text-slate-300 transition-colors"
                            >
                                <span className={language === 'ru' ? 'text-white' : 'text-slate-400'}>RU</span>
                                <span>/</span>
                                <span className={language === 'kz' ? 'text-white' : 'text-slate-400'}>KZ</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основная навигация */}
            <header className={`fixed left-0 right-0 z-40 transition-all duration-700 ${scrolled ? 'top-0 bg-white shadow-2xl' : 'top-10 bg-white/95 backdrop-blur-md'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between h-20">
                        {/* Логотип */}
                        <Link href="/" className={`flex flex-col items-center -gap-1 group transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-slate-900/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <Image
                                    src="/logo.webp"
                                    alt="Ridera"
                                    width={120}
                                    height={120}
                                    className="relative z-10 group-hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <p className="text-xs text-gray-600 font-semibold -mt-2">{t.footer.tagline}</p>
                        </Link>

                        {/* Десктоп меню */}
                        <div className="hidden lg:flex items-center gap-1">
                            <Link href="#условия" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.conditions}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="#автомобили" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.cars}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="#вопросы" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.questions}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="#о-компании" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.about}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="#отзывы" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.reviews}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="#контакты" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                                {t.header.menu.contacts}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>

                        {/* CTA кнопка */}
                        <div className="hidden lg:block">
                            <a
                                href={`https://wa.me/77750426945?text=${encodeURIComponent(language === 'ru' ? 'Здравствуйте! Хочу узнать про авто в Ridera.' : 'Сәлеметсіз бе! Ridera-дағы автомобиль туралы білгім келеді.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                {/* Анимированный фон */}
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                                <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="relative z-10">{t.header.cta}</span>

                                {/* Пульсирующее кольцо */}
                                <div className="absolute inset-0 border-2 border-white/50 rounded-xl animate-ping opacity-0 group-hover:opacity-100"></div>
                            </a>
                        </div>

                        {/* Мобильная кнопка меню */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </nav>

                    {/* Мобильное меню */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="pt-4 border-t border-gray-200 space-y-3">
                            {/* Навигационные пункты с иконками */}
                            <Link
                                href="#условия"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-orange-50 hover:to-white rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-orange-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow group-hover:bg-orange-50">
                                    <svg className="w-6 h-6 text-slate-700 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold group-hover:text-orange-600">{t.header.menu.conditions}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Простые условия' : 'Қарапайым шарттар'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#автомобили"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-orange-50 hover:to-white rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-orange-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow group-hover:bg-orange-50">
                                    <svg className="w-6 h-6 text-slate-700 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold group-hover:text-orange-600">{t.header.menu.cars}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Наши модели' : 'Біздің модельдер'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#вопросы"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-orange-50 hover:to-white rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-orange-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold">{t.header.menu.questions}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Частые вопросы' : 'Жиі қойылатын сұрақтар'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#о-компании"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold">{t.header.menu.about}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Кто мы такие' : 'Біз кімбіз'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#отзывы"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold">{t.header.menu.reviews}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Что говорят клиенты' : 'Клиенттер не дейді'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#контакты"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 rounded-2xl font-medium transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-semibold">{t.header.menu.contacts}</div>
                                    <div className="text-xs text-slate-500">{language === 'ru' ? 'Связаться с нами' : 'Бізбен байланысу'}</div>
                                </div>
                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* Контактный блок */}
                            <div className="pt-3 mt-3 border-t border-gray-200">
                                {/* WhatsApp */}
                                <a
                                    href={`https://wa.me/77750426945?text=${encodeURIComponent(language === 'ru' ? 'Здравствуйте! Хочу узнать про авто в Ridera.' : 'Сәлеметсіз бе! Ridera-дағы автомобиль туралы білгім келеді.')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-white/80 mb-1">WhatsApp</div>
                                        <div className="text-white font-bold">{t.header.cta}</div>
                                    </div>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
