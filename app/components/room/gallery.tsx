"use client";

import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLabel = images[currentIndex] ?? "Foto";

  const handlePrev = () => {
    setCurrentIndex((previous) => (previous === 0 ? images.length - 1 : previous - 1));
  };

  const handleNext = () => {
    setCurrentIndex((previous) => (previous === images.length - 1 ? 0 : previous + 1));
  };

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-300">
        <div className="absolute inset-0 grid place-items-center text-base font-semibold text-zinc-700">
          {currentLabel}
        </div>

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
}
