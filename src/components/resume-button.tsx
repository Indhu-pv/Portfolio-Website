import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";

interface ResumeButtonProps {
  url: string;
  className?: string;
}

/**
 * Opens the resume URL in a new tab and shows a brief friendly loading state
 * while the file fetches. The state auto-clears after a short delay so the
 * button doesn't get stuck if the new tab handles loading itself.
 */
export function ResumeButton({ url, className = "" }: ResumeButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);
    window.open(url, "_blank", "noopener,noreferrer");
    // Friendly loading shimmer — clears after the new tab has had time to start.
    window.setTimeout(() => setLoading(false), 1600);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-busy={loading || undefined}
      className={`inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow ${
        loading ? "pointer-events-none opacity-90" : ""
      } ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Opening resume…
        </>
      ) : (
        <>
          <FileText className="h-4 w-4" /> Resume
        </>
      )}
    </a>
  );
}
