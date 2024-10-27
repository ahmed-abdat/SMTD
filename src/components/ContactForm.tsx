'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from 'next-intl'
import DockDemo from '@/components/Docke'
import { FormSchema, FormData } from '@/schemas/contactForm'
import { toast } from "sonner"

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useTranslations('contactForm')
  const isRTL = locale === 'ar'

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', data)
      toast.success(t('successMessage'), {
        position: isRTL ? 'top-left' : 'top-right',
      })
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(t('errorMessage'), {
        position: isRTL ? 'top-left' : 'top-right',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-offWhite flex items-center justify-center p-4 md:py-0">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6">
        {/* Left side: Contact Info */}
        <div className={`md:w-1/2 p-6 bg-gradient-to-br from-primary-limeGreen via-primary-forestGreen to-primary-darkGreen rounded-lg text-primary-white ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-2xl font-bold mb-4">{t('getInTouch')}</h2>
          <dl>
            <dt className="font-semibold mb-2">{t('visitUs')}</dt>
            <dd className="mb-4 flex items-start">
              <MapPin className={`flex-shrink-0 mt-1 ${isRTL ? 'ml-2' : 'mr-2'} text-primary-yellow`} />
              <span>{t('visitDescription')}</span>
            </dd>
            <dt className="font-semibold mb-2">{t('chatToUs')}</dt>
            <dd className="mb-4 flex items-center">
              <Mail className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} text-primary-yellow`} />
              <span>{t('chatDescription')}</span>
            </dd>
            <dt className="font-semibold mb-2">{t('callUs')}</dt>
            <dd className="mb-4 flex items-start">
              <Phone className={`flex-shrink-0 mt-1 ${isRTL ? 'ml-2' : 'mr-2'} text-primary-yellow`} />
              <div>
                <p>{t('workingHours')}</p>
                <p dir="ltr" className={`${isRTL ? 'text-right' : 'text-left'} mt-1`}>
                  {t('phoneNumber')}
                </p>
              </div>
            </dd>
            <dt className="font-semibold mb-2">{t('socialMedia')}</dt>
            <DockDemo />
          </dl>
        </div>

        {/* Right side: Contact Form */}
        <div className={`md:w-1/2 bg-primary-white text-primary-charcoal p-6 rounded-lg shadow-lg ${isRTL ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-2xl font-bold mb-6 text-primary-darkGreen">{t('title')}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-primary-charcoal">{t('firstName')}</label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  className={`mt-1 block w-full bg-primary-lightGray ${errors.firstName ? 'border-red-500' : 'border-primary-limeGreen'}`}
                  placeholder={t('firstName')}
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-primary-charcoal">{t('lastName')}</label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  className={`mt-1 block w-full bg-primary-lightGray ${errors.lastName ? 'border-red-500' : 'border-primary-limeGreen'}`}
                  placeholder={t('lastName')}
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-primary-charcoal">{t('companyName')}</label>
              <Input
                id="companyName"
                {...register("companyName")}
                className="mt-1 block w-full bg-primary-lightGray border-primary-limeGreen"
                placeholder={t('companyName')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-charcoal">{t('email')}</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={`mt-1 block w-full bg-primary-lightGray ${errors.email ? 'border-red-500' : 'border-primary-limeGreen'}`}
                placeholder={t('email')}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-primary-charcoal">{t('phoneNumber')}</label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber")}
                className={`mt-1 block w-full bg-primary-lightGray ${errors.phoneNumber ? 'border-red-500' : 'border-primary-limeGreen'}`}
                placeholder={t('phoneNumber')}
              />
              {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-charcoal">{t('message')}</label>
              <Textarea
                id="message"
                {...register("message")}
                rows={4}
                className={`mt-1 block w-full bg-primary-lightGray ${errors.message ? 'border-red-500' : 'border-primary-limeGreen'}`}
                placeholder={t('message')}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary-forestGreen text-primary-white hover:bg-primary-darkGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-limeGreen"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                </motion.div>
              ) : (
                <Send className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              )}
              {isSubmitting ? t('sending') : t('submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
