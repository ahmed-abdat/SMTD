import ContactForm from '@/components/ContactForm'

interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  return <ContactForm locale={locale} />
}
