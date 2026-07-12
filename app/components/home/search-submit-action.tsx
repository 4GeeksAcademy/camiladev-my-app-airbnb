import Link from "next/link";
import { SearchIcon } from "./search-icon";

interface SearchSubmitActionProps {
  searchHref?: string;
}

export const SearchSubmitAction = ({ searchHref }: SearchSubmitActionProps) => {
  const classes =
    "ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white";

  if (searchHref) {
    return (
      <Link href={searchHref} className={classes} aria-label="Buscar">
        <SearchIcon className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button type="submit" className={classes} aria-label="Buscar">
      <SearchIcon className="h-4 w-4" />
    </button>
  );
};
