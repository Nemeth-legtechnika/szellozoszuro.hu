import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mockGtag = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'hu' },
  }),
}))

beforeEach(() => {
  localStorage.clear()
  mockGtag.mockClear()
  vi.stubGlobal('gtag', mockGtag)
})

// eslint-disable-next-line testing-library/no-node-access
const getGtagScripts = () => document.querySelectorAll('script[src*="googletagmanager"]')

afterEach(() => {
  vi.restoreAllMocks()
  getGtagScripts().forEach((el) => {
    el.remove()
  })
})

const { CookieConsentBanner } = await import('@/components/cookie-consent')

const renderBanner = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <CookieConsentBanner />
    </MemoryRouter>,
  )

describe('CookieConsentBanner', () => {
  it('renders banner when no consent stored', () => {
    renderBanner()

    expect(screen.getByText('cookieConsent.title')).toBeInTheDocument()
    expect(screen.getByText('cookieConsent.description')).toBeInTheDocument()
    expect(screen.getByText('cookieConsent.accept')).toBeInTheDocument()
    expect(screen.getByText('cookieConsent.decline')).toBeInTheDocument()
    expect(screen.getByText('cookieConsent.learnMore')).toBeInTheDocument()
  })

  it('does not render when consent was previously granted', () => {
    localStorage.setItem('cookieConsent', 'granted')
    renderBanner()

    expect(screen.queryByText('cookieConsent.title')).not.toBeInTheDocument()
  })

  it('does not render when consent was previously denied', () => {
    localStorage.setItem('cookieConsent', 'denied')
    renderBanner()

    expect(screen.queryByText('cookieConsent.title')).not.toBeInTheDocument()
  })

  it('hides banner and calls gtag on accept', () => {
    renderBanner()

    fireEvent.click(screen.getByText('cookieConsent.accept'))

    expect(localStorage.getItem('cookieConsent')).toBe('granted')
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  })

  it('hides banner without calling gtag on decline', () => {
    renderBanner()

    fireEvent.click(screen.getByText('cookieConsent.decline'))

    expect(localStorage.getItem('cookieConsent')).toBe('denied')
    expect(mockGtag).not.toHaveBeenCalled()
  })

  it('links to privacy page', () => {
    renderBanner()

    const link = screen.getByText('cookieConsent.learnMore')
    expect(link).toHaveAttribute('href', '/privacy')
  })
})
