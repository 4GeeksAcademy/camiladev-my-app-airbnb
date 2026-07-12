"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AmenitiesSection } from "@/app/components/room/amenities-section";
import { BookingCard } from "@/app/components/room/booking-card";
import { Gallery } from "@/app/components/room/gallery";
import { HostSection } from "@/app/components/room/host-section";
import { RoomHeader } from "@/app/components/room/room-header";
import { RoomDetail } from "@/app/components/room/types";
import { Footer } from "@/app/components/home/footer";
import { Header } from "@/app/components/home/header";
import { DEFAULT_HOME_TAB_ID, HOME_HEADER_TABS } from "@/app/components/home/home-header-tabs";
import { ROOMS } from "@/app/components/home/properties-data";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();

  const roomId = useMemo(() => {
    if (!params?.id) return "";
    return Array.isArray(params.id) ? params.id[0] : params.id;
  }, [params]);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTabId, setActiveTabId] = useState(DEFAULT_HOME_TAB_ID);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<RoomDetail | null>(null);

  const catalogSearchHref = useMemo(() => {
    const query = searchQuery.trim();
    return query.length > 0 ? `/catalog?query=${encodeURIComponent(query)}` : "/catalog";
  }, [searchQuery]);

  useEffect(() => {
    if (!roomId) return;

    setLoading(true);
    setRoom(null);

    const timer = setTimeout(() => {
      const found = ROOMS.find((candidate) => candidate.id === roomId);

      setRoom(found ?? null);

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [roomId]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header
        query={searchQuery}
        onQueryChange={setSearchQuery}
        searchHref={catalogSearchHref}
        mode="home"
        tabs={HOME_HEADER_TABS}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
      />

      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6">
        <div className="mb-4">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
          >
            <span aria-hidden="true">←</span>
            Volver al catálogo
          </Link>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-8 text-center text-sm text-zinc-600">
            Cargando detalle de la habitación...
          </div>
        ) : room ? (
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Gallery images={room.images} />
              <RoomHeader
                title={room.title}
                location={room.location}
                rating={room.rating}
                reviews={room.reviews}
              />
              <HostSection hostName={room.hostName} hostYears={room.hostYears} />
              <AmenitiesSection amenities={room.amenities} />
            </div>

            <div>
              <BookingCard pricePerNight={room.pricePerNight} />
            </div>
          </section>
        ) : (
          <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-8 text-center text-sm text-zinc-600">
            No encontramos esta propiedad. Vuelve al catalogo para elegir otro alojamiento.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
