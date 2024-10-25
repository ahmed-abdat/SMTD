
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
type Locale =  "fr" | "ar";
interface HomeProps {
  params: {
    locale: Locale;
  };
}

// metadata 
const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home( {
  params: { locale },
}: Readonly<HomeProps>) {

  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection />
    </>
  );
}
