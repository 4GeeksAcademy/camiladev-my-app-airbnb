import { Property } from "./types";
import { PropertyCard } from "./property-card";

interface RecommendationsSectionProps {
  properties: Property[];
}

export function RecommendationsSection({ properties }: RecommendationsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Alojamientos destacados</h2>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700"
          aria-label="Ver mas resultados"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} href={`/rooms/${property.id}`} />
        ))}
      </div>
    </section>
  );
}
