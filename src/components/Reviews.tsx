'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Reviews() {
    const { t } = useLanguage()
    const [currentSlide, setCurrentSlide] = useState(0)

    const reviews = [
        {
            id: 1,
            name: 'Скриншот отзыва 1',
            source: '2ГИС',
            image: '/otziv/webp/1.webp'
        },
        {
            id: 2,
            name: 'Скриншот отзыва 2',
            source: '2ГИС',
            image: '/otziv/webp/2.webp'
        },
        {
            id: 3,
            name: 'Скриншот отзыва 3',
            source: '2ГИС',
            image: '/otziv/webp/3.webp'
        },
        {
            id: 4,
            name: 'Скриншот отзыва 4',
            source: '2ГИС',
            image: '/otziv/webp/4.webp'
        },
        {
            id: 5,
            name: 'Скриншот отзыва 5',
            source: '2ГИС',
            image: '/otziv/webp/5.webp'
        },
        {
            id: 6,
            name: 'Скриншот отзыва 6',
            source: '2ГИС',
            image: '/otziv/webp/6.webp'
        },
        {
            id: 7,
            name: 'Скриншот отзыва 7',
            source: '2ГИС',
            image: '/otziv/webp/7.webp'
        },
        {
            id: 8,
            name: 'Скриншот отзыва 8',
            source: '2ГИС',
            image: '/otziv/webp/8.webp'
        },
        {
            id: 9,
            name: 'Скриншот отзыва 9',
            source: '2ГИС',
            image: '/otziv/webp/9.webp'
        },
        {
            id: 10,
            name: 'Скриншот отзыва 10',
            source: '2ГИС',
            image: '/otziv/webp/10.webp'
        },
        {
            id: 11,
            name: 'Скриншот отзыва 11',
            source: '2ГИС',
            image: '/otziv/webp/11.webp'
        },
        {
            id: 12,
            name: 'Скриншот отзыва 12',
            source: '2ГИС',
            image: '/otziv/webp/12.webp'
        },
        {
            id: 13,
            name: 'Скриншот отзыва 13',
            source: '2ГИС',
            image: '/otziv/webp/13.webp'
        },
        {
            id: 14,
            name: 'Скриншот отзыва 14',
            source: '2ГИС',
            image: '/otziv/webp/14.webp'
        },
        {
            id: 15,
            name: 'Скриншот отзыва 15',
            source: '2ГИС',
            image: '/otziv/webp/15.webp'
        },
        {
            id: 16,
            name: 'Скриншот отзыва 16',
            source: '2ГИС',
            image: '/otziv/webp/16.webp'
        },
        {
            id: 17,
            name: 'Скриншот отзыва 17',
            source: '2ГИС',
            image: '/otziv/webp/17.webp'
        },
        {
            id: 18,
            name: 'Скриншот отзыва 18',
            source: '2ГИС',
            image: '/otziv/webp/18.webp'
        },
        {
            id: 19,
            name: 'Скриншот отзыва 19',
            source: '2ГИС',
            image: '/otziv/webp/19.webp'
        },
        {
            id: 20,
            name: 'Скриншот отзыва 20',
            source: '2ГИС',
            image: '/otziv/webp/20.webp'
        },
        {
            id: 21,
            name: 'Скриншот отзыва 21',
            source: '2ГИС',
            image: '/otziv/webp/21.webp'
        },
        {
            id: 22,
            name: 'Скриншот отзыва 22',
            source: '2ГИС',
            image: '/otziv/webp/22.webp'
        },
        {
            id: 23,
            name: 'Скриншот отзыва 23',
            source: '2ГИС',
            image: '/otziv/webp/23.webp'
        }

    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <section id="отзывы" className="py-20 bg-white relative overflow-hidden">
            {/* Декоративный фон */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-0 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 mb-4">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{t.reviews.badge}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                        {t.reviews.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.reviews.subtitle}
                    </p>
                </div>

                {/* Карусель */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Слайды */}
                        <div className="overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {reviews.map((review, index) => (
                                    <div
                                        key={review.id}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200">
                                            {/* Изображение отзыва */}
                                            <div className="aspect-[16/9] max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden border-2 border-gray-200 mb-4">
                                                <Image
                                                    src={review.image}
                                                    alt={review.name}
                                                    width={800}
                                                    height={450}
                                                    loading="lazy"
                                                    quality={80}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Бейдж источника */}
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
                                                    <div className="flex items-center gap-2">
                                                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <span className="font-bold text-gray-900 text-sm">{review.source}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Кнопки навигации */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border border-gray-200"
                            aria-label="Предыдущий отзыв"
                        >
                            <svg className="w-6 h-6 text-gray-700 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border border-gray-200"
                            aria-label="Следующий отзыв"
                        >
                            <svg className="w-6 h-6 text-gray-700 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Индикаторы */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        {(() => {
                            const maxDots = 5
                            const totalReviews = reviews.length

                            // Если отзывов 5 или меньше, показываем все
                            if (totalReviews <= maxDots) {
                                return reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                                            ? 'w-6 h-3 bg-slate-900'
                                            : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                                            }`}
                                        aria-label={`Перейти к отзыву ${index + 1}`}
                                    />
                                ))
                            }

                            // Если отзывов больше 5, показываем умную навигацию
                            const dots = []
                            const halfDots = Math.floor(maxDots / 2)

                            let startIndex = currentSlide - halfDots
                            let endIndex = currentSlide + halfDots

                            // Корректируем начало
                            if (startIndex < 0) {
                                startIndex = 0
                                endIndex = maxDots - 1
                            }

                            // Корректируем конец
                            if (endIndex >= totalReviews) {
                                endIndex = totalReviews - 1
                                startIndex = totalReviews - maxDots
                            }

                            for (let i = startIndex; i <= endIndex; i++) {
                                dots.push(
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`transition-all duration-300 rounded-full ${currentSlide === i
                                            ? 'w-6 h-3 bg-slate-900'
                                            : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                                            }`}
                                        aria-label={`Перейти к отзыву ${i + 1}`}
                                    />
                                )
                            }

                            return dots
                        })()}
                    </div>

                    {/* Счетчик слайдов */}
                    <div className="text-center mt-6">
                        <span className="text-sm text-gray-500 font-medium">
                            {currentSlide + 1} / {reviews.length}
                        </span>
                    </div>
                </div>

                {/* Статистика внизу */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {t.reviews.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl border border-gray-200">
                            <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
