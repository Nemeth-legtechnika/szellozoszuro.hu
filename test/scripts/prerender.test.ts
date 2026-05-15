import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import blogPosts from '@/assets/data/blogs.json'
import { pages } from '@/config/pages'

/**
 * Mirrors the file path logic from scripts/prerender.mts (lines 34-37).
 * Tested here since the actual script requires Puppeteer + a running server.
 */
function routeToFilePath(distDir: string, route: string): string {
  return route === '/' || route === '/de'
    ? resolve(distDir, route === '/' ? 'index.html' : 'de/index.html')
    : resolve(distDir, `${route.slice(1)}/index.html`)
}

describe('prerender – file path resolution', () => {
  const dist = '/project/dist'

  it('/ maps to dist/index.html', () => {
    expect(routeToFilePath(dist, '/')).toBe(`${dist}/index.html`)
  })

  it('/de maps to dist/de/index.html', () => {
    expect(routeToFilePath(dist, '/de')).toBe(`${dist}/de/index.html`)
  })

  it('/shop maps to dist/shop/index.html', () => {
    expect(routeToFilePath(dist, '/shop')).toBe(`${dist}/shop/index.html`)
  })

  it('/de/shop maps to dist/de/shop/index.html', () => {
    expect(routeToFilePath(dist, '/de/shop')).toBe(`${dist}/de/shop/index.html`)
  })

  it('/blog/my-post maps to dist/blog/my-post/index.html', () => {
    expect(routeToFilePath(dist, '/blog/my-post')).toBe(`${dist}/blog/my-post/index.html`)
  })

  it('/de/blog/my-post maps to dist/de/blog/my-post/index.html', () => {
    expect(routeToFilePath(dist, '/de/blog/my-post')).toBe(`${dist}/de/blog/my-post/index.html`)
  })
})

describe('prerender – route coverage', () => {
  it('every page path produces a valid file path', () => {
    const dist = '/project/dist'
    for (const page of pages) {
      const filePath = routeToFilePath(dist, page.path)
      expect(filePath).toContain(dist)
      expect(filePath).toMatch(/index\.html$/)
    }
  })

  it('every de page path produces a valid file path', () => {
    const dist = '/project/dist'
    for (const page of pages) {
      const dePath = page.path === '/' ? '/de' : `/de${page.path}`
      const filePath = routeToFilePath(dist, dePath)
      expect(filePath).toContain(`${dist}/de`)
      expect(filePath).toMatch(/index\.html$/)
    }
  })

  it('blog post routes produce nested file paths', () => {
    const dist = '/project/dist'
    for (const post of blogPosts) {
      const filePath = routeToFilePath(dist, `/blog/${post.slug}`)
      expect(filePath).toBe(`${dist}/blog/${post.slug}/index.html`)
    }
  })
})
