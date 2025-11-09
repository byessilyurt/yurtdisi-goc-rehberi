'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
  showLoader?: boolean;
}

/**
 * Optimized image component with lazy loading, blur placeholder, and error handling
 */
export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/placeholder-image.jpg',
  showLoader = true,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <div className="relative">
      {showLoader && isLoading && (
        <div className="absolute inset-0 bg-zinc-200 animate-pulse rounded" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          hasError && 'grayscale',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        quality={85}
        {...props}
      />
    </div>
  );
}
