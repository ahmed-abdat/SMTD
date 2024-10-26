"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function AboutHero({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/1.webp"
        alt="SMTD About Us"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-primary-darkGreen opacity-50 z-10"></div>
      <div className="container mx-auto px-4 relative z-20 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-white mb-2 sm:mb-4">
            {t('heroTitle')}
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-primary-lightGreen">
            {t('heroSubtitle')}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
