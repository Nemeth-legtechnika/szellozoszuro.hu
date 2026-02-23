import { ArrowRight, HelpCircle } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import faqBgImage from '@/assets/faq-bg.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import usePath from '@/hooks/use-path'

const HomeFAQ = (): React.ReactElement => {
  const { t } = useTranslation()
  const paths = usePath()

  const faqItems = [
    {
      id: 1,
      questionKey: 'faq.items.filterType.question',
      answerKey: 'faq.items.filterType.answer',
    },
    {
      id: 2,
      questionKey: 'faq.items.delivery.question',
      answerKey: 'faq.items.delivery.answer',
    },
    {
      id: 3,
      questionKey: 'faq.items.filterClass.question',
      answerKey: 'faq.items.filterClass.answer',
    },
    {
      id: 4,
      questionKey: 'faq.items.replacement.question',
      answerKey: 'faq.items.replacement.answer',
    },
    {
      id: 5,
      questionKey: 'faq.items.aftermarket.question',
      answerKey: 'faq.items.aftermarket.answer',
    },
  ]

  return (
    <section className='relative overflow-hidden py-16 lg:py-24'>
      {/* Faded background image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${faqBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.25,
        }}
      />
      {/* Gradient overlay for smooth transition */}
      <div className='absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30' />

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-3xl'>
          <div className='mb-10 text-center'>
            <div className='mb-4 inline-flex items-center gap-2'>
              <HelpCircle className='size-6 text-cyan' />
              <span className='text-sm font-medium uppercase tracking-wider text-cyan'>{t('faq.badge')}</span>
            </div>
            <h2 className='mb-4 text-3xl font-bold lg:text-4xl'>
              {t('faq.title')} <span className='gradient-cyan-text'>{t('faq.titleHighlight')}</span>
            </h2>
            <p className='text-lg font-medium text-foreground/80'>{t('faq.description')}</p>
          </div>

          <Accordion type='single' collapsible className='space-y-3'>
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={`faq-${item.id}`}
                className='rounded-xl border border-border bg-card/95 px-6 shadow-md backdrop-blur-sm transition-colors data-[state=open]:border-cyan/30'
              >
                <AccordionTrigger className='py-5 text-left font-medium text-foreground hover:text-cyan'>
                  {t(item.questionKey)}
                </AccordionTrigger>
                <AccordionContent className='pb-5 font-medium leading-relaxed text-foreground/75'>
                  {t(item.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className='mt-8 text-center'>
            <Link
              to={paths.faq}
              className='inline-flex items-center gap-2 font-medium text-cyan transition-colors hover:text-cyan-light'
            >
              {t('faq.viewAll')}
              <ArrowRight className='size-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFAQ
