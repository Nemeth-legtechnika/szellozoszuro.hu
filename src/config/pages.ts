export interface PageConfig {
  key: string
  path: string
  prerender: boolean
  sitemapPriority?: string
  sitemapChangefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

export const pages = [
  { key: 'home', path: '/', prerender: true, sitemapPriority: '1.0', sitemapChangefreq: 'weekly' },
  {
    key: 'shop',
    path: '/shop',
    prerender: true,
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
  },
  {
    key: 'blog',
    path: '/blog',
    prerender: true,
    sitemapPriority: '0.8',
    sitemapChangefreq: 'daily',
  },
  {
    key: 'about',
    path: '/about',
    prerender: true,
    sitemapPriority: '0.5',
    sitemapChangefreq: 'monthly',
  },
  {
    key: 'contact',
    path: '/contact',
    prerender: true,
    sitemapPriority: '0.6',
    sitemapChangefreq: 'monthly',
  },
  {
    key: 'faq',
    path: '/gyik',
    prerender: true,
    sitemapPriority: '0.5',
    sitemapChangefreq: 'monthly',
  },
  {
    key: 'terms',
    path: '/aszf',
    prerender: false,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  {
    key: 'termsAlt',
    path: '/terms',
    prerender: false,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  {
    key: 'privacy',
    path: '/privacy',
    prerender: false,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  {
    key: 'shipping',
    path: '/shipping',
    prerender: true,
    sitemapPriority: '0.5',
    sitemapChangefreq: 'monthly',
  },
] as const satisfies readonly PageConfig[]

export type PageKey = (typeof pages)[number]['key']

export const dynamicRoutes = {
  blogPost: {
    pattern: '/blog/:slug',
    prerender: true,
    sitemapPriority: '0.7',
    sitemapChangefreq: 'monthly' as const,
  },
}
