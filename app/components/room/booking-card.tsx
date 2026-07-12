"use client";

import { useState } from "react";

interface BookingCardProps {
  pricePerNight: number;
  minGuests?: number;
  maxGuests?: number;
}

export function BookingCard({
  pricePerNight,
  minGuests = 1,
  maxGuests = 8,
}: BookingCardProps) {
  const [guests, setGuests] = useState(minGuests);

  const decrementGuests = () => {
    setGuests((previous) => Math.max(minGuests, previous - 1));
  };

  const incrementGuests = () => {
    setGuests((previous) => Math.min(maxGuests, previous + 1));
  };

  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-zinc-100 lg:sticky lg:top-24">
      <p className="text-2xl font-semibold text-zinc-900">
        $U {pricePerNight.toLocaleString("es-UY")} <span className="text-base font-normal">/ noche</span>
      </p>

      <div className="mt-5 rounded-2xl border border-zinc-200 p-3">
        <p className="text-xs uppercase tracking-wide text-zinc-500">Huéspedes</p>
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={decrementGuests}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 disabled:opacity-40"
            disabled={guests <= minGuests}
            aria-label="Reducir huéspedes"
          >
            -
          </button>

          <span className="text-base font-medium text-zinc-900">{guests}</span>

          <button
            type="button"
            onClick={incrementGuests}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 disabled:opacity-40"
            disabled={guests >= maxGuests}
            aria-label="Aumentar huéspedes"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white"
      >
        Reservar
      </button>
    </aside>
  );
}
