import { FooterBottomNav } from "./footer-bottom-nav";
import { FooterInspiration } from "./footer-inspiration";
import { FooterLinkGroups } from "./footer-link-groups";
import { FooterMeta } from "./footer-meta";

export const Footer = () => {
  return (
    <footer className="mt-8 border-t border-zinc-200 bg-zinc-100">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 md:px-8 md:pb-8 md:pt-8">
        <FooterInspiration />
        <FooterLinkGroups />
        <FooterMeta />
      </div>
      <FooterBottomNav />
    </footer>
  );
};
