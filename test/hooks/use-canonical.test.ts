import { describe, expect, it, vi } from 'vitest'

let mockPathname = '/'

vi.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: mockPathname }),
}))

const { default: useCanonical } = await import('@/hooks/use-canonical')

describe('useCanonical', () => {
  it('returns correct canonical URL for /', () => {
    mockPathname = '/'
    expect(useCanonical()).toBe('https://szellozoszuro.hu/')
  })

  it('returns correct canonical URL for /de/', () => {
    mockPathname = '/de/'
    expect(useCanonical()).toBe('https://szellozoszuro.hu/de')
  })

  it('returns correct canonical URL for /gyik', () => {
    mockPathname = '/gyik'
    expect(useCanonical()).toBe('https://szellozoszuro.hu/gyik')
  })

  it('strips trailing slashes', () => {
    mockPathname = '/about/'
    expect(useCanonical()).toBe('https://szellozoszuro.hu/about')
  })

  it('handles nested paths', () => {
    mockPathname = '/blog/my-post'
    expect(useCanonical()).toBe('https://szellozoszuro.hu/blog/my-post')
  })
})
