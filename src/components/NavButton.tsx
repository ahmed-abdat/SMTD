'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({
  navLink,
  locale,
  className,
}: {
  navLink: {
    title : string
    href : string 
  };
  locale : string;
  className?: string;
}) {

  const path = usePathname()

  const link = path.includes(locale) ? `${path.slice(0,3)}${navLink.href}` : `${locale}${navLink.href}`
  return (
    <Button
      asChild
      variant={"link"}
      className=" transition-all duration-150 text-lg"
      aria-label={navLink.href}
    >
      <Link href={link} className={` ${className}`}>
        {navLink.title}
      </Link>
    </Button>
  );
}
