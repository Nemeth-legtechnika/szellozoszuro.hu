import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'cookieConsent'
const GA_MEASUREMENT_ID = 'G-8PZY62C9EV'

type ConsentStatus = 'undecided' | 'granted' | 'denied'

function getStoredConsent(): ConsentStatus {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === 'granted' || value === 'denied') return value
  return 'undecided'
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
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'granted')
    setStatus('granted')
    grantConsent()
  }, [])

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setStatus('denied')
  }, [])

  return { status: status ?? 'undecided', accept, decline }
}
