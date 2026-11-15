import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { deliverSubscription, subscriptionSchema, type SubscriptionData } from '@/lib/subscription'

const data: SubscriptionData = {
  name: 'Teszt Elek',
  email: 'teszt@example.com',
  phone: '',
  brand: 'Vaillant',
  model: 'recoVAIR VAR 260/4',
  interval: '6m',
  note: '',
  privacy: true,
  website: '',
}

const fetchMock = vi.fn<typeof fetch>()
const gtagMock = vi.fn()

beforeEach(() => {
  fetchMock.mockReset()
  gtagMock.mockReset()
  vi.stubGlobal('fetch', fetchMock)
  vi.stubGlobal('gtag', gtagMock)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('subscription validation and delivery', () => {
  it('rejects the five empty required fields', () => {
    const result = subscriptionSchema((key) => key, ['Vaillant']).safeParse({
      ...data,
      name: '',
      email: '',
      brand: '',
      model: '',
      privacy: false,
    })
    expect(result.success).toBe(false)
    if (result.success) throw new Error('Expected validation errors')
    expect(result.error.issues.map((issue) => issue.path[0]).sort()).toEqual([
      'brand',
      'email',
      'model',
      'name',
      'privacy',
    ])
  })

  it('opens a draft without confirming submission when the endpoint is empty', async () => {
    const openEmail = vi.fn()
    await expect(deliverSubscription(data, '', 'hu', openEmail)).resolves.toBe('email')
    expect(openEmail).toHaveBeenCalledExactlyOnceWith()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(gtagMock).toHaveBeenCalledExactlyOnceWith('event', 'subscription_email_opened', {
      form_name: 'filter_subscription',
    })
  })

  it('confirms submission and tracks a lead only after an OK response', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }))
    const openEmail = vi.fn()
    await expect(deliverSubscription(data, '/signup', 'de', openEmail)).resolves.toBe('submitted')
    expect(openEmail).not.toHaveBeenCalled()
    expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
      new URL('/signup', window.location.origin).href,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String),
      },
    )
    const body = fetchMock.mock.calls[0]?.[1]?.body
    expect(typeof body).toBe('string')
    if (typeof body !== 'string') throw new Error('Expected JSON payload')
    expect(JSON.parse(body)).toEqual({
      name: data.name,
      email: data.email,
      phone: data.phone,
      brand: data.brand,
      model: data.model,
      interval: '6m',
      note: data.note,
      privacy: true,
      submittedAt: expect.any(String),
      source: 'szellozoszuro.hu',
      lang: 'de',
    })
    expect(gtagMock).toHaveBeenCalledExactlyOnceWith('event', 'generate_lead', {
      form_name: 'filter_subscription',
      interval: '6m',
      brand: 'Vaillant',
    })
  })

  it('does not track a lead on a failed response', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 500 }))
    await expect(deliverSubscription(data, '/signup', 'hu', vi.fn())).rejects.toThrow(
      'Submission failed',
    )
    expect(gtagMock).not.toHaveBeenCalled()
  })

  it('ignores honeypot submissions without sending or opening email', async () => {
    const openEmail = vi.fn()
    await expect(
      deliverSubscription({ ...data, website: 'spam' }, '/signup', 'hu', openEmail),
    ).resolves.toBe('ignored')
    expect(fetchMock).not.toHaveBeenCalled()
    expect(openEmail).not.toHaveBeenCalled()
    expect(gtagMock).not.toHaveBeenCalled()
  })

  it('supports visitors without gtag', async () => {
    vi.stubGlobal('gtag', undefined)
    await expect(deliverSubscription(data, '', 'hu', vi.fn())).resolves.toBe('email')
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }))
    await expect(deliverSubscription(data, '/signup', 'hu', vi.fn())).resolves.toBe('submitted')
  })
})