import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import usePath from './use-path'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'hu' },
  }),
}))

describe('usePath – Hungarian (default)', () => {
  it('returns all paths without prefix', () => {
    const { result } = renderHook(() => usePath())
    const paths = result.current

    expect(paths.home).toBe('/')
    expect(paths.shop).toBe('/shop')
    expect(paths.blog.base).toBe('/blog')
    expect(paths.blog.getPost('test-slug')).toBe('/blog/test-slug')
    expect(paths.blog.postTemplate).toBe('/blog/:slug')
    expect(paths.about).toBe('/about')
    expect(paths.contact).toBe('/contact')
    expect(paths.faq).toBe('/gyik')
    expect(paths.terms).toBe('/aszf')
    expect(paths.termsAlt).toBe('/terms')
    expect(paths.privacy).toBe('/privacy')
    expect(paths.shipping).toBe('/shipping')
  })
})
