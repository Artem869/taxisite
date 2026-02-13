'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
    const { t } = useLanguage()
    const [activeTab, setActiveTab] = useState<'mission' | 'stats' | 'partners'>('mission')
    const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

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
        { id: 7, name: 'Orbis Auto', categoryKey: 'dealer', color: 'from-purple-500 to-pink-500', logo: '/partners/png/orbis.webp' },
        { id: 8, name: 'Kaiya', categoryKey: 'dealer', color: 'from-cyan-500 to-blue-500', logo: '/partners/png/kaiyi.png' },
        { id: 9, name: 'MG', categoryKey: 'manufacturer', color: 'from-red-600 to-black', logo: '/partners/png/mg.png' }
    ]

    return (
        <section id="о-компании" className="relative py-20 overflow-hidden">
            {/* Анимированный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100"></div>

            {/* Декоративные элементы */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent mb-4">
                        {t.about.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.about.subtitle}
                    </p>
                </div>

                {/* Интерактивные табы */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${activeTab === 'mission'
                            ? 'bg-gradient-to-r from-slate-800 to-gray-900 text-white shadow-2xl scale-105'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {t.about.tabs.mission}
                        </div>
                    </button>

                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${activeTab === 'stats'
                            ? 'bg-gradient-to-r from-slate-800 to-gray-900 text-white shadow-2xl scale-105'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {t.about.tabs.stats}
                        </div>
                    </button>

                    <button
                        onClick={() => setActiveTab('partners')}
                        className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${activeTab === 'partners'
                            ? 'bg-gradient-to-r from-slate-800 to-gray-900 text-white shadow-2xl scale-105'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {t.about.tabs.partners}
                        </div>
                    </button>
                </div>

                {/* Контент табов */}
                <div className="min-h-[400px]">
                    {/* Миссия */}
                    {activeTab === 'mission' && (
                        <div className="animate-fade-in">
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
                                    <div className="relative bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{t.about.mission.goal}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.about.mission.goalText}
                                        </p>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                            <p className="text-emerald-400 font-bold text-xl mb-2">
                                                {t.about.mission.quote}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {t.about.mission.quoteSubtext}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Достижения */}
                    {activeTab === 'stats' && (
                        <div className="animate-fade-in">
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                {t.about.stats.items.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${statsGradients[index]} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>

                                        <div className={`w-16 h-16 bg-gradient-to-br ${statsGradients[index]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white">
                                                {statsIcons[index]}
                                            </div>
                                        </div>

                                        <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-gray-700 bg-clip-text text-transparent mb-3">
                                            {stat.value}
                                        </div>
                                        <p className="text-gray-600 text-lg font-medium">
                                            {stat.label}
                                        </p>

                                        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${statsGradients[index]} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-white mb-6">
                                        {t.about.stats.reliability}
                                    </h3>
                                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                        {t.about.stats.reliabilityText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Партнёры */}
                    {activeTab === 'partners' && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    {t.about.partners.title}
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {t.about.partners.subtitle}
                                </p>
                            </div>

                            {/* Интерактивная сетка партнёров */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
                                {partners.map((partner, index) => (
                                    <div
                                        key={partner.id}
                                        onMouseEnter={() => setHoveredPartner(partner.id)}
                                        onMouseLeave={() => setHoveredPartner(null)}
                                        className="group relative"
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            transform: hoveredPartner === partner.id ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        {/* Светящийся фон */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}></div>

                                        <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-gray-200 h-full">
                                            {/* Логотип компании */}
                                            <div className="w-full h-28 mb-4 flex items-center justify-center rounded-xl p-4">
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    width={200}
                                                    height={120}
                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Название */}
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                {partner.name}
                                            </h4>

                                            {/* Категория */}
                                            <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}>
                                                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600 break-words">
                                                    {t.about.partners.categories[partner.categoryKey as keyof typeof t.about.partners.categories]}
                                                </span>
                                            </div>

                                            {/* Галочка партнёрства */}
                                            <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}>
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
