import { useRef, type ReactNode, type MouseEvent } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function Tilt3D({ children, className = "", intensity = 10 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`card-3d relative ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 15%, transparent), transparent 40%)",
        transition: "transform 500ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 500ms cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      {children}
    </div>
  );
}
