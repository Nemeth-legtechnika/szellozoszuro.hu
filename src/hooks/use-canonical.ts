import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://szellozoszuro.hu'

const CANONICAL_ALIASES: Record<string, string> = {
  '/terms': '/aszf',
  '/de/terms': '/de/aszf',
}

const useCanonical = (): string => {
  const { pathname } = useLocation()
  const cleanPath = pathname.replace(/\/+$/, '') || '/'
  const canonical = CANONICAL_ALIASES[cleanPath] ?? cleanPath
  return canonical === '/' ? `${BASE_URL}/` : `${BASE_URL}${canonical}`
}

export default useCanonical
