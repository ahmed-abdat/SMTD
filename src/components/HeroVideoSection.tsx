import React from "react";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

import SparklesText from "@/components/ui/sparkles-text";

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
        <div className="relative max-w-4xl mx-auto">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://firebasestorage.googleapis.com/v0/b/marketplace-37e56.appspot.com/o/video.mp4?alt=media&token=ad19a08b-c9a5-4f4e-b487-54a43ef9e2b5"
            thumbnailSrc="/opengraph-image.jpg"
            thumbnailAlt="SMTD en action - Gestion des déchets"
          />

          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://firebasestorage.googleapis.com/v0/b/marketplace-37e56.appspot.com/o/video.mp4?alt=media&token=ad19a08b-c9a5-4f4e-b487-54a43ef9e2b5"
            thumbnailSrc="/opengraph-image.jpg"
            thumbnailAlt="SMTD en action - Gestion des déchets"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
