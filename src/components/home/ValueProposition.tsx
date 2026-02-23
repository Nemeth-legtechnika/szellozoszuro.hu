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
    <section className='bg-background py-20 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold text-foreground lg:text-4xl'>
            {t('valueProps.title')} <span className='gradient-cyan-text'>{t('valueProps.titleHighlight')}</span>
          </h2>
          <p className='text-lg text-muted-foreground'>{t('valueProps.description')}</p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className='duration-[250ms] group rounded-2xl border-2 border-border bg-card p-6 transition-all ease-out hover:-translate-y-2.5 hover:border-cyan hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='duration-[250ms] mb-5 flex size-14 items-center justify-center rounded-xl bg-cyan/10 transition-all ease-out group-hover:bg-cyan/20'>
                <feature.icon className='duration-[250ms] size-7 text-cyan transition-transform ease-out group-hover:scale-110' />
              </div>
              <h3 className='mb-2 text-lg font-semibold text-foreground'>{t(feature.titleKey)}</h3>
              <p className='text-sm leading-relaxed text-muted-foreground'>{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
