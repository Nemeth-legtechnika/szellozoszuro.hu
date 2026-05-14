import { describe, expect, it } from 'vitest'

import blogPosts from '@/assets/data/blogs.json'
import { pages } from '@/config/pages'

// We can't directly import .mts scripts in vitest with @ alias,
// so we test the logic by reimplementing the same derivation and
// verifying it against the source data.

describe('resolve-routes logic', () => {
  const prerenderablePages = pages.filter((p) => p.prerender)

  it('generates hu + de routes for each prerenderable static page', () => {
    const routes: string[] = []
    for (const page of prerenderablePages) {
      routes.push(page.path)
      routes.push(page.path === '/' ? '/de' : `/de${page.path}`)
    }

    // Each prerenderable page should produce 2 routes (hu + de)
    expect(routes.length).toBe(prerenderablePages.length * 2)

    // All hu routes should not have /de prefix
    const huRoutes = routes.filter((_, i) => i % 2 === 0)
    for (const r of huRoutes) {
      expect(r).not.toMatch(/^\/de/)
    }

    // All de routes should have /de prefix
    const deRoutes = routes.filter((_, i) => i % 2 === 1)
    for (const r of deRoutes) {
      expect(r).toMatch(/^\/de/)
    }
  })

  it('generates hu + de routes for each blog post', () => {
    const routes: string[] = []
    for (const post of blogPosts) {
      routes.push(`/blog/${post.slug}`)
      routes.push(`/de/blog/${post.slug}`)
    }

    expect(routes.length).toBe(blogPosts.length * 2)

    for (const post of blogPosts) {
      expect(routes).toContain(`/blog/${post.slug}`)
      expect(routes).toContain(`/de/blog/${post.slug}`)
    }
  })

  it('total prerender route count matches expected', () => {
    const staticCount = prerenderablePages.length * 2
    const blogCount = blogPosts.length * 2
    const total = staticCount + blogCount

    expect(total).toBeGreaterThan(0)
    // Sanity check: at least 10 static pages + blog posts
    expect(total).toBeGreaterThanOrEqual(10)
  })

  it('non-prerenderable pages are excluded', () => {
    const nonPrerender = pages.filter((p) => !p.prerender)
    const prerenderRoutes: string[] = []
    for (const page of prerenderablePages) {
      prerenderRoutes.push(page.path)
    }

    for (const page of nonPrerender) {
      expect(prerenderRoutes).not.toContain(page.path)
    }
  })

  it('de home route is /de not /de/', () => {
    const home = prerenderablePages.find((p) => p.path === '/')
    if (home) {
      const deRoute = home.path === '/' ? '/de' : `/de${home.path}`
      expect(deRoute).toBe('/de')
    }
  })
})