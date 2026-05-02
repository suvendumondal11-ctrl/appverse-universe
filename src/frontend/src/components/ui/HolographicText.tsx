import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface HolographicTextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
  variant?: "primary" | "accent" | "rainbow";
  animate?: boolean;
}

export function HolographicText({
  as: Tag = "span",
  variant = "primary",
  animate = true,
  className,
  children,
  ...props
}: HolographicTextProps) {
  return (
    <Tag
      className={cn(
        "inline-block bg-clip-text text-transparent font-display font-bold",
        variant === "primary" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]",
        ],
        variant === "accent" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto]",
        ],
        variant === "rainbow" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-primary via-secondary via-accent to-primary bg-[length:300%_auto]",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
