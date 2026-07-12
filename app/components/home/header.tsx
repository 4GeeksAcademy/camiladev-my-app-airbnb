import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import type { ReactNode } from "react";

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch?: () => void;
}

function IconButton({ children, label }: { children: ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700"
    >
      {children}
    </button>
  );
}

export function Header({ query, onQueryChange, onSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Logo />
        <div className="flex-1">
          <SearchBar value={query} onChange={onQueryChange} onSearch={onSearch} />
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <IconButton label="Seleccionar idioma">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
          </IconButton>

          <IconButton label="Menu de usuario">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </IconButton>
        </div>
      </div>
    </header>
  );
}
