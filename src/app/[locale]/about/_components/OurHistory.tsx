"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function OurHistory({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-primary-lightGray">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-darkGreen mb-4 sm:mb-6 md:mb-8 text-center"
        >
          <h2>{t('historyTitle')}</h2>
        </MotionDiv>
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/about.webp"
              alt="SMTD History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 mt-4 md:mt-0"
          >
            <p className="text-base sm:text-lg text-primary-charcoal">
              {t('historyContent')}
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
