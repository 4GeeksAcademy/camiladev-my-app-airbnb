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

const roomsSeed: RoomDetail[] = [
  {
    id: "1",
    title: "Departamento con vista al mar en Piriapolis",
    location: "Piriapolis, Maldonado",
    rating: 4.84,
    reviews: 19,
    hostName: "Luis Eduardo",
    hostYears: 4,
    pricePerNight: 3178,
    images: ["Foto principal", "Sala", "Dormitorio", "Vista exterior", "Patio"],
    amenities: [
      { id: "a1", label: "Wifi", icon: "📶" },
      { id: "a2", label: "Cocina", icon: "🍳" },
      { id: "a3", label: "Estacionamiento", icon: "🚗" },
      { id: "a4", label: "Piscina", icon: "🏊" },
      { id: "a5", label: "Aire acondicionado", icon: "❄️" },
      { id: "a6", label: "Lavadora", icon: "🧺" },
    ],
  },
  {
    id: "cat-1",
    title: "Departamento en Piriapolis",
    location: "Piriapolis, Maldonado",
    rating: 4.84,
    reviews: 32,
    hostName: "Lorena",
    hostYears: 6,
    pricePerNight: 3178,
    images: ["Frente", "Living", "Cocina", "Habitación", "Terraza"],
    amenities: [
      { id: "b1", label: "Wifi", icon: "📶" },
      { id: "b2", label: "Jacuzzi", icon: "🛁" },
      { id: "b3", label: "Parrilla", icon: "🔥" },
      { id: "b4", label: "TV", icon: "📺" },
    ],
  },
  {
    id: "cat-3",
    title: "Casa con jacuzzi techado en barrio residencial",
    location: "Piriapolis, Uruguay",
    rating: 4.53,
    reviews: 19,
    hostName: "Luis Eduardo",
    hostYears: 5,
    pricePerNight: 2339,
    images: ["Jacuzzi", "Sala de estar", "Dormitorio principal", "Patio", "Cocina"],
    amenities: [
      { id: "c1", label: "Jacuzzi", icon: "🛁" },
      { id: "c2", label: "Wifi", icon: "📶" },
      { id: "c3", label: "Aire acondicionado", icon: "❄️" },
      { id: "c4", label: "TV", icon: "📺" },
    ],
  },
];

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();

  const roomId = useMemo(() => {
    if (!params?.id) return "";
    return Array.isArray(params.id) ? params.id[0] : params.id;
  }, [params]);

  const [searchQuery, setSearchQuery] = useState("");
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
      const found = roomsSeed.find((candidate) => candidate.id === roomId);

      if (found) {
        setRoom(found);
      } else {
        setRoom({
          id: roomId,
          title: `Habitación ${roomId}`,
          location: "Piriapolis, Uruguay",
          rating: 4.6,
          reviews: 12,
          hostName: "Anfitrión local",
          hostYears: 3,
          pricePerNight: 2500,
          images: ["Foto principal", "Comedor", "Dormitorio", "Baño"],
          amenities: [
            { id: "d1", label: "Wifi", icon: "📶" },
            { id: "d2", label: "Cocina", icon: "🍳" },
            { id: "d3", label: "Calefacción", icon: "🔥" },
            { id: "d4", label: "Parking", icon: "🚗" },
          ],
        });
      }

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [roomId]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header query={searchQuery} onQueryChange={setSearchQuery} searchHref={catalogSearchHref} />

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
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
