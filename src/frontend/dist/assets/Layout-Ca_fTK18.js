import { u as useNavigate, h as useRouterState, j as jsxRuntimeExports, d as cn } from "./index-BB65hrJ6.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import { N as Navbar } from "./Navbar-DFO37bKo.js";
const TABS = [
  {
    id: "create",
    emoji: "⚡",
    label: "Create",
    path: "/dashboard",
    ocid: "bottom_tab.create"
  },
  {
    id: "magic",
    emoji: "🎲",
    label: "Magic",
    path: "/magic",
    ocid: "bottom_tab.magic"
  },
  {
    id: "data",
    emoji: "🌐",
    label: "Data",
    path: "/live-data",
    ocid: "bottom_tab.data"
  },
  {
    id: "ai",
    emoji: "🤖",
    label: "AI",
    path: "/brainstorm",
    ocid: "bottom_tab.ai"
  },
  {
    id: "dream",
    emoji: "✨",
    label: "Dream",
    path: "/dream-world",
    ocid: "bottom_tab.dream"
  },
  {
    id: "profile",
    emoji: "👤",
    label: "Profile",
    path: "/profile",
    ocid: "bottom_tab.profile"
  }
];
function BottomTabBar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  function isActive(tab) {
    if (tab.path === "/dashboard") {
      return currentPath === "/dashboard" || currentPath.startsWith("/builder");
    }
    return currentPath === tab.path || currentPath.startsWith(`${tab.path}/`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: "md:hidden fixed bottom-0 left-0 right-0 z-50",
      "aria-label": "Bottom navigation",
      "data-ocid": "bottom_tab_bar",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-stretch justify-around backdrop-blur-xl pb-4 pt-2 px-1",
          style: {
            background: "oklch(0.06 0.01 262 / 0.92)",
            borderTop: "1px solid oklch(var(--primary) / 0.25)",
            boxShadow: "0 -4px 32px oklch(var(--primary) / 0.12)"
          },
          children: TABS.map((tab) => {
            const active = isActive(tab);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                "data-ocid": tab.ocid,
                onClick: () => navigate({ to: tab.path }),
                type: "button",
                className: "relative flex flex-col items-center justify-center gap-0.5 min-w-0 flex-1 py-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200",
                "aria-label": tab.label,
                "aria-current": active ? "page" : void 0,
                children: [
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      layoutId: "tab-indicator",
                      className: "absolute top-0 left-2 right-2 h-0.5 rounded-full",
                      style: {
                        background: tab.id === "dream" ? "var(--twin-dreamer)" : "oklch(var(--primary))",
                        boxShadow: tab.id === "dream" ? "0 0 8px color-mix(in oklch, var(--twin-dreamer) 80%, transparent)" : "0 0 8px oklch(var(--primary) / 0.8)"
                      },
                      transition: { type: "spring", stiffness: 500, damping: 35 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      animate: { scale: active ? 1.15 : 1 },
                      transition: { type: "spring", stiffness: 400, damping: 25 },
                      className: "text-lg leading-none select-none",
                      style: {
                        filter: active ? tab.id === "dream" ? "drop-shadow(0 0 6px var(--twin-dreamer))" : "drop-shadow(0 0 6px oklch(var(--primary) / 0.7))" : "none"
                      },
                      children: tab.emoji
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[9px] font-medium leading-none tracking-wide transition-colors duration-200",
                      style: {
                        color: active ? tab.id === "dream" ? "var(--twin-dreamer)" : "oklch(var(--primary))" : "oklch(0.58 0 0)",
                        textShadow: active ? tab.id === "dream" ? "0 0 10px color-mix(in oklch, var(--twin-dreamer) 50%, transparent)" : "0 0 10px oklch(var(--primary) / 0.5)" : "none"
                      },
                      children: tab.label
                    }
                  )
                ]
              },
              tab.id
            );
          })
        }
      )
    }
  );
}
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
