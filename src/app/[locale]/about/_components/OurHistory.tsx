"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function OurHistory({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="py-16 bg-primary-lightGray">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-primary-darkGreen mb-8 text-center"
        >
          <h2>{t('historyTitle')}</h2>
        </MotionDiv>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <Image
              src="/2.webp"
              alt="SMTD History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-primary-charcoal mb-4">
              {t('historyContent')}
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
