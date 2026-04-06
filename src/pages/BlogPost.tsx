import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'

import aftermarketFiltersImage from '@/assets/images/blog/aftermarket-filters.jpg'
import aktivSzenHeroImage from '@/assets/images/blog/aktiv-szen-hero.jpg'
import allergySeasonHeroImage from '@/assets/images/blog/allergy-season-hero-generated.jpg'
import cleanDuctImage from '@/assets/images/blog/clean-duct-interior.jpg'
import dandelionPollenImage from '@/assets/images/blog/dandelion-pollen.jpg'
import dirtyDuctImage from '@/assets/images/blog/dirty-duct-interior.jpg'
import dirtyFiltersImage from '@/assets/images/blog/dirty-filters-used.jpg'
import ductCleaningImage from '@/assets/images/blog/duct-cleaning.jpg'
import filterClassesChartImage from '@/assets/images/blog/filter-classes-chart.jpg'
import foggyMorningImage from '@/assets/images/blog/foggy-morning-condensation.jpg'
import vaillantFilterImage from '@/assets/images/blog/vaillant-filter-change.jpg'
import vaillantMukFiltersImage from '@/assets/images/blog/vaillant-muk-filters.png'
import winterHumidityImage from '@/assets/images/blog/winter-humidity.jpg'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import usePath from '@/hooks/use-path'

const blogPosts = [
  {
    id: 1,
    title: 'Miért fontos a rendszeres szűrőcsere?',
    excerpt:
      'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából.',
    heroImage: vaillantFilterImage,
    heroAlt: 'Vaillant hővisszanyerő szellőztető berendezés nyitott ajtóval, F7 és G4 szűrőkkel',
    date: '2024. január 15.',
    author: 'Németh Kálmán',
    slug: 'miert-fontos-a-rendszeres-szurocsere',
    category: 'Karbantartás',
    readTime: '5 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Sokan kérdezik tőlünk, hogy mi történik, ha „csak még egy hónapot" marad a régi szűrő a gépben. Szakértőként látjuk a számokat: egy elhanyagolt szűrő nemcsak a levegő minőségét rontja, hanem komoly anyagi károkat is okozhat.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'Veszélyben a hőcserélő',
        content:
          'A szűrő az első védelmi vonal. Ha telítődik, a finom por átjuthat rajta, és lerakódik a hőcserélő kocka lamellái között. Egy szűrő ára töredéke egy professzionális tisztításnak vagy egy új hőcserélőnek.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'Emelkedő villanyszámla',
        content:
          'A koszos szűrő nagyobb ellenállást jelent. A gép ventilátorai keményebben dolgoznak, magasabb fordulatszámon pörögnek, ami érezhetően növeli az energiafogyasztást.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'Zajterhelés',
        content:
          'A fojtott levegőáramlás miatt a rendszer hangosabbá válik, elvész a hővisszanyerős szellőztetés egyik legnagyobb előnye: a csendes, észrevétlen működés.',
      },
      {
        id: 5,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'Ellenőrizze szűrőit 3-4 havonta, és évente legalább kétszer végezzen teljes cserét!',
      },
    ],
  },
  {
    id: 2,
    title: 'G4, M5 vagy F7? – Segítünk eligazodni a szűrőosztályok között',
    excerpt:
      'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján?',
    heroImage: dandelionPollenImage,
    heroAlt: 'Pitypang magok repülnek - illusztráció a pollenszűrés fontosságához',
    date: '2024. január 10.',
    author: 'Németh Kálmán',
    slug: 'szuroosztályok-magyarazata',
    category: 'Útmutató',
    readTime: '7 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Gyakran tapasztaljuk, hogy a felhasználók elvesznek a betűk és számok rengetegében. A képen látható pitypang gyönyörű, de az allergiásoknak maga az ellenség. Szakértőként segítünk egyszerűen elmagyarázni, melyik szűrő mire való.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'G4 (Durva szűrő) – A gép testőre',
        content:
          'Ez a "munkás" szűrő. Megfogja a bogarakat, a nagyobb porszöszöket, hajszálakat és a nyárfapelyhet.\n\nCélja: Elsősorban a hővisszanyerő gép mechanikai védelme a nagy szennyeződésektől.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'F7 (Finom szűrő) – A család védelmezője',
        content:
          'Ez az a szint, ami megállítja a szabad szemmel alig látható veszélyeket: a virágport (pollent), a finomport és a szmog egy részét.\n\nCélja: Az egészséges, tiszta belső levegő biztosítása. Ha allergiás van a családban, vagy forgalmas út mellett laknak, ez a típus elengedhetetlen.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'M5 (Közepes szűrő)',
        content:
          'Az arany középút. Jobban szűr, mint a G4, de még nem fogja meg a legfinomabb polleneket olyan hatékonysággal, mint az F7.',
      },
      {
        id: 5,
        type: 'heading',
        title: 'F9 / ePM1 – Prémium védelem és nagyvárosi szmogszűrés',
        content:
          'A legmagasabb szintű szűrés, amely már a láthatatlan koromszemcséket, a baktériumok egy részét és a szmogért felelős mikroporokat is megfogja.\n\nMikor válassza? Ha forgalmas út mellett lakik, nagyvárosi környezetben él, vagy asztmával küzd.\n\nMikor ne válassza? Téli időszakban, ahol magas páratartalom és a levegőben található apró korom részecskék nagyon gyorsan eltömíthetik. Tehát ebben az időszakban lerövidül a minőségi védelem időszaka.\n\nFontos: Az ePM1 minősítésű szűrők (minél magasabb a százalékos érték, annál jobb) nyújtják a legtisztább levegőt.',
      },
      {
        id: 6,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'A legelterjedtebb és általunk is javasolt kombináció: A friss levegő ágba (amit beszívunk) tegyen F7-es pollenszűrőt az egészsége érdekében, az elszívó ágba pedig elegendő a G4-es, hogy a gépet védje a benti portól.',
      },
    ],
  },
  {
    id: 3,
    title: 'Száraz levegő és nedves szűrők? – A téli szellőztetés buktatói szakértői szemmel',
    excerpt:
      'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok a páralecsapódás és a penészesedés megelőzésére.',
    heroImage: winterHumidityImage,
    heroAlt:
      'Szellőztető vezérlő panel 25% páratartalommal téli környezetben, szűrővel a háttérben',
    date: '2024. január 5.',
    author: 'Németh Kálmán',
    slug: 'teli-szelloztes-es-paratartalom',
    category: 'Tippek',
    readTime: '6 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Télen sokan tapasztalják, hogy a benti levegő páratartalma drasztikusan lecsökken, ami torokszárazsághoz és komfortérzet-csökkenéshez vezet. A képen látható 25%-os páratartalom tipikus példája ennek. Szakértőként azonban látjuk a folyamat másik, rejtett oldalát is, ami a gép belsejében zajlik.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'Miért olyan száraz a téli levegő?',
        content:
          'A kinti hideg levegő kevés párát tartalmaz, és amint a gép felmelegíti, a relatív páratartalom leesik. Ezen a modern entalpia hőcserélők segíthetnek, de a rendszer lelke továbbra is a tiszta szűrő marad. Itt jön a képbe egy kritikus összefüggés:',
      },
      {
        id: 3,
        type: 'heading',
        title: 'A nedvesség és a koszos szűrő veszélyes párosa',
        content:
          'A téli párás, ködös időben a külső szűrőbetétek (különösen a papír alapúak) óhatatlanul benedvesednek. Ha a szűrő már telített és koszos, a sűrű porréteg megköti a nedvességet, és a szűrő nem tud gyorsan, hatékonyan kiszáradni.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'Ennek súlyos következményei lehetnek',
        content:
          '• Kellemetlen szagok: A tartósan nedves porrétegben mikroorganizmusok szaporodhatnak el, dohos szagot árasztva a lakásban.\n\n• Strukturális deformáció: A nedvességtől átázott, nehéz és koszos szűrőkeret vagy betét eldeformálódhat.\n\n• Gépkárosodás: Az eldeformálódott szűrő mellett a levegő szűretlenül szökik el, így a szennyeződés közvetlenül a méregdrága hőcserélő kockát kezdi el tömíteni.',
      },
      {
        id: 5,
        type: 'heading',
        title: 'A megoldás kulcsa',
        content:
          'A tiszta szűrő tehát télen nemcsak a levegőminőség záloga, hanem a gép fizikai épségének és a szagtalan működésnek is az alapfeltétele.',
      },
      {
        id: 6,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'Ha télen 40% alatti páratartalmat mér, vegye lejjebb a szellőztetés intenzitását! De ne feledje: a tiszta szűrő ilyenkor is kulcsfontosságú, hogy elkerülje a nedvesség okozta deformációt és a kellemetlen szagokat.',
      },
    ],
  },
  {
    id: 4,
    title: 'A szellőztető rendszer tisztítása és a csőhálózat védelme',
    excerpt:
      'Mikor és hogyan végezd el a karbantartást? Átfogó útmutató a légcsatornák védelméhez és a szakértői tisztításhoz.',
    heroImage: ductCleaningImage,
    heroAlt: 'Légcsatorna belülről nézve - tisztítás előtti állapot',
    date: '2023. december 20.',
    author: 'Németh Kálmán',
    slug: 'szellozteto-tisztitas-csohalozat',
    category: 'Karbantartás',
    readTime: '8 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'A szűrők rendszeres cseréje mellett a teljes rendszer (gép és légcsatornák) időszakos tisztítása elengedhetetlen. Szakértői tapasztalatunk szerint legkésőbb 2 évente javasolt a hálózat teljes átvizsgálása és fertőtlenítése. Ez az az időtáv, ami felett a lerakódások már érezhetően ronthatják a rendszer hatékonyságát.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'Mikor jön el a tisztítás ideje?',
        content:
          'A szakértői ajánlás egyértelmű: legkésőbb 2 évente érdemes a teljes rendszert átvizsgáltatni és fertőtleníttetni. Ez az az időtáv, ami felett a lerakódások már érezhetően ronthatják a rendszer hatékonyságát és a beltéri levegő minőségét.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'Az elszívó csőhálózat védelme: A láthatatlan veszély',
        content:
          'Sokan csak a gépben lévő szűrőkre koncentrálnak, de a rendszer tisztasága már az elszívási pontokon (konyha, fürdő, WC) eldől. Ha a szelepcsatlakozóknál szabadon hagyjuk az elszívó oldalt, egy veszélyes láncreakció indul el:',
      },
      {
        id: 4,
        type: 'heading',
        title: 'Lerakódás és szűkülő keresztmetszet',
        content:
          'A bejutott por, szösz és konyhai pára elkezd a cső belső falára lerakódni. Ez a réteg folyamatosan vastagszik, így a cső hasznos keresztmetszete egyre kisebb lesz.',
      },
      {
        id: 5,
        type: 'heading',
        title: 'Ventilátor túlterhelés',
        content:
          'A szűkebb keresztmetszet miatt a gépnek sokkal nagyobb ellenállást kell legyőznie. A ventilátorok magasabb fordulatszámon, folyamatosan nagyobb terhelés mellett dolgoznak.',
      },
      {
        id: 6,
        type: 'heading',
        title: 'Meghibásodás',
        content:
          'Ez a folyamatos erőltetés előbb-utóbb a ventilátor motorjának idő előtti, költséges meghibásodásához vezet.',
      },
      {
        id: 7,
        type: 'heading',
        title: 'A megoldás: G2 szűrőpaplan és szakértői karbantartás',
        content:
          'A megoldás egyszerűbb, mint gondolná: a szelepcsatlakozókba helyezhető G2 szűrőpaplan (kónuszos szűrő) megállítja a szennyeződést még a belépési ponton. Ezzel nemcsak a csőhálózat tisztasága őrizhető meg, hanem a szellőztető gép élettartama is jelentősen meghosszabbítható.',
      },
      {
        id: 8,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'A szűrőcsere (és a szelepszűrők használata) az Ön feladata, de a belső géptisztítást és a fertőtlenítést bízza szakemberre! A 2 évente elvégzett karbantartás garantálja a csendes működést és a higiénikus otthont.',
      },
    ],
  },
  {
    id: 5,
    title: 'Allergiaszezon: Így varázsolja pollenmentes menedékké otthonát!',
    excerpt:
      'Közeleg a tavasz és a pollenszezon? Az allergiások számára az otthonuknak a biztonság szigetének kellene lennie. Megmutatjuk, hogyan érheti el ezt az F7-es szűrőkkel.',
    heroImage: allergySeasonHeroImage,
    heroAlt: 'Család költözik új otthonába - tiszta levegő és pollenmentes környezet',
    date: '2024. február 1.',
    author: 'Németh Kálmán',
    slug: 'allergiaszezon-pollenmentes-otthon',
    category: 'Egészség',
    readTime: '6 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Közeleg a tavasz, és vele együtt a pollenszezon is? Az allergiások számára az otthonuknak a biztonság szigetének kellene lennie. A szelloztetes.eu szakmai tapasztalatai alapján mutatjuk be, hogyan érheti ezt el.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'Miért nem elég a sima szűrő?',
        content:
          'A legtöbb szellőztető gép alapfelszereltsége a G4-es szűrő. A G4-es osztály csak a nagyobb porszöszöket és bogarakat fogja meg. A pollenszemcsék (melyek mérete gyakran 10-100 µm között van) könnyedén átjutnak rajta.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'Az F7-es szűrő: A pollenmentes otthon záloga',
        content:
          'A megoldás az F7-es (ePM1) finompor-szűrő alkalmazása a friss levegő ágban.\n\nHatékonyság: Ez a szűrőosztály már a 0,3-1 µm közötti részecskék jelentős részét is megfogja, a pollent pedig szinte 100%-os hatékonysággal szűri ki.\n\nÉletminőség: Nincs többé tüsszögés, vörös szemek és éjszakai nehézlégzés a saját lakásában.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'Szakértői tippek az allergiaszezonra',
        content:
          '• Időzített csere: Ne várja meg a szezon csúcsát! Cserélje le szűrőit már február végén vagy március elején.\n\n• Szelepvédelem: Ne felejtse el az elszívó oldali szelepek védelmét sem (G2 kónuszos szűrőkkel), hogy a rendszer minden pontja tiszta maradjon.\n\n• Ellenőrzés: Ha nagyon magas a porkoncentráció (pl. útépítés vagy intenzív virágzás a környéken), havonta nézzen rá az F7-es szűrő állapotára!',
      },
      {
        id: 5,
        type: 'heading',
        title: 'Kövessen minket Facebookon is!',
        content:
          'Folyamatosan frissülő tanácsokért, videós segítségért és aktuális akciókért látogasson el Facebook oldalunkra is. Ott közösségünk tagjaként azonnal értesülhet a legújabb technológiákról és karbantartási tippekről.',
      },
      {
        id: 6,
        type: 'image',
        image: filterClassesChartImage,
        imageAlt:
          'Szűrőosztályok hatékonysági táblázata - a G1-től F9-ig terjedő osztályok összehasonlítása szemcseméret szerint',
        caption:
          'A szűrőosztályok és hatékonyságuk különböző szemcseméreteknél. Jól látható, hogy csak az F7-es és magasabb osztály nyújt valódi védelmet a pollen ellen.',
      },
      {
        id: 7,
        type: 'callout',
        title: 'Készen áll az allergiaszezonra?',
        content:
          'Vásároljon F7-es pollenszűrőt a gépéhez, és élvezze a pollenmentes, tiszta levegőt otthonában! Webshopunkban megtalálja a legtöbb gyártó OEM és utángyártott szűrőit is.',
      },
    ],
  },
  {
    id: 6,
    title: 'Utángyártott szellőzőszűrők: Hogyan válasszunk, hogy ne legyen bosszúság a vége?',
    excerpt:
      'Létezik okos megtakarítás a hatékonyság feláldozása nélkül? Szakértőként eláruljuk, mire figyeljen utángyártott szűrők vásárlásakor.',
    heroImage: aftermarketFiltersImage,
    heroAlt: 'G4 és F7 szűrők összehasonlítása - szűrési osztályok táblázattal',
    date: '2024. február 10.',
    author: 'Németh Kálmán',
    slug: 'utangyartott-szurok-valasztas',
    category: 'Vásárlási tanács',
    readTime: '6 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'A hővisszanyerős szellőztető rendszerek tulajdonosaiként tudjuk: a szűrőcsere a gép lelke. Sokan tartanak az utángyártott megoldásoktól, de szakértőként eláruljuk: létezik okos megtakarítás a hatékonyság feláldozása nélkül is.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'Miért lehet „bosszantó" egy rossz minőségű utángyártott szűrő?',
        content:
          'A nem megfelelő szűrők két fő problémát okozhatnak:\n\n• Túl magas légellenállás: Ha az anyag nem megfelelő, a ventilátornak nagyobb erővel kell dolgoznia. Ez magasabb villanyszámlát és a motor idő előtti elhasználódását eredményezi.\n\n• Gyenge szűrési hatékonyság: Ha az anyag szerkezete nem fogja meg a finomport, az lerakódik a hőcserélőben és a csövekben, ami később méregdrága tisztítást igényel.',
      },
      {
        id: 3,
        type: 'heading',
        title: '4 dolog, amit mi garantálunk szakértőként',
        content:
          'A szellozoszuro.hu kínálatának összeállításakor mi már elvégeztük a szűrést Ön helyett:',
      },
      {
        id: 4,
        type: 'heading',
        title: '1. Német prémium alapanyag (Sandler AG)',
        content:
          'Csak olyan szintetikus anyagokat használunk, amelyek légáteresztése pontosan megfelel a gyári (Vaillant, Bosch, Helios, stb.) előírásoknak.',
      },
      {
        id: 5,
        type: 'heading',
        title: '2. ISO 16890 tanúsítvány',
        content:
          'Szűrőinket akkreditált laboratóriumokban tesztelik. Az ePM1 70% nálunk valóban a szmog és pollenek megfogását jelenti.',
      },
      {
        id: 6,
        type: 'heading',
        title: '3. PFAS-mentes és higiénikus',
        content:
          'Megfelelnek a VDI 6022 előírásoknak, így nem juttatnak káros vegyi anyagokat otthonába.',
      },
      {
        id: 7,
        type: 'heading',
        title: '4. Pontos illeszkedés',
        content:
          'Termékeink (legyen szó Wolf, Zehnder vagy Stiebel Eltron típusról) milliméterre pontosan illeszkednek a gyári foglalatba.',
      },
      {
        id: 8,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'Ne csak az árat nézze! Egy silány szűrő okozta motorcsere tíz évnyi megtakarítást emészthet fel egyetlen nap alatt. Válasszon tesztelt minőséget!',
      },
    ],
  },
  {
    id: 7,
    title: 'Az aktív szén ereje: Több, mint egy egyszerű porszűrő!',
    excerpt:
      'Hogyan működik az aktív szenes szűrő, és miben különbözik a hagyományos mechanikai szűréstől? Ismerd meg a MUK 10 és MUK 25 közötti különbséget.',
    heroImage: aktivSzenHeroImage,
    heroAlt: 'Aktív szén granulátum szűrőanyagon - aktivált szenes levegőszűrés',
    date: '2024. március 5.',
    author: 'Németh Kálmán',
    slug: 'aktiv-szen-szuro-mukodes',
    category: 'Technológia',
    readTime: '8 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Amikor levegőszűrésről beszélünk, a legtöbben a hagyományos G4-es, F7-es vagy F9-es mechanikai szűrőkre gondolnak. Ezek a szűrők „szitaként" működnek: a levegőt átengedik, a részecskéket (port, pollent, finomport) pedig a szöveteikben fogják meg. De mi a helyzet azokkal a szennyeződésekkel, amelyek nem részecskék, hanem gázok? Gondoljunk a kellemetlen szagokra, az illékony szerves vegyületekre (VOC-ok), a kipufogógáz bűzére vagy az ipari légszennyezésre. Ezek ellen a hagyományos szűrők tehetetlenek.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'A mechanikai szűrés korlátai',
        content:
          'Egy G4, F7 vagy akár F9-es szűrő kiválóan teljesít a szilárd részecskék megfogásában. A működési elvük egyszerű: minél finomabb a szövet, annál kisebb részecskéket is megfog. De a szagmolekulák és a gáz halmazállapotú szennyezők olyan aprók, hogy simán átjutnak még a legsűrűbb szöveten is. Egy konyhai égett szag, a közeli forgalom kipufogógáza, vagy a szomszéd kandallójának füstje mind olyan probléma, amire más megoldás kell.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'Az aktív szén: A „mágneses felület" analógiája',
        content:
          'Az aktív szén (aktivált szén) működése alapvetően eltér a mechanikai szűréstől. Az eljárás neve: adszorpció. Képzeljük el úgy, mint egy hatalmas, mikroszkopikus szivacs-felületet, amelynek belső felülete elképesztően nagy – mindössze 1 gramm aktív szénnek akár 3000 m² belső felülete is lehet!\n\nEz a felület úgy működik, mint egy mágnes a gázmolekulák számára: a szagmolekulák, a VOC-ok és egyéb gáz szennyezők „ráragadnak" erre a felületre, és ott maradnak. A levegő tisztán és szagmentesen távozik.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'MUK 10 vs. MUK 25 – Melyiket válasszam?',
        content:
          'A szellőztető rendszerek aktív szenes szűrőit a szénmennyiségük alapján különböztetjük meg. A két legelterjedtebb kategória a MUK 10 és a MUK 25.',
      },
      {
        id: 5,
        type: 'heading',
        title: 'MUK 10 – Alap városi védelem',
        content:
          'A MUK 10 szűrők kb. 100 g/m² aktív szenet tartalmaznak. Ez a szint ideális az alapvető szagvédelemre: ha forgalmasabb úton lakik, vagy időszakosan érzi a városi légszennyezést. A MUK 10 hatékonyan szűri a közlekedési eredetű szennyeződéseket és az enyhe ipari szagokat.',
      },
      {
        id: 6,
        type: 'heading',
        title: 'MUK 25 – Intenzív védelem, 2,5-szörös szénmennyiséggel',
        content:
          'A MUK 25 szűrők kb. 250 g/m² aktív szenet tartalmaznak – ez 2,5-szer több, mint a MUK 10! Ez a kategória ajánlott, ha:\n\n• Szmogos, erősen terhelt városi környezetben lakik\n• A szomszédban rendszeresen tüzelnek fával vagy szénnel (kandallófüst)\n• Mezőgazdasági szagok (trágyázás, állattartás) érik az ingatlant\n• Ipari létesítmény közelében él',
      },
      {
        id: 7,
        type: 'image',
        image: vaillantMukFiltersImage,
        imageAlt:
          'Vaillant szellőztető berendezés G4 és F7 szűrőkkel behelyezve - szellozoszuro.hu márkajelzéssel',
        caption:
          'A szűrők a „második védelmi vonalat" képezik a gépben. Az aktív szenes szűrő a mechanikai szűrő mellé kerülve a gáz halmazállapotú szennyezőket is megfogja.',
      },
      {
        id: 8,
        type: 'heading',
        title: 'A tervezés fontossága: A beszívási pont elhelyezése',
        content:
          'Az aktív szenes szűrő hatékonyságát nem csak a szűrő minősége határozza meg, hanem a szellőztető rendszer friss levegő beszívási pontjának elhelyezése is. Rossz helyen elhelyezett beszívó nyílás esetén még a legerősebb szűrő sem tud csodát tenni.',
      },
      {
        id: 9,
        type: 'heading',
        title: 'Szélirány (Magyarországon ÉNY)',
        content:
          'A friss levegő beszívási pontját lehetőleg az uralkodó szélirány felőli oldalra tervezzük. Magyarországon ez jellemzően az északnyugati oldal. Így a legtisztább levegőt kapjuk.',
      },
      {
        id: 10,
        type: 'heading',
        title: 'Védett elhelyezés',
        content:
          'Kerüljük a fedett parkolók (carportok), kukatárolók vagy a garázs szellőzőnyílásai melletti elhelyezést! Az ilyen helyekről beszívott levegő eleve szennyezett lehet.',
      },
      {
        id: 11,
        type: 'heading',
        title: '„Kémény-effektus" – Távolság az elszívástól',
        content:
          'A szellőztető rendszer elszívó nyílása (ahol a „használt" levegőt kifújja) és a beszívó nyílás között legalább 2-3 méter távolságot tartsunk. Ha túl közel vannak, az elszívott, elhasznált levegőt rögtön visszaszívja a rendszer – ez az ún. „kémény-effektus" vagy rövidzárlat.',
      },
      {
        id: 12,
        type: 'heading',
        title: 'Magasság: Ne túl alacsonyan, ne túl magasan',
        content:
          'A talaj szintjén több a felvert por és allergén. A tető szintjén viszont – különösen nyáron – a felmelegedett tetőfelület hősugárzása befolyásolhatja a beszívott levegő hőmérsékletét. Az optimális magasság általában 2-3 méter a talaj felett.',
      },
      {
        id: 13,
        type: 'callout',
        title: 'Szakértői tanácsunk',
        content:
          'Használjon aktív szenes (MUK) szűrőt a szagokkal terhelt időszakokban (őszi-téli fűtésszezon, tavaszi trágyázás), majd allergiaszezonban váltson F9-es finomszűrőre a maximális pollenvédelemért. A két szűrőtípus váltogatása az évszaknak megfelelően biztosítja a legmagasabb védelmet egész évben!',
      },
    ],
  },
  {
    id: 8,
    title: 'Ez történik a szellőztető rendszereddel, ha kispórolod a szűrőt!',
    excerpt:
      'Valós esettanulmány: a szűrők nem luxus, hanem a rendszer pajzsa. Mutatjuk, mit okoz az elhanyagolt karbantartás.',
    heroImage: dirtyFiltersImage,
    heroAlt: 'Használt, koszos szellőztető szűrők - szűrőcsere fontossága',
    date: '2024. március 15.',
    author: 'Németh Kálmán',
    slug: 'mi-tortenik-ha-kisporolod-a-szurot',
    category: 'Karbantartás',
    readTime: '7 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Sokan gondolják, hogy a szellőztető szűrő csupán egy „plusz költség", amit ki lehet spórolni. A valóság azonban egészen más képet mutat. Nap mint nap találkozunk olyan rendszerekkel, ahol a karbantartás elmaradása súlyos – és drága – következményekkel járt. A szűrő nem luxus: a szűrő a rendszered pajzsa. És ha a pajzsot elveszed, a csapások közvetlenül a rendszert érik.',
      },
      {
        id: 2,
        type: 'heading',
        title: '„Horror" a csövekben',
        content:
          'Szűrők nélkül – vagy elhanyagolt, telített szűrőkkel – a szöszök, a por, a konyhai zsírpára és a háztartási szennyeződések szabad utat kapnak a csőhálózatba. Idővel ez egy ragacsos, nehezen eltávolítható réteget képez a csövek belső falán.\n\nEnnek azonnali következményei:\n\n• Megnövekedett zaj: A szűkülő keresztmetszet miatt a levegő nagyobb sebességgel áramlik, ami hallható süvítést és zúgást okoz.\n\n• Magasabb villanyszámla: A ventilátornak sokkal keményebben kell dolgoznia, hogy ugyanazt a légmennyiséget biztosítsa. Ez akár 15-25%-kal is növelheti az energiafogyasztást.\n\n• Extrém drága csőtisztítás: Egy professzionális légcsatorna-tisztítás ára több tízezer forint – és nem is biztos, hogy teljes mértékben visszaállítható az eredeti állapot.',
      },
      {
        id: 3,
        type: 'image',
        image: dirtyDuctImage,
        imageAlt: 'Koszos, szennyezett légcsatorna belülről - szöszök és por lerakódás a cső falán',
        caption:
          'Így néz ki egy légcsatorna belülről, ha a szűrők nem végzik a dolgukat. A lerakódás folyamatosan vastagszik és szűkíti a keresztmetszetet.',
      },
      {
        id: 4,
        type: 'heading',
        title: 'A „hős", aki feláldozta magát',
        content:
          'Nézd meg figyelmesen a képen látható szűrőket! Ezek a szűrők pontosan azt tették, amit kellett: megállították a szennyeződést, MIELŐTT az bejuthatott volna a csövekbe és a hőcserélő kockába.\n\nIgen, csúnyán néznek ki. De gondolj bele: mindez a kosz, szösz és por a te tüdődben, a csöveidben vagy a gép hőcserélőjén landolt volna. A szűrő „feláldozta magát", hogy a rendszered és a családod egészsége érintetlen maradjon.\n\nAz üzenet egyszerű: Jobb, ha a szűrő koszos, mint a tüdőd vagy a csöveid!',
      },
      {
        id: 5,
        type: 'image',
        image: dirtyFiltersImage,
        imageAlt:
          'Két erősen szennyezett kerek szellőztető szűrő egy asztalon - a szűrőcsere fontossága',
        caption:
          'Ezek a szűrők elvégezték a feladatukat: megvédték a rendszert és a család egészségét. Ideje volt a cserének!',
      },
      {
        id: 6,
        type: 'heading',
        title: 'A tiszta cél: Higiénikus csőhálózat',
        content:
          'Így kellene kinéznie minden szellőztető csőhálózat belsejének: tisztán, higiénikusan, lerakódások nélkül. Ez az állapot biztosítja a zavartalan légáramlást, a csendes működést és az egészséges beltéri levegőt.\n\nDe ez az állapot nem jön magától – ehhez rendszeres szűrőcsere és az elszívó oldali védelem szükséges. Itt lépnek színre a G2 típusú anemosztát szűrők (kónuszos szűrőpaplanok), amelyek az elszívási pontoknál (konyha, fürdő, WC) védik a csőhálózatot a bejutó szennyeződésektől.',
      },
      {
        id: 7,
        type: 'image',
        image: cleanDuctImage,
        imageAlt: 'Tiszta, higiénikus légcsatorna belülről - karbantartott szellőztető rendszer',
        caption:
          'A cél: minden légcsatorna belül ilyen tiszta maradjon. Ez rendszeres szűrőcserével és anemosztát szűrők használatával érhető el.',
      },
      {
        id: 8,
        type: 'callout',
        title: 'Szakértői tanács a szellozoszuro.hu-tól',
        content:
          'Fontos megérteni a különbséget: A központi egységben lévő szűrők (G4, F7, F9) a gépet és a befújt friss levegőt védik – ezek az Ön és családja egészségéért felelnek. Az elszívó oldali anemosztát szűrők (G2 kónuszos szűrők) viszont a csőhálózatot védik a visszafelé érkező szennyeződésektől (konyhai pára, fürdőszobai szöszök). Mindkét védelmi vonal elengedhetetlen a rendszer hosszú élettartamához!',
      },
      {
        id: 9,
        type: 'heading',
        title: 'Nálad mikor voltak utoljára ellenőrizve az anemosztát szűrők?',
        content:
          'Ha nem emlékszel, mikor nézted meg utoljára a szűrőidet, itt az ideje! Ne várd meg, amíg a rendszered „jelzi" a problémát zajjal vagy kellemetlen szagokkal. A megelőzés mindig olcsóbb, mint a javítás.',
      },
    ],
  },
  {
    id: 9,
    title: 'Vigyázat! A nyirkos idő a szellőzőrendszer csendes ellensége!',
    excerpt:
      'Tudta, hogy a szűrők ködös, nyirkos őszi-téli időben sokkal keményebben dolgoznak, mint nyáron? A nedvesség és a por együtt csendes, de súlyos károkat okozhat.',
    heroImage: foggyMorningImage,
    heroAlt:
      'Ködös őszi reggel páralecsapódással az ablakon - nyirkos időjárás szellőztetési kihívásai',
    date: '2024. március 20.',
    author: 'Németh Kálmán',
    slug: 'nyirkos-ido-szellozorendszer-ellensege',
    category: 'Karbantartás',
    readTime: '6 perc',
    sections: [
      {
        id: 1,
        type: 'intro',
        content:
          'Tudta, hogy a szellőztető szűrők ködös, nyirkos őszi-téli időben sokkal keményebben dolgoznak, mint a száraz nyári hónapokban? Sokan nem gondolnak bele, de a páratartalom drámaian befolyásolja a szűrők élettartamát és a rendszer hatékonyságát. A nedvesség és a por együtt egy csendes, de annál veszélyesebb ellenséget hoz létre.',
      },
      {
        id: 2,
        type: 'heading',
        title: 'A „Sár-hatás": Amikor a por ragacsossá válik',
        content:
          'Száraz időben a porszemcsék lazán tapadnak a szűrő szálaihoz, és a levegő viszonylag könnyen átáramlik rajtuk. Nyirkos, ködös időben azonban teljesen más a helyzet.\n\nA magas páratartalmú levegőben a finom porszemcsék nedvességet szívnak magukba, és egy ragacsos, sárszerű réteget képeznek a szűrő szálain. Ez a „sár-hatás" drámaian felgyorsítja a szűrő eltömődését – akár 2-3-szor gyorsabban telítődhet, mint száraz időben!\n\nKépzeljük el úgy: száraz porral könnyű söpörni, de sáros porral? Az ráragad mindenre, és szinte lehetetlen eltávolítani. Pontosan ez történik a szűrő belsejében is.',
      },
      {
        id: 3,
        type: 'heading',
        title: 'Megnőtt ellenállás: A rendszer „fullad"',
        content:
          'Amikor a szűrő szálai közé beragadt nedves por egyre vastagabb réteget képez, a levegő egyre nehezebben jut át rajta. A rendszer „fullad" – és ennek azonnali, mérhető következményei vannak:\n\n• Magasabb villanyszámla: A ventilátornak nagyobb teljesítményen kell dolgoznia, hogy ugyanazt a légmennyiséget biztosítsa. Ez akár 20-30%-kal is növelheti az energiafogyasztást.\n\n• Hangosabb működés: A motor magasabb fordulatszámon pörög, a légellenállás növekedésével a rendszer hallhatóan zúg és búg – éjszaka különösen zavaró.\n\n• Felesleges terhelés a gépen: A folyamatos túlterhelés lerövidíti a ventilátor és a motor élettartamát. Egy idő előtti motorcsere ára a szűrő árának többszöröse!',
      },
      {
        id: 4,
        type: 'heading',
        title: 'Higiénia és egészség: A láthatatlan veszély',
        content:
          'A nedves, poros szűrő nem csak mechanikai probléma – komoly egészségügyi kockázatot is jelent. A tartósan nedves, szerves anyagokkal teli környezet ideális táptalaj a mikroorganizmusok számára:\n\n• Penészgombák: A nedves szűrőanyagban penésztelepek alakulhatnak ki, amelyek spóráikat a lakásba fújják.\n\n• Baktériumok: A meleg, nyirkos közeg kedvez a baktériumok szaporodásának.\n\n• Kellemetlen szagok: A mikrobiológiai aktivitás dohos, áporodott szagot eredményez, amit a szellőztetés széthord a lakásban.\n\nA tiszta szűrő az egyetlen garancia az egészséges beltéri levegőre. Különösen nyirkos időszakban, amikor a természetes szellőztetés (ablaknyitás) sem jelent megoldást a ködös, párás külső levegő miatt.',
      },
      {
        id: 5,
        type: 'callout',
        title: 'Szakértői tanács a szellozoszuro.hu-tól',
        content:
          'Nyirkos időszakban (ősz-tél) 2-3 hetente ellenőrizze a szűrőit! Ha sötétszürkék, elszíneződtek, vagy tapintásra nedvesek – azonnal cserélje ki őket! Ne várja meg a szokásos karbantartási ciklust. A megelőző csere mindig olcsóbb, mint a következményes javítás.',
      },
      {
        id: 6,
        type: 'heading',
        title: 'Ne hagyd, hogy a géped erőlködjön!',
        content:
          'A nyirkos időszak extra terhelést jelent a szellőztető rendszerednek. A rendszeres szűrőellenőrzés és a gyors csere biztosítja, hogy a géped csendesen, hatékonyan és higiénikusan működjön egész télen át. Rendelj friss szűrőt még ma, és védd meg a rendszered a nedvesség csendes pusztításától!',
      },
    ],
  },
]

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const paths = usePath()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to={paths.blog.base} replace />
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
          <img src={post.heroImage} alt={post.heroAlt} className="w-full h-full object-cover" />
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
                {post.sections.map((section) => {
                  if (section.type === 'intro') {
                    return (
                      <p key={section.id} className="text-lg text-foreground leading-relaxed mb-8">
                        {section.content}
                      </p>
                    )
                  }

                  if (section.type === 'heading') {
                    return (
                      <div key={section.id} className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    )
                  }

                  if (section.type === 'callout') {
                    return (
                      <div
                        key={section.id}
                        className="mt-10 p-6 rounded-xl bg-cyan/10 border-l-4 border-cyan"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-cyan">💡</span>
                          {section.title}
                        </h3>
                        <p className="text-foreground font-medium">{section.content}</p>
                      </div>
                    )
                  }

                  if (section.type === 'image') {
                    return (
                      <div key={section.id} className="my-10">
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
                    )
                  }

                  return null
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
  )
}

export default BlogPost
