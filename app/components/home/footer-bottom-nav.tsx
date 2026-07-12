"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Explorar", href: "/", icon: "⌕" },
  { label: "Favoritos", href: "/catalog", icon: "♡" },
  { label: "Iniciar sesion", href: "/rooms/1", icon: "◌" },
];

export const FooterBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegacion principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur md:hidden"
    >
      <div className="mx-auto grid w-full max-w-md grid-cols-3 px-4 py-2">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/catalog" && pathname.startsWith("/catalog")) ||
            (item.href === "/rooms/1" && pathname.startsWith("/rooms/"));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl py-1 text-xs ${
                active ? "text-rose-600" : "text-zinc-500"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center text-xl">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
