import { CheckCircle2, Clock, Wind, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ValueProposition = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Wind,
      titleKey: 'valueProps.cleanAir.title',
      descriptionKey: 'valueProps.cleanAir.description',
    },
    {
      icon: Wrench,
      titleKey: 'valueProps.protection.title',
      descriptionKey: 'valueProps.protection.description',
    },
    {
      icon: CheckCircle2,
      titleKey: 'valueProps.options.title',
      descriptionKey: 'valueProps.options.description',
    },
    {
      icon: Clock,
      titleKey: 'valueProps.easyOrder.title',
      descriptionKey: 'valueProps.easyOrder.description',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('valueProps.title')}{' '}
            <span className="gradient-cyan-text">{t('valueProps.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t('valueProps.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-cyan hover:bg-white hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-[250ms] ease-out"
              style={{ animationDelay: `${String(index * 0.1)}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-all duration-[250ms] ease-out">
                <feature.icon className="w-7 h-7 text-cyan transition-transform duration-[250ms] ease-out group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
