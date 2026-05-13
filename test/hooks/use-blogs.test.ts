import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import useBlogs from '@/hooks/use-blogs'

vi.mock('@/hooks/use-image', () => ({
  default: () => ({
    imageSrc: (filename?: string) => (filename ? `/resolved/${filename}` : '/placeholder.jpg'),
  }),
}))

describe('useBlogs', () => {
  it('filters blog posts by slug', () => {
    const { result } = renderHook(() =>
      useBlogs({ filter: (p) => p.slug === 'miert-fontos-a-rendszeres-szurocsere' }),
    )

    expect(result.current).toHaveLength(1)
    expect(result.current[0].slug).toBe('miert-fontos-a-rendszeres-szurocsere')
  })

  it('returns empty array when no posts match', () => {
    const { result } = renderHook(() => useBlogs({ filter: () => false }))

    expect(result.current).toHaveLength(0)
  })

  it('resolves image paths via useImage', () => {
    const { result } = renderHook(() => useBlogs({ filter: () => true }))

    const post = result.current[0]
    expect(post.image).toMatch(/^\/resolved\//)
  })

  it('maps sections with correct types', () => {
    const { result } = renderHook(() =>
      useBlogs({ filter: (p) => p.slug === 'miert-fontos-a-rendszeres-szurocsere' }),
    )

    const sections = result.current[0].sections
    expect(sections.length).toBeGreaterThan(0)

    const types = sections.map((s) => s.type)
    expect(types).toContain('intro')
    expect(types).toContain('heading')
    expect(types).toContain('callout')
  })

  it('filters out unknown section types', async () => {
    vi.resetModules()
    vi.doMock('@/hooks/use-image', () => ({
      default: () => ({
        imageSrc: (filename?: string) => (filename ? `/resolved/${filename}` : '/placeholder.jpg'),
      }),
    }))
    vi.doMock('@/assets/data/blogs.json', () => ({
      default: [
        {
          id: 99,
          showOnHomePage: false,
          title: 'Test',
          titleDe: 'Test',
          excerpt: '',
          excerptDe: '',
          image: 'test.jpg',
          date: '2024.01.01',
          authorFirstName: 'Test',
          authorLastName: 'Author',
          slug: 'test-unknown-type',
          category: 'Test',
          categoryDe: 'Test',
          readTime: '1 min',
          sections: [
            { type: 'intro', content: 'Valid intro' },
            { type: 'unknown', content: 'Should be filtered' },
            { type: 'heading', title: 'Valid heading', content: 'Content' },
          ],
        },
      ],
    }))

    const { default: useBlogsMocked } = await import('@/hooks/use-blogs')
    const { result } = renderHook(() => useBlogsMocked({ filter: () => true }))

    const sections = result.current[0].sections
    expect(sections).toHaveLength(2)
    expect(sections.map((s) => s.type)).toEqual(['intro', 'heading'])

    vi.doUnmock('@/assets/data/blogs.json')
  })
})
