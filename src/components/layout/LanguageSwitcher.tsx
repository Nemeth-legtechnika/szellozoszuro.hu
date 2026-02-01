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
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => switchLanguage('hu')}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-lg",
          currentLang === 'hu'
            ? "bg-cyan ring-2 ring-cyan ring-offset-2 ring-offset-dark"
            : "bg-dark-secondary/50 hover:bg-dark-secondary opacity-60 hover:opacity-100"
        )}
        aria-label="Magyar nyelv"
      >
        🇭🇺
      </button>
      <button
        onClick={() => switchLanguage('de')}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-lg",
          currentLang === 'de'
            ? "bg-cyan ring-2 ring-cyan ring-offset-2 ring-offset-dark"
            : "bg-dark-secondary/50 hover:bg-dark-secondary opacity-60 hover:opacity-100"
        )}
        aria-label="Deutsche Sprache"
      >
        🇩🇪
      </button>
    </div>
  );
};

export default LanguageSwitcher;
