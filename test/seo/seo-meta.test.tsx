/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

import SeoMeta from '@/components/seo/SeoMeta'

// Capture meta tags rendered inside Helmet
const capturedMetas: Array<{ property?: string; name?: string; content: string }> = []

vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => {
    capturedMetas.length = 0
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === 'meta') {
        const props = child.props as Record<string, string>
        capturedMetas.push({
          property: props.property,
          name: props.name,
          content: props.content,
        })
      }
    })
    return null
  },
}))

const getRenderedMeta = (props: React.ComponentProps<typeof SeoMeta>) => {
  render(<SeoMeta {...props} />)
  const metaMap: Record<string, string> = {}
  for (const m of capturedMetas) {
    const key = m.property || m.name
    if (key) metaMap[key] = m.content
  }
  return metaMap
}

describe('SeoMeta', () => {
  it('renders all OG and Twitter meta tags', () => {
    const tags = getRenderedMeta({
      title: 'Test Title',
      description: 'Test description',
      url: 'https://szellozoszuro.hu/test',
      image: '/custom-image.jpg',
    })

    expect(tags['og:title']).toBe('Test Title')
    expect(tags['og:description']).toBe('Test description')
    expect(tags['og:url']).toBe('https://szellozoszuro.hu/test')
    expect(tags['og:image']).toBe('https://szellozoszuro.hu/custom-image.jpg')
    expect(tags['og:site_name']).toBe('szellozoszuro.hu')
    expect(tags['twitter:card']).toBe('summary_large_image')
    expect(tags['twitter:title']).toBe('Test Title')
    expect(tags['twitter:description']).toBe('Test description')
    expect(tags['twitter:image']).toBe('https://szellozoszuro.hu/custom-image.jpg')
  })

  it('uses default image when no image prop is provided', () => {
    const tags = getRenderedMeta({
      title: 'Title',
      description: 'Desc',
      url: 'https://szellozoszuro.hu/',
    })

    expect(tags['og:image']).toBe('https://szellozoszuro.hu/og-default.jpg')
    expect(tags['twitter:image']).toBe('https://szellozoszuro.hu/og-default.jpg')
  })

  it('defaults type to website', () => {
    const tags = getRenderedMeta({
      title: 'Title',
      description: 'Desc',
      url: 'https://szellozoszuro.hu/',
    })

    expect(tags['og:type']).toBe('website')
  })

  it('allows overriding type', () => {
    const tags = getRenderedMeta({
      title: 'Title',
      description: 'Desc',
      url: 'https://szellozoszuro.hu/',
      type: 'article',
    })

    expect(tags['og:type']).toBe('article')
  })

  it('handles absolute image URLs', () => {
    const tags = getRenderedMeta({
      title: 'Title',
      description: 'Desc',
      url: 'https://szellozoszuro.hu/',
      image: 'https://example.com/image.jpg',
    })

    expect(tags['og:image']).toBe('https://example.com/image.jpg')
  })
})
