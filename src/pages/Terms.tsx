import { Helmet } from 'react-helmet-async';
import { FileText, Building2, CreditCard, RotateCcw, Shield, Scale, Truck, AlertCircle, Phone, Mail, Globe, Gavel } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Általános Szerződési Feltételek (ÁSZF) | Németh Légtechnika Kft.</title>
        <meta name="description" content="A Németh Légtechnika Kft. Általános Szerződési Feltételei. Tájékozódjon a rendelés, fizetés, elállási jog és szavatosság feltételeiről." />
        <link rel="canonical" href="https://szellozoszuro.hu/aszf" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">Általános Szerződési Feltételek</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-3xl">
              A közöttünk létrejövő szerződés tartalmát – a vonatkozó kötelező érvényű jogszabályok 
              rendelkezései mellett – a jelen ÁSZF, valamint a honlapon található további tájékoztatások 
              határozzák meg.
            </p>
            <p className="text-dark-muted/60 text-sm mt-4">
              Hatályos: 2024. november 8-tól
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Merchant Data */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Kereskedő adatai</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cégnév</p>
                    <p className="font-medium text-foreground">Németh Légtechnika Korlátolt Felelősségű Társaság</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Székhely és levelezési cím</p>
                    <p className="font-medium text-foreground">9400 Sopron, Szent György utca 4. 2. em. 3.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Nyilvántartó hatóság</p>
                    <p className="font-medium text-foreground">Győri Törvényszék Cégbírósága</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cégjegyzékszám</p>
                    <p className="font-medium text-foreground">08-09-029861</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Adószám</p>
                    <p className="font-medium text-foreground">26290438-2-08</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefonszám</p>
                    <a href="tel:+36203238172" className="font-medium text-cyan hover:underline">
                      +36 20 323 8172
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                    <a href="mailto:info@sopronterv.hu" className="font-medium text-cyan hover:underline">
                      info@sopronterv.hu
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Tárhelyszolgáltató</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-foreground">EZIT Kft.</p>
                      <p className="text-sm text-muted-foreground">1132 Budapest, Victor Hugo utca 18-22.</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tel.: +36 1 700 4030</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Provisions - Accordion */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Részletes rendelkezések</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {/* General Provisions */}
                  <AccordionItem value="general" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <Scale className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Általános rendelkezések</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          A jelen Általános Szerződési Feltételek (ÁSZF) a Kereskedő és a Megrendelő közötti 
                          jogviszonyra vonatkozik, így különösen a www.szelloztetes.eu oldalon működő webáruházat 
                          üzemeltető Kereskedő és a szolgáltatást igénybe vevő Megrendelő között létrejövő szerződésre.
                        </p>
                        <p>
                          Az ÁSZF-et a Megrendelő a Kereskedő felé leadott rendeléssel, illetve a Kereskedő által 
                          nyújtott szolgáltatás igénybevételével kifejezetten elfogadja.
                        </p>
                        <p>
                          <strong>Vonatkozó jogszabályok:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Polgári Törvénykönyvről szóló 2013. évi V. törvény (Ptk.)</li>
                          <li>45/2014. (II. 26.) Korm. rendelet a fogyasztó és vállalkozás közötti szerződésekről</li>
                          <li>2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatásokról (Ektv.)</li>
                          <li>1997. évi CLV. törvény a fogyasztóvédelemről (Fgytv.)</li>
                        </ul>
                        <p className="text-sm italic mt-4">
                          A webáruházban feltüntetett képek illusztrációk. A Kereskedő az ÁSZF-et a Megrendelő 
                          hozzájárulása nélkül jogosult módosítani. A módosítás a honlapon történő közzététellel 
                          válik hatályossá.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Contract Formation */}
                  <AccordionItem value="contract" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Szerződés létrejötte</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          A webáruház látogatója szabadon, regisztráció nélkül használhatja a közzétett tartalmakat. 
                          Összeállíthatja a termékek listáját, mennyiségét. A „Kosár"-ba került termékek listáját és 
                          mennyiségét módosíthatja – ezzel a felhasználó semmilyen kötelezettséget nem vállal.
                        </p>
                        <p>
                          A megrendelés leadása – valamint a vételár kiegyenlítése – a megrendelt termékek 
                          megvásárlására irányuló szerződést még <strong>nem hozza létre</strong>, 
                          Megrendelő által tett <strong>ajánlatnak minősül</strong>.
                        </p>
                        <p>
                          Az ajánlat abban az esetben válik szerződéssé, ha a <strong>Kereskedő a megrendelést 
                          ténylegesen visszaigazolja</strong>. Amennyiben a Megrendelő a szerződés létrejötte 
                          előtt kifizetést teljesít, de a szerződés nem jön létre, a Kereskedő a kapott összeget 
                          visszafizeti.
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                          <p className="text-sm">
                            <strong>Megrendelések feldolgozása:</strong> munkanapokon 8:00 – 16:00 között
                          </p>
                          <p className="text-sm mt-2">
                            <strong>Szerződés nyelve:</strong> magyar
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Payment */}
                  <AccordionItem value="payment" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Fizetés</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          A Megrendelő a megrendeléskor, a felajánlott lehetőségek közül köteles kiválasztani 
                          a fizetés, szállítás/átvétel, számlakiállítás feltételeit.
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="font-medium text-foreground mb-2">Online bankkártyás fizetés</p>
                          <p className="text-sm">
                            Az online bankkártyás fizetések a <strong>Barion</strong> rendszerén keresztül valósulnak meg. 
                            A bankkártya adatok a kereskedőhöz nem jutnak el.
                          </p>
                          <p className="text-sm mt-2">
                            A szolgáltatást nyújtó <strong>Barion Payment Zrt.</strong> a Magyar Nemzeti Bank 
                            felügyelete alatt álló intézmény, engedélyének száma: <strong>H-EN-I-1064/2013</strong>.
                          </p>
                        </div>
                        <p>
                          A honlapon közzétett termékekre vonatkozó árak és szállítási díjak aktuális bruttó értékek, 
                          amelyek a hatályos törvény szerinti mértékű Általános Forgalmi Adót tartalmazzák.
                        </p>
                        <p className="text-sm italic">
                          A Kereskedő fenntartja az árak módosításának jogát. A módosítás a már megrendelt 
                          termékek vételárát nem módosítja. Hibás ár esetén a Kereskedő felajánlhatja a termék 
                          helyes áron történő megvételét.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Shipping */}
                  <AccordionItem value="shipping" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <Truck className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Szállítás</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          Amennyiben a Megrendelő a megvásárolt terméket nem személyes átvétellel veszi meg, 
                          úgy a házhozszállítás költségét a Megrendelő köteles viselni. Ezen költséget a 
                          termék ára nem tartalmazza.
                        </p>
                        <p>
                          Házhozszállítás esetén a Kereskedő köteles a visszaigazolt megrendelésben szereplő 
                          terméket, a megrendelésben megadott szállítási helyre szállítani – első ajtóig – 
                          a visszaigazolásban megadott szállítási határidőn belül.
                        </p>
                        <p>
                          A Megrendelő hibájából szükségessé váló újabb szállítási költség a Megrendelőt terheli.
                        </p>
                        <p>
                          A raktáron nem lévő árukra a Megrendelő előrendelést jogosult leadni. Amennyiben 
                          az adott termék nincs raktáron, a Kereskedő haladéktalanul tájékoztatja a Megrendelőt.
                        </p>
                        <p className="text-sm italic">
                          A Kereskedő kijelenti, hogy szállítási késedelem miatt felelősséget és kötbérfizetési 
                          kötelezettséget nem vállal.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Right of Withdrawal */}
                  <AccordionItem value="withdrawal" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Elállási jog</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          Üzlethelyiségen kívül kötött, távollévők közötti szerződés esetén a Fogyasztó 
                          <strong> indoklás nélkül elállhat</strong> a szerződéstől a termék (több termék 
                          esetén, az utolsó termék) átvételétől számított <strong>14 naptári napon belül</strong>.
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="font-medium text-foreground mb-2">Az elállás menete:</p>
                          <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>Egyértelmű, írásos nyilatkozat küldése a Kereskedő részére az elérhetőségek valamelyikén</li>
                            <li>A termék sértetlen visszaküldése</li>
                            <li>A Kereskedő a nyilatkozat átvételétől számított 14 napon belül – a termék visszaérkezése után – visszatéríti a megfizetett összeget</li>
                          </ol>
                        </div>
                        <p className="text-sm">
                          A visszatérítés az eredeti ügylet során alkalmazott fizetési móddal történik. 
                          <strong> A termék visszaküldésének költsége a Fogyasztót terheli.</strong>
                        </p>
                        <p className="text-sm">
                          Visszaküldés esetén a Megrendelő köteles a terméket szállításra alkalmas csomaggal ellátni. 
                          A visszaszállítás során előforduló sérülésekért a Kereskedőt felelősség nem terheli.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Warranty */}
                  <AccordionItem value="warranty" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Szavatosság és jótállás</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          A Megrendelő az átadásnál észlelt hibás termék átvételét megtagadhatja. Amennyiben 
                          az átvétel után derül ki, hogy a termék hibás, haladéktalanul, késedelem nélkül 
                          jelezni köteles a Kereskedő felé e-mailben.
                        </p>
                        <p>
                          Az írásbeli panaszt a Kereskedő köteles a beérkezéstől számított <strong>30 napon 
                          belül</strong> kivizsgálni, megválaszolni és intézkedni.
                        </p>
                        <p>
                          Amennyiben a Kereskedő a szerződést hibásan teljesíti, úgy a Megrendelő szavatossági 
                          vagy jótállási igényt érvényesíthet. A kellékszavatossági igény alapfeltétele a 
                          Megrendelő nevére kiállított számla.
                        </p>
                        
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="font-medium text-foreground mb-3">Jótállási időszakok (151/2003. Korm. rendelet alapján):</p>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-border">
                                  <th className="text-left py-2 pr-4 font-medium">Eladási ár</th>
                                  <th className="text-left py-2 font-medium">Jótállás időtartama</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-border/50">
                                  <td className="py-2 pr-4">10.000 – 250.000 Ft</td>
                                  <td className="py-2">2 év (az átvételtől számítva)</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4">250.000 Ft felett</td>
                                  <td className="py-2">3 év (az átvételtől számítva)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <p className="text-sm">
                          A Kereskedő törekszik a hibás termék kijavítását vagy cseréjét <strong>15 naptári 
                          napon belül</strong> elvégezni. Ha ez meghaladja a 15 napot, a Kereskedő tájékoztatja 
                          a fogyasztót a várható időtartamról.
                        </p>
                        <p className="text-sm italic">
                          A nem rendeltetésszerű használatból adódó hibára a teljesítéssel kapcsolatos 
                          felelősség nem terjed ki.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Defective Performance */}
                  <AccordionItem value="defective" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Hibás teljesítés, panaszkezelés</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <p>
                          A Fogyasztó az eladott termék hibája esetén a gyártótól követelheti, hogy a hibát 
                          javítsa ki vagy a terméket cserélje ki. A termék akkor hibás, ha nem felel meg a 
                          hatályos minőségi követelményeknek.
                        </p>
                        <p>
                          A Fogyasztó a hibát az első észlelés után haladéktalanul köteles a gyártóval közölni.
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          Fontos: Ugyanazon hiba miatt kellékszavatossági és jótállási igényt, valamint 
                          termékszavatossági és jótállási igényt egyszerre, egymással párhuzamosan nem 
                          érvényesíthető.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Legal Remedies */}
                  <AccordionItem value="remedies" className="bg-card rounded-2xl border border-border px-6">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                          <Gavel className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-lg font-semibold text-foreground text-left">Jogorvoslati lehetőségek</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium text-foreground">Fogyasztóvédelmi hatóság</p>
                            <p className="text-sm">
                              A fogyasztóvédelmi hatóság a kormányhivatal. Elérhetőségek: {' '}
                              <a 
                                href="http://www.kormanyhivatal.hu/hu" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan hover:underline"
                              >
                                www.kormanyhivatal.hu
                              </a>
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-medium text-foreground">Győr-Moson-Sopron Megyei Békéltető Testület</p>
                            <p className="text-sm">9021 Győr, Szent István út 10/a.</p>
                            <p className="text-sm">Telefon: 06-96-520-217</p>
                          </div>
                          
                          <div>
                            <p className="font-medium text-foreground">Békéltető testületek országosan</p>
                            <p className="text-sm">
                              Illetékességek és elérhetőségek: {' '}
                              <a 
                                href="https://fogyasztovedelem.kormany.hu/#/bekelteto_testuletek" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan hover:underline"
                              >
                                fogyasztovedelem.kormany.hu
                              </a>
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-medium text-foreground">Bírósági eljárás</p>
                            <p className="text-sm">
                              Polgári eljárás keretében a Polgári Törvénykönyvről szóló 2013. évi V. törvény, 
                              valamint a Polgári Perrendtartásról szóló 2016. évi CXXX. törvény rendelkezései szerint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Additional Info */}
              <div className="bg-secondary/50 rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Egyéb rendelkezések</h3>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    A Kereskedő maximálisan törekszik a környezettudatosságra. Az értékesítésre kerülő 
                    termékeknél lehetőség szerint környezetbarát csomagolóanyagokat használ.
                  </p>
                  <p>
                    A Kereskedő irányadónak tekinti a Magyar Kereskedelmi és Iparkamara etikai kódexét 
                    (<a href="http://www.mkik.hu" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">www.mkik.hu</a>).
                  </p>
                  <p>
                    Amennyiben elháríthatatlan körülmény (vis maior) merülne fel, egyik fél sem felel 
                    a szerződés szerinti kötelezettség teljesítéséért.
                  </p>
                  <p>
                    A rendszer használatához a böngészőben a cookie-k használatát engedélyezni szükséges.
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Mellékletek:</strong>
                  </p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Adatvédelmi nyilatkozat</li>
                    <li>Mintatájékoztató hibás teljesítésről</li>
                    <li>Mintatájékoztató az elállási jogról</li>
                    <li>Nyilatkozat-minta az elállási jogról</li>
                  </ol>
                </div>
                
                <p className="text-muted-foreground text-sm mt-6">
                  Sopron, 2024. november 8.
                </p>
              </div>

              {/* Contact for Questions */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Kérdése van?</h3>
                <p className="text-muted-foreground mb-4">
                  Az ÁSZF-fel kapcsolatos kérdéseivel forduljon hozzánk bizalommal:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:info@sopronterv.hu" 
                    className="flex items-center gap-2 text-cyan hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    info@sopronterv.hu
                  </a>
                  <a 
                    href="tel:+36203238172" 
                    className="flex items-center gap-2 text-cyan hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +36 20 323 8172
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
