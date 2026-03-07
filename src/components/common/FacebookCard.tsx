import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import Facebook from '@/components/icon/Facebook'
import { cn } from '@/lib/utils'

interface FacebookCardProps {
  className?: string
}

const FacebookCard = ({ className }: FacebookCardProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn('rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10', className)}>
      <Facebook />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t('blogPage.facebookTitle')}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t('blogPage.facebookDescription')}
        </p>
      </div>
      <a
        href="https://www.facebook.com/share/1a9KhV94Ct/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-facebook px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-90 hover:shadow-lg flex-shrink-0"
      >
        {t('blogPage.facebookButton')}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  )
}

export default FacebookCard
