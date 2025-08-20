'use client'; // Add this if using Next.js 13+ App Router and need client-side features

import React, { useCallback } from 'react';
import BackgroundElements from './hero/BackgroundElements';
import HeroContent from './hero/HeroContent';
import PhoneFrame from './hero/PhoneFrame';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden flex items-center">
      <BackgroundElements />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left column - Text content */}
          <HeroContent />

          {/* Right column - iPhone 16 Pro Max mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneFrame />
          </div>
        </div>

        <ScrollIndicator scrollToFeatures={scrollToFeatures} />
      </div>
    </section>
  );
};

export default Hero;
