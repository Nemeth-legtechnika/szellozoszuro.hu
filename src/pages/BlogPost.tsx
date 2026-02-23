import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import usePath from "@/hooks/use-path";
import vaillantFilterImage from '@/assets/blog/vaillant-filter-change.jpg';
import dandelionPollenImage from '@/assets/blog/dandelion-pollen.jpg';
import winterHumidityImage from '@/assets/blog/winter-humidity.jpg';
import ductCleaningImage from '@/assets/blog/duct-cleaning.jpg';
import filterClassesChartImage from '@/assets/blog/filter-classes-chart.jpg';
import allergySeasonHeroImage from '@/assets/blog/allergy-season-hero-generated.jpg';
import aftermarketFiltersImage from '@/assets/blog/aftermarket-filters.jpg';

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
        type: 'heading',
        title: 'F9 / ePM1 – Prémium védelem és nagyvárosi szmogszűrés',
        content: 'A legmagasabb szintű szűrés, amely már a láthatatlan koromszemcséket, a baktériumok egy részét és a szmogért felelős mikroporokat is megfogja.\n\nMikor válassza? Ha forgalmas út mellett lakik, nagyvárosi környezetben él, vagy asztmával küzd.\n\nMikor ne válassza? Téli időszakban, ahol magas páratartalom és a levegőben található apró korom részecskék nagyon gyorsan eltömíthetik. Tehát ebben az időszakban lerövidül a minőségi védelem időszaka.\n\nFontos: Az ePM1 minősítésű szűrők (minél magasabb a százalékos érték, annál jobb) nyújtják a legtisztább levegőt.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'A legelterjedtebb és általunk is javasolt kombináció: A friss levegő ágba (amit beszívunk) tegyen F7-es pollenszűrőt az egészsége érdekében, az elszívó ágba pedig elegendő a G4-es, hogy a gépet védje a benti portól.',
      },
    ],
  },
  {
    id: 3,
    title: 'Száraz levegő és nedves szűrők? – A téli szellőztetés buktatói szakértői szemmel',
    excerpt: 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok a páralecsapódás és a penészesedés megelőzésére.',
    heroImage: winterHumidityImage,
    heroAlt: 'Szellőztető vezérlő panel 25% páratartalommal téli környezetben, szűrővel a háttérben',
    date: '2024. január 5.',
    author: 'Németh Kálmán',
    slug: 'teli-szelloztes-es-paratartalom',
    category: 'Tippek',
    readTime: '6 perc',
    sections: [
      {
        type: 'intro',
        content: 'Télen sokan tapasztalják, hogy a benti levegő páratartalma drasztikusan lecsökken, ami torokszárazsághoz és komfortérzet-csökkenéshez vezet. A képen látható 25%-os páratartalom tipikus példája ennek. Szakértőként azonban látjuk a folyamat másik, rejtett oldalát is, ami a gép belsejében zajlik.',
      },
      {
        type: 'heading',
        title: 'Miért olyan száraz a téli levegő?',
        content: 'A kinti hideg levegő kevés párát tartalmaz, és amint a gép felmelegíti, a relatív páratartalom leesik. Ezen a modern entalpia hőcserélők segíthetnek, de a rendszer lelke továbbra is a tiszta szűrő marad. Itt jön a képbe egy kritikus összefüggés:',
      },
      {
        type: 'heading',
        title: 'A nedvesség és a koszos szűrő veszélyes párosa',
        content: 'A téli párás, ködös időben a külső szűrőbetétek (különösen a papír alapúak) óhatatlanul benedvesednek. Ha a szűrő már telített és koszos, a sűrű porréteg megköti a nedvességet, és a szűrő nem tud gyorsan, hatékonyan kiszáradni.',
      },
      {
        type: 'heading',
        title: 'Ennek súlyos következményei lehetnek',
        content: '• Kellemetlen szagok: A tartósan nedves porrétegben mikroorganizmusok szaporodhatnak el, dohos szagot árasztva a lakásban.\n\n• Strukturális deformáció: A nedvességtől átázott, nehéz és koszos szűrőkeret vagy betét eldeformálódhat.\n\n• Gépkárosodás: Az eldeformálódott szűrő mellett a levegő szűretlenül szökik el, így a szennyeződés közvetlenül a méregdrága hőcserélő kockát kezdi el tömíteni.',
      },
      {
        type: 'heading',
        title: 'A megoldás kulcsa',
        content: 'A tiszta szűrő tehát télen nemcsak a levegőminőség záloga, hanem a gép fizikai épségének és a szagtalan működésnek is az alapfeltétele.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'Ha télen 40% alatti páratartalmat mér, vegye lejjebb a szellőztetés intenzitását! De ne feledje: a tiszta szűrő ilyenkor is kulcsfontosságú, hogy elkerülje a nedvesség okozta deformációt és a kellemetlen szagokat.',
      },
    ],
  },
  {
    id: 4,
    title: 'A szellőztető rendszer tisztítása és a csőhálózat védelme',
    excerpt: 'Mikor és hogyan végezd el a karbantartást? Átfogó útmutató a légcsatornák védelméhez és a szakértői tisztításhoz.',
    heroImage: ductCleaningImage,
    heroAlt: 'Légcsatorna belülről nézve - tisztítás előtti állapot',
    date: '2023. december 20.',
    author: 'Németh Kálmán',
    slug: 'szellozteto-tisztitas-csohalozat',
    category: 'Karbantartás',
    readTime: '8 perc',
    sections: [
      {
        type: 'intro',
        content: 'A szűrők rendszeres cseréje mellett a teljes rendszer (gép és légcsatornák) időszakos tisztítása elengedhetetlen. Szakértői tapasztalatunk szerint legkésőbb 2 évente javasolt a hálózat teljes átvizsgálása és fertőtlenítése. Ez az az időtáv, ami felett a lerakódások már érezhetően ronthatják a rendszer hatékonyságát.',
      },
      {
        type: 'heading',
        title: 'Mikor jön el a tisztítás ideje?',
        content: 'A szakértői ajánlás egyértelmű: legkésőbb 2 évente érdemes a teljes rendszert átvizsgáltatni és fertőtleníttetni. Ez az az időtáv, ami felett a lerakódások már érezhetően ronthatják a rendszer hatékonyságát és a beltéri levegő minőségét.',
      },
      {
        type: 'heading',
        title: 'Az elszívó csőhálózat védelme: A láthatatlan veszély',
        content: 'Sokan csak a gépben lévő szűrőkre koncentrálnak, de a rendszer tisztasága már az elszívási pontokon (konyha, fürdő, WC) eldől. Ha a szelepcsatlakozóknál szabadon hagyjuk az elszívó oldalt, egy veszélyes láncreakció indul el:',
      },
      {
        type: 'heading',
        title: 'Lerakódás és szűkülő keresztmetszet',
        content: 'A bejutott por, szösz és konyhai pára elkezd a cső belső falára lerakódni. Ez a réteg folyamatosan vastagszik, így a cső hasznos keresztmetszete egyre kisebb lesz.',
      },
      {
        type: 'heading',
        title: 'Ventilátor túlterhelés',
        content: 'A szűkebb keresztmetszet miatt a gépnek sokkal nagyobb ellenállást kell legyőznie. A ventilátorok magasabb fordulatszámon, folyamatosan nagyobb terhelés mellett dolgoznak.',
      },
      {
        type: 'heading',
        title: 'Meghibásodás',
        content: 'Ez a folyamatos erőltetés előbb-utóbb a ventilátor motorjának idő előtti, költséges meghibásodásához vezet.',
      },
      {
        type: 'heading',
        title: 'A megoldás: G2 szűrőpaplan és szakértői karbantartás',
        content: 'A megoldás egyszerűbb, mint gondolná: a szelepcsatlakozókba helyezhető G2 szűrőpaplan (kónuszos szűrő) megállítja a szennyeződést még a belépési ponton. Ezzel nemcsak a csőhálózat tisztasága őrizhető meg, hanem a szellőztető gép élettartama is jelentősen meghosszabbítható.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'A szűrőcsere (és a szelepszűrők használata) az Ön feladata, de a belső géptisztítást és a fertőtlenítést bízza szakemberre! A 2 évente elvégzett karbantartás garantálja a csendes működést és a higiénikus otthont.',
      },
    ],
  },
  {
    id: 5,
    title: 'Allergiaszezon: Így varázsolja pollenmentes menedékké otthonát!',
    excerpt: 'Közeleg a tavasz és a pollenszezon? Az allergiások számára az otthonuknak a biztonság szigetének kellene lennie. Megmutatjuk, hogyan érheti el ezt az F7-es szűrőkkel.',
    heroImage: allergySeasonHeroImage,
    heroAlt: 'Család költözik új otthonába - tiszta levegő és pollenmentes környezet',
    date: '2024. február 1.',
    author: 'Németh Kálmán',
    slug: 'allergiaszezon-pollenmentes-otthon',
    category: 'Egészség',
    readTime: '6 perc',
    sections: [
      {
        type: 'intro',
        content: 'Közeleg a tavasz, és vele együtt a pollenszezon is? Az allergiások számára az otthonuknak a biztonság szigetének kellene lennie. A szelloztetes.eu szakmai tapasztalatai alapján mutatjuk be, hogyan érheti ezt el.',
      },
      {
        type: 'heading',
        title: 'Miért nem elég a sima szűrő?',
        content: 'A legtöbb szellőztető gép alapfelszereltsége a G4-es szűrő. A G4-es osztály csak a nagyobb porszöszöket és bogarakat fogja meg. A pollenszemcsék (melyek mérete gyakran 10-100 µm között van) könnyedén átjutnak rajta.',
      },
      {
        type: 'heading',
        title: 'Az F7-es szűrő: A pollenmentes otthon záloga',
        content: 'A megoldás az F7-es (ePM1) finompor-szűrő alkalmazása a friss levegő ágban.\n\nHatékonyság: Ez a szűrőosztály már a 0,3-1 µm közötti részecskék jelentős részét is megfogja, a pollent pedig szinte 100%-os hatékonysággal szűri ki.\n\nÉletminőség: Nincs többé tüsszögés, vörös szemek és éjszakai nehézlégzés a saját lakásában.',
      },
      {
        type: 'heading',
        title: 'Szakértői tippek az allergiaszezonra',
        content: '• Időzített csere: Ne várja meg a szezon csúcsát! Cserélje le szűrőit már február végén vagy március elején.\n\n• Szelepvédelem: Ne felejtse el az elszívó oldali szelepek védelmét sem (G2 kónuszos szűrőkkel), hogy a rendszer minden pontja tiszta maradjon.\n\n• Ellenőrzés: Ha nagyon magas a porkoncentráció (pl. útépítés vagy intenzív virágzás a környéken), havonta nézzen rá az F7-es szűrő állapotára!',
      },
      {
        type: 'heading',
        title: 'Kövessen minket Facebookon is!',
        content: 'Folyamatosan frissülő tanácsokért, videós segítségért és aktuális akciókért látogasson el Facebook oldalunkra is. Ott közösségünk tagjaként azonnal értesülhet a legújabb technológiákról és karbantartási tippekről.',
      },
      {
        type: 'image',
        image: filterClassesChartImage,
        imageAlt: 'Szűrőosztályok hatékonysági táblázata - a G1-től F9-ig terjedő osztályok összehasonlítása szemcseméret szerint',
        caption: 'A szűrőosztályok és hatékonyságuk különböző szemcseméreteknél. Jól látható, hogy csak az F7-es és magasabb osztály nyújt valódi védelmet a pollen ellen.',
      },
      {
        type: 'callout',
        title: 'Készen áll az allergiaszezonra?',
        content: 'Vásároljon F7-es pollenszűrőt a gépéhez, és élvezze a pollenmentes, tiszta levegőt otthonában! Webshopunkban megtalálja a legtöbb gyártó OEM és utángyártott szűrőit is.',
      },
    ],
  },
  {
    id: 6,
    title: 'Utángyártott szellőzőszűrők: Hogyan válasszunk, hogy ne legyen bosszúság a vége?',
    excerpt: 'Létezik okos megtakarítás a hatékonyság feláldozása nélkül? Szakértőként eláruljuk, mire figyeljen utángyártott szűrők vásárlásakor.',
    heroImage: aftermarketFiltersImage,
    heroAlt: 'G4 és F7 szűrők összehasonlítása - szűrési osztályok táblázattal',
    date: '2024. február 10.',
    author: 'Németh Kálmán',
    slug: 'utangyartott-szurok-valasztas',
    category: 'Vásárlási tanács',
    readTime: '6 perc',
    sections: [
      {
        type: 'intro',
        content: 'A hővisszanyerős szellőztető rendszerek tulajdonosaiként tudjuk: a szűrőcsere a gép lelke. Sokan tartanak az utángyártott megoldásoktól, de szakértőként eláruljuk: létezik okos megtakarítás a hatékonyság feláldozása nélkül is.',
      },
      {
        type: 'heading',
        title: 'Miért lehet „bosszantó" egy rossz minőségű utángyártott szűrő?',
        content: 'A nem megfelelő szűrők két fő problémát okozhatnak:\n\n• Túl magas légellenállás: Ha az anyag nem megfelelő, a ventilátornak nagyobb erővel kell dolgoznia. Ez magasabb villanyszámlát és a motor idő előtti elhasználódását eredményezi.\n\n• Gyenge szűrési hatékonyság: Ha az anyag szerkezete nem fogja meg a finomport, az lerakódik a hőcserélőben és a csövekben, ami később méregdrága tisztítást igényel.',
      },
      {
        type: 'heading',
        title: '4 dolog, amit mi garantálunk szakértőként',
        content: 'A szellozoszuro.hu kínálatának összeállításakor mi már elvégeztük a szűrést Ön helyett:',
      },
      {
        type: 'heading',
        title: '1. Német prémium alapanyag (Sandler AG)',
        content: 'Csak olyan szintetikus anyagokat használunk, amelyek légáteresztése pontosan megfelel a gyári (Vaillant, Bosch, Helios, stb.) előírásoknak.',
      },
      {
        type: 'heading',
        title: '2. ISO 16890 tanúsítvány',
        content: 'Szűrőinket akkreditált laboratóriumokban tesztelik. Az ePM1 70% nálunk valóban a szmog és pollenek megfogását jelenti.',
      },
      {
        type: 'heading',
        title: '3. PFAS-mentes és higiénikus',
        content: 'Megfelelnek a VDI 6022 előírásoknak, így nem juttatnak káros vegyi anyagokat otthonába.',
      },
      {
        type: 'heading',
        title: '4. Pontos illeszkedés',
        content: 'Termékeink (legyen szó Wolf, Zehnder vagy Stiebel Eltron típusról) milliméterre pontosan illeszkednek a gyári foglalatba.',
      },
      {
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content: 'Ne csak az árat nézze! Egy silány szűrő okozta motorcsere tíz évnyi megtakarítást emészthet fel egyetlen nap alatt. Válasszon tesztelt minőséget!',
      },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const paths = usePath();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to={paths.blog.base} replace />;
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
              to={paths.blog.base}
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

                  if (section.type === 'image') {
                    return (
                      <div key={index} className="my-10">
                        <img
                          src={section.image}
                          alt={section.imageAlt}
                          className="w-full rounded-xl border border-border shadow-md"
                        />
                        {section.caption && (
                          <p className="mt-3 text-sm text-muted-foreground text-center italic">
                            {section.caption}
                          </p>
                        )}
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
                  to={paths.shop}
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
