import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

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

// Define all routes with their components
const routes = [
  { path: '/', element: <Index /> },
  { path: '/shop', element: <Shop /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/gyik', element: <FAQ /> },
  { path: '/aszf', element: <Terms /> },
  { path: '/terms', element: <Terms /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/shipping', element: <Shipping /> },
]

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
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
