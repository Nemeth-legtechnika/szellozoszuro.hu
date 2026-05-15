import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key, i18n: { language: 'hu' } }),
}))

vi.mock('react-router-dom', () => ({
  Link: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => vi.fn(),
}))

vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

vi.mock('@/hooks/use-faq', () => ({
  default: () => ({ homeItems: [] }),
}))

vi.mock('@/hooks/use-path', () => ({
  default: () => ({
    faq: '/faq',
    home: '/',
    shop: '/shop',
    blog: { base: '/blog' },
    about: '/about',
    contact: '/contact',
  }),
}))

vi.mock('@/hooks/use-products', () => ({
  default: () => [],
}))

vi.mock('@/hooks/use-shop-categories', () => ({
  default: () => [],
}))

vi.mock('@/hooks/use-canonical', () => ({
  default: () => 'https://szellozoszuro.hu/',
}))

vi.mock('@/assets/images/faq-bg.jpg', () => ({ default: 'faq-bg.jpg' }))
vi.mock('@/assets/images/shop-brands-bg.jpg', () => ({ default: 'shop-brands-bg.jpg' }))

import HomeFAQ from '@/components/home/HomeFAQ'
import Shop from '@/pages/Shop'

describe('iOS Safari background-attachment fix', () => {
  it('HomeFAQ background div has bg-fixed-desktop class and no inline backgroundAttachment', () => {
    const { container } = render(<HomeFAQ />)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const bgDiv = container.querySelector('.bg-fixed-desktop')
    expect(bgDiv).toBeInTheDocument()
    expect(bgDiv?.getAttribute('style')).not.toContain('background-attachment')
  })

  it('Shop background div has bg-fixed-desktop class and no inline backgroundAttachment', () => {
    const { container } = render(<Shop />)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const bgDiv = container.querySelector('.bg-fixed-desktop')
    expect(bgDiv).toBeInTheDocument()
    expect(bgDiv?.getAttribute('style')).not.toContain('background-attachment')
  })
})
