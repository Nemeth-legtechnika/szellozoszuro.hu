import { useTranslation } from 'react-i18next'

import usePath from '@/hooks/use-path'

const useNavLinks = () => {
  const { t } = useTranslation()
  const paths = usePath()

  const navLinks = [
    { name: t('nav.home'), href: paths.home },
    { name: t('nav.filters'), href: paths.shop },
    { name: t('nav.knowledge'), href: paths.blog.base },
    { name: t('nav.about'), href: paths.about },
    { name: t('nav.contact'), href: paths.contact },
  ]

  return navLinks
}

export default useNavLinks
