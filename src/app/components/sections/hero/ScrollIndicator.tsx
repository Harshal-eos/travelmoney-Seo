'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  scrollToFeatures: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollToFeatures }) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
      <button
        onClick={scrollToFeatures}
        className="text-travel-gray hover:text-travel-blue transition-spring"
        aria-label="Scroll to features"
      >
        <ArrowDown size={24} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
