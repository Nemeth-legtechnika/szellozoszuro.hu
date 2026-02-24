import { ArrowRight, Award, Shield, Truck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import heroBg from '@/assets/hero-bg.jpg'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

const Hero = () => {
  const { t } = useTranslation()
  const paths = usePath()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl opacity-50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-cyan" />
            <span className="text-cyan text-sm font-medium">{t('hero.badge')}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-foreground mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.title')} <span className="gradient-cyan-text">{t('hero.titleHighlight')}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-dark-muted mb-8 leading-relaxed max-w-2xl animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.description')}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" asChild>
              <Link to={paths.shop}>
                {t('hero.browseFilters')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to={paths.blog.base}>{t('hero.knowledgeBase')}</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <p className="text-dark-foreground font-semibold text-sm">
                  {t('hero.qualityGuarantee')}
                </p>
                <p className="text-dark-muted text-xs">{t('hero.premiumMaterials')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <p className="text-dark-foreground font-semibold text-sm">
                  {t('hero.fastShipping')}
                </p>
                <p className="text-dark-muted text-xs">{t('hero.shippingTime')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <p className="text-dark-foreground font-semibold text-sm">{t('hero.expertise')}</p>
                <p className="text-dark-muted text-xs">{t('hero.yearsExperience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
