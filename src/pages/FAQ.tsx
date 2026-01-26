import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Filter, Clock, Shield, Truck, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

const faqData = [
  {
    category: 'Szűrőválasztás',
    icon: Filter,
    questions: [
      {
        question: 'Milyen szűrő való a Zehnder gépembe?',
        answer: 'A Zehnder hővisszanyerős gépekhez (ComfoAir, ComfoD, ComfoFond stb.) mind gyári, mind kiváló minőségű utángyártott szűrőket kínálunk. A pontos típusválasztáshoz szükséges a gép pontos modellszáma (pl. ComfoAir Q350, ComfoAir 350). Ha bizonytalan vagy, keress minket a +36 20 323 8172 számon, és segítünk azonosítani a megfelelő szűrőt.',
      },
      {
        question: 'Mi a különbség a G4 és az F7 szűrőosztály között?',
        answer: 'A G4 szűrő durva porszűrő, mely a nagyobb részecskéket (por, szőr, nagy pollenek) fogja meg – ez általában a külső levegő előszűrésére szolgál. Az F7 szűrő finomszűrő, mely a kisebb részecskéket is kiszűri (finom por, pollenek, baktériumok). Allergiások és asztmások számára az F7 szűrő használata kifejezetten ajánlott a belépő levegő oldalán.',
      },
      {
        question: 'Használhatok utángyártott szűrőt a gyári helyett?',
        answer: 'Igen, az általunk kínált utángyártott szűrők ugyanolyan méretpontossággal és szűrési hatékonysággal rendelkeznek, mint a gyári változatok. A szellozoszuro.hu szakértői csapata 15+ év tapasztalattal választja ki a megbízható utángyártott alternatívákat, melyek a gyári ár töredékéért biztosítanak azonos védelmet.',
      },
      {
        question: 'Hogyan tudom megállapítani, melyik szűrő kell a gépemhez?',
        answer: 'A legegyszerűbb módszer: nézd meg a gép típustábláját (általában a készülék oldalán vagy belsejében található), és keresd meg a pontos modellszámot. Ezt követően a szellozoszuro.hu oldalon a márka kiválasztásával megtalálod a kompatibilis szűrőket. Ha nem találod, hívj minket: +36 20 323 8172.',
      },
    ],
  },
  {
    category: 'Szűrőcsere és karbantartás',
    icon: Clock,
    questions: [
      {
        question: 'Milyen gyakran kell hővisszanyerő szűrőt cserélni?',
        answer: 'Általános szabály: 3-6 havonta, de ez függ a környezettől és a használat intenzitásától. Városi, poros környezetben vagy allergiaszezonban (tavasz, nyár) gyakoribb csere szükséges. A legtöbb modern gép jelzi, ha szűrőcsere esedékes. A rendszeres csere biztosítja a hatékony működést és megóvja a hővisszanyerő cellát.',
      },
      {
        question: 'Mi történik, ha nem cserélem időben a szűrőt?',
        answer: 'Az eltömődött szűrő csökkenti a légáramlást, ami a gép túlterheléséhez és magasabb energiafogyasztáshoz vezet. Hosszú távon károsíthatja a hővisszanyerő cellát és a ventilátorokat. Emellett a szűrési hatékonyság csökkenésével szennyezett levegő kerül a lakásba. A rendszeres csere olcsóbb, mint a gép javítása.',
      },
      {
        question: 'Magam is ki tudom cserélni a szűrőt?',
        answer: 'Igen, a legtöbb hővisszanyerős gépben a szűrőcsere egyszerű, szervizre nem szükséges. A gép fedőlapjának eltávolítása után kihúzható a régi szűrő, és behelyezhető az új. Ügyelj a szűrő irányára (nyíl a légáramlás irányába mutasson). A Tudástárunkban részletes útmutatókat találsz.',
      },
    ],
  },
  {
    category: 'Rendelés és szállítás',
    icon: Truck,
    questions: [
      {
        question: 'Mennyi idő alatt érkezik meg a rendelésem?',
        answer: 'A raktáron lévő termékeket munkanapokon 24 órán belül postázzuk. A szállítási idő általában 1-3 munkanap a GLS futárszolgálattal. Sürgős rendelés esetén hívj minket: +36 20 806 9072.',
      },
      {
        question: 'Van lehetőség személyes átvételre?',
        answer: 'Igen, soproni telephelyünkön lehetőség van személyes átvételre előzetes egyeztetés után. Időpontfoglaláshoz hívd a +36 20 806 9072 számot.',
      },
      {
        question: 'Hogyan fizethetek?',
        answer: 'Elfogadunk bankkártyás fizetést, banki átutalást és utánvétet. A leggyorsabb megoldás az online bankkártyás fizetés, melyet követően azonnal megkezdjük a rendelés feldolgozását.',
      },
    ],
  },
  {
    category: 'Minőség és garancia',
    icon: Shield,
    questions: [
      {
        question: 'Milyen garanciát vállalnak a szűrőkre?',
        answer: 'Minden általunk forgalmazott szűrőre a jogszabályban előírt 2 év jótállást biztosítunk. Gyártási hiba esetén díjmentesen cseréljük a terméket. Elégedetlenség esetén 14 napon belül visszaküldhető a bontatlan termék.',
      },
      {
        question: 'Honnan származnak a szűrőitek?',
        answer: 'A gyári szűrők az eredeti gyártóktól (Zehnder, Helios, Wolf stb.) származnak. Az utángyártott szűrőket gondosan kiválasztott európai partnereinktől szerezzük be, akikkel több mint 10 éve dolgozunk együtt. Minden szűrőt saját raktárkészletből szállítunk.',
      },
    ],
  },
];

// Flatten all questions for schema
const allFaqItems = faqData.flatMap(category => 
  category.questions.map(q => ({
    question: q.question,
    answer: q.answer
  }))
);

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gyakori Kérdések (GYIK) | szellozoszuro.hu - Hővisszanyerő szűrők</title>
        <meta name="description" content="Válaszok a leggyakoribb kérdésekre: Milyen szűrő kell a gépembe? Milyen gyakran kell cserélni? G4 vs F7 különbség. Szakértői tanácsadás a Németh Légtechnika csapatától." />
        <link rel="canonical" href="https://szellozoszuro.hu/gyik" />
      </Helmet>
      
      <JsonLdSchema 
        includeLocalBusiness={true}
        includeOrganization={true}
        includeFAQ={true}
        faqItems={allFaqItems}
      />
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">Gyakori Kérdések</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-2xl">
              Összegyűjtöttük a leggyakrabban felmerülő kérdéseket a szűrőválasztásról, 
              cseréről és karbantartásról. Nem találod a választ? Hívj minket!
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqData.map((category, categoryIndex) => (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {category.category}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-cyan/30"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-cyan py-5">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 section-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Phone className="w-12 h-12 text-cyan mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Nem találtad meg a választ?
              </h2>
              <p className="text-dark-muted text-lg mb-8">
                Szakértő csapatunk készséggel segít. A{' '}
                <a 
                  href="https://szelloztetes.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  szelloztetes.eu
                </a>{' '}
                szakmai támogatásával 15+ év tapasztalattal válaszolunk kérdéseidre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Kapcsolatfelvétel
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" asChild>
                  <a href="tel:+36203238172">
                    <Phone className="w-4 h-4" />
                    +36 20 323 8172
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
