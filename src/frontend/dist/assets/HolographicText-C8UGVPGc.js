import { r as reactExports, j as jsxRuntimeExports, d as cn } from "./index-BB65hrJ6.js";
const GlassButton = reactExports.forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    loading,
    disabled,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        disabled: disabled || loading,
        className: cn(
          "relative inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg",
          "transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:opacity-50 disabled:pointer-events-none select-none",
          "overflow-hidden",
          // Variants
          variant === "primary" && [
            "bg-primary/90 text-primary-foreground border border-primary/50",
            "hover:bg-primary hover:shadow-[0_0_20px_oklch(var(--primary)/0.5)]",
            "backdrop-blur-sm"
          ],
          variant === "secondary" && [
            "bg-card/70 text-foreground border border-border/40",
            "hover:bg-card/90 hover:border-primary/30",
            "backdrop-blur-md"
          ],
          variant === "ghost" && [
            "bg-transparent text-foreground border border-transparent",
            "hover:bg-muted/40 hover:border-border/30"
          ],
          variant === "accent" && [
            "bg-accent/90 text-accent-foreground border border-accent/50",
            "hover:bg-accent hover:shadow-[0_0_16px_oklch(var(--accent)/0.5)]"
          ],
          variant === "holographic" && [
            "gradient-hologram text-foreground border border-primary/30",
            "hover:shadow-[0_0_30px_oklch(var(--primary)/0.4)]",
            "font-semibold tracking-wide"
          ],
          // Sizes
          size === "sm" && "h-8 px-3 text-sm",
          size === "md" && "h-10 px-5 text-sm",
          size === "lg" && "h-12 px-8 text-base",
          size === "icon" && "h-10 w-10 p-0",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300",
              style: {
                background: "linear-gradient(105deg, transparent 30%, oklch(var(--foreground)/0.06) 50%, transparent 70%)"
              }
            }
          ) }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children })
        ]
      }
    );
  }
);
GlassButton.displayName = "GlassButton";
function HolographicText({
  as: Tag = "span",
  variant = "primary",
  animate = true,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      className: cn(
        "inline-block bg-clip-text text-transparent font-display font-bold",
        variant === "primary" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]"
        ],
        variant === "accent" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto]"
        ],
        variant === "rainbow" && [
          animate ? "animate-shimmer" : "",
          "bg-gradient-to-r from-primary via-secondary via-accent to-primary bg-[length:300%_auto]"
        ],
        className
      ),
      ...props,
      children
    }
  );
}
export {
  GlassButton as G,
  HolographicText as H
};
