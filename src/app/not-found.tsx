/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className='text-center'>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-skyBlue to-primary-forestGreen text-primary-white">
          <header className="absolute top-0 left-0 right-0 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href='/' passHref>
                <span className="inline-block">
                  <Image
                    src="/logo.svg"
                    width={80}
                    height={80}
                    alt="logo"
                    className="object-cover"
                  />
                </span>
              </Link>
            </div>
          </header>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">Oops! We can't find that page</h1>
        <p className="mb-4">
          It seems we can't find the page you're looking for.
        </p>
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white bg-opacity-20 filter blur-sm"></div>
          <p className="relative z-10 text-lg p-3 text-gray-100">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <Link href="/" passHref>
          <span className="inline-flex items-center px-6 py-3 bg-white text-green-500 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
            <ArrowLeft className="mr-2" />
            Retour à l'accueil
          </span>
        </Link>
      </div>
    </div>
        </div>
      </body>
    </html>
  );
}
