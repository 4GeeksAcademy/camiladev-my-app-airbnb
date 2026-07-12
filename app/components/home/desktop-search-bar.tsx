import Link from "next/link";

interface DesktopSearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  searchHref?: string;
}

export const DesktopSearchBar = ({ query, onQueryChange, searchHref }: DesktopSearchBarProps) => {
  const href = searchHref ?? "/catalog";

  return (
    <div className="hidden px-4 pb-4 md:block">
      <div className="mx-auto grid w-full max-w-3xl grid-cols-[1fr_1fr_1fr_auto] items-center rounded-full border border-zinc-200 bg-white p-2 shadow-sm">
        <div className="border-r border-zinc-200 px-4 py-1">
          <p className="text-xs font-semibold text-zinc-900">Destino</p>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar destinos"
            className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-500"
          />
        </div>
        <div className="border-r border-zinc-200 px-4 py-1">
          <p className="text-xs font-semibold text-zinc-900">Fechas</p>
          <p className="text-sm text-zinc-500">Agregar fechas</p>
        </div>
        <div className="px-4 py-1">
          <p className="text-xs font-semibold text-zinc-900">Huéspedes</p>
          <p className="text-sm text-zinc-500">¿Cuántos?</p>
        </div>
        <Link
          href={href}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white"
          aria-label="Buscar"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
