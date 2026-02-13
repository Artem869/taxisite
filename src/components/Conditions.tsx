'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Conditions() {
    const { t } = useLanguage()

    const icons = [
        <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>,
        <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        <svg key="4" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="5" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
    ]

    const accents = [
        'from-emerald-500 to-teal-600',
        'from-blue-500 to-indigo-600',
        'from-violet-500 to-purple-600',
        'from-orange-500 to-red-600',
        'from-pink-500 to-rose-600'
    ]

    return (
        <section id="условия" className="relative py-20 overflow-hidden">
            {/* Фоновые элементы */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    {/* Прозрачный бейдж */}
                    <div className="inline-block mb-6">
                        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                            {/* Статичная точка */}
                            <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>

                            {/* Простой текст */}
                            <span className="text-white font-bold text-lg tracking-wide">
                                {t.conditions.badge}
                            </span>

                            {/* Иконка */}
                            <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t.conditions.title}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.conditions.subtitle}
                    </p>
                </div>

                {/* Сетка карточек условий */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {t.conditions.items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >

                            <div className={`absolute inset-0 bg-gradient-to-br ${accents[index]} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>

                            {/* Иконка */}
                            <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${accents[index]} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {icons[index]}
                                </div>
                            </div>

                            {/* Контент */}
                            <div className="relative">
                                <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                                    {item.title}
                                </h3>
                                <div className="text-3xl font-bold text-white mb-3">
                                    {item.value}
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Декоративная линия снизу */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accents[index]} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Дополнительный информационный блок */}
                <div className="relative bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-emerald-300 font-semibold text-sm">{t.conditions.why.badge}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {t.conditions.why.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t.conditions.why.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {t.conditions.why.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${accents[idx]} rounded-xl flex items-center justify-center`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA кнопка */}
                <div className="text-center mt-12">
                    <a
                        href={`https://wa.me/77750426945?text=${encodeURIComponent(t.conditions.cta)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 group"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>{t.conditions.cta}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
