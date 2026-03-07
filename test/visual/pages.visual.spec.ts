import { expect, test } from '@playwright/test'

const pages = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'blog', path: '/blog' },
  { name: 'blog-post', path: '/blog/miert-fontos-a-rendszeres-szurocsere' },
  { name: 'contact', path: '/contact' },
  { name: 'faq', path: '/gyik' },
  { name: 'about', path: '/about' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/aszf' },
  { name: 'shipping', path: '/shipping' },
]

for (const { name, path } of pages) {
  test(`${name} page matches screenshot`, async ({ page }) => {
    await page.goto(path)
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true })
  })
}
