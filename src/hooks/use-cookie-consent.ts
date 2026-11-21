import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'cookieConsent'
const GA_MEASUREMENT_ID = 'G-8PZY62C9EV'
const CONSENT_CHANGE_EVENT = 'cookie-consent-change'

type ConsentStatus = 'undecided' | 'granted' | 'denied'

function getStoredConsent(): ConsentStatus {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'granted' || value === 'denied') return value
  } catch {
    // The banner remains usable when the browser blocks local storage.
  }
  return 'undecided'
}

export function resetCookieConsent() {
  const wasGranted = getStoredConsent() === 'granted'
  if (wasGranted && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Reopen the banner even if the saved choice cannot be removed.
  }
  window.dispatchEvent(
    new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: 'undecided' }),
  )
}

function loadGtagScript() {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return

  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

function grantConsent() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
  loadGtagScript()
}

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus | null>(null)

  useEffect(() => {
    const stored = getStoredConsent()
    setStatus(stored)
    if (stored === 'granted') {
      grantConsent()
    }
    const onChange = (event: Event) => {
      setStatus((event as CustomEvent<ConsentStatus>).detail)
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
    return () => { window.removeEventListener(CONSENT_CHANGE_EVENT, onChange); }
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'granted')
    setStatus('granted')
    grantConsent()
    window.dispatchEvent(
      new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: 'granted' }),
    )
  }, [])

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setStatus('denied')
    window.dispatchEvent(new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: 'denied' }))
  }, [])

  return { status: status ?? 'undecided', accept, decline }
}
