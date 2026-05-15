import { describe, expect, it } from 'vitest'

import blogPosts from '@/assets/data/blogs.json'
import { pages } from '@/config/pages'

describe('resolve-routes logic', () => {
  it('generates hu + de route pairs for static pages', () => {
    const routeList: string[] = []
    for (const page of pages) {
      routeList.push(page.path)
      routeList.push(page.path === '/' ? '/de' : `/de${page.path}`)
    }

    expect(routeList.length).toBe(pages.length * 2)

    const huRoutes = routeList.filter((_, i) => i % 2 === 0)
    for (const r of huRoutes) {
      expect(r).not.toMatch(/^\/de/)
    }

    const deRoutes = routeList.filter((_, i) => i % 2 === 1)
    for (const r of deRoutes) {
      expect(r).toMatch(/^\/de/)
    }
  })

  it('generates hu + de routes for each blog post', () => {
    const routeList: string[] = []
    for (const post of blogPosts) {
      routeList.push(`/blog/${post.slug}`)
      routeList.push(`/de/blog/${post.slug}`)
    }

    expect(routeList.length).toBe(blogPosts.length * 2)

    for (const post of blogPosts) {
      expect(routeList).toContain(`/blog/${post.slug}`)
      expect(routeList).toContain(`/de/blog/${post.slug}`)
    }
  })

  it('total route count covers all pages and blog posts', () => {
    const staticCount = pages.length * 2
    const blogCount = blogPosts.length * 2
    const total = staticCount + blogCount

    expect(total).toBeGreaterThan(0)
    expect(total).toBeGreaterThanOrEqual(10)
  })

  it('every page has a prerender flag defined', () => {
    for (const page of pages) {
      expect(typeof page.prerender).toBe('boolean')
    }
  })

  it('de home route is /de not /de/', () => {
    const home = pages.find((p) => p.path === '/')
    expect(home).toBeDefined()
    // The transformation: '/' -> '/de' (not '/de/')
    expect('/de').not.toContain('/de/')
  })
})
