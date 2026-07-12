interface RoomHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 text-zinc-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3.4 2.7 5.4 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9L3.3 9.7l6-.9L12 3.4Z" />
    </svg>
  );
}

export function RoomHeader({ title, location, rating, reviews }: RoomHeaderProps) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900">{title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-700">
        <span className="inline-flex items-center gap-1 font-medium text-zinc-900">
          <StarIcon />
          {rating.toFixed(2)}
        </span>
        <span>·</span>
        <span>{reviews} reseñas</span>
        <span>·</span>
        <span>{location}</span>
      </div>
    </section>
  );
}
