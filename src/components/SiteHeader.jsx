import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/company-logo.webp";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/#games" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Contact", href: "/#contact" },
  { label: "Socials", href: "/#socials" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-red-500/30 bg-white/5 shadow-lg shadow-red-950/40">
            <img src={logo} alt="Crimson Cloud Games logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-white/90">
              CRIMSON CLOUD GAMES
            </div>
            <div className="text-xs text-white/50">Original games across genres</div>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-3 border-t border-white/10 pt-4 text-sm text-white/75 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            if (item.href === "/") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
