"use client";

import { useState, useCallback } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

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
          <div className="flex items-center">
            <Link href="/" className={cn("flex items-center", {
              "mr-8": locale === "fr",
              "ml-8": locale === "ar",
            })}>
              <Image src="/logo.svg" alt="SMTD Logo" width={55} height={55} />
            </Link>
            <LocalSwitcher />
          </div>

          {/* Right side: Nav links and Contact Us button */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((navLink) => (
              <NavButton
                locale={locale}
                navLink={{ ...navLink, title: t(navLink.title) }}
                key={navLink.href}
                className="text-base font-medium transition-colors hover:text-primary-limeGreen"
              />
            ))}
            <Button className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen">
              {t('Contact Us')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary-charcoal" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-primary-lightGray">
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
                    className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen w-full"
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
