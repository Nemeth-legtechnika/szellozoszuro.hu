import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Image from '@/components/blog/image'

describe('Image', () => {
  it('hides caption when caption is empty', () => {
    const { container } = render(<Image id={1} src="/images/photo.jpg" caption="" />)

    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container.querySelector('p')).not.toBeInTheDocument()
  })
})