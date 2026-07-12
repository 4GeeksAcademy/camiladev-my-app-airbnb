import { Suspense } from "react";
import { CatalogClient } from "./catalog-client";

const CatalogFallback = () => {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 text-center text-sm text-zinc-600">
      Cargando catálogo...
    </div>
  );
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogFallback />}>
      <CatalogClient />
    </Suspense>
  );
}
