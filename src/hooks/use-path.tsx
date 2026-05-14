import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { pages } from '@/config/pages'

export const pagePaths = (langPrefix: string = '') => {
  const pathMap = Object.fromEntries(pages.map((p) => [p.key, `${langPrefix}${p.path}`]))

  return {
    ...pathMap,
    // Override blog to match existing nested shape
    blog: {
      base: `${langPrefix}/blog`,
      getPost: (slug: string): string => `${langPrefix}/blog/${slug}`,
    },
  }
}

const usePath = () => {
  const { i18n } = useTranslation()
  const langPrefix = i18n.language === 'de' ? '/de' : ''

  return useMemo(() => pagePaths(langPrefix), [langPrefix])
}

export default usePath
