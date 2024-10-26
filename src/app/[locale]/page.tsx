import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HeroVideoSection from "@/components/HeroVideoSection";
import DirectorMessage from "@/components/DirectorMessage";
import dynamic from 'next/dynamic';

type Locale = "fr" | "ar";
interface HomeProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: "SMTD - Pour un Environnement Plus Propre",
  description:
    "Leader en gestion et valorisation des déchets en Mauritanie. Découvrez nos services de collecte, recyclage et traitement écologique des déchets.",
};

const ImpactSection = dynamic(() => import('@/components/ImpactSection'), {
  ssr: false
});

export default function Home({ params: { locale } }: Readonly<HomeProps>) {
  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection />
      <ImpactSection  />
      <HeroVideoSection />
      <DirectorMessage />
    </>
  );
}
