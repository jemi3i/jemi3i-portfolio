
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, aspectRatio = 'aspect-[4/5]', className = '' }) => {
  return (
    <div className={`overflow-hidden bg-brand-gray ${aspectRatio} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default Image;
