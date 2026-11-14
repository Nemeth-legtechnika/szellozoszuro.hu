import { z } from 'zod'

// Shared validation keeps form input and outgoing sign-up data consistent.
export const subscriptionSchema = (message: (key: string) => string, brands: string[]) =>
  z.object({
    name: z.string().trim().min(2, message('name')).max(100, message('name')),
    email: z.string().trim().email(message('email')).max(255, message('email')),
    phone: z.string().trim().max(50, message('phone')).regex(/^[+\d\s()./-]*$/, message('phone')).optional(),
    brand: z.string().refine((value) => [...brands, 'other'].includes(value), message('brand')),
    model: z.string().trim().min(2, message('model')).max(150, message('model')),
    interval: z.enum(['6m', '12m'], { errorMap: () => ({ message: message('interval') }) }),
    note: z.string().trim().max(1000, message('note')).optional(),
    privacy: z.boolean().refine(Boolean, message('privacy')),
    website: z.string().optional(),
  })

export type SubscriptionData = z.infer<ReturnType<typeof subscriptionSchema>>

export const subscriptionMailto = (
  data: SubscriptionData,
  email: string,
  t: (key: string, options?: Record<string, unknown>) => string,
) => {
  const subject = t('subscription.emailSubject', { name: data.name })
  const body = ['name', 'email', 'phone', 'brand', 'model', 'interval', 'note', 'privacy']
    .map((key) => {
      const value = data[key as keyof SubscriptionData]
      const display = key === 'interval' ? t(`subscription.form.${data.interval}`)
        : key === 'privacy' ? t('subscription.accepted')
          : key === 'brand' && value === 'other' ? t('subscription.form.other') : value || '-'
      return `${t(`subscription.form.${key}`)}: ${display}`
    }).join('\n\n')
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const deliverSubscription = async (
  data: SubscriptionData,
  endpoint: string,
  lang: string,
  openEmail: () => void,
): Promise<'ignored' | 'email' | 'submitted'> => {
  if (data.website) return 'ignored'
  if (!endpoint) {
    openEmail()
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'subscription_email_opened', { form_name: 'filter_subscription' })
    }
    return 'email'
  }
  const url = new URL(endpoint, window.location.origin)
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid endpoint')
  const { website: _website, ...payload } = data
  const response = await fetch(url.href, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString(), source: 'szellozoszuro.hu', lang }),
  })
  if (!response.ok) throw new Error('Submission failed')
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { form_name: 'filter_subscription', interval: data.interval, brand: data.brand })
  }
  return 'submitted'
}
