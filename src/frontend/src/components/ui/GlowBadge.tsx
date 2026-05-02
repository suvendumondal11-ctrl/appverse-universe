import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlowBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "muted";
  size?: "sm" | "md";
  pulse?: boolean;
}

const variantStyles: Record<NonNullable<GlowBadgeProps["variant"]>, string> = {
  primary:
    "bg-primary/15 text-primary border-primary/30 shadow-[0_0_8px_oklch(var(--primary)/0.3)]",
  secondary:
    "bg-secondary/15 text-secondary border-secondary/30 shadow-[0_0_8px_oklch(var(--secondary)/0.3)]",
  accent:
    "bg-accent/15 text-accent border-accent/30 shadow-[0_0_8px_oklch(var(--accent)/0.3)]",
  success:
    "bg-[oklch(0.7_0.2_145)]/15 text-[oklch(0.7_0.2_145)] border-[oklch(0.7_0.2_145)]/30 shadow-[0_0_8px_oklch(0.7_0.2_145/0.3)]",
  warning:
    "bg-accent/20 text-accent border-accent/40 shadow-[0_0_8px_oklch(var(--accent)/0.35)]",
  danger:
    "bg-destructive/15 text-destructive border-destructive/30 shadow-[0_0_8px_oklch(var(--destructive)/0.3)]",
  muted: "bg-muted/50 text-muted-foreground border-border/40",
};

export function GlowBadge({
  variant = "primary",
  size = "sm",
  pulse = false,
  className,
  children,
  ...props
}: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-body font-medium border backdrop-blur-sm",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
