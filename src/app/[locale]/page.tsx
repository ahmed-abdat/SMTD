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
