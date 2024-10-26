"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

interface ClickWrapperProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export default function ClickWrapper({
  url,
  children,
  className,
}: ClickWrapperProps) {
  const locale = useLocale();
  const path = usePathname();

  if (!path) {
    // Handle the case where path is null
    return <span className={className}>{children}</span>;
  }

  const link = path.includes(locale)
    ? `${path.slice(0, 3)}${url}`
    : `${locale}${url}`;

  return (
    <Link href={link} className={className}>
      {children}
    </Link>
  );
}
