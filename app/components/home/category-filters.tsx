export interface HeaderTab {
  id: string;
  label: string;
  icon: string;
  isNew?: boolean;
}

interface CategoryFiltersProps {
  tabs: HeaderTab[];
  activeTabId: string;
  onSelect: (tabId: string) => void;
  className?: string;
}

export const CategoryFilters = ({ tabs, activeTabId, onSelect, className }: CategoryFiltersProps) => {
  return (
    <div className={className}>
      <div className="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto px-4 py-3 md:justify-center md:gap-10 md:px-6">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              className="relative shrink-0 text-zinc-600"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="relative text-[34px] leading-none md:text-[42px]">{tab.icon}</div>
                {tab.isNew ? (
                  <span className="absolute -right-5 top-0 rounded-full bg-slate-700 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    Nuevo
                  </span>
                ) : null}
                <span className={`text-sm font-medium ${isActive ? "text-zinc-900" : "text-zinc-600"}`}>
                  {tab.label}
                </span>
              </div>
              <span
                className={`mt-1 block h-0.5 w-full rounded-full ${
                  isActive ? "bg-zinc-900" : "bg-transparent"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
