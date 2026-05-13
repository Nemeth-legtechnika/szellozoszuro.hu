import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import Blog from '@/pages/Blog'

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

vi.mock('@/components/common/FacebookCard', () => ({
  default: () => null,
}))

const renderBlog = () =>
  render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>,
  )

describe('Blog', () => {
  it('displays author name in Hungarian order (last first)', () => {
    renderBlog()

    const authorElements = screen.getAllByText('Németh Kálmán')
    expect(authorElements.length).toBeGreaterThan(0)
  })
})