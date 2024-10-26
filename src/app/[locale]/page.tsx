import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ImpactSection from '@/components/ImpactSection';
import HeroVideoSection from '@/components/HeroVideoSection';

type Locale = "fr" | "ar";
interface HomeProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: "SMTD - Pour un Environnement Plus Propre",
  description: "Leader en gestion et valorisation des déchets en Mauritanie. Découvrez nos services de collecte, recyclage et traitement écologique des déchets.",
  openGraph: {
    title: "SMTD - Solutions Durables pour la Gestion des Déchets",
    description: "Explorez comment SMTD transforme la gestion des déchets en Mauritanie pour un avenir plus vert.",
    images: ['/opengraph-image.jpg'], // Add the path to your home page Open Graph image
  },
  twitter: {
    card: 'summary_large_image',
    title: "SMTD - Innovons pour un Environnement Plus Propre",
    description: "Découvrez l'impact de SMTD sur la gestion des déchets et le développement durable en Mauritanie.",
    images: ['/opengraph-image.jpg'], // Add the path to your home page Twitter card image
  },
};

export default function Home({
  params: { locale },
}: Readonly<HomeProps>) {
  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection />
      <ImpactSection locale={locale} />
      <HeroVideoSection />
    </>
  );
}
