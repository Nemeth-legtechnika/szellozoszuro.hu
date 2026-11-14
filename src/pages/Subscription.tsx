import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HowItWorks from '@/components/subscription/HowItWorks'
import SubscriptionForm from '@/components/subscription/SubscriptionForm'

const Subscription = () => {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background">
      <Helmet><title>{t('subscription.pageTitle')} | szellozoszuro.hu</title><meta name="description" content={t('subscription.pageDescription')} /></Helmet>
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="section-dark py-12 lg:py-16"><div className="container mx-auto px-4"><h1 className="mb-3 text-3xl font-bold text-dark-foreground lg:text-4xl">{t('subscription.pageTitle')}</h1><p className="max-w-2xl text-lg text-dark-muted">{t('subscription.pageDescription')}</p></div></section>
        <div className="container mx-auto max-w-4xl px-4"><HowItWorks /><section className="py-10"><SubscriptionForm /><p className="mt-6 text-sm text-muted-foreground">{t('subscription.note')}</p></section></div>
      </main>
      <Footer />
    </div>
  )
}
export default Subscription
