import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Home, MapPin, Award, Users, Building2, Wrench, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import nemethKalmanImage from '@/assets/team/nemeth-kalman.jpg';
import usePath from "@/hooks/use-path";

const About = () => {
  const { t, i18n } = useTranslation();
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
  ];

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
  ];

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
  ];

  const signature = {
    quote: i18n.language === 'de' 
      ? "Hinter jedem Filterwechsel steht unser Engagement für saubere Luft und ein gesundes Zuhause."
      : "Minden szűrőcsere mögött a tiszta levegő és az egészséges otthon iránti elkötelezettségünk áll.",
    family: i18n.language === 'de' ? "– Die Familie Németh" : "– A Németh család",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{i18n.language === 'de' 
          ? 'Über uns | Németh Légtechnika Kft. - 15+ Jahre Expertise, landesweite Abdeckung'
          : 'Rólunk | Németh Légtechnika Kft. - 15+ év szakértelem, országos lefedettség'
        }</title>
        <meta name="description" content={i18n.language === 'de'
          ? 'Lernen Sie die Geschichte der Németh Légtechnika Kft. kennen: 15+ Jahre Lüftungstechnik-Erfahrung, Familienunternehmen aus Sopron. Landesweites Servicepartner-Netzwerk!'
          : 'Ismerje meg a Németh Légtechnika Kft. történetét: 15+ év légtechnikai tapasztalat, családi vállalkozás Sopronból. Országos szervizpartneri hálózattal rendelkezünk!'
        } />
        <link rel="canonical" href={`https://szellozoszuro.hu${paths.about}`} />
      </Helmet>
      
      <JsonLdSchema includeLocalBusiness={true} includeOrganization={true} />
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="section-dark py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-2xl" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-cyan font-medium mb-4 tracking-wide uppercase text-sm">
                {t('about.ourStory')}
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('about.heroTitle')}{' '}
                <span className="gradient-cyan-text">{t('about.heroTitleHighlight')}</span>
              </h1>
              <p className="text-dark-muted text-lg lg:text-xl leading-relaxed">
                {t('about.heroDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: A kezdetek - Split Layout */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {t('about.beginningsTitle')}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('about.beginningsText1')}
                  </p>
                  <p>
                    {t('about.beginningsText2')}
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden border border-border">
                    <div className="text-center p-8">
                      <Building2 className="w-20 h-20 text-cyan mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">{t('about.expertBackground')}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Küldetésünk - Split Layout Reversed */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-dark to-dark-secondary flex items-center justify-center overflow-hidden border border-dark-secondary">
                    <div className="text-center p-8">
                      <Wrench className="w-20 h-20 text-cyan mx-auto mb-4" />
                      <p className="text-dark-muted text-sm">{t('about.heatRecoverySpecialists')}</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 glass-card rounded-xl p-4 shadow-lg">
                    <p className="text-xs text-muted-foreground mb-1">{t('about.portfolio')}</p>
                    <p className="text-sm font-semibold text-foreground">szelloztetes.eu</p>
                    <p className="text-sm font-semibold text-foreground">hoszivattyu.online</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {t('about.missionTitle')}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('about.missionText1')}
                  </p>
                  <p>
                    {t('about.missionText2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('about.timelineTitle')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.timelineDescription')}
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 left-0 right-1/3 h-1 bg-gradient-to-r from-muted-foreground/30 via-cyan/50 to-cyan -translate-y-1/2" />
              
              <div className="grid md:grid-cols-3 gap-8">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4 relative z-10 border-4 border-background shadow-lg`}>
                        <item.icon className={`w-7 h-7 ${index === timeline.length - 1 ? 'text-primary-foreground' : 'text-cyan'}`} />
                      </div>
                      <span className="text-xs font-medium text-cyan uppercase tracking-wider mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full">
                        <ArrowRight className="w-5 h-5 text-cyan/50 mx-auto" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Miért jött létre */}
        <section className="py-16 lg:py-24 section-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                {t('about.whyCreatedTitle')} <span className="gradient-cyan-text">{t('about.whyCreatedHighlight')}</span>?
              </h2>
              <div className="space-y-4 text-dark-muted text-lg leading-relaxed">
                <p>
                  {t('about.whyCreatedText1')}
                </p>
                <p>
                  {t('about.whyCreatedText2')}
                </p>
                <p className="text-xl font-medium text-dark-foreground">
                  {t('about.whyCreatedText3')}
                </p>
                <p className="mt-4 p-4 bg-cyan/10 rounded-xl border border-cyan/20">
                  <strong className="text-cyan">🇭🇺 {t('about.nationalCoverage')}</strong>{' '}
                  <span className="text-dark-foreground">{t('about.nationalCoverageText')}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('about.valuesTitle')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight) => (
                <Card 
                  key={highlight.title}
                  className="bg-card border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                      <highlight.icon className="w-8 h-8 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('about.teamTitle')}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t('about.teamDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {team.map((member) => (
                <div 
                  key={member.name}
                  className="bg-card rounded-2xl border border-border p-8 text-center hover:border-cyan/30 transition-all duration-300"
                >
                  {member.image ? (
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-cyan/30 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-4 border-2 border-cyan/20">
                      <Users className="w-12 h-12 text-cyan" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Signature */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-card rounded-2xl border border-border p-8">
                <p className="text-muted-foreground italic mb-4">
                  "{signature.quote}"
                </p>
                <p className="text-foreground font-semibold">{signature.family}</p>
                <p className="text-sm text-muted-foreground">Sopron, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">
              {t('about.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to={paths.contact}>
                  {t('about.ctaButton')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to={paths.shop}>
                  {t('cta.button')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
