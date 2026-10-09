import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
  wrapperClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Villa Parcodetna',
  fallbackTitle = 'Villa Parcodetna Yogyakarta',
  className = '',
  wrapperClassName = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${wrapperClassName}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-stone-300/60 animate-pulse pointer-events-none" />
      )}
      
      {!error ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-stone-800 text-stone-300 text-center select-none">
          <ImageIcon className="w-8 h-8 mb-2 text-[#C2A374] opacity-80" />
          <p className="text-xs font-serif tracking-widest text-[#E6D5B8] uppercase">
            {fallbackTitle}
          </p>
          <span className="text-[10px] text-stone-400 mt-1">Yogyakarta, Indonesia</span>
        </div>
      )}
    </div>
  );
};
