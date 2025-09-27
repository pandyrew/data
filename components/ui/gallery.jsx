import React from "react";

export default function PhotoGallery({ src, alt, caption }) {
  return (
    <div className="group relative block overflow-hidden rounded-lg aspect-square">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24
                      bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      opacity-0 translate-y-2 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0" />

      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 px-4">
          <p className="text-white text-sm sm:text-base font-medium drop-shadow-sm
                        opacity-0 translate-y-2 transition-all duration-300
                        group-hover:opacity-100 group-hover:translate-y-0">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
