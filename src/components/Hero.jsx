import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text readability - allow pointer events to pass */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f35e0c]/10 text-[#f35e0c] border border-[#f35e0c]/20 mb-4">
            {t('hero.badge')}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#categories" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#f35e0c] text-white font-medium hover:brightness-110 transition">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#popular" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#0c79f3] text-white font-medium hover:brightness-110 transition">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
