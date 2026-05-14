import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { type PageKey, pages } from '@/config/pages'

type PagePaths = {
  [K in Exclude<PageKey, 'blog'>]: string
} & {
  blog: {
    base: string
    getPost: (slug: string) => string
  }
}

export const pagePaths = (langPrefix: string = ''): PagePaths => {
  const pathMap = Object.fromEntries(pages.map((p) => [p.key, `${langPrefix}${p.path}`])) as Record<
    PageKey,
    string
  >

  const blogBase = pathMap.blog

  return {
    ...pathMap,
    blog: {
      base: blogBase,
      getPost: (slug: string): string => `${blogBase}/${slug}`,
    },
  }
}

const usePath = () => {
  const { i18n } = useTranslation()
  const langPrefix = i18n.language === 'de' ? '/de' : ''

  return useMemo(() => pagePaths(langPrefix), [langPrefix])
}

export default usePath
