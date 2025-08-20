import React from 'react';
import Image from 'next/image';

const UserAvatars = () => {
  return (
    <div className="animate-fade-up flex items-center justify-center lg:justify-start gap-4" style={{ animationDelay: '1200ms' }}>
      <div className="flex -space-x-2">
        <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&h=100&q=80"
            alt="User avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100&q=80"
            alt="User avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&h=100&q=80"
            alt="User avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&h=100&q=80"
            alt="User avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <span className="text-sm text-muted-foreground">
        Join the <span className="font-semibold text-foreground">2.2K</span> shoppers on the waitlist
      </span>
    </div>
  );
};

export default UserAvatars;