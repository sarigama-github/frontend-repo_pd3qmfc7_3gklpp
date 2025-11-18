import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PromoStrip from './components/PromoStrip'
import Categories from './components/Categories'
import Popular from './components/Popular'
import Footer from './components/Footer'

const dict = {
  en: {
    nav: { home: 'Home', categories: 'Categories', popular: 'Popular', contact: 'Contact' },
    search: { placeholder: 'Search gift cards, brands, or categories...', categoryAll: 'All categories' },
    aria: { language: 'Language', region: 'Region', theme: 'Theme', category: 'Category' },
    hero: {
      badge: 'Digital Gift Cards',
      title: 'Top-up your favorite services in seconds',
      subtitle: 'Shop cards for streaming, gaming, apps, and more. Instant codes delivered worldwide.',
      ctaPrimary: 'Browse Categories',
      ctaSecondary: 'Top Trending',
    },
    categories: {
      title: 'Featured Categories',
      apple: 'Apple & iTunes',
      gaming: 'Gaming Cards',
      streaming: 'Streaming Services',
      payments: 'Payment & Wallets',
      global: 'International',
      music: 'Music',
      mobile: 'Mobile Recharge',
      youtube: 'YouTube',
      shopping: 'Shopping',
    },
    popular: { title: 'Popular & Trending', trending: 'Trending' },
    common: { viewAll: 'View all', buyNow: 'Buy now' },
    promos: {
      fastDelivery: 'Fast digital delivery',
      fastDeliveryDesc: 'Receive your code instantly after purchase',
      instantEmail: 'Instant email receipt',
      instantEmailDesc: 'We’ll send a copy to your inbox right away',
      bestPrices: 'Best prices guaranteed',
      bestPricesDesc: 'Competitive rates across all regions',
    },
    footer: {
      tagline: 'Your trusted marketplace for digital gift cards across the globe.',
      quickLinks: 'Quick links',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      contact: 'Contact Us',
      faq: 'FAQ',
      payments: 'Payment methods',
      follow: 'Follow us',
      support: 'Support',
      secure: 'Secure checkout',
      helpCenter: 'Help Center',
      rights: 'All rights reserved.',
      countryNotice: 'Serving Kuwait, Qatar, Saudi Arabia and more.'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', categories: 'المتجر', popular: 'العروض', contact: 'المساعدة' },
    search: { placeholder: 'ابحث عن بطاقات الهدايا أو العلامات التجارية...', categoryAll: 'كل الفئات' },
    aria: { language: 'اللغة', region: 'المنطقة', theme: 'المظهر', category: 'الفئة' },
    hero: {
      badge: 'بطاقات رقمية',
      title: 'اشحن خدماتك المفضلة خلال ثوانٍ',
      subtitle: 'تسوق لبطاقات البث والألعاب والتطبيقات والمزيد. أكواد فورية تصل للعالم كله.',
      ctaPrimary: 'استعرض الفئات',
      ctaSecondary: 'الأكثر رواجًا',
    },
    categories: {
      title: 'فئات مميزة',
      apple: 'آبل وآيتونز',
      gaming: 'بطاقات الألعاب',
      streaming: 'خدمات البث',
      payments: 'الدفع والمحافظ',
      global: 'دولي',
      music: 'الموسيقى',
      mobile: 'شحن الجوال',
      youtube: 'يوتيوب',
      shopping: 'تسوق',
    },
    popular: { title: 'الأشهر والأكثر طلبًا', trending: 'رائج' },
    common: { viewAll: 'عرض الكل', buyNow: 'اشتر الآن' },
    promos: {
      fastDelivery: 'تسليم رقمي سريع',
      fastDeliveryDesc: 'استلم الكود فورًا بعد الدفع',
      instantEmail: 'إيصال عبر البريد فورًا',
      instantEmailDesc: 'نرسل نسخة مباشرة إلى بريدك',
      bestPrices: 'أفضل الأسعار',
      bestPricesDesc: 'أسعار منافسة لكل المناطق',
    },
    footer: {
      tagline: 'منصة موثوقة لشراء بطاقات الهدايا الرقمية حول العالم.',
      quickLinks: 'روابط سريعة',
      terms: 'شروط الاستخدام',
      privacy: 'سياسة الخصوصية',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
      payments: 'طرق الدفع',
      follow: 'تابعنا',
      support: 'الدعم',
      secure: 'دفع آمن',
      helpCenter: 'مركز المساعدة',
      rights: 'جميع الحقوق محفوظة.',
      countryNotice: 'نخدم الكويت وقطر والسعودية وأكثر.'
    }
  }
}

export default function App() {
  const [lang, setLang] = useState('ar')
  const [region, setRegion] = useState('SA')

  const t = useMemo(() => {
    const d = dict[lang]
    return (key) => key.split('.').reduce((o, k) => (o ? o[k] : undefined), d)
  }, [lang])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header lang={lang} setLang={setLang} region={region} setRegion={setRegion} t={t} />
      <Hero t={t} />
      <PromoStrip t={t} />
      <Categories t={t} />
      <Popular t={t} />
      <Footer t={t} />
    </div>
  )
}
