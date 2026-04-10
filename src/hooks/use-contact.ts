import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useContact = () => {
  const { t } = useTranslation()

  const orderContact = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+36 20 806 9072',
      href: 'tel:+36208069072',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'office@sopronterv.hu',
      href: 'mailto:office@sopronterv.hu',
    },
  ]

  const technicalContact = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+36 20 323 8172',
      href: 'tel:+36203238172',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@sopronterv.hu',
      href: 'mailto:info@sopronterv.hu',
    },
    {
      icon: MessageSquare,
      title: t('contact.skype'),
      value: 'nemeth_kalman',
      href: 'skype:nemeth_kalman?chat',
    },
  ]

  const generalInfo = [
    {
      icon: MapPin,
      title: t('contact.headquarters'),
      value: t('contact.headquartersValue'),
      subtext: t('contact.headquartersSubtext'),
      href: null,
    },
    {
      icon: Clock,
      title: t('contact.customerService'),
      value: t('contact.customerServiceValue'),
      subtext: null,
      href: null,
    },
  ]

  const companyInfo = {
    name: t('contact.companyName'),
    taxId: '26290438-2-08',
    registrationNumber: '08 09 029861',
  }

  const partnerPortals = [
    {
      name: 'szelloztetes.eu',
      url: 'https://szelloztetes.eu',
      description: t('footer.partnerPortals.szelloztetes'),
    },
    {
      name: 'hoszivattyu.online',
      url: 'https://hoszivattyu.online',
      description: t('footer.partnerPortals.hoszivattyu'),
    },
    {
      name: 'sopronterv.hu',
      url: 'https://sopronterv.hu',
      description: t('footer.partnerPortals.sopronterv'),
    },
  ]

  return { orderContact, technicalContact, generalInfo, companyInfo, partnerPortals }
}

export default useContact
