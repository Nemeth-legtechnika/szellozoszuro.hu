import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const stats = [
    { label: 'Év tapasztalat', value: '15+' },
    { label: 'Elégedett ügyfél', value: '5000+' },
    { label: 'Támogatott márka', value: '20+' },
    { label: 'Szállított szűrő', value: '50000+' },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Minőség',
      description: 'Csak olyan szűrőket forgalmazunk, amelyek teljesítménye és élettartama megfelel a gyári specifikációknak.',
    },
    {
      icon: Users,
      title: 'Szakértelem',
      description: 'Csapatunk mérnöki háttérrel és több évtizedes légtechnikai tapasztalattal rendelkezik.',
    },
    {
      icon: Award,
      title: 'Megbízhatóság',
      description: 'Gyors szállítás, pontos termékleírások és készséges ügyfélszolgálat jellemez minket.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="section-dark py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-50" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Ismerd meg a{' '}
                <span className="gradient-cyan-text">Németh Légtechnikát</span>
              </h1>
              <p className="text-dark-muted text-lg lg:text-xl leading-relaxed">
                A Németh Légtechnika Kft. több mint 15 éve foglalkozik légtechnikai rendszerek 
                tervezésével, telepítésével és karbantartásával. Szakértelmünket most a 
                szűrőértékesítés területén is kamatoztatjuk.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 lg:py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold gradient-cyan-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  A mi történetünk
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cégünk 2008-ban alakult azzal a céllal, hogy professzionális légtechnikai 
                    megoldásokat nyújtsunk lakossági és ipari ügyfeleknek egyaránt. Az évek 
                    során szerzett tapasztalataink alapján felismertük, hogy a hővisszanyerős 
                    rendszerek üzemeltetése során a leggyakoribb probléma a szűrők beszerzése.
                  </p>
                  <p>
                    A szellozoszuro.hu webáruházat azért hoztuk létre, hogy ügyfeleink könnyen 
                    és gyorsan hozzájuthassanak a gépükhöz illő szűrőkhöz. Mind gyári, mind 
                    kiváló minőségű utángyártott szűrőket kínálunk, hogy minden igényt és 
                    költségvetést ki tudjunk szolgálni.
                  </p>
                  <p>
                    Büszkék vagyunk arra, hogy több ezer elégedett ügyfelünk bízik meg bennünk, 
                    és rendszeresen hozzánk fordul a szűrőcseréért.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <Building className="w-16 h-16 text-muted-foreground/30" />
                </div>
                <div className="aspect-square rounded-2xl bg-cyan/10 flex items-center justify-center mt-8">
                  <Users className="w-16 h-16 text-cyan/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-cyan/10 flex items-center justify-center -mt-4">
                  <Award className="w-16 h-16 text-cyan/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center mt-4">
                  <CheckCircle className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              Értékeink
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-card rounded-2xl border border-border p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Kérdésed van?
            </h2>
            <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">
              Lépj kapcsolatba velünk, és szakértő csapatunk segít megtalálni 
              a géped típusához legmegfelelőbb szűrőt.
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
