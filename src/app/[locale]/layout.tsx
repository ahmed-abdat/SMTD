import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { RB, roboto, tajawal } from "@/app/font/font";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title : {
    default : "SMTD - Pour un Environnement Plus Propre",
    template : "%s | SMTD"
  },
  description : "Leader en gestion et valorisation des déchets en Mauritanie. Découvrez nos services de collecte, recyclage et traitement écologique des déchets.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}



export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale === "ar"
            ? `${RB.className} ${tajawal.className}`
            : roboto.className
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Toaster position="top-center" richColors />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
