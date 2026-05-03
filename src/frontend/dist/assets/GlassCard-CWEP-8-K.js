import { r as reactExports, j as jsxRuntimeExports, x as cn } from "./index-DQTVxuMq.js";
const GlassCard = reactExports.forwardRef(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: cn(
          "rounded-xl transition-smooth relative overflow-hidden",
          // Backdrop + base glass
          "backdrop-blur-md",
          variant === "default" && [
            "bg-card/70 border border-border/30",
            "shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
          ],
          variant === "elevated" && [
            "bg-card/80 border border-primary/20",
            "shadow-[0_8px_40px_rgba(0,0,0,0.25),0_0_20px_oklch(var(--primary)/0.1)]"
          ],
          variant === "subtle" && ["bg-muted/30 border border-border/20"],
          variant === "glow" && [
            "bg-card/75 border border-primary/30",
            "shadow-[0_0_30px_oklch(var(--primary)/0.25),0_8px_32px_rgba(0,0,0,0.3)]"
          ],
          padding === "none" && "p-0",
          padding === "sm" && "p-3",
          padding === "md" && "p-5",
          padding === "lg" && "p-8",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0 rounded-xl",
              style: {
                background: "linear-gradient(135deg, oklch(var(--foreground)/0.04) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children })
        ]
      }
    );
  }
);
GlassCard.displayName = "GlassCard";
export {
  GlassCard as G
};
