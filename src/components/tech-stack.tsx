import { useRef, type MouseEvent } from "react";
import {
  Boxes,
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Github,
  Globe,
  Hammer,
  Layers,
  Leaf,
  Send,
  Server,
  Sparkles,
  Terminal,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

type Tech = { name: string; icon: LucideIcon; glow: string };
type Category = { title: string; icon: LucideIcon; items: Tech[] };

const categories: Category[] = [
  {
    title: "Languages",
    icon: Braces,
    items: [
      { name: "Java", icon: Flame, glow: "239 83 80" },
      { name: "Python", icon: FileCode, glow: "255 209 102" },
      { name: "C++", icon: Code2, glow: "100 181 246" },
      { name: "JavaScript", icon: Zap, glow: "247 223 30" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Spring Boot", icon: Leaf, glow: "109 179 63" },
      { name: "Servlets", icon: Cpu, glow: "129 199 132" },
      { name: "JDBC", icon: Database, glow: "100 181 246" },
      { name: "Express.js", icon: Send, glow: "200 200 200" },
      { name: "Node.js", icon: Hammer, glow: "104 159 56" },
    ],
  },
  {
    title: "Web",
    icon: Globe,
    items: [
      { name: "HTML", icon: FileCode, glow: "239 108 0" },
      { name: "CSS", icon: Wind, glow: "33 150 243" },
      { name: "JSP", icon: Layers, glow: "255 167 38" },
      { name: "React", icon: Sparkles, glow: "97 218 251" },
      { name: "Thymeleaf", icon: Leaf, glow: "85 187 47" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", icon: Database, glow: "0 117 143" },
      { name: "MongoDB", icon: Boxes, glow: "76 175 80" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: GitBranch, glow: "240 80 50" },
      { name: "GitHub", icon: Github, glow: "200 200 200" },
      { name: "Maven", icon: Hammer, glow: "192 110 60" },
      { name: "Postman", icon: Send, glow: "255 108 55" },
      { name: "VS Code", icon: Terminal, glow: "0 122 204" },
    ],
  },
];

function TechCard({ cat, index }: { cat: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = cat.icon;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(6deg) rotateY(-4deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--card)_55%,transparent)] p-5 shadow-soft backdrop-blur-md transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:shadow-glow motion-safe:animate-tech-float"
      style={{
        transform: "perspective(1100px) rotateX(6deg) rotateY(-4deg)",
        transformStyle: "preserve-3d",
        animationDelay: `${index * 0.6}s`,
        willChange: "transform",
      }}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
      <div className="relative flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-xl grad-primary text-primary-foreground shadow-glow">
          <Icon className="h-4 w-4" />
        </span>
        <h4 className="font-display text-sm font-bold tracking-wide text-foreground">{cat.title}</h4>
      </div>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {cat.items.map((it) => {
          const TIcon = it.icon;
          return (
            <span
              key={it.name}
              style={{ ["--glow" as string]: it.glow }}
              className="tech-pill group/pill inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[color-mix(in_oklab,var(--surface)_60%,transparent)] px-2.5 py-1.5 font-mono text-[11px] text-foreground/90 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-[rgb(var(--glow)/0.7)] hover:text-foreground"
            >
              <TIcon className="h-3.5 w-3.5 transition-colors duration-300 group-hover/pill:text-[rgb(var(--glow))]" />
              {it.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <div className="mt-14">
      <h3 className="font-display text-2xl font-bold md:text-3xl">Technical toolkit</h3>
      <p className="mt-2 text-muted-foreground">
        An isometric look at the stack — hover any pill for a brand-coloured neon lift.
      </p>

      <div
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: "1400px" }}
      >
        {categories.map((c, i) => (
          <TechCard key={c.title} cat={c} index={i} />
        ))}
      </div>
    </div>
  );
}
