import React from 'react';
import Image from 'next/image';
import WaitlistForm from './WaitlistForm';
import UserAvatars from './UserAvatars';

const HeroContent = () => {
  return (
    <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '300ms' }}>
        Modern <br />
        <span className="text-gradient">Tax-Free Shopping</span>
      </h1>

      <p className="text-lg text-muted-foreground animate-fade-up max-w-md mx-auto lg:mx-0" style={{ animationDelay: '600ms' }}>
        Welcome to the future of travel shopping.
      </p>

      {/* Email waitlist form */}
      <WaitlistForm />

      {/* User avatars and count */}
      <UserAvatars />
    </div>
  );
};

export default HeroContent;