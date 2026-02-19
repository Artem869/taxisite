'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

type CarType = 'monza' | 'seltos' | null

export default function Cars() {
    const [selectedCar, setSelectedCar] = useState<CarType>(null)
    const { t } = useLanguage()

    const closeModal = () => setSelectedCar(null)

    return (
        <>
            <section id="автомобили" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Заголовок секции */}
                    <div className="text-center mb-16">
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
                        <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-slate-400 transition-all duration-500 hover:shadow-2xl">
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
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                                    src="/kiaseltos.webp"
                                    alt="Kia Seltos"
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Шапка модалки */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl z-10">
                            <div>
                                <h3 className="text-3xl font-black text-gray-900">{t.cars.monza.name}</h3>
                                <p className="text-slate-600 font-medium">{t.cars.monza.description}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Контент */}
                        <div className="p-6 space-y-6">
                            {/* Цена и кнопка */}
                            <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                                <div className="text-center md:text-left">
                                    <div className="text-4xl font-black text-slate-900">{t.cars.monza.price}</div>
                                    <div className="text-slate-600">{t.cars.modal.pricing}</div>
                                </div>
                                <a
                                    href={`https://wa.me/77750426945?text=${encodeURIComponent(t.cars.modal.whatsappMessage + ' ' + t.cars.monza.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {t.cars.modal.book}
                                </a>
                            </div>

                            {/* Галерея фото */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.modal.photos}</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                                            <Image
                                                src={`/cars/monza/${num}.webp`}
                                                alt={`Chevrolet Monza фото ${num}`}
                                                width={400}
                                                height={300}
                                                loading="lazy"
                                                quality={80}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Характеристики */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.modal.characteristics}</h4>
                                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.type}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.monza.type}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.engine}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.monza.specs[0]}, {t.cars.monza.specs[2]}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.transmission}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.monza.specs[1]}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.equipment}:</span>
                                        <div className="space-y-1">
                                            {t.cars.monza.features.map((feature, idx) => (
                                                <p key={idx} className="font-semibold text-gray-900 text-sm">{feature}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Описание */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.monza.why}</h4>
                                <ul className="space-y-2">
                                    {t.cars.monza.reasons.map((reason, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно для Kia Seltos */}
            {selectedCar === 'seltos' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeModal}>
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Шапка модалки */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-3xl font-black text-gray-900">{t.cars.seltos.name}</h3>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold">
                                        {t.cars.seltos.badge}
                                    </span>
                                </div>
                                <p className="text-slate-600 font-medium">{t.cars.seltos.description}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Контент */}
                        <div className="p-6 space-y-6">
                            {/* Цена и кнопка */}
                            <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                                <div className="text-center md:text-left">
                                    <div className="text-4xl font-black text-slate-900">{t.cars.seltos.price}</div>
                                    <div className="text-slate-600">{t.cars.modal.pricing}</div>
                                </div>
                                <a
                                    href={`https://wa.me/77750426945?text=${encodeURIComponent(t.cars.modal.whatsappMessage + ' ' + t.cars.seltos.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {t.cars.modal.book}
                                </a>
                            </div>

                            {/* Галерея фото */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.modal.photos}</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                                            <Image
                                                src={`/cars/seltos/${num}.webp`}
                                                alt={`Kia Seltos фото ${num}`}
                                                width={400}
                                                height={300}
                                                loading="lazy"
                                                quality={80}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Характеристики */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.modal.characteristics}</h4>
                                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.type}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.seltos.type}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.engine}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.seltos.specs[0]}, {t.cars.seltos.specs[2]}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.transmission}:</span>
                                        <span className="font-semibold text-gray-900">{t.cars.seltos.specs[1]}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-slate-600 text-sm sm:min-w-[140px]">{t.cars.modal.equipment}:</span>
                                        <div className="space-y-1">
                                            {t.cars.seltos.features.map((feature, idx) => (
                                                <p key={idx} className="font-semibold text-gray-900 text-sm">{feature}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Описание */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.cars.seltos.why}</h4>
                                <ul className="space-y-2">
                                    {t.cars.seltos.reasons.map((reason, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
