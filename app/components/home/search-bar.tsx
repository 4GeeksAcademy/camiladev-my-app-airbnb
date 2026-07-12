import type { FormEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-11 w-full items-center rounded-full border border-zinc-200 bg-white px-4 shadow-sm"
    >
      <svg
        className="mr-2 h-4 w-4 text-zinc-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Comienza a explorar"
        className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500"
        aria-label="Buscar alojamientos"
      />

      <button
        type="submit"
        className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white"
        aria-label="Buscar"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>
    </form>
  );
}
