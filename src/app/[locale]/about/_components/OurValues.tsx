"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'; 
import { Card, CardContent } from "@/components/ui/card";

export default function OurValues({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');
  const values = t.raw('values') as Array<{ title: string; description: string }>;

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-primary-forestGreen text-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
        >
          {t('valuesTitle')}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="h-full bg-primary-darkGreen">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-yellow mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-primary-lightGreen">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
