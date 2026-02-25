import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useIsMobile } from './use-mobile'

describe('useIsMobile', () => {
  it('returns false when window is wider than 768px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true when window is narrower than 768px', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })
})
