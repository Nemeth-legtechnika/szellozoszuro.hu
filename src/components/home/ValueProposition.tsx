import { CheckCircle2, Wind, Wrench, Clock } from 'lucide-react';

const features = [
  {
    icon: Wind,
    title: 'Tiszta levegő mindennap',
    description: 'A rendszeresen cserélt szűrők biztosítják, hogy családod mindig friss, pormentes levegőt lélegezhessen be.',
  },
  {
    icon: Wrench,
    title: 'Géped védelme',
    description: 'A megfelelő szűrő megvédi a hővisszanyerő egységet a szennyeződésektől, meghosszabbítva élettartamát.',
  },
  {
    icon: CheckCircle2,
    title: 'Gyári és utángyártott opciók',
    description: 'Válassz az eredeti gyártói szűrők és a kiváló minőségű, költséghatékony alternatívák közül.',
  },
  {
    icon: Clock,
    title: 'Egyszerű rendelés',
    description: 'Keresd meg géped típusát, válaszd ki a szűrőosztályt, és rendeld meg pár kattintással.',
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Miért válaszd a{' '}
            <span className="gradient-cyan-text">Németh Légtechnikát?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Több mint 15 év tapasztalattal a légtechnika területén, 
            szakértő tanácsadással segítünk megtalálni a tökéletes szűrőt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-colors">
                <feature.icon className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
