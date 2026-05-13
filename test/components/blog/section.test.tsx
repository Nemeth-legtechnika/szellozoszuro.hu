import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { Callout, Heading, Image, Intro } from '@/components/blog/blog'
import Section from '@/components/blog/section'

describe('Section', () => {
  it('renders Callout for callout type', () => {
    const item: Callout = { id: 1, type: 'callout', title: 'Tip', content: 'Callout body' }
    render(<Section item={item} />)

    expect(screen.getByText('Tip')).toBeInTheDocument()
    expect(screen.getByText('Callout body')).toBeInTheDocument()
  })

  it('renders Heading for heading type', () => {
    const item: Heading = { id: 2, type: 'heading', title: 'H2 Title', content: 'Heading body' }
    render(<Section item={item} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('H2 Title')
    expect(screen.getByText('Heading body')).toBeInTheDocument()
  })

  it('renders Image for image type', () => {
    const item: Image = { id: 3, type: 'image', image: '/img.jpg', caption: 'Photo caption' }
    render(<Section item={item} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/img.jpg')
    expect(screen.getByText('Photo caption')).toBeInTheDocument()
  })

  it('renders Intro for intro type', () => {
    const item: Intro = { id: 4, type: 'intro', content: 'Intro paragraph' }
    render(<Section item={item} />)

    expect(screen.getByText('Intro paragraph')).toBeInTheDocument()
  })
})
