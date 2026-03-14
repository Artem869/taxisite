'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyChoose() {
    const { t } = useLanguage()

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Заголовок "Преимущества" */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900">
                        Преимущества
                    </h2>
                </div>

                {/* Блок "Почему выбирают Ridera" */}
                <div className="bg-white border-2 border-orange-500 p-10 md:p-12 relative overflow-hidden">
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
            </div>
        </section>
    )
}
