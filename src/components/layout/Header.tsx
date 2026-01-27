import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Főoldal', href: '/' },
    { name: 'Szűrők', href: '/shop' },
    { name: 'Tudástár', href: '/blog' },
    { name: 'Rólunk', href: '/about' },
    { name: 'Kapcsolat', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/shop">
                <ShoppingCart className="w-4 h-4" />
                Szűrők
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" className="mt-4" asChild>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="w-4 h-4" />
                Szűrők vásárlása
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
