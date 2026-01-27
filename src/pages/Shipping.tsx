import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, Clock, Package, Phone, ArrowRight, Zap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Szállítási információk | szellozoszuro.hu - Gyors kiszállítás</title>
        <meta name="description" content="Raktáron lévő szűrők 24 órán belül postázva! GLS futárszolgálattal 1-3 munkanap. Rendelésre termékek 2-3 hét. Ingyenes szakértői tanácsadás: +36 20 806 9072." />
        <link rel="canonical" href="https://szellozoszuro.hu/shipping" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-cyan" />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="gradient-cyan-text">Szállítási</span> információk
              </h1>
            </div>
            <p className="text-dark-muted text-lg max-w-2xl">
              Gyors és megbízható kiszállítás az egész országban. Raktárkészletről azonnal, 
              rendelésre termékek megbízható határidővel.
            </p>
          </div>
        </section>

        {/* Main Shipping Info */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Fast Delivery Highlight */}
              <div className="bg-gradient-to-r from-cyan/10 to-cyan/5 border border-cyan/30 rounded-2xl p-6 lg:p-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-cyan" />
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                      Gyors kiszállítás raktárról
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      A <strong className="text-cyan">raktáron lévő termékeket munkanapokon 24 órán belül</strong> átadjuk 
                      a futárszolgálatnak. Ez azt jelenti, hogy a legtöbb esetben 1-3 munkanapon belül megérkezik a csomagod!
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                {/* In Stock Items */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Raktáron
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Raktáron lévő termékek
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>Munkanapokon <strong className="text-foreground">24 órán belül</strong> átadjuk a futárnak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>GLS futárszolgálattal <strong className="text-foreground">1-3 munkanap</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                      <span>Azonnali online fizetéssel gyorsabb feldolgozás</span>
                    </li>
                  </ul>
                </div>

                {/* Made to Order Items */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-600 text-xs font-semibold rounded-full">
                        Rendelésre
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    "Rendelésre" státuszú termékek
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Szállítási idő: <strong className="text-foreground">2-3 hét</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Gyártótól rendeljük meg a terméket</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Kérjük, vedd figyelembe a rendelés leadásakor!</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery Partner */}
              <div className="bg-muted rounded-2xl p-6 mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Szállítási partner
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-card flex items-center justify-center border border-border">
                    <span className="text-2xl font-bold text-yellow-500">GLS</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GLS General Logistics Systems</p>
                    <p className="text-muted-foreground text-sm">
                      Megbízható futárszolgálat csomagkövetéssel az egész országban
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Fizetési lehetőségek
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">💳</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Bankkártya</p>
                      <p className="text-muted-foreground text-xs">Azonnali feldolgozás</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">🏦</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Átutalás</p>
                      <p className="text-muted-foreground text-xs">Előre fizetés</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Utánvét</p>
                      <p className="text-muted-foreground text-xs">Fizetés átvételkor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Pickup */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Személyes átvétel
                </h3>
                <p className="text-muted-foreground mb-4">
                  Soproni telephelyünkön lehetőség van személyes átvételre, előzetes egyeztetés után.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+36208069072" className="gap-2">
                      <Phone className="w-4 h-4" />
                      +36 20 806 9072
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/contact" className="gap-2">
                      Kapcsolatfelvétel
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Order CTA */}
        <section className="py-12 lg:py-16 section-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Phone className="w-12 h-12 text-cyan mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Sürgős a rendelésed?
              </h2>
              <p className="text-dark-muted text-lg mb-8">
                Ha nagyon sürgős a szűrőcsere, hívd szakértőnket közvetlenül! 
                Segítünk a leggyorsabb megoldást megtalálni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+36208069072" className="gap-2">
                    <Phone className="w-5 h-5" />
                    +36 20 806 9072
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a 
                    href="https://szelloztetes.eu/termekkategoria/szurok/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Webshop megnyitása
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
