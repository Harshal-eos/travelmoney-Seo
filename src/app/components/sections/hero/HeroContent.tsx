import React from 'react';
import Image from 'next/image';
// import WaitlistForm from './WaitlistForm';
import UserAvatars from './UserAvatars';

const HeroContent = () => {
  return (
    <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <Image
          src="/lovable-uploads/cf1cdbca-095a-4a13-a91a-5e267470df59.png"
          alt="TravelMoney Logo"
          width={64}
          height={64}
          className="h-12 md:h-16 animate-fade-down"
        />
        <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue animate-fade-down" style={{ animationDelay: '200ms' }}>
          Coming Soon
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '300ms' }}>
        Modern <br />
        <span className="text-gradient">Tax-Free Shopping</span>
      </h1>

      <p className="text-lg text-muted-foreground animate-fade-up max-w-md mx-auto lg:mx-0" style={{ animationDelay: '600ms' }}>
        Welcome to the future of travel shopping.
      </p>

      {/* Email waitlist form */}
      {/* <WaitlistForm /> */}

      {/* User avatars and count */}
      <UserAvatars />
    </div>
  );
};

export default HeroContent;