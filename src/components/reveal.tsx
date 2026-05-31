import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Direction = "left" | "right" | "up" | "zoom";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export function Reveal({ children, direction = "up", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial: Record<Direction, string> = {
    left: "translate3d(-60px,0,0) rotateY(8deg)",
    right: "translate3d(60px,0,0) rotateY(-8deg)",
    up: "translate3d(0,40px,0)",
    zoom: "scale(0.85)",
  };

  const style: CSSProperties = {
    transform: shown ? "translate3d(0,0,0) rotateY(0) scale(1)" : initial[direction],
    opacity: shown ? 1 : 0,
    transition: `transform 0.9s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, opacity 0.7s ease ${delay}ms`,
    transformStyle: "preserve-3d",
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
