import { CheckCircle2, Clock, Wind, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useValueProposition = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Wind,
      title: t('valueProps.cleanAir.title'),
      description: t('valueProps.cleanAir.description'),
    },
    {
      icon: Wrench,
      title: t('valueProps.protection.title'),
      description: t('valueProps.protection.description'),
    },
    {
      icon: CheckCircle2,
      title: t('valueProps.options.title'),
      description: t('valueProps.options.description'),
    },
    {
      icon: Clock,
      title: t('valueProps.easyOrder.title'),
      description: t('valueProps.easyOrder.description'),
    },
  ]

  return features
}

export default useValueProposition
