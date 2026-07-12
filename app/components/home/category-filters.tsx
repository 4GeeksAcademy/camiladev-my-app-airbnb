import { Category } from "./types";

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

const categoryIcon: Record<Category, string> = {
  Todas: "T",
  Playa: "P",
  Mansiones: "M",
  Tendencias: "Td",
  Cabanas: "C",
  Campo: "Ca",
};

export function CategoryFilters({ categories, activeCategory, onSelect }: CategoryFiltersProps) {
  return (
    <div className="border-b border-zinc-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-100 px-1 text-[10px] font-semibold text-zinc-700">
                {categoryIcon[category]}
              </span>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
