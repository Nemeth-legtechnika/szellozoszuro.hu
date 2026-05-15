# szellozoszuro.hu

E-commerce website for ventilation filters, serving the Hungarian and German markets. Built as a single-page application with bilingual support.

**Live site:** [szellozoszuro.hu](https://szellozoszuro.hu)

## Tech Stack

| Layer     | Technology                                |
| --------- | ----------------------------------------- |
| Framework | React 18 + TypeScript                     |
| Build     | Vite 5 (SWC)                              |
| Routing   | React Router DOM v6                       |
| Styling   | Tailwind CSS 3 + shadcn/ui                |
| i18n      | i18next (Hungarian + German)              |
| Forms     | React Hook Form + Zod                     |
| SEO       | react-helmet-async, prerendering, sitemap |
| Testing   | Vitest + Testing Library                  |
| Linting   | ESLint 9 (flat config) + Prettier         |

## Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Available Scripts

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start Vite dev server                 |
| `npm run build`      | Production build + sitemap generation |
| `npm run preview`    | Preview production build locally      |
| `npm run prerender`  | Prerender routes for SEO              |
| `npm run lint`       | Run ESLint                            |
| `npm run lint:fix`   | Run ESLint with auto-fix              |
| `npm run format`     | Format code with Prettier             |
| `npm run tsc`        | Type-check without emitting           |
| `npm test`           | Run tests with Vitest                 |
| `npm run test:watch` | Run tests in watch mode               |

## Project Structure

```
src/
  assets/        — Static images
  components/
    ui/          — shadcn/ui primitives
    layout/      — Header, Footer, LanguageSwitcher
    home/        — Homepage sections
    contact/     — ContactForm
    seo/         — JSON-LD schema
  hooks/         — Custom hooks
  i18n/locales/  — hu.json, de.json translations
  pages/         — Route-level components
  lib/           — Utilities (cn helper)
```

## Routing

- Hungarian routes at root: `/shop`, `/blog`, `/rolunk`, etc.
- German routes prefixed: `/de/shop`, `/de/blog`, `/de/uber-uns`, etc.
- Hungarian is the default language.

## Deployment

Deployed to GitHub Pages. The build process generates a sitemap and robots.txt for SEO. Prerendering is available via `npm run prerender` for static HTML generation of all routes.
