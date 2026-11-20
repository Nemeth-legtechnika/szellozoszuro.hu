import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const pagePaths = (langPrefix: string = '') => ({
  home: `${langPrefix}/`,

  shop: `${langPrefix}/shop`,

  blog: {
    base: `${langPrefix}/blog`,
    getPost: (slug: string): string => `${langPrefix}/blog/${slug}`,
    postTemplate: `${langPrefix}/blog/:slug`,
  },

  about: `${langPrefix}/about`,

  contact: `${langPrefix}/contact`,

  faq: `${langPrefix}/gyik`,

  terms: `${langPrefix}/aszf`,

  termsAlt: `${langPrefix}/terms`,

  privacy: `${langPrefix}/privacy`,

  shipping: `${langPrefix}/shipping`,
})

const usePath = () => {
  const { i18n } = useTranslation()
  const langPrefix = i18n.language === 'de' ? '/de' : ''

  return useMemo(() => pagePaths(langPrefix), [langPrefix])
}

export default usePath
