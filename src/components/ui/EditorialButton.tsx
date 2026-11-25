import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface EditorialButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "on-burgundy" | "on-yellow";
  external?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Signature paired circle-arrow + pill CTA matching the reference editorial aesthetic.
 */
export function EditorialButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "on-burgundy",
  external = false,
  disabled = false,
  className = "",
  ariaLabel,
}: EditorialButtonProps) {
  const isLight = variant === "on-burgundy";

  const circleClasses = isLight
    ? "border-[var(--butter-yellow)]/65 text-[var(--butter-yellow)] group-hover:bg-[var(--butter-yellow)] group-hover:text-[var(--burgundy)]"
    : "border-[var(--burgundy)]/65 text-[var(--burgundy)] group-hover:bg-[var(--burgundy)] group-hover:text-[var(--butter-yellow)]";

  const pillClasses = isLight
    ? "bg-[var(--butter-yellow)] text-[var(--burgundy-dark)] group-hover:bg-[var(--cream)]"
    : "bg-[var(--burgundy)] text-[var(--butter-yellow)] group-hover:bg-[var(--burgundy-dark)]";

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${circleClasses}`}
      >
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
      <span
        className={`flex h-9 items-center rounded-full px-5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${pillClasses}`}
      >
        {children}
      </span>
    </>
  );

  const baseClass = `group inline-flex items-center gap-1.5 whitespace-nowrap select-none transition-transform duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={baseClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClass} cursor-pointer`}
    >
      {content}
    </button>
  );
}
