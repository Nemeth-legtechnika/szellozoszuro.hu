import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'cookieConsent'

type ConsentStatus = 'undecided' | 'granted' | 'denied'

function getStoredConsent(): ConsentStatus {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === 'granted' || value === 'denied') return value
  return 'undecided'
}

function updateGtagConsent() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
}

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>('undecided')

  useEffect(() => {
    const stored = getStoredConsent()
    setStatus(stored)
    if (stored === 'granted') {
      updateGtagConsent()
    }
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'granted')
    setStatus('granted')
    updateGtagConsent()
  }, [])

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setStatus('denied')
  }, [])

  return { status, accept, decline }
}