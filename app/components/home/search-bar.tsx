import type { FormEvent } from "react";
import { SearchIcon } from "./search-icon";
import { SearchSubmitAction } from "./search-submit-action";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  searchHref?: string;
}

export const SearchBar = ({ value, onChange, onSearch, searchHref }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-11 w-full items-center rounded-full border border-zinc-200 bg-white px-4 shadow-sm"
    >
      <SearchIcon className="mr-2 h-4 w-4 text-zinc-500" />

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Comienza a explorar"
        className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500"
        aria-label="Buscar alojamientos"
      />

      <SearchSubmitAction searchHref={searchHref} />
    </form>
  );
};
