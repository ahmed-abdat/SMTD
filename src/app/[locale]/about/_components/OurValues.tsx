"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'; 
import { Card, CardContent } from "@/components/ui/card";

export default function OurValues({ locale }: { locale: string }) {
  const t = useTranslations('AboutUs');
  const values = t.raw('values') as Array<{ title: string; description: string }>;

  return (
    <section className="py-16 bg-primary-forestGreen text-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          {t('valuesTitle')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-primary-darkGreen">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-yellow mb-2">{value.title}</h3>
                  <p className="text-primary-lightGreen">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
