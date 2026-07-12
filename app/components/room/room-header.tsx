import { StarIcon } from "./star-icon";

interface RoomHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
}

export const RoomHeader = ({ title, location, rating, reviews }: RoomHeaderProps) => {
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
};
