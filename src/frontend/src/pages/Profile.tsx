import { Layout } from "@/components/layout/Layout";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetMyStats,
  useGetProfile,
  useListPublicIdeas,
  useUpdateDisplayName,
} from "@/hooks/useBackend";
import { getLevelFromXp, getLevelThresholds } from "@/types";
import type {
  CharacterPersona,
  CharacterPersonaId,
  CreatorLevel,
  PublicIdea,
} from "@/types";
import { CHARACTER_PERSONAS } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Twin Types ──────────────────────────────────────────────────────────────

type TwinPersonalityId = "Visionary" | "Hacker" | "Artist" | "Dreamer";

const TWIN_PERSONALITIES: {
  id: TwinPersonalityId;
  label: string;
  icon: string;
  desc: string;
  color: string;
  cssVar: string;
}[] = [
  {
    id: "Visionary",
    label: "Visionary",
    icon: "🔮",
    desc: "Sees the future, builds it first",
    color: "oklch(var(--twin-visionary))",
    cssVar: "--twin-visionary",
  },
  {
    id: "Hacker",
    label: "Hacker",
    icon: "⚡",
    desc: "Solves problems with elegant code",
    color: "oklch(var(--twin-hacker))",
    cssVar: "--twin-hacker",
  },
  {
    id: "Artist",
    label: "Artist",
    icon: "🎨",
    desc: "Crafts experiences that awe and inspire",
    color: "oklch(var(--twin-artist))",
    cssVar: "--twin-artist",
  },
  {
    id: "Dreamer",
    label: "Dreamer",
    icon: "✨",
    desc: "Imagines realities others can't see",
    color: "oklch(var(--twin-dreamer))",
    cssVar: "--twin-dreamer",
  },
];

const TWIN_MEMORY_IDEAS = [
  { name: "FitPulse AI Coach", category: "Health", score: 94 },
  { name: "StudyForge 3D", category: "Education", score: 89 },
  { name: "MarketPulse Live", category: "Finance", score: 82 },
];

// ─── Digital Twin Section ────────────────────────────────────────────────────

function DigitalTwinSection({
  displayName,
  xp,
}: { displayName: string; xp: number }) {
  const [selectedPersonality, setSelectedPersonality] =
    useState<TwinPersonalityId>("Visionary");
  const [twinActive, setTwinActive] = useState(true);
  const [progressPct] = useState(() => 60 + Math.floor(Math.random() * 25));
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const selected = TWIN_PERSONALITIES.find(
    (p) => p.id === selectedPersonality,
  )!;
  const twinXp = Math.floor(xp * 0.42);
  const twinName = `${displayName.split(" ")[0]}'s Twin`;

  const triggerParticles = useCallback(() => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.5 }}
      className="space-y-6"
      data-ocid="profile.digital_twin_section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl brain-sparkle">🤖</span>
        <div>
          <h2 className="text-xl font-display font-black text-foreground">
            Your Twin
          </h2>
          <p className="text-xs text-muted-foreground">
            Your AI-powered digital counterpart
          </p>
        </div>
        <span className="ml-auto text-xs font-mono bg-primary/10 text-primary border border-primary/30 px-2.5 py-1 rounded-full">
          BETA
        </span>
      </div>

      {/* Twin avatar card */}
      <div
        className="twin-avatar-card p-6 space-y-5"
        style={{ animation: "hologram-shift 4s ease-in-out infinite" }}
      >
        {/* Holographic shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-5"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, oklch(0.9 0.1 262 / 0.6) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 5s ease-in-out infinite",
          }}
        />

        <div className="relative flex items-center gap-5">
          {/* Twin avatar */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${selected.color}20, ${selected.color}08)`,
              border: `2px solid ${selected.color}`,
              boxShadow: `0 0 24px ${selected.color}50`,
            }}
          >
            <span style={{ filter: `drop-shadow(0 0 12px ${selected.color})` }}>
              {selected.icon}
            </span>
            {/* Scan line */}
            <div
              className="transformation-scan-line"
              style={{
                opacity: twinActive ? 1 : 0,
                animation: twinActive
                  ? "scan-sweep 2s linear infinite"
                  : "none",
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-display font-black text-lg text-foreground">
              {twinName}
            </div>
            <div
              className="twin-personality-badge mt-1.5 text-xs"
              style={{
                background: `${selected.color}15`,
                borderColor: `${selected.color}60`,
                color: selected.color,
                boxShadow: `0 0 10px ${selected.color}25`,
              }}
            >
              <span>{selected.icon}</span>
              <span>{selected.label}</span>
            </div>
          </div>

          {/* Activate toggle */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="text-xs text-muted-foreground">
              {twinActive ? "Active" : "Idle"}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={twinActive}
              onClick={() => setTwinActive((v) => !v)}
              className={`twin-settings-toggle ${twinActive ? "active" : ""}`}
              data-ocid="profile.twin_activate_toggle"
            >
              <span
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300"
                style={{
                  background: twinActive
                    ? `${selected.color}`
                    : "oklch(var(--muted-foreground))",
                  transform: `translate(${twinActive ? "28px" : "4px"}, -50%)`,
                  boxShadow: twinActive
                    ? `0 0 8px ${selected.color}80`
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Twin stats row */}
        <div className="flex gap-3" data-ocid="profile.twin_stats_row">
          {[
            {
              label: "Ideas Generated",
              value: Math.floor(twinXp / 12),
              icon: "💡",
            },
            { label: "XP Earned", value: twinXp.toLocaleString(), icon: "⚡" },
            {
              label: "Remix Rate",
              value: `${Math.floor(40 + (xp % 30))}%`,
              icon: "🔀",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 rounded-xl px-3 py-2.5 text-center"
              style={{
                background: `${selected.color}10`,
                border: `1px solid ${selected.color}30`,
              }}
              data-ocid={`profile.twin_stat.item.${i + 1}`}
            >
              <div className="text-lg">{stat.icon}</div>
              <div
                className="font-mono font-black text-sm"
                style={{ color: selected.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground leading-tight mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Twin learning progress */}
        <div
          className="space-y-2 relative"
          data-ocid="profile.twin_learning_progress"
        >
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground font-medium">
              Learning from your best ideas...
            </span>
            <span
              className="font-mono font-bold"
              style={{ color: selected.color }}
            >
              {progressPct}%
            </span>
          </div>
          <div
            className="twin-learning-bar"
            style={{
              height: "8px",
              borderRadius: "999px",
              background: `${selected.color}18`,
              border: `1px solid ${selected.color}30`,
              overflow: "hidden",
            }}
          >
            <motion.div
              ref={progressRef}
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
              onAnimationComplete={triggerParticles}
              style={{
                height: "100%",
                borderRadius: "999px",
                background: `linear-gradient(90deg, ${selected.color}, ${selected.color}80)`,
                boxShadow: `0 0 8px ${selected.color}60`,
                position: "relative",
              }}
            >
              {/* Particle trail at progress tip */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: selected.color,
                  boxShadow: `0 0 8px ${selected.color}, 0 0 16px ${selected.color}60`,
                  animation: "glow-pulse 1.5s ease-in-out infinite",
                }}
              />
            </motion.div>
          </div>
          {/* Particle burst */}
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                background: selected.color,
                boxShadow: `0 0 6px ${selected.color}`,
                animation: "particle-float 1.2s ease-out forwards",
              }}
            />
          ))}
        </div>
      </div>

      {/* Personality Selector */}
      <div className="space-y-3" data-ocid="profile.twin_personality_selector">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Twin Personality
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TWIN_PERSONALITIES.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setSelectedPersonality(p.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.06,
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-2 rounded-xl p-4 text-center cursor-pointer transition-smooth"
              style={{
                background:
                  selectedPersonality === p.id
                    ? `${p.color}15`
                    : "oklch(var(--card) / 0.5)",
                border: `2px solid ${selectedPersonality === p.id ? p.color : `${p.color}35`}`,
                boxShadow:
                  selectedPersonality === p.id
                    ? `0 0 20px ${p.color}35, 0 0 8px ${p.color}20`
                    : "none",
                backdropFilter: "blur(12px)",
              }}
              data-ocid={`profile.twin_personality.item.${i + 1}`}
              aria-pressed={selectedPersonality === p.id}
            >
              <span
                className="text-3xl"
                style={{
                  filter:
                    selectedPersonality === p.id
                      ? `drop-shadow(0 0 10px ${p.color})`
                      : "none",
                }}
              >
                {p.icon}
              </span>
              <span className="font-display font-black text-xs text-foreground">
                {p.label}
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                {p.desc}
              </span>
              {selectedPersonality === p.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-1.5 h-1.5 rounded-full mt-0.5"
                  style={{
                    background: p.color,
                    boxShadow: `0 0 6px ${p.color}`,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Twin Memory Bank */}
      <div className="space-y-3" data-ocid="profile.twin_memory_bank">
        <div className="flex items-center gap-2">
          <span className="text-base">🧠</span>
          <p className="text-sm font-bold text-foreground">Twin's Memory</p>
          <span className="text-xs text-muted-foreground ml-auto">
            Top ideas your twin learned from
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TWIN_MEMORY_IDEAS.map((idea, i) => (
            <motion.div
              key={idea.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="twin-latest-card p-4 space-y-2.5"
              data-ocid={`profile.twin_memory.item.${i + 1}`}
            >
              {/* Learned badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold bg-primary/10 text-primary border border-primary/25 rounded-full px-2 py-0.5">
                  {idea.category}
                </span>
                <span className="twin-badge text-xs">✨ Learned</span>
              </div>
              <p className="font-display font-bold text-sm text-foreground leading-tight">
                {idea.name}
              </p>
              {/* Score bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Influence</span>
                  <span
                    className="font-mono font-bold"
                    style={{ color: selected.color }}
                  >
                    {idea.score}%
                  </span>
                </div>
                <div
                  className="h-1 rounded-full"
                  style={{ background: `${selected.color}18` }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${idea.score}%` }}
                    transition={{
                      duration: 1.0,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                    style={{
                      height: "100%",
                      borderRadius: "999px",
                      background: `linear-gradient(90deg, ${selected.color}, ${selected.color}70)`,
                      boxShadow: `0 0 6px ${selected.color}50`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedNumber({
  value,
  duration = 1.2,
}: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const steps = 40;
    const increment = value / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else setDisplay(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span className="reality-counter">{display.toLocaleString()}</span>;
}

// ─── Circular Skill Progress ──────────────────────────────────────────────────

function CircularProgress({
  pct,
  label,
  color,
  size = 80,
}: { pct: number; label: string; color: string; size?: number }) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          role="img"
          aria-label={`${label} progress: ${pct}%`}
        >
          <title>
            {label} progress: {pct}%
          </title>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            strokeWidth="6"
            stroke="oklch(var(--muted) / 0.3)"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            stroke={color}
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ - dash }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono font-bold text-xs text-foreground">
            {pct}%
          </span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight max-w-[80px]">
        {label}
      </span>
    </div>
  );
}

// ─── Character Persona: Special Powers ────────────────────────────────────────

const PERSONA_DETAILS: Record<
  CharacterPersonaId,
  {
    mission: string;
    specialPower: string;
    stats: { buildSpeed: number; viralPower: number; communityScore: number };
    title: string;
  }
> = {
  Hero: {
    mission:
      "Build apps that uplift communities and spark real change in the world.",
    specialPower:
      "Inspires others — your ideas get featured first on the global feed.",
    stats: { buildSpeed: 85, viralPower: 70, communityScore: 95 },
    title: "World Changer",
  },
  Creator: {
    mission: "Turn imagination into experiences people will remember forever.",
    specialPower:
      "AI Designer Mode — unlock advanced visual themes for every build.",
    stats: { buildSpeed: 75, viralPower: 80, communityScore: 85 },
    title: "Digital Artist",
  },
  Influencer: {
    mission: "Set the trends. Build apps that spread like wildfire overnight.",
    specialPower:
      "Auto Viral Engine — AI generates 3 trending reel ideas for every app.",
    stats: { buildSpeed: 70, viralPower: 98, communityScore: 90 },
    title: "Trend Setter",
  },
  Dreamer: {
    mission:
      "Imagine futures nobody else dares to see and turn them into reality.",
    specialPower:
      "Predictive Creation — AI suggests your next idea before you think of it.",
    stats: { buildSpeed: 65, viralPower: 75, communityScore: 80 },
    title: "Visionary Mind",
  },
  Pioneer: {
    mission: "Enter uncharted markets first and build where nobody else looks.",
    specialPower:
      "Market Scout — AI reveals untapped niches with zero competition.",
    stats: { buildSpeed: 90, viralPower: 78, communityScore: 72 },
    title: "First Mover",
  },
  Rebel: {
    mission: "Break every rule, disrupt every industry, and reshape the game.",
    specialPower:
      "Double XP always active — every build earns 2x the normal points.",
    stats: { buildSpeed: 95, viralPower: 92, communityScore: 65 },
    title: "Rule Breaker",
  },
};

// ─── Character Card ────────────────────────────────────────────────────────────

function CharacterCard({
  persona,
  isSelected,
  onSelect,
  index,
}: {
  persona: CharacterPersona;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.07,
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      className="relative flex flex-col items-center gap-3 rounded-2xl p-5 text-left cursor-pointer transition-smooth group"
      style={{
        background: isSelected
          ? `linear-gradient(135deg, ${persona.colorTheme}18, ${persona.colorTheme}08)`
          : "oklch(0.97 0.012 262 / 0.97)",
        border: `2px solid ${isSelected ? persona.colorTheme : `${persona.colorTheme}44`}`,
        boxShadow: isSelected
          ? `0 0 0 3px ${persona.colorTheme}30, 0 0 32px ${persona.colorTheme}40`
          : `0 0 12px ${persona.colorTheme}10`,
        backdropFilter: "blur(12px)",
      }}
      data-ocid={`profile.character_card.item.${index + 1}`}
      aria-pressed={isSelected}
    >
      {/* Checkmark badge */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: persona.colorTheme }}
        >
          ✓
        </motion.div>
      )}

      {/* Pulsing ring when selected */}
      {isSelected && (
        <span
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            animation: "glow-pulse 2s ease-in-out infinite",
            borderRadius: "1rem",
          }}
        />
      )}

      {/* Emoji */}
      <div
        className="text-4xl select-none"
        style={{
          filter: isSelected
            ? `drop-shadow(0 0 12px ${persona.colorTheme})`
            : "none",
          transition: "filter 0.3s ease",
        }}
      >
        {persona.emoji}
      </div>

      {/* Name */}
      <div className="font-display font-black text-sm text-foreground text-center leading-tight">
        {persona.name}
      </div>

      {/* XP badge */}
      <div
        className="rounded-full px-2.5 py-0.5 text-xs font-bold font-mono"
        style={{
          background: `${persona.colorTheme}20`,
          border: `1px solid ${persona.colorTheme}60`,
          color: persona.colorTheme,
        }}
      >
        {persona.xpMultiplier}x XP
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground text-center leading-snug line-clamp-2 max-w-[140px]">
        {persona.description}
      </p>
    </motion.button>
  );
}

// ─── Stat Bar ─────────────────────────────────────────────────────────────────

function StatBar({
  label,
  value,
  color,
}: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground font-medium">{label}</span>
        <span className="font-mono font-bold" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 6px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Become the Character Section ────────────────────────────────────────────

function BecomeTheCharacter() {
  const [selectedId, setSelectedId] = useState<CharacterPersonaId>("Creator");
  const [notification, setNotification] = useState<string | null>(null);
  const notifTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedPersona = CHARACTER_PERSONAS.find((p) => p.id === selectedId)!;
  const selectedDetails = PERSONA_DETAILS[selectedId];

  function handleSelect(persona: CharacterPersona) {
    if (persona.id === selectedId) return;
    setSelectedId(persona.id as CharacterPersonaId);
    if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    setNotification(
      `${persona.emoji} ${persona.name} activated! Your dashboard now reflects ${persona.id} theme.`,
    );
    notifTimerRef.current = setTimeout(() => setNotification(null), 4000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-6"
      data-ocid="profile.become_character_section"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-display font-black text-foreground flex items-center gap-2">
          <span className="brain-sparkle">✨</span> Become the Character
        </h2>
        <p className="text-sm text-muted-foreground">
          Choose your identity — your avatar follows you everywhere
        </p>
      </div>

      {/* Inline Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground flex items-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${selectedPersona.colorTheme}18, ${selectedPersona.colorTheme}10)`,
              border: `1.5px solid ${selectedPersona.colorTheme}60`,
              boxShadow: `0 0 20px ${selectedPersona.colorTheme}20`,
            }}
            data-ocid="profile.character_activation_notification"
          >
            <span className="text-base">{notification.split(" ")[0]}</span>
            <span>{notification.split(" ").slice(1).join(" ")}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character Grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        data-ocid="profile.character_grid"
      >
        {CHARACTER_PERSONAS.map((persona, i) => (
          <CharacterCard
            key={persona.id}
            persona={persona}
            isSelected={selectedId === persona.id}
            onSelect={() => handleSelect(persona)}
            index={i}
          />
        ))}
      </div>

      {/* Active Character Stats Card */}
      <motion.div
        key={selectedId}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl p-6 space-y-4"
        style={{
          background: `linear-gradient(135deg, ${selectedPersona.colorTheme}12, ${selectedPersona.colorTheme}06)`,
          border: `1.5px solid ${selectedPersona.colorTheme}50`,
          boxShadow: `0 0 30px ${selectedPersona.colorTheme}18`,
        }}
        data-ocid="profile.active_character_stats"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
            style={{
              background: `${selectedPersona.colorTheme}20`,
              border: `2px solid ${selectedPersona.colorTheme}60`,
              boxShadow: `0 0 20px ${selectedPersona.colorTheme}30`,
            }}
          >
            {selectedPersona.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div
              className="font-display font-black text-lg"
              style={{ color: selectedPersona.colorTheme }}
            >
              {selectedPersona.name}
            </div>
            <div
              className="text-xs font-bold rounded-full px-2.5 py-0.5 inline-block mt-1"
              style={{
                background: `${selectedPersona.colorTheme}18`,
                border: `1px solid ${selectedPersona.colorTheme}50`,
                color: selectedPersona.colorTheme,
              }}
            >
              {selectedPersona.xpMultiplier}x XP Multiplier
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Mission
          </p>
          <p className="text-sm text-foreground font-medium leading-relaxed">
            {selectedDetails.mission}
          </p>
        </div>

        <div
          className="rounded-xl p-3.5 flex items-start gap-3"
          style={{
            background: `${selectedPersona.colorTheme}10`,
            border: `1px solid ${selectedPersona.colorTheme}40`,
          }}
        >
          <span className="text-lg shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">
              Special Power
            </p>
            <p className="text-sm font-semibold text-foreground">
              {selectedDetails.specialPower}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Character Studio — Trading Card */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          🎴 Character Studio — Your Card
        </p>
        <motion.div
          key={`card-${selectedId}`}
          initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 22,
          }}
          className="relative max-w-[280px] mx-auto rounded-3xl p-6 space-y-5 overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${selectedPersona.colorTheme}20, ${selectedPersona.colorTheme}08, oklch(0.97 0.01 262 / 0.98))`,
            border: `2.5px solid ${selectedPersona.colorTheme}70`,
            boxShadow: `0 8px 40px ${selectedPersona.colorTheme}30, inset 0 0 30px ${selectedPersona.colorTheme}08`,
          }}
          data-ocid="profile.character_trading_card"
        >
          {/* Holographic shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl opacity-10"
            style={{
              background:
                "linear-gradient(135deg, transparent 30%, oklch(0.9 0.1 262 / 0.5) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: "shimmer 5s ease-in-out infinite",
            }}
          />

          {/* Card header */}
          <div className="flex items-center justify-between relative">
            <div
              className="text-xs font-bold rounded-full px-2.5 py-1 uppercase tracking-widest"
              style={{
                background: `${selectedPersona.colorTheme}20`,
                border: `1px solid ${selectedPersona.colorTheme}60`,
                color: selectedPersona.colorTheme,
              }}
            >
              {selectedDetails.title}
            </div>
            <div className="font-mono text-xs font-bold text-muted-foreground">
              #{selectedPersona.id.toUpperCase()}
            </div>
          </div>

          {/* Big emoji */}
          <div className="text-center">
            <div
              className="text-6xl select-none inline-block"
              style={{
                filter: `drop-shadow(0 0 20px ${selectedPersona.colorTheme})`,
              }}
            >
              {selectedPersona.emoji}
            </div>
            <div
              className="font-display font-black text-xl mt-2"
              style={{ color: selectedPersona.colorTheme }}
            >
              {selectedPersona.name}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              AppVerse Creator Card
            </div>
          </div>

          {/* Stat bars */}
          <div className="space-y-3 relative">
            <StatBar
              label="Build Speed"
              value={selectedDetails.stats.buildSpeed}
              color={selectedPersona.colorTheme}
            />
            <StatBar
              label="Viral Power"
              value={selectedDetails.stats.viralPower}
              color={selectedPersona.colorTheme}
            />
            <StatBar
              label="Community Score"
              value={selectedDetails.stats.communityScore}
              color={selectedPersona.colorTheme}
            />
          </div>

          {/* XP multiplier bottom badge */}
          <div
            className="text-center rounded-xl py-2 font-mono font-black text-sm"
            style={{
              background: `${selectedPersona.colorTheme}15`,
              border: `1px solid ${selectedPersona.colorTheme}40`,
              color: selectedPersona.colorTheme,
            }}
          >
            {selectedPersona.xpMultiplier}x XP Multiplier Active
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Creator DNA Brain Panel ───────────────────────────────────────────────────

const DNA_CATEGORIES = [
  { label: "Productivity", pct: 45, color: "oklch(var(--ai-designer))" },
  { label: "Gaming", pct: 30, color: "oklch(var(--secondary))" },
  { label: "Education", pct: 25, color: "oklch(var(--ai-developer))" },
];

const SKILL_DEVELOPING = [
  { label: "UI Design", pct: 72, color: "oklch(var(--ai-designer))" },
  { label: "Business Logic", pct: 58, color: "oklch(var(--ai-business))" },
  { label: "Viral Strategy", pct: 44, color: "oklch(var(--ai-marketing))" },
];

function CreatorDNAPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="brain-profile rounded-3xl p-6 space-y-6"
      style={{
        background: "oklch(var(--card) / 0.45)",
        border: "1px solid oklch(var(--primary) / 0.4)",
        boxShadow:
          "0 0 40px oklch(var(--primary) / 0.08), inset 0 0 40px oklch(var(--secondary) / 0.04)",
      }}
      data-ocid="profile.creator_dna_panel"
    >
      {/* Holographic heading */}
      <div className="flex items-center gap-3">
        <span className="text-2xl brain-sparkle">🧬</span>
        <h2
          className="text-xl font-display font-black"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Creator DNA
        </h2>
        <span className="ml-auto text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-0.5 rounded-full border border-border/30">
          AI Analysis
        </span>
      </div>

      {/* Category Bars */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Top Categories
        </p>
        {DNA_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="space-y-1.5"
          >
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">{cat.label}</span>
              <span
                className="font-mono text-xs font-bold"
                style={{ color: cat.color }}
              >
                {cat.pct}%
              </span>
            </div>
            <div className="brain-progress">
              <motion.div
                className="brain-progress-fill h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${cat.pct}%` }}
                transition={{
                  duration: 1.2,
                  delay: 0.35 + i * 0.1,
                  ease: "easeOut",
                }}
                style={{
                  background: `linear-gradient(90deg, ${cat.color}, oklch(var(--accent)))`,
                  boxShadow: `0 0 8px ${cat.color}`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Developing */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Skills Developing
        </p>
        <div className="flex justify-around">
          {SKILL_DEVELOPING.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <CircularProgress
                pct={skill.pct}
                label={skill.label}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Prediction Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="relative rounded-2xl p-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--secondary) / 0.25), oklch(var(--primary) / 0.25))",
          border: "1px solid oklch(var(--primary) / 0.5)",
          boxShadow: "0 0 24px oklch(var(--secondary) / 0.2)",
        }}
        data-ocid="profile.ai_prediction_badge"
      >
        <div className="absolute inset-0 gradient-hologram opacity-5 pointer-events-none rounded-2xl" />
        <div className="flex items-start gap-3 relative">
          <span className="text-2xl brain-sparkle">🔮</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
              AI Predicts
            </p>
            <p className="font-display font-black text-sm text-foreground">
              Your next idea will be a{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--secondary)))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Game App
              </span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 bg-muted/30 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(var(--secondary)), oklch(var(--primary)))",
                    boxShadow: "0 0 8px oklch(var(--primary) / 0.6)",
                  }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-primary shrink-0">
                87% conf.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── XP Rank Card ─────────────────────────────────────────────────────────────

const TIER_META: Record<
  CreatorLevel,
  {
    icon: string;
    color: string;
    bgColor: string;
    borderColor: string;
    next: string | null;
  }
> = {
  Dreamer: {
    icon: "🌱",
    color: "oklch(0.42 0.18 262)",
    bgColor: "oklch(0.93 0.06 262)",
    borderColor: "oklch(0.52 0.18 262 / 0.4)",
    next: "Builder",
  },
  Builder: {
    icon: "⚡",
    color: "oklch(0.38 0.22 280)",
    bgColor: "oklch(0.93 0.06 280)",
    borderColor: "oklch(0.48 0.22 280 / 0.4)",
    next: "Creator",
  },
  Creator: {
    icon: "🔮",
    color: "oklch(0.35 0.2 262)",
    bgColor: "oklch(0.92 0.07 262)",
    borderColor: "oklch(0.52 0.2 262 / 0.45)",
    next: "Legend",
  },
  Legend: {
    icon: "👑",
    color: "oklch(0.38 0.22 50)",
    bgColor: "oklch(0.94 0.08 50)",
    borderColor: "oklch(0.55 0.22 50 / 0.45)",
    next: null,
  },
};

function XPRankCard({
  level,
  xp,
  progressPct,
  curMin,
  nextThreshold,
  streak,
}: {
  level: CreatorLevel;
  xp: number;
  progressPct: number;
  curMin: number;
  nextThreshold: number;
  nextLevelLabel: CreatorLevel | null;
  streak: number;
}) {
  const meta = TIER_META[level];
  const xpInTier = xp - curMin;
  const xpNeeded = nextThreshold - curMin;
  const xpGap = nextThreshold - xp;
  const fireActive = streak >= 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="glass-glow rounded-3xl p-6 space-y-5"
      data-ocid="profile.xp_rank_card"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          🎮 Game Rank
        </h2>
        {/* Daily Streak */}
        <div
          className={`streak-counter text-sm ${fireActive ? "streak-fire" : ""}`}
          data-ocid="profile.streak_counter"
        >
          <span className={fireActive ? "animate-bounce" : "opacity-50"}>
            🔥
          </span>
          <span className="font-mono font-black">
            {streak > 0 ? `${streak} Day Streak` : "No Streak Yet"}
          </span>
        </div>
      </div>

      {/* Tier Card */}
      <div
        className="rounded-2xl p-5 flex items-center gap-5"
        style={{
          background: meta.bgColor,
          border: `1.5px solid ${meta.borderColor}`,
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
          style={{
            background: "oklch(0.98 0.01 0)",
            border: `2px solid ${meta.borderColor}`,
          }}
        >
          {meta.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="font-display font-black text-xl"
            style={{ color: meta.color }}
          >
            {level}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {meta.next
              ? `${xpGap.toLocaleString()} XP to ${meta.next}`
              : "🏆 Maximum tier reached!"}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono font-black text-lg text-foreground">
            <AnimatedNumber value={xp} />
          </div>
          <div className="text-xs text-muted-foreground">Total XP</div>
        </div>
      </div>

      {/* XP Bar with shimmer */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>
            {xpInTier.toLocaleString()} /{" "}
            {(level === "Legend" ? xp : xpNeeded).toLocaleString()} XP
          </span>
          <span
            className="font-bold"
            style={{
              color: meta.color,
            }}
          >
            {Math.round(progressPct)}%
          </span>
        </div>
        <div className="xp-bar">
          <motion.div
            className="xp-fill rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{
              background: `linear-gradient(90deg, ${meta.color}, oklch(var(--accent)))`,
            }}
            data-ocid="profile.xp_rank_progress_bar"
          />
        </div>
        {meta.next && (
          <p className="text-center text-xs text-muted-foreground">
            Keep creating to reach{" "}
            <span className="font-bold text-foreground">
              {TIER_META[meta.next as CreatorLevel]?.icon} {meta.next}
            </span>
            !
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── Achievement Badges ────────────────────────────────────────────────────────

const ACHIEVEMENTS = [
  {
    id: "first_app",
    emoji: "🚀",
    label: "First App",
    criteria: "Publish your first idea",
    unlocked: true,
  },
  {
    id: "viral",
    emoji: "⚡",
    label: "Viral Creator",
    criteria: "Get 50+ likes on one idea",
    unlocked: true,
  },
  {
    id: "streak7",
    emoji: "🔥",
    label: "7-Day Streak",
    criteria: "Build 7 days in a row",
    unlocked: false,
  },
  {
    id: "master",
    emoji: "🏗️",
    label: "Master Builder",
    criteria: "Publish 10+ ideas",
    unlocked: false,
  },
  {
    id: "community",
    emoji: "⭐",
    label: "Community Star",
    criteria: "Receive 100+ total likes",
    unlocked: false,
  },
  {
    id: "alchemist",
    emoji: "🧪",
    label: "Idea Alchemist",
    criteria: "Remix 5+ ideas",
    unlocked: false,
  },
];

function AchievementBadges() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass rounded-3xl p-6 space-y-5"
      data-ocid="profile.achievements_section"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          🏆 Achievement Badges
        </h2>
        <span className="ml-auto text-xs text-muted-foreground">
          {ACHIEVEMENTS.filter((a) => a.unlocked).length}/{ACHIEVEMENTS.length}{" "}
          Unlocked
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4 + i * 0.08,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative flex flex-col items-center gap-2"
            onMouseEnter={() => setHoveredId(badge.id)}
            onMouseLeave={() => setHoveredId(null)}
            data-ocid={`profile.achievement.item.${i + 1}`}
          >
            <div
              className={`achievement-hexagon text-2xl cursor-pointer ${
                badge.unlocked ? "achievement-unlocked" : "achievement-locked"
              }`}
            >
              {badge.emoji}
            </div>
            <span
              className={`text-xs text-center font-semibold leading-tight max-w-[70px] ${
                badge.unlocked ? "text-foreground" : "text-muted-foreground/40"
              }`}
            >
              {badge.label}
            </span>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredId === badge.id && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.92 }}
                  transition={{ duration: 0.18 }}
                  className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                  data-ocid={`profile.achievement_tooltip.${badge.id}`}
                >
                  <div
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg"
                    style={{
                      background: "oklch(var(--card) / 0.95)",
                      border: "1px solid oklch(var(--primary) / 0.4)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {badge.unlocked ? "✅ " : "🔒 "}
                    {badge.criteria}
                  </div>
                  <div
                    className="w-2 h-2 rotate-45 mx-auto -mt-1"
                    style={{
                      background: "oklch(var(--card) / 0.95)",
                      border: "1px solid oklch(var(--primary) / 0.4)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Progress line */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Achievement Progress</span>
          <span className="font-mono font-bold text-accent">
            {ACHIEVEMENTS.filter((a) => a.unlocked).length}/
            {ACHIEVEMENTS.length}
          </span>
        </div>
        <div className="xp-bar">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${(ACHIEVEMENTS.filter((a) => a.unlocked).length / ACHIEVEMENTS.length) * 100}%`,
            }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--secondary)))",
              boxShadow: "0 0 8px oklch(var(--accent) / 0.5)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Level Stepper ────────────────────────────────────────────────────────────

const ALL_LEVELS: {
  level: CreatorLevel;
  emoji: string;
  label: string;
  range: string;
}[] = [
  { level: "Dreamer", emoji: "🌱", label: "Dreamer", range: "0 – 99 XP" },
  { level: "Builder", emoji: "⚡", label: "Builder", range: "100 – 499 XP" },
  { level: "Creator", emoji: "🔮", label: "Creator", range: "500 – 1,999 XP" },
  { level: "Legend", emoji: "👑", label: "Legend", range: "2,000+ XP" },
];

function LevelStepper({
  xp,
  currentLevel,
}: { xp: number; currentLevel: CreatorLevel }) {
  const levelOrder: CreatorLevel[] = [
    "Dreamer",
    "Builder",
    "Creator",
    "Legend",
  ];
  const currentIdx = levelOrder.indexOf(currentLevel);
  const nextLevel = currentIdx < 3 ? ALL_LEVELS[currentIdx + 1] : null;
  const thresholds = getLevelThresholds();
  const nextThreshold = nextLevel ? thresholds[nextLevel.level][0] : null;
  const xpToNext = nextThreshold !== null ? nextThreshold - Number(xp) : 0;

  return (
    <div
      className="glass-glow rounded-2xl p-6 space-y-4"
      data-ocid="profile.level_stepper"
    >
      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
        ⚡ Level Progression
      </h3>
      <div className="space-y-3">
        {ALL_LEVELS.map((l, i) => {
          const isPast = i < currentIdx;
          const isCurrent = i === currentIdx;
          const isFuture = i > currentIdx;
          return (
            <div
              key={l.level}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-smooth ${
                isCurrent
                  ? "glass-glow glow-pulse border border-primary/60"
                  : isPast
                    ? "bg-muted/60 border border-border/40"
                    : "opacity-50 bg-muted/40 border border-border/20"
              }`}
            >
              <span className="text-xl w-7 text-center">
                {isPast ? "✅" : l.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className={`font-bold text-sm ${isCurrent ? "text-primary" : isPast ? "text-muted-foreground" : "text-muted-foreground/50"}`}
                >
                  {l.label}
                </div>
                <div className="text-xs text-muted-foreground/60">
                  {l.range}
                </div>
              </div>
              {isCurrent && (
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/30">
                  YOU
                </span>
              )}
              {isFuture && nextLevel?.level === l.level && (
                <span className="text-xs text-muted-foreground/50">
                  {xpToNext.toLocaleString()} XP away
                </span>
              )}
            </div>
          );
        })}
      </div>
      {nextLevel && (
        <p className="text-center text-sm text-muted-foreground pt-2">
          🚀 You're{" "}
          <span className="font-bold text-primary">
            {xpToNext.toLocaleString()} XP
          </span>{" "}
          away from{" "}
          <span className="font-bold">
            {nextLevel.emoji} {nextLevel.label}
          </span>
          ! Keep building!
        </p>
      )}
      {!nextLevel && (
        <p className="text-center text-sm text-accent font-bold">
          👑 You've reached the pinnacle — Legendary status!
        </p>
      )}
    </div>
  );
}

// ─── Idea Card (mini) ─────────────────────────────────────────────────────────

function MiniIdeaCard({ idea, index }: { idea: PublicIdea; index: number }) {
  const themeColorStyles: Record<string, React.CSSProperties> = {
    cyan: { borderColor: "oklch(0.72 0.22 262 / 0.4)" },
    purple: { borderColor: "oklch(0.62 0.25 280 / 0.4)" },
    orange: { borderColor: "oklch(0.75 0.28 50 / 0.4)" },
    green: { borderColor: "oklch(0.72 0.22 145 / 0.4)" },
    pink: { borderColor: "oklch(0.72 0.22 330 / 0.4)" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-xl p-4 border transition-smooth cursor-pointer group border-border/30"
      style={themeColorStyles[idea.colorTheme] ?? {}}
      data-ocid={`profile.my_idea.item.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-bold text-sm text-foreground truncate">
            {idea.appName}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {idea.description}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="text-xs bg-primary/10 text-primary border border-primary/30 rounded-full px-2 py-0.5">
            {idea.category}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
        <span>❤️ {Number(idea.likeCount)}</span>
        <span>🔀 {Number(idea.remixCount)}</span>
        <span>👁️ {Number(idea.viewCount)}</span>
        <span className="ml-auto font-mono text-accent">
          {idea.successScore}% 🎯
        </span>
      </div>
    </motion.div>
  );
}

// ─── Profile Page ─────────────────────────────────────────────────────────────

export default function Profile() {
  const navigate = useNavigate();
  const { data: profile, isLoading: profileLoading } = useGetProfile();
  const { data: stats, isLoading: statsLoading } = useGetMyStats();
  const { data: allIdeas } = useListPublicIdeas("recent", undefined, 50);
  const updateName = useUpdateDisplayName();

  const [editingName, setEditingName] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const loading = profileLoading || statsLoading;

  const displayName = profile?.displayName ?? "Creator";
  const xp = Number(stats?.totalXp ?? 0);
  const streak = Number(stats?.streak ?? 0);
  const level = stats?.level ?? getLevelFromXp(xp);
  const thresholds = getLevelThresholds();
  const [curMin, nextMax] = thresholds[level];
  const nextLevelThreshold =
    level === "Legend"
      ? xp
      : nextMax === Number.POSITIVE_INFINITY
        ? xp
        : nextMax;
  const nextLevelLabel: CreatorLevel | null =
    level === "Dreamer"
      ? "Builder"
      : level === "Builder"
        ? "Creator"
        : level === "Creator"
          ? "Legend"
          : null;
  const progressPct =
    level === "Legend"
      ? 100
      : Math.min(100, ((xp - curMin) / (nextLevelThreshold - curMin)) * 100);

  const initials = displayName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const myIdeas = (allIdeas ?? []).filter((idea) =>
    profile ? idea.creatorId === profile.userId.toString() : false,
  );

  function startEdit() {
    setNameValue(displayName);
    setEditingName(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  async function saveName() {
    const trimmed = nameValue.trim();
    if (trimmed && trimmed !== displayName)
      await updateName.mutateAsync(trimmed);
    setEditingName(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") saveName();
    if (e.key === "Escape") setEditingName(false);
  }

  const categories = ["🏋️ Fitness Apps", "📚 Education Apps", "💰 Finance Apps"];

  return (
    <Layout>
      <div
        className="max-w-5xl mx-auto px-4 py-10 space-y-8"
        data-ocid="profile.page"
      >
        {/* ── HERO SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass-glow rounded-3xl p-8 overflow-hidden"
        >
          <div className="absolute inset-0 gradient-hologram opacity-5 pointer-events-none rounded-3xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-full gradient-hologram flex items-center justify-center text-4xl font-display font-black shadow-2xl glow-primary">
                <span className="text-foreground drop-shadow">
                  {loading ? "?" : initials}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1">
                <LevelBadge level={level} size="sm" showName={false} />
              </div>
            </div>

            {/* Name + Level */}
            <div className="flex-1 text-center md:text-left min-w-0 space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {editingName ? (
                  <input
                    ref={inputRef}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={saveName}
                    className="bg-transparent border-b-2 border-primary text-3xl font-display font-black text-foreground outline-none w-full max-w-xs"
                    data-ocid="profile.name_input"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={startEdit}
                    className="text-3xl font-display font-black text-foreground hover:text-primary transition-smooth group flex items-center gap-2"
                    data-ocid="profile.name_edit_button"
                    title="Click to edit name"
                  >
                    {loading ? (
                      <Skeleton className="h-9 w-48" />
                    ) : (
                      <>
                        {displayName}
                        <span className="text-lg opacity-0 group-hover:opacity-100 transition-smooth">
                          ✏️
                        </span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <LevelBadge level={level} size="lg" />
                <span className="text-sm text-muted-foreground font-body">
                  🔮 Creator Level
                </span>
              </div>

              {/* XP Progress Bar */}
              <div className="space-y-1.5 max-w-sm mx-auto md:mx-0">
                <div className="flex justify-between text-xs text-muted-foreground font-mono">
                  <span>{xp.toLocaleString()} XP</span>
                  <span>
                    {level === "Legend"
                      ? "MAX LEVEL 👑"
                      : `${nextLevelThreshold.toLocaleString()} XP to ${nextLevelLabel}`}
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-muted/40 overflow-hidden border border-border/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.72 0.22 262), oklch(0.62 0.25 280))",
                      boxShadow: "0 0 12px oklch(0.72 0.22 262 / 0.6)",
                    }}
                    data-ocid="profile.xp_progress_bar"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-2 gap-3 shrink-0"
              data-ocid="profile.quick_stats"
            >
              {[
                { label: "XP", value: xp.toLocaleString(), emoji: "⚡" },
                { label: "Streak", value: `${streak}d`, emoji: "🔥" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl px-4 py-3 text-center min-w-[80px]"
                >
                  <div className="text-lg">{s.emoji}</div>
                  <div className="font-mono font-bold text-lg text-primary">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── DIGITAL TWIN SECTION — above character section ── */}
        <div
          className="glass-glow rounded-3xl p-6 md:p-8"
          data-ocid="profile.digital_twin_wrapper"
        >
          <DigitalTwinSection displayName={displayName} xp={xp} />
        </div>

        {/* ── BECOME THE CHARACTER — above DNA panel ── */}
        <div
          className="glass-glow rounded-3xl p-6 md:p-8"
          data-ocid="profile.creator_identity_section"
        >
          <BecomeTheCharacter />
        </div>

        {/* ── FEATURE 1 + 4: Two-column game section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature 1: Creator DNA Panel */}
          <CreatorDNAPanel />

          {/* Feature 4a: XP Rank Card + Streak */}
          <div className="space-y-6">
            <XPRankCard
              level={level}
              xp={xp}
              progressPct={progressPct}
              curMin={curMin}
              nextThreshold={nextLevelThreshold}
              nextLevelLabel={nextLevelLabel}
              streak={streak}
            />
            {/* Feature 4b: Achievement Badges */}
            <AchievementBadges />
          </div>
        </div>

        {/* ── CREATOR DNA Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
          data-ocid="profile.creator_dna_section"
        >
          <h2 className="text-xl font-display font-black text-foreground">
            🧬 Your Creator DNA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                emoji: "💡",
                label: "Ideas Generated",
                value: Number(stats?.ideasGenerated ?? 0),
                ocid: "profile.stat_ideas",
              },
              {
                emoji: "❤️",
                label: "Total Likes Earned",
                value: Number(stats?.totalLikes ?? 0),
                ocid: "profile.stat_likes",
              },
              {
                emoji: "🔀",
                label: "Total Remixes",
                value: Number(stats?.totalRemixes ?? 0),
                ocid: "profile.stat_remixes",
              },
              {
                emoji: "🔥",
                label: "Day Streak",
                value: `${streak} days`,
                ocid: "profile.stat_streak",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="glass-glow rounded-2xl p-5 text-center space-y-2"
                data-ocid={stat.ocid}
              >
                <div className="text-2xl">{stat.emoji}</div>
                {loading ? (
                  <Skeleton className="h-8 w-16 mx-auto" />
                ) : (
                  <div className="font-mono font-black text-2xl text-primary">
                    {typeof stat.value === "number"
                      ? stat.value.toLocaleString()
                      : stat.value}
                  </div>
                )}
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Pills */}
          <div className="glass rounded-2xl p-5 space-y-3">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Top Categories
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="glass-glow rounded-full px-4 py-1.5 text-sm font-bold text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Based on your creation history
            </p>
          </div>
        </motion.div>

        {/* ── LEVEL STEPPER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LevelStepper xp={xp} currentLevel={level} />
        </motion.div>

        {/* ── MY CREATIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
          data-ocid="profile.my_ideas_section"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-black text-foreground">
              ✨ My Creations
            </h2>
            <button
              type="button"
              onClick={() =>
                navigate({ to: "/builder/$id", params: { id: "new" } })
              }
              className="text-sm font-bold text-primary hover:text-primary/80 transition-smooth flex items-center gap-1"
              data-ocid="profile.create_idea_button"
            >
              + New Idea
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(["sk1", "sk2"] as const).map((k) => (
                <Skeleton key={k} className="h-24 rounded-xl" />
              ))}
            </div>
          ) : myIdeas.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-glow rounded-2xl p-10 text-center space-y-4"
              data-ocid="profile.my_ideas_empty_state"
            >
              <div className="text-5xl">🚀</div>
              <h3 className="font-display font-black text-lg text-foreground">
                No ideas published yet
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Your creations will appear here. Build your first idea and share
                it with the universe!
              </p>
              <button
                type="button"
                onClick={() =>
                  navigate({ to: "/builder/$id", params: { id: "new" } })
                }
                className="glass-glow rounded-xl px-6 py-2.5 text-sm font-bold text-primary hover:bg-primary/10 transition-smooth"
                data-ocid="profile.publish_first_idea_button"
              >
                Publish your first idea →
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myIdeas.map((idea, i) => (
                <MiniIdeaCard key={idea.id.toString()} idea={idea} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
