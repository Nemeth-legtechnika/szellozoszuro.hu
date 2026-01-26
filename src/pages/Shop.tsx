import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const brands = [
  { id: 'all', name: 'Összes márka' },
  { id: 'zehnder', name: 'Zehnder' },
  { id: 'helios', name: 'Helios' },
  { id: 'wolf', name: 'Wolf' },
  { id: 'vallox', name: 'Vallox' },
  { id: 'maico', name: 'Maico' },
  { id: 'vents', name: 'Vents' },
  { id: 'systemair', name: 'Systemair' },
  { id: 'brink', name: 'Brink' },
];

const filterClasses = [
  { id: 'all', name: 'Összes osztály', description: '' },
  { id: 'g4', name: 'G4', description: 'Durva porszűrő' },
  { id: 'm5', name: 'M5', description: 'Közepes szűrő' },
  { id: 'f7', name: 'F7', description: 'Finom pollenshűrő' },
];

interface Product {
  id: number;
  name: string;
  brand: string;
  filterClass: string;
  compatibility: string;
  price: number;
  originalPrice?: number;
  isOEM: boolean;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: 'Zehnder ComfoAir Q350 szűrőkészlet', brand: 'zehnder', filterClass: 'g4', compatibility: 'ComfoAir Q350/Q450', price: 8900, originalPrice: 12500, isOEM: false, inStock: true },
  { id: 2, name: 'Zehnder ComfoAir Q350 G4+F7 készlet', brand: 'zehnder', filterClass: 'f7', compatibility: 'ComfoAir Q350/Q450', price: 14900, isOEM: true, inStock: true },
  { id: 3, name: 'Helios KWL EC 300 szűrő', brand: 'helios', filterClass: 'g4', compatibility: 'KWL EC 300/370', price: 6900, isOEM: false, inStock: true },
  { id: 4, name: 'Helios KWL EC 300 F7 pollenshűrő', brand: 'helios', filterClass: 'f7', compatibility: 'KWL EC 300/370', price: 11500, isOEM: true, inStock: false },
  { id: 5, name: 'Wolf CWL 300 szűrőkészlet', brand: 'wolf', filterClass: 'g4', compatibility: 'CWL 300/400', price: 7500, originalPrice: 9900, isOEM: false, inStock: true },
  { id: 6, name: 'Wolf CWL 300 M5 szűrő', brand: 'wolf', filterClass: 'm5', compatibility: 'CWL 300/400', price: 8900, isOEM: false, inStock: true },
  { id: 7, name: 'Vallox 96 SE G4 szűrő', brand: 'vallox', filterClass: 'g4', compatibility: 'Vallox 96/121', price: 5900, isOEM: false, inStock: true },
  { id: 8, name: 'Vallox 96 SE F7 pollenshűrő', brand: 'vallox', filterClass: 'f7', compatibility: 'Vallox 96/121', price: 9900, isOEM: true, inStock: true },
  { id: 9, name: 'Maico WS 320 KB szűrő', brand: 'maico', filterClass: 'g4', compatibility: 'WS 320 KB/KBR', price: 6500, isOEM: false, inStock: true },
  { id: 10, name: 'Brink Renovent HR szűrő', brand: 'brink', filterClass: 'g4', compatibility: 'Renovent HR', price: 7200, originalPrice: 8500, isOEM: false, inStock: true },
  { id: 11, name: 'Systemair VTC 300 szűrő', brand: 'systemair', filterClass: 'g4', compatibility: 'VTC 300/500', price: 5500, isOEM: false, inStock: true },
  { id: 12, name: 'Vents VUT 350 szűrő', brand: 'vents', filterClass: 'g4', compatibility: 'VUT 350/550', price: 4900, isOEM: false, inStock: true },
];

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const classMatch = selectedClass === 'all' || product.filterClass === selectedClass;
    return brandMatch && classMatch;
  });

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Márka</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedBrand === brand.id
                  ? 'bg-cyan/10 text-cyan font-medium'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Class */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Szűrőosztály</h3>
        <div className="space-y-2">
          {filterClasses.map((fc) => (
            <button
              key={fc.id}
              onClick={() => setSelectedClass(fc.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedClass === fc.id
                  ? 'bg-cyan/10 text-cyan font-medium'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <span>{fc.name}</span>
              {fc.description && (
                <span className="block text-xs text-muted-foreground mt-0.5">{fc.description}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

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
              Találd meg a géped típusához illő szűrőt. Szűrj márka és szűrőosztály szerint.
            </p>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-28 bg-card rounded-2xl border border-border p-6">
                  <FilterSidebar />
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowMobileFilters(true)}
                    className="w-full"
                  >
                    <Filter className="w-4 h-4" />
                    Szűrők ({selectedBrand !== 'all' || selectedClass !== 'all' ? 'aktív' : 'összes'})
                  </Button>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> termék
                  </p>
                  {(selectedBrand !== 'all' || selectedClass !== 'all') && (
                    <button
                      onClick={() => { setSelectedBrand('all'); setSelectedClass('all'); }}
                      className="text-cyan text-sm hover:underline"
                    >
                      Szűrők törlése
                    </button>
                  )}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-card rounded-2xl border border-border hover:border-cyan/30 transition-all duration-300 overflow-hidden hover:shadow-card"
                    >
                      {/* Product Image Placeholder */}
                      <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto rounded-xl bg-cyan/10 flex items-center justify-center mb-3">
                            <Filter className="w-8 h-8 text-cyan" />
                          </div>
                          <span className="text-xs text-muted-foreground">{product.filterClass.toUpperCase()}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        {/* Badges */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 rounded-md bg-cyan/10 text-cyan text-xs font-medium">
                            {product.filterClass.toUpperCase()}
                          </span>
                          {product.isOEM ? (
                            <span className="px-2 py-1 rounded-md bg-primary/10 text-foreground text-xs font-medium">
                              Gyári
                            </span>
                          ) : (
                            <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                              Utángyártott
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="px-2 py-1 rounded-md bg-destructive/10 text-destructive text-xs font-medium">
                              Elfogyott
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-cyan transition-colors">
                          {product.name}
                        </h3>
                        
                        {/* Compatibility */}
                        <p className="text-muted-foreground text-sm mb-4">
                          Kompatibilis: {product.compatibility}
                        </p>

                        {/* Price & Button */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-foreground">
                              {product.price.toLocaleString()} Ft
                            </span>
                            {product.originalPrice && (
                              <span className="block text-sm text-muted-foreground line-through">
                                {product.originalPrice.toLocaleString()} Ft
                              </span>
                            )}
                          </div>
                          <Button 
                            size="sm" 
                            disabled={!product.inStock}
                            className="gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Kosárba
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-muted flex items-center justify-center mb-4">
                      <Filter className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Nincs találat</h3>
                    <p className="text-muted-foreground mb-4">
                      A kiválasztott szűrőkkel nem találtunk terméket.
                    </p>
                    <Button variant="outline" onClick={() => { setSelectedBrand('all'); setSelectedClass('all'); }}>
                      Szűrők törlése
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-dark/80" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-card p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Szűrők</h2>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterSidebar />
            <Button className="w-full mt-6" onClick={() => setShowMobileFilters(false)}>
              Szűrés alkalmazása
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
