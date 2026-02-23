import { ArrowRight, Award, Building2, Filter, Home, MapPin, Users, Wrench } from 'lucide-react'
import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import nemethKalmanImage from '@/assets/team/nemeth-kalman.jpg'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import usePath from '@/hooks/use-path'

const About = (): ReactElement => {
  const { t, i18n } = useTranslation()
  const paths = usePath()

  const highlights = [
    {
      icon: Home,
      title: t('about.values.family.title'),
      description: t('about.values.family.description'),
    },
    {
      icon: MapPin,
      title: t('about.values.coverage.title'),
      description: t('about.values.coverage.description'),
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
  ]

  const timeline = [
    {
      year: t('about.timeline.beginning.year'),
      title: t('about.timeline.beginning.title'),
      subtitle: t('about.timeline.beginning.subtitle'),
      description: t('about.timeline.beginning.description'),
      icon: Building2,
      color: 'bg-muted',
    },
    {
      year: t('about.timeline.implementation.year'),
      title: t('about.timeline.implementation.title'),
      subtitle: t('about.timeline.implementation.subtitle'),
      description: t('about.timeline.implementation.description'),
      icon: Wrench,
      color: 'bg-cyan/20',
    },
    {
      year: t('about.timeline.today.year'),
      title: t('about.timeline.today.title'),
      subtitle: t('about.timeline.today.subtitle'),
      description: t('about.timeline.today.description'),
      icon: Filter,
      color: 'bg-cyan',
    },
  ]

  const team = [
    {
      name: t('about.team.founder.name'),
      role: t('about.team.founder.role'),
      description: t('about.team.founder.description'),
      image: nemethKalmanImage,
    },
    {
      name: t('about.team.assistant.name'),
      role: t('about.team.assistant.role'),
      description: t('about.team.assistant.description'),
      image: null,
    },
  ]

  const signature = {
    quote:
      i18n.language === 'de'
        ? 'Hinter jedem Filterwechsel steht unser Engagement für saubere Luft und ein gesundes Zuhause.'
        : 'Minden szűrőcsere mögött a tiszta levegő és az egészséges otthon iránti elkötelezettségünk áll.',
    family: i18n.language === 'de' ? '– Die Familie Németh' : '– A Németh család',
  }

  return (
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>
          {i18n.language === 'de'
            ? 'Über uns | Németh Légtechnika Kft. - 15+ Jahre Expertise, landesweite Abdeckung'
            : 'Rólunk | Németh Légtechnika Kft. - 15+ év szakértelem, országos lefedettség'}
        </title>
        <meta
          name='description'
          content={
            i18n.language === 'de'
              ? 'Lernen Sie die Geschichte der Németh Légtechnika Kft. kennen: 15+ Jahre Lüftungstechnik-Erfahrung, Familienunternehmen aus Sopron. Landesweites Servicepartner-Netzwerk!'
              : 'Ismerje meg a Németh Légtechnika Kft. történetét: 15+ év légtechnikai tapasztalat, családi vállalkozás Sopronból. Országos szervizpartneri hálózattal rendelkezünk!'
          }
        />
        <link rel='canonical' href={`https://szellozoszuro.hu${paths.about}`} />
      </Helmet>

      <JsonLdSchema includeLocalBusiness={true} includeOrganization={true} />

      <Header />

      <main className='pt-20 lg:pt-24'>
        {/* Hero Section */}
        <section className='section-dark relative overflow-hidden py-16 lg:py-24'>
          <div className='absolute left-1/4 top-1/2 size-96 rounded-full bg-cyan/10 opacity-50 blur-3xl' />
          <div className='absolute bottom-0 right-1/4 size-64 rounded-full bg-cyan/5 blur-2xl' />

          <div className='container relative mx-auto px-4'>
            <div className='max-w-4xl'>
              <p className='mb-4 text-sm font-medium uppercase tracking-wide text-cyan'>{t('about.ourStory')}</p>
              <h1 className='mb-6 text-3xl font-bold leading-tight lg:text-5xl'>
                {t('about.heroTitle')} <span className='gradient-cyan-text'>{t('about.heroTitleHighlight')}</span>
              </h1>
              <p className='text-lg leading-relaxed text-dark-muted lg:text-xl'>{t('about.heroDescription')}</p>
            </div>
          </div>
        </section>

        {/* Section 1: A kezdetek - Split Layout */}
        <section className='py-16 lg:py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
              <div className='order-2 lg:order-1'>
                <h2 className='mb-6 text-2xl font-bold text-foreground lg:text-3xl'>{t('about.beginningsTitle')}</h2>
                <div className='space-y-4 leading-relaxed text-muted-foreground'>
                  <p>{t('about.beginningsText1')}</p>
                  <p>{t('about.beginningsText2')}</p>
                </div>
              </div>

              <div className='order-1 lg:order-2'>
                <div className='relative'>
                  <div className='flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-muted/50'>
                    <div className='p-8 text-center'>
                      <Building2 className='mx-auto mb-4 size-20 text-cyan' />
                      <p className='text-sm text-muted-foreground'>{t('about.expertBackground')}</p>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -right-4 flex size-24 items-center justify-center rounded-xl bg-cyan/20'>
                    <span className='text-2xl font-bold text-cyan'>15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Küldetésünk - Split Layout Reversed */}
        <section className='bg-muted/30 py-16 lg:py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
              <div>
                <div className='relative'>
                  <div className='flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dark-secondary bg-gradient-to-br from-dark to-dark-secondary'>
                    <div className='p-8 text-center'>
                      <Wrench className='mx-auto mb-4 size-20 text-cyan' />
                      <p className='text-sm text-dark-muted'>{t('about.heatRecoverySpecialists')}</p>
                    </div>
                  </div>
                  <div className='glass-card absolute -left-4 -top-4 rounded-xl p-4 shadow-lg'>
                    <p className='mb-1 text-xs text-muted-foreground'>{t('about.portfolio')}</p>
                    <p className='text-sm font-semibold text-foreground'>szelloztetes.eu</p>
                    <p className='text-sm font-semibold text-foreground'>hoszivattyu.online</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='mb-6 text-2xl font-bold text-foreground lg:text-3xl'>{t('about.missionTitle')}</h2>
                <div className='space-y-4 leading-relaxed text-muted-foreground'>
                  <p>{t('about.missionText1')}</p>
                  <p>{t('about.missionText2')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className='py-16 lg:py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
              <h2 className='mb-4 text-2xl font-bold text-foreground lg:text-3xl'>{t('about.timelineTitle')}</h2>
              <p className='mx-auto max-w-2xl text-muted-foreground'>{t('about.timelineDescription')}</p>
            </div>

            <div className='relative mx-auto max-w-4xl'>
              {/* Timeline Line */}
              <div className='absolute inset-x-0 top-1/2 hidden h-1 -translate-y-1/2 bg-border md:block' />
              <div className='absolute left-0 right-1/3 top-1/2 hidden h-1 -translate-y-1/2 bg-gradient-to-r from-muted-foreground/30 via-cyan/50 to-cyan md:block' />

              <div className='grid gap-8 md:grid-cols-3'>
                {timeline.map((item, index) => (
                  <div key={item.title} className='relative'>
                    <div className='flex flex-col items-center text-center'>
                      <div
                        className={`size-16 rounded-full ${item.color} relative z-10 mb-4 flex items-center justify-center border-4 border-background shadow-lg`}
                      >
                        <item.icon
                          className={`size-7 ${index === timeline.length - 1 ? 'text-primary-foreground' : 'text-cyan'}`}
                        />
                      </div>
                      <span className='mb-2 text-xs font-medium uppercase tracking-wider text-cyan'>{item.year}</span>
                      <h3 className='mb-1 text-lg font-bold text-foreground'>{item.title}</h3>
                      <p className='mb-2 text-sm font-medium text-muted-foreground'>{item.subtitle}</p>
                      <p className='text-sm text-muted-foreground'>{item.description}</p>
                    </div>

                    {index < timeline.length - 1 && (
                      <div className='absolute left-full top-8 hidden w-full md:block'>
                        <ArrowRight className='mx-auto size-5 text-cyan/50' />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Miért jött létre */}
        <section className='section-dark relative overflow-hidden py-16 lg:py-24'>
          <div className='absolute right-0 top-0 size-96 rounded-full bg-cyan/5 blur-3xl' />

          <div className='container relative mx-auto px-4'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='mb-6 text-2xl font-bold lg:text-3xl'>
                {t('about.whyCreatedTitle')}{' '}
                <span className='gradient-cyan-text'>{t('about.whyCreatedHighlight')}</span>?
              </h2>
              <div className='space-y-4 text-lg leading-relaxed text-dark-muted'>
                <p>{t('about.whyCreatedText1')}</p>
                <p>{t('about.whyCreatedText2')}</p>
                <p className='text-xl font-medium text-dark-foreground'>{t('about.whyCreatedText3')}</p>
                <p className='mt-4 rounded-xl border border-cyan/20 bg-cyan/10 p-4'>
                  <strong className='text-cyan'>🇭🇺 {t('about.nationalCoverage')}</strong>{' '}
                  <span className='text-dark-foreground'>{t('about.nationalCoverageText')}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className='py-16 lg:py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
              <h2 className='mb-4 text-2xl font-bold text-foreground lg:text-3xl'>{t('about.valuesTitle')}</h2>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
              {highlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  className='border-border bg-card transition-all duration-300 hover:border-cyan/30 hover:shadow-lg'
                >
                  <CardContent className='p-8 text-center'>
                    <div className='mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-cyan/10'>
                      <highlight.icon className='size-8 text-cyan' />
                    </div>
                    <h3 className='mb-3 text-xl font-semibold text-foreground'>{highlight.title}</h3>
                    <p className='text-sm leading-relaxed text-muted-foreground'>{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className='bg-muted/30 py-16 lg:py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
              <h2 className='mb-4 text-2xl font-bold text-foreground lg:text-3xl'>{t('about.teamTitle')}</h2>
              <p className='mx-auto max-w-xl text-muted-foreground'>{t('about.teamDescription')}</p>
            </div>

            <div className='mx-auto grid max-w-2xl gap-8 md:grid-cols-2'>
              {team.map((member) => (
                <div
                  key={member.name}
                  className='rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-cyan/30'
                >
                  {member.image ? (
                    <div className='mx-auto mb-4 size-24 overflow-hidden rounded-full border-2 border-cyan/30 shadow-lg'>
                      <img src={member.image} alt={member.name} className='size-full object-cover object-top' />
                    </div>
                  ) : (
                    <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full border-2 border-cyan/20 bg-gradient-to-br from-cyan/20 to-cyan/5'>
                      <Users className='size-12 text-cyan' />
                    </div>
                  )}
                  <h3 className='mb-1 text-lg font-semibold text-foreground'>{member.name}</h3>
                  <p className='mb-2 text-sm font-medium text-cyan'>{member.role}</p>
                  <p className='text-sm text-muted-foreground'>{member.description}</p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className='mt-12 text-center'>
              <div className='inline-block rounded-2xl border border-border bg-card p-8'>
                <p className='mb-4 italic text-muted-foreground'>&ldquo;{signature.quote}&rdquo;</p>
                <p className='font-semibold text-foreground'>{signature.family}</p>
                <p className='text-sm text-muted-foreground'>Sopron, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='section-dark py-16 lg:py-24'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='mb-4 text-2xl font-bold lg:text-3xl'>{t('about.ctaTitle')}</h2>
            <p className='mx-auto mb-8 max-w-xl text-lg text-dark-muted'>{t('about.ctaDescription')}</p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button variant='hero' asChild>
                <Link to={paths.contact}>
                  {t('about.ctaButton')}
                  <ArrowRight className='size-5' />
                </Link>
              </Button>
              <Button variant='heroOutline' asChild>
                <Link to={paths.shop}>{t('cta.button')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
