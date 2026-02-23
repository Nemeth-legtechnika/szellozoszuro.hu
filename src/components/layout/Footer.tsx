import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';
import usePath from "@/hooks/use-path";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const paths = usePath();

  const partnerPortals = [
    {
      name: 'szelloztetes.eu',
      url: 'https://szelloztetes.eu',
      description: i18n.language === 'de' ? 'Lüftungs-Webshop' : 'Szellőztetési webshop',
    },
    {
      name: 'hoszivattyu.online',
      url: 'https://hoszivattyu.online',
      description: i18n.language === 'de' ? 'Wärmepumpen-Portal' : 'Hőszivattyú szakportál',
    },
    {
      name: 'sopronterv.hu',
      url: 'https://sopronterv.hu',
      description: i18n.language === 'de' ? 'Technische Planung' : 'Műszaki tervezés',
    },
  ];

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Németh Légtechnika" className="h-12 w-auto" />
            <p className="text-dark-muted text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to={paths.shop} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('nav.filters')}
                </Link>
              </li>
              <li>
                <Link to={paths.blog.base} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('nav.knowledge')}
                </Link>
              </li>
              <li>
                <Link to={paths.about} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={paths.contact} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to={paths.shipping} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link to={paths.faq} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {i18n.language === 'de' ? 'Häufige Fragen' : 'Gyakori kérdések'}
                </Link>
              </li>
              <li>
                <Link to={paths.privacy} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to={paths.terms} className="text-dark-muted hover:text-cyan transition-colors text-sm">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Portals - Knowledge Graph */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {i18n.language === 'de' ? 'Unsere Portale' : 'Szakportáljaink'}
            </h4>
            <ul className="space-y-3">
              {partnerPortals.map((portal) => (
                <li key={portal.name}>
                  <a 
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-dark-muted hover:text-cyan transition-colors text-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mt-0.5 opacity-50 group-hover:opacity-100" />
                    <div>
                      <span className="block font-medium">{portal.name}</span>
                      <span className="block text-xs opacity-70">{portal.description}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-dark-muted/60 text-xs mt-4 leading-relaxed">
              {i18n.language === 'de' 
                ? 'Das Fachportal-Netzwerk der Németh Légtechnika Kft.' 
                : 'A Németh Légtechnika Kft. szakportál-hálózata'}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="text-dark-muted text-xs font-medium uppercase tracking-wide mb-1">
                {i18n.language === 'de' ? 'Bestellung' : 'Rendelés'}
              </li>
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
              <li className="text-dark-muted text-xs font-medium uppercase tracking-wide mb-1 mt-4">
                {i18n.language === 'de' ? 'Fachfragen' : 'Szakmai kérdések'}
              </li>
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
                <span>{i18n.language === 'de' ? 'Sopron, Ungarn' : 'Sopron, Magyarország'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-secondary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-muted text-sm">
            © 2024 Németh Légtechnika Kft. {t('footer.allRights')}
          </p>
          <div className="flex items-center gap-6">
            <Link to={paths.privacy} className="text-dark-muted hover:text-cyan transition-colors text-sm">
              {t('footer.privacy')}
            </Link>
            <Link to={paths.terms} className="text-dark-muted hover:text-cyan transition-colors text-sm">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
