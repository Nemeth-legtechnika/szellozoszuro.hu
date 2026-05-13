import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Image from '@/components/blog/image'

describe('Image', () => {
  it('hides caption when caption is empty', () => {
    render(<Image src="/images/photo.jpg" caption="" />)

    expect(screen.getByRole('presentation')).toBeInTheDocument()
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument()
  })
})
