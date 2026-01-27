import { Helmet } from 'react-helmet-async';
import { FileText, Building2, CreditCard, RotateCcw, Shield, Scale, Phone, Mail, Globe, Server } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar Navigation */}
              <aside className="lg:w-64 flex-shrink-0">
                <nav className="lg:sticky lg:top-28 bg-card rounded-2xl border border-border p-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tartalomjegyzék</p>
                  <ul className="space-y-2">
                    <li>
                      <a href="#szolgaltato" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">1</span>
                        Szolgáltató adatai
                      </a>
                    </li>
                    <li>
                      <a href="#targy" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">2</span>
                        Szerződés tárgya
                      </a>
                    </li>
                    <li>
                      <a href="#fizetes" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">3</span>
                        Megrendelés és fizetés
                      </a>
                    </li>
                    <li>
                      <a href="#elallas" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">4</span>
                        Elállási jog
                      </a>
                    </li>
                    <li>
                      <a href="#szavatossag" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">5</span>
                        Szavatosság és jótállás
                      </a>
                    </li>
                    <li>
                      <a href="#panasz" className="flex items-center gap-2 text-sm text-foreground hover:text-cyan transition-colors py-1.5">
                        <span className="w-5 h-5 rounded bg-cyan/10 flex items-center justify-center text-xs font-bold text-cyan">6</span>
                        Panaszkezelés
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>

              {/* Main Content */}
              <div className="flex-1 max-w-3xl space-y-8">
                
                {/* 1. Szolgáltató adatai */}
                <section id="szolgaltato" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">1. Szolgáltató adatai</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Cégnév</p>
                        <p className="font-medium text-foreground">Németh Légtechnika Korlátolt Felelősségű Társaság</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Székhely</p>
                        <p className="font-medium text-foreground">9400 Sopron, Szent György utca 4. 2. em. 3.</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Adószám</p>
                        <p className="font-medium text-foreground">26290438-2-08</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Cégjegyzékszám</p>
                        <p className="font-medium text-foreground">08-09-029861</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Képviselő</p>
                        <p className="font-medium text-foreground">Németh Kálmán ügyvezető</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                        <a href="mailto:info@sopronterv.hu" className="font-medium text-cyan hover:underline flex items-center gap-1.5">
                          <Mail className="w-4 h-4" />
                          info@sopronterv.hu
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Server className="w-4 h-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Tárhelyszolgáltató</p>
                      </div>
                      <p className="font-medium text-foreground">EZIT Kft.</p>
                      <p className="text-sm text-muted-foreground">1132 Budapest, Victor Hugo u. 18-22.</p>
                    </div>
                  </div>
                </section>

                {/* 2. A szerződés tárgya és hatálya */}
                <section id="targy" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">2. A szerződés tárgya és hatálya</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Jelen ÁSZF szabályozza a <strong className="text-foreground">www.szelloztetes.eu</strong> (és kapcsolódó domainek) 
                        webáruházban történő vásárlás feltételeit.
                      </p>
                      <p>
                        A megrendelés leadásával a Megrendelő elismeri, hogy jelen ÁSZF rendelkezéseit megismerte 
                        és azokat magára nézve <strong className="text-foreground">kötelezőnek ismeri el</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Megrendelés és fizetés */}
                <section id="fizetes" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">3. Megrendelés és fizetés</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <p className="font-medium text-foreground mb-2">Szerződés létrejötte</p>
                        <p className="text-sm">
                          A megrendelés visszaigazolásával írásba foglalt szerződés jön létre.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-2">Fizetési módok:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Barion bankkártyás fizetés</li>
                          <li>Banki előreutalás</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-2">Árak</p>
                        <p>
                          Az árak <strong className="text-foreground">bruttó árak</strong>, HUF-ban értendők. 
                          A Kereskedő fenntartja a jogot az árváltoztatásra jelentős (5% feletti) MNB forintleértékelés esetén.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Elállási jog */}
                <section id="elallas" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <RotateCcw className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">4. Elállási jog</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A Fogyasztót a termék átvételétől számított <strong className="text-foreground">14 naptári napon belül</strong> indokolás 
                        nélküli elállási jog illeti meg.
                      </p>
                      <div className="bg-cyan/5 border border-cyan/20 rounded-lg p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan font-bold">•</span>
                            Az elállási szándékot <strong className="text-foreground">írásban</strong> kell jelezni.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan font-bold">•</span>
                            A termék visszaküldésének közvetlen költsége a <strong className="text-foreground">Fogyasztót terheli</strong>.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. Szavatosság és Jótállás */}
                <section id="szavatossag" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">5. Szavatosság és Jótállás</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A Kereskedő a Polgári Törvénykönyv (Ptk.) szerinti <strong className="text-foreground">kellékszavatosságot</strong> és 
                        a jogszabályban előírt esetekben kötelező jótállást vállal.
                      </p>
                      <p>
                        Hibás teljesítés esetén a vásárló kérheti a termék <strong className="text-foreground">kijavítását</strong> vagy <strong className="text-foreground">kicserélését</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 6. Panaszkezelés és Jogorvoslat */}
                <section id="panasz" className="scroll-mt-28">
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <Scale className="w-5 h-5 text-cyan" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">6. Panaszkezelés és Jogorvoslat</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Panaszait az alábbi e-mail címen teheti meg:
                      </p>
                      <a href="mailto:info@sopronterv.hu" className="inline-flex items-center gap-2 text-cyan hover:underline font-medium">
                        <Mail className="w-4 h-4" />
                        info@sopronterv.hu
                      </a>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="mb-3">
                          Vitás esetekben a területileg illetékes <strong className="text-foreground">Békéltető Testülethez</strong> fordulhat:
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="font-medium text-foreground mb-2">Győr-Moson-Sopron Megyei Békéltető Testület</p>
                          <p className="text-sm">9021 Győr, Szent István út 10/a.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Checkout Note */}
                <div className="bg-cyan/5 border border-cyan/20 rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Megjegyzés:</strong> A vásárlás a külső <strong className="text-foreground">szelloztetes.eu</strong> webáruházon 
                    keresztül történik, ahol a pénztár lépésnél szükséges elfogadni az ÁSZF-et a megrendelés véglegesítéséhez.
                  </p>
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
