'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Advantages() {
    const { t } = useLanguage()

    const icons = [
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>,
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
            {/*  элементы фона */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        {t.advantages.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.advantages.subtitle}
                    </p>
                </div>

                {/* Сетка сравнений */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {t.advantages.comparisons.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Иконка сверху */}
                            <div className="absolute -top-5 left-8 w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {icons[index]}
                            </div>

                            {/* Контент */}
                            <div className="pt-6 space-y-6">
                                {/* Конкурент */}
                                <div className="relative">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                                            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                                                {item.competitor}
                                            </div>
                                            <div className="text-gray-600 font-medium">
                                                {item.competitorFeature}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Разделитель с VS */}
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t-2 border-dashed border-gray-200"></div>
                                    </div>
                                    <div className="relative bg-white px-4">
                                        <span className="text-xs font-black text-gray-400 tracking-widest">VS</span>
                                    </div>
                                </div>

                                {/* Ridera */}
                                <div className="relative">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">
                                                Ridera
                                            </div>
                                            <div className="text-gray-900 font-bold text-lg">
                                                {item.rideraFeature}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Декоративный элемент */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-slate-100 to-transparent rounded-tl-full opacity-50"></div>
                        </div>
                    ))}
                </div>

                {/* CTA внизу */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-6 bg-white rounded-3xl p-8 shadow-xl max-w-2xl">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                                {t.advantages.cta.title}
                            </h3>
                            <p className="text-gray-600">
                                {t.advantages.cta.subtitle}
                            </p>
                        </div>
                        <a
                            href="https://wa.me/77750426945?text=Здравствуйте!%20Хочу%20узнать%20про%20авто%20в%20Ridera."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="relative z-10">{t.advantages.cta.button}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
