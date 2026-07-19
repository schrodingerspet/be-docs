import React from 'react';

export function ImageFigure({ 
  src, 
  alt, 
  caption 
}: { 
  src: string; 
  alt: string; 
  caption?: string;
}) {
  return (
    <figure className="my-10 flex flex-col items-center">
      <div className="rounded-xl overflow-hidden border bg-surface/50 p-2 shadow-sm w-full max-w-4xl">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic max-w-2xl px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
