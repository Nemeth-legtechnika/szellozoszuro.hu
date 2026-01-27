import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import faqBgImage from '@/assets/faq-bg.jpg';

const faqItems = [
  {
    question: 'Milyen szűrő való a gépembe?',
    answer: 'A pontos típusválasztáshoz szükséges a gép modellszáma (pl. Vaillant recoVAIR 275, Helios KWL EC 300). Ha bizonytalan vagy, keress minket a +36 20 323 8172 számon, és segítünk azonosítani a megfelelő szűrőt.',
  },
  {
    question: 'Mikor kapom meg a rendelt szűrőket?',
    answer: 'Raktáron lévő termékek: Munkanapokon 24 órán belül átadjuk a futárszolgálatnak. A kiszállítás a GLS-sel általában 1-3 munkanapot vesz igénybe. "Rendelésre" státuszú termékek: A szállítási idő 2-3 hét. Sürgős esetben hívj: +36 20 806 9072!',
  },
  {
    question: 'Mi a különbség a G4 és az F7 szűrőosztály között?',
    answer: 'A G4 durva porszűrő a nagyobb részecskékhez (por, szőr). Az F7 finomszűrő a kisebb részecskéket is kiszűri (finom por, pollenek, baktériumok). Allergiásoknak az F7 kifejezetten ajánlott a belépő levegő oldalán.',
  },
  {
    question: 'Milyen gyakran kell szűrőt cserélni?',
    answer: 'Általában 3-6 havonta, de ez függ a környezettől. Városi, poros környezetben vagy allergiaszezonban gyakoribb csere szükséges. A rendszeres csere biztosítja a hatékony működést és megóvja a hővisszanyerő cellát.',
  },
  {
    question: 'Használhatok utángyártott szűrőt a gyári helyett?',
    answer: 'Igen, az általunk kínált utángyártott szűrők ugyanolyan méretpontossággal és szűrési hatékonysággal rendelkeznek. Német prémium alapanyagból (Sandler AG) készülnek, ISO 16890 tanúsítvánnyal.',
  },
];

const HomeFAQ = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Faded background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${faqBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.18,
        }}
      />
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-cyan" />
              <span className="text-cyan font-medium text-sm uppercase tracking-wider">GYIK</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Gyakran ismételt{' '}
              <span className="gradient-cyan-text">kérdések</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Válaszok a leggyakrabban felmerülő kérdésekre a szűrőválasztásról és cseréről.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card/95 backdrop-blur-sm rounded-xl border border-border px-6 data-[state=open]:border-cyan/30 transition-colors shadow-md"
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

          <div className="text-center mt-8">
            <Link 
              to="/gyik" 
              className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors font-medium"
            >
              Összes kérdés megtekintése
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
