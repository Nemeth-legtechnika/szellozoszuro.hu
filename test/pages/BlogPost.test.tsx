import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import BlogPost from '@/pages/BlogPost'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'hu' },
  }),
}))

vi.mock('@/hooks/use-image', () => ({
  default: () => ({
    imageSrc: (filename?: string) => filename ? `/resolved/${filename}` : '/placeholder.jpg',
  }),
}))

vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => <div data-testid="helmet">{children}</div>,
}))

vi.mock('@/components/seo/JsonLdSchema', () => ({
  default: () => null,
}))

const renderBlogPost = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog" element={<div data-testid="blog-list">Blog List</div>} />
      </Routes>
    </MemoryRouter>,
  )

describe('BlogPost', () => {
  it('redirects to blog list for unknown slug', () => {
    renderBlogPost('non-existent-post')

    expect(screen.getByTestId('blog-list')).toBeInTheDocument()
  })
})