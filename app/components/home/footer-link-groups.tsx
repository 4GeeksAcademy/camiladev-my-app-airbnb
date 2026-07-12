import { footerGroups } from "./footer-content-data";

export const FooterLinkGroups = () => {
  return (
    <section className="grid gap-7 py-7 md:grid-cols-3 md:gap-10 md:py-8">
      {footerGroups.map((group, index) => (
        <div key={group.title} className={index < footerGroups.length - 1 ? "border-b border-zinc-200 pb-7 md:border-b-0 md:pb-0" : ""}>
          <h3 className="text-[17px] font-semibold text-zinc-900 md:text-base">{group.title}</h3>
          <ul className="mt-3.5 space-y-2 text-[15px] leading-snug text-zinc-800 md:text-sm md:leading-normal">
            {group.links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
