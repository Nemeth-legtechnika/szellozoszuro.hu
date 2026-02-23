import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import usePath from '@/hooks/use-path'

const Footer = (): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const paths = usePath()

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
  ]

  return (
    <footer className='bg-dark text-dark-foreground'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5'>
          {/* Brand */}
          <div className='space-y-4'>
            <img src={logo} alt='Németh Légtechnika' className='h-12 w-auto' />
            <p className='text-sm leading-relaxed text-dark-muted'>{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-4 text-lg font-semibold'>{t('footer.quickLinks')}</h4>
            <ul className='space-y-3'>
              <li>
                <Link to={paths.shop} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('nav.filters')}
                </Link>
              </li>
              <li>
                <Link to={paths.blog.base} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('nav.knowledge')}
                </Link>
              </li>
              <li>
                <Link to={paths.about} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={paths.contact} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className='mb-4 text-lg font-semibold'>{t('footer.legal')}</h4>
            <ul className='space-y-3'>
              <li>
                <Link to={paths.shipping} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link to={paths.faq} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {i18n.language === 'de' ? 'Häufige Fragen' : 'Gyakori kérdések'}
                </Link>
              </li>
              <li>
                <Link to={paths.privacy} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to={paths.terms} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Portals - Knowledge Graph */}
          <div>
            <h4 className='mb-4 text-lg font-semibold'>
              {i18n.language === 'de' ? 'Unsere Portale' : 'Szakportáljaink'}
            </h4>
            <ul className='space-y-3'>
              {partnerPortals.map((portal) => (
                <li key={portal.name}>
                  <a
                    href={portal.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-start gap-2 text-sm text-dark-muted transition-colors hover:text-cyan'
                  >
                    <ExternalLink className='mt-0.5 size-3.5 opacity-50 group-hover:opacity-100' />
                    <div>
                      <span className='block font-medium'>{portal.name}</span>
                      <span className='block text-xs opacity-70'>{portal.description}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <p className='mt-4 text-xs leading-relaxed text-dark-muted/60'>
              {i18n.language === 'de'
                ? 'Das Fachportal-Netzwerk der Németh Légtechnika Kft.'
                : 'A Németh Légtechnika Kft. szakportál-hálózata'}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-4 text-lg font-semibold'>{t('footer.contact')}</h4>
            <ul className='space-y-3'>
              <li className='mb-1 text-xs font-medium uppercase tracking-wide text-dark-muted'>
                {i18n.language === 'de' ? 'Bestellung' : 'Rendelés'}
              </li>
              <li className='flex items-center gap-3 text-sm text-dark-muted'>
                <Phone className='size-4 text-cyan' />
                <a href='tel:+36208069072' className='transition-colors hover:text-cyan'>
                  +36 20 806 9072
                </a>
              </li>
              <li className='flex items-center gap-3 text-sm text-dark-muted'>
                <Mail className='size-4 text-cyan' />
                <a href='mailto:office@sopronterv.hu' className='transition-colors hover:text-cyan'>
                  office@sopronterv.hu
                </a>
              </li>
              <li className='mb-1 mt-4 text-xs font-medium uppercase tracking-wide text-dark-muted'>
                {i18n.language === 'de' ? 'Fachfragen' : 'Szakmai kérdések'}
              </li>
              <li className='flex items-center gap-3 text-sm text-dark-muted'>
                <Phone className='size-4 text-cyan' />
                <a href='tel:+36203238172' className='transition-colors hover:text-cyan'>
                  +36 20 323 8172
                </a>
              </li>
              <li className='flex items-center gap-3 text-sm text-dark-muted'>
                <Mail className='size-4 text-cyan' />
                <a href='mailto:info@sopronterv.hu' className='transition-colors hover:text-cyan'>
                  info@sopronterv.hu
                </a>
              </li>
              <li className='mt-4 flex items-start gap-3 text-sm text-dark-muted'>
                <MapPin className='mt-0.5 size-4 text-cyan' />
                <span>{i18n.language === 'de' ? 'Sopron, Ungarn' : 'Sopron, Magyarország'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-secondary pt-8 md:flex-row'>
          <p className='text-sm text-dark-muted'>© 2024 Németh Légtechnika Kft. {t('footer.allRights')}</p>
          <div className='flex items-center gap-6'>
            <Link to={paths.privacy} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
              {t('footer.privacy')}
            </Link>
            <Link to={paths.terms} className='text-sm text-dark-muted transition-colors hover:text-cyan'>
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
