'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

type CarType = 'monza' | 'seltos' | null

export default function Cars() {
    const [selectedCar, setSelectedCar] = useState<CarType>(null)
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const { t } = useLanguage()
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    // Минимальное расстояние свайпа
    const minSwipeDistance = 50

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

    // Блокировка прокрутки страницы при открытой галерее
    useEffect(() => {
        if (selectedImage !== null) {
            // Сохраняем текущую позицию прокрутки
            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
            document.body.style.overflow = 'hidden'

            return () => {
                // Восстанавливаем прокрутку при закрытии
                document.body.style.position = ''
                document.body.style.top = ''
                document.body.style.width = ''
                document.body.style.overflow = ''
                window.scrollTo(0, scrollY)
            }
        }
    }, [selectedImage])

    // Блокировка прокрутки страницы при открытом модальном окне
    useEffect(() => {
        if (selectedCar !== null) {
            // Сохраняем текущую позицию прокрутки
            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
            document.body.style.overflow = 'hidden'

            return () => {
                // Восстанавливаем прокрутку при закрытии
                document.body.style.position = ''
                document.body.style.top = ''
                document.body.style.width = ''
                document.body.style.overflow = ''
                window.scrollTo(0, scrollY)
            }
        }
    }, [selectedCar])

    const closeModal = () => setSelectedCar(null)

    const openImage = (index: number) => setSelectedImage(index)
    const closeImage = () => setSelectedImage(null)

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % 4)
        }
    }

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + 4) % 4)
        }
    }

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextImage()
        }
        if (isRightSwipe) {
            prevImage()
        }
    }

    return (
        <>
            <section ref={sectionRef} id="автомобили" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Заголовок секции */}
                    <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                            {t.cars.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t.cars.subtitle}
                        </p>
                    </div>

                    {/* Сетка автомобилей */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Chevrolet Monza */}
                        <div className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-slate-400 transition-all duration-500 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '200ms' }}>
                            {/* Область для фото */}
                            <div className="relative h-72 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
                                <Image
                                    src="/cars/monza/monza.png"
                                    alt="Chevrolet Monza"
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                                    className="w-full h-full object-contain group-hover:scale-110 md:group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Контент карточки */}
                            <div className="p-6">
                                {/* Название и цена */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-1">
                                            {t.cars.monza.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">Chevrolet Monza</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black text-slate-900">{t.cars.monza.price}</div>
                                        <div className="text-xs text-gray-500 font-medium">/ {t.cars.perDay}</div>
                                    </div>
                                </div>

                                {/* Основные характеристики */}
                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    {t.cars.monza.specs.map((spec, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                                                {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />}
                                                {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />}
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-700">{spec}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Список особенностей */}
                                <ul className="space-y-2 mb-5">
                                    {t.cars.monza.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Кнопка */}
                                <button
                                    onClick={() => setSelectedCar('monza')}
                                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
                                >
                                    {t.cars.detailsButton}
                                </button>
                            </div>
                        </div>

                        {/* Kia Seltos */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-slate-400 transition-all duration-500 hover:shadow-2xl">
                            {/* Область для фото */}
                            <div className="relative h-72 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
                                <Image
                                    src="/cars/seltos/seltosneww.png"
                                    alt="Kia Seltos"
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                                    className="w-full h-full object-contain group-hover:scale-[1.12] transition-transform duration-500 scale-[1.05] md:scale-[1.15] md:group-hover:scale-[1.24]"
                                />
                            </div>

                            {/* Контент карточки */}
                            <div className="p-6">
                                {/* Название и цена */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-1">
                                            {t.cars.seltos.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">Kia Seltos</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black text-slate-900">{t.cars.seltos.price}</div>
                                        <div className="text-xs text-gray-500 font-medium">/ {t.cars.perDay}</div>
                                    </div>
                                </div>

                                {/* Основные характеристики */}
                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    {t.cars.seltos.specs.map((spec, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                                                {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />}
                                                {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />}
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-700">{spec}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Список особенностей */}
                                <ul className="space-y-2 mb-5">
                                    {t.cars.seltos.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Кнопка */}
                                <button
                                    onClick={() => setSelectedCar('seltos')}
                                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
                                >
                                    {t.cars.detailsButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Модальное окно для Chevrolet Monza */}
            {selectedCar === 'monza' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeModal}>
                    <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl font-sans" onClick={(e) => e.stopPropagation()}>
                        {/* Новая структура: фото слева, инфо справа на больших экранах, вертикально на мобилке */}
                        <div className="md:grid md:grid-cols-2 md:max-h-[90vh]">
                            {/* Левая часть - Галерея */}
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:overflow-y-auto">
                                <div className="space-y-4">
                                    {/* Все фото в одну колонку на десктопе, grid на мобилке */}
                                    <div className="hidden md:flex md:flex-col md:gap-4">
                                        {[1, 2, 3, 4].map((num) => (
                                            <div
                                                key={num}
                                                className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-orange-500 transition-all cursor-pointer group"
                                                onClick={() => openImage(num - 1)}
                                            >
                                                <Image
                                                    src={`/cars/monza/${num}.webp`}
                                                    alt={`Chevrolet Monza фото ${num}`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* На мобилке - главное фото + миниатюры */}
                                    <div className="md:hidden space-y-4">
                                        <div
                                            className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-orange-500/20 cursor-pointer"
                                            onClick={() => openImage(0)}
                                        >
                                            <Image
                                                src="/cars/monza/1.webp"
                                                alt="Chevrolet Monza"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[2, 3, 4].map((num) => (
                                                <div
                                                    key={num}
                                                    className="aspect-video bg-white rounded-xl overflow-hidden border-2 border-slate-200 cursor-pointer"
                                                    onClick={() => openImage(num - 1)}
                                                >
                                                    <Image
                                                        src={`/cars/monza/${num}.webp`}
                                                        alt={`Chevrolet Monza фото ${num}`}
                                                        width={200}
                                                        height={150}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Правая часть - Информация */}
                            <div className="flex flex-col overflow-y-auto">
                                {/* Шапка */}
                                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-black text-gray-900 mb-1">{t.cars.monza.name}</h3>
                                            <p className="text-slate-600">{t.cars.monza.description}</p>
                                        </div>
                                        <button
                                            onClick={closeModal}
                                            className="ml-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                                        >
                                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Цена */}
                                    <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                                        <div className="text-sm font-medium opacity-90 mb-1">{t.cars.modal.pricing}</div>
                                        <div className="text-4xl font-black mb-4">{t.cars.monza.price}</div>

                                        {/* Кнопка подать заявку */}
                                        <a
                                            href={`https://wa.me/77750426945?text=${encodeURIComponent(t.cars.modal.whatsappMessage + ' ' + t.cars.monza.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-white hover:bg-slate-50 text-orange-600 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            {t.cars.modal.submitButton}
                                        </a>
                                    </div>
                                </div>

                                {/* Контент */}
                                <div className="p-6 space-y-6 flex-1">
                                    {/* Характеристики */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {t.cars.modal.characteristics}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.type}</div>
                                                <div className="font-bold text-gray-900">{t.cars.monza.type}</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.transmission}</div>
                                                <div className="font-bold text-gray-900">{t.cars.monza.specs[1]}</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 col-span-2">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.engine}</div>
                                                <div className="font-bold text-gray-900">{t.cars.monza.specs[0]}, {t.cars.monza.specs[2]}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Комплектация */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t.cars.modal.equipment}
                                        </h4>
                                        <div className="grid gap-2">
                                            {t.cars.monza.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Преимущества */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            {t.cars.monza.why}
                                        </h4>
                                        <div className="space-y-2">
                                            {t.cars.monza.reasons.map((reason, idx) => (
                                                <div key={idx} className="flex items-start gap-3 bg-orange-50 p-3 rounded-xl border border-orange-100">
                                                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700 text-sm">{reason}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно для Kia Seltos */}
            {selectedCar === 'seltos' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeModal}>
                    <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl font-sans" onClick={(e) => e.stopPropagation()}>
                        {/* Новая структура: фото слева, инфо справа на больших экранах, вертикально на мобилке */}
                        <div className="md:grid md:grid-cols-2 md:max-h-[90vh]">
                            {/* Левая часть - Галерея */}
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:overflow-y-auto">
                                <div className="space-y-4">
                                    {/* Все фото в одну колонку на десктопе, grid на мобилке */}
                                    <div className="hidden md:flex md:flex-col md:gap-4">
                                        {[1, 2, 3, 4].map((num) => (
                                            <div
                                                key={num}
                                                className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 hover:border-orange-500 transition-all cursor-pointer group"
                                                onClick={() => openImage(num - 1)}
                                            >
                                                <Image
                                                    src={`/cars/seltos/${num}.webp`}
                                                    alt={`Kia Seltos фото ${num}`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* На мобилке - главное фото + миниатюры */}
                                    <div className="md:hidden space-y-4">
                                        <div
                                            className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-orange-500/20 cursor-pointer"
                                            onClick={() => openImage(0)}
                                        >
                                            <Image
                                                src="/cars/seltos/1.webp"
                                                alt="Kia Seltos"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[2, 3, 4].map((num) => (
                                                <div
                                                    key={num}
                                                    className="aspect-video bg-white rounded-xl overflow-hidden border-2 border-slate-200 cursor-pointer"
                                                    onClick={() => openImage(num - 1)}
                                                >
                                                    <Image
                                                        src={`/cars/seltos/${num}.webp`}
                                                        alt={`Kia Seltos фото ${num}`}
                                                        width={200}
                                                        height={150}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Правая часть - Информация */}
                            <div className="flex flex-col md:overflow-y-auto">
                                {/* Шапка */}
                                <div className="md:sticky md:top-0 bg-white border-b border-gray-200 p-6 z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-3xl font-black text-gray-900">{t.cars.seltos.name}</h3>

                                            </div>
                                            <p className="text-slate-600">{t.cars.seltos.description}</p>
                                        </div>
                                        <button
                                            onClick={closeModal}
                                            className="ml-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                                        >
                                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Цена */}
                                    <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                                        <div className="text-sm font-medium opacity-90 mb-1">{t.cars.modal.pricing}</div>
                                        <div className="text-4xl font-black mb-4">{t.cars.seltos.price}</div>

                                        {/* Кнопка подать заявку */}
                                        <a
                                            href={`https://wa.me/77750426945?text=${encodeURIComponent(t.cars.modal.whatsappMessage + ' ' + t.cars.seltos.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-white hover:bg-slate-50 text-orange-600 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            {t.cars.modal.submitButton}
                                        </a>
                                    </div>
                                </div>

                                {/* Контент */}
                                <div className="p-6 space-y-6 flex-1">
                                    {/* Характеристики */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {t.cars.modal.characteristics}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.type}</div>
                                                <div className="font-bold text-gray-900">{t.cars.seltos.type}</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.transmission}</div>
                                                <div className="font-bold text-gray-900">{t.cars.seltos.specs[1]}</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 col-span-2">
                                                <div className="text-xs text-slate-500 mb-1">{t.cars.modal.engine}</div>
                                                <div className="font-bold text-gray-900">{t.cars.seltos.specs[0]}, {t.cars.seltos.specs[2]}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Комплектация */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t.cars.modal.equipment}
                                        </h4>
                                        <div className="grid gap-2">
                                            {t.cars.seltos.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Преимущества */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            {t.cars.seltos.why}
                                        </h4>
                                        <div className="space-y-2">
                                            {t.cars.seltos.reasons.map((reason, idx) => (
                                                <div key={idx} className="flex items-start gap-3 bg-orange-50 p-3 rounded-xl border border-orange-100">
                                                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700 text-sm">{reason}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Лайтбокс для просмотра фото */}
            {selectedImage !== null && selectedCar && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeImage}
                >
                    <button
                        onClick={closeImage}
                        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Кнопки только на десктопе */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            prevImage()
                        }}
                        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        className="max-w-4xl w-full max-h-[80vh] relative"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <Image
                            src={`/cars/${selectedCar}/${selectedImage + 1}.webp`}
                            alt={`${selectedCar === 'monza' ? 'Chevrolet Monza' : 'Kia Seltos'} фото ${selectedImage + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-full object-contain select-none"
                            priority
                            loading="eager"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                            {selectedImage + 1} / 4
                        </div>
                        {/* Подсказка для мобилки */}
                        <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-xs">
                            ← Свайп →
                        </div>

                        {/* Предзагрузка следующего и предыдущего фото */}
                        <div className="hidden">
                            <Image
                                src={`/cars/${selectedCar}/${((selectedImage + 1) % 4) + 1}.webp`}
                                alt="preload"
                                width={1200}
                                height={800}
                                priority
                            />
                            <Image
                                src={`/cars/${selectedCar}/${((selectedImage - 1 + 4) % 4) + 1}.webp`}
                                alt="preload"
                                width={1200}
                                height={800}
                                priority
                            />
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            nextImage()
                        }}
                        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    )
}
