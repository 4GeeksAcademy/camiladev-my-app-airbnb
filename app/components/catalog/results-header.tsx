interface ResultsHeaderProps {
  count: number;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (value: "asc" | "desc") => void;
}

export const ResultsHeader = ({ count, sortOrder, onSortOrderChange }: ResultsHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-zinc-700">
        <span className="font-semibold text-zinc-900">{count}</span> resultados encontrados
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort-price" className="text-sm text-zinc-600">
          Ordenar por precio
        </label>
        <select
          id="sort-price"
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value as "asc" | "desc")}
          className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none focus:border-zinc-500"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
};
