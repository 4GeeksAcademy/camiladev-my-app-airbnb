import { CategoryFilters, HeaderTab } from "./category-filters";
import { SearchBar } from "./search-bar";

interface HeaderMobileContentProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch?: () => void;
  searchHref?: string;
  showHomeHeader: boolean;
  tabs: HeaderTab[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
}

export const HeaderMobileContent = ({
  query,
  onQueryChange,
  onSearch,
  searchHref,
  showHomeHeader,
  tabs,
  activeTabId,
  onTabChange,
}: HeaderMobileContentProps) => {
  return (
    <div className="md:hidden">
      <SearchBar value={query} onChange={onQueryChange} onSearch={onSearch} searchHref={searchHref} />
      {showHomeHeader && tabs.length > 0 && activeTabId && onTabChange ? (
        <CategoryFilters
          tabs={tabs}
          activeTabId={activeTabId}
          onSelect={onTabChange}
          className="border-b border-zinc-200"
        />
      ) : null}
    </div>
  );
};
