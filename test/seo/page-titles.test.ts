import { describe, expect, it } from 'vitest'

import de from '@/i18n/locales/de.json'
import hu from '@/i18n/locales/hu.json'

const SUFFIX_LENGTH = ' | szellozoszuro.hu'.length // 17 chars
const _MAX_TITLE_LENGTH = 60 - SUFFIX_LENGTH // 43 chars for the title value
const MAX_DESCRIPTION_LENGTH = 155

const TARGET_KEYWORDS_HU = ['hővisszanyerő', 'szűrő', 'szellőző', 'légtechnikai', 'szűrőcsere']

interface PageMeta {
  key: string
  title: string
  description: string
}

function getPages(locale: typeof hu): PageMeta[] {
  return [
    {
      key: 'homePage',
      title: locale.homePage.pageTitle,
      description: locale.homePage.pageDescription,
    },
    { key: 'shop', title: locale.shop.pageTitle, description: locale.shop.pageDescription },
    {
      key: 'faqPage',
      title: locale.faqPage.pageTitle,
      description: locale.faqPage.pageDescription,
    },
    { key: 'about', title: locale.about.pageTitle, description: locale.about.pageDescription },
    {
      key: 'contact',
      title: locale.contact.pageTitle,
      description: locale.contact.pageDescription,
    },
    {
      key: 'blogPage',
      title: locale.blogPage.pageTitle,
      description: locale.blogPage.pageDescription,
    },
    { key: 'terms', title: locale.terms.pageTitle, description: locale.terms.pageDescription },
    {
      key: 'privacy',
      title: locale.privacy.pageTitle,
      description: locale.privacy.pageDescription,
    },
    {
      key: 'shipping',
      title: locale.shipping.pageTitle,
      description: locale.shipping.pageDescription,
    },
  ]
}

describe('SEO Page Titles and Descriptions', () => {
  const huPages = getPages(hu)
  const dePages = getPages(de)

  describe('Hungarian titles', () => {
    it.each(huPages)('$key title should be under 40 chars', ({ key, title }) => {
      expect(title.length, `${key} title "${title}" is ${title.length} chars`).toBeLessThanOrEqual(
        40,
      )
    })

    it.each(huPages)('$key title should contain at least one target keyword', ({ key, title }) => {
      const lower = title.toLowerCase()
      const hasKeyword = TARGET_KEYWORDS_HU.some((kw) => lower.includes(kw.toLowerCase()))
      expect(hasKeyword, `${key} title "${title}" missing target keywords`).toBe(true)
    })

    it('all titles should be unique', () => {
      const titles = huPages.map((p) => p.title)
      expect(new Set(titles).size).toBe(titles.length)
    })

    it('all descriptions should be unique', () => {
      const descriptions = huPages.map((p) => p.description)
      expect(new Set(descriptions).size).toBe(descriptions.length)
    })
  })

  describe('Hungarian descriptions', () => {
    it.each(huPages)('$key description should be under 155 chars', ({ key, description }) => {
      expect(description.length, `${key} desc is ${description.length} chars`).toBeLessThanOrEqual(
        MAX_DESCRIPTION_LENGTH,
      )
    })
  })

  describe('German titles', () => {
    it.each(dePages)('$key title should be under 40 chars', ({ key, title }) => {
      expect(title.length, `${key} title "${title}" is ${title.length} chars`).toBeLessThanOrEqual(
        40,
      )
    })

    it('all titles should be unique', () => {
      const titles = dePages.map((p) => p.title)
      expect(new Set(titles).size).toBe(titles.length)
    })

    it('all descriptions should be unique', () => {
      const descriptions = dePages.map((p) => p.description)
      expect(new Set(descriptions).size).toBe(descriptions.length)
    })
  })

  describe('German descriptions', () => {
    it.each(dePages)('$key description should be under 155 chars', ({ key, description }) => {
      expect(description.length, `${key} desc is ${description.length} chars`).toBeLessThanOrEqual(
        MAX_DESCRIPTION_LENGTH,
      )
    })
  })
})
