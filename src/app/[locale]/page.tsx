
import { Metadata } from 'next';
type Locale = "en" | "fr" | "ar";
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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <h1> All Home components should be here </h1>
    </section>
    </>
  );
}
