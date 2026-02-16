import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import faqBgImage from '@/assets/faq-bg.jpg';
import usePath from "@/hooks/use-path.tsx";

const HomeFAQ = () => {
  const { t } = useTranslation();
  const paths = usePath();

  const faqItems = [
    {
      questionKey: 'faq.items.filterType.question',
      answerKey: 'faq.items.filterType.answer',
    },
    {
      questionKey: 'faq.items.delivery.question',
      answerKey: 'faq.items.delivery.answer',
    },
    {
      questionKey: 'faq.items.filterClass.question',
      answerKey: 'faq.items.filterClass.answer',
    },
    {
      questionKey: 'faq.items.replacement.question',
      answerKey: 'faq.items.replacement.answer',
    },
    {
      questionKey: 'faq.items.aftermarket.question',
      answerKey: 'faq.items.aftermarket.answer',
    },
  ];

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
          opacity: 0.25,
        }}
      />
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-cyan" />
              <span className="text-cyan font-medium text-sm uppercase tracking-wider">{t('faq.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('faq.title')}{' '}
              <span className="gradient-cyan-text">{t('faq.titleHighlight')}</span>
            </h2>
            <p className="text-foreground/80 text-lg font-medium">
              {t('faq.description')}
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
                  {t(item.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-5 font-medium">
                  {t(item.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link 
              to={paths.faq}
              className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors font-medium"
            >
              {t('faq.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
