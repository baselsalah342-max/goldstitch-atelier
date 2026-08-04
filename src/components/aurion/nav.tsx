import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links: Array<{ label: string; to: string; hash?: string }> = [
  { label: "Collection", to: "/", hash: "collection" },
  { label: "Lookbook", to: "/", hash: "collection" },
  { label: "Contact", to: "/contact" },
];


export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500"
      style={
        scrolled
          ? {
              background: "rgba(10, 9, 8, 0.82)",
              backdropFilter: "blur(18px)",
              borderBottom: "1px solid rgba(176, 141, 87, 0.12)",
            }
          : {
              background: "linear-gradient(180deg, rgba(10,9,8,0.82), rgba(10,9,8,0))",
              borderBottom: "1px solid transparent",
            }
      }
    >
      <nav className="shell flex items-center justify-between py-5">
        <Link to="/" className="wordmark text-sm" onClick={() => setOpen(false)}>
          AURION
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.label} to={l.to} {...(l.hash ? { hash: l.hash } : {})} className="nav-link">
              {l.label}
            </Link>
          ))}
          <span className="mono-label text-[0.68rem] text-ash">Cart (0)</span>
        </div>

        <button
          type="button"
          className="nav-link md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[4.4rem] z-40 flex flex-col gap-8 bg-[#0a0908] px-[var(--page-padding)] pt-16 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light text-bone"
            >
              {l.label}
            </Link>
          ))}
          <span className="mono-label text-ash">Cart (0)</span>
        </div>
      )}
    </header>
  );
}
