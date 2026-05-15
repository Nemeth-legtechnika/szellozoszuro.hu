import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import BlogPreview from '@/components/home/BlogPreview'
import BrandSelector from '@/components/home/BrandSelector'
import CtaBanner from '@/components/home/CtaBanner'
import Hero from '@/components/home/Hero'
import HomeFAQ from '@/components/home/HomeFAQ'
import ValueProposition from '@/components/home/ValueProposition'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import SeoMeta from '@/components/seo/SeoMeta'
import useCanonical from '@/hooks/use-canonical'

const Index = () => {
  const { t } = useTranslation()
  const canonicalUrl = useCanonical()

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('homePage.pageTitle')}</title>
        <meta name="description" content={t('homePage.pageDescription')} />
        <meta name="keywords" content={t('homePage.pageKeywords')} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <SeoMeta
        title={t('homePage.pageTitle')}
        description={t('homePage.pageDescription')}
        url={canonicalUrl}
      />
      <JsonLdSchema includeLocalBusiness={true} includeOrganization={true} />

      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <BrandSelector />
        <HomeFAQ />
        <BlogPreview />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default Index
