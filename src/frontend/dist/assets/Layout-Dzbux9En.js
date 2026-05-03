import { j as jsxRuntimeExports, a0 as Navbar, x as cn, aa as BottomTabBar } from "./index-DQTVxuMq.js";
function Layout({ children, className, fluid = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-[-20%] left-[10%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.06]",
          style: { background: "oklch(var(--primary))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-[10%] right-[5%] h-[400px] w-[500px] rounded-full blur-[100px] opacity-[0.04]",
          style: { background: "oklch(var(--secondary))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full blur-[80px] opacity-[0.03]",
          style: { background: "oklch(var(--accent))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.025]",
          style: {
            backgroundImage: "linear-gradient(oklch(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        className: cn(
          "relative z-10 flex-1 pb-20 md:pb-0",
          !fluid && "container mx-auto px-4 lg:px-6 py-8",
          className
        ),
        children
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 bg-muted/40 backdrop-blur-md border-t border-border/40 py-5 mb-16 md:mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " AppVerse. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : ""
            )}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-primary hover:text-primary/80 transition-colors underline underline-offset-2",
            children: "caffeine.ai"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomTabBar, {})
  ] });
}
export {
  Layout as L
};
