interface FilterBarProps {
  filters: string[];
  activeFilters: string[];
  onToggleFilter: (filter: string) => void;
}

export const FilterBar = ({ filters, activeFilters, onToggleFilter }: FilterBarProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter);

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onToggleFilter(filter)}
            className={`shrink-0 rounded-full border px-3 py-2 text-sm transition ${
              isActive
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};
