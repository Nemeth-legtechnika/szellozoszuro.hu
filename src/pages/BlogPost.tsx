import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import useBlogs from '@/hooks/use-blogs'
import useImage from '@/hooks/use-image'
import usePath from '@/hooks/use-path'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const paths = usePath()
  const { imageSrc } = useImage()
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
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img src={imageSrc(post.image)} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

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
                  if (section.type === 'intro') {
                    return (
                      <p key={section.id} className="text-lg text-foreground leading-relaxed mb-8">
                        {section.content}
                      </p>
                    )
                  }

                  if (section.type === 'heading') {
                    return (
                      <div key={section.id} className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    )
                  }

                  if (section.type === 'callout') {
                    return (
                      <div
                        key={section.id}
                        className="mt-10 p-6 rounded-xl bg-cyan/10 border-l-4 border-cyan"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-cyan">💡</span>
                          {section.title}
                        </h3>
                        <p className="text-foreground font-medium">{section.content}</p>
                      </div>
                    )
                  }

                  if (section.type === 'image') {
                    return (
                      <div key={section.id} className="my-10">
                        <img
                          src={imageSrc(section.image)}
                          alt={section.caption}
                          className="w-full rounded-xl border border-border shadow-md"
                        />
                        {section.caption && (
                          <p className="mt-3 text-sm text-muted-foreground text-center italic">
                            {section.caption}
                          </p>
                        )}
                      </div>
                    )
                  }

                  return null
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Szeretné megrendelni a megfelelő szűrőket?
                </p>
                <Link
                  to={paths.shop}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-primary-foreground font-medium rounded-lg hover:bg-cyan/90 transition-colors"
                >
                  Szűrők böngészése
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
