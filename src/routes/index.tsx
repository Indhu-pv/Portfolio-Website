import { createFileRoute } from "@tanstack/react-router";
import { Tilt3D } from "@/components/tilt-3d";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import { ResumeButton } from "@/components/resume-button";
import { MobileCollapse } from "@/components/mobile-collapse";
import { TechStack } from "@/components/tech-stack";
import {
  BankLogo,
  JavaLogo,
  MySQLLogo,
  PythonLogo,
  ShieldLogo,
  SpringLogo,
} from "@/components/brand-logos";
import { useState, type ComponentType, type SVGProps } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Banknote,
  Boxes,
  Briefcase,
  Check,
  Code2,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  Lock,
  Mail,
  Phone,
  School,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BrandLogo = ComponentType<SVGProps<SVGSVGElement>>;

const RESUME_URL = "https://drive.google.com/file/d/1hW-dZF4FFC9stAVeY93P33-v4UWy5Hhu/view?usp=drivesdk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indhu P — Portfolio · Aspiring Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Indhu P — Computer Science engineer crafting secure, explainable, full-stack systems with Spring Boot, React, and Python.",
      },
      { property: "og:title", content: "Indhu P — Portfolio" },
      {
        property: "og:description",
        content:
          "Secure systems, ethical AI, and thoughtful full-stack engineering.",
      },
    ],
  }),
  component: Home,
});

/* -------------------------------- data -------------------------------- */

const stats = [
  { v: "8.4", l: "CGPA · CSE" },
  { v: "4+", l: "Full-stack projects" },
  { v: "6+", l: "Hackathons & honors" },
  { v: "100%", l: "10th grade score" },
];

const stack = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "Python",
  "MySQL",
  "MongoDB",
  "AES",
  "JSP",
  "Streamlit",
];

// Tech-stack categories now live in `src/components/tech-stack.tsx`.


type Project = {
  title: string;
  tag: string;
  icon: LucideIcon;
  blurb: string;
  bullets: string[];
  stack: string[];
  accent: string;
  repo: string;
  logos: { L: BrandLogo; label: string }[];
};

const projects: Project[] = [
  {
    title: "Specialized Enciphered Access",
    tag: "Healthcare · Security",
    icon: Lock,
    blurb:
      "Secure healthcare document management using Text Steganography and AES encryption with role-based access control for confidential patient records.",
    bullets: [
      "Doctor-patient authentication & encrypted report sharing",
      "Secure payload extraction and decryption workflows",
      "Built end-to-end with Java, JSP, Servlets, JDBC and MySQL",
    ],
    stack: ["Java", "JSP", "Servlets", "MySQL", "AES"],
    accent: "from-[oklch(0.55_0.22_275)] to-[oklch(0.6_0.2_310)]",
    repo: "https://github.com/Indhu-pv/Specialized-Enciphered-Access-Through-Text",
    logos: [
      { L: JavaLogo, label: "Java" },
      { L: MySQLLogo, label: "MySQL" },
      { L: ShieldLogo, label: "AES" },
    ],
  },
  {
    title: "XAI Guardian",
    tag: "Ethical AI · Microfinance",
    icon: ShieldCheck,
    blurb:
      "An explainable AI lending system enabling transparent, auditable, and bias-aware loan decisions for underserved communities.",
    bullets: [
      "Rule-based scoring engine with trust-score evaluation",
      "Independent audit validation pipeline",
      "Interactive Streamlit dashboards for stakeholders",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    accent: "from-[oklch(0.78_0.12_55)] to-[oklch(0.82_0.1_85)]",
    repo: "https://github.com/Indhu-pv/XAI-Guardian-For-MicroFinance",
    logos: [
      { L: PythonLogo, label: "Python" },
      { L: ShieldLogo, label: "Trust" },
    ],
  },
  {
    title: "Inventory Monitoring System",
    tag: "Enterprise · Spring Boot",
    icon: Boxes,
    blurb:
      "A full inventory management platform: products, stock levels, role-based auth, low-stock alerts, CSV exports and email reporting.",
    bullets: [
      "Role-based authentication with Spring Security",
      "Low-stock monitoring + CSV report export + email reporting",
      "Stock activity logging backed by MySQL via Hibernate",
    ],
    stack: ["Spring Boot", "Hibernate", "Thymeleaf", "MySQL"],
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.6_0.2_240)]",
    repo: "https://github.com/Indhu-pv/Inventory-System",
    logos: [
      { L: SpringLogo, label: "Spring Boot" },
      { L: JavaLogo, label: "Java" },
      { L: MySQLLogo, label: "MySQL" },
    ],
  },
  {
    title: "Fraudulent Detection System",
    tag: "Banking · Security",
    icon: Banknote,
    blurb:
      "Real-time financial transaction monitoring and fraud detection using rule-based analysis and behavioural pattern recognition to improve transaction security.",
    bullets: [
      "User registration, authentication and transaction management",
      "Fraud risk scoring and suspicious transaction classification",
      "Admin monitoring dashboard for fraud reporting and analysis",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    accent: "from-[oklch(0.78_0.13_20)] to-[oklch(0.82_0.11_50)]",
    repo: "https://github.com/Indhu-pv/Fraudulent-Detection",
    logos: [
      { L: BankLogo, label: "Banking" },
      { L: SpringLogo, label: "Spring Boot" },
      { L: MySQLLogo, label: "MySQL" },
    ],
  },
];

type Item = { icon: LucideIcon; title: string; org: string; year: string; tag: string };

const achievements: Item[] = [
  { icon: Users, title: "Social Hackathon", org: "CMR Institute of Technology · Bengaluru", year: "2026", tag: "Participated" },
  { icon: Award, title: "Motivated Learners", org: "NPTEL", year: "2026", tag: "Recognition" },
  { icon: Code2, title: "CodHer's Hackathon", org: "ACM-CEG · College of Engineering, Guindy", year: "2026", tag: "Participated" },
  { icon: Trophy, title: "Quantathon Finalist", org: "Shaastra · IIT Madras", year: "2026", tag: "Finalist" },
  { icon: Award, title: "Programming Domain Certificate", org: "NPTEL", year: "2025", tag: "Certification" },
  { icon: Award, title: "Discipline Star", org: "NPTEL", year: "2025", tag: "Recognition" },
  { icon: Code2, title: "Internal Round Selection", org: "Smart India Hackathon", year: "2025", tag: "Selected" },
  { icon: Users, title: "Top 105 Teams", org: "Google Solution Challenge", year: "2025", tag: "Shortlist" },
];

const channels = [
  { icon: Mail, label: "Email", value: "pindhu2605@gmail.com", href: "mailto:pindhu2605@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 81221 10556", href: "tel:+918122110556" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/indhu-pv", href: "https://linkedin.com/in/indhu-pv" },
  { icon: Github, label: "GitHub", value: "github.com/Indhu-pv", href: "https://github.com/Indhu-pv" },
];

/* -------------------------------- page -------------------------------- */

function Home() {
  return (
    <div className="relative" style={{ perspective: "1600px" }}>
      <HeroSection />
      <Parallax depth={25}><AboutSection /></Parallax>
      <Parallax depth={70}><ProjectsSection /></Parallax>
      <Parallax depth={45}><AchievementsSection /></Parallax>
      <Parallax depth={60}><ContactSection /></Parallax>
    </div>
  );
}


/* -------------------------------- hero -------------------------------- */

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
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
        <div className="mx-auto max-w-4xl text-center animate-fade-up">

          <blockquote className="mt-8">
            <p className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-muted-foreground">"</span>
              Do not <em className="italic">wait</em> for the <span className="text-grad">perfect moment</span>;
              <br className="hidden sm:block" /> take the moment
              <br className="hidden sm:block" /> and <span className="underline decoration-accent decoration-4 underline-offset-8">make it perfect.</span>
              <span className="text-muted-foreground">"</span>
            </p>
          </blockquote>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Computer Science undergrad at Velammal Engineering College, shipping
            full-stack systems where <span className="text-foreground">security</span>,
            <span className="text-foreground"> clarity</span> and
            <span className="text-foreground"> craft</span> meet.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-shine group inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <ResumeButton url={RESUME_URL} />

          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-muted-foreground">
            <a href="https://github.com/Indhu-pv" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/indhu-pv" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:pindhu2605@gmail.com" className="transition-colors hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="animate-fade-up rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-3xl font-bold text-grad">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack marquee */}
      <div className="mx-auto max-w-6xl px-6 pb-4">
        <div className="rounded-2xl border border-border bg-card/50 p-1">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 font-mono text-xs text-muted-foreground">
            {stack.map((s) => (
              <span key={s} className="transition-colors hover:text-foreground">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- about -------------------------------- */

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            A <span className="text-grad">curious builder</span> with a backend heart.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm motivated by problems that sit at the intersection of <em>security</em>, <em>data</em>,
            and people. I gravitate toward backend systems where correctness matters — and care
            equally about the interfaces that make them human.
          </p>
        </header>

        {/* Education timeline */}
        <div className="mt-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono">
            <GraduationCap className="h-3.5 w-3.5" /> Education
          </div>
          <ol className="relative border-l-2 border-border pl-6 md:pl-8">
            {[
              {
                icon: GraduationCap,
                title: "Velammal Engineering College",
                lines: ["B.E. Computer Science & Engineering", "CGPA: 8.4"],
                meta: "Chennai, TN · Sept 2023 – Present",
                tag: "Undergrad",
              },
              {
                icon: School,
                title: "Govt. Girls Higher Secondary School",
                lines: ["12th grade: 83.8%", "10th grade: 100%"],
                meta: "Thiruvallur, TN · 2022 – 2023",
                tag: "School",
              },
            ].map((it, i) => {
              const Icon = it.icon;
              return (
                <li
                  key={it.title}
                  className="group relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[34px] grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-soft transition-all group-hover:grad-primary group-hover:text-primary-foreground md:-left-[42px] md:h-9 md:w-9">
                    <Icon className="h-4 w-4" />
                  </span>
                  <Reveal direction={i % 2 === 0 ? "right" : "left"} delay={i * 80}>
                    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-glow">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-base font-bold md:text-lg">{it.title}</h3>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">{it.tag}</span>
                      </div>
                      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {it.lines.map((ln) => (
                          <p key={ln}>{ln}</p>
                        ))}
                      </div>
                      <p className="mt-2 font-mono text-xs text-muted-foreground">{it.meta}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Internship timeline */}
        <div className="mt-14">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono">
            <Briefcase className="h-3.5 w-3.5" /> Internship
          </div>
          <ol className="relative border-l-2 border-border pl-6 md:pl-8">
            {[
              {
                title: "Infosys Springboard Virtual Internship 6.0",
                meta: "Feb 2026",
                tag: "Backend",
                bullets: [
                  <>Built a Java-based <strong className="text-foreground">Inventory Monitoring</strong> system with stock tracking and reporting modules.</>,
                  <>Implemented <strong className="text-foreground">role-based auth</strong> using Spring Boot, Hibernate and Spring Security.</>,
                  <>Strengthened <strong className="text-foreground">enterprise development</strong> skills across backend integration and MySQL.</>,
                ],
              },
              {
                title: "VCodez",
                meta: "Dec 2025",
                tag: "Security",
                bullets: [
                  <>Built <strong className="text-foreground">Specialized Enciphered Access</strong> — a healthcare app hiding patient data inside encrypted text.</>,
                  <>Used <strong className="text-foreground">AES encryption</strong> with Java/J2EE, MySQL and Apache Tomcat for safe report sharing.</>,
                  <>Improved <strong className="text-foreground">data privacy</strong> and reduced risks of unauthorized access and tampering.</>,
                ],
              },
            ].map((it, i) => (
              <li
                key={it.title}
                className="group relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[34px] grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-soft transition-all group-hover:grad-primary group-hover:text-primary-foreground md:-left-[42px] md:h-9 md:w-9">
                  <Briefcase className="h-4 w-4" />
                </span>
                <Reveal direction={i % 2 === 0 ? "right" : "left"} delay={i * 80}>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-glow">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-bold md:text-lg">{it.title}</h3>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">{it.tag}</span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{it.meta}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {it.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2"><span className="mt-1 text-accent">▸</span><span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-20">
          <MobileCollapse title="Technical toolkit" defaultOpen>
            <TechStack />
          </MobileCollapse>
        </div>

      </div>
    </section>
  );
}

/* -------------------------------- projects -------------------------------- */

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Selected work</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Things I've <span className="text-grad">built</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Four projects spanning secure systems, ethical AI, enterprise backends, and fraud detection.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const directions = ["left", "up", "right", "up"] as const;
            return (
              <Reveal key={p.title} direction={directions[i % 4]} delay={i * 100} className="h-full">
                <Tilt3D
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:scale-[1.03] hover:shadow-3d"
                  intensity={8}
                >
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent} p-5 sm:h-48`}>
                    {/* subtle topographic grid */}
                    <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
                    {/* huge ghost glyph as artwork — crisp at any DPI because it's an SVG icon */}
                    <Icon
                      aria-hidden
                      className="pointer-events-none absolute -bottom-6 -right-4 h-44 w-44 text-white/15 drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-rotate-6 group-hover:scale-110"
                    />
                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/25 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          {p.logos.map(({ L, label }) => (
                            <span
                              key={label}
                              title={label}
                              className="grid h-8 w-8 place-items-center rounded-lg bg-white/20 p-1.5 text-white shadow-sm ring-1 ring-white/25 backdrop-blur-md transition-transform duration-500 hover:-translate-y-0.5 hover:bg-white/30 sm:h-9 sm:w-9 sm:p-2"
                            >
                              <L aria-label={label} />
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="rounded-full bg-black/35 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white backdrop-blur">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-5 right-5 flex flex-wrap items-end justify-between gap-2">
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-white/95 drop-shadow">
                        {p.tag}
                      </p>
                      <div className="flex flex-wrap justify-end gap-1">
                        {p.stack.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-white/20 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
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
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground link-underline"
                    >
                      View on GitHub <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </Tilt3D>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- achievements -------------------------------- */

function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Wall of wins</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Moments worth <span className="text-grad">marking</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Hackathons, finalist runs, and certifications — each one a checkpoint on the way to better engineering.
          </p>
        </header>

        <ol className="relative mt-12 border-l-2 border-border pl-6 md:pl-8">
          {achievements.map((it, i) => {
            const Icon = it.icon;
            return (
              <li
                key={it.title}
                className="group relative mb-8"
              >
                <span className="absolute -left-[34px] grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-soft transition-all group-hover:grad-primary group-hover:text-primary-foreground md:-left-[42px] md:h-9 md:w-9">
                  <Icon className="h-4 w-4" />
                </span>
                <Reveal direction={i % 2 === 0 ? "right" : "left"} delay={i * 60}>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-glow">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-bold md:text-lg">{it.title}</h3>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">{it.tag}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{it.org} · <span className="font-mono">{it.year}</span></p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- contact -------------------------------- */

function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (v: string) => {
    try {
      await navigator.clipboard.writeText(v);
      setCopied(v);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <header className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something <span className="text-grad">thoughtful</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Open to placements, internships, and interesting collaborations. The fastest way
            to reach me is email — I usually reply within a day.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const isCopied = copied === c.value;
            return (
              <Reveal key={c.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <Tilt3D className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:scale-[1.03] hover:shadow-glow md:p-6" intensity={6}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3 md:gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl grad-primary text-primary-foreground shadow-glow md:h-12 md:w-12">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="mt-0.5 block break-all font-display text-base font-semibold link-underline md:text-lg"
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copy(c.value)}
                      aria-label={`Copy ${c.label}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface transition-colors hover:bg-secondary"
                    >
                      {isCopied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                    </button>
                  </div>
                </Tilt3D>
              </Reveal>
            );
          })}
        </div>


        <div className="mt-10 overflow-hidden rounded-3xl border border-border grad-primary p-[1px] shadow-glow">
          <div className="rounded-[calc(1.5rem-1px)] bg-card p-8 text-center md:p-10">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Have a role in mind?</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              I'd love to hear about it. Drop me a line and I'll send across my resume and any specifics you need.
            </p>
            <a
              href="mailto:pindhu2605@gmail.com?subject=Opportunity for Indhu P"
              className="btn-shine mt-6 inline-flex items-center gap-2 rounded-xl grad-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
