import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { pages } from '@/config/pages'

import { getAllPrerenderRoutes } from '../../scripts/resolve-routes.mts'

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

describe('prerender – route list', () => {
  const routes = getAllPrerenderRoutes()
  const prerenderablePages = pages.filter((p) => p.prerender)

  it('includes both hu and de variants for each prerenderable page', () => {
    for (const page of prerenderablePages) {
      const dePath = page.path === '/' ? '/de' : `/de${page.path}`
      expect(routes).toContain(page.path)
      expect(routes).toContain(dePath)
    }
  })

  it('does not include non-prerenderable pages', () => {
    const nonPrerender = pages.filter((p) => !p.prerender)
    for (const page of nonPrerender) {
      expect(routes).not.toContain(page.path)
    }
  })

  it('all routes start with /', () => {
    for (const route of routes) {
      expect(route[0]).toBe('/')
    }
  })

  it('no duplicate routes', () => {
    expect(routes).toEqual([...new Set(routes)])
  })

  it('blog routes contain actual slugs, not :slug param', () => {
    const blogRoutes = routes.filter((r) => r.includes('/blog/'))
    for (const route of blogRoutes) {
      expect(route).not.toContain(':slug')
    }
  })
})