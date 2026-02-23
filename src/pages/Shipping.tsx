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
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>{t('shipping.pageTitle')} | szellozoszuro.hu</title>
        <meta name='description' content={t('shipping.pageDescription')} />
      </Helmet>

      <Header />

      <main className='pt-20 lg:pt-24'>
        {/* Page Header */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mb-4 flex items-center gap-3'>
              <Truck className='size-8 text-cyan' />
              <h1 className='text-3xl font-bold lg:text-4xl'>
                <span className='gradient-cyan-text'>{t('shipping.pageTitle')}</span>
              </h1>
            </div>
            <p className='max-w-2xl text-lg text-dark-muted'>{t('shipping.pageDescription')}</p>
          </div>
        </section>

        {/* Main Shipping Info */}
        <section className='py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto max-w-4xl'>
              {/* Fast Delivery Highlight */}
              <div className='mb-10 rounded-2xl border border-cyan/30 bg-gradient-to-r from-cyan/10 to-cyan/5 p-6 lg:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='flex size-14 shrink-0 items-center justify-center rounded-xl bg-cyan/20'>
                    <Zap className='size-7 text-cyan' />
                  </div>
                  <div>
                    <h2 className='mb-2 text-xl font-bold text-foreground lg:text-2xl'>
                      {t('shipping.fastDeliveryTitle')}
                    </h2>
                    <p className='text-lg text-muted-foreground'>{t('shipping.fastDeliveryText')}</p>
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <div className='mb-10 grid gap-6 md:grid-cols-2'>
                {/* In Stock Items */}
                <div className='rounded-2xl border border-border bg-card p-6'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='flex size-12 items-center justify-center rounded-xl bg-green-500/10'>
                      <Package className='size-6 text-green-500' />
                    </div>
                    <div>
                      <span className='inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-600'>
                        <span className='size-2 animate-pulse rounded-full bg-green-500' />
                        {t('shipping.inStock')}
                      </span>
                    </div>
                  </div>
                  <h3 className='mb-3 text-lg font-semibold text-foreground'>{t('shipping.inStockTitle')}</h3>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li className='flex items-start gap-2'>
                      <Clock className='mt-1 size-4 shrink-0 text-cyan' />
                      <span>{t('shipping.inStockItem1')}</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Truck className='mt-1 size-4 shrink-0 text-cyan' />
                      <span>{t('shipping.inStockItem2')}</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Zap className='mt-1 size-4 shrink-0 text-cyan' />
                      <span>{t('shipping.inStockItem3')}</span>
                    </li>
                  </ul>
                </div>

                {/* Made to Order Items */}
                <div className='rounded-2xl border border-border bg-card p-6'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='flex size-12 items-center justify-center rounded-xl bg-amber-500/10'>
                      <Calendar className='size-6 text-amber-500' />
                    </div>
                    <div>
                      <span className='inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600'>
                        {t('shipping.onOrder')}
                      </span>
                    </div>
                  </div>
                  <h3 className='mb-3 text-lg font-semibold text-foreground'>{t('shipping.onOrderTitle')}</h3>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li className='flex items-start gap-2'>
                      <Clock className='mt-1 size-4 shrink-0 text-amber-500' />
                      <span>{t('shipping.onOrderItem1')}</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Package className='mt-1 size-4 shrink-0 text-amber-500' />
                      <span>{t('shipping.onOrderItem2')}</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <ArrowRight className='mt-1 size-4 shrink-0 text-amber-500' />
                      <span>{t('shipping.onOrderItem3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery Partner */}
              <div className='mb-10 rounded-2xl bg-muted p-6'>
                <h3 className='mb-4 text-lg font-semibold text-foreground'>{t('shipping.deliveryPartner')}</h3>
                <div className='flex items-center gap-4'>
                  <div className='flex size-16 items-center justify-center rounded-xl border border-border bg-card'>
                    <span className='text-2xl font-bold text-yellow-500'>GLS</span>
                  </div>
                  <div>
                    <p className='font-medium text-foreground'>GLS General Logistics Systems</p>
                    <p className='text-sm text-muted-foreground'>{t('shipping.deliveryPartnerDescription')}</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className='mb-10 rounded-2xl border border-border bg-card p-6'>
                <h3 className='mb-4 text-lg font-semibold text-foreground'>{t('shipping.paymentMethods')}</h3>
                <div className='grid gap-4 sm:grid-cols-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                      <span className='text-lg'>💳</span>
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>{t('shipping.cardPayment')}</p>
                      <p className='text-xs text-muted-foreground'>{t('shipping.cardPaymentDescription')}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                      <span className='text-lg'>🏦</span>
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>{t('shipping.bankTransfer')}</p>
                      <p className='text-xs text-muted-foreground'>{t('shipping.bankTransferDescription')}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                      <span className='text-lg'>📦</span>
                    </div>
                    <div>
                      <p className='text-sm font-medium text-foreground'>{t('shipping.cashOnDelivery')}</p>
                      <p className='text-xs text-muted-foreground'>{t('shipping.cashOnDeliveryDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Pickup */}
              <div className='rounded-2xl bg-secondary/50 p-6'>
                <h3 className='mb-3 text-lg font-semibold text-foreground'>{t('shipping.personalPickup')}</h3>
                <p className='mb-4 text-muted-foreground'>{t('shipping.personalPickupText')}</p>
                <div className='flex flex-col gap-3 sm:flex-row'>
                  <Button variant='outline' size='sm' asChild>
                    <a href='tel:+36208069072' className='gap-2'>
                      <Phone className='size-4' />
                      +36 20 806 9072
                    </a>
                  </Button>
                  <Button variant='ghost' size='sm' asChild>
                    <Link to={paths.contact} className='gap-2'>
                      {t('nav.contact')}
                      <ArrowRight className='size-4' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Order CTA */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto max-w-2xl text-center'>
              <Phone className='mx-auto mb-6 size-12 text-cyan' />
              <h2 className='mb-4 text-2xl font-bold lg:text-3xl'>{t('shipping.urgentOrder')}</h2>
              <p className='mb-8 text-lg text-dark-muted'>{t('shipping.urgentOrderText')}</p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Button variant='hero' size='lg' asChild>
                  <a href='tel:+36208069072' className='gap-2'>
                    <Phone className='size-5' />
                    +36 20 806 9072
                  </a>
                </Button>
                <Button variant='heroOutline' size='lg' asChild>
                  <a
                    href='https://szelloztetes.eu/termekkategoria/szurok/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='gap-2'
                  >
                    {t('shop.openWebshop')}
                    <ArrowRight className='size-5' />
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
