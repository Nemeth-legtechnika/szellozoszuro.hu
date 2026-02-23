import { ArrowRight, ExternalLink, Filter, Truck, Zap } from 'lucide-react'
import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import shopBrandsBg from '@/assets/shop-brands-bg.jpg'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Button } from '@/shadcn/ui/button.tsx'

// Brand data with external webshop links
const brands = [
  {
    id: 'vaillant',
    name: 'Vaillant',
    description: 'recoVAIR szűrők',
    productCount: 13,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/vaillant-szurok/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vaillant-szuro/',
  },
  {
    id: 'helios',
    name: 'Helios',
    description: 'KWL szűrők',
    productCount: 15,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/helios/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/helios-utangyartott-szurok/',
  },
  {
    id: 'bosch',
    name: 'BOSCH',
    description: 'Vent szűrők',
    productCount: 5,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/bosch-szuro/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/bosch-utangyartott-szurok/',
  },
  {
    id: 'defro',
    name: 'DEFRO air',
    description: 'DRT szűrők',
    productCount: 7,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/defro-air-szuro/',
    aftermarketLink: null,
  },
  {
    id: 'wolf',
    name: 'Wolf',
    description: 'CWL szűrők',
    productCount: 10,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/wolf/',
  },
  {
    id: 'zehnder',
    name: 'Zehnder',
    description: 'ComfoAir szűrők',
    productCount: 6,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/zehnder/',
  },
  {
    id: 'vents',
    name: 'Vents',
    description: 'VUT szűrők',
    productCount: 7,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vents/',
  },
  {
    id: 'aldes',
    name: 'Aldes',
    description: 'InspirAIR szűrők',
    productCount: 7,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/aldes/',
  },
  {
    id: 'blauberg',
    name: 'Blauberg',
    description: 'KOMFORT szűrők',
    productCount: 5,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/blauberg/',
  },
  {
    id: 'stiebel',
    name: 'Stiebel Eltron',
    description: 'LWZ szűrők',
    productCount: 3,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/stiebel-eltron/',
  },
  {
    id: 'hoval',
    name: 'Hoval',
    description: 'HomeVent szűrők',
    productCount: 1,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/hoval/',
  },
  {
    id: 'hungaroklima',
    name: 'Hungaroklíma',
    description: 'HKV szűrők',
    productCount: 1,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/hungaroklima-szurok/',
    aftermarketLink: null,
  },
]

const Shop = (): ReactElement => {
  const { t } = useTranslation()

  const categories = [
    {
      title: t('shop.categories.oem.title'),
      description: t('shop.categories.oem.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/',
      icon: '🏭',
    },
    {
      title: t('shop.categories.aftermarket.title'),
      description: t('shop.categories.aftermarket.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/',
      icon: '⭐',
    },
    {
      title: t('shop.categories.filterHouse.title'),
      description: t('shop.categories.filterHouse.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/szurohaz/',
      icon: '📦',
    },
  ]

  return (
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>{t('shop.pageTitle')} | szellozoszuro.hu</title>
        <meta name='description' content={t('shop.pageDescription')} />
      </Helmet>

      <Header />

      <main className='pt-20 lg:pt-24'>
        {/* Page Header */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4'>
            <h1 className='mb-3 text-3xl font-bold lg:text-4xl'>
              <span className='gradient-cyan-text'>{t('nav.filters')}</span>{' '}
              {t('shop.pageTitle').split(' ').slice(1).join(' ')}
            </h1>
            <p className='max-w-2xl text-lg text-dark-muted'>{t('shop.pageDescription')}</p>
          </div>
        </section>

        {/* Category Quick Links */}
        <section className='bg-secondary/30 py-8 lg:py-12'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={category.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-cyan/50 hover:shadow-lg'
                >
                  <div className='mb-3 flex items-center gap-4'>
                    <span className='text-3xl'>{category.icon}</span>
                    <div>
                      <h3 className='flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-cyan'>
                        {category.title}
                        <ExternalLink className='size-4 opacity-0 transition-opacity group-hover:opacity-100' />
                      </h3>
                      <p className='text-sm text-muted-foreground'>{category.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className='relative overflow-hidden py-8 lg:py-12'>
          {/* Background image */}
          <div
            className='absolute inset-0 z-0'
            style={{
              backgroundImage: `url(${shopBrandsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.25,
            }}
          />
          {/* Gradient overlay */}
          <div className='absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-transparent to-background/50' />

          <div className='container relative z-10 mx-auto px-4'>
            <div className='mb-8'>
              <h2 className='mb-2 text-2xl font-bold text-foreground'>{t('shop.byBrand')}</h2>
              <p className='text-muted-foreground'>{t('shop.byBrandDescription')}</p>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className='group overflow-hidden rounded-2xl border-2 border-border bg-card/95 backdrop-blur-sm transition-all duration-200 ease-in-out hover:scale-105 hover:border-cyan hover:bg-card hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]'
                >
                  {/* Brand Header */}
                  <div className='p-6 pb-4'>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                        <Filter className='size-6 text-cyan' />
                      </div>
                      <span className='text-xs font-medium text-foreground'>
                        {brand.productCount} {t('shop.products')}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold text-foreground'>{brand.name}</h3>
                    <p className='text-sm text-muted-foreground'>{brand.description}</p>
                  </div>

                  {/* Action Links */}
                  <div className='space-y-2 px-6 pb-6'>
                    {brand.oemLink && (
                      <a
                        href={brand.oemLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group/link flex w-full items-center justify-between rounded-lg bg-cyan/10 px-4 py-3 text-sm font-medium text-cyan transition-colors hover:bg-cyan/20'
                      >
                        <span className='flex items-center gap-2'>
                          <span className='size-2 rounded-full bg-cyan' />
                          {t('shop.oemFilters')}
                        </span>
                        <ArrowRight className='size-4 transition-transform group-hover/link:translate-x-1' />
                      </a>
                    )}
                    {brand.aftermarketLink && (
                      <a
                        href={brand.aftermarketLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group/link flex w-full items-center justify-between rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80'
                      >
                        <span className='flex items-center gap-2'>
                          <span className='size-2 rounded-full bg-secondary-foreground/50' />
                          {t('shop.aftermarketFilters')}
                        </span>
                        <ArrowRight className='size-4 transition-transform group-hover/link:translate-x-1' />
                      </a>
                    )}
                    {!brand.oemLink && !brand.aftermarketLink && (
                      <p className='py-2 text-center text-sm text-muted-foreground'>{t('shop.comingSoon')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Filters CTA */}
        <section className='section-dark py-12 lg:py-16'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='mb-4 text-2xl font-bold text-dark-foreground lg:text-3xl'>{t('shop.viewAll')}</h2>
            <p className='mx-auto mb-8 max-w-xl text-dark-muted'>{t('shop.viewAllDescription')}</p>
            <Button variant='cta' size='lg' asChild>
              <a
                href='https://szelloztetes.eu/termekkategoria/szurok/'
                target='_blank'
                rel='noopener noreferrer'
                className='gap-2'
              >
                {t('shop.openWebshop')}
                <ExternalLink className='size-4' />
              </a>
            </Button>
          </div>
        </section>

        {/* Info Section */}
        <section className='bg-secondary/30 py-8 lg:py-12'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-green-500/10'>
                  <Truck className='size-6 text-green-500' />
                </div>
                <h3 className='mb-2 flex items-center justify-center gap-2 font-semibold text-foreground'>
                  <Zap className='size-4 text-cyan' />
                  {t('shop.fastShipping')}
                </h3>
                <p className='text-sm text-muted-foreground'>{t('shop.fastShippingDescription')}</p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                  <span className='text-2xl'>✅</span>
                </div>
                <h3 className='mb-2 font-semibold text-foreground'>{t('shop.qualityGuarantee')}</h3>
                <p className='text-sm text-muted-foreground'>{t('shop.qualityGuaranteeDescription')}</p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-cyan/10'>
                  <span className='text-2xl'>💬</span>
                </div>
                <h3 className='mb-2 font-semibold text-foreground'>{t('shop.expertAdvice')}</h3>
                <p className='text-sm text-muted-foreground'>{t('shop.expertAdviceDescription')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Shop
