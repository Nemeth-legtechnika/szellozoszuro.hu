import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useCookieConsent } from '@/hooks/use-cookie-consent'

const mockGtag = vi.fn()

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal('gtag', mockGtag)
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useCookieConsent', () => {
  it('returns undecided when no prior consent stored', () => {
    const { result } = renderHook(() => useCookieConsent())
    expect(result.current.status).toBe('undecided')
  })

  it('returns granted and calls gtag when consent was previously granted', () => {
    localStorage.setItem('cookieConsent', 'granted')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('granted')
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  })

  it('returns denied and does not call gtag when consent was previously denied', () => {
    localStorage.setItem('cookieConsent', 'denied')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('denied')
    expect(mockGtag).not.toHaveBeenCalled()
  })

  it('accept() sets localStorage to granted and calls gtag', () => {
    const { result } = renderHook(() => useCookieConsent())

    act(() => {
      result.current.accept()
    })

    expect(result.current.status).toBe('granted')
    expect(localStorage.getItem('cookieConsent')).toBe('granted')
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  })

  it('decline() sets localStorage to denied and does not call gtag', () => {
    const { result } = renderHook(() => useCookieConsent())

    act(() => {
      result.current.decline()
    })

    expect(result.current.status).toBe('denied')
    expect(localStorage.getItem('cookieConsent')).toBe('denied')
    expect(mockGtag).not.toHaveBeenCalled()
  })

  it('treats invalid localStorage values as undecided', () => {
    localStorage.setItem('cookieConsent', 'something-invalid')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('undecided')
    expect(mockGtag).not.toHaveBeenCalled()
  })
})