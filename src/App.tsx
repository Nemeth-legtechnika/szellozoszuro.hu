import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CookieConsentBanner } from '@/components/cookie-consent'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { PageKey, pages } from '@/config/pages'

import LanguageWrapper from './components/layout/LanguageWrapper'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Shipping from './pages/Shipping'
import Shop from './pages/Shop'
import Terms from './pages/Terms'

const queryClient = new QueryClient()

const pageComponentMap: Record<PageKey, React.ReactNode> = {
  home: <Index />,
  shop: <Shop />,
  blog: <Blog />,
  about: <About />,
  contact: <Contact />,
  faq: <FAQ />,
  terms: <Terms />,
  termsAlt: <Terms />,
  privacy: <Privacy />,
  shipping: <Shipping />,
}

const routes = [
  ...pages.map((page) => ({
    path: page.path,
    element: pageComponentMap[page.key],
  })),
  { path: '/blog/:slug', element: <BlogPost /> },
]

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <CookieConsentBanner />
          <Routes>
            {/* Hungarian routes (default) */}
            <Route element={<LanguageWrapper />}>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Route>

            {/* German routes with /de prefix */}
            <Route path="/de" element={<LanguageWrapper />}>
              {routes.map((route) => (
                <Route
                  key={`de-${route.path}`}
                  path={route.path === '/' ? '' : route.path.slice(1)}
                  element={route.element}
                />
              ))}
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
)

export default App
