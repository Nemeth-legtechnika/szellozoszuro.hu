import { MapPin, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import ContactForm from '@/components/contact/ContactForm'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useContact from '@/hooks/use-contact'

const Contact = () => {
  const { t } = useTranslation()
  const { orderContact, technicalContact, generalInfo, companyInfo } = useContact()
  const orderPhone = orderContact.find((c) => c.icon === Phone)

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('contact.pageTitle')} | szellozoszuro.hu</title>
        <meta name="description" content={t('contact.pageDescription')} />
      </Helmet>

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">{t('contact.pageTitle')}</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl mb-4">{t('contact.pageDescription')}</p>
            <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-lg px-4 py-2">
              <MapPin className="w-4 h-4 text-cyan" />
              <span className="text-dark-foreground text-sm">
                <strong>{t('contact.nationalCoverage')}</strong> {t('contact.nationalCoverageText')}
              </span>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Order & Shipping */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {t('contact.orderContact')}
                  </h2>
                  <div className="space-y-3">
                    {orderContact.map((item) => (
                      <div
                        key={item.title + item.value}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Support */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {t('contact.technicalContact')}
                  </h2>
                  <div className="space-y-3">
                    {technicalContact.map((item) => (
                      <div
                        key={item.title + item.value}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Info */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {t('contact.availability')}
                  </h2>
                  <div className="space-y-3">
                    {generalInfo.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                          {item.subtext && <p className="text-xs text-cyan mt-1">{item.subtext}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-dark rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-dark-foreground mb-4">
                    {t('contact.fastResponse')}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed mb-4">
                    {t('contact.fastResponseDescription')}
                  </p>
                  {orderPhone && (
                    <div className="flex items-center gap-2 text-cyan font-medium">
                      <Phone className="w-4 h-4" />
                      <a href={orderPhone.href} className="hover:underline">
                        {orderPhone.value}
                      </a>
                    </div>
                  )}
                </div>

                {/* Company Info */}
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">{companyInfo.name}</p>
                  <p>
                    {t('contact.taxId')}: {companyInfo.taxId}
                  </p>
                  <p>
                    {t('contact.registrationNumber')}: {companyInfo.registrationNumber}
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

export default Contact
