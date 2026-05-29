import { createFileRoute, Link } from "@tanstack/react-router";
import { Tilt3D } from "@/components/tilt-3d";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indhu P — Aspiring Full Stack Developer" },
      { name: "description", content: "Portfolio of Indhu P — Computer Science engineer building secure, explainable, and elegant full-stack systems." },
      { property: "og:title", content: "Indhu P — Aspiring Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Indhu P — Computer Science engineer building secure, explainable, and elegant full-stack systems." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "8.4", l: "CGPA · CSE" },
  { v: "3+", l: "Full-stack projects" },
  { v: "6+", l: "Hackathons & honors" },
  { v: "100%", l: "10th grade score" },
];

const stack = ["Java", "Spring Boot", "React", "Node.js", "Python", "MySQL", "MongoDB", "AES", "JSP", "Streamlit"];

function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg -z-10" />
        <div
          className="absolute -left-32 top-20 -z-10 h-80 w-80 animate-blob animate-float grad-primary opacity-30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-24 top-60 -z-10 h-72 w-72 animate-blob grad-accent opacity-30 blur-3xl"
          style={{ animationDelay: "-3s" }}
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground">
                <Sparkles className="h-3 w-3 text-accent" /> Open to placements · 2026
              </span>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Hi, I'm <span className="text-grad">Indhu</span>.
                <br />
                I engineer <span className="italic underline decoration-accent decoration-4 underline-offset-8">secure</span> &
                <br className="hidden md:block" /> thoughtful software.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Computer Science undergrad at Velammal Engineering College. I build full-stack
                systems that pair real backend depth — Spring Boot, JDBC, MySQL — with calm,
                explainable user experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="btn-shine group inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </Link>
                <a
                  href="mailto:pindhu2605@gmail.com?subject=Resume request"
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground link-underline"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-muted-foreground">
                <a href="https://github.com/Indhu-pv" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
                <a href="https://linkedin.com/in/indhu-pv" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:pindhu2605@gmail.com" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
              </div>
            </div>

            {/* 3D avatar card */}
            <Tilt3D className="mx-auto w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-3d">
              <div className="relative overflow-hidden rounded-2xl bg-surface-2 p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full grad-accent opacity-40 blur-2xl" />
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl grad-primary text-2xl font-bold text-primary-foreground">IP</div>
                  <div>
                    <div className="font-display text-lg font-bold">Indhu P</div>
                    <div className="font-mono text-xs text-muted-foreground">Chennai, IN · CSE '27</div>
                  </div>
                </div>
                <div className="mt-5 space-y-2 font-mono text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">role</span><span>full-stack dev</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">focus</span><span>secure systems · XAI</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">status</span><span className="text-accent">● available</span></div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stack.slice(0, 6).map((s) => (
                  <span key={s} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground">{s}</span>
                ))}
              </div>
            </Tilt3D>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className="animate-fade-up rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-glow"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-3xl font-bold text-grad">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack marquee */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-card/50 p-1">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 font-mono text-xs text-muted-foreground">
            {stack.map((s) => (
              <span key={s} className="transition-colors hover:text-foreground">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
