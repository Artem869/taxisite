'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQ() {
    const { t } = useLanguage()
    const [openQuestion, setOpenQuestion] = useState<number | null>(null)

    const toggleQuestion = (id: number) => {
        setOpenQuestion(openQuestion === id ? null : id)
    }

    return (
        <section id="вопросы" className="relative py-20 overflow-hidden bg-white">
            <div className="relative max-w-4xl mx-auto px-6">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-5 py-2 mb-6">
                        <span className="text-orange-600 font-bold text-sm">{t.faq.badge}</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
                        {t.faq.title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {t.faq.subtitle}
                    </p>
                </div>

                {/* Простой список вопросов */}
                <div className="space-y-3 mb-12">
                    {t.faq.questions.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-orange-200 transition-colors">
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-orange-50/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-orange-500 group-hover:to-orange-600 text-white rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300">
                                        {index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {faq.q}
                                    </h3>
                                </div>

                                <svg
                                    className={`w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-all duration-300 flex-shrink-0 ${openQuestion === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openQuestion === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pl-18">
                                    <p className="text-slate-700 text-lg leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
