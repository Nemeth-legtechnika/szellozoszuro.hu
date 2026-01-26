import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const brands = [
  { name: 'Vaillant', slug: 'vaillant' },
  { name: 'Helios', slug: 'helios' },
  { name: 'Bosch', slug: 'bosch' },
  { name: 'Wolf', slug: 'wolf' },
  { name: 'Maico', slug: 'maico' },
  { name: 'Vents', slug: 'vents' },
  { name: 'Systemair', slug: 'systemair' },
  { name: 'Brink', slug: 'brink' },
];

const BrandSelector = () => {
  return (
    <section className="py-20 lg:py-28 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Válaszd ki a{' '}
            <span className="gradient-cyan-text">márkát</span>
          </h2>
          <p className="text-dark-muted text-lg">
            Szűrőket kínálunk a legismertebb hővisszanyerős szellőztetőrendszer gyártók készülékeikhez.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              to={`/shop?brand=${brand.slug}`}
              className="group relative p-6 lg:p-8 rounded-2xl bg-dark-secondary border border-dark-secondary hover:border-cyan/30 transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-xl lg:text-2xl font-semibold text-dark-foreground group-hover:text-cyan transition-colors">
                {brand.name}
              </span>
              <ArrowRight className="w-5 h-5 text-cyan opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors font-medium"
          >
            Összes márka megtekintése
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandSelector;
