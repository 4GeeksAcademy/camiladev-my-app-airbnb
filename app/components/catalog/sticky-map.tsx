"use client";

import dynamic from "next/dynamic";
import { Property } from "@/app/components/home/types";

interface StickyMapProps {
  properties: Property[];
}

const PropertiesMap = dynamic(
  () => import("@/app/components/catalog/properties-map").then((module) => module.PropertiesMap),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 grid place-items-center text-sm text-zinc-500">Cargando mapa...</div>
    ),
  }
);

export const StickyMap = ({ properties }: StickyMapProps) => {
  return (
    <aside className="h-[360px] overflow-hidden rounded-2xl border border-zinc-300 bg-zinc-200 p-0 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
      <div className="relative h-full w-full overflow-hidden bg-zinc-300/70">
        <PropertiesMap properties={properties} />
      </div>
    </aside>
  );
};
