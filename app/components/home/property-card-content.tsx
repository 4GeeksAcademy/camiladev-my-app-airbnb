import { Property } from "./types";
import { StarIcon } from "./star-icon";

interface PropertyCardContentProps {
  property: Property;
}

export const PropertyCardContent = ({ property }: PropertyCardContentProps) => {
  return (
    <div className="px-1 pb-1 pt-3">
      <h3 className="line-clamp-2 text-base font-semibold text-zinc-900">{property.title}</h3>
      <p className="mt-1 text-sm text-zinc-600">{property.location}</p>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-zinc-900">
          <span className="font-semibold">$U {property.pricePerNight.toLocaleString("es-UY")}</span>{" "}
          por noche
        </p>
        <p className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
          <StarIcon />
          {property.rating.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
