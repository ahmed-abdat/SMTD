"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion'; 

export default function EnvironmentalImpact({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-darkGreen mb-4 sm:mb-6 md:mb-8 text-center"
        >
          {t('impactTitle')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card>
            <CardContent className="p-4 sm:p-6">
              <p className="text-base sm:text-lg text-primary-charcoal mb-2 sm:mb-4">
                {t('impactContent')}
              </p>
              <ul className="list-disc list-inside text-primary-charcoal text-sm sm:text-base">
                <li className="mb-1">{t('impactPoint1')}</li>
                <li className="mb-1">{t('impactPoint2')}</li>
                <li>{t('impactPoint3')}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
