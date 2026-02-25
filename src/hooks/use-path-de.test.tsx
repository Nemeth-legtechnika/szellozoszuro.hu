import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import usePath from './use-path'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'de' },
  }),
}))

describe('usePath – German', () => {
  it('returns all paths with /de prefix', () => {
    const { result } = renderHook(() => usePath())
    const paths = result.current

    expect(paths.home).toBe('/de/')
    expect(paths.shop).toBe('/de/shop')
    expect(paths.blog.base).toBe('/de/blog')
    expect(paths.blog.getPost('mein-beitrag')).toBe('/de/blog/mein-beitrag')
    expect(paths.about).toBe('/de/about')
    expect(paths.contact).toBe('/de/contact')
    expect(paths.faq).toBe('/de/gyik')
  })
})
