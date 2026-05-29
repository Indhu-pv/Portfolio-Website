import { Link } from "@tanstack/react-router";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
          <Link to="/" className="group flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl grad-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-12">
              IP
            </span>
            <span className="text-sm tracking-wide">
              <span className="text-grad">Indhu</span>
              <span className="text-muted-foreground">.dev</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface transition-all hover:rotate-12 hover:shadow-glow"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <nav className="mt-2 flex items-center justify-center gap-1 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-lg px-2.5 py-1 text-xs font-medium text-muted-foreground data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
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
