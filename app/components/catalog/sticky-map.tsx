import { Property } from "@/app/components/home/types";

interface StickyMapProps {
  properties: Property[];
}

export function StickyMap({ properties }: StickyMapProps) {
  return (
    <aside className="h-[280px] rounded-2xl border border-zinc-300 bg-zinc-200 p-4 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
      <div className="flex h-full flex-col">
        <div className="mb-3 text-sm font-semibold text-zinc-700">Mapa</div>
        <div className="relative flex-1 overflow-hidden rounded-xl bg-zinc-300/70">
          <div className="absolute inset-0 grid place-items-center text-zinc-600">Mapa</div>

          <div className="absolute inset-x-2 bottom-2 flex gap-2 overflow-x-auto pb-1">
            {properties.slice(0, 6).map((property) => (
              <div
                key={`marker-${property.id}`}
                className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-zinc-800 shadow"
              >
                $U {property.pricePerNight.toLocaleString("es-UY")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
