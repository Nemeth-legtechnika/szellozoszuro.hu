import {
  Building2,
  Clock,
  Cookie,
  CreditCard,
  Database,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const Privacy = () => {
  const { t } = useTranslation()

  return (
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>{t('privacy.pageTitle')} | Németh Légtechnika Kft.</title>
        <meta name='description' content={t('privacy.pageDescription')} />
      </Helmet>

      <Header />

      <main className='pt-20 lg:pt-24'>
        {/* Page Header */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mb-4 flex items-center gap-3'>
              <ShieldCheck className='size-8 text-cyan' />
              <h1 className='text-3xl font-bold lg:text-4xl'>
                <span className='gradient-cyan-text'>{t('privacy.pageTitle')}</span>
              </h1>
            </div>
            <p className='max-w-3xl text-lg text-dark-muted'>{t('privacy.pageDescription')}</p>
          </div>
        </section>

        {/* Content */}
        <section className='py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto max-w-4xl space-y-8'>
              {/* Data Controller */}
              <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                <div className='mb-6 flex items-center gap-3'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                    <Building2 className='size-5 text-cyan' />
                  </div>
                  <h2 className='text-xl font-semibold text-foreground'>{t('privacy.dataController')}</h2>
                </div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.companyName')}</p>
                    <p className='font-medium text-foreground'>Németh Légtechnika Kft.</p>
                  </div>
                  <div>
                    <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.headquarters')}</p>
                    <p className='font-medium text-foreground'>9400 Sopron, Szent György utca 4. 2. em. 3.</p>
                  </div>
                  <div>
                    <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.email')}</p>
                    <a href='mailto:info@sopronterv.hu' className='font-medium text-cyan hover:underline'>
                      info@sopronterv.hu
                    </a>
                  </div>
                  <div>
                    <p className='mb-1 text-sm text-muted-foreground'>{t('contact.phone')}</p>
                    <a href='tel:+36203238172' className='font-medium text-cyan hover:underline'>
                      +36 20 323 8172
                    </a>
                  </div>
                </div>
              </div>

              {/* Data Processing Points */}
              <div>
                <h2 className='mb-6 text-2xl font-bold text-foreground'>{t('privacy.mainPoints')}</h2>

                <div className='space-y-6'>
                  {/* Online Purchase */}
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='flex items-start gap-4'>
                      <div className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10'>
                        <Database className='size-5 text-cyan' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-lg font-semibold text-foreground'>
                          {t('privacy.sections.purchase.title')}
                        </h3>
                        <p className='mb-4 leading-relaxed text-muted-foreground'>
                          {t('privacy.sections.purchase.text')}
                        </p>
                        <div className='rounded-lg bg-secondary/50 p-4'>
                          <p className='mb-2 text-sm font-medium text-foreground'>
                            {t('privacy.sections.purchase.dataHandled')}
                          </p>
                          <ul className='space-y-1 text-sm text-muted-foreground'>
                            <li>• {t('privacy.sections.purchase.name')}</li>
                            <li>• {t('privacy.sections.purchase.billingAddress')}</li>
                            <li>• {t('privacy.sections.purchase.shippingAddress')}</li>
                            <li>• {t('privacy.sections.purchase.email')}</li>
                            <li>• {t('privacy.sections.purchase.phone')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Retention */}
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='flex items-start gap-4'>
                      <div className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10'>
                        <Clock className='size-5 text-cyan' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-lg font-semibold text-foreground'>
                          {t('privacy.sections.retention.title')}
                        </h3>
                        <div className='space-y-3 text-muted-foreground'>
                          <p className='leading-relaxed'>{t('privacy.sections.retention.text1')}</p>
                          <p className='leading-relaxed'>{t('privacy.sections.retention.text2')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Transfer */}
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='flex items-start gap-4'>
                      <div className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10'>
                        <CreditCard className='size-5 text-cyan' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-lg font-semibold text-foreground'>
                          {t('privacy.sections.transfer.title')}
                        </h3>
                        <div className='space-y-4 text-muted-foreground'>
                          <p className='leading-relaxed'>{t('privacy.sections.transfer.text')}</p>
                          <div className='rounded-lg bg-secondary/50 p-4'>
                            <p className='mb-2 font-medium text-foreground'>
                              {t('privacy.sections.transfer.onlinePayment')}
                            </p>
                            <p className='text-sm'>{t('privacy.sections.transfer.onlinePaymentText')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='flex items-start gap-4'>
                      <div className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10'>
                        <Cookie className='size-5 text-cyan' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-lg font-semibold text-foreground'>
                          {t('privacy.sections.cookies.title')}
                        </h3>
                        <p className='leading-relaxed text-muted-foreground'>{t('privacy.sections.cookies.text')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                <div className='mb-6 flex items-center gap-3'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                    <UserCheck className='size-5 text-cyan' />
                  </div>
                  <h2 className='text-xl font-semibold text-foreground'>{t('privacy.yourRights')}</h2>
                </div>
                <p className='mb-4 leading-relaxed text-muted-foreground'>{t('privacy.yourRightsText')}</p>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div className='rounded-lg bg-secondary/50 p-4'>
                    <p className='mb-1 font-medium text-foreground'>{t('privacy.rights.access.title')}</p>
                    <p className='text-sm text-muted-foreground'>{t('privacy.rights.access.description')}</p>
                  </div>
                  <div className='rounded-lg bg-secondary/50 p-4'>
                    <p className='mb-1 font-medium text-foreground'>{t('privacy.rights.rectification.title')}</p>
                    <p className='text-sm text-muted-foreground'>{t('privacy.rights.rectification.description')}</p>
                  </div>
                  <div className='rounded-lg bg-secondary/50 p-4'>
                    <p className='mb-1 font-medium text-foreground'>{t('privacy.rights.erasure.title')}</p>
                    <p className='text-sm text-muted-foreground'>{t('privacy.rights.erasure.description')}</p>
                  </div>
                  <div className='rounded-lg bg-secondary/50 p-4'>
                    <p className='mb-1 font-medium text-foreground'>{t('privacy.rights.restriction.title')}</p>
                    <p className='text-sm text-muted-foreground'>{t('privacy.rights.restriction.description')}</p>
                  </div>
                </div>
              </div>

              {/* Legal Remedies */}
              <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                <div className='mb-6 flex items-center gap-3'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                    <Scale className='size-5 text-cyan' />
                  </div>
                  <h2 className='text-xl font-semibold text-foreground'>{t('privacy.legalRemedies')}</h2>
                </div>
                <p className='mb-4 leading-relaxed text-muted-foreground'>{t('privacy.legalRemediesText')}</p>
                <div className='rounded-lg bg-secondary/50 p-4'>
                  <p className='mb-2 font-medium text-foreground'>{t('privacy.naih')}</p>
                  <div className='space-y-1 text-sm text-muted-foreground'>
                    <p>{t('privacy.naihAddress')}</p>
                    <p>{t('privacy.naihPostal')}</p>
                    <p>
                      {t('privacy.naihWebsite')}{' '}
                      <a
                        href='https://naih.hu'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-cyan hover:underline'
                      >
                        www.naih.hu
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact for Questions */}
              <div className='rounded-2xl border border-cyan/20 bg-cyan/5 p-6 lg:p-8'>
                <h3 className='mb-4 text-lg font-semibold text-foreground'>{t('privacy.questionsTitle')}</h3>
                <p className='mb-4 text-muted-foreground'>{t('privacy.questionsText')}</p>
                <div className='flex flex-wrap gap-4'>
                  <a href='mailto:info@sopronterv.hu' className='flex items-center gap-2 text-cyan hover:underline'>
                    <Mail className='size-4' />
                    info@sopronterv.hu
                  </a>
                  <a href='tel:+36203238172' className='flex items-center gap-2 text-cyan hover:underline'>
                    <Phone className='size-4' />
                    +36 20 323 8172
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Privacy
