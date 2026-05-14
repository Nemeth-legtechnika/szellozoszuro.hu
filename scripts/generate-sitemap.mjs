import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const BASE_URL = 'https://szellozoszuro.hu'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/shop', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/about', priority: '0.5', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/gyik', priority: '0.5', changefreq: 'monthly' },
  { path: '/aszf', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/shipping', priority: '0.5', changefreq: 'monthly' },
]

// Parse CLI args
function parseArgs() {
  const args = process.argv.slice(2)
  let output = resolve(process.cwd(), 'dist/sitemap.xml')
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--output' && args[i + 1]) {
      output = resolve(args[i + 1])
      i++
    }
  }
  return { output }
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildAlternateLinks(huPath, dePath) {
  const huUrl = `${BASE_URL}${huPath}`
  const deUrl = `${BASE_URL}${dePath}`
  return [
    `    <xhtml:link rel="alternate" hreflang="hu" href="${escapeXml(huUrl)}" />`,
    `    <xhtml:link rel="alternate" hreflang="de" href="${escapeXml(deUrl)}" />`,
  ].join('\n')
}

function buildUrlEntry(loc, lastmod, changefreq, priority, huPath, dePath) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    buildAlternateLinks(huPath, dePath),
    '  </url>',
  ].join('\n')
}

function main() {
  const { output } = parseArgs()

  const today = new Date().toISOString().split('T')[0]

  // Load blog posts
  const blogsPath = resolve(__dirname, '..', 'src', 'assets', 'data', 'blogs.json')
  const blogPosts = JSON.parse(readFileSync(blogsPath, 'utf-8'))

  const urls = []

  // Static routes — Hungarian (default, no prefix)
  for (const route of staticRoutes) {
    const huPath = route.path
    const dePath = route.path === '/' ? '/de' : `/de${route.path}`
    const loc = `${BASE_URL}${huPath}`
    urls.push(buildUrlEntry(loc, today, route.changefreq, route.priority, huPath, dePath))
  }

  // Static routes — German (/de prefix)
  for (const route of staticRoutes) {
    const huPath = route.path
    const dePath = route.path === '/' ? '/de' : `/de${route.path}`
    const loc = `${BASE_URL}${dePath}`
    urls.push(buildUrlEntry(loc, today, route.changefreq, route.priority, huPath, dePath))
  }

  // Blog post routes — Hungarian
  for (const post of blogPosts) {
    const huPath = `/blog/${post.slug}`
    const dePath = `/de/blog/${post.slug}`
    const loc = `${BASE_URL}${huPath}`
    const lastmod = post.date.replace(/\./g, '-')
    urls.push(buildUrlEntry(loc, lastmod, 'monthly', '0.7', huPath, dePath))
  }

  // Blog post routes — German
  for (const post of blogPosts) {
    const huPath = `/blog/${post.slug}`
    const dePath = `/de/blog/${post.slug}`
    const loc = `${BASE_URL}${dePath}`
    const lastmod = post.date.replace(/\./g, '-')
    urls.push(buildUrlEntry(loc, lastmod, 'monthly', '0.7', huPath, dePath))
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls.join('\n'),
    '</urlset>',
  ].join('\n')

  mkdirSync(dirname(output), { recursive: true })
  writeFileSync(output, xml, 'utf-8')

  console.log(`Sitemap written to ${output}`)
}

main()
