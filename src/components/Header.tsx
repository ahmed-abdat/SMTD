"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";

import LocalSwitcher from "./local-switcher";

const navigation = [
  { name: "Accueil", href: "/" },

  { name: "À Propos", href: "/about" },

  { name: "Services", href: "/services" },

  { name: "Contact", href: "/contact" },

  { name: "Carrières", href: "/careers" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full bg-light-gray/95 backdrop-blur supports-[backdrop-filter]:bg-light-gray/60 z-50 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="SMTD Logo" width={55} height={55} />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-limeGreen ${
                  pathname === item.href ? "text-primary-forestGreen" : "text-primary-charcoal"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <LocalSwitcher />

            <Button className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen">
              Contactez-nous
            </Button>
          </div>

          <div className="flex md:hidden">
            <LocalSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6 text-primary-charcoal" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-primary-lightGray">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary-limeGreen ${
                        pathname === item.href
                          ? "text-primary-forestGreen"
                          : "text-primary-charcoal"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen w-full">
                    Contactez-nous
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
