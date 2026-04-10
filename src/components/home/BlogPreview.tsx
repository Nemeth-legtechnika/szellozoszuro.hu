import { ArrowRight, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import useBlogs from '@/hooks/use-blogs'
import usePath from '@/hooks/use-path'

const BlogPreview = () => {
  const { t } = useTranslation()
  const paths = usePath()
  const featuredBlogs = useBlogs({ filter: (post) => post.showOnHomePage })

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              {t('blog.title')}{' '}
              <span className="gradient-cyan-text">{t('blog.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t('blog.description')}</p>
          </div>
          <Button variant="outline" asChild>
            <Link to={paths.blog.base}>
              {t('blog.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredBlogs.map((post) => (
            <Link key={post.id} to={paths.blog.getPost(post.slug)} className="group block">
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
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
