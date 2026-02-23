import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useParams } from 'react-router-dom'

interface LanguageWrapperProps {
  children?: React.ReactNode
}

const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { lang } = useParams<{ lang?: string }>()
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const pathLang = location.pathname.startsWith('/de') ? 'de' : 'hu'

    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang)
    }
  }, [location.pathname, i18n])

  return <>{children || <Outlet />}</>
}

export default LanguageWrapper
