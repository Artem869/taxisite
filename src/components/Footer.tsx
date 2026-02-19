'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer id="контакты" className="relative bg-slate-900 text-white overflow-hidden">
            {/* Декоративная сетка на фоне */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-20">
                {/* Верхняя часть - крупный заголовок и контакты */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Левая часть - CTA */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-sm font-bold mb-6 text-orange-300">
                                {language === 'ru' ? '🚗 Готовы к переменам?' : '🚗 Өзгерістерге дайынсыз ба?'}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-orange-400">
                                {language === 'ru' ? 'Получите свой автомобиль' : 'Өз автомобиліңізді алыңыз'}
                                <br />
                                {language === 'ru' ? 'уже сегодня' : 'бүгін'}
                            </h2>
                            <p className="text-xl text-slate-400 mb-8">
                                {t.footer.description}
                            </p>

                            {/* Социальные сети */}
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/ridera.kz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/77750426945"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://2gis.kz/almaty/firm/70000001104998901?m=76.828784%2C43.206553%2F15.97"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 overflow-hidden"
                                >
                                    <Image
                                        src="/photo/2gg.png"
                                        alt="2GIS"
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Правая часть - контакты */}
                        <div className="space-y-6">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/77750426945"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 rounded-2xl transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">WhatsApp</div>
                                            <div className="text-xl font-bold">+7 775 042 6945</div>
                                        </div>
                                    </div>
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </a>

                            {/* Телефон */}
                            <a
                                href="tel:+77750426945"
                                className="group block p-6 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 rounded-2xl transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">{language === 'ru' ? 'Позвонить' : 'Қоңырау шалу'}</div>
                                            <div className="text-xl font-bold mb-1">+7 775 042 6945</div>
                                            <div className="text-sm text-slate-400">
                                                {t.footer.scheduleText}
                                                <br />
                                                {t.footer.scheduleWeekend}
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </a>

                            {/* Офис */}
                            <a
                                href="https://2gis.kz/almaty/firm/70000001104998901?m=76.828784%2C43.206553%2F15.97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 rounded-2xl transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/photo/2gg.png"
                                                alt="2GIS"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">{language === 'ru' ? 'Наш офис' : 'Біздің кеңсе'}</div>
                                            <div className="text-xl font-bold">{t.footer.addressText}</div>
                                        </div>
                                    </div>
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Разделитель */}
                <div className="border-t border-white/10 mb-12"></div>

                {/* Нижняя часть */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Логотип и описание */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                                <Image src="/logo.webp" alt="Ridera" width={40} height={40} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">Ridera</div>
                                <div className="text-sm text-slate-400">{t.footer.tagline}</div>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Навигация */}
                    <div>
                        <div className="text-sm font-bold mb-4 text-slate-300">{t.footer.navigation}</div>
                        <div className="space-y-2">
                            <a href="#условия" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.header.menu.conditions}</a>
                            <a href="#автомобили" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.header.menu.cars}</a>
                            <a href="#вопросы" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.header.menu.questions}</a>
                            <a href="#о-компании" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.header.menu.about}</a>
                            <a href="#отзывы" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.header.menu.reviews}</a>
                        </div>
                    </div>

                    {/* Юридическое */}
                    <div>
                        <div className="text-sm font-bold mb-4 text-slate-300">{language === 'ru' ? 'Документы' : 'Құжаттар'}</div>
                        <div className="space-y-2">
                            <a href="/privacy" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.footer.privacy}</a>
                            <a href="/terms" className="block text-sm text-slate-400 hover:text-white transition-colors">{t.footer.terms}</a>
                        </div>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
