import { ArrowRight, Calendar } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import usePath from '@/hooks/use-path'
import { Button } from '@/shadcn/ui/button.tsx'

const BlogPreview = (): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const paths = usePath()

  const blogPosts = [
    {
      id: 1,
      title:
        i18n.language === 'de'
          ? 'Warum ist der regelmäßige Filterwechsel wichtig?'
          : 'Miért fontos a rendszeres szűrőcsere?',
      excerpt:
        i18n.language === 'de'
          ? 'Der rechtzeitige Wechsel des Filters der Wärmerückgewinnungsanlage ist entscheidend für die Luftqualität und die Lebensdauer des Geräts.'
          : 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából.',
      date: i18n.language === 'de' ? '15. Januar 2024' : '2024. január 15.',
      slug: 'miert-fontos-a-rendszeres-szurocsere',
      category: i18n.language === 'de' ? 'Wartung' : 'Karbantartás',
    },
    {
      id: 2,
      title: i18n.language === 'de' ? 'Filterklassen erklärt: G4 vs F7' : 'Szűrőosztályok magyarázata: G4 vs F7',
      excerpt:
        i18n.language === 'de'
          ? 'Was unterscheidet einen Grobstaubfilter von einem Feinstaubfilter? Welchen sollten Sie je nach Bedarf wählen?'
          : 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján?',
      date: i18n.language === 'de' ? '10. Januar 2024' : '2024. január 10.',
      slug: 'szuroosztályok-magyarazata',
      category: i18n.language === 'de' ? 'Ratgeber' : 'Útmutató',
    },
    {
      id: 3,
      title: i18n.language === 'de' ? 'Winterlüftung und Luftfeuchtigkeit' : 'Téli szellőztetés és páratartalom',
      excerpt:
        i18n.language === 'de'
          ? 'Wie lösen Sie Feuchtigkeitsprobleme im Winter mit einer Wärmerückgewinnungsanlage? Praktische Tipps.'
          : 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok.',
      date: i18n.language === 'de' ? '5. Januar 2024' : '2024. január 5.',
      slug: 'teli-szelloztes-es-paratartalom',
      category: i18n.language === 'de' ? 'Tipps' : 'Tippek',
    },
  ]

  return (
    <section className='bg-background py-20 lg:py-28'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <h2 className='mb-3 text-3xl font-bold text-foreground lg:text-4xl'>
              {t('blog.title')} <span className='gradient-cyan-text'>{t('blog.titleHighlight')}</span>
            </h2>
            <p className='text-lg text-muted-foreground'>{t('blog.description')}</p>
          </div>
          <Button variant='outline' asChild>
            <Link to={paths.blog.base}>
              {t('blog.viewAll')}
              <ArrowRight className='size-4' />
            </Link>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8'>
          {blogPosts.map((post) => (
            <Link key={post.id} to={paths.blog.getPost(post.slug)} className='group block'>
              <article className='flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-cyan/30 hover:shadow-card'>
                <div className='mb-4 flex items-center gap-3'>
                  <span className='rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan'>
                    {post.category}
                  </span>
                  <span className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                    <Calendar className='size-3.5' />
                    {post.date}
                  </span>
                </div>

                <h3 className='mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-cyan'>
                  {post.title}
                </h3>

                <p className='grow text-sm leading-relaxed text-muted-foreground'>{post.excerpt}</p>

                <div className='mt-4 flex items-center gap-2 text-sm font-medium text-cyan transition-all group-hover:gap-3'>
                  {i18n.language === 'de' ? 'Weiterlesen' : 'Tovább olvasom'}
                  <ArrowRight className='size-4' />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
