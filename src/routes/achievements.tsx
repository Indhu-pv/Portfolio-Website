import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, Code2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Indhu P" },
      { name: "description", content: "Hackathons, finalist placements, and certifications including IIT Madras Quantathon and Google Solution Challenge." },
      { property: "og:title", content: "Achievements — Indhu P" },
      { property: "og:description", content: "Hackathons, finalist placements, and certifications." },
    ],
  }),
  component: Achievements,
});

type Item = { icon: LucideIcon; title: string; org: string; year: string; tag: string };

const items: Item[] = [
  { icon: Trophy, title: "Quantathon Finalist", org: "Shaastra · IIT Madras", year: "2026", tag: "Finalist" },
  { icon: Code2, title: "24-Hour Hackathon — CodHer's", org: "CodHer's Hackathon", year: "2026", tag: "Participated" },
  { icon: Users, title: "Top 105 Teams", org: "Google Solution Challenge", year: "2025", tag: "Shortlist" },
  { icon: Code2, title: "Internal Round Selection", org: "Smart India Hackathon", year: "2025", tag: "Selected" },
  { icon: Award, title: "Programming Domain Certificate", org: "NPTEL", year: "2025", tag: "Certification" },
  { icon: Award, title: "Discipline Star", org: "NPTEL", year: "2025", tag: "Recognition" },
];

function Achievements() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-3xl animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Wall of wins</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Moments worth <span className="text-grad">marking</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Hackathons, finalist runs, and certifications — each one a checkpoint on the way to better engineering.
        </p>
      </header>

      <ol className="relative mt-14 border-l-2 border-border pl-8">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <li
              key={it.title}
              className="group relative mb-8 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="absolute -left-[42px] grid h-9 w-9 place-items-center rounded-full border border-border bg-card shadow-soft transition-all group-hover:grad-primary group-hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-glow">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{it.title}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">{it.tag}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{it.org} · <span className="font-mono">{it.year}</span></p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
