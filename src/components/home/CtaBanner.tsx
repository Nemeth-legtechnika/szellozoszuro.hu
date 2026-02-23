import { ArrowRight, Wind } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const CtaBanner = (): React.ReactElement => {
  const { t } = useTranslation()
  const paths = usePath()

  return (
    <section className='section-dark relative overflow-hidden py-20 lg:py-28'>
      {/* Background Glow */}
      <div className='absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 opacity-50 blur-3xl' />

      <div className='container relative mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-cyan/10'>
            <Wind className='size-8 text-cyan' />
          </div>

          <h2 className='mb-4 text-3xl font-bold lg:text-4xl'>
            {t('cta.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className='gradient-cyan-text'>{t('cta.title').split(' ').slice(-1)}</span>
          </h2>

          <p className='mx-auto mb-8 max-w-xl text-lg text-dark-muted'>{t('cta.description')}</p>

          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button variant='hero' asChild>
              <Link to={paths.shop}>
                {t('cta.button')}
                <ArrowRight className='size-5' />
              </Link>
            </Button>
            <Button variant='heroOutline' asChild>
              <Link to={paths.contact}>{t('nav.contact')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
