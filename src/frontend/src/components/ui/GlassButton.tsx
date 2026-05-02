import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent" | "holographic";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg",
          "transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:opacity-50 disabled:pointer-events-none select-none",
          "overflow-hidden",
          // Variants
          variant === "primary" && [
            "bg-primary/90 text-primary-foreground border border-primary/50",
            "hover:bg-primary hover:shadow-[0_0_20px_oklch(var(--primary)/0.5)]",
            "backdrop-blur-sm",
          ],
          variant === "secondary" && [
            "bg-card/70 text-foreground border border-border/40",
            "hover:bg-card/90 hover:border-primary/30",
            "backdrop-blur-md",
          ],
          variant === "ghost" && [
            "bg-transparent text-foreground border border-transparent",
            "hover:bg-muted/40 hover:border-border/30",
          ],
          variant === "accent" && [
            "bg-accent/90 text-accent-foreground border border-accent/50",
            "hover:bg-accent hover:shadow-[0_0_16px_oklch(var(--accent)/0.5)]",
          ],
          variant === "holographic" && [
            "gradient-hologram text-foreground border border-primary/30",
            "hover:shadow-[0_0_30px_oklch(var(--primary)/0.4)]",
            "font-semibold tracking-wide",
          ],
          // Sizes
          size === "sm" && "h-8 px-3 text-sm",
          size === "md" && "h-10 px-5 text-sm",
          size === "lg" && "h-12 px-8 text-base",
          size === "icon" && "h-10 w-10 p-0",
          className,
        )}
        {...props}
      >
        {/* Shine overlay */}
        <span className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, oklch(var(--foreground)/0.06) 50%, transparent 70%)",
            }}
          />
        </span>
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

GlassButton.displayName = "GlassButton";
export { GlassButton };
