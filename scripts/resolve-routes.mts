import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { pages } from '../src/config/pages.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface BlogSlug {
  slug: string
  date: string
}

export function getStaticPages() {
  return pages
}

export function getBlogSlugs(): BlogSlug[] {
  const blogsPath = resolve(__dirname, '..', 'src', 'assets', 'data', 'blogs.json')
  const blogs = JSON.parse(readFileSync(blogsPath, 'utf-8'))
  return blogs.map((b: { slug: string; date: string }) => ({ slug: b.slug, date: b.date }))
}

export function getAllPrerenderRoutes(): string[] {
  const staticPages = getStaticPages().filter((p) => p.prerender)
  const blogSlugs = getBlogSlugs()
  const routes: string[] = []

  for (const page of staticPages) {
    routes.push(page.path)
    routes.push(page.path === '/' ? '/de' : `/de${page.path}`)
  }

  for (const { slug } of blogSlugs) {
    routes.push(`/blog/${slug}`)
    routes.push(`/de/blog/${slug}`)
  }

  return routes
}
