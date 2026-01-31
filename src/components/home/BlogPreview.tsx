import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPreview = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'de' ? '/de' : '';

  const blogPosts = [
    {
      id: 1,
      title: i18n.language === 'de' 
        ? 'Warum ist der regelmäßige Filterwechsel wichtig?' 
        : 'Miért fontos a rendszeres szűrőcsere?',
      excerpt: i18n.language === 'de'
        ? 'Der rechtzeitige Wechsel des Filters der Wärmerückgewinnungsanlage ist entscheidend für die Luftqualität und die Lebensdauer des Geräts.'
        : 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából.',
      date: i18n.language === 'de' ? '15. Januar 2024' : '2024. január 15.',
      slug: 'miert-fontos-a-rendszeres-szurocsere',
      category: i18n.language === 'de' ? 'Wartung' : 'Karbantartás',
    },
    {
      id: 2,
      title: i18n.language === 'de' 
        ? 'Filterklassen erklärt: G4 vs F7' 
        : 'Szűrőosztályok magyarázata: G4 vs F7',
      excerpt: i18n.language === 'de'
        ? 'Was unterscheidet einen Grobstaubfilter von einem Feinstaubfilter? Welchen sollten Sie je nach Bedarf wählen?'
        : 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján?',
      date: i18n.language === 'de' ? '10. Januar 2024' : '2024. január 10.',
      slug: 'szuroosztályok-magyarazata',
      category: i18n.language === 'de' ? 'Ratgeber' : 'Útmutató',
    },
    {
      id: 3,
      title: i18n.language === 'de' 
        ? 'Winterlüftung und Luftfeuchtigkeit' 
        : 'Téli szellőztetés és páratartalom',
      excerpt: i18n.language === 'de'
        ? 'Wie lösen Sie Feuchtigkeitsprobleme im Winter mit einer Wärmerückgewinnungsanlage? Praktische Tipps.'
        : 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok.',
      date: i18n.language === 'de' ? '5. Januar 2024' : '2024. január 5.',
      slug: 'teli-szelloztes-es-paratartalom',
      category: i18n.language === 'de' ? 'Tipps' : 'Tippek',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              {t('blog.title')}{' '}
              <span className="gradient-cyan-text">{t('blog.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('blog.description')}
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to={`${langPrefix}/blog`}>
              {t('blog.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`${langPrefix}/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-cyan font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                  {i18n.language === 'de' ? 'Weiterlesen' : 'Tovább olvasom'}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
