import { ExternalLink, Filter, ArrowRight, Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import shopBrandsBg from '@/assets/shop-brands-bg.jpg';

// Brand data with external webshop links
const brands = [
  { 
    id: 'vaillant', 
    name: 'Vaillant', 
    description: 'recoVAIR szűrők',
    productCount: 13,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/vaillant-szurok/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vaillant-szuro/',
  },
  { 
    id: 'helios', 
    name: 'Helios', 
    description: 'KWL szűrők',
    productCount: 15,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/helios/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/helios-utangyartott-szurok/',
  },
  { 
    id: 'bosch', 
    name: 'BOSCH', 
    description: 'Vent szűrők',
    productCount: 5,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/bosch-szuro/',
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/bosch-utangyartott-szurok/',
  },
  { 
    id: 'defro', 
    name: 'DEFRO air', 
    description: 'DRT szűrők',
    productCount: 7,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/defro-air-szuro/',
    aftermarketLink: null,
  },
  { 
    id: 'wolf', 
    name: 'Wolf', 
    description: 'CWL szűrők',
    productCount: 10,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/wolf/',
  },
  { 
    id: 'zehnder', 
    name: 'Zehnder', 
    description: 'ComfoAir szűrők',
    productCount: 6,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/zehnder/',
  },
  { 
    id: 'vents', 
    name: 'Vents', 
    description: 'VUT szűrők',
    productCount: 7,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vents/',
  },
  { 
    id: 'aldes', 
    name: 'Aldes', 
    description: 'InspirAIR szűrők',
    productCount: 7,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/aldes/',
  },
  { 
    id: 'blauberg', 
    name: 'Blauberg', 
    description: 'KOMFORT szűrők',
    productCount: 5,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/blauberg/',
  },
  { 
    id: 'stiebel', 
    name: 'Stiebel Eltron', 
    description: 'LWZ szűrők',
    productCount: 3,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/stiebel-eltron/',
  },
  { 
    id: 'hoval', 
    name: 'Hoval', 
    description: 'HomeVent szűrők',
    productCount: 1,
    oemLink: null,
    aftermarketLink: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/hoval/',
  },
  { 
    id: 'hungaroklima', 
    name: 'Hungaroklíma', 
    description: 'HKV szűrők',
    productCount: 1,
    oemLink: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/hungaroklima-szurok/',
    aftermarketLink: null,
  },
];

// Category sections
const categories = [
  {
    title: 'Gyári szűrők',
    description: 'Eredeti gyártói minőség, teljes garancia',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/',
    icon: '🏭',
  },
  {
    title: 'Utángyártott szűrők',
    description: 'Kiváló ár-érték arány, prémium anyagok',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/',
    icon: '⭐',
  },
  {
    title: 'Szűrőház',
    description: 'Dobozos légszűrők csővezetékekhez',
    link: 'https://szelloztetes.eu/termekkategoria/szurok/szurohaz/',
    icon: '📦',
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">Szűrők</span> hővisszanyerős gépekhez
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl">
              Válassz a forgalmazott márkáink közül és találd meg a géped típusához illő szűrőt webáruházunkban.
            </p>
          </div>
        </section>

        {/* Category Quick Links */}
        <section className="py-8 lg:py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-2xl border border-border hover:border-cyan/50 p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-cyan transition-colors flex items-center gap-2">
                        {category.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="relative py-8 lg:py-12 overflow-hidden">
          {/* Background image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${shopBrandsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.25,
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Márkák szerint</h2>
              <p className="text-muted-foreground">
                Kattints a márkára a megfelelő szűrők megtekintéséhez webáruházunkban
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="group bg-card rounded-2xl border-2 border-border hover:border-cyan hover:bg-card transition-all duration-200 ease-in-out overflow-hidden hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:scale-105"
                >
                  {/* Brand Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <Filter className="w-6 h-6 text-cyan" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {brand.productCount} termék
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-foreground">{brand.name}</h3>
                    <p className="text-muted-foreground text-sm">{brand.description}</p>
                  </div>

                  {/* Action Links */}
                  <div className="px-6 pb-6 space-y-2">
                    {brand.oemLink && (
                      <a
                        href={brand.oemLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-cyan/10 hover:bg-cyan/20 text-cyan font-medium text-sm transition-colors group/link"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan" />
                          Gyári szűrők
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {brand.aftermarketLink && (
                      <a
                        href={brand.aftermarketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm transition-colors group/link"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary-foreground/50" />
                          Utángyártott szűrők
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {!brand.oemLink && !brand.aftermarketLink && (
                      <p className="text-muted-foreground text-sm text-center py-2">
                        Hamarosan
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Filters CTA */}
        <section className="py-12 lg:py-16 section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-foreground mb-4">
              Összes szűrő megtekintése
            </h2>
            <p className="text-dark-muted max-w-xl mx-auto mb-8">
              Böngéssz a teljes szűrő kínálatunkban a Szellőztetés Webshop oldalán. 
              Gyári és utángyártott szűrők 85+ termék.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a 
                href="https://szelloztetes.eu/termekkategoria/szurok/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                Webshop megnyitása
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 lg:py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-cyan" />
                  Gyors szállítás
                </h3>
                <p className="text-muted-foreground text-sm">
                  Raktárról <strong className="text-foreground">24 órán belül</strong> postázzuk, GLS-sel 1-3 nap
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Minőségi garancia</h3>
                <p className="text-muted-foreground text-sm">
                  EU-ban gyártott, tanúsított szűrőanyagok
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Szakértő tanácsadás</h3>
                <p className="text-muted-foreground text-sm">
                  Segítünk megtalálni a géped típusához illő szűrőt
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

export default Shop;
