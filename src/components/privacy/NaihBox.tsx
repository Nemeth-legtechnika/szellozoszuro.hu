import { useTranslation } from 'react-i18next'

import PrivacyText from '@/components/privacy/PrivacyText'

const NaihBox = () => {
  const { t } = useTranslation()
  return (
    <aside className="border-l-4 border-cyan bg-secondary/50 p-4 sm:p-6">
      <p className="mb-3 font-semibold text-foreground">{t('privacy.naih.name')}</p>
      <p className="mb-2 text-muted-foreground">
        <PrivacyText text={t('privacy.naih.address')} />
      </p>
      <p className="text-muted-foreground">
        <PrivacyText text={t('privacy.naih.contact')} />
      </p>
    </aside>
  )
}

export default NaihBox
