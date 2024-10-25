"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClickWrapper({
  url,
  locale,
  className,
  children,
}: {
  url: string;
  locale: string;
  className?: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  const link = path.includes(locale)
    ? `${path.slice(0, 3)}${url}`
    : `${locale}${url}`;
  return (
    <Link href={link} passHref className={` ${className}`}>
      {children}
    </Link>
  );
}
