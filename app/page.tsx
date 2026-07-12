"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryFilters } from "./components/home/category-filters";
import { Footer } from "./components/home/footer";
import { Header } from "./components/home/header";
import { RecommendationsSection } from "./components/home/recommendations-section";
import { Category, Property } from "./components/home/types";

const categories: Category[] = [
  "Todas",
  "Playa",
  "Mansiones",
  "Tendencias",
  "Cabanas",
  "Campo",
];

const seedProperties: Property[] = [
  {
    id: "1",
    title: "Departamento en Piriapolis",
    location: "Piriapolis, Maldonado",
    category: "Playa",
    pricePerNight: 3178,
    rating: 4.84,
    imageLabel: "1 / 8",
    badge: "Favorito entre huespedes",
  },
  {
    id: "2",
    title: "Cabana en Sauce de Portezuelo",
    location: "Punta Ballena, Maldonado",
    category: "Cabanas",
    pricePerNight: 1986,
    rating: 5.0,
    imageLabel: "1 / 6",
  },
  {
    id: "3",
    title: "Casa con jacuzzi en barrio residencial",
    location: "Piriapolis, Uruguay",
    category: "Tendencias",
    pricePerNight: 2339,
    rating: 4.53,
    imageLabel: "1 / 16",
  },
  {
    id: "4",
    title: "Mansion frente al mar con terraza",
    location: "Punta del Este, Maldonado",
    category: "Mansiones",
    pricePerNight: 9240,
    rating: 4.9,
    imageLabel: "1 / 12",
    badge: "Nuevo",
  },
  {
    id: "5",
    title: "Casa de campo con fogon y vista abierta",
    location: "Sierra de las Animas",
    category: "Campo",
    pricePerNight: 2860,
    rating: 4.78,
    imageLabel: "1 / 7",
  },
  {
    id: "6",
    title: "Loft de playa a metros de la rambla",
    location: "Piriapolis Centro",
    category: "Playa",
    pricePerNight: 2640,
    rating: 4.71,
    imageLabel: "1 / 10",
  },
];

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("Todas");
  const [loading, setLoading] = useState(true);
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);

  useEffect(() => {
    setLoading(true);
    setAllProperties([]);
    setVisibleProperties([]);

    const timer = setTimeout(() => {
      setAllProperties(seedProperties);
      setVisibleProperties(seedProperties);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const normalizedQuery = useMemo(() => searchValue.trim().toLowerCase(), [searchValue]);

  useEffect(() => {
    const filtered = allProperties.filter((property) => {
      const categoryMatches = activeCategory === "Todas" || property.category === activeCategory;
      const queryMatches =
        normalizedQuery.length === 0 ||
        property.title.toLowerCase().includes(normalizedQuery) ||
        property.location.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });

    setVisibleProperties(filtered);
  }, [activeCategory, normalizedQuery, allProperties]);

  const handleGoToCatalog = () => {
    const params = new URLSearchParams();
    const trimmedQuery = searchValue.trim();

    if (trimmedQuery.length > 0) {
      params.set("query", trimmedQuery);
    }

    if (activeCategory !== "Todas") {
      params.set("category", activeCategory);
    }

    const queryString = params.toString();
    router.push(queryString.length > 0 ? `/catalog?${queryString}` : "/catalog");
  };

  const handlePropertyClick = (property: Property) => {
    const params = new URLSearchParams();
    const trimmedQuery = searchValue.trim();

    if (trimmedQuery.length > 0) {
      params.set("query", trimmedQuery);
    }

    params.set("category", property.category);

    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header query={searchValue} onQueryChange={setSearchValue} onSearch={handleGoToCatalog} />
      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <main>
        {loading ? (
          <section className="mx-auto w-full max-w-6xl px-4 pb-28 pt-8 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-6 text-center text-sm text-zinc-600">
              Cargando alojamientos...
            </div>
          </section>
        ) : (
          <RecommendationsSection properties={visibleProperties} onPropertyClick={handlePropertyClick} />
        )}
      </main>

      <Footer />
    </div>
  );
}
