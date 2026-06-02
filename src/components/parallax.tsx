import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface ParallaxProps {
  children: ReactNode;
  /** Pixels of vertical drift across the viewport. Positive = moves up as you scroll down. */
  depth?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Lightweight, scroll-driven parallax wrapper.
 * Uses a single rAF loop tied to scroll for smooth, GPU-friendly translation.
 * Respects prefers-reduced-motion.
 */
export function Parallax({ children, depth = 40, className = "", style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below viewport) → 0 (centered) → 1 (above viewport)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.transform = `translate3d(0, ${(-clamped * depth).toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [depth]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}
