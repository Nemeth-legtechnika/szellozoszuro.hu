import { Award, Building2, Filter, Home, MapPin, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import nemethKalmanImage from '@/assets/images/team/nemeth-kalman.jpg'

const useAbout = () => {
  const { t } = useTranslation()

  const highlights = [
    {
      icon: Home,
      title: t('about.values.family.title'),
      description: t('about.values.family.description'),
    },
    {
      icon: MapPin,
      title: t('about.values.coverage.title'),
      description: t('about.values.coverage.description'),
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
  ]

  const timeline = [
    {
      year: t('about.timeline.beginning.year'),
      title: t('about.timeline.beginning.title'),
      subtitle: t('about.timeline.beginning.subtitle'),
      description: t('about.timeline.beginning.description'),
      icon: Building2,
      color: 'bg-muted',
    },
    {
      year: t('about.timeline.implementation.year'),
      title: t('about.timeline.implementation.title'),
      subtitle: t('about.timeline.implementation.subtitle'),
      description: t('about.timeline.implementation.description'),
      icon: Wrench,
      color: 'bg-cyan/20',
    },
    {
      year: t('about.timeline.today.year'),
      title: t('about.timeline.today.title'),
      subtitle: t('about.timeline.today.subtitle'),
      description: t('about.timeline.today.description'),
      icon: Filter,
      color: 'bg-cyan',
    },
  ]

  const team = [
    {
      name: t('about.team.founder.name'),
      role: t('about.team.founder.role'),
      description: t('about.team.founder.description'),
      image: nemethKalmanImage,
    },
    {
      name: t('about.team.assistant.name'),
      role: t('about.team.assistant.role'),
      description: t('about.team.assistant.description'),
      image: null,
    },
  ]

  const signature = {
    quote: t('about.quote'),
    family: t('about.quoteFamily'),
  }

  return { highlights, timeline, team, signature }
}

export default useAbout
