import { AmenityItem } from "./types";

interface AmenitiesSectionProps {
  amenities: AmenityItem[];
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <h2 className="text-xl font-semibold text-zinc-900">Servicios</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-2 rounded-xl border border-zinc-200 p-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm">
              {amenity.icon}
            </span>
            <span className="text-sm text-zinc-700">{amenity.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
