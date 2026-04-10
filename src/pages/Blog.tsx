import { ArrowRight, Calendar, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import FacebookCard from '@/components/common/FacebookCard'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JsonLdSchema from '@/components/seo/JsonLdSchema'
import useBlogs from '@/hooks/use-blogs'
import useImage from '@/hooks/use-image'
import usePath from '@/hooks/use-path'

const Blog = () => {
  const { t, i18n } = useTranslation()
  const paths = usePath()
  const { imageSrc } = useImage()
  const blogPosts = useBlogs({ filter: () => true })
  const isGerman = i18n.language === 'de'

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('blogPage.pageTitle')} | szellozoszuro.hu</title>
        <meta name="description" content={t('blogPage.pageDescription')} />
      </Helmet>

      <JsonLdSchema includeLocalBusiness={false} includeOrganization={true} />

      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">{t('blogPage.pageTitle')}</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl">{t('blogPage.pageDescription')}</p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} to={paths.blog.getPost(post.slug)} className="group block">
                  <article className="h-full bg-card rounded-2xl border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card overflow-hidden flex flex-col">
                    {/* Post Image */}
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={imageSrc(post.image)}
                        alt={isGerman ? post.titleDe : post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                          {isGerman ? post.categoryDe : post.category}
                        </span>
                        <span className="text-muted-foreground text-xs">{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                        {isGerman ? post.titleDe : post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {isGerman ? post.excerptDe : post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {isGerman
                              ? `${post.authorFirstName} ${post.authorLastName}`
                              : `${post.authorLastName} ${post.authorFirstName}`}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <FacebookCard className="mt-12" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Blog
