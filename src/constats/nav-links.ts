export interface NewsnavLink {
  title: string;
  href: string;
}

export interface NewsMenuLink {
  title: string;
  href: string;
}

export const navLinks: NewsnavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Careers", href: "/careers" },
  { title: "Multimedia", href: "/multimedia" },
];
