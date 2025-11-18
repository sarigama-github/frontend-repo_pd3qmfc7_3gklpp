import React from 'react'
import { Apple, Gamepad2, MonitorPlay, CreditCard, Globe2, Music, Smartphone, Youtube, ShoppingBag } from 'lucide-react'

const categories = [
  { key: 'apple', icon: Apple, color: '#000000', bg: 'bg-slate-100 dark:bg-slate-800' },
  { key: 'gaming', icon: Gamepad2, color: '#0c79f3', bg: 'bg-[#0c79f3]/10' },
  { key: 'streaming', icon: MonitorPlay, color: '#f35e0c', bg: 'bg-[#f35e0c]/10' },
  { key: 'payments', icon: CreditCard, color: '#10b981', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { key: 'global', icon: Globe2, color: '#6366f1', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
  { key: 'music', icon: Music, color: '#ec4899', bg: 'bg-pink-100 dark:bg-pink-900/30' },
  { key: 'mobile', icon: Smartphone, color: '#f59e0b', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  { key: 'youtube', icon: Youtube, color: '#ef4444', bg: 'bg-red-100 dark:bg-red-900/30' },
  { key: 'shopping', icon: ShoppingBag, color: '#22c55e', bg: 'bg-green-100 dark:bg-green-900/30' },
]

export default function Categories({ t }) {
  return (
    <section id="categories" className="py-14 sm:py-16 lg:py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t('categories.title')}</h2>
          <a href="#" className="text-sm font-medium text-[#0c79f3] hover:underline">{t('common.viewAll')}</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map(({ key, icon: Icon, color, bg }) => (
            <a key={key} href="#" className={`group rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 ${bg} transition hover:-translate-y-0.5` }>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 grid place-items-center shadow-sm">
                  <Icon size={22} style={{ color }} />
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t(`categories.${key}`)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
