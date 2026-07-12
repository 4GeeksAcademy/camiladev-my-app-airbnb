import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { CategoryFilters, HeaderTab } from "./category-filters";
import { DesktopSearchBar } from "./desktop-search-bar";
import { HeaderDesktopActions } from "./header-desktop-actions";
import { HeaderMobileContent } from "./header-mobile-content";

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch?: () => void;
  searchHref?: string;
  mode?: "default" | "home";
  tabs?: HeaderTab[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
}

export const Header = ({
  query,
  onQueryChange,
  onSearch,
  searchHref,
  mode = "default",
  tabs = [],
  activeTabId,
  onTabChange,
}: HeaderProps) => {
  const showHomeHeader = mode === "home";

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-4 pt-3 sm:px-6">
        <HeaderMobileContent
          query={query}
          onQueryChange={onQueryChange}
          onSearch={onSearch}
          searchHref={searchHref}
          showHomeHeader={showHomeHeader}
          tabs={tabs}
          activeTabId={activeTabId}
          onTabChange={onTabChange}
        />

        <div className="hidden items-center justify-between py-3 md:flex">
          <Logo />
          {showHomeHeader && tabs.length > 0 && activeTabId && onTabChange ? (
            <CategoryFilters
              tabs={tabs}
              activeTabId={activeTabId}
              onSelect={onTabChange}
              className="flex-1"
            />
          ) : (
            <div className="mx-10 flex-1">
              <SearchBar
                value={query}
                onChange={onQueryChange}
                onSearch={onSearch}
                searchHref={searchHref}
              />
            </div>
          )}

          <HeaderDesktopActions showHostText={showHomeHeader} />
        </div>

        {showHomeHeader ? (
          <DesktopSearchBar query={query} onQueryChange={onQueryChange} searchHref={searchHref} />
        ) : null}
      </div>
    </header>
  );
};
