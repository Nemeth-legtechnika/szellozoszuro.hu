import { Helmet } from 'react-helmet-async';
import { FileText, Building2, CreditCard, RotateCcw, Shield } from 'lucide-react';
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
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Intro */}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Ennek megfelelően tartalmazza a jelen ÁSZF az Önt és bennünket illető jogokat és 
                  kötelezettségeket, a szerződés létrejöttének feltételeit, a teljesítési határidőket, 
                  a szállítási és fizetési feltételeket, a felelősségi szabályokat, valamint az elállási 
                  jog gyakorlásának feltételeit.
                </p>
              </div>

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
                    <p className="font-medium text-foreground">Németh Légtechnika Kft.</p>
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
                    <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                    <a href="mailto:info@sopronterv.hu" className="font-medium text-cyan hover:underline">
                      info@sopronterv.hu
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefonszám</p>
                    <a href="tel:+36203238172" className="font-medium text-cyan hover:underline">
                      +36 20 323 8172
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Provisions */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Főbb rendelkezések</h2>
                
                <div className="space-y-6">
                  {/* Contract Formation */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-cyan font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Szerződés létrejötte</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          A megrendelés leadása ajánlattételnek minősül, a szerződés a Kereskedő tényleges 
                          visszaigazolásával jön létre. A visszaigazolást e-mailben küldjük meg a megrendeléskor 
                          megadott e-mail címre.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CreditCard className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Fizetés</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Az online bankkártyás fizetés a Barion biztonságos rendszerén keresztül történik. 
                          A Barion Payment Zrt. a Magyar Nemzeti Bank felügyelete alatt álló intézmény, 
                          engedélyének száma: H-EN-I-1064/2013. Emellett elfogadunk banki átutalást és 
                          utánvétes fizetést is.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right of Withdrawal */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <RotateCcw className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Elállási jog</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          A fogyasztót a termék átvételétől számított 14 naptári napon belül indokolás 
                          nélküli elállási jog illeti meg. Az elállási szándékot írásban kell közölni 
                          az info@sopronterv.hu e-mail címen. A terméket sértetlen, eredeti csomagolásban 
                          kell visszaküldeni.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warranty */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Szavatosság</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Hibás teljesítés esetén a vásárló kellékszavatossági vagy jótállási igényt 
                          érvényesíthet. A kellékszavatossági igény a termék átvételétől számított 2 évig 
                          érvényesíthető. A jótállás a termék rendeltetésszerű használat mellett való 
                          hibátlan működését garantálja.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-secondary/50 rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">További információk</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A teljes körű vásárlás a{' '}
                  <a 
                    href="https://szelloztetes.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    szelloztetes.eu
                  </a>{' '}
                  webáruházon keresztül történik, ahol a részletes ÁSZF, adatvédelmi tájékoztató és 
                  egyéb jogi dokumentumok is elérhetők.
                </p>
                <p className="text-muted-foreground text-sm">
                  Utolsó frissítés: 2024. január
                </p>
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
