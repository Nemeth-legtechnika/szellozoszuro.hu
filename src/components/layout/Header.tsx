import { Menu, ShoppingCart, X } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import usePath from '@/hooks/use-path'

import LanguageSwitcher from './LanguageSwitcher'

const Header = (): React.ReactElement => {
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
    <header className='fixed inset-x-0 top-0 z-50 border-b border-dark-secondary bg-dark/95 backdrop-blur-md'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between lg:h-20'>
          {/* Logo */}
          <Link to={paths.home} className='flex items-center gap-2'>
            <img src={logo} alt='Németh Légtechnika' className='h-10 w-auto lg:h-12' />
            <span className='text-lg font-bold text-dark-foreground lg:text-xl'>
              szellozoszuro<span className='text-cyan'>.hu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden items-center gap-8 lg:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className='text-sm font-medium text-dark-foreground/80 transition-colors duration-200 hover:text-cyan'
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Language Switcher */}
          <div className='hidden items-center gap-4 lg:flex'>
            <LanguageSwitcher />
            <Button variant='cta' size='lg' asChild>
              <Link to={paths.shop}>
                <ShoppingCart className='size-4' />
                {t('nav.shopFilters')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex items-center gap-3 lg:hidden'>
            <LanguageSwitcher />
            <button type='button' className='p-2 text-dark-foreground' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className='size-6' /> : <Menu className='size-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='border-t border-dark-secondary bg-dark lg:hidden'>
          <nav className='container mx-auto flex flex-col gap-4 p-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className='py-2 font-medium text-dark-foreground/80 transition-colors duration-200 hover:text-cyan'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant='cta' className='mt-4' asChild>
              <Link to={paths.shop} onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className='size-4' />
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
