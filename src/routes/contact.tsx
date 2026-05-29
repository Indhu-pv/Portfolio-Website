import { createFileRoute } from "@tanstack/react-router";
import { Tilt3D } from "@/components/tilt-3d";
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Indhu P" },
      { name: "description", content: "Reach out to Indhu P for placements, internships, or collaboration. Email, phone, LinkedIn, and GitHub." },
      { property: "og:title", content: "Contact — Indhu P" },
      { property: "og:description", content: "Let's build something thoughtful together." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "pindhu2605@gmail.com", href: "mailto:pindhu2605@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 81221 10556", href: "tel:+918122110556" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/indhu-pv", href: "https://linkedin.com/in/indhu-pv" },
  { icon: Github, label: "GitHub", value: "github.com/Indhu-pv", href: "https://github.com/Indhu-pv" },
];

function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (v: string) => {
    try {
      await navigator.clipboard.writeText(v);
      setCopied(v);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-2xl animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Let's build something <span className="text-grad">thoughtful</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Open to placements, internships, and interesting collaborations. The fastest way
          to reach me is email — I usually reply within a day.
        </p>
      </header>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {channels.map((c) => {
          const Icon = c.icon;
          const isCopied = copied === c.value;
          return (
            <Tilt3D key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft" intensity={6}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl grad-primary text-primary-foreground shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-0.5 block font-display text-lg font-semibold link-underline">
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
          );
        })}
      </div>

      <div className="mt-10 flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 text-sm text-muted-foreground backdrop-blur">
        <MapPin className="h-4 w-4 text-accent" />
        Based in Chennai, Tamil Nadu — open to roles across India and remote.
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-border grad-primary p-[1px] shadow-glow">
        <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-card p-10 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Have a role in mind?</h2>
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
  );
}
