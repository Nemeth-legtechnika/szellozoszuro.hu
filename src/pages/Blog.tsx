import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import usePath from "@/hooks/use-path";

import vaillantFilterImage from '@/assets/blog/vaillant-filter-change.jpg';
import dandelionPollenImage from '@/assets/blog/dandelion-pollen.jpg';
import winterHumidityImage from '@/assets/blog/winter-humidity.jpg';
import ductCleaningImage from '@/assets/blog/duct-cleaning.jpg';
import allergySeasonHeroImage from '@/assets/blog/allergy-season-hero-generated.jpg';
import aftermarketFiltersImage from '@/assets/blog/aftermarket-filters.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Miért fontos a rendszeres szűrőcsere?',
    titleDe: 'Warum ist der regelmäßige Filterwechsel wichtig?',
    excerpt: 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából. Ebben a cikkben részletesen bemutatjuk, milyen károkat okozhat az elhanyagolt karbantartás.',
    excerptDe: 'Der rechtzeitige Wechsel des Filters in Ihrer Wärmerückgewinnungsanlage ist entscheidend für die Luftqualität und die Lebensdauer des Gerätes. In diesem Artikel zeigen wir detailliert, welche Schäden vernachlässigte Wartung verursachen kann.',
    image: vaillantFilterImage,
    imageAlt: 'Vaillant hővisszanyerő szellőztető berendezés nyitott ajtóval, F7 és G4 szűrőkkel',
    date: '2024. január 15.',
    dateDe: '15. Januar 2024',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'miert-fontos-a-rendszeres-szurocsere',
    category: 'Karbantartás',
    categoryDe: 'Wartung',
    readTime: '5 perc',
    readTimeDe: '5 Min.',
  },
  {
    id: 2,
    title: 'G4, M5 vagy F7? – Segítünk eligazodni a szűrőosztályok között',
    titleDe: 'G4, M5 oder F7? – Wir helfen Ihnen bei der Orientierung zwischen den Filterklassen',
    excerpt: 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján? Részletes összehasonlítás allergiásoknak és egészségtudatos felhasználóknak.',
    excerptDe: 'Was ist der Unterschied zwischen Grobstaubfilter und Feinpollenfilter? Welchen sollten Sie nach Ihren Bedürfnissen wählen? Detaillierter Vergleich für Allergiker und gesundheitsbewusste Nutzer.',
    image: dandelionPollenImage,
    imageAlt: 'Pitypang magok repülnek - illusztráció a pollenszűrés fontosságához',
    date: '2024. január 10.',
    dateDe: '10. Januar 2024',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'szuroosztályok-magyarazata',
    category: 'Útmutató',
    categoryDe: 'Anleitung',
    readTime: '7 perc',
    readTimeDe: '7 Min.',
  },
  {
    id: 3,
    title: 'Száraz levegő és nedves szűrők? – A téli szellőztetés buktatói',
    titleDe: 'Trockene Luft und nasse Filter? – Die Tücken der Winterlüftung',
    excerpt: 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok a páralecsapódás és a penészesedés megelőzésére.',
    excerptDe: 'Wie gehen Sie mit den Feuchtigkeitsproblemen der Winterzeit bei Ihrer Wärmerückgewinnungsanlage um? Praktische Tipps zur Vermeidung von Kondensation und Schimmelbildung.',
    image: winterHumidityImage,
    imageAlt: 'Szellőztető vezérlő panel 25% páratartalommal téli környezetben',
    date: '2024. január 5.',
    dateDe: '5. Januar 2024',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'teli-szelloztes-es-paratartalom',
    category: 'Tippek',
    categoryDe: 'Tipps',
    readTime: '6 perc',
    readTimeDe: '6 Min.',
  },
  {
    id: 4,
    title: 'A szellőztető rendszer tisztítása és a csőhálózat védelme',
    titleDe: 'Reinigung der Lüftungsanlage und Schutz des Rohrnetzwerks',
    excerpt: 'Mikor és hogyan végezd el a karbantartást? Átfogó útmutató a légcsatornák védelméhez és a szakértői tisztításhoz.',
    excerptDe: 'Wann und wie führen Sie die Wartung durch? Umfassende Anleitung zum Schutz der Luftkanäle und zur fachgerechten Reinigung.',
    image: ductCleaningImage,
    imageAlt: 'Légcsatorna belülről nézve - tisztítás előtti állapot',
    date: '2023. december 20.',
    dateDe: '20. Dezember 2023',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'szellozteto-tisztitas-csohalozat',
    category: 'Karbantartás',
    categoryDe: 'Wartung',
    readTime: '8 perc',
    readTimeDe: '8 Min.',
  },
  {
    id: 5,
    title: 'Allergiaszezon: Így varázsolja pollenmentes menedékké otthonát!',
    titleDe: 'Allergiesaison: So verwandeln Sie Ihr Zuhause in eine pollenfreie Oase!',
    excerpt: 'Közeleg a tavasz és a pollenszezon? Az allergiások számára az otthonuknak a biztonság szigetének kellene lennie. Megmutatjuk, hogyan érheti el ezt az F7-es szűrőkkel.',
    excerptDe: 'Der Frühling und die Pollensaison stehen vor der Tür? Für Allergiker sollte ihr Zuhause eine Insel der Sicherheit sein. Wir zeigen Ihnen, wie Sie dies mit F7-Filtern erreichen können.',
    image: allergySeasonHeroImage,
    imageAlt: 'Család költözik új otthonába - tiszta levegő és pollenmentes környezet',
    date: '2024. február 1.',
    dateDe: '1. Februar 2024',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'allergiaszezon-pollenmentes-otthon',
    category: 'Egészség',
    categoryDe: 'Gesundheit',
    readTime: '6 perc',
    readTimeDe: '6 Min.',
  },
  {
    id: 6,
    title: 'Utángyártott szellőzőszűrők: Hogyan válasszunk, hogy ne legyen bosszúság a vége?',
    titleDe: 'Alternativfilter für Lüftungsanlagen: Wie wählt man richtig, um Ärger zu vermeiden?',
    excerpt: 'Létezik okos megtakarítás a hatékonyság feláldozása nélkül? Szakértőként eláruljuk, mire figyeljen utángyártott szűrők vásárlásakor.',
    excerptDe: 'Gibt es kluges Sparen ohne Effizienzeinbußen? Als Experten verraten wir Ihnen, worauf Sie beim Kauf von Alternativfiltern achten sollten.',
    image: aftermarketFiltersImage,
    imageAlt: 'G4 és F7 szűrők összehasonlítása - szűrési osztályok táblázattal',
    date: '2024. február 10.',
    dateDe: '10. Februar 2024',
    author: 'Németh Kálmán',
    authorDe: 'Kálmán Németh',
    slug: 'utangyartott-szurok-valasztas',
    category: 'Vásárlási tanács',
    categoryDe: 'Kaufberatung',
    readTime: '6 perc',
    readTimeDe: '6 Min.',
  },
];

const Blog = () => {
  const { t, i18n } = useTranslation();
  const paths = usePath();
  const isGerman = i18n.language === 'de';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('blogPage.pageTitle')} | szellozoszuro.hu</title>
        <meta name="description" content={t('blogPage.pageDescription')} />
      </Helmet>
      
      <JsonLdSchema includeLocalBusiness={false} includeOrganization={true} />
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">{t('blogPage.pageTitle')}</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl">
              {t('blogPage.pageDescription')}
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
                  to={paths.blog.getPost(post.slug)}
                  className="group block"
                >
                  <article className="h-full bg-card rounded-2xl border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card overflow-hidden flex flex-col">
                    {/* Post Image */}
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.imageAlt || (isGerman ? post.titleDe : post.title)} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl opacity-20">📄</div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                          {isGerman ? post.categoryDe : post.category}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {isGerman ? post.readTimeDe : post.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                        {isGerman ? post.titleDe : post.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {isGerman ? post.excerptDe : post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {isGerman ? post.authorDe : post.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {isGerman ? post.dateDe : post.date}
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
