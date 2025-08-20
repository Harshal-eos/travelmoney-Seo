'use client';

import React from 'react';
import Image from 'next/image';

const PhoneFrame = () => {
  return (
    <div className="relative w-full max-w-[340px] aspect-[9/19.5] animate-fade-up" style={{ animationDelay: '1200ms' }}>
      {/* iPhone shadow */}
      <div className="absolute inset-0 rounded-[3rem] bg-black/20 blur-md transform translate-y-2 -z-10"></div>

      {/* iPhone frame - thinner bezels */}
      <div className="absolute inset-0 rounded-[3rem] border-[6px] border-black bg-black overflow-hidden">
        {/* Volume buttons */}
        <div className="absolute left-[-6px] top-[120px] w-[2px] h-[26px] bg-gray-700 rounded-l-full"></div>
        <div className="absolute left-[-6px] top-[160px] w-[2px] h-[40px] bg-gray-700 rounded-l-full"></div>

        {/* Power button */}
        <div className="absolute right-[-6px] top-[120px] w-[2px] h-[60px] bg-gray-700 rounded-r-full"></div>

        {/* Action button */}
        <div className="absolute left-[-6px] top-[220px] w-[4px] h-[16px] bg-travel-blue rounded-l-full"></div>

        {/* App interface image */}
        <Image
          src="/lovable-uploads/0d97c838-634f-4f0e-8992-aa07e0434e09.png"
          alt="TravelMoney App showing shopping recommendations in Paris"
          fill
          className="object-cover"
          priority
        />

        {/* Bottom indicator line */}
        <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneFrame;
