export const FooterMeta = () => {
  return (
    <section className="border-t border-zinc-200 py-5 text-zinc-800 md:py-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5 text-xs font-medium sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true">🌐</span> Espanol (US)
          </span>
          <span>$U UYU</span>
        </div>

        <div className="flex items-center gap-4 text-base sm:text-lg">
          <a href="#" aria-label="Facebook" className="hover:opacity-70">f</a>
          <a href="#" aria-label="X" className="hover:opacity-70">x</a>
          <a href="#" aria-label="Instagram" className="hover:opacity-70">◉</a>
        </div>
      </div>

      <div className="mt-3 text-xs sm:text-sm">
        <p>© 2026 Airbnb, Inc.</p>
        <p className="mt-1">Privacidad · Terminos</p>
      </div>
    </section>
  );
};
