import { j as jsxRuntimeExports, d as cn } from "./index-BB65hrJ6.js";
const variantStyles = {
  primary: "bg-primary/15 text-primary border-primary/30 shadow-[0_0_8px_oklch(var(--primary)/0.3)]",
  secondary: "bg-secondary/15 text-secondary border-secondary/30 shadow-[0_0_8px_oklch(var(--secondary)/0.3)]",
  accent: "bg-accent/15 text-accent border-accent/30 shadow-[0_0_8px_oklch(var(--accent)/0.3)]",
  success: "bg-[oklch(0.7_0.2_145)]/15 text-[oklch(0.7_0.2_145)] border-[oklch(0.7_0.2_145)]/30 shadow-[0_0_8px_oklch(0.7_0.2_145/0.3)]",
  warning: "bg-accent/20 text-accent border-accent/40 shadow-[0_0_8px_oklch(var(--accent)/0.35)]",
  danger: "bg-destructive/15 text-destructive border-destructive/30 shadow-[0_0_8px_oklch(var(--destructive)/0.3)]",
  muted: "bg-muted/50 text-muted-foreground border-border/40"
};
function GlowBadge({
  variant = "primary",
  size = "sm",
  pulse = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full font-body font-medium border backdrop-blur-sm",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        variantStyles[variant],
        className
      ),
      ...props,
      children: [
        pulse && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-current" })
        ] }),
        children
      ]
    }
  );
}
export {
  GlowBadge as G
};
