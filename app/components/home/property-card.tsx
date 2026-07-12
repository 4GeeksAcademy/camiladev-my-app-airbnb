import Link from "next/link";
import { Property } from "./types";

interface PropertyCardProps {
  property: Property;
  onClick?: (property: Property) => void;
  href?: string;
}

function StarIcon() {
  return (
    <svg
      className="h-4 w-4 text-zinc-800"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 3.4 2.7 5.4 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9L3.3 9.7l6-.9L12 3.4Z" />
    </svg>
  );
}

export function PropertyCard({ property, onClick, href }: PropertyCardProps) {
  const content = (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-zinc-200">
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-200" />

        <div className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-zinc-700">
          {property.badge ?? "Alojamiento"}
        </div>

        <span
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white/90 text-zinc-700"
          aria-hidden="true"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m12 21-1.2-1C6 15.6 3 13 3 9.6A4.6 4.6 0 0 1 7.6 5c1.7 0 3.4.8 4.4 2.1A5.7 5.7 0 0 1 16.4 5 4.6 4.6 0 0 1 21 9.6c0 3.4-3 6-7.8 10.4L12 21Z" />
          </svg>
        </span>

        <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          {property.imageLabel}
        </div>
      </div>

      <div className="px-1 pb-1 pt-3">
        <h3 className="line-clamp-2 text-base font-semibold text-zinc-900">{property.title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{property.location}</p>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-zinc-900">
            <span className="font-semibold">$U {property.pricePerNight.toLocaleString("es-UY")}</span>{" "}
            por noche
          </p>
          <p className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
            <StarIcon />
            {property.rating.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block rounded-3xl bg-white p-2 shadow-sm ring-1 ring-zinc-100">
        {content}
      </Link>
    );
  }

  return (
    <article
      className="group cursor-pointer rounded-3xl bg-white p-2 shadow-sm ring-1 ring-zinc-100"
      onClick={() => onClick?.(property)}
    >
      {content}
    </article>
  );
}
