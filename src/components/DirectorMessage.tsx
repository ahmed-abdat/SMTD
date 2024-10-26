"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { DotPattern } from "@/components/ui/dot-pattern";

import { useTranslations } from "next-intl";

const DirectorMessage: React.FC = () => {
  const t = useTranslations("DirectorMessage");

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/3"
          >
            <Image
              src="/directair.jpg"
              alt={t("directorName")}
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <div className="lg:w-2/3">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl font-bold mb-6 text-primary-forestGreen dark:text-primary-limeGreen"
            >
              {t("title")}  
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-4 text-lg"
            >
              {t.raw("content").map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.p

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-6 font-semibold text-xl text-primary-forestGreen dark:text-primary-limeGreen"
            >
              {t("directorName")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-primary-darkGreen dark:text-primary-skyBlue"
            >
              {t("directorTitle")}
            </motion.p>
          </div>
        </motion.div>
      </div>

      <DotPattern
        className={cn(
          "absolute inset-0 h-full w-full opacity-50",

          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
};

export default DirectorMessage;
