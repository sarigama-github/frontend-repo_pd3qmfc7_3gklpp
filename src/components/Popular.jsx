import React from 'react'
import { Star } from 'lucide-react'

const items = [
  { key: 'itunes', title: 'iTunes Gift Card', price: '10 - 200 USD', tag: 'Apple' },
  { key: 'playstation', title: 'PlayStation Store', price: '10 - 100 USD', tag: 'Gaming' },
  { key: 'xbox', title: 'Xbox Live', price: '10 - 100 USD', tag: 'Gaming' },
  { key: 'netflix', title: 'Netflix', price: '5 - 50 USD', tag: 'Streaming' },
  { key: 'spotify', title: 'Spotify', price: '10 - 60 USD', tag: 'Music' },
  { key: 'googleplay', title: 'Google Play', price: '5 - 200 USD', tag: 'Apps' },
]

export default function Popular({ t }) {
  return (
    <section id="popular" className="py-14 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t('popular.title')}</h2>
          <a href="#" className="text-sm font-medium text-[#0c79f3] hover:underline">{t('common.viewAll')}</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="h-10 w-16 rounded-lg bg-gradient-to-br from-[#f35e0c] to-[#0c79f3]" />
                <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                  <Star size={14} /> {t('popular.trending')}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.tag}</div>
              <div className="mt-3 font-semibold text-[#0c79f3]">{item.price}</div>
              <button className="mt-4 w-full h-10 rounded-xl bg-[#f35e0c] text-white text-sm font-medium hover:brightness-110 transition">
                {t('common.buyNow')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
