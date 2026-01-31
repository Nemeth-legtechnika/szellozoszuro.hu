import { useTranslation } from 'react-i18next';
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

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'de' ? '/de' : '';

  const faqData = [
    {
      category: t('faqPage.categories.filterSelection'),
      icon: Filter,
      questions: [
        {
          question: i18n.language === 'de' 
            ? 'Welcher Filter passt in mein Zehnder Gerät?'
            : 'Milyen szűrő való a Zehnder gépembe?',
          answer: i18n.language === 'de'
            ? 'Für Zehnder Wärmerückgewinnungsgeräte (ComfoAir, ComfoD, ComfoFond usw.) bieten wir sowohl Original- als auch hochwertige Alternativfilter an. Für die genaue Typauswahl benötigen wir die genaue Modellnummer (z.B. ComfoAir Q350, ComfoAir 350). Bei Unsicherheiten kontaktieren Sie uns unter +36 20 323 8172, und wir helfen Ihnen bei der Identifizierung des richtigen Filters.'
            : 'A Zehnder hővisszanyerős gépekhez (ComfoAir, ComfoD, ComfoFond stb.) mind gyári, mind kiváló minőségű utángyártott szűrőket kínálunk. A pontos típusválasztáshoz szükséges a gép pontos modellszáma (pl. ComfoAir Q350, ComfoAir 350). Ha bizonytalan vagy, keress minket a +36 20 323 8172 számon, és segítünk azonosítani a megfelelő szűrőt.',
        },
        {
          question: t('faq.items.filterClass.question'),
          answer: t('faq.items.filterClass.answer'),
        },
        {
          question: t('faq.items.aftermarket.question'),
          answer: t('faq.items.aftermarket.answer'),
        },
        {
          question: i18n.language === 'de'
            ? 'Wie finde ich heraus, welcher Filter in mein Gerät passt?'
            : 'Hogyan tudom megállapítani, melyik szűrő kell a gépemhez?',
          answer: i18n.language === 'de'
            ? 'Die einfachste Methode: Schauen Sie sich das Typenschild des Gerätes an (normalerweise an der Seite oder im Inneren des Gerätes) und suchen Sie die genaue Modellnummer. Dann können Sie auf szellozoszuro.hu durch Auswahl der Marke die kompatiblen Filter finden. Wenn Sie es nicht finden, rufen Sie uns an: +36 20 323 8172.'
            : 'A legegyszerűbb módszer: nézd meg a gép típustábláját (általában a készülék oldalán vagy belsejében található), és keresd meg a pontos modellszámot. Ezt követően a szellozoszuro.hu oldalon a márka kiválasztásával megtalálod a kompatibilis szűrőket. Ha nem találod, hívj minket: +36 20 323 8172.',
        },
      ],
    },
    {
      category: t('faqPage.categories.maintenance'),
      icon: Clock,
      questions: [
        {
          question: t('faq.items.replacement.question'),
          answer: t('faq.items.replacement.answer'),
        },
        {
          question: i18n.language === 'de'
            ? 'Was passiert, wenn ich den Filter nicht rechtzeitig wechsle?'
            : 'Mi történik, ha nem cserélem időben a szűrőt?',
          answer: i18n.language === 'de'
            ? 'Ein verstopfter Filter reduziert den Luftstrom, was zu einer Überlastung des Gerätes und höherem Energieverbrauch führt. Langfristig kann dies den Wärmetauscher und die Ventilatoren beschädigen. Außerdem gelangt bei sinkender Filtereffizienz verunreinigte Luft in die Wohnung. Regelmäßiger Wechsel ist günstiger als eine Gerätereparatur.'
            : 'Az eltömődött szűrő csökkenti a légáramlást, ami a gép túlterheléséhez és magasabb energiafogyasztáshoz vezet. Hosszú távon károsíthatja a hővisszanyerő cellát és a ventilátorokat. Emellett a szűrési hatékonyság csökkenésével szennyezett levegő kerül a lakásba. A rendszeres csere olcsóbb, mint a gép javítása.',
        },
        {
          question: i18n.language === 'de'
            ? 'Kann ich den Filter selbst wechseln?'
            : 'Magam is ki tudom cserélni a szűrőt?',
          answer: i18n.language === 'de'
            ? 'Ja, bei den meisten Wärmerückgewinnungsgeräten ist der Filterwechsel einfach, ein Servicetechniker ist nicht erforderlich. Nach dem Entfernen der Geräteabdeckung kann der alte Filter herausgezogen und der neue eingesetzt werden. Achten Sie auf die Filterrichtung (der Pfeil sollte in Luftstromrichtung zeigen). In unserer Wissensdatenbank finden Sie detaillierte Anleitungen.'
            : 'Igen, a legtöbb hővisszanyerős gépben a szűrőcsere egyszerű, szervizre nem szükséges. A gép fedőlapjának eltávolítása után kihúzható a régi szűrő, és behelyezhető az új. Ügyelj a szűrő irányára (nyíl a légáramlás irányába mutasson). A Tudástárunkban részletes útmutatókat találsz.',
        },
      ],
    },
    {
      category: t('faqPage.categories.orderAndShipping'),
      icon: Truck,
      questions: [
        {
          question: t('faq.items.delivery.question'),
          answer: t('faq.items.delivery.answer'),
        },
        {
          question: i18n.language === 'de'
            ? 'Ist eine persönliche Abholung möglich?'
            : 'Van lehetőség személyes átvételre?',
          answer: i18n.language === 'de'
            ? 'Ja, an unserem Standort in Sopron ist nach vorheriger Vereinbarung eine persönliche Abholung möglich. Für Terminvereinbarungen rufen Sie +36 20 806 9072 an.'
            : 'Igen, soproni telephelyünkön lehetőség van személyes átvételre előzetes egyeztetés után. Időpontfoglaláshoz hívd a +36 20 806 9072 számot.',
        },
        {
          question: i18n.language === 'de'
            ? 'Wie kann ich bezahlen?'
            : 'Hogyan fizethetek?',
          answer: i18n.language === 'de'
            ? 'Wir akzeptieren Kartenzahlung, Banküberweisung und Nachnahme. Die schnellste Lösung ist die Online-Kartenzahlung, nach der wir sofort mit der Bearbeitung der Bestellung beginnen.'
            : 'Elfogadunk bankkártyás fizetést, banki átutalást és utánvétet. A leggyorsabb megoldás az online bankkártyás fizetés, melyet követően azonnal megkezdjük a rendelés feldolgozását.',
        },
      ],
    },
    {
      category: t('faqPage.categories.qualityAndWarranty'),
      icon: Shield,
      questions: [
        {
          question: i18n.language === 'de'
            ? 'Welche Garantie geben Sie auf die Filter?'
            : 'Milyen garanciát vállalnak a szűrőkre?',
          answer: i18n.language === 'de'
            ? 'Auf alle von uns vertriebenen Filter gewähren wir die gesetzlich vorgeschriebene 2-jährige Garantie. Bei Herstellungsfehlern tauschen wir das Produkt kostenlos aus. Bei Unzufriedenheit kann die ungeöffnete Ware innerhalb von 14 Tagen zurückgeschickt werden.'
            : 'Minden általunk forgalmazott szűrőre a jogszabályban előírt 2 év jótállást biztosítunk. Gyártási hiba esetén díjmentesen cseréljük a terméket. Elégedetlenség esetén 14 napon belül visszaküldhető a bontatlan termék.',
        },
        {
          question: i18n.language === 'de'
            ? 'Woher stammen Ihre Filter?'
            : 'Honnan származnak a szűrőitek?',
          answer: i18n.language === 'de'
            ? 'Die Originalfilter stammen von den Original-Herstellern (Zehnder, Helios, Wolf usw.). Die Alternativfilter beziehen wir von sorgfältig ausgewählten europäischen Partnern, mit denen wir seit über 10 Jahren zusammenarbeiten. Alle Filter liefern wir aus unserem eigenen Lagerbestand.'
            : 'A gyári szűrők az eredeti gyártóktól (Zehnder, Helios, Wolf stb.) származnak. Az utángyártott szűrőket gondosan kiválasztott európai partnereinktől szerezzük be, akikkel több mint 10 éve dolgozunk együtt. Minden szűrőt saját raktárkészletből szállítunk.',
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('faqPage.pageTitle')} | szellozoszuro.hu</title>
        <meta name="description" content={t('faqPage.pageDescription')} />
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
                <span className="gradient-cyan-text">{t('faqPage.pageTitle')}</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-2xl">
              {t('faqPage.pageDescription')}
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
                {t('faqPage.notFoundTitle')}
              </h2>
              <p className="text-dark-muted text-lg mb-8">
                {t('faqPage.notFoundDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to={`${langPrefix}/contact`}>
                    {t('faqPage.contactButton')}
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
