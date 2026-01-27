import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, MapPin, Award, Users, Building2, Wrench, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

const About = () => {
  const highlights = [
    {
      icon: Home,
      title: 'Családi vállalkozás',
      description: 'Értékrendünk alapja a személyes felelősségvállalás és a hosszú távú kapcsolat az ügyfeleinkkel.',
    },
    {
      icon: MapPin,
      title: 'Országos lefedettség',
      description: 'Bár központunk Sopronban található, szervizpartnereink révén országos lefedettséggel rendelkezünk Magyarország egész területén.',
    },
    {
      icon: Award,
      title: 'Minőség garancia',
      description: 'Csak olyan szűrőket kínálunk (legyen az gyári vagy utángyártott), amiket mi magunk is beszerelnénk saját projektjeinkbe.',
    },
  ];

  const timeline = [
    {
      year: 'Kezdetek',
      title: 'Sopronterv',
      subtitle: 'Szakértői tervezés',
      description: 'Szakértői alapok és műszaki tanácsadás',
      icon: Building2,
      color: 'bg-muted',
    },
    {
      year: 'Megvalósítás',
      title: 'Németh Légtechnika',
      subtitle: 'Kivitelezés',
      description: 'Hővisszanyerős és hőszivattyús rendszerek',
      icon: Wrench,
      color: 'bg-cyan/20',
    },
    {
      year: 'Ma',
      title: 'szellozoszuro.hu',
      subtitle: 'Szerviz & Karbantartás',
      description: 'Gyári minőségű szűrők, szakértői támogatással',
      icon: Filter,
      color: 'bg-cyan',
    },
  ];

  const team = [
    {
      name: 'Németh Kálmán',
      role: 'Alapító, vezető szakértő',
      description: 'Több mint 15 év légtechnikai tapasztalat',
    },
    {
      name: 'Némethné Papp Eszter',
      role: 'Ügyfélszolgálati Asszisztens',
      description: 'Személyre szabott tanácsadás és támogatás',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Rólunk | Németh Légtechnika Kft. - 15+ év szakértelem, országos lefedettség</title>
        <meta name="description" content="Ismerje meg a Németh Légtechnika Kft. történetét: 15+ év légtechnikai tapasztalat, családi vállalkozás Sopronból. Országos szervizpartneri hálózattal rendelkezünk!" />
        <meta name="keywords" content="országos szellőztető szerviz, hővisszanyerő tisztítás Magyarország, szellőztető rendszer karbantartás partnerhálózat" />
        <link rel="canonical" href="https://szellozoszuro.hu/about" />
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
                A mi történetünk
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Szakértői precizitás a tiszta otthon szolgálatában –{' '}
                <span className="gradient-cyan-text">A Németh Légtechnika története</span>
              </h1>
              <p className="text-dark-muted text-lg lg:text-xl leading-relaxed">
                Több mint 15 év tapasztalat a tervezéstől a megvalósításig. A{' '}
                <a 
                  href="https://szelloztetes.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  szelloztetes.eu
                </a>{' '}
                szakmai támogatásával.
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
                  A kezdetek és a szakértelem
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A mi történetünk nem egy egyszerű kereskedelemmel kezdődött. Alapjainkat a 
                    <strong className="text-foreground"> szakértői tervezés és a műszaki tanácsadás</strong> fektette 
                    le a{' '}
                    <a 
                      href="https://sopronterv.hu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan hover:underline"
                    >
                      Sopronterv
                    </a>{' '}
                    égisze alatt, több mint 15 éve.
                  </p>
                  <p>
                    Szakértőkként hittünk abban, hogy a modern otthon nemcsak falakból áll, 
                    hanem egy komplex, lélegző rendszerből. Ez a szemlélet hívta életre a 
                    <strong className="text-foreground"> Németh Légtechnika Kft.</strong>-t, ahol a célunk 
                    az volt, hogy a papírra vetett terveket a legmagasabb minőségben váltsuk valóra.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden border border-border">
                    <div className="text-center p-8">
                      <Building2 className="w-20 h-20 text-cyan mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">Szakértői háttér és tervezési tapasztalat</p>
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
                      <p className="text-dark-muted text-sm">Hővisszanyerős és hőszivattyús rendszerek specialistái</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 glass-card rounded-xl p-4 shadow-lg">
                    <p className="text-xs text-muted-foreground mb-1">Portfóliónk</p>
                    <p className="text-sm font-semibold text-foreground">szelloztetes.eu</p>
                    <p className="text-sm font-semibold text-foreground">hoszivattyu.online</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Küldetésünk a szellőztetésben
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Az évek során specialistává váltunk a <strong className="text-foreground">hővisszanyerős 
                    szellőztető rendszerek</strong> és a <strong className="text-foreground">modern hőszivattyús 
                    megoldások</strong> területén. Szakértelmünket a{' '}
                    <a 
                      href="https://szelloztetes.eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan hover:underline"
                    >
                      szelloztetes.eu
                    </a>{' '}
                    és{' '}
                    <a 
                      href="https://hoszivattyu.online" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan hover:underline"
                    >
                      hoszivattyu.online
                    </a>{' '}
                    szakportáljaink is tükrözik.
                  </p>
                  <p>
                    Felismertük, hogy egy jól megtervezett rendszer csak akkor marad hatékony és egészséges, 
                    ha a karbantartása is szakszerű. A rendszeres szűrőcsere nem luxus – a gép élettartamának 
                    és az otthon levegőminőségének alapfeltétele.
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
                Útunk
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A tervezéstől a megvalósításon át a karbantartásig – így épült fel szakértelmünk
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
                Miért jött létre a <span className="gradient-cyan-text">szellozoszuro.hu</span>?
              </h2>
              <div className="space-y-4 text-dark-muted text-lg leading-relaxed">
                <p>
                  Ügyfeleink visszajelzései alapján láttuk a piaci rést: nehéz volt gyorsan, 
                  megbízható forrásból beszerezni a gyári minőségű szűrőket.
                </p>
                <p>
                  A szellozoszuro.hu azért jött létre, hogy <strong className="text-dark-foreground">Önnek 
                  ne kelljen szakemberre várnia</strong> a szűrőcseréhez. Mi nemcsak eladjuk a szűrőt, 
                  hanem pontosan tudjuk, mi történik a gép belsejében, ha nem megfelelő a légáramlás.
                </p>
                <p className="text-xl font-medium text-dark-foreground">
                  Saját raktárkészletünkből, szakértői támogatással biztosítjuk a friss levegőt otthonába.
                </p>
                <p className="mt-4 p-4 bg-cyan/10 rounded-xl border border-cyan/20">
                  <strong className="text-cyan">🇭🇺 Országos lefedettség:</strong>{' '}
                  <span className="text-dark-foreground">Bár központunk Sopronban található, szervizpartnereink révén országos lefedettséggel rendelkezünk. Bárhol is éljen az országban, szakértőink és partnereink készen állnak rendszere karbantartására és tisztítására.</span>
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
                Amiben hiszünk
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
                A csapat mögöttünk
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Családi vállalkozásként minden ügyfelünkkel személyesen foglalkozunk
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {team.map((member) => (
                <div 
                  key={member.name}
                  className="bg-card rounded-2xl border border-border p-8 text-center hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-4 border-2 border-cyan/20">
                    <Users className="w-10 h-10 text-cyan" />
                  </div>
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
                  "Minden szűrőcsere mögött a tiszta levegő és az egészséges otthon iránti elkötelezettségünk áll."
                </p>
                <p className="text-foreground font-semibold">– A Németh család</p>
                <p className="text-sm text-muted-foreground">Sopron, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Kérdése van a szűrőkkel kapcsolatban?
            </h2>
            <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">
              Szakértői háttérrel rendelkező csapatunk készséggel segít megtalálni 
              a gépe típusához legmegfelelőbb szűrőt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Kapcsolatfelvétel
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/shop">
                  Szűrők böngészése
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
