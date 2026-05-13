import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'

import Hero from '@/components/blog/hero'
import Section from '@/components/blog/section'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import useBlogs from '@/hooks/use-blogs'
import usePath from '@/hooks/use-path'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const paths = usePath()
  const { t } = useTranslation()
  const posts = useBlogs({ filter: (p) => p.slug === slug })

  if (posts.length === 0) {
    return <Navigate to={paths.blog.base} replace />
  }

  const post = posts[0]

  const author = `${post.authorFirstName} ${post.authorLastName}`

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | szellozoszuro.hu</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://szellozoszuro.hu/blog/${post.slug}`} />
      </Helmet>

      <JsonLdSchema includeLocalBusiness={false} includeOrganization={true} />

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero Image */}
        <Hero image={post.image} title={post.title} />

        {/* Article Content */}
        <article className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to={paths.blog.base}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Vissza a tudástárhoz
            </Link>

            {/* Header Card */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-10 shadow-lg mb-8">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-10 shadow-lg">
              <div className="prose prose-lg max-w-none">
                {post.sections.map((section) => {
                  return <Section key={section.id} item={section} />
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  {t('blog.ctaQuestion')}
                </p>
                <Link
                  to={paths.shop}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-primary-foreground font-medium rounded-lg hover:bg-cyan/90 transition-colors"
                >
                  {t('blog.ctaButton')}
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Spacer */}
        <div className="h-16 lg:h-24" />
      </main>

      <Footer />
    </div>
  )
}

export default BlogPost
