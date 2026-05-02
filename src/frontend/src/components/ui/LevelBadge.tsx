import { cn } from "@/lib/utils";
import type { CreatorLevel } from "@/types";

interface LevelBadgeProps {
  level: CreatorLevel;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

const LEVEL_ICONS: Record<CreatorLevel, string> = {
  Dreamer: "🌱",
  Builder: "⚡",
  Creator: "🔮",
  Legend: "👑",
};

const LEVEL_CLASSES: Record<CreatorLevel, string> = {
  Dreamer: "badge-dreamer",
  Builder: "badge-builder",
  Creator: "badge-creator",
  Legend: "badge-legend",
};

export function LevelBadge({
  level,
  size = "md",
  showName = true,
  className,
}: LevelBadgeProps) {
  const icon = LEVEL_ICONS[level];
  const badgeClass = LEVEL_CLASSES[level];

  if (size === "sm") {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold",
          badgeClass,
          className,
        )}
        data-ocid={`level_badge.${level.toLowerCase()}`}
        title={level}
      >
        {icon}
      </span>
    );
  }

  if (size === "lg") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-base font-bold glow-pulse",
          badgeClass,
          className,
        )}
        data-ocid={`level_badge.${level.toLowerCase()}`}
      >
        <span className="text-xl">{icon}</span>
        {showName && (
          <span className="font-display tracking-wide">{level}</span>
        )}
      </span>
    );
  }

  // md (default)
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold",
        badgeClass,
        className,
      )}
      data-ocid={`level_badge.${level.toLowerCase()}`}
    >
      <span>{icon}</span>
      {showName && <span className="font-display">{level}</span>}
    </span>
  );
}
