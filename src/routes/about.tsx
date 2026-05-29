import { createFileRoute } from "@tanstack/react-router";
import { Tilt3D } from "@/components/tilt-3d";
import { GraduationCap, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Indhu P" },
      { name: "description", content: "About Indhu P: education at Velammal Engineering College, technical skills, and internship experience at Infosys Springboard." },
      { property: "og:title", content: "About — Indhu P" },
      { property: "og:description", content: "Education, skills, and the Infosys Springboard internship that shape my engineering practice." },
    ],
  }),
  component: About,
});

const skillGroups = [
  { title: "Languages", items: ["Java", "Python", "C++", "JavaScript"] },
  { title: "Backend", items: ["Spring Boot", "Servlets", "JDBC", "Express.js", "Node.js"] },
  { title: "Web", items: ["HTML", "CSS", "JSP", "React", "Thymeleaf"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "Maven", "Postman", "VS Code"] },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-3xl animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          A <span className="text-grad">curious builder</span> with a backend heart.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I'm motivated by problems that sit at the intersection of <em>security</em>, <em>data</em>,
          and people. I gravitate toward backend systems where correctness matters — but I care
          equally about the interfaces that make them human.
        </p>
      </header>

      {/* Education + Experience */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Tilt3D className="rounded-3xl border border-border bg-card p-7 shadow-soft" intensity={6}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono">
            <GraduationCap className="h-3.5 w-3.5" /> Education
          </div>
          <h3 className="font-display text-xl font-bold">Velammal Engineering College</h3>
          <p className="mt-1 text-sm text-muted-foreground">B.E. Computer Science & Engineering · CGPA 8.4</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Chennai, TN · Sept 2023 – Present</p>

          <div className="mt-6 border-t border-border pt-5">
            <h3 className="font-display text-lg font-bold">Govt. Girls Higher Secondary School</h3>
            <p className="mt-1 text-sm text-muted-foreground">12th: 83.8% · 10th: 100%</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">Thiruvallur, TN · 2022 – 2023</p>
          </div>
        </Tilt3D>

        <Tilt3D className="rounded-3xl border border-border bg-card p-7 shadow-soft" intensity={6}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono">
            <Briefcase className="h-3.5 w-3.5" /> Internship
          </div>
          <h3 className="font-display text-xl font-bold">Infosys Springboard Virtual Internship 6.0</h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Feb 2026</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-2"><span className="text-accent">▸</span> Built a Java-based <span className="text-foreground">Inventory Monitoring & Reporting</span> system with stock tracking, reporting, and DB management.</li>
            <li className="flex gap-2"><span className="text-accent">▸</span> Hands-on with <span className="text-foreground">Spring Boot, Hibernate, MySQL, Spring Security</span> across backend integration and reporting modules.</li>
          </ul>
        </Tilt3D>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Technical toolkit</h2>
        <p className="mt-2 text-muted-foreground">Tools I reach for, organised by where they live.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full grad-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Objective */}
      <section className="mt-20 rounded-3xl border border-border bg-card/70 p-8 backdrop-blur md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Career objective</p>
        <p className="mt-4 max-w-3xl font-display text-2xl leading-relaxed md:text-3xl">
          To contribute effectively in a professional environment while
          continuously enhancing technical and collaborative skills — supporting
          <span className="text-grad"> organizational growth and innovation.</span>
        </p>
      </section>
    </div>
  );
}
