import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Menu, Moon, Sun, X } from "lucide-react";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className="group flex items-center gap-2 font-display font-bold"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl grad-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-12">
              IP
            </span>
            <span className="text-sm tracking-wide">
              <span className="text-grad">Indhu</span>
              <span className="text-grad"> P</span>

            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => handleClick(e, n.id)}
                data-status={active === n.id ? "active" : undefined}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface transition-all hover:rotate-12 hover:shadow-glow"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => handleClick(e, n.id)}
                data-status={active === n.id ? "active" : undefined}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 Indhu P · Built with care.</p>
        <div className="flex gap-4 font-mono text-xs">
          <a href="mailto:pindhu2605@gmail.com" className="link-underline">pindhu2605@gmail.com</a>
          <a href="https://github.com/Indhu-pv" target="_blank" rel="noreferrer" className="link-underline">github</a>
          <a href="https://linkedin.com/in/indhu-pv" target="_blank" rel="noreferrer" className="link-underline">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
