import type { ReactNode } from "react";
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileCollapseProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/**
 * On mobile, wraps children in a glass-styled <details> accordion.
 * On desktop, renders children inline with no chrome — preserving the
 * existing layout.
 *
 * Accessibility:
 * - <details>/<summary> are natively keyboard-operable (Enter/Space toggles).
 * - Summary advertises state via aria-expanded + aria-controls pointing to the
 *   content panel, which carries role="region" + aria-labelledby for SR users.
 * - Visible focus outline on summary via focus-visible.
 */
export function MobileCollapse({ title, defaultOpen = false, children }: MobileCollapseProps) {
  const isMobile = useIsMobile();
  const uid = useId();
  const headerId = `mc-h-${uid}`;
  const panelId = `mc-p-${uid}`;
  if (!isMobile) return <>{children}</>;

  return (
    <details
      open={defaultOpen}
      className="group glass mb-4 overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-out [&[open]]:shadow-glow"
    >
      <summary
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
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="px-4 pb-5 pt-1 animate-fade-up"
      >
        {children}
      </div>
    </details>
  );
}
