import { writeFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { getStaticPages, getBlogSlugs } from './resolve-routes.mts'

const BASE_URL = 'https://szellozoszuro.hu'

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

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildAlternateLinks(huPath: string, dePath: string) {
  const huUrl = `${BASE_URL}${huPath}`
  const deUrl = `${BASE_URL}${dePath}`
  return [
    `    <xhtml:link rel="alternate" hreflang="hu" href="${escapeXml(huUrl)}" />`,
    `    <xhtml:link rel="alternate" hreflang="de" href="${escapeXml(deUrl)}" />`,
  ].join('\n')
}

function buildUrlEntry(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string,
  huPath: string,
  dePath: string,
) {
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
  const blogPosts = getBlogSlugs()

  const urls = []

  // Static routes — Hungarian (default, no prefix)
  for (const route of getStaticPages()) {
    const huPath = route.path
    const dePath = route.path === '/' ? '/de' : `/de${route.path}`
    const loc = `${BASE_URL}${huPath}`
    urls.push(
      buildUrlEntry(loc, today, route.sitemapChangefreq, route.sitemapPriority, huPath, dePath),
    )
  }

  // Static routes — German (/de prefix)
  for (const route of getStaticPages()) {
    const huPath = route.path
    const dePath = route.path === '/' ? '/de' : `/de${route.path}`
    const loc = `${BASE_URL}${dePath}`
    urls.push(
      buildUrlEntry(loc, today, route.sitemapChangefreq, route.sitemapPriority, huPath, dePath),
    )
  }

  // Blog post routes — Hungarian
  for (const post of blogPosts) {
    const huPath = post.pattern
    const dePath = `/de${post.pattern}`
    const loc = `${BASE_URL}${huPath}`
    const lastmod = post.date.replace(/\./g, '-')
    urls.push(
      buildUrlEntry(loc, lastmod, post.sitemapChangefreq, post.sitemapPriority, huPath, dePath),
    )
  }

  // Blog post routes — German
  for (const post of blogPosts) {
    const huPath = post.pattern
    const dePath = `/de${post.pattern}`
    const loc = `${BASE_URL}${dePath}`
    const lastmod = post.date.replace(/\./g, '-')
    urls.push(
      buildUrlEntry(loc, lastmod, post.sitemapChangefreq, post.sitemapPriority, huPath, dePath),
    )
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
