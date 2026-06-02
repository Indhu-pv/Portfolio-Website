import type { ReactNode } from "react";
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
 */
export function MobileCollapse({ title, defaultOpen = false, children }: MobileCollapseProps) {
  const isMobile = useIsMobile();
  if (!isMobile) return <>{children}</>;

  return (
    <details
      open={defaultOpen}
      className="group glass mb-4 overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-out [&[open]]:shadow-glow"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold">
        <span className="font-display">{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-300 ease-out group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-5 pt-1 animate-fade-up">{children}</div>
    </details>
  );
}
