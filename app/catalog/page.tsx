"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterBar } from "@/app/components/catalog/filter-bar";
import { PropertyList } from "@/app/components/catalog/property-list";
import { ResultsHeader } from "@/app/components/catalog/results-header";
import { StickyMap } from "@/app/components/catalog/sticky-map";
import { Footer } from "@/app/components/home/footer";
import { Header } from "@/app/components/home/header";
import { Category, Property } from "@/app/components/home/types";

const filterOptions = ["Se permiten mascotas", "Estacionamiento gratuito", "WiFi", "Jacuzzi"];
const categoryOptions: Category[] = [
  "Todas",
  "Playa",
  "Mansiones",
  "Tendencias",
  "Cabanas",
  "Campo",
];

function isCategory(value: string | null): value is Category {
  return value !== null && categoryOptions.includes(value as Category);
}

const catalogProperties: Property[] = [
  {
    id: "cat-1",
    title: "Departamento en Piriapolis",
    location: "Piriapolis, Maldonado",
    category: "Playa",
    pricePerNight: 3178,
    rating: 4.84,
    imageLabel: "1 / 8",
    badge: "Favorito entre huespedes",
  },
  {
    id: "cat-2",
    title: "Cabana en Sauce de Portezuelo",
    location: "Punta Ballena, Maldonado",
    category: "Cabanas",
    pricePerNight: 1986,
    rating: 5.0,
    imageLabel: "1 / 6",
  },
  {
    id: "cat-3",
    title: "Casa con jacuzzi techado",
    location: "Piriapolis, Uruguay",
    category: "Tendencias",
    pricePerNight: 2339,
    rating: 4.53,
    imageLabel: "1 / 16",
  },
  {
    id: "cat-4",
    title: "Mansion frente al mar",
    location: "Punta del Este, Maldonado",
    category: "Mansiones",
    pricePerNight: 9240,
    rating: 4.9,
    imageLabel: "1 / 12",
    badge: "Nuevo",
  },
  {
    id: "cat-5",
    title: "Casa de campo con fogon",
    location: "Sierra de las Animas",
    category: "Campo",
    pricePerNight: 2860,
    rating: 4.78,
    imageLabel: "1 / 7",
  },
  {
    id: "cat-6",
    title: "Loft de playa a metros de la rambla",
    location: "Piriapolis Centro",
    category: "Playa",
    pricePerNight: 2640,
    rating: 4.71,
    imageLabel: "1 / 10",
  },
];

export default function CatalogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = isCategory(searchParams.get("category"))
    ? searchParams.get("category")
    : "Todas";

  const [query, setQuery] = useState(() => searchParams.get("query") ?? "");
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery.length > 0) {
      params.set("query", trimmedQuery);
    }

    if (selectedCategory !== "Todas") {
      params.set("category", selectedCategory);
    }

    const queryString = params.toString();
    router.replace(queryString.length > 0 ? `/catalog?${queryString}` : "/catalog", {
      scroll: false,
    });
  }, [query, selectedCategory, router]);

  const visibleProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const baseFiltered = catalogProperties.filter((property) => {
      const categoryMatches =
        selectedCategory === "Todas" || property.category === selectedCategory;

      if (normalizedQuery.length === 0) return true;

      const queryMatches =
        property.title.toLowerCase().includes(normalizedQuery) ||
        property.location.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });

    if (normalizedQuery.length === 0) {
      return [...catalogProperties]
        .filter((property) =>
          selectedCategory === "Todas" ? true : property.category === selectedCategory
        )
        .sort((a, b) =>
          sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight
        );
    }

    const sorted = [...baseFiltered].sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight
    );

    return sorted;
  }, [query, sortOrder, selectedCategory]);

  const handleToggleFilter = (filter: string) => {
    setActiveFilters((previous) =>
      previous.includes(filter) ? previous.filter((item) => item !== filter) : [...previous, filter]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header query={query} onQueryChange={setQuery} />

      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-4 sm:px-6">
        <div className="space-y-4">
          <FilterBar
            filters={filterOptions}
            activeFilters={activeFilters}
            onToggleFilter={handleToggleFilter}
          />

          <ResultsHeader
            count={visibleProperties.length}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categoryOptions.map((category) => {
              const isActive = category === selectedCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-300 bg-white text-zinc-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PropertyList properties={visibleProperties} />
            </div>
            <div>
              <StickyMap properties={visibleProperties} />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
