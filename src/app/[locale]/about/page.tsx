import { Metadata } from "next";
import AboutHero from "@/app/[locale]/about/_components/AboutHero";
import OurHistory from "@/app/[locale]/about/_components/OurHistory";
import MissionVision from "@/app/[locale]/about/_components/MissionVision";
import OurValues from "@/app/[locale]/about/_components/OurValues";
import EnvironmentalImpact from "@/app/[locale]/about/_components/EnvironmentalImpact";

type Locale = "fr" | "ar";
interface AboutProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: "À Propos de SMTD - Notre Histoire et Notre Mission",
  description: "Découvrez l'histoire, la mission et les valeurs de SMTD, leader en gestion et valorisation des déchets en Mauritanie.",
};

export default function About({ params: { locale } }: Readonly<AboutProps>) {
  return (
    <>
      <AboutHero locale={locale} />
      <OurHistory locale={locale} />
      <MissionVision locale={locale} />
      <OurValues locale={locale} />
      <EnvironmentalImpact locale={locale} />
    </>
  );
}
