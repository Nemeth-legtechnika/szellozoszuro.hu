import { Clock, Filter, Shield, Truck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useFAQ = () => {
  const { t } = useTranslation()

  const categories = [
    {
      category: t('faqPage.categories.filterSelection'),
      icon: Filter,
      questions: [
        {
          id: 1,
          question: t('faq.items.zehnderFilter.question'),
          answer: t('faq.items.zehnderFilter.answer'),
        },
        {
          id: 2,
          question: t('faq.items.filterClass.question'),
          answer: t('faq.items.filterClass.answer'),
        },
        {
          id: 3,
          question: t('faq.items.aftermarket.question'),
          answer: t('faq.items.aftermarket.answer'),
        },
        {
          id: 4,
          question: t('faq.items.findFilter.question'),
          answer: t('faq.items.findFilter.answer'),
        },
      ],
    },
    {
      category: t('faqPage.categories.maintenance'),
      icon: Clock,
      questions: [
        {
          id: 5,
          question: t('faq.items.replacement.question'),
          answer: t('faq.items.replacement.answer'),
        },
        {
          id: 6,
          question: t('faq.items.lateReplacement.question'),
          answer: t('faq.items.lateReplacement.answer'),
        },
        {
          id: 7,
          question: t('faq.items.selfReplacement.question'),
          answer: t('faq.items.selfReplacement.answer'),
        },
      ],
    },
    {
      category: t('faqPage.categories.orderAndShipping'),
      icon: Truck,
      questions: [
        {
          id: 8,
          question: t('faq.items.delivery.question'),
          answer: t('faq.items.delivery.answer'),
        },
        {
          id: 9,
          question: t('faq.items.personalPickup.question'),
          answer: t('faq.items.personalPickup.answer'),
        },
        {
          id: 10,
          question: t('faq.items.payment.question'),
          answer: t('faq.items.payment.answer'),
        },
      ],
    },
    {
      category: t('faqPage.categories.qualityAndWarranty'),
      icon: Shield,
      questions: [
        {
          id: 11,
          question: t('faq.items.warranty.question'),
          answer: t('faq.items.warranty.answer'),
        },
        {
          id: 12,
          question: t('faq.items.filterOrigin.question'),
          answer: t('faq.items.filterOrigin.answer'),
        },
      ],
    },
  ]

  const homeItems = [
    {
      id: 1,
      question: t('faq.items.filterType.question'),
      answer: t('faq.items.filterType.answer'),
    },
    {
      id: 2,
      question: t('faq.items.delivery.question'),
      answer: t('faq.items.delivery.answer'),
    },
    {
      id: 3,
      question: t('faq.items.filterClass.question'),
      answer: t('faq.items.filterClass.answer'),
    },
    {
      id: 4,
      question: t('faq.items.replacement.question'),
      answer: t('faq.items.replacement.answer'),
    },
    {
      id: 5,
      question: t('faq.items.aftermarket.question'),
      answer: t('faq.items.aftermarket.answer'),
    },
  ]

  const allItems = categories.flatMap((category) =>
    category.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    })),
  )

  return { categories, homeItems, allItems }
}

export default useFAQ
