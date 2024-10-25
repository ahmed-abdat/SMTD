import React from 'react'
import Image from 'next/image'
import LocalSwitcher from '@/components/local-switcher'
import NavButton from '@/components/NavButton'
import { useTranslations } from 'next-intl'
import DockDemo from './Docke'

const Footer: React.FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations('Footer')
  const nav = useTranslations('Navigation')

  const footerLinks = [
    { title: nav('Solar Energy'), href: '/solar-energy' },
    { title: nav('Water & Electricity'), href: '/water-electricity' },
    { title: nav('Fiber Cement'), href: '/fiber-cement' },
    { title: nav('Logistics'), href: '/logistics' }
  ]

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
          <h3 className="text-lg font-semibold mb-4 text-primary-yellow">{t('services')}</h3>
          <ul>
            {footerLinks.map(link => (
              <li key={link.href}>
                <NavButton 
                  navLink={link} 
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
        <p>&copy; 2024 MBI | Modern Building Industry. {t('allRightsReserved')}</p>
      </div>
    </footer>
  )
}

export default Footer
