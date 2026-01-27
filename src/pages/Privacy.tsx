import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Building2, Database, Clock, CreditCard, Cookie, UserCheck, Scale, Mail, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Adatvédelmi Irányelvek | Németh Légtechnika Kft.</title>
        <meta name="description" content="A Németh Légtechnika Kft. adatkezelési tájékoztatója. Tájékozódjon személyes adatai védelméről a GDPR rendelkezései szerint." />
        <link rel="canonical" href="https://szellozoszuro.hu/privacy" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">Adatvédelmi Irányelvek</span>
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-3xl">
              A Németh Légtechnika Kft. elkötelezett a személyes adatok védelme mellett, és az Európai Unió 
              Általános Adatvédelmi Rendelete (GDPR) alapján az alábbi tájékoztatást adja.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Data Controller */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Az Adatkezelő adatai</h2>
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

              {/* Data Processing Points */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Főbb adatkezelési pontok</h2>
                
                <div className="space-y-6">
                  {/* Online Purchase */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Database className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Vásárlás a weboldalon</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Az adatkezelés célja az online termékértékesítés, a vásárló beazonosítása, 
                          a megrendelés teljesítése és a számlakiállítás.
                        </p>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-2">Kezelt adatok:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Név</li>
                            <li>• Számlázási cím</li>
                            <li>• Szállítási cím</li>
                            <li>• E-mail cím</li>
                            <li>• Telefonszám</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Retention */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Adatkezelés időtartama</h3>
                        <div className="space-y-3 text-muted-foreground">
                          <p className="leading-relaxed">
                            A számviteli kötelezettség teljesítése érdekében a számlázási adatokat 
                            <strong className="text-foreground"> 8 évig</strong> köteles megőrizni az Adatkezelő.
                          </p>
                          <p className="leading-relaxed">
                            Panaszbejelentés esetén a jegyzőkönyvet <strong className="text-foreground">5 évig</strong> őrizzük meg.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Transfer */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CreditCard className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Adattovábbítás</h3>
                        <div className="space-y-4 text-muted-foreground">
                          <p className="leading-relaxed">
                            A termékek kiszállítása érdekében a címzett neve és címe a futárszolgálat 
                            részére továbbításra kerül.
                          </p>
                          <div className="bg-secondary/50 rounded-lg p-4">
                            <p className="font-medium text-foreground mb-2">Online fizetés</p>
                            <p className="text-sm">
                              Az online bankkártyás fizetések a <strong>Barion</strong> rendszerén keresztül valósulnak meg. 
                              A bankkártya adatok a kereskedőhöz <strong>nem jutnak el</strong>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Cookie className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Sütik (Cookie-k)</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          A weboldal a működés biztosítása és a látogatók kiszolgálása érdekében sütiket használ. 
                          Ezek engedélyezése szükséges a rendszer használatához.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Az Ön jogai</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A GDPR rendelkezései alapján Ön az alábbi jogokkal rendelkezik személyes adatai tekintetében:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Hozzáférés joga</p>
                    <p className="text-sm text-muted-foreground">Jogosult tájékoztatást kérni arról, hogy milyen adatokat kezelünk Önről.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Helyesbítés joga</p>
                    <p className="text-sm text-muted-foreground">Kérheti pontatlan adatainak helyesbítését.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Törlés joga</p>
                    <p className="text-sm text-muted-foreground">Hozzájárulás esetén kérheti adatai törlését.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-1">Korlátozás joga</p>
                    <p className="text-sm text-muted-foreground">Kérheti az adatkezelés korlátozását.</p>
                  </div>
                </div>
              </div>

              {/* Legal Remedies */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Jogorvoslat</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Amennyiben úgy érzi, hogy megsértettük személyes adatai védelméhez való jogát, 
                  panasszal fordulhat a felügyeleti hatósághoz:
                </p>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="font-medium text-foreground mb-2">Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Cím: 1055 Budapest, Falk Miksa utca 9-11.</p>
                    <p>Postacím: 1363 Budapest, Pf. 9.</p>
                    <p>
                      Weboldal: {' '}
                      <a 
                        href="https://naih.hu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan hover:underline"
                      >
                        www.naih.hu
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact for Questions */}
              <div className="bg-cyan/5 border border-cyan/20 rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Kérdése van az adatkezeléssel kapcsolatban?</h3>
                <p className="text-muted-foreground mb-4">
                  Személyes adataival kapcsolatos kérdéseivel forduljon hozzánk bizalommal:
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

export default Privacy;
