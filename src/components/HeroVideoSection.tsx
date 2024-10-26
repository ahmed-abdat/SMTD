import React from "react";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

import SparklesText from "@/components/ui/sparkles-text";

import { Button } from "@/components/ui/button";

const HeroVideoSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-primary-lightGray dark:bg-primary-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <SparklesText
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-forestGreen dark:text-primary-limeGreen"
            text="Pour un Environnement Plus Propre"
            colors={{ first: "#4CAF50", second: "#8BC34A" }}
          />

          <p className="text-lg md:text-xl text-primary-charcoal dark:text-primary-lightGray mb-6 md:mb-8 max-w-2xl mx-auto">
            Leader en gestion et valorisation des déchets en Mauritanie
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://youtu.be/lFjLc9-fAZA?si=4FV-bndSQa7c6yEx"
            thumbnailSrc="/opengraph-image.jpg"
            thumbnailAlt="SMTD en action - Gestion des déchets"
          />

          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://youtu.be/lFjLc9-fAZA?si=4FV-bndSQa7c6yEx"
            thumbnailSrc="/opengraph-image.jpg"
            thumbnailAlt="SMTD en action - Gestion des déchets"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroVideoSection;
