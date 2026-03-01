'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'

export default function Advantages() {
    const { t } = useLanguage()
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

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

    return (
        <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white via-orange-50/30 to-white">
            <div className="container mx-auto px-4">
                <div className={`max-w-7xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                    {/* Заголовок */}
                    <div className="mb-24 text-center">
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
                            {t.advantages.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            {t.advantages.subtitle}
                        </p>
                    </div>

                    {/* Преимущества - стильные блоки */}
                    <div className="space-y-8">
                        {t.advantages.comparisons.map((item, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="flex flex-col md:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

                                    {/* Левая часть - яркий блок с номером */}
                                    <div className="md:w-80 bg-gradient-to-br from-orange-500 to-orange-600 p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute right-4 -top-10 text-[180px] font-black text-white/10">
                                            {index + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="text-7xl font-black text-white mb-4 leading-none">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                            <h3 className="text-2xl font-black text-white leading-tight">
                                                {item.competitor}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Правая часть - сравнение */}
                                    <div className="flex-1 p-10">
                                        <div className="grid md:grid-cols-2 gap-8 h-full">
                                            {/* Другие */}
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                        Другие компании
                                                    </span>
                                                </div>
                                                <p className="text-lg text-gray-600 leading-relaxed flex-1">
                                                    {item.competitorFeature}
                                                </p>
                                            </div>

                                            {/* Ridera */}
                                            <div className="flex flex-col relative">
                                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300"></div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                                                        Ridera
                                                    </span>
                                                </div>
                                                <p className="text-lg text-slate-900 font-bold leading-relaxed flex-1">
                                                    {item.rideraFeature}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
