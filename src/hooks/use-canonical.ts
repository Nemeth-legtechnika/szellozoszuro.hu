import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://szellozoszuro.hu'

const useCanonical = (): string => {
  const { pathname } = useLocation()
  const cleanPath = pathname.replace(/\/+$/, '') || '/'
  return cleanPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${cleanPath}`
}

export default useCanonical
