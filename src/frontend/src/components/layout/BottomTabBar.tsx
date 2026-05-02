import { useNavigate, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";

interface Tab {
  id: string;
  emoji: string;
  label: string;
  path: string;
  ocid: string;
}

const TABS: Tab[] = [
  {
    id: "create",
    emoji: "⚡",
    label: "Create",
    path: "/dashboard",
    ocid: "bottom_tab.create",
  },
  {
    id: "magic",
    emoji: "🎲",
    label: "Magic",
    path: "/magic",
    ocid: "bottom_tab.magic",
  },
  {
    id: "data",
    emoji: "🌐",
    label: "Data",
    path: "/live-data",
    ocid: "bottom_tab.data",
  },
  {
    id: "ai",
    emoji: "🤖",
    label: "AI",
    path: "/brainstorm",
    ocid: "bottom_tab.ai",
  },
  {
    id: "dream",
    emoji: "✨",
    label: "Dream",
    path: "/dream-world",
    ocid: "bottom_tab.dream",
  },
  {
    id: "profile",
    emoji: "👤",
    label: "Profile",
    path: "/profile",
    ocid: "bottom_tab.profile",
  },
];

export function BottomTabBar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  function isActive(tab: Tab): boolean {
    if (tab.path === "/dashboard") {
      return currentPath === "/dashboard" || currentPath.startsWith("/builder");
    }
    return currentPath === tab.path || currentPath.startsWith(`${tab.path}/`);
  }

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      aria-label="Bottom navigation"
      data-ocid="bottom_tab_bar"
    >
      {/* Glass background with neon top border */}
      <div
        className="flex items-stretch justify-around backdrop-blur-xl pb-4 pt-2 px-1"
        style={{
          background: "oklch(0.06 0.01 262 / 0.92)",
          borderTop: "1px solid oklch(var(--primary) / 0.25)",
          boxShadow: "0 -4px 32px oklch(var(--primary) / 0.12)",
        }}
      >
        {TABS.map((tab) => {
          const active = isActive(tab);
          return (
            <button
              key={tab.id}
              data-ocid={tab.ocid}
              onClick={() => navigate({ to: tab.path })}
              type="button"
              className="relative flex flex-col items-center justify-center gap-0.5 min-w-0 flex-1 py-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200"
              aria-label={tab.label}
              aria-current={active ? "page" : undefined}
            >
              {/* Active indicator bar */}
              {active && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute top-0 left-2 right-2 h-0.5 rounded-full"
                  style={{
                    background:
                      tab.id === "dream"
                        ? "var(--twin-dreamer)"
                        : "oklch(var(--primary))",
                    boxShadow:
                      tab.id === "dream"
                        ? "0 0 8px color-mix(in oklch, var(--twin-dreamer) 80%, transparent)"
                        : "0 0 8px oklch(var(--primary) / 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}

              {/* Emoji icon with scale animation */}
              <motion.span
                animate={{ scale: active ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="text-lg leading-none select-none"
                style={{
                  filter: active
                    ? tab.id === "dream"
                      ? "drop-shadow(0 0 6px var(--twin-dreamer))"
                      : "drop-shadow(0 0 6px oklch(var(--primary) / 0.7))"
                    : "none",
                }}
              >
                {tab.emoji}
              </motion.span>

              {/* Label */}
              <span
                className="text-[9px] font-medium leading-none tracking-wide transition-colors duration-200"
                style={{
                  color: active
                    ? tab.id === "dream"
                      ? "var(--twin-dreamer)"
                      : "oklch(var(--primary))"
                    : "oklch(0.58 0 0)",
                  textShadow: active
                    ? tab.id === "dream"
                      ? "0 0 10px color-mix(in oklch, var(--twin-dreamer) 50%, transparent)"
                      : "0 0 10px oklch(var(--primary) / 0.5)"
                    : "none",
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
