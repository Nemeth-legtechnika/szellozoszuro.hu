import { Building2, CreditCard, FileText, Mail, RotateCcw, Scale, Server, Shield } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const Terms = () => {
  const { t } = useTranslation()

  return (
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>{t('terms.pageTitle')} | Németh Légtechnika Kft.</title>
        <meta name='description' content={t('terms.pageDescription')} />
      </Helmet>

      <Header />

      <main className='pt-20 lg:pt-24'>
        {/* Page Header */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='mb-4 flex items-center gap-3'>
              <FileText className='size-8 text-cyan' />
              <h1 className='text-3xl font-bold lg:text-4xl'>
                <span className='gradient-cyan-text'>{t('terms.pageTitle')}</span>
              </h1>
            </div>
            <p className='max-w-3xl text-lg text-dark-muted'>{t('terms.pageDescription')}</p>
          </div>
        </section>

        {/* Content */}
        <section className='py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col gap-8 lg:flex-row'>
              {/* Sidebar Navigation */}
              <aside className='shrink-0 lg:w-64'>
                <nav className='rounded-2xl border border-border bg-card p-4 lg:sticky lg:top-28'>
                  <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                    {t('terms.toc')}
                  </p>
                  <ul className='space-y-2'>
                    <li>
                      <a
                        href='#szolgaltato'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          1
                        </span>
                        {t('terms.sections.provider.title')}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#targy'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          2
                        </span>
                        {t('terms.sections.subject.title')}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#fizetes'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          3
                        </span>
                        {t('terms.sections.payment.title')}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#elallas'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          4
                        </span>
                        {t('terms.sections.withdrawal.title')}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#szavatossag'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          5
                        </span>
                        {t('terms.sections.warranty.title')}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#panasz'
                        className='flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors hover:text-cyan'
                      >
                        <span className='flex size-5 items-center justify-center rounded bg-cyan/10 text-xs font-bold text-cyan'>
                          6
                        </span>
                        {t('terms.sections.complaints.title')}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>

              {/* Main Content */}
              <div className='max-w-3xl flex-1 space-y-8'>
                {/* 1. Szolgáltató adatai */}
                <section id='szolgaltato' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <Building2 className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>1. {t('terms.sections.provider.title')}</h2>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.companyName')}</p>
                        <p className='font-medium text-foreground'>{t('terms.sections.provider.companyNameValue')}</p>
                      </div>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>
                          {t('terms.sections.provider.headquarters')}
                        </p>
                        <p className='font-medium text-foreground'>{t('terms.sections.provider.headquartersValue')}</p>
                      </div>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.taxId')}</p>
                        <p className='font-medium text-foreground'>26290438-2-08</p>
                      </div>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>
                          {t('terms.sections.provider.registrationNumber')}
                        </p>
                        <p className='font-medium text-foreground'>08-09-029861</p>
                      </div>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>
                          {t('terms.sections.provider.representative')}
                        </p>
                        <p className='font-medium text-foreground'>
                          {t('terms.sections.provider.representativeValue')}
                        </p>
                      </div>
                      <div>
                        <p className='mb-1 text-sm text-muted-foreground'>{t('terms.sections.provider.email')}</p>
                        <a
                          href='mailto:info@sopronterv.hu'
                          className='flex items-center gap-1.5 font-medium text-cyan hover:underline'
                        >
                          <Mail className='size-4' />
                          info@sopronterv.hu
                        </a>
                      </div>
                    </div>

                    <div className='mt-6 border-t border-border pt-6'>
                      <div className='mb-3 flex items-center gap-2'>
                        <Server className='size-4 text-muted-foreground' />
                        <p className='text-sm text-muted-foreground'>{t('terms.sections.provider.hostingProvider')}</p>
                      </div>
                      <p className='font-medium text-foreground'>EZIT Kft.</p>
                      <p className='text-sm text-muted-foreground'>1132 Budapest, Victor Hugo u. 18-22.</p>
                    </div>
                  </div>
                </section>

                {/* 2. A szerződés tárgya és hatálya */}
                <section id='targy' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <FileText className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>2. {t('terms.sections.subject.title')}</h2>
                    </div>
                    <div className='space-y-4 leading-relaxed text-muted-foreground'>
                      <p>{t('terms.sections.subject.text1')}</p>
                      <p>{t('terms.sections.subject.text2')}</p>
                    </div>
                  </div>
                </section>

                {/* 3. Megrendelés és fizetés */}
                <section id='fizetes' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <CreditCard className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>3. {t('terms.sections.payment.title')}</h2>
                    </div>
                    <div className='space-y-4 leading-relaxed text-muted-foreground'>
                      <div className='rounded-lg bg-secondary/50 p-4'>
                        <p className='mb-2 font-medium text-foreground'>
                          {t('terms.sections.payment.contractCreation')}
                        </p>
                        <p className='text-sm'>{t('terms.sections.payment.contractCreationText')}</p>
                      </div>
                      <div>
                        <p className='mb-2 font-medium text-foreground'>{t('terms.sections.payment.paymentMethods')}</p>
                        <ul className='ml-2 list-inside list-disc space-y-1'>
                          <li>{t('terms.sections.payment.cardPayment')}</li>
                          <li>{t('terms.sections.payment.bankTransfer')}</li>
                        </ul>
                      </div>
                      <div>
                        <p className='mb-2 font-medium text-foreground'>{t('terms.sections.payment.prices')}</p>
                        <p>{t('terms.sections.payment.pricesText')}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Elállási jog */}
                <section id='elallas' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <RotateCcw className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>
                        4. {t('terms.sections.withdrawal.title')}
                      </h2>
                    </div>
                    <div className='space-y-4 leading-relaxed text-muted-foreground'>
                      <p>{t('terms.sections.withdrawal.text')}</p>
                      <div className='rounded-lg border border-cyan/20 bg-cyan/5 p-4'>
                        <ul className='space-y-2 text-sm'>
                          <li className='flex items-start gap-2'>
                            <span className='font-bold text-cyan'>•</span>
                            {t('terms.sections.withdrawal.notice1')}
                          </li>
                          <li className='flex items-start gap-2'>
                            <span className='font-bold text-cyan'>•</span>
                            {t('terms.sections.withdrawal.notice2')}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. Szavatosság és Jótállás */}
                <section id='szavatossag' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <Shield className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>5. {t('terms.sections.warranty.title')}</h2>
                    </div>
                    <div className='space-y-4 leading-relaxed text-muted-foreground'>
                      <p>{t('terms.sections.warranty.text1')}</p>
                      <p>{t('terms.sections.warranty.text2')}</p>
                    </div>
                  </div>
                </section>

                {/* 6. Panaszkezelés és Jogorvoslat */}
                <section id='panasz' className='scroll-mt-28'>
                  <div className='rounded-2xl border border-border bg-card p-6 lg:p-8'>
                    <div className='mb-6 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-lg bg-cyan/10'>
                        <Scale className='size-5 text-cyan' />
                      </div>
                      <h2 className='text-xl font-semibold text-foreground'>
                        6. {t('terms.sections.complaints.title')}
                      </h2>
                    </div>
                    <div className='space-y-4 leading-relaxed text-muted-foreground'>
                      <p>{t('terms.sections.complaints.text')}</p>
                      <a
                        href='mailto:info@sopronterv.hu'
                        className='inline-flex items-center gap-2 font-medium text-cyan hover:underline'
                      >
                        <Mail className='size-4' />
                        info@sopronterv.hu
                      </a>

                      <div className='mt-6 border-t border-border pt-6'>
                        <p className='mb-3'>{t('terms.sections.complaints.arbitration')}</p>
                        <div className='rounded-lg bg-secondary/50 p-4'>
                          <p className='mb-2 font-medium text-foreground'>
                            {t('terms.sections.complaints.arbitrationBody')}
                          </p>
                          <p className='text-sm'>{t('terms.sections.complaints.arbitrationAddress')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Checkout Note */}
                <div className='rounded-2xl border border-cyan/20 bg-cyan/5 p-6'>
                  <p className='text-sm text-muted-foreground'>
                    <strong className='text-foreground'>{t('terms.checkoutNote')}</strong>
                  </p>
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

export default Terms
