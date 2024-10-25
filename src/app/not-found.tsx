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
          <div className="text-center">
            <h1 className="text-9xl font-bold mb-4 text-primary-yellow">404</h1>
            <p className="text-2xl mb-8 text-primary-lightGreen">Oops! Page not found</p>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary-white opacity-20 blur"></div>
              <p className="relative z-10 text-lg px-6 py-3 text-primary-offWhite">
                The page you are looking for might have been removed, 
                had its name changed, or is temporarily unavailable.
              </p>
            </div>
            <Link href="/" passHref>
              <span className="bg-primary-white text-primary-forestGreen px-6 py-3 rounded-full font-semibold hover:bg-primary-lightGray transition-all duration-300 items-center mx-auto inline-flex cursor-pointer">
                <ArrowLeft className="mr-2" />
                Go Back Home
              </span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
