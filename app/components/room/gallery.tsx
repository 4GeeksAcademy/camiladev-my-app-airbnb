"use client";

import { useState } from "react";

interface GalleryProps {
  images: string[];
}

const toWebpSrcSet = (src: string) => {
  const base = src.replace(/\.(jpg|jpeg|png)$/i, "");
  return `${base}-480.webp 480w, ${base}-768.webp 768w, ${base}-1200.webp 1200w`;
};

export const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = images[currentIndex] ?? "/images/properties/piriapolis-depto.jpg";

  const handlePrev = () => {
    setCurrentIndex((previous) => (previous === 0 ? images.length - 1 : previous - 1));
  };

  const handleNext = () => {
    setCurrentIndex((previous) => (previous === images.length - 1 ? 0 : previous + 1));
  };

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100">
      <div className="relative aspect-[4/3] bg-zinc-200">
        <picture>
          <source
            type="image/webp"
            srcSet={toWebpSrcSet(currentImage)}
            sizes="(max-width: 1023px) 100vw, 66vw"
          />
          <img
            src={currentImage}
            alt={`Foto ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </picture>

        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-zinc-800"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-zinc-800"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};
