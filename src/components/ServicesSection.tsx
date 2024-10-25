"use client"

import React, { useEffect, useRef } from "react"
import { Recycle, Truck, Factory, BarChart, Leaf, Users } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { useTranslations } from 'next-intl'

const icons = [Recycle, Truck, Factory, BarChart, Leaf, Users]

const ServicesSection: React.FC = () => {
  const t = useTranslations('ServicesSection')
  const services = t.raw('services') as Array<{ title: string; description: string }>

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div ref={ref} className="py-24 bg-gradient-to-b from-primary-lightGreen/30 to-primary-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-forestGreen">{t('title')}</h2>
          <p className="text-primary-charcoal/80 max-w-2xl mx-auto text-lg">
            {t('description')}
          </p>
        </motion.div>

        <HoverEffect 
          items={services.map((service, index) => ({
            title: service.title,
            description: service.description,
            icon: React.createElement(icons[index], { className: "h-12 w-12 text-primary-forestGreen" }),
          }))} 
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        />
      </div>
    </div>
  )
}

export default ServicesSection
