interface GtagConsentParams {
  ad_storage?: 'granted' | 'denied'
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
}

type GtagCommand = 'consent' | 'config' | 'event' | 'js' | 'set'

declare function gtag(command: 'consent', action: 'default' | 'update', params: GtagConsentParams): void
declare function gtag(command: 'js', date: Date): void
declare function gtag(command: 'config', targetId: string, params?: Record<string, unknown>): void
declare function gtag(command: 'event', eventName: string, params?: Record<string, unknown>): void

interface Window {
  dataLayer: Array<unknown>
  gtag: typeof gtag
}