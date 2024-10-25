"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useTranslations } from 'next-intl'

interface Slide {
  image: string;
  title: string;
  description: string;
}

const HeroSection = ({ locale } : {locale : string}) => {
  const t = useTranslations('HeroSection')
  const slides: Slide[] = t.raw('slides')
  const isRTL = locale === 'ar' // Variable to check if RTL

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }, [isAnimating, slides.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
    }
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
  }

  return (
    <section className="relative h-[92dvh] lg:h-[91dvh] overflow-hidden">
      {slides.map((slide: Slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          onTransitionEnd={handleAnimationEnd}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-primary-charcoal/60" />
        </div>
      ))}
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-primary-white">
          <h1 className="text-5xl font-bold mb-6 text-primary-limeGreen animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 text-primary-offWhite animate-fade-in animation-delay-200">
            {slides[currentSlide].description}
          </p>
          <Button 
            size="lg" 
            className={`group bg-primary-forestGreen hover:bg-primary-darkGreen text-primary-white animate-fade-in animation-delay-400 `}
          >
            {t('CTA')}
            {isRTL ? (
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-x-2 z-30">
        {slides.map((_, index: number) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary-forestGreen w-8" : "bg-primary-lightGray"
            }`}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => e.key === 'Enter' && handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
