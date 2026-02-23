import { ArrowRight, Award, Shield, Truck } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import heroBg from '@/assets/hero-bg.jpg'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const Hero = (): React.ReactElement => {
  const { t } = useTranslation()
  const paths = usePath()

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${heroBg})` }}>
        <div className='absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70' />
        <div className='absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent' />
      </div>

      {/* Glow Effect */}
      <div className='absolute left-1/4 top-1/2 size-96 rounded-full bg-cyan/20 opacity-50 blur-3xl' />

      {/* Content */}
      <div className='container relative mx-auto px-4 pb-16 pt-20'>
        <div className='max-w-3xl'>
          <div className='mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2'>
            <Shield className='size-4 text-cyan' />
            <span className='text-sm font-medium text-cyan'>{t('hero.badge')}</span>
          </div>

          <h1
            className='mb-6 animate-fade-in text-4xl font-bold leading-tight text-dark-foreground md:text-5xl lg:text-6xl'
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.title')} <span className='gradient-cyan-text'>{t('hero.titleHighlight')}</span>
          </h1>

          <p
            className='mb-8 max-w-2xl animate-fade-in text-lg leading-relaxed text-dark-muted md:text-xl'
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.description')}
          </p>

          <div className='mb-12 flex animate-fade-in flex-col gap-4 sm:flex-row' style={{ animationDelay: '0.3s' }}>
            <Button variant='hero' asChild>
              <Link to={paths.shop}>
                {t('hero.browseFilters')}
                <ArrowRight className='size-5' />
              </Link>
            </Button>
            <Button variant='heroOutline' asChild>
              <Link to={paths.blog.base}>{t('hero.knowledgeBase')}</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className='grid animate-fade-in grid-cols-1 gap-6 sm:grid-cols-3' style={{ animationDelay: '0.4s' }}>
            <div className='flex items-center gap-3'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                <Shield className='size-6 text-cyan' />
              </div>
              <div>
                <p className='text-sm font-semibold text-dark-foreground'>{t('hero.qualityGuarantee')}</p>
                <p className='text-xs text-dark-muted'>{t('hero.premiumMaterials')}</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                <Truck className='size-6 text-cyan' />
              </div>
              <div>
                <p className='text-sm font-semibold text-dark-foreground'>{t('hero.fastShipping')}</p>
                <p className='text-xs text-dark-muted'>{t('hero.shippingTime')}</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                <Award className='size-6 text-cyan' />
              </div>
              <div>
                <p className='text-sm font-semibold text-dark-foreground'>{t('hero.expertise')}</p>
                <p className='text-xs text-dark-muted'>{t('hero.yearsExperience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
