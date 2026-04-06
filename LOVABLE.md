# STOP — READ THIS ENTIRE FILE BEFORE MAKING ANY CHANGES

> **Scope:** This document contains rules for **Lovable** (the AI code editor). These rules do not apply to human contributors or other tooling — they exist because Lovable has repeatedly broken the project by modifying configs, adding unwanted dependencies, and switching package managers.

You MUST read and follow every rule in this document before writing a single line of code. Violating these rules will break the project.

**Important note:** The person reviewing your changes is not a developer. If you need to make any change that is not straightforward (e.g., modifying configuration, adding a dependency, changing project structure), you MUST explain in plain language WHY the change is necessary — both as a code comment and in the commit description. If something could break or confuse the reviewer, explain it clearly.

---

## CRITICAL RULES — NEVER BREAK THESE

### 1. NEVER touch configuration files

Do NOT modify any of these files under ANY circumstances:

- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- `vite.config.ts`
- `tailwind.config.ts`
- `postcss.config.js`
- `eslint.config.js`
- `.prettierrc`
- `.gitignore`
- Any other config file in the project root

If you think a config change is needed, STOP and tell the user. Do not make the change yourself.

**Exception — `package.json` dependencies only:** If the feature you are implementing genuinely requires a NEW package that is not already installed, you MAY add it to `package.json`. However, you MUST add a comment in the commit message explaining:

- What package you added
- Why it is needed
- What breaks without it

You still must NOT change scripts, existing dependency versions, or any other field in `package.json`.

### 2. NO Supabase

This project does NOT use Supabase. Do NOT:

- Import from `@supabase/supabase-js`
- Create Supabase clients, hooks, or utilities
- Add Supabase-related code of any kind
- Suggest or reference Supabase in any way

### 3. Package manager: npm or pnpm ONLY

This project uses **npm** or **pnpm**. Do NOT:

- Use `bun` or any bun-related commands
- Reference `bun.lockb` or bun APIs
- Switch the project to bun in any way

---

## Tech Stack

| Layer         | Technology                                                   |
| ------------- | ------------------------------------------------------------ |
| Framework     | React 18 with TypeScript                                     |
| Build tool    | Vite 5 (with `@vitejs/plugin-react-swc`)                     |
| Routing       | React Router DOM v6                                          |
| Styling       | Tailwind CSS 3 with CSS custom properties (HSL color system) |
| UI primitives | shadcn/ui (Radix UI + CVA + `cn()` utility)                  |
| Icons         | Lucide React                                                 |
| i18n          | i18next + react-i18next (Hungarian `hu` + German `de`)       |
| Forms         | React Hook Form + Zod                                        |
| State/data    | TanStack React Query                                         |
| SEO           | react-helmet-async                                           |
| Testing       | Vitest + Testing Library                                     |
| Linting       | ESLint 9 (flat config) + Prettier                            |

## Project Structure

```
src/
  assets/          — Static images (blog, team, backgrounds)
  components/
    ui/            — shadcn/ui primitives (button, card, accordion, form, input, etc.)
    layout/        — Header, Footer, LanguageSwitcher, LanguageWrapper
    home/          — Homepage sections (Hero, BrandSelector, BlogPreview, etc.)
    contact/       — ContactForm
    seo/           — JsonLdSchema
  hooks/           — Custom hooks (use-mobile, use-path)
  i18n/
    locales/       — hu.json, de.json translation files
    index.ts       — i18next configuration
  lib/
    utils.ts       — cn() helper (clsx + tailwind-merge)
  pages/           — Route-level page components
  test/            — Test setup
  main.tsx         — App entry point
  App.tsx          — Router & provider setup
  index.css        — Tailwind base, component, and utility layers + CSS variables
```

## Coding Conventions

### Component rules

- **Every new visual element that requires more than 5 lines of code MUST be extracted into its own component file.** Do not inline large JSX blocks.
- Place components in the appropriate subdirectory under `src/components/`.
- Page-level components go in `src/pages/`.
- Use functional components with arrow function syntax: `const MyComponent = () => { ... }`.
- Export components as default exports.

### Styling

- Use **Tailwind CSS utility classes** for all styling. Do not write custom CSS unless absolutely necessary.
- Use the project's **CSS custom properties** (defined in `src/index.css`) via Tailwind's configured colors: `primary`, `secondary`, `cyan`, `dark`, `muted`, etc.
- Use the `cn()` utility from `@/lib/cn` to merge conditional class names.
- Use the existing shadcn/ui components from `src/components/ui/` — do not recreate them.
- The design uses a **cyan accent color** (`hsl(187, 100%, 50%)`) as the brand color.

### Imports

- Use the `@/` path alias for imports from `src/` (e.g., `import { Button } from '@/components/ui/button'`).
- Imports are auto-sorted by `eslint-plugin-simple-import-sort`. Follow the existing sort order: external packages first, then `@/` alias imports, then relative imports.

### Internationalization (i18n)

- ALL user-facing text MUST use translation keys via `useTranslation()`.
- Never hardcode user-facing strings.
- Translation files: `src/i18n/locales/hu.json` (Hungarian) and `src/i18n/locales/de.json` (German).
- Hungarian is the default/fallback language.

### Code formatting

- **No semicolons** (enforced by Prettier)
- **Single quotes** (enforced by Prettier)
- **2-space indentation**
- **Trailing commas** everywhere
- **100 character print width**
- No `any` types — TypeScript strict mode is enforced by ESLint

### Routing

- Routes are defined in `src/App.tsx` as a flat array.
- Hungarian routes are at the root (`/shop`, `/blog`, etc.).
- German routes are prefixed with `/de` (`/de/shop`, `/de/blog`, etc.).
- Use the `usePath()` hook from `@/hooks/use-path` to get locale-aware paths for links.

---

## Git Commits

Every time you create a commit, follow these rules:

### Commit title

Use a short, descriptive title that explains WHAT changed. Format:

```
<type>: <short description>
```

Where `<type>` is one of:

- `feat` — new feature or visible change
- `fix` — bug fix
- `style` — visual/CSS-only change
- `refactor` — code restructure with no behavior change
- `chore` — maintenance, cleanup, dependency updates
- `content` — text, translation, or blog content changes

Examples:

- `feat: Add product filter sidebar to shop page`
- `fix: Hero section CTA button not linking to shop`
- `content: Add new blog post about filter maintenance`
- `style: Adjust spacing on mobile FAQ page`

### Commit description

Every commit MUST include a description body that explains:

1. **What** was changed (list the files or components affected)
2. **Why** it was changed (what problem does it solve or what feature does it add)
3. If a new dependency was added: what it is and why it was needed

Example:

```
feat: Add product filter sidebar to shop page

- Created new FilterSidebar component in src/components/shop/
- Added filter state management to Shop page
- Added translation keys for filter labels in hu.json and de.json

This allows users to filter products by brand and filter type,
which was requested to improve the shopping experience.
```

### What NOT to do

- Do NOT leave the commit title as just "Update" or "Changes" or auto-generated text
- Do NOT commit without a description body
- Do NOT bundle unrelated changes into a single commit

---

## Summary checklist before every change

- [ ] Did I read this entire file?
- [ ] Am I leaving ALL config files untouched?
- [ ] Am I NOT adding Supabase?
- [ ] Am I NOT using bun?
- [ ] Am I using translation keys for all user-facing text?
- [ ] Am I extracting components for any visual block > 5 lines?
- [ ] Am I using existing shadcn/ui components and Tailwind classes?
- [ ] Am I following the code formatting rules (no semicolons, single quotes, etc.)?
