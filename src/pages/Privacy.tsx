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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('privacy.pageTitle')} | Németh Légtechnika Kft.</title>
        <meta name="description" content={t('privacy.pageDescription')} />
      </Helmet>

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">{t('privacy.pageTitle')}</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-3xl">{t('privacy.pageDescription')}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Data Controller */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {t('privacy.dataController')}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t('terms.sections.provider.companyName')}
                    </p>
                    <p className="font-medium text-foreground">Németh Légtechnika Kft.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t('terms.sections.provider.headquarters')}
                    </p>
                    <p className="font-medium text-foreground">
                      9400 Sopron, Szent György utca 4. 2. em. 3.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t('terms.sections.provider.email')}
                    </p>
                    <a
                      href="mailto:info@sopronterv.hu"
                      className="font-medium text-cyan hover:underline"
                    >
                      info@sopronterv.hu
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t('contact.phone')}</p>
                    <a href="tel:+36203238172" className="font-medium text-cyan hover:underline">
                      +36 20 323 8172
                    </a>
                  </div>
                </div>
              </div>

              {/* Data Processing Points */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('privacy.mainPoints')}
                </h2>

                <div className="space-y-6">
                  {/* Online Purchase */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Database className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {t('privacy.sections.purchase.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t('privacy.sections.purchase.text')}
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-2">
                            {t('privacy.sections.purchase.dataHandled')}
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
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
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {t('privacy.sections.retention.title')}
                        </h3>
                        <div className="space-y-3 text-muted-foreground">
                          <p className="leading-relaxed">{t('privacy.sections.retention.text1')}</p>
                          <p className="leading-relaxed">{t('privacy.sections.retention.text2')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Transfer */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CreditCard className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {t('privacy.sections.transfer.title')}
                        </h3>
                        <div className="space-y-4 text-muted-foreground">
                          <p className="leading-relaxed">{t('privacy.sections.transfer.text')}</p>
                          <div className="bg-secondary/50 rounded-lg p-4">
                            <p className="font-medium text-foreground mb-2">
                              {t('privacy.sections.transfer.onlinePayment')}
                            </p>
                            <p className="text-sm">
                              {t('privacy.sections.transfer.onlinePaymentText')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Cookie className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {t('privacy.sections.cookies.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('privacy.sections.cookies.text')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {t('privacy.yourRights')}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacy.yourRightsText')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">
                      {t('privacy.rights.access.title')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.rights.access.description')}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">
                      {t('privacy.rights.rectification.title')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.rights.rectification.description')}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">
                      {t('privacy.rights.erasure.title')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.rights.erasure.description')}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">
                      {t('privacy.rights.restriction.title')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.rights.restriction.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Remedies */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {t('privacy.legalRemedies')}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacy.legalRemediesText')}
                </p>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="font-medium text-foreground mb-2">{t('privacy.naih')}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{t('privacy.naihAddress')}</p>
                    <p>{t('privacy.naihPostal')}</p>
                    <p>
                      {t('privacy.naihWebsite')}{' '}
                      <a
                        href="https://naih.hu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:underline"
                      >
                        www.naih.hu
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact for Questions */}
              <div className="bg-cyan/5 border border-cyan/20 rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t('privacy.questionsTitle')}
                </h3>
                <p className="text-muted-foreground mb-4">{t('privacy.questionsText')}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@sopronterv.hu"
                    className="flex items-center gap-2 text-cyan hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    info@sopronterv.hu
                  </a>
                  <a
                    href="tel:+36203238172"
                    className="flex items-center gap-2 text-cyan hover:underline"
                  >
                    <Phone className="w-4 h-4" />
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
