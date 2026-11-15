import { ClipboardList, Mail, Truck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation()
  return (
    <section className="border-b border-border py-10">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">{t('subscription.how.title')}</h2>
      <ol className="grid gap-6 md:grid-cols-3">
        {[ClipboardList, Mail, Truck].map((Icon, index) => (
          <li key={Icon.displayName} className="flex gap-3">
            <Icon className="h-6 w-6 shrink-0 text-cyan" />
            <div>
              <span className="font-semibold text-foreground">{index + 1}.</span>
              <p className="mt-2 text-muted-foreground">{t(`subscription.how.step${index + 1}`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default HowItWorks
