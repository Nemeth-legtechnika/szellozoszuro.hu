import { describe, expect, it } from 'vitest'

import { dynamicRoutes, pages } from '@/config/pages'

describe('pages config', () => {
  it('has unique keys', () => {
    const keys = pages.map((p) => p.key)
    expect(keys).toEqual([...new Set(keys)])
  })

  it('has unique paths', () => {
    const paths = pages.map((p) => p.path)
    expect(paths).toEqual([...new Set(paths)])
  })

  it('all paths start with /', () => {
    for (const page of pages) {
      expect(page.path).toMatch(/^\//)
    }
  })

  it('all sitemapPriority values are between 0.0 and 1.0', () => {
    for (const page of pages) {
      const priority = parseFloat(page.sitemapPriority)
      expect(priority).toBeGreaterThanOrEqual(0)
      expect(priority).toBeLessThanOrEqual(1)
    }
  })

  it('contains expected core pages', () => {
    const keys = pages.map((p) => p.key)
    expect(keys).toContain('home')
    expect(keys).toContain('shop')
    expect(keys).toContain('blog')
    expect(keys).toContain('contact')
  })

  it('home page has highest priority', () => {
    const home = pages.find((p) => p.key === 'home')
    expect(home?.sitemapPriority).toBe('1.0')
  })
})

describe('dynamicRoutes config', () => {
  it('blogPost pattern contains :slug param', () => {
    expect(dynamicRoutes.blogPost.pattern).toContain(':slug')
  })

  it('blogPost has valid sitemapPriority', () => {
    const priority = parseFloat(dynamicRoutes.blogPost.sitemapPriority)
    expect(priority).toBeGreaterThanOrEqual(0)
    expect(priority).toBeLessThanOrEqual(1)
  })
})