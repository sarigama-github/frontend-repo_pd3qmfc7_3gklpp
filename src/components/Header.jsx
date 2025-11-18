import React, { useEffect, useState } from 'react'
import { ShoppingCart, Search, Globe, Sun, Moon, MapPin } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]

const regions = [
  { code: 'KW', label_en: 'Kuwait', label_ar: 'الكويت' },
  { code: 'QA', label_en: 'Qatar', label_ar: 'قطر' },
  { code: 'SA', label_en: 'Saudi Arabia', label_ar: 'السعودية' },
]

export default function Header({ lang, setLang, region, setRegion, t }) {
  const [theme, setTheme] = useState('light')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const langObj = languages.find(l => l.code === lang) || languages[0]
    const root = document.documentElement
    root.setAttribute('lang', langObj.code)
    root.setAttribute('dir', langObj.dir)
  }, [lang])

  const isArabic = lang === 'ar'

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f35e0c] to-[#0c79f3] shadow-sm" />
            <span className="font-semibold text-slate-900 dark:text-white text-lg">Giftify</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#" className="hover:text-[#f35e0c] transition-colors">{t('nav.home')}</a>
            <a href="#categories" className="hover:text-[#f35e0c] transition-colors">{t('nav.categories')}</a>
            <a href="#popular" className="hover:text-[#f35e0c] transition-colors">{t('nav.popular')}</a>
            <a href="#contact" className="hover:text-[#f35e0c] transition-colors">{t('nav.contact')}</a>
          </nav>

          {/* Search */}
          <div className="flex-1 hidden lg:flex items-center">
            <div className="w-full max-w-md relative">
              <Search className="absolute top-1/2 -translate-y-1/2 mx-3 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 rounded-xl pl-10 pr-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-transparent focus:border-[#0c79f3] outline-none transition"
                placeholder={t('search.placeholder')}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language */}
            <div className="relative">
              <select
                aria-label={t('aria.language')}
                className="h-10 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                {languages.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>

            {/* Region */}
            <div className="relative">
              <div className="flex items-center gap-2 h-10 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm">
                <MapPin size={16} className="text-slate-500" />
                <select
                  aria-label={t('aria.region')}
                  className="bg-transparent outline-none"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {regions.map(r => (
                    <option key={r.code} value={r.code}>
                      {isArabic ? r.label_ar : r.label_en}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Theme */}
            <button
              aria-label={t('aria.theme')}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 grid place-items-center text-slate-700 dark:text-slate-200"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Cart */}
            <button className="relative h-10 w-10 rounded-xl bg-[#f35e0c]/10 text-[#f35e0c] grid place-items-center hover:bg-[#f35e0c]/20 transition">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -end-1 text-[10px] px-1.5 py-0.5 rounded-full bg-[#0c79f3] text-white">0</span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-3 mb-4 lg:hidden">
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 mx-3 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-10 rounded-xl pl-10 pr-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-transparent focus:border-[#0c79f3] outline-none transition"
              placeholder={t('search.placeholder')}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
