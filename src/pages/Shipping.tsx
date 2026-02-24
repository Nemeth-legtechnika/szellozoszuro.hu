import { ArrowRight, Calendar, Clock, Package, Phone, Truck, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const Shipping = () => {
  const { t } = useTranslation()
  const paths = usePath()

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('shipping.pageTitle')} | szellozoszuro.hu</title>
        <meta name="description" content={t('shipping.pageDescription')} />
      </Helmet>

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">{t('shipping.pageTitle')}</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-2xl">{t('shipping.pageDescription')}</p>
          </div>
        </section>

        {/* Main Shipping Info */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Fast Delivery Highlight */}
              <div className="bg-gradient-to-r from-cyan/10 to-cyan/5 border border-cyan/30 rounded-2xl p-6 lg:p-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-cyan" />
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                      {t('shipping.fastDeliveryTitle')}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {t('shipping.fastDeliveryText')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                {/* In Stock Items */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        {t('shipping.inStock')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t('shipping.inStockTitle')}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>{t('shipping.inStockItem1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>{t('shipping.inStockItem2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>{t('shipping.inStockItem3')}</span>
                    </li>
                  </ul>
                </div>

                {/* Made to Order Items */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-600 text-xs font-semibold rounded-full">
                        {t('shipping.onOrder')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t('shipping.onOrderTitle')}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>{t('shipping.onOrderItem1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>{t('shipping.onOrderItem2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>{t('shipping.onOrderItem3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery Partner */}
              <div className="bg-muted rounded-2xl p-6 mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t('shipping.deliveryPartner')}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-card flex items-center justify-center border border-border">
                    <span className="text-2xl font-bold text-yellow-500">GLS</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GLS General Logistics Systems</p>
                    <p className="text-muted-foreground text-sm">
                      {t('shipping.deliveryPartnerDescription')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t('shipping.paymentMethods')}
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">💳</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {t('shipping.cardPayment')}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {t('shipping.cardPaymentDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">🏦</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {t('shipping.bankTransfer')}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {t('shipping.bankTransferDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {t('shipping.cashOnDelivery')}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {t('shipping.cashOnDeliveryDescription')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Pickup */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t('shipping.personalPickup')}
                </h3>
                <p className="text-muted-foreground mb-4">{t('shipping.personalPickupText')}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+36208069072" className="gap-2">
                      <Phone className="w-4 h-4" />
                      +36 20 806 9072
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={paths.contact} className="gap-2">
                      {t('nav.contact')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Order CTA */}
        <section className="py-12 lg:py-16 section-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Phone className="w-12 h-12 text-cyan mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('shipping.urgentOrder')}</h2>
              <p className="text-dark-muted text-lg mb-8">{t('shipping.urgentOrderText')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+36208069072" className="gap-2">
                    <Phone className="w-5 h-5" />
                    +36 20 806 9072
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a
                    href="https://szelloztetes.eu/termekkategoria/szurok/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    {t('shop.openWebshop')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Shipping
