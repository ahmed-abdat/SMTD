import React from 'react'
import Image from 'next/image'
import LocalSwitcher from '@/components/local-switcher'
import NavButton from '@/components/NavButton'
import { useTranslations } from 'next-intl'
import DockDemo from './Docke'
import { navLinks } from '@/constats/nav-links'

const Footer: React.FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations('Footer')
  const nav = useTranslations('Navigation')

  return (
    <footer className="bg-primary-forestGreen text-primary-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image src="/logo.svg" alt="MBI Logo" width={160} height={160} />
          <p className="mt-4 text-primary-offWhite">
            {t('location')}
          </p>
          <DockDemo />
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-primary-yellow">{t('contactUs')}</h3>
          <p className="text-primary-offWhite">
            <span>{t('phone')}: </span>00222-42022255<br />
            <span>{t('mobile')}: </span>00222-42022244<br />
            <span>{t('email')}: </span>info@mbirim.com
          </p>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-primary-yellow">{t('QuickLinks')}</h3>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <NavButton 
                  navLink={{ ...link, title: nav(link.title) }}
                  locale={locale} 
                  className="text-primary-offWhite hover:text-primary-yellow transition-all duration-150" 
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-primary-yellow">{t('switchLanguage')}</h3>
          <LocalSwitcher />
        </div>
      </div>
      <div className="text-center mt-8 text-primary-offWhite">
        <p >&copy; {new Date().getFullYear()}  {t('companyName')} | {t('companyShortName')}  {t('allRightsReserved')}</p>
      </div>
    </footer>
  )
}

export default Footer
