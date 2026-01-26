import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Miért fontos a rendszeres szűrőcsere?',
    excerpt: 'A hővisszanyerős rendszer szűrőjének időben történő cseréje kulcsfontosságú a levegőminőség és a gép élettartama szempontjából.',
    date: '2024. január 15.',
    slug: 'miert-fontos-a-rendszeres-szurocsere',
    category: 'Karbantartás',
  },
  {
    id: 2,
    title: 'Szűrőosztályok magyarázata: G4 vs F7',
    excerpt: 'Miben különbözik a durva porszűrő a finom pollenshűrőtől? Melyiket válaszd az igényeid alapján?',
    date: '2024. január 10.',
    slug: 'szuroosztályok-magyarazata',
    category: 'Útmutató',
  },
  {
    id: 3,
    title: 'Téli szellőztetés és páratartalom',
    excerpt: 'Hogyan kezeld a téli időszak páratartalom-problémáit hővisszanyerős rendszerrel? Praktikus tanácsok.',
    date: '2024. január 5.',
    slug: 'teli-szelloztes-es-paratartalom',
    category: 'Tippek',
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Legújabb a{' '}
              <span className="gradient-cyan-text">tudástárból</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Hasznos cikkek a szellőztetésről és szűrőkarbantartásról.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blog">
              Összes cikk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
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
                  Tovább olvasom
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
