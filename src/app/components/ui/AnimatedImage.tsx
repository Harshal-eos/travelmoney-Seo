
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  animationDelay?: number;
  animationType?: 'fade-in' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'float';
  placeholder?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  animationDelay = 0,
  animationType = 'fade-in',
  placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src || placeholder}
      alt={alt || ''}
      onLoad={() => setIsLoaded(true)}
      className={cn(
        'transition-all duration-700',
        isVisible && isLoaded ? `animate-${animationType}` : 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    />
  );
};

export default AnimatedImage;
