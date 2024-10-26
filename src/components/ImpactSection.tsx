"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function ImpactSection() {
  const t = useTranslations("ImpactSection");
  const stats = t.raw("stats") as Array<{
    value: number;
    label: string;
    suffix: string;
  }>;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 50;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [inView, stats]);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-primary-darkGreen text-primary-white relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-[url('/images/impact-bg.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-yellow">
            {t("title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-lightGreen">
            {t("description")}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-primary-forestGreen border-primary-limeGreen hover:bg-primary-darkGreen transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold mb-2 text-primary-yellow">
                    {counts[index].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-primary-lightGreen">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
