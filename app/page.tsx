"use client";

import { useEffect, useMemo, useState } from "react";
import { Footer } from "./components/home/footer";
import { Header } from "./components/home/header";
import { DEFAULT_HOME_TAB_ID, HOME_HEADER_TABS } from "./components/home/home-header-tabs";
import { PROPERTIES } from "./components/home/properties-data";
import { RecommendationsSection } from "./components/home/recommendations-section";
import { Property } from "./components/home/types";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTabId, setActiveTabId] = useState(DEFAULT_HOME_TAB_ID);
  const [loading, setLoading] = useState(true);
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);

  useEffect(() => {
    setLoading(true);
    setAllProperties([]);
    setVisibleProperties([]);

    const timer = setTimeout(() => {
      setAllProperties(PROPERTIES);
      setVisibleProperties(PROPERTIES);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const normalizedQuery = useMemo(() => searchValue.trim().toLowerCase(), [searchValue]);

  useEffect(() => {
    const filtered = allProperties.filter((property) => {
      const queryMatches =
        normalizedQuery.length === 0 ||
        property.title.toLowerCase().includes(normalizedQuery) ||
        property.location.toLowerCase().includes(normalizedQuery);

      return queryMatches;
    });

    setVisibleProperties(filtered);
  }, [normalizedQuery, allProperties]);

  const catalogSearchHref = useMemo(() => {
    const params = new URLSearchParams();
    const trimmedQuery = searchValue.trim();

    if (trimmedQuery.length > 0) {
      params.set("query", trimmedQuery);
    }

    const queryString = params.toString();
    return queryString.length > 0 ? `/catalog?${queryString}` : "/catalog";
  }, [searchValue]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header
        query={searchValue}
        onQueryChange={setSearchValue}
        searchHref={catalogSearchHref}
        mode="home"
        tabs={HOME_HEADER_TABS}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
      />

      <main>
        {loading ? (
          <section className="mx-auto w-full max-w-6xl px-4 pb-28 pt-8 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-6 text-center text-sm text-zinc-600">
              Cargando alojamientos...
            </div>
          </section>
        ) : (
          <RecommendationsSection properties={visibleProperties} />
        )}
      </main>

      <Footer />
    </div>
  );
}
