import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import brandSelectorBg from '@/assets/brand-selector-bg.jpg'

const brands = [
  { name: 'Vaillant', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vaillant-szuro/' },
  {
    name: 'Bosch',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/bosch-utangyartott-szurok/',
  },
  {
    name: 'Helios',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/helios-utangyartott-szurok/',
  },
  { name: 'Atrea', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/' },
  { name: 'Aereco', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/' },
  { name: 'Aldes', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/aldes/' },
  { name: 'Wolf', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/wolf/' },
  { name: 'Blauberg', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/blauberg/' },
  { name: 'Hoval', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/hoval/' },
  {
    name: 'Stiebel Eltron',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/stiebel-eltron/',
  },
  { name: 'Vents', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vents/' },
  { name: 'Zehnder', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/zehnder/' },
]

const BrandSelector = (): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <section
      className='relative overflow-hidden py-20 lg:py-28'
      style={{
        backgroundImage: `url(${brandSelectorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlays - matching hero section style */}
      <div className='absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70' />
      <div className='absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent' />

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto mb-12 max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold text-dark-foreground lg:text-4xl'>
            {t('brandSelector.title')} <span className='gradient-cyan-text'>{t('brandSelector.titleHighlight')}</span>
          </h2>
          <p className='text-lg text-dark-muted'>{t('brandSelector.description')}</p>
        </div>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative flex items-center justify-center rounded-2xl border border-white/10 bg-dark-secondary/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan/40 hover:bg-dark-secondary/80 lg:p-6'
            >
              <span className='text-lg font-semibold text-dark-foreground transition-colors group-hover:text-cyan lg:text-xl'>
                {brand.name}
              </span>
              <ArrowRight className='absolute right-3 top-1/2 size-4 -translate-y-1/2 text-cyan opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100' />
            </a>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <a
            href='https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 font-medium text-cyan transition-colors hover:text-cyan-light'
          >
            {t('brandSelector.viewProducts')}
            <ArrowRight className='size-4' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrandSelector
