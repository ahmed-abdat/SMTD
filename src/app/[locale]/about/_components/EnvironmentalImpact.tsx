"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion'; 

export default function EnvironmentalImpact({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');

  return (
    <section className="py-16 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-primary-darkGreen mb-8 text-center"
        >
          {t('impactTitle')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-primary-charcoal mb-4">
                {t('impactContent')}
              </p>
              <ul className="list-disc list-inside text-primary-charcoal">
                <li>{t('impactPoint1')}</li>
                <li>{t('impactPoint2')}</li>
                <li>{t('impactPoint3')}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
