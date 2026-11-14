import { Mail, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { SUBSCRIPTION_FALLBACK_EMAIL } from '@/lib/subscription-config'

const EmailOpenedInfo = ({ onReturn }: { onReturn: () => void }) => {
  const { t } = useTranslation()
  return (
    <div role="status" className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <Mail className="mb-4 h-8 w-8 text-cyan" />
      <h2 className="mb-3 text-2xl font-semibold text-foreground">
        {t('subscription.emailOpened.title')}
      </h2>
      <p className="mb-6 text-muted-foreground">
        {t('subscription.emailOpened.text', { email: SUBSCRIPTION_FALLBACK_EMAIL })}
      </p>
      <Button variant="outline" onClick={onReturn}>
        <RotateCcw className="h-4 w-4" />
        {t('subscription.emailOpened.return')}
      </Button>
    </div>
  )
}
export default EmailOpenedInfo
