import { PropertyCard } from "@/app/components/home/property-card";
import { Property } from "@/app/components/home/types";

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center text-sm text-zinc-600">
        No hay alojamientos que coincidan con los filtros actuales.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} href={`/rooms/${property.id}`} />
      ))}
    </div>
  );
}
