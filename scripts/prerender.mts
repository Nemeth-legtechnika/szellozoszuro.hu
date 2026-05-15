import { mkdirSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import { getAllPrerenderRoutes } from './resolve-routes.mts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const DIST_DIR = resolve(__dirname, '..', 'dist')
const PORT = process.env.PRERENDER_PORT || 4173

async function prerender() {
  const routes = getAllPrerenderRoutes()
  console.log(`Prerendering ${routes.length} routes...\n`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()

  let success: string[] = []
  let failed: string[] = []

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`
    try {
      console.log(`  Rendering: ${route}`)
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 })

      const html = await page.content()

      const filePath =
        route === '/' || route === '/de'
          ? resolve(DIST_DIR, route === '/' ? 'index.html' : 'de/index.html')
          : resolve(DIST_DIR, `${route.slice(1)}/index.html`)

      mkdirSync(dirname(filePath), { recursive: true })
      writeFileSync(filePath, html, 'utf-8')
      console.log(`    done: ${filePath}`)
      success = [...success, route]
    } catch (err) {
      console.error(`    FAILED: ${route} — ${(err as Error).message}`)
      failed = [...failed, route]
    }
  }

  await browser.close()
  console.log(
    `\nDone! ${success.length} succeeded, ${failed.length} failed out of ${routes.length} routes.`,
  )
  console.log(
    `Successful routes:\n  ${success.join('\n  ')}\n\nFailed routes:\n  ${failed.join('\n  ')}`,
  )

  if (failed.length > 0) {
    process.exit(1)
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
