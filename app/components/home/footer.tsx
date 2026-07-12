export const Footer = () => {
  const items = ["Explorar", "Favoritos", "Iniciar sesion"];

  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto grid w-full max-w-md grid-cols-3 px-4 py-2" aria-label="Navegacion principal">
        {items.map((item, index) => {
          const active = index === 0;

          return (
            <button
              key={item}
              type="button"
              className={`flex flex-col items-center gap-1 rounded-xl py-1 text-xs ${
                active ? "text-rose-600" : "text-zinc-500"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current">
                {index + 1}
              </span>
              {item}
            </button>
          );
        })}
      </nav>
    </footer>
  );
};
