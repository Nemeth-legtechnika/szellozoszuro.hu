import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

import vaillantFilterImage from '@/assets/blog/vaillant-filter-change.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Miért fontos a rendszeres szűrőcsere?',
    excerpt: 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából. Ebben a cikkben részletesen bemutatjuk, milyen károkat okozhat az elhanyagolt karbantartás.',
    image: vaillantFilterImage,
    imageAlt: 'Vaillant hővisszanyerő szellőztető berendezés nyitott ajtóval, F7 és G4 szűrőkkel',
    date: '2024. január 15.',
    author: 'Németh Kálmán',
    slug: 'miert-fontos-a-rendszeres-szurocsere',
    category: 'Karbantartás',
    readTime: '5 perc',
  },
  {
    id: 2,
    title: 'Szűrőosztályok magyarázata: G4 vs F7',
    excerpt: 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján? Részletes összehasonlítás allergiásoknak és egészségtudatos felhasználóknak.',
    content: 'Lorem ipsum dolor sit amet...',
    date: '2024. január 10.',
    author: 'Németh Kálmán',
    slug: 'szuroosztályok-magyarazata',
    category: 'Útmutató',
    readTime: '7 perc',
  },
  {
    id: 3,
    title: 'Téli szellőztetés és páratartalom',
    excerpt: 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok a páralecsapódás és a penészesedés megelőzésére.',
    content: 'Lorem ipsum dolor sit amet...',
    date: '2024. január 5.',
    author: 'Németh Kálmán',
    slug: 'teli-szelloztes-es-paratartalom',
    category: 'Tippek',
    readTime: '6 perc',
  },
  {
    id: 4,
    title: 'Hővisszanyerő rendszer tisztítása lépésről lépésre',
    excerpt: 'Átfogó útmutató a hővisszanyerős szellőztetőrendszer alapos tisztításához. Mikor és hogyan végezd el a karbantartást?',
    content: 'Lorem ipsum dolor sit amet...',
    date: '2023. december 20.',
    author: 'Németh Kálmán',
    slug: 'hovisszanyero-tisztitas',
    category: 'Karbantartás',
    readTime: '10 perc',
  },
  {
    id: 5,
    title: 'Allergiaszezon: Hogyan védd meg otthonodat?',
    excerpt: 'A pollenszezonban különösen fontos a megfelelő levegőminőség. Íme a legjobb tippek allergiásoknak a szűrőválasztástól a karbantartásig.',
    content: 'Lorem ipsum dolor sit amet...',
    date: '2023. december 15.',
    author: 'Németh Kálmán',
    slug: 'allergiaszezon-vedelem',
    category: 'Egészség',
    readTime: '8 perc',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tudástár | szellozoszuro.hu - Légtechnikai szakértelem</title>
        <meta name="description" content="Hasznos cikkek a szellőztetésről, szűrőkarbantartásról és az egészséges beltéri levegőről. A szelloztetes.eu szakmai támogatásával, 15+ év tapasztalattal." />
        <link rel="canonical" href="https://szellozoszuro.hu/blog" />
      </Helmet>
      
      <JsonLdSchema includeLocalBusiness={false} includeOrganization={true} />
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">Tudástár</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl">
              Hasznos cikkek a szellőztetésről, szűrőkarbantartásról és az egészséges beltéri levegőről. 
              A{' '}
              <a 
                href="https://szelloztetes.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                szelloztetes.eu
              </a>{' '}
              szakmai támogatásával, 15+ év tapasztalattal.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full bg-card rounded-2xl border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card overflow-hidden flex flex-col">
                    {/* Post Image */}
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.imageAlt || post.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl opacity-20">📄</div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
