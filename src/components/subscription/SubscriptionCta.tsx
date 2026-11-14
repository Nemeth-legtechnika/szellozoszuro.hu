import { ArrowRight, CalendarClock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const SubscriptionCta = () => {
  const { t } = useTranslation()
  const paths = usePath()
  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <CalendarClock className="h-8 w-8 shrink-0 text-cyan" />
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              {t('subscription.cta.title')}
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t('subscription.cta.text')}</p>
          </div>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <Link to={paths.subscription}>
            {t('subscription.cta.button')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
export default SubscriptionCta
