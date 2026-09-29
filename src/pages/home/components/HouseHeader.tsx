import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Position", href: "#position" },
  { label: "Insights", href: "#insights" },
  { label: "Archive", href: "#archive" },
  { label: "Research", href: "#research" },
];

export default function HouseHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background-50/95 backdrop-blur border-b border-background-300/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group cursor-pointer">
          <span className="w-9 h-9 flex items-center justify-center border border-primary-500/45 group-hover:border-primary-500 transition-colors">
            <i className="ri-shield-star-line text-primary-500 text-base" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg text-foreground-950 tracking-wide">Chess Intelligence House</span>
            <span className="font-label text-[9px] tracking-[0.3em] text-foreground-500 uppercase mt-1">
              The Study of Position
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-[11px] tracking-[0.24em] uppercase text-foreground-300 hover:text-primary-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-foreground-500">
            SESSION 0184
          </span>
          <button
            type="button"
            aria-label="Settings"
            className="w-9 h-9 flex items-center justify-center text-foreground-300 hover:text-primary-400 transition-colors cursor-pointer"
          >
            <i className="ri-equalizer-2-line text-base" />
          </button>
        </div>
      </div>
    </header>
  );
}