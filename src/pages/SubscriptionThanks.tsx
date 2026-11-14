import { ArrowRight, CheckCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const SubscriptionThanks = () => {
  const { t } = useTranslation()
  const paths = usePath()
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('subscription.thanks.title')} | szellozoszuro.hu</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pb-20 pt-40 text-center">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
        <h1 className="mb-4 text-3xl font-bold text-foreground">
          {t('subscription.thanks.title')}
        </h1>
        <p className="mb-8 text-muted-foreground">{t('subscription.thanks.text')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link to={paths.shop}>
              {t('nav.filters')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={paths.blog.base}>{t('nav.knowledge')}</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default SubscriptionThanks
