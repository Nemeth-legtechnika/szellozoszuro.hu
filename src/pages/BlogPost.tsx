import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import vaillantFilterImage from '@/assets/blog/vaillant-filter-change.jpg';
import dandelionPollenImage from '@/assets/blog/dandelion-pollen.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Miért fontos a rendszeres szűrőcsere?',
    excerpt: 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából.',
    heroImage: vaillantFilterImage,
    heroAlt: 'Vaillant hővisszanyerő szellőztető berendezés nyitott ajtóval, F7 és G4 szűrőkkel',
    date: '2024. január 15.',
    author: 'Németh Kálmán',
    slug: 'miert-fontos-a-rendszeres-szurocsere',
    category: 'Karbantartás',
    readTime: '5 perc',
    sections: [
      {
        type: 'intro',
        content: 'Sokan kérdezik tőlünk, hogy mi történik, ha „csak még egy hónapot" marad a régi szűrő a gépben. Szakértőként látjuk a számokat: egy elhanyagolt szűrő nemcsak a levegő minőségét rontja, hanem komoly anyagi károkat is okozhat.',
      },
      {
        type: 'heading',
        title: 'Veszélyben a hőcserélő',
        content: 'A szűrő az első védelmi vonal. Ha telítődik, a finom por átjuthat rajta, és lerakódik a hőcserélő kocka lamellái között. Egy szűrő ára töredéke egy professzionális tisztításnak vagy egy új hőcserélőnek.',
      },
      {
        type: 'heading',
        title: 'Emelkedő villanyszámla',
        content: 'A koszos szűrő nagyobb ellenállást jelent. A gép ventilátorai keményebben dolgoznak, magasabb fordulatszámon pörögnek, ami érezhetően növeli az energiafogyasztást.',
      },
      {
        type: 'heading',
        title: 'Zajterhelés',
        content: 'A fojtott levegőáramlás miatt a rendszer hangosabbá válik, elvész a hővisszanyerős szellőztetés egyik legnagyobb előnye: a csendes, észrevétlen működés.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'Ellenőrizze szűrőit 3-4 havonta, és évente legalább kétszer végezzen teljes cserét!',
      },
    ],
  },
  {
    id: 2,
    title: 'G4, M5 vagy F7? – Segítünk eligazodni a szűrőosztályok között',
    excerpt: 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján?',
    heroImage: dandelionPollenImage,
    heroAlt: 'Pitypang magok repülnek - illusztráció a pollenszűrés fontosságához',
    date: '2024. január 10.',
    author: 'Németh Kálmán',
    slug: 'szuroosztályok-magyarazata',
    category: 'Útmutató',
    readTime: '7 perc',
    sections: [
      {
        type: 'intro',
        content: 'Gyakran tapasztaljuk, hogy a felhasználók elvesznek a betűk és számok rengetegében. A képen látható pitypang gyönyörű, de az allergiásoknak maga az ellenség. Szakértőként segítünk egyszerűen elmagyarázni, melyik szűrő mire való.',
      },
      {
        type: 'heading',
        title: 'G4 (Durva szűrő) – A gép testőre',
        content: 'Ez a "munkás" szűrő. Megfogja a bogarakat, a nagyobb porszöszöket, hajszálakat és a nyárfapelyhet.\n\nCélja: Elsősorban a hővisszanyerő gép mechanikai védelme a nagy szennyeződésektől.',
      },
      {
        type: 'heading',
        title: 'F7 (Finom szűrő) – A család védelmezője',
        content: 'Ez az a szint, ami megállítja a szabad szemmel alig látható veszélyeket: a virágport (pollent), a finomport és a szmog egy részét.\n\nCélja: Az egészséges, tiszta belső levegő biztosítása. Ha allergiás van a családban, vagy forgalmas út mellett laknak, ez a típus elengedhetetlen.',
      },
      {
        type: 'heading',
        title: 'M5 (Közepes szűrő)',
        content: 'Az arany középút. Jobban szűr, mint a G4, de még nem fogja meg a legfinomabb polleneket olyan hatékonysággal, mint az F7.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'A legelterjedtebb és általunk is javasolt kombináció: A friss levegő ágba (amit beszívunk) tegyen F7-es pollenszűrőt az egészsége érdekében, az elszívó ágba pedig elegendő a G4-es, hogy a gépet védje a benti portól.',
      },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | szellozoszuro.hu</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://szellozoszuro.hu/blog/${post.slug}`} />
      </Helmet>

      <JsonLdSchema includeLocalBusiness={false} includeOrganization={true} />

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Vissza a tudástárhoz
            </Link>

            {/* Header Card */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-10 shadow-lg mb-8">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-10 shadow-lg">
              <div className="prose prose-lg max-w-none">
                {post.sections.map((section, index) => {
                  if (section.type === 'intro') {
                    return (
                      <p key={index} className="text-lg text-foreground leading-relaxed mb-8">
                        {section.content}
                      </p>
                    );
                  }

                  if (section.type === 'heading') {
                    return (
                      <div key={index} className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    );
                  }

                  if (section.type === 'callout') {
                    return (
                      <div
                        key={index}
                        className="mt-10 p-6 rounded-xl bg-cyan/10 border-l-4 border-cyan"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-cyan">💡</span>
                          {section.title}
                        </h3>
                        <p className="text-foreground font-medium">
                          {section.content}
                        </p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Szeretné megrendelni a megfelelő szűrőket?
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-primary-foreground font-medium rounded-lg hover:bg-cyan/90 transition-colors"
                >
                  Szűrők böngészése
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Spacer */}
        <div className="h-16 lg:h-24" />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
