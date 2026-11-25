interface MonogramProps {
  className?: string;
}

/**
 * Minimal geometric editorial emblem used in the wordmark and circular seal.
 */
export function BrandMonogram({ className = "h-5 w-7" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 20C10.5 20 14.5 14 14.5 4M3 4C10.5 4 14.5 10 14.5 20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        d="M33 4C25.5 4 21.5 10 21.5 20M33 20C25.5 20 21.5 14 21.5 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <rect x="16.5" y="10.5" width="3" height="3" fill="currentColor" />
    </svg>
  );
}

/**
 * Rotating circular editorial seal placed at the bottom-left of the hero composition.
 */
export function EditorialSeal({ className = "h-24 w-24" }: MonogramProps) {
  return (
    <div
      className={`relative flex items-center justify-center text-[var(--butter-yellow)]/75 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full animate-seal-spin"
        fill="none"
      >
        <defs>
          <path
            id="editorial-seal-circle"
            d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle
          cx="60"
          cy="60"
          r="30"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        <text
          fill="currentColor"
          fontSize="7.4"
          fontWeight="600"
          letterSpacing="2.4"
        >
          <textPath href="#editorial-seal-circle" startOffset="0%">
            BUSINESS · SYSTEMS · FINANCE · CREATIVITY ·
          </textPath>
        </text>
      </svg>
      <BrandMonogram className="absolute h-4 w-6 text-[var(--butter-yellow)]" />
    </div>
  );
}
