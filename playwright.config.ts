import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'test/visual',
  snapshotDir: 'test/visual/snapshots',
  snapshotPathTemplate: '{snapshotDir}/{arg}-{projectName}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.002,
    },
  },
  use: {
    baseURL: 'http://localhost:4173',
  },
  projects: [
    {
      name: 'mobile',
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: 'desktop',
      use: { viewport: { width: 1280, height: 720 } },
    },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
  },
})
