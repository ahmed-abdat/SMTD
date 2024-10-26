"use client";

import { useState, useCallback } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";

import LocalSwitcher from "./local-switcher";

import { useTranslations } from 'next-intl';

import { navLinks } from "@/constats/nav-links";

import NavButton from "./NavButton"; // Make sure to import the NavButton component
import { cn } from "@/lib/utils";

export function Header({
  locale,
}: {
  locale: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('Navigation');

  // Function to close the sheet
  const closeSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="sticky top-0 w-full bg-primary-lightGray backdrop-blur supports-[backdrop-filter]:bg-primary-lightGray/60 z-50 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Left side: Logo and LocalSwitcher */}
          <div className="flex items-center space-x-4">
            <Link href="/" className={cn("flex items-center", {
              "mr-2 sm:mr-4 md:mr-8": locale === "fr",
              "ml-2 sm:ml-4 md:ml-8": locale === "ar",
            })}>
              <Image src="/logo.svg" alt="SMTD Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </Link>
            <LocalSwitcher />
          </div>

          {/* Right side: Nav links and Contact Us button */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-6">
            {navLinks.map((navLink) => (
              <NavButton
                locale={locale}
                navLink={{ ...navLink, title: t(navLink.title) }}
                key={navLink.href}
                className="text-sm lg:text-base font-medium transition-colors hover:text-primary-limeGreen"
              />
            ))}
            <Button className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-2">
              {t('Contact Us')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1 sm:p-2">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-primary-charcoal" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-primary-lightGray w-[250px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((navLink) => (
                    <NavButton
                      locale={locale}
                      navLink={{ ...navLink, title: t(navLink.title) }}
                      key={navLink.href}
                      className="text-sm font-medium transition-colors hover:text-primary-limeGreen"
                      onClick={closeSheet}
                    />
                  ))}
                  <Button 
                    className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen w-full text-sm"
                    onClick={closeSheet}
                  >
                    {t('Contact Us')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
