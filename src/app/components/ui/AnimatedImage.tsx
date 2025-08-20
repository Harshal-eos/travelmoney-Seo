"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import Image, { ImageProps } from "next/image";

interface AnimatedImageProps
  extends Omit<
    ImageProps,
    "src" | "alt" | "placeholder" | "blurDataURL"
  > {
  src: string | Blob;
  alt?: string;
  animationDelay?: number;
  animationType?:
    | "fade-in"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "float";
  blurPlaceholder?: string; // Base64 or small blur image
}

const ANIMATIONS: Record<
  NonNullable<AnimatedImageProps["animationType"]>,
  string
> = {
  "fade-in": "animate-fade-in",
  "fade-up": "animate-fade-up",
  "fade-down": "animate-fade-down",
  "fade-left": "animate-fade-left",
  "fade-right": "animate-fade-right",
  float: "animate-float",
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt = "",
  className,
  animationDelay = 0,
  animationType = "fade-in",
  blurPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(
    typeof src === "string" ? src : blurPlaceholder
  );

  const imgRef = useRef<HTMLDivElement>(null);

  // Convert Blob/File to object URL if needed
  useEffect(() => {
    if (src instanceof Blob) {
      const url = URL.createObjectURL(src);
      setImgSrc(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImgSrc(src);
    }
  }, [src]);

  // Intersection Observer for animation
  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="inline-block">
      <Image
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-700",
          isVisible && isLoaded ? ANIMATIONS[animationType] : "opacity-0",
          className
        )}
        style={{
          animationDelay: `${animationDelay}ms`,
          animationFillMode: "forwards",
        }}
        placeholder="blur"
        blurDataURL={blurPlaceholder}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
