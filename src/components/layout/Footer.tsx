import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Wind } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Németh Légtechnika" className="h-12 w-auto" />
            <p className="text-dark-muted text-sm leading-relaxed">
              Prémium szűrők hővisszanyerős szellőztetőrendszerekhez. 
              Szakértelem és minőség egy helyen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Gyors linkek</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Szűrők
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Tudástár
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Segítség</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Szállítási információk
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Gyakori kérdések
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Adatvédelmi irányelvek
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  Általános szerződési feltételek
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kapcsolat</h4>
            <ul className="space-y-3">
              <li className="text-dark-muted text-xs font-medium uppercase tracking-wide mb-1">Rendelés</li>
              <li className="flex items-center gap-3 text-dark-muted text-sm">
                <Phone className="w-4 h-4 text-cyan" />
                <a href="tel:+36208069072" className="hover:text-cyan transition-colors">
                  +36 20 806 9072
                </a>
              </li>
              <li className="flex items-center gap-3 text-dark-muted text-sm">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:office@sopronterv.hu" className="hover:text-cyan transition-colors">
                  office@sopronterv.hu
                </a>
              </li>
              <li className="text-dark-muted text-xs font-medium uppercase tracking-wide mb-1 mt-4">Szakmai kérdések</li>
              <li className="flex items-center gap-3 text-dark-muted text-sm">
                <Phone className="w-4 h-4 text-cyan" />
                <a href="tel:+36203238172" className="hover:text-cyan transition-colors">
                  +36 20 323 8172
                </a>
              </li>
              <li className="flex items-center gap-3 text-dark-muted text-sm">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:info@sopronterv.hu" className="hover:text-cyan transition-colors">
                  info@sopronterv.hu
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-muted text-sm mt-4">
                <MapPin className="w-4 h-4 text-cyan mt-0.5" />
                <span>Sopron, Magyarország</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-secondary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-muted text-sm">
            © 2024 Németh Légtechnika Kft. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-dark-muted hover:text-cyan transition-colors text-sm">
              Adatvédelem
            </Link>
            <Link to="/terms" className="text-dark-muted hover:text-cyan transition-colors text-sm">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
