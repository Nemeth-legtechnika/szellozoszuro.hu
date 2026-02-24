import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const paths = usePath()

  const navLinks = [
    { name: t('nav.home'), href: paths.home },
    { name: t('nav.filters'), href: paths.shop },
    { name: t('nav.knowledge'), href: paths.blog.base },
    { name: t('nav.about'), href: paths.about },
    { name: t('nav.contact'), href: paths.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={paths.home} className="flex items-center gap-2">
            <img src={logo} alt="Németh Légtechnika" className="h-10 lg:h-12 w-auto" />
            <span className="text-lg lg:text-xl font-bold text-dark-foreground">
              szellozoszuro<span className="text-cyan">.hu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-dark-foreground/80 hover:text-cyan transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="cta" size="lg" asChild>
              <Link to={paths.shop}>
                <ShoppingCart className="w-4 h-4" />
                {t('nav.shopFilters')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              className="text-dark-foreground p-2"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark border-t border-dark-secondary">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-dark-foreground/80 hover:text-cyan transition-colors duration-200 font-medium py-2"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" className="mt-4" asChild>
              <Link
                to={paths.shop}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                {t('nav.buyFilters')}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
