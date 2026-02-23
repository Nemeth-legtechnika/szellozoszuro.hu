import { Helmet } from 'react-helmet-async'

interface JsonLdSchemaProps {
  includeLocalBusiness?: boolean
  includeOrganization?: boolean
  includeFAQ?: boolean
  faqItems?: Array<{
    question: string
    answer: string
  }>
}

const JsonLdSchema = ({
  includeLocalBusiness = true,
  includeOrganization = true,
  includeFAQ = false,
  faqItems = [],
}: JsonLdSchemaProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://szellozoszuro.hu/#organization',
    name: 'Németh Légtechnika Kft.',
    alternateName: 'szellozoszuro.hu',
    url: 'https://szellozoszuro.hu',
    logo: 'https://szellozoszuro.hu/logo.png',
    description:
      'Prémium csereszűrők hővisszanyerős szellőztetőrendszerekhez. Több mint 15 év szakértői tapasztalat a légtechnika területén.',
    foundingDate: '2009',
    founders: [
      {
        '@type': 'Person',
        name: 'Németh Kálmán',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sopron',
      addressCountry: 'HU',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+36-20-806-9072',
        contactType: 'customer service',
        availableLanguage: ['Hungarian'],
        areaServed: 'HU',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+36-20-323-8172',
        contactType: 'technical support',
        availableLanguage: ['Hungarian'],
        areaServed: 'HU',
      },
    ],
    sameAs: ['https://szelloztetes.eu', 'https://hoszivattyu.online', 'https://sopronterv.hu'],
    knowsAbout: [
      'Hővisszanyerős szellőztetőrendszerek',
      'Légtechnikai szűrők',
      'HVAC karbantartás',
      'Beltéri levegőminőség',
      'Hőszivattyús rendszerek',
    ],
    slogan: 'Szakértelem és minőség egy helyen',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://szellozoszuro.hu/#localbusiness',
    name: 'Németh Légtechnika Kft.',
    image: 'https://szellozoszuro.hu/logo.png',
    url: 'https://szellozoszuro.hu',
    telephone: '+36-20-806-9072',
    email: 'office@sopronterv.hu',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sopron',
      addressCountry: 'HU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6817,
      longitude: 16.5845,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    sameAs: ['https://szelloztetes.eu', 'https://hoszivattyu.online', 'https://sopronterv.hu'],
    parentOrganization: {
      '@id': 'https://szellozoszuro.hu/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Hungary',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hővisszanyerő szűrők',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Gyári szűrők',
          description: 'Eredeti gyári minőségű szűrők Zehnder, Helios, Wolf és más márkákhoz',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Utángyártott szűrők',
          description: 'Kiváló minőségű, költséghatékony utángyártott szűrők',
        },
      ],
    },
  }

  const faqSchema =
    includeFAQ && faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <Helmet>
      {includeOrganization && <script type='application/ld+json'>{JSON.stringify(organizationSchema)}</script>}
      {includeLocalBusiness && <script type='application/ld+json'>{JSON.stringify(localBusinessSchema)}</script>}
      {faqSchema && <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>}
    </Helmet>
  )
}

export default JsonLdSchema
