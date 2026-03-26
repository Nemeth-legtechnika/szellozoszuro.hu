import { CookieIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import usePath from '@/hooks/use-path'
import { cn } from '@/lib/utils'

export function CookieConsentBanner() {
  const { t } = useTranslation()
  const paths = usePath()
  const { status, accept, decline } = useCookieConsent()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (status === 'undecided') {
      setIsVisible(true)
    }
  }, [status])

  const handleAccept = () => {
    setIsVisible(false)
    accept()
  }

  const handleDecline = () => {
    setIsVisible(false)
    decline()
  }

  if (status !== 'undecided') return null

  return (
    <div
      className={cn(
        'fixed z-[200] bottom-0 left-0 right-0 p-4 sm:left-4 sm:bottom-4 sm:p-0 w-full sm:max-w-md duration-700',
        isVisible
          ? 'transition-[opacity,transform] translate-y-0 opacity-100'
          : 'transition-[opacity,transform] translate-y-8 opacity-0',
      )}
    >
      <div className="bg-dark rounded-2xl border border-border/30 shadow-lg">
        <div className="flex items-center justify-between border-b border-dark-secondary p-4">
          <h2 className="text-base font-medium text-white">{t('cookieConsent.title')}</h2>
          <CookieIcon className="h-4 w-4 text-cyan" />
        </div>
        <div className="p-4">
          <p className="text-sm text-dark-muted">{t('cookieConsent.description')}</p>
          <Link
            to={paths.privacy}
            className="mt-2 inline-block text-xs text-cyan underline hover:text-cyan/80"
          >
            {t('cookieConsent.learnMore')}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-dark-secondary p-4">
          <Button onClick={handleAccept} variant="cta" className="w-full">
            {t('cookieConsent.accept')}
          </Button>
          <Button onClick={handleDecline} variant="dark" className="w-full">
            {t('cookieConsent.decline')}
          </Button>
        </div>
      </div>
    </div>
  )
}
