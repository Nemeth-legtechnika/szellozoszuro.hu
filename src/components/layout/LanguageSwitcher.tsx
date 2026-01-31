import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language === 'de' ? 'de' : 'hu';

  const switchLanguage = (lang: 'hu' | 'de') => {
    if (lang === currentLang) return;

    i18n.changeLanguage(lang);

    // Update the URL to reflect language change
    const currentPath = location.pathname;
    
    if (lang === 'de') {
      // Add /de prefix if not already there
      if (!currentPath.startsWith('/de')) {
        const newPath = currentPath === '/' ? '/de' : `/de${currentPath}`;
        navigate(newPath, { replace: true });
      }
    } else {
      // Remove /de prefix for Hungarian
      if (currentPath.startsWith('/de')) {
        const newPath = currentPath.replace(/^\/de/, '') || '/';
        navigate(newPath, { replace: true });
      }
    }
  };

  return (
    <div className="flex items-center gap-1 bg-dark-secondary/50 rounded-full p-1">
      <button
        onClick={() => switchLanguage('hu')}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
          currentLang === 'hu'
            ? "bg-cyan text-dark shadow-sm"
            : "text-dark-foreground/70 hover:text-dark-foreground hover:bg-dark-secondary"
        )}
        aria-label="Magyar nyelv"
      >
        <span className="text-base leading-none">🇭🇺</span>
        <span>HU</span>
      </button>
      <button
        onClick={() => switchLanguage('de')}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
          currentLang === 'de'
            ? "bg-cyan text-dark shadow-sm"
            : "text-dark-foreground/70 hover:text-dark-foreground hover:bg-dark-secondary"
        )}
        aria-label="Deutsche Sprache"
      >
        <span className="text-base leading-none">🇩🇪</span>
        <span>DE</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
