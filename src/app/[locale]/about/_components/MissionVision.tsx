"use client";

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function MissionVision({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="py-16 bg-primary-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-darkGreen mb-4">{t('missionTitle')}</h3>
                <p className="text-primary-charcoal">{t('missionContent')}</p>
              </CardContent>
            </Card>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-darkGreen mb-4">{t('visionTitle')}</h3>
                <p className="text-primary-charcoal">{t('visionContent')}</p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
