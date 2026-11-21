import { ShieldCheck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PolicySection, { type PolicySectionData } from '@/components/privacy/PolicySection'

const Privacy = () => {
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true }) as unknown as Record<
    string,
    PolicySectionData
  >

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('privacy.pageTitle')} | Németh Légtechnika Kft.</title>
        <meta name="description" content={t('privacy.pageDescription')} />
      </Helmet>
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex items-start gap-3">
              <ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-cyan" />
              <h1 className="min-w-0 break-words text-3xl font-bold lg:text-4xl">
                <span className="gradient-cyan-text">{t('privacy.pageTitle')}</span>
              </h1>
            </div>
            <p className="text-lg text-dark-muted">{t('privacy.effective')}</p>
          </div>
        </section>
        <article className="container mx-auto max-w-4xl space-y-8 px-4 py-12 lg:py-16">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="min-w-0 rounded-lg border border-border bg-card p-5 sm:p-8">
              <PolicySection data={section} />
            </div>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
