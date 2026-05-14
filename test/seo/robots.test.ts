import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

const robotsPath = resolve(__dirname, '../../public/robots.txt')

describe('robots.txt', () => {
  const content = readFileSync(robotsPath, 'utf-8')

  it('allows all crawlers', () => {
    expect(content).toContain('User-agent: *')
    expect(content).toContain('Allow: /')
  })

  it('references sitemap', () => {
    expect(content).toContain('Sitemap: https://szellozoszuro.hu/sitemap.xml')
  })
})
