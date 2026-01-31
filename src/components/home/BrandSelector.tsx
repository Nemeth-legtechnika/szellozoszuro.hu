import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import brandSelectorBg from '@/assets/brand-selector-bg.jpg';

const brands = [
  { name: 'Vaillant', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vaillant-szuro/' },
  { name: 'Bosch', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/bosch-utangyartott-szurok/' },
  { name: 'Helios', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/helios-utangyartott-szurok/' },
  { name: 'Atrea', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/' },
  { name: 'Aereco', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/' },
  { name: 'Aldes', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/aldes/' },
  { name: 'Wolf', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/wolf/' },
  { name: 'Blauberg', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/blauberg/' },
  { name: 'Hoval', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/hoval/' },
  { name: 'Stiebel Eltron', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/stiebel-eltron/' },
  { name: 'Vents', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/vents/' },
  { name: 'Zehnder', link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/zehnder/' },
];

const BrandSelector = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `url(${brandSelectorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlays - matching hero section style */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark-foreground">
            {t('brandSelector.title')}{' '}
            <span className="gradient-cyan-text">{t('brandSelector.titleHighlight')}</span>
          </h2>
          <p className="text-dark-muted text-lg">
            {t('brandSelector.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 lg:p-6 rounded-2xl bg-dark-bg-secondary/60 backdrop-blur-md border border-white/10 hover:border-cyan/40 hover:bg-dark-bg-secondary/80 transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-lg lg:text-xl font-semibold text-dark-foreground group-hover:text-cyan transition-colors">
                {brand.name}
              </span>
              <ArrowRight className="w-4 h-4 text-cyan opacity-0 group-hover:opacity-100 absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors font-medium"
          >
            {t('brandSelector.viewProducts')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandSelector;
