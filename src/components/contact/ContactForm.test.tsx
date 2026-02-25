import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'hu' },
  }),
}))

vi.mock('sonner', () => ({
  toast: { success: vi.fn() },
}))

const { default: ContactForm } = await import('./ContactForm')

const fillForm = (overrides: Record<string, string> = {}) => {
  const values = {
    'contact.form.namePlaceholder': 'Test User',
    'contact.form.emailPlaceholder': 'test@example.com',
    'contact.form.messagePlaceholder': 'This is a test message that is long enough.',
    ...overrides,
  }

  for (const [placeholder, value] of Object.entries(values)) {
    fireEvent.change(screen.getByPlaceholderText(placeholder), {
      target: { value },
    })
  }
}

describe('ContactForm', () => {
  beforeEach(() => {
    // Prevent mailto navigation in tests
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    })
  })

  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('contact.form.namePlaceholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.form.emailPlaceholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.form.phonePlaceholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.form.messagePlaceholder')).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: /contact\.form\.submit/i }))

    await waitFor(() => {
      // Zod validation errors should appear as FormMessage elements
      const alerts = screen.getAllByRole('paragraph')
      expect(alerts.length).toBeGreaterThan(0)
    })
  })

  it('constructs mailto link and shows success state on valid submission', async () => {
    render(<ContactForm />)
    fillForm()

    fireEvent.click(screen.getByRole('button', { name: /contact\.form\.submit/i }))

    await waitFor(() => {
      expect(window.location.href).toContain('mailto:office@sopronterv.hu')
    })

    expect(window.location.href).toContain('subject=')
    expect(window.location.href).toContain('Test%20User')
    expect(screen.getByText('contact.form.success')).toBeInTheDocument()
    expect(screen.getByText('contact.form.successDescription')).toBeInTheDocument()
  })
})
