import { GlassButton } from "@/components/ui/GlassButton";
import { HolographicText } from "@/components/ui/HolographicText";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMyStats } from "@/hooks/useBackend";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";
import { getLevelFromXp } from "@/types";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  Brain,
  Menu,
  Moon,
  Plus,
  Search,
  Sparkles,
  Sun,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: null,
    magic: false,
    dream: false,
  },
  {
    label: "Brainstorm",
    to: "/brainstorm",
    icon: Brain,
    magic: false,
    dream: false,
  },
  { label: "Feed", to: "/feed", icon: null, magic: false, dream: false },
  {
    label: "Live Data",
    to: "/live-data",
    icon: null,
    magic: false,
    dream: false,
  },
  {
    label: "Transform ⚡",
    to: "/transform",
    icon: null,
    magic: true,
    dream: false,
  },
  { label: "Collab", to: "/collab", icon: Users, magic: false, dream: false },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    icon: null,
    magic: false,
    dream: false,
  },
  { label: "Magic ⚡", to: "/magic", icon: null, magic: true, dream: false },
  {
    label: "Dream World",
    to: "/dream-world",
    icon: Sparkles,
    magic: false,
    dream: true,
  },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: stats, isLoading: statsLoading } = useGetMyStats();

  const xpLevel = stats ? getLevelFromXp(stats.totalXp) : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur-xl bg-card border-b border-border/50",
        "shadow-[0_1px_0_oklch(var(--border)/0.3),0_4px_16px_oklch(var(--primary)/0.06)]",
      )}
      data-ocid="navbar"
    >
      <div className="container mx-auto h-16 flex items-center gap-4 px-4 lg:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 group"
          data-ocid="navbar.logo_link"
        >
          <div className="relative h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_16px_oklch(var(--primary)/0.5)] transition-smooth">
            <Zap className="h-4 w-4 text-primary relative z-10" />
            <span className="absolute inset-0 gradient-hologram opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
          <HolographicText
            as="span"
            variant="primary"
            className="text-lg hidden sm:block"
          >
            AppVerse
          </HolographicText>
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {NAV_LINKS.map(({ label, to, icon: Icon, magic, dream }) => (
            <Link
              key={label}
              to={to}
              data-ocid={`navbar.${label.toLowerCase().replace(/[^a-z0-9]/g, "")}_link`}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-body font-medium transition-smooth flex items-center gap-1.5",
                dream
                  ? pathname === to
                    ? "bg-[var(--twin-dreamer)]/20 text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/40 shadow-[0_0_12px_color-mix(in_oklch,var(--twin-dreamer)_35%,transparent)]"
                    : "text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/25 bg-[var(--twin-dreamer)]/8 hover:bg-[var(--twin-dreamer)]/15 hover:border-[var(--twin-dreamer)]/50 hover:shadow-[0_0_14px_color-mix(in_oklch,var(--twin-dreamer)_40%,transparent)] animate-[glow-pulse_2s_ease-in-out_infinite]"
                  : magic
                    ? pathname === to
                      ? "bg-amber-500/20 text-amber-400 border border-amber-400/40 shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                      : "text-amber-400 border border-amber-400/25 bg-amber-400/8 hover:bg-amber-400/15 hover:border-amber-400/50 hover:shadow-[0_0_14px_rgba(251,191,36,0.4)] animate-[glow-pulse_2s_ease-in-out_infinite]"
                    : pathname === to
                      ? "bg-primary/15 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
              )}
            >
              {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* XP counter pill */}
        <button
          type="button"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/25 hover:border-primary/50 hover:shadow-[0_0_14px_oklch(var(--primary)/0.25)] transition-smooth cursor-pointer"
          data-ocid="navbar.xp_counter"
          onClick={() => navigate({ to: "/profile" })}
          aria-label="View your XP and level"
        >
          {statsLoading ? (
            <Skeleton className="h-4 w-16 rounded-full" />
          ) : stats && xpLevel ? (
            <>
              <LevelBadge level={xpLevel} size="sm" showName={false} />
              <span className="text-xs font-bold font-display text-primary">
                ⚡ {stats.totalXp.toLocaleString()} XP
              </span>
            </>
          ) : (
            <span className="text-xs font-bold font-display text-muted-foreground">
              ⚡ 0 XP
            </span>
          )}
        </button>

        {/* Search button */}
        <GlassButton
          variant="secondary"
          size="icon"
          className="hidden sm:inline-flex"
          aria-label="Search"
          data-ocid="navbar.search_button"
        >
          <Search className="h-4 w-4" />
        </GlassButton>

        {/* Notifications */}
        <GlassButton
          variant="secondary"
          size="icon"
          aria-label="Notifications"
          data-ocid="navbar.notifications_button"
          className="relative"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent border border-card" />
        </GlassButton>

        {/* Theme toggle */}
        <GlassButton
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          data-ocid="navbar.theme_toggle"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-accent" />
          ) : (
            <Moon className="h-4 w-4 text-primary" />
          )}
        </GlassButton>

        {/* New Project CTA */}
        <Link to="/dashboard" data-ocid="navbar.new_project_button">
          <GlassButton
            variant="holographic"
            size="sm"
            className="hidden sm:inline-flex gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            New Project
          </GlassButton>
        </Link>

        {/* Avatar */}
        <button
          type="button"
          className="h-8 w-8 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center cursor-pointer hover:shadow-[0_0_12px_oklch(var(--primary)/0.4)] transition-smooth shrink-0"
          data-ocid="navbar.avatar"
          aria-label="User menu"
          onClick={() => navigate({ to: "/settings" })}
        >
          <span className="text-xs font-bold font-display text-primary">
            AV
          </span>
        </button>

        {/* Mobile hamburger */}
        <GlassButton
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          data-ocid="navbar.mobile_menu_button"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Menu className="h-4 w-4" />
        </GlassButton>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border/30 bg-card backdrop-blur-xl px-4 py-3 flex flex-col gap-1"
          data-ocid="navbar.mobile_nav"
        >
          {NAV_LINKS.map(({ label, to, icon: Icon, magic, dream }) => (
            <Link
              key={label}
              to={to}
              data-ocid={`navbar.mobile.${label.toLowerCase().replace(/[^a-z0-9]/g, "")}_link`}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-body font-medium transition-smooth flex items-center gap-2",
                dream
                  ? pathname === to
                    ? "bg-[var(--twin-dreamer)]/20 text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/40"
                    : "text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/20 bg-[var(--twin-dreamer)]/6 hover:bg-[var(--twin-dreamer)]/12 hover:border-[var(--twin-dreamer)]/40"
                  : magic
                    ? pathname === to
                      ? "bg-amber-500/20 text-amber-400 border border-amber-400/40"
                      : "text-amber-400 border border-amber-400/20 bg-amber-400/6 hover:bg-amber-400/12 hover:border-amber-400/40"
                    : pathname === to
                      ? "bg-primary/15 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
              )}
            >
              {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
              {label}
            </Link>
          ))}
          {stats && xpLevel && (
            <div className="mt-2 px-3 py-2 flex items-center gap-2">
              <LevelBadge level={xpLevel} size="sm" showName={false} />
              <span className="text-xs font-bold font-display text-primary">
                ⚡ {stats.totalXp.toLocaleString()} XP
              </span>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
