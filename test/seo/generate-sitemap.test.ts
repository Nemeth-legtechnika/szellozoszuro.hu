import { execSync } from 'child_process'
import { mkdirSync, readFileSync, rmSync } from 'fs'
import { resolve } from 'path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import blogPosts from '@/assets/data/blogs.json'

const BASE_URL = 'https://szellozoszuro.hu'
const tmpDir = resolve(__dirname, '../../tmp-test-sitemap')
const outputPath = resolve(tmpDir, 'sitemap.xml')
const scriptPath = resolve(__dirname, '../../scripts/generate-sitemap.mts')

const staticRoutes = [
  '/',
  '/shop',
  '/blog',
  '/about',
  '/contact',
  '/gyik',
  '/aszf',
  '/terms',
  '/privacy',
  '/shipping',
]

describe('generate-sitemap', () => {
  let xml: string

  beforeAll(() => {
    mkdirSync(tmpDir, { recursive: true })
    execSync(`npx tsx ${scriptPath} --output ${outputPath}`, {
      cwd: resolve(__dirname, '../..'),
    })
    xml = readFileSync(outputPath, 'utf-8')
  })

  afterAll(() => {
    rmSync(tmpDir, { recursive: true, force: true })
  })

  it('produces valid XML with urlset root', () => {
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('<urlset')
    expect(xml).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
    expect(xml).toContain('</urlset>')
  })

  it('includes all static routes in Hungarian', () => {
    for (const route of staticRoutes) {
      expect(xml).toContain(`<loc>${BASE_URL}${route}</loc>`)
    }
  })

  it('includes all static routes in German', () => {
    for (const route of staticRoutes) {
      const dePath = route === '/' ? '/de' : `/de${route}`
      expect(xml).toContain(`<loc>${BASE_URL}${dePath}</loc>`)
    }
  })

  it('includes all blog post URLs in both languages', () => {
    for (const post of blogPosts) {
      expect(xml).toContain(`<loc>${BASE_URL}/blog/${post.slug}</loc>`)
      expect(xml).toContain(`<loc>${BASE_URL}/de/blog/${post.slug}</loc>`)
    }
  })

  it('includes lastmod for blog posts in ISO format', () => {
    for (const post of blogPosts) {
      const isoDate = post.date.replace(/\./g, '-')
      expect(xml).toContain(`<lastmod>${isoDate}</lastmod>`)
    }
  })

  it('includes changefreq and priority', () => {
    expect(xml).toContain('<changefreq>')
    expect(xml).toContain('<priority>')
  })

  it('includes xhtml:link alternates for language variants', () => {
    expect(xml).toContain('xhtml:link rel="alternate"')
    expect(xml).toContain('hreflang="hu"')
    expect(xml).toContain('hreflang="de"')
  })

  it('gives homepage highest priority', () => {
    const homepageBlock = xml.slice(
      xml.indexOf(`<loc>${BASE_URL}/</loc>`),
      xml.indexOf('</url>', xml.indexOf(`<loc>${BASE_URL}/</loc>`)) + 6,
    )
    expect(homepageBlock).toContain('<priority>1.0</priority>')
  })
})
