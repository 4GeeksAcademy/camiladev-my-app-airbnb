import { inspirationItems, inspirationTabs } from "./footer-content-data";

export const FooterInspiration = () => {
  return (
    <section className="border-b border-zinc-200 pb-5">
      <h2 className="text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-3xl">
        Inspiracion para futuras escapadas
      </h2>

      <div className="mt-3 flex items-center gap-4 overflow-x-auto border-b border-zinc-200 pb-2 text-xs text-zinc-500 sm:text-sm">
        {inspirationTabs.map((tab, index) => {
          const active = index === 0;
          return (
            <button
              key={tab}
              type="button"
              className={`shrink-0 border-b-2 pb-1.5 font-medium ${
                active ? "border-zinc-900 text-zinc-900" : "border-transparent"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-4 md:grid-cols-4">
        {inspirationItems.map(([title, subtitle]) => (
          <div key={title}>
            <p className="text-base font-medium leading-snug text-zinc-900 md:text-base">{title}</p>
            {subtitle ? <p className="text-xs text-zinc-600 sm:text-sm">{subtitle}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
};
