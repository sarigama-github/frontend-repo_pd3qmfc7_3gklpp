import React from 'react'

export default function PromoStrip({ t }) {
  const promos = [
    { titleKey: 'promos.fastDelivery', descKey: 'promos.fastDeliveryDesc' },
    { titleKey: 'promos.instantEmail', descKey: 'promos.instantEmailDesc' },
    { titleKey: 'promos.bestPrices', descKey: 'promos.bestPricesDesc' },
  ]

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {promos.map((p, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-4">
            <div className="font-semibold text-slate-900 dark:text-white">{t(p.titleKey)}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{t(p.descKey)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
