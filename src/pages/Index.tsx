import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

import BlogPreview from '@/components/home/BlogPreview'
import BrandSelector from '@/components/home/BrandSelector'
import CtaBanner from '@/components/home/CtaBanner'
import Hero from '@/components/home/Hero'
import HomeFAQ from '@/components/home/HomeFAQ'
import ValueProposition from '@/components/home/ValueProposition'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'

const Index = (): ReactElement => (
  <div className='min-h-screen bg-background'>
    <Helmet>
      <title>Szellőztető Szűrők és Szerviz | Országos Lefedettség | Németh Légtechnika</title>
      <meta
        name='description'
        content='Minőségi hővisszanyerő szűrők szakértőtől. Országos szervizpartneri hálózatunkon keresztül professzionális karbantartást és tisztítást biztosítunk mindenhol Magyarországon!'
      />
      <meta
        name='keywords'
        content='országos szellőztető szerviz, hővisszanyerő tisztítás Magyarország, szellőztető rendszer karbantartás partnerhálózat, szellőztető szűrő, hővisszanyerő szűrő, Vaillant szűrő, Helios szűrő'
      />
      <link rel='canonical' href='https://szellozoszuro.hu/' />
    </Helmet>

    <JsonLdSchema includeLocalBusiness={true} includeOrganization={true} />

    <Header />
    <main>
      <Hero />
      <ValueProposition />
      <BrandSelector />
      <HomeFAQ />
      <BlogPreview />
      <CtaBanner />
    </main>
    <Footer />
  </div>
)

export default Index
