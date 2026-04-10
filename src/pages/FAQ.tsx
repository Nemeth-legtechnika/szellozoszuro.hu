import { ArrowRight, HelpCircle, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import useContact from '@/hooks/use-contact'
import useFAQ from '@/hooks/use-faq'
import usePath from '@/hooks/use-path'

const FAQ = () => {
  const { t } = useTranslation()
  const paths = usePath()
  const { categories: faqData, allItems: allFaqItems } = useFAQ()
  const { technicalContact } = useContact()
  const techPhone = technicalContact.find((c) => c.icon === Phone)

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
            <p className="text-dark-muted text-lg max-w-2xl">{t('faqPage.pageDescription')}</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqData.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id.toString()}
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('faqPage.notFoundTitle')}</h2>
              <p className="text-dark-muted text-lg mb-8">{t('faqPage.notFoundDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to={paths.contact}>
                    {t('faqPage.contactButton')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                {techPhone && (
                  <Button variant="heroOutline" asChild>
                    <a href={techPhone.href}>
                      <Phone className="w-4 h-4" />
                      {techPhone.value}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FAQ
