import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockNavigate = vi.fn()
const mockChangeLanguage = vi.fn().mockResolvedValue(undefined)
let mockLanguage = 'hu'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      get language() {
        return mockLanguage
      },
      changeLanguage: mockChangeLanguage,
    },
  }),
}))

// Import after mocks are set up
const { default: LanguageSwitcher } = await import('./LanguageSwitcher')

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLanguage = 'hu'
  })

  it('navigates to /de prefixed path when switching to German', () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByLabelText('Deutsche Sprache'))

    expect(mockChangeLanguage).toHaveBeenCalledWith('de')
    expect(mockNavigate).toHaveBeenCalledWith('/de/shop', { replace: true })
  })

  it('navigates to /de for root path when switching to German', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByLabelText('Deutsche Sprache'))

    expect(mockNavigate).toHaveBeenCalledWith('/de', { replace: true })
  })

  it('removes /de prefix when switching to Hungarian', () => {
    mockLanguage = 'de'

    render(
      <MemoryRouter initialEntries={['/de/shop']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByLabelText('Magyar nyelv'))

    expect(mockChangeLanguage).toHaveBeenCalledWith('hu')
    expect(mockNavigate).toHaveBeenCalledWith('/shop', { replace: true })
  })

  it('navigates to / when switching from /de root to Hungarian', () => {
    mockLanguage = 'de'

    render(
      <MemoryRouter initialEntries={['/de']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByLabelText('Magyar nyelv'))

    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
  })

  it('does nothing when clicking the already active language', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LanguageSwitcher />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByLabelText('Magyar nyelv'))

    expect(mockChangeLanguage).not.toHaveBeenCalled()
    expect(mockNavigate).not.toHaveBeenCalled()
  })
})
