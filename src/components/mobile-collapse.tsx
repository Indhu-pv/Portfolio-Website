import type { ReactNode } from "react";
import { useId, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileCollapseProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/**
 * On mobile, wraps children in a glass-styled <details> accordion.
 * On desktop, renders children inline with no chrome.
 *
 * Accessibility:
 * - <details>/<summary> are natively keyboard-operable (Enter/Space toggles).
 * - aria-expanded reflects the open state; aria-controls links to the panel.
 * - On expand, focus moves into the panel; on collapse, focus returns to summary.
 * - Visible focus outline on both summary and panel via focus-visible.
 */
export function MobileCollapse({ title, defaultOpen = false, children }: MobileCollapseProps) {
  const isMobile = useIsMobile();
  const uid = useId();
  const headerId = `mc-h-${uid}`;
  const panelId = `mc-p-${uid}`;
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (!isMobile) return <>{children}</>;

  const handleToggle = () => {
    const d = detailsRef.current;
    if (!d) return;
    if (summaryRef.current) {
      summaryRef.current.setAttribute("aria-expanded", String(d.open));
    }
    if (d.open) {
      // Move focus into the expanded panel for screen readers + keyboard users.
      requestAnimationFrame(() => panelRef.current?.focus());
    } else {
      // Return focus to the toggle when collapsing.
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  return (
    <details
      ref={detailsRef}
      open={defaultOpen}
      onToggle={handleToggle}
      className="group glass mb-4 overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-out [&[open]]:shadow-glow"
    >
      <summary
        ref={summaryRef}
        id={headerId}
        aria-controls={panelId}
        aria-expanded={defaultOpen}
        aria-label={`${title} — toggle section`}
        className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="font-display">{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-300 ease-out group-open:rotate-180" aria-hidden />
      </summary>
      <div
        ref={panelRef}
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        tabIndex={-1}
        className="px-4 pb-5 pt-1 animate-fade-up outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-b-2xl"
      >
        {children}
      </div>
    </details>
  );
}
