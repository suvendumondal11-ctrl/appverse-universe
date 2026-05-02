import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SuccessRingProps {
  score: number;
  size?: number;
  animate?: boolean;
  className?: string;
  children?: ReactNode;
}

function scoreToColor(score: number): { stroke: string; glow: string } {
  // High score → cyan, low score → orange
  if (score >= 80)
    return {
      stroke: "oklch(0.85 0.18 200)",
      glow: "oklch(0.85 0.18 200 / 0.5)",
    };
  if (score >= 60)
    return {
      stroke: "oklch(0.78 0.22 230)",
      glow: "oklch(0.78 0.22 230 / 0.4)",
    };
  if (score >= 40)
    return {
      stroke: "oklch(0.72 0.22 262)",
      glow: "oklch(0.72 0.22 262 / 0.4)",
    };
  return { stroke: "oklch(0.75 0.28 50)", glow: "oklch(0.75 0.28 50 / 0.4)" };
}

export function SuccessRing({
  score,
  size = 120,
  animate = true,
  className,
  children,
}: SuccessRingProps) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - clampedScore / 100);
  const center = size / 2;
  const { stroke, glow } = scoreToColor(clampedScore);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center flex-col",
        className,
      )}
      data-ocid="success_ring"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        {/* Track ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="oklch(var(--border) / 0.3)"
          strokeWidth={8}
        />
        {/* Glow filter */}
        <defs>
          <filter id="ring-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Score arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          filter="url(#ring-glow)"
          className={cn(animate && "success-ring")}
          style={{
            transition: animate
              ? "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
              : undefined,
            filter: `drop-shadow(0 0 6px ${glow})`,
          }}
        />
      </svg>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        <span
          className="font-display font-black leading-none"
          style={{
            fontSize: size * 0.22,
            color: stroke,
            textShadow: `0 0 16px ${glow}`,
          }}
        >
          {clampedScore}
        </span>
        <span
          className="text-muted-foreground font-body"
          style={{ fontSize: size * 0.1 }}
        >
          / 100
        </span>
      </div>

      {/* Optional sub-scores below ring */}
      {children && <div className="mt-2 w-full">{children}</div>}
    </div>
  );
}
