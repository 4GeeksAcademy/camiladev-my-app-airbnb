import Link from "next/link";
import { Property } from "./types";
import { PropertyCardContent } from "./property-card-content";
import { PropertyCardMedia } from "./property-card-media";

interface PropertyCardProps {
  property: Property;
  onClick?: (property: Property) => void;
  href?: string;
}

export const PropertyCard = ({ property, onClick, href }: PropertyCardProps) => {
  const content = (
    <>
      <PropertyCardMedia property={property} />
      <PropertyCardContent property={property} />
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block rounded-3xl bg-white p-2 shadow-sm ring-1 ring-zinc-100">
        {content}
      </Link>
    );
  }

  return (
    <article
      className="group cursor-pointer rounded-3xl bg-white p-2 shadow-sm ring-1 ring-zinc-100"
      onClick={() => onClick?.(property)}
    >
      {content}
    </article>
  );
};
