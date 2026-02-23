import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import usePath from '@/hooks/use-path'

const NotFound = (): ReactElement => {
  const { t } = useTranslation()
  const paths = usePath()

  return (
    <div className='flex min-h-screen items-center justify-center bg-muted'>
      <div className='text-center'>
        <h1 className='mb-4 text-4xl font-bold'>{t('notFound.title')}</h1>
        <p className='mb-4 text-xl text-muted-foreground'>{t('notFound.description')}</p>
        <Link to={paths.home} className='text-primary underline hover:text-primary/90'>
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
