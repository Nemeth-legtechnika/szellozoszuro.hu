import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useCookieConsent } from '@/hooks/use-cookie-consent'

const mockGtag = vi.fn()

// eslint-disable-next-line testing-library/no-node-access
const getGtagScripts = () => document.querySelectorAll('script[src*="googletagmanager"]')

beforeEach(() => {
  localStorage.clear()
  mockGtag.mockClear()
  vi.stubGlobal('gtag', mockGtag)
  getGtagScripts().forEach((el) => {
    el.remove()
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useCookieConsent', () => {
  it('returns undecided when no prior consent stored', () => {
    const { result } = renderHook(() => useCookieConsent())
    expect(result.current.status).toBe('undecided')
    expect(mockGtag).not.toHaveBeenCalled()
  })

  it('returns granted, calls gtag consent update, and loads GA script when previously granted', () => {
    localStorage.setItem('cookieConsent', 'granted')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('granted')
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
    expect(mockGtag).toHaveBeenCalledWith('js', expect.any(Date))
    expect(mockGtag).toHaveBeenCalledWith('config', 'G-8PZY62C9EV')
    expect(getGtagScripts()).toHaveLength(1)
  })

  it('returns denied and does not call gtag when consent was previously denied', () => {
    localStorage.setItem('cookieConsent', 'denied')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('denied')
    expect(mockGtag).not.toHaveBeenCalled()
    expect(getGtagScripts()).toHaveLength(0)
  })

  it('accept() sets localStorage, calls gtag, and loads GA script', () => {
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
    expect(getGtagScripts()).toHaveLength(1)
  })

  it('decline() sets localStorage to denied and does not call gtag or load script', () => {
    const { result } = renderHook(() => useCookieConsent())

    act(() => {
      result.current.decline()
    })

    expect(result.current.status).toBe('denied')
    expect(localStorage.getItem('cookieConsent')).toBe('denied')
    expect(mockGtag).not.toHaveBeenCalled()
    expect(getGtagScripts()).toHaveLength(0)
  })

  it('does not inject GA script twice on repeated accept', () => {
    const { result } = renderHook(() => useCookieConsent())

    act(() => {
      result.current.accept()
    })

    expect(getGtagScripts()).toHaveLength(1)

    // Simulate a second hook mount (e.g. page navigation)
    localStorage.setItem('cookieConsent', 'granted')
    renderHook(() => useCookieConsent())

    expect(getGtagScripts()).toHaveLength(1)
  })

  it('treats invalid localStorage values as undecided', () => {
    localStorage.setItem('cookieConsent', 'something-invalid')
    const { result } = renderHook(() => useCookieConsent())

    expect(result.current.status).toBe('undecided')
    expect(mockGtag).not.toHaveBeenCalled()
  })
})
