import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { DynamicRouteConfig, dynamicRoutes, pages } from '../src/config/pages.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export type BlogRouteConfig = DynamicRouteConfig & {
  date: string
}

export function getStaticPages() {
  return pages
}

export function getBlogSlugs(): BlogRouteConfig[] {
  const blogsPath = resolve(__dirname, '..', 'src', 'assets', 'data', 'blogs.json')
  const blogs = JSON.parse(readFileSync(blogsPath, 'utf-8'))
  return blogs.map((b: { slug: string; date: string }) => ({
    ...dynamicRoutes.blogPost,
    pattern: dynamicRoutes.blogPost.pattern.replace(':slug', b.slug),
    date: b.date,
  }))
}

export function getAllPrerenderRoutes(): string[] {
  const staticPages = getStaticPages().filter((p) => p.prerender)
  const blogSlugs = getBlogSlugs()
  const routes: string[] = []

  for (const page of staticPages) {
    routes.push(page.path)
    routes.push(page.path === '/' ? '/de' : `/de${page.path}`)
  }

  for (const post of blogSlugs) {
    routes.push(post.pattern)
    routes.push(`/de${post.pattern}`)
  }

  return routes
}
