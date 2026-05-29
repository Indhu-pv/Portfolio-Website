import { createFileRoute, Link } from "@tanstack/react-router";
import { Tilt3D } from "@/components/tilt-3d";
import { ArrowUpRight, Lock, ShieldCheck, Boxes } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Indhu P" },
      { name: "description", content: "Selected projects: text-steganography secure access, XAI Guardian for ethical microfinance, and a Spring Boot inventory system." },
      { property: "og:title", content: "Projects — Indhu P" },
      { property: "og:description", content: "Secure document access, explainable AI lending, and an inventory monitoring system." },
    ],
  }),
  component: Projects,
});

type Project = {
  title: string;
  tag: string;
  icon: LucideIcon;
  blurb: string;
  bullets: string[];
  stack: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: "Specialized Enciphered Access",
    tag: "Healthcare · Security",
    icon: Lock,
    blurb: "Secure healthcare document management using Text Steganography and AES encryption with role-based access control for confidential patient records.",
    bullets: [
      "Doctor-patient authentication & encrypted report sharing",
      "Secure payload extraction and decryption workflows",
      "Built end-to-end with Java, JSP, Servlets, JDBC and MySQL",
    ],
    stack: ["Java", "JSP", "Servlets", "MySQL", "AES"],
    accent: "from-[oklch(0.55_0.22_275)] to-[oklch(0.6_0.2_310)]",
  },
  {
    title: "XAI Guardian",
    tag: "Ethical AI · Microfinance",
    icon: ShieldCheck,
    blurb: "An explainable AI lending system enabling transparent, auditable, and bias-aware loan decisions for underserved communities.",
    bullets: [
      "Rule-based scoring engine with trust-score evaluation",
      "Independent audit validation pipeline",
      "Interactive Streamlit dashboards for stakeholders",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    accent: "from-[oklch(0.7_0.2_25)] to-[oklch(0.75_0.18_55)]",
  },
  {
    title: "Inventory Monitoring System",
    tag: "Enterprise · Spring Boot",
    icon: Boxes,
    blurb: "A full inventory management platform: products, stock levels, role-based auth, low-stock alerts, CSV exports and email reporting.",
    bullets: [
      "Role-based authentication with Spring Security",
      "Low-stock monitoring + CSV report export + email reporting",
      "Stock activity logging backed by MySQL via Hibernate",
    ],
    stack: ["Spring Boot", "Hibernate", "Thymeleaf", "MySQL"],
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.6_0.2_240)]",
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-3xl animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Selected work</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Things I've <span className="text-grad">built</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Three projects spanning secure systems, ethical AI, and enterprise backends.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <Tilt3D
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-3d"
              intensity={8}
            >
              <div className={`relative h-32 bg-gradient-to-br ${p.accent} p-5`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                <h3 className="mt-1 font-display text-xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-accent">▸</span>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px]">{s}</span>
                  ))}
                </div>

                <a
                  href="https://github.com/Indhu-pv"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground link-underline"
                >
                  View on GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Tilt3D>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card/60 p-8 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl font-bold">Want to see more, or talk specifics?</h3>
          <p className="mt-1 text-muted-foreground">Happy to walk through architecture, trade-offs, or pair on a small problem.</p>
        </div>
        <Link
          to="/contact"
          className="btn-shine inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
