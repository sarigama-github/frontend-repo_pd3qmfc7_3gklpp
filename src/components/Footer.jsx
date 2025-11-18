import React from 'react'
import { ShieldCheck, HelpCircle, Mail, FileText, Facebook, Twitter, Instagram, CreditCard, Shield } from 'lucide-react'

export default function Footer({ t }) {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f35e0c] to-[#0c79f3]" />
              <span className="font-semibold text-slate-900 dark:text-white">Giftify</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-[#0c79f3]" href="#">{t('footer.terms')}</a></li>
              <li><a className="hover:text-[#0c79f3]" href="#">{t('footer.privacy')}</a></li>
              <li><a className="hover:text-[#0c79f3]" href="#">{t('footer.contact')}</a></li>
              <li><a className="hover:text-[#0c79f3]" href="#">{t('footer.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t('footer.payments')}</h4>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="h-8 w-12 rounded bg-slate-200 dark:bg-slate-800 grid place-items-center"><CreditCard size={16} /></div>
              <div className="h-8 w-12 rounded bg-slate-200 dark:bg-slate-800 grid place-items-center"><Shield size={16} /></div>
              <div className="h-8 w-12 rounded bg-slate-200 dark:bg-slate-800 grid place-items-center"><CreditCard size={16} /></div>
              <div className="h-8 w-12 rounded bg-slate-200 dark:bg-slate-800 grid place-items-center"><Shield size={16} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t('footer.follow')}</h4>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <a className="hover:text-[#0c79f3]" href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a className="hover:text-[#0c79f3]" href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a className="hover:text-[#0c79f3]" href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><ShieldCheck size={16} /> {t('footer.secure')}</li>
              <li className="flex items-center gap-2"><HelpCircle size={16} /> {t('footer.helpCenter')}</li>
              <li className="flex items-center gap-2"><Mail size={16} /> support@giftify.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Giftify. {t('footer.rights')}</p>
          <p className="mt-2 sm:mt-0">{t('footer.countryNotice')}</p>
        </div>
      </div>
    </footer>
  )
}
