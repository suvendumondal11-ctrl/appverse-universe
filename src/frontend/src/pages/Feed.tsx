import { Layout } from "@/components/layout/Layout";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useIncrementView,
  useLikeIdea,
  useListPublicIdeas,
  usePublishIdea,
  useRemixIdea,
} from "@/hooks/useBackend";
import type { CreatorLevel, PublicIdea } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

const SEED_IDEAS: (PublicIdea & {
  moodBadge?: string;
  coCreated?: boolean;
  isTwinGenerated?: boolean;
})[] = [
  {
    id: 1n,
    creatorId: "priya-k",
    creatorName: "Priya K.",
    appName: "FitQuest Pro",
    description:
      "Gamified fitness platform with daily challenges, friend leaderboards, and streak rewards. Turn every workout into an epic quest.",
    category: "fitness",
    colorTheme: "#06b6d4,#8b5cf6,#f59e0b",
    features: [
      "Daily Challenges",
      "Friend Competition",
      "Progress Tracking",
      "Workout Plans",
      "Achievement Badges",
    ],
    earningModel: "Freemium",
    successScore: 78,
    marketScore: 80,
    uniquenessScore: 75,
    monetizationScore: 72,
    viralScore: 85,
    likeCount: 342,
    viewCount: 1820,
    remixCount: 67,
    createdAt: BigInt(Date.now() - 3 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
    moodBadge: "😊",
    coCreated: true,
    isTwinGenerated: true,
  },
  {
    id: 2n,
    creatorId: "arjun-m",
    creatorName: "Arjun M.",
    appName: "StudyMind AI",
    description:
      "AI-powered study companion that generates quizzes, tracks your progress, and adapts to your learning style in real time.",
    category: "education",
    colorTheme: "#6366f1,#ec4899,#06b6d4",
    features: [
      "Spaced Repetition",
      "Quiz Generator",
      "Study Streaks",
      "AI Tutor",
      "Progress Map",
    ],
    earningModel: "Subscription",
    successScore: 72,
    marketScore: 78,
    uniquenessScore: 70,
    monetizationScore: 74,
    viralScore: 68,
    likeCount: 218,
    viewCount: 1240,
    remixCount: 41,
    createdAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
  },
  {
    id: 3n,
    creatorId: "lena-r",
    creatorName: "Lena R.",
    appName: "CookMaster",
    description:
      "Smart recipe finder and meal planner with AI nutrition tracking. Discover thousands of dishes and build your perfect weekly menu.",
    category: "food",
    colorTheme: "#f59e0b,#ef4444,#84cc16",
    features: [
      "Recipe Finder",
      "Meal Planner",
      "Shopping List",
      "Nutrition Tracker",
      "Video Recipes",
    ],
    earningModel: "Freemium",
    successScore: 68,
    marketScore: 71,
    uniquenessScore: 65,
    monetizationScore: 66,
    viralScore: 72,
    likeCount: 175,
    viewCount: 890,
    remixCount: 28,
    createdAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
    moodBadge: "😔",
  },
  {
    id: 4n,
    creatorId: "kai-t",
    creatorName: "Kai T.",
    appName: "WealthWave",
    description:
      "Next-gen personal finance app with AI budget coaching, investment tips, and predictive expense analytics. Your money, amplified.",
    category: "finance",
    colorTheme: "#10b981,#06b6d4,#8b5cf6",
    features: [
      "Budget Tracker",
      "Investment Tips",
      "Expense Analytics",
      "Goal Setting",
      "AI Advisor",
    ],
    earningModel: "Premium",
    successScore: 81,
    marketScore: 85,
    uniquenessScore: 79,
    monetizationScore: 88,
    viralScore: 76,
    likeCount: 487,
    viewCount: 1950,
    remixCount: 94,
    createdAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
    moodBadge: "😊",
    coCreated: true,
    isTwinGenerated: true,
  },
  {
    id: 5n,
    creatorId: "sasha-p",
    creatorName: "Sasha P.",
    appName: "JourneyAI",
    description:
      "Your AI travel companion that builds dream itineraries, finds hidden gems, and keeps your entire trip budget in check.",
    category: "travel",
    colorTheme: "#0ea5e9,#8b5cf6,#f97316",
    features: [
      "Trip Planner",
      "Local Tips",
      "Budget Tracker",
      "Hotel Finder",
      "Offline Maps",
    ],
    earningModel: "Freemium",
    successScore: 75,
    marketScore: 77,
    uniquenessScore: 73,
    monetizationScore: 70,
    viralScore: 80,
    likeCount: 264,
    viewCount: 1380,
    remixCount: 52,
    createdAt: BigInt(Date.now() - 4 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
  },
  {
    id: 6n,
    creatorId: "maya-s",
    creatorName: "Maya S.",
    appName: "VibeForge",
    description:
      "The ultimate music creation studio for creators — beat maker, AI playlist generator, and live collab studio in one app.",
    category: "emotion",
    colorTheme: "#a855f7,#ec4899,#f59e0b",
    features: [
      "Beat Maker",
      "Playlist Generator",
      "Mood Music",
      "Collab Studio",
      "Viral Charts",
    ],
    earningModel: "Subscription",
    successScore: 70,
    marketScore: 73,
    uniquenessScore: 76,
    monetizationScore: 68,
    viralScore: 82,
    likeCount: 198,
    viewCount: 1060,
    remixCount: 38,
    createdAt: BigInt(Date.now() - 6 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
    moodBadge: "🎭",
  },
  {
    id: 7n,
    creatorId: "zoe-w",
    creatorName: "Zoe W.",
    appName: "MindSpace",
    description:
      "AI-guided mental wellness app with mood tracking, guided meditations, and personalized self-care routines. Feel better, every day.",
    category: "lifestyle",
    colorTheme: "#8b5cf6,#06b6d4,#a3e635",
    features: [
      "Mood Tracker",
      "Guided Meditations",
      "Breathing Exercises",
      "Sleep Sounds",
      "Daily Journal",
    ],
    earningModel: "Subscription",
    successScore: 74,
    marketScore: 79,
    uniquenessScore: 71,
    monetizationScore: 76,
    viralScore: 73,
    likeCount: 312,
    viewCount: 1540,
    remixCount: 45,
    createdAt: BigInt(Date.now() - 1 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
    moodBadge: "😊",
  },
  {
    id: 8n,
    creatorId: "rafi-n",
    creatorName: "Rafi N.",
    appName: "LearnFlow",
    description:
      "Skill-building platform that creates personalized learning paths using AI. From zero to job-ready in weeks, not years.",
    category: "education",
    colorTheme: "#f97316,#6366f1,#22d3ee",
    features: [
      "Skill Paths",
      "Video Lessons",
      "Live Mentors",
      "Project Challenges",
      "Certificate Engine",
    ],
    earningModel: "Freemium",
    successScore: 77,
    marketScore: 82,
    uniquenessScore: 74,
    monetizationScore: 80,
    viralScore: 78,
    likeCount: 421,
    viewCount: 1780,
    remixCount: 83,
    createdAt: BigInt(Date.now() - 8 * 24 * 60 * 60 * 1000) * BigInt(1_000_000),
    isPublic: true,
  },
];

// ─── Twin Category Labels ────────────────────────────────────────────────────────
const TWIN_CATEGORY_LABELS: Record<string, string> = {
  fitness: "Health & Fitness",
  education: "EdTech",
  finance: "FinTech",
  food: "Food & Nutrition",
  music: "Music & Entertainment",
  travel: "Travel & Lifestyle",
  lifestyle: "Lifestyle",
  emotion: "Wellness & Emotion",
};

// ─── Creator Level Map ─────────────────────────────────────────────────────────
const CREATOR_LEVELS: Record<string, CreatorLevel> = {
  "priya-k": "Builder",
  "arjun-m": "Creator",
  "lena-r": "Dreamer",
  "kai-t": "Legend",
  "sasha-p": "Creator",
  "maya-s": "Builder",
  "zoe-w": "Creator",
  "rafi-n": "Builder",
};

// ─── Region Data ───────────────────────────────────────────────────────────────
type Region =
  | "all"
  | "americas"
  | "europe"
  | "asia"
  | "africa"
  | "oceania"
  | "trending"
  | "worldwide";

const REGION_FILTERS: { id: Region; label: string }[] = [
  { id: "all", label: "🌍 All" },
  { id: "americas", label: "🇺🇸 Americas" },
  { id: "europe", label: "🇪🇺 Europe" },
  { id: "asia", label: "🇯🇵 Asia" },
  { id: "africa", label: "🌍 Africa" },
  { id: "oceania", label: "🇦🇺 Oceania" },
  { id: "trending", label: "⭐ Trending" },
  { id: "worldwide", label: "🌍 Worldwide Viral" },
];

// Deterministic assignment by index: 0,3,6 → Asia; 1,4,7 → Americas; 2,5,8 → Europe
function getIdeaRegion(index: number): Region {
  const map: Region[] = [
    "asia",
    "americas",
    "europe",
    "asia",
    "americas",
    "europe",
    "asia",
    "americas",
    "europe",
  ];
  return map[index % map.length] ?? "americas";
}

const REGION_LABEL_CONFIG: Record<
  string,
  { text: string; flag: string; color: string; border: string }
> = {
  asia: {
    text: "Trending in Japan",
    flag: "🇯🇵",
    color: "oklch(0.75 0.28 50 / 0.15)",
    border: "oklch(0.75 0.28 50 / 0.4)",
  },
  americas: {
    text: "Popular in USA",
    flag: "🇺🇸",
    color: "oklch(0.72 0.22 262 / 0.15)",
    border: "oklch(0.72 0.22 262 / 0.4)",
  },
  europe: {
    text: "Rising in Europe",
    flag: "🇪🇺",
    color: "oklch(0.65 0.2 135 / 0.15)",
    border: "oklch(0.65 0.2 135 / 0.4)",
  },
  africa: {
    text: "Growing in Africa",
    flag: "🌍",
    color: "oklch(0.75 0.28 50 / 0.12)",
    border: "oklch(0.75 0.28 50 / 0.3)",
  },
  oceania: {
    text: "Hot in Australia",
    flag: "🇦🇺",
    color: "oklch(0.72 0.22 262 / 0.12)",
    border: "oklch(0.72 0.22 262 / 0.3)",
  },
  trending: {
    text: "Trending Worldwide",
    flag: "⭐",
    color: "oklch(0.62 0.25 280 / 0.15)",
    border: "oklch(0.62 0.25 280 / 0.4)",
  },
};

// ─── Reality Simulation Metrics by category ───────────────────────────────────
function getRealityMetrics(idea: PublicIdea) {
  const cat = idea.category;
  if (cat === "fitness")
    return {
      crash: "0.8%",
      retention: "88%",
      topFeature: "Workout Streaks",
      suggestion: "Add social sharing to boost virality",
    };
  if (cat === "education")
    return {
      crash: "0.5%",
      retention: "84%",
      topFeature: "AI Quiz Generator",
      suggestion: "Add offline mode for mobile users",
    };
  if (cat === "finance")
    return {
      crash: "0.3%",
      retention: "91%",
      topFeature: "Budget Coach",
      suggestion: "Add bank sync for instant insights",
    };
  if (cat === "food")
    return {
      crash: "1.1%",
      retention: "79%",
      topFeature: "Recipe Discovery",
      suggestion: "Add grocery delivery integration",
    };
  if (cat === "music")
    return {
      crash: "1.4%",
      retention: "75%",
      topFeature: "Beat Maker",
      suggestion: "Add real-time collab sessions",
    };
  if (cat === "travel")
    return {
      crash: "0.9%",
      retention: "82%",
      topFeature: "AI Itinerary",
      suggestion: "Add flight price tracker",
    };
  return {
    crash: "1.2%",
    retention: "82%",
    topFeature: "Core Feature",
    suggestion: "Add push notifications to boost retention",
  };
}

// ─── Trending Tags ────────────────────────────────────────────────────────────
const TAGS = [
  { id: "all", label: "🔥 Trending", color: "accent" },
  { id: "fitness", label: "🏋️ Fitness", color: "primary" },
  { id: "education", label: "📚 Education", color: "secondary" },
  { id: "food", label: "🍕 Food", color: "accent" },
  { id: "finance", label: "💰 Finance", color: "primary" },
  { id: "music", label: "🎵 Music", color: "secondary" },
  { id: "travel", label: "🌍 Travel", color: "accent" },
  { id: "lifestyle", label: "🏠 Lifestyle", color: "primary" },
  { id: "emotion", label: "💗 Emotion", color: "secondary" },
] as const;

const SORT_OPTIONS = [
  { id: "trending", label: "Trending" },
  { id: "recent", label: "Newest" },
  { id: "liked", label: "Most Liked" },
  { id: "remixed", label: "Most Remixed" },
] as const;

type SortOption = (typeof SORT_OPTIONS)[number]["id"];

const CATEGORY_COLORS: Record<string, string> = {
  fitness: "oklch(0.72 0.22 262 / 0.25)",
  education: "oklch(0.62 0.25 280 / 0.25)",
  food: "oklch(0.75 0.28 50 / 0.25)",
  finance: "oklch(0.72 0.22 162 / 0.25)",
  music: "oklch(0.65 0.25 320 / 0.25)",
  travel: "oklch(0.7 0.22 200 / 0.25)",
  lifestyle: "oklch(0.62 0.25 280 / 0.25)",
  emotion: "oklch(0.65 0.24 350 / 0.25)",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function parseThemeColors(colorTheme: string): string[] {
  return colorTheme
    .split(",")
    .map((c) => c.trim())
    .slice(0, 3);
}

function sortIdeas(
  ideas: (PublicIdea & { moodBadge?: string; coCreated?: boolean })[],
  sort: SortOption,
): (PublicIdea & { moodBadge?: string; coCreated?: boolean })[] {
  const copy = [...ideas];
  if (sort === "liked")
    return copy.sort((a, b) => Number(b.likeCount) - Number(a.likeCount));
  if (sort === "remixed")
    return copy.sort((a, b) => Number(b.remixCount) - Number(a.remixCount));
  if (sort === "recent")
    return copy.sort((a, b) => Number(b.createdAt - a.createdAt));
  return copy.sort(
    (a, b) =>
      Number(b.likeCount) * 2 +
      Number(b.viewCount) * 0.5 +
      Number(b.remixCount) * 3 -
      (Number(a.likeCount) * 2 +
        Number(a.viewCount) * 0.5 +
        Number(a.remixCount) * 3),
  );
}

// ─── Success Score Ring ────────────────────────────────────────────────────────
function SuccessRing({ score }: { score: number }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - score / 100);
  const color =
    score >= 80
      ? "oklch(0.75 0.28 50)"
      : score >= 65
        ? "oklch(0.72 0.22 262)"
        : "oklch(0.62 0.25 280)";
  return (
    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 40 40"
        aria-label={`Success score: ${score}`}
        role="img"
      >
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="oklch(0.85 0.03 262)"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      <span className="text-[10px] font-bold font-mono text-foreground relative z-10">
        {score}
      </span>
    </div>
  );
}

// ─── Feature 8: Compact Success Forecast (mini gauges on card) ────────────────
function SuccessForecast({ idea }: { idea: PublicIdea }) {
  const scores = [
    { label: "Market", value: idea.marketScore, color: "oklch(0.72 0.22 262)" },
    {
      label: "Unique",
      value: idea.uniquenessScore,
      color: "oklch(0.62 0.25 280)",
    },
    { label: "Viral", value: idea.viralScore, color: "oklch(0.75 0.28 50)" },
    {
      label: "Revenue",
      value: idea.monetizationScore,
      color: "oklch(0.65 0.2 135)",
    },
  ];
  const overall = Math.round(
    (idea.marketScore +
      idea.uniquenessScore +
      idea.viralScore +
      idea.monetizationScore) /
      4,
  );

  return (
    <div
      className="mt-2 p-3 rounded-xl bg-muted/60 border border-border/40"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
          Success Forecast
        </span>
        <span
          className="text-xs font-bold"
          style={{ color: "oklch(0.75 0.28 50)" }}
        >
          {overall}% Overall
        </span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {scores.map(({ label, value, color }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className="forecast-mini-gauge w-10 h-10">
              <div
                className="forecast-gauge-fill"
                style={
                  {
                    "--percentage": `${(value / 100) * 360}deg`,
                  } as React.CSSProperties
                }
              />
              <span
                className="text-[9px] font-bold relative z-10"
                style={{ color }}
              >
                {value}
              </span>
            </div>
            <span className="text-[9px] text-muted-foreground font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature 5: Region Label Chip ─────────────────────────────────────────────
function RegionLabel({ region }: { region: Region }) {
  const cfg = REGION_LABEL_CONFIG[region];
  if (!cfg) return null;
  return (
    <span
      className="region-label text-xs"
      style={{ background: cfg.color, borderColor: cfg.border }}
    >
      {cfg.flag} {cfg.text}
    </span>
  );
}

// ─── Feature 5: Intel Banner ───────────────────────────────────────────────────
function IntelBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="intel-banner col-span-full flex items-center gap-3"
      data-ocid="feed.intel_banner"
    >
      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="text-lg flex-shrink-0"
      >
        💡
      </motion.span>
      <div>
        <span className="font-semibold text-foreground">
          Similar ideas trending in USA
        </span>
        <span className="text-muted-foreground"> — +500 views this week</span>
      </div>
      <span className="ml-auto text-xs text-muted-foreground bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 flex-shrink-0">
        🌐 Global Intel
      </span>
    </motion.div>
  );
}

// ─── Feature 2: Reality Simulation Modal ──────────────────────────────────────
function RealityModal({
  idea,
  onClose,
}: { idea: PublicIdea; onClose: () => void }) {
  const [count, setCount] = useState(0);
  const metrics = getRealityMetrics(idea);
  const target = 10000;

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;
    let rafId: number;
    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // cubic ease-out
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const metricCards = [
    {
      label: "Crash Rate",
      value: metrics.crash,
      badge: "success",
      desc: "Low crash — excellent stability",
    },
    {
      label: "Day-7 Retention",
      value: metrics.retention,
      badge: "primary",
      desc: "Above industry average",
    },
    {
      label: "Top Feature",
      value: metrics.topFeature,
      badge: "secondary",
      desc: "Most used by virtual users",
    },
    {
      label: "AI Suggestion",
      value: metrics.suggestion,
      badge: "accent",
      desc: "Improve to boost metrics",
    },
  ];

  const badgeColors: Record<string, string> = {
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    primary: "oklch(0.72 0.22 262)",
    secondary: "oklch(0.62 0.25 280)",
    accent: "oklch(0.75 0.28 50)",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="feed.reality_modal.dialog"
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 32 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="reality-modal relative z-10 w-full max-w-lg rounded-2xl p-7"
        data-ocid="feed.reality_modal"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground"
          aria-label="Close modal"
          data-ocid="feed.reality_modal.close_button"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Feature 2 · Parallel Reality
          </p>
          <h2 className="text-2xl font-display font-black gradient-hologram bg-clip-text text-transparent">
            🌐 Parallel Reality Report
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            "{idea.appName}" was simulated across virtual user clusters
          </p>
        </div>

        {/* Counter */}
        <div className="text-center mb-7">
          <motion.p
            className="reality-counter text-6xl font-display font-black"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {count.toLocaleString()}
          </motion.p>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            Virtual Users Tested Your App
          </p>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 rounded-full bg-muted/30 overflow-hidden max-w-48 mx-auto">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${Math.round((count / target) * 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {metricCards.map(({ label, value, badge, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.35 }}
              className="reality-metric rounded-xl p-3 space-y-1"
              data-ocid={`feed.reality_modal.metric.${i + 1}`}
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                {label}
              </p>
              <p
                className="text-sm font-bold font-display leading-snug"
                style={
                  badge !== "success"
                    ? { color: badgeColors[badge] }
                    : undefined
                }
              >
                {value}
              </p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Close CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          type="button"
          onClick={onClose}
          data-ocid="feed.reality_modal.confirm_button"
          className="w-full py-3 rounded-xl font-display font-bold text-foreground transition-smooth hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.22 262 / 0.2), oklch(0.62 0.25 280 / 0.2))",
            border: "1px solid oklch(0.72 0.22 262 / 0.4)",
          }}
        >
          ✅ Reality Test Complete
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ─── Idea Card ────────────────────────────────────────────────────────────────
interface IdeaCardProps {
  idea: PublicIdea & {
    moodBadge?: string;
    coCreated?: boolean;
    isTwinGenerated?: boolean;
  };
  index: number;
  region: Region;
  showViralBadge?: boolean;
  onLike: (id: bigint) => void;
  onRemix: (idea: PublicIdea) => void;
  onView: (id: bigint) => void;
  onPublishReality: (idea: PublicIdea) => void;
  onOpenDetail: (
    idea: PublicIdea & {
      moodBadge?: string;
      coCreated?: boolean;
      isTwinGenerated?: boolean;
    },
  ) => void;
}

function IdeaCard({
  idea,
  index,
  region,
  showViralBadge,
  onLike,
  onRemix,
  onView,
  onPublishReality,
  onOpenDetail,
}: IdeaCardProps) {
  const colors = parseThemeColors(idea.colorTheme);
  const level: CreatorLevel = CREATOR_LEVELS[idea.creatorId] ?? "Dreamer";
  const categoryBg =
    CATEGORY_COLORS[idea.category] ?? CATEGORY_COLORS.lifestyle;
  const moodBadge = (idea as PublicIdea & { moodBadge?: string }).moodBadge;
  const coCreated = (idea as PublicIdea & { coCreated?: boolean }).coCreated;
  const isTwinGenerated = (idea as PublicIdea & { isTwinGenerated?: boolean })
    .isTwinGenerated;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      className="group relative glass-glow rounded-2xl p-5 flex flex-col gap-3 cursor-pointer
        hover:-translate-y-1 hover:shadow-[0_0_32px_oklch(var(--primary)/0.2)] transition-smooth"
      data-ocid={`feed.card.${index + 1}`}
      onClick={() => {
        onView(idea.id);
        onOpenDetail(idea);
      }}
    >
      {/* Mood badge (top-right corner) */}
      {moodBadge && !showViralBadge && (
        <span
          className="absolute top-3 right-3 text-lg leading-none select-none z-10"
          title="Emotion mood"
          aria-label={`Mood: ${moodBadge}`}
          data-ocid={`feed.mood_badge.${index + 1}`}
        >
          {moodBadge}
        </span>
      )}
      {/* Viral score badge (shown in Worldwide Viral filter) */}
      {showViralBadge && (
        <span
          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold z-10 select-none"
          style={{
            background: "oklch(0.75 0.28 50 / 0.18)",
            border: "1px solid oklch(0.75 0.28 50 / 0.5)",
            color: "oklch(0.45 0.24 50)",
          }}
          title={`Viral score: ${idea.viralScore}`}
          data-ocid={`feed.viral_badge.${index + 1}`}
        >
          🔥 {idea.viralScore}
        </span>
      )}

      {/* Region label chip */}
      <RegionLabel region={region} />

      {/* Top row: app name + category + score ring */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3
            className="text-lg font-display font-black leading-tight gradient-hologram bg-clip-text text-transparent truncate"
            title={idea.appName}
          >
            {idea.appName}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-xs font-bold capitalize text-foreground"
              style={{ background: categoryBg }}
            >
              {idea.category}
            </span>
            {coCreated && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background: "oklch(0.62 0.2 200 / 0.15)",
                  border: "1px solid oklch(0.62 0.2 200 / 0.45)",
                  color: "oklch(0.42 0.18 200)",
                }}
                data-ocid={`feed.cocreated_badge.${index + 1}`}
              >
                🌐 Co-Created
              </span>
            )}
          </div>
        </div>
        <SuccessRing score={idea.successScore} />
      </div>

      {/* Color swatches */}
      <div className="flex gap-1.5 items-center">
        {colors.map((c) => (
          <span
            key={c}
            className="w-4 h-4 rounded-full ring-1 ring-border/30 flex-shrink-0"
            style={{ background: c, boxShadow: `0 0 6px ${c}66` }}
            aria-hidden="true"
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1 font-mono">
          {idea.earningModel}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-body">
        {idea.description}
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-1.5">
        {idea.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted/60 text-foreground/70 border border-border/30"
          >
            {f}
          </span>
        ))}
        {idea.features.length > 3 && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium text-muted-foreground">
            +{idea.features.length - 3}
          </span>
        )}
      </div>

      {/* Feature 8: Compact Success Forecast */}
      <SuccessForecast idea={idea} />

      {/* Creator row */}
      <div className="flex items-center gap-2 pt-1 flex-wrap">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`,
          }}
          aria-label={idea.creatorName}
        >
          {getInitials(idea.creatorName)}
        </div>
        <span className="text-xs font-medium text-foreground/80 truncate min-w-0">
          {idea.creatorName}
        </span>
        <LevelBadge level={level} size="sm" showName={false} />
        {isTwinGenerated && (
          <span
            className="twin-badge glow-pulse flex-shrink-0"
            title="Powered by Twin AI"
            data-ocid={`feed.twin_badge.${index + 1}`}
          >
            🤖 Powered by Twin
          </span>
        )}
      </div>

      {/* Engagement row */}
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>👁️ {Number(idea.viewCount).toLocaleString()}</span>
        <span>❤️ {Number(idea.likeCount).toLocaleString()}</span>
        <span>🔀 {Number(idea.remixCount).toLocaleString()}</span>
      </div>

      {/* Action buttons */}
      <div
        className="flex gap-2 pt-1"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold glass border border-border/30 text-foreground/70 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_oklch(var(--primary)/0.3)] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          data-ocid={`feed.like_button.${index + 1}`}
          onClick={() => onLike(idea.id)}
          aria-label={`Like ${idea.appName}`}
        >
          ❤️ Like
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold remix-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          data-ocid={`feed.remix_button.${index + 1}`}
          onClick={() => onRemix(idea)}
          aria-label={`Remix ${idea.appName}`}
        >
          🔀 Remix
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-2.5 py-2 rounded-xl text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          style={{
            background: "oklch(0.62 0.25 280 / 0.15)",
            border: "1px solid oklch(0.62 0.25 280 / 0.4)",
            color: "oklch(0.75 0.22 280)",
          }}
          data-ocid={`feed.reality_test_button.${index + 1}`}
          onClick={() => onPublishReality(idea)}
          aria-label={`Reality test ${idea.appName}`}
          title="Run Parallel Reality Simulation"
        >
          🌐
        </button>
      </div>
    </motion.div>
  );
}

// ─── Idea Detail Modal ────────────────────────────────────────────────────────
function IdeaDetailModal({
  idea,
  onClose,
  onRemix,
}: {
  idea: PublicIdea & {
    moodBadge?: string;
    coCreated?: boolean;
    isTwinGenerated?: boolean;
  };
  onClose: () => void;
  onRemix: (idea: PublicIdea) => void;
}) {
  const colors = parseThemeColors(idea.colorTheme);
  const level: CreatorLevel = CREATOR_LEVELS[idea.creatorId] ?? "Dreamer";
  const isTwinGenerated = idea.isTwinGenerated ?? false;
  const hasRemixes = Number(idea.remixCount) > 0;
  const twinCategoryLabel =
    TWIN_CATEGORY_LABELS[idea.category] ?? idea.category;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="feed.idea_detail.dialog"
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 32 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="reality-modal relative z-10 w-full max-w-lg rounded-2xl p-7 overflow-y-auto max-h-[90vh]"
        data-ocid="feed.idea_detail"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground"
          aria-label="Close detail"
          data-ocid="feed.idea_detail.close_button"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h2 className="text-2xl font-display font-black gradient-hologram bg-clip-text text-transparent">
              {idea.appName}
            </h2>
            {isTwinGenerated && (
              <span
                className="twin-badge glow-pulse"
                data-ocid="feed.idea_detail.twin_badge"
              >
                🤖 Powered by Twin
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {idea.description}
          </p>
        </div>

        {/* Color swatches + meta */}
        <div className="flex items-center gap-2 mb-5">
          {colors.map((c) => (
            <span
              key={c}
              className="w-4 h-4 rounded-full ring-1 ring-border/30"
              style={{ background: c, boxShadow: `0 0 6px ${c}66` }}
              aria-hidden="true"
            />
          ))}
          <span className="text-xs text-muted-foreground font-mono ml-1">
            {idea.earningModel}
          </span>
          <span
            className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold capitalize text-foreground"
            style={{
              background:
                CATEGORY_COLORS[idea.category] ?? CATEGORY_COLORS.lifestyle,
            }}
          >
            {idea.category}
          </span>
        </div>

        {/* Twin Insight Card — only for twin-generated ideas */}
        {isTwinGenerated && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mb-5 p-4 rounded-xl"
            style={{
              background: "oklch(var(--primary) / 0.08)",
              border: "1.5px solid oklch(var(--primary) / 0.35)",
              boxShadow: "0 0 16px oklch(var(--primary) / 0.12)",
            }}
            data-ocid="feed.idea_detail.twin_insight"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base">🤖</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "oklch(var(--primary))" }}
              >
                Twin Insight
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Why Twin created this:{" "}
              <span className="text-foreground font-medium">
                Trending in {twinCategoryLabel}, matches your Builder style
              </span>
            </p>
          </motion.div>
        )}

        {/* Remix Chain */}
        {hasRemixes && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isTwinGenerated ? 0.3 : 0.2, duration: 0.35 }}
            className="mb-5 p-4 rounded-xl"
            style={{
              background: "oklch(0.96 0.012 262 / 0.97)",
              border: "1px solid oklch(var(--border) / 0.5)",
            }}
            data-ocid="feed.idea_detail.remix_chain"
          >
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
              Remix Chain
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Original Creator */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`,
                  }}
                  aria-label={idea.creatorName}
                >
                  {getInitials(idea.creatorName)}
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Creator</p>
                  <p className="text-xs font-bold text-foreground">
                    {idea.creatorName}
                  </p>
                </div>
              </div>
              {/* Arrow connector */}
              <span className="text-muted-foreground text-sm mx-1">→</span>
              {/* Twin node (only if twin-generated) */}
              {isTwinGenerated && (
                <>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 glow-pulse"
                      style={{
                        background: "oklch(var(--primary) / 0.15)",
                        border: "1.5px solid oklch(var(--primary) / 0.6)",
                      }}
                      aria-label="Twin AI"
                    >
                      🤖
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">
                        AI Twin
                      </p>
                      <p
                        className="text-xs font-bold"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        Twin
                      </p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm mx-1">→</span>
                </>
              )}
              {/* Remixer placeholder */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0"
                  style={{
                    background: "oklch(var(--accent) / 0.2)",
                    border: "1.5px solid oklch(var(--accent) / 0.5)",
                    color: "oklch(var(--accent))",
                  }}
                  aria-label="Remixers"
                >
                  🔀
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">
                    Remixed by
                  </p>
                  <p
                    className="text-xs font-bold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    {Number(idea.remixCount)} creators
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Creator + stats */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`,
            }}
          >
            {getInitials(idea.creatorName)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground">
              {idea.creatorName}
            </p>
            <LevelBadge level={level} size="sm" showName />
          </div>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span>👁️ {Number(idea.viewCount).toLocaleString()}</span>
            <span>❤️ {Number(idea.likeCount).toLocaleString()}</span>
            <span>🔀 {Number(idea.remixCount).toLocaleString()}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {idea.features.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted/60 text-foreground/70 border border-border/30"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 py-3 rounded-xl text-sm font-bold glass border border-border/30 text-foreground/70 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_oklch(var(--primary)/0.3)] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-ocid="feed.idea_detail.close_button"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="flex-1 py-3 rounded-xl text-sm font-bold remix-btn transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            data-ocid="feed.idea_detail.remix_button"
            onClick={() => {
              onRemix(idea);
              onClose();
            }}
          >
            🔀 Remix This
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Global Awareness Banner ──────────────────────────────────────────────────
const GLOBAL_TREND_MESSAGES = [
  "FitTrack AI is viral in Japan 🇯🇵",
  "MediBot is blowing up in USA 🇺🇸",
  "EcoMap going viral in Europe 🇩🇪",
];

function GlobalAwarenessBanner({ onDismiss }: { onDismiss: () => void }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const autoDismissId = setTimeout(() => {
      onDismiss();
    }, 5000);
    return () => clearTimeout(autoDismissId);
  }, [onDismiss]);

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % GLOBAL_TREND_MESSAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -24, height: "auto" }}
      animate={{ opacity: 1, y: 0, height: "auto" }}
      exit={{
        opacity: 0,
        y: -16,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mx-4 mt-4 rounded-2xl flex items-center gap-3 px-4 py-3 backdrop-blur-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.015 262 / 0.97) 0%, oklch(0.97 0.018 280 / 0.97) 100%)",
        border: "1px solid oklch(0.72 0.22 262 / 0.35)",
        boxShadow:
          "0 0 24px oklch(0.72 0.22 262 / 0.12), inset 0 0 16px oklch(0.62 0.25 280 / 0.06)",
      }}
      data-ocid="feed.global_awareness_banner"
    >
      <span className="text-xl flex-shrink-0" aria-hidden="true">
        🌍
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-foreground leading-tight">
          3 ideas are trending globally right now 🌍
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-muted-foreground mt-0.5"
          >
            {GLOBAL_TREND_MESSAGES[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={() => navigate({ to: "/magic" })}
        className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "oklch(0.62 0.25 280 / 0.15)",
          border: "1px solid oklch(0.62 0.25 280 / 0.45)",
          color: "oklch(0.42 0.22 280)",
        }}
        data-ocid="feed.global_awareness_explore_button"
      >
        Explore 🌍
      </button>
      <button
        type="button"
        onClick={onDismiss}
        className="flex-shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Dismiss global awareness banner"
        data-ocid="feed.global_awareness_close_button"
      >
        ✕
      </button>
    </motion.div>
  );
}

// ─── Auto Refresh Indicator ───────────────────────────────────────────────────
function AutoRefreshIndicator() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const label =
    seconds === 0
      ? "just now"
      : seconds < 60
        ? `${seconds}s ago`
        : `${Math.floor(seconds / 60)}m ago`;

  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
      style={{
        background: "oklch(0.9 0.08 145 / 0.2)",
        border: "1px solid oklch(0.55 0.2 145 / 0.4)",
        color: "oklch(0.35 0.18 145)",
      }}
      data-ocid="feed.auto_refresh_indicator"
      aria-label="Feed auto-refreshing"
    >
      <motion.span
        className="h-2 w-2 rounded-full inline-block flex-shrink-0"
        style={{ background: "oklch(0.55 0.2 145)" }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{
          duration: 1.4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <span>🔄 Auto-refreshing • Live</span>
      <span className="opacity-60">• Updated {label}</span>
    </div>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c"] as const;

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <div className="flex gap-1.5">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <Skeleton className="h-10 w-full" />
      <div className="flex gap-1.5">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}

// ─── Hot Strip Card ───────────────────────────────────────────────────────────
function HotCard({ idea, rank }: { idea: PublicIdea; rank: number }) {
  const colors = parseThemeColors(idea.colorTheme);
  return (
    <div
      className="glass-glow-accent rounded-xl px-4 py-3 flex items-center gap-3 flex-shrink-0 w-52"
      data-ocid={`feed.hot_card.${rank}`}
    >
      <span className="text-lg font-black font-mono text-accent">#{rank}</span>
      <div className="min-w-0 flex-1">
        <p
          className="text-sm font-bold font-display truncate text-foreground"
          title={idea.appName}
        >
          {idea.appName}
        </p>
        <p className="text-xs text-muted-foreground">
          🔀 {Number(idea.remixCount)} remixes
        </p>
      </div>
      <div className="flex gap-1">
        {colors.slice(0, 2).map((c) => (
          <span
            key={c}
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ background: c }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

// ─── Feed Page ────────────────────────────────────────────────────────────────
export default function Feed() {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [activeSort, setActiveSort] = useState<SortOption>("trending");
  const [activeRegion, setActiveRegion] = useState<Region>("all");
  const [realityIdea, setRealityIdea] = useState<PublicIdea | null>(null);
  type EnrichedIdeaFull = PublicIdea & {
    moodBadge?: string;
    coCreated?: boolean;
    isTwinGenerated?: boolean;
  };
  const [detailIdea, setDetailIdea] = useState<EnrichedIdeaFull | null>(null);
  const [showGlobalBanner, setShowGlobalBanner] = useState(() => {
    if (typeof sessionStorage !== "undefined") {
      return !sessionStorage.getItem("globalAwarenessShown");
    }
    return true;
  });
  const tagsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const dismissGlobalBanner = useCallback(() => {
    setShowGlobalBanner(false);
    sessionStorage.setItem("globalAwarenessShown", "1");
  }, []);

  const { data: backendIdeas, isLoading } = useListPublicIdeas(
    activeSort,
    activeTag === "all" ? undefined : activeTag,
    50,
  );
  const likeMutation = useLikeIdea();
  const remixMutation = useRemixIdea();
  const viewMutation = useIncrementView();

  type EnrichedIdea = PublicIdea & {
    moodBadge?: string;
    coCreated?: boolean;
    isTwinGenerated?: boolean;
  };

  const rawIdeas: EnrichedIdea[] = useMemo(() => {
    if (backendIdeas && backendIdeas.length > 0) return backendIdeas;
    if (activeTag === "all") return SEED_IDEAS;
    return SEED_IDEAS.filter((i) => i.category === activeTag);
  }, [backendIdeas, activeTag]);

  const sortedIdeas = useMemo(
    () => sortIdeas(rawIdeas, activeSort),
    [rawIdeas, activeSort],
  );

  // Feature 5: filter by region (visual-only simulation)
  const displayIdeas = useMemo(() => {
    if (activeRegion === "all") return sortedIdeas;
    if (activeRegion === "trending") return sortedIdeas.filter((_, i) => i < 4);
    if (activeRegion === "worldwide")
      return [...sortedIdeas].sort((a, b) => b.viralScore - a.viralScore);
    return sortedIdeas.filter((_, i) => getIdeaRegion(i) === activeRegion);
  }, [sortedIdeas, activeRegion]);

  const hotIdeas = useMemo(
    () => sortIdeas(SEED_IDEAS, "trending").slice(0, 3),
    [],
  );

  const handleLike = useCallback(
    (id: bigint) => {
      likeMutation.mutate(id, {
        onSuccess: () => {
          toast.success("+5 XP", {
            description: "You liked an idea!",
            className: "toast-xp",
            duration: 3000,
          });
        },
      });
    },
    [likeMutation],
  );

  const handleRemix = useCallback(
    (idea: PublicIdea) => {
      toast.success("+15 XP — Remix started!", {
        description: `Remixing "${idea.appName}"`,
        className: "toast-xp",
        duration: 3000,
      });
      remixMutation.mutate(idea.id);
      navigate({ to: "/builder/$id", params: { id: "new" } });
    },
    [remixMutation, navigate],
  );

  const handleView = useCallback(
    (id: bigint) => {
      viewMutation.mutate(id);
    },
    [viewMutation],
  );

  const handleOpenDetail = useCallback((idea: EnrichedIdeaFull) => {
    setDetailIdea(idea);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setDetailIdea(null);
  }, []);

  function handleRealityTest(idea: PublicIdea) {
    setRealityIdea(idea);
  }

  function handleRealityClose() {
    setRealityIdea(null);
    toast.success("Reality Test Complete! +20 XP 🌐", {
      description: "Your app survived 10,000 virtual users!",
      className: "toast-xp",
      duration: 4000,
    });
  }

  return (
    <Layout>
      <div className="min-h-screen" data-ocid="feed.page">
        {/* ── Header ── */}
        <section className="relative overflow-hidden bg-card border-b border-border/40 px-4 py-10 text-center">
          <div
            className="absolute -top-16 left-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.22 262 / 0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-8 right-1/4 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.28 50 / 0.14) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight gradient-hologram bg-clip-text text-transparent">
              🌍 Creator Universe Feed
            </h1>
            <p className="mt-3 text-muted-foreground font-body text-base md:text-lg">
              See what the world is creating. Remix anything. Become a legend.
            </p>
          </motion.div>
        </section>

        {/* ── Global Awareness Banner ── */}
        <AnimatePresence>
          {showGlobalBanner && (
            <GlobalAwarenessBanner onDismiss={dismissGlobalBanner} />
          )}
        </AnimatePresence>

        {/* ── Controls (category tags + sort) ── */}
        <section className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/30 px-4 py-3 space-y-3">
          <div
            ref={tagsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5"
            data-ocid="feed.tags_bar"
          >
            {TAGS.map((tag) => (
              <button
                key={tag.id}
                type="button"
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${activeTag === tag.id ? "bg-primary/20 border border-primary/70 text-primary shadow-[0_0_12px_oklch(var(--primary)/0.3)]" : "glass border border-border/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
                data-ocid={`feed.tag.${tag.id}`}
                onClick={() => setActiveTag(tag.id)}
              >
                {tag.label}
              </button>
            ))}
          </div>
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide"
            data-ocid="feed.sort_bar"
          >
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${activeSort === opt.id ? "bg-secondary/20 border border-secondary/60 text-secondary" : "text-muted-foreground hover:text-foreground"}`}
                data-ocid={`feed.sort.${opt.id}`}
                onClick={() => setActiveSort(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Feature 5: Global Region Filter Row ── */}
        <section className="px-4 pt-4 pb-1" data-ocid="feed.region_filter_bar">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {REGION_FILTERS.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`region-filter flex-shrink-0 text-sm font-semibold ${
                  activeRegion === r.id
                    ? "!border-primary/70 !bg-primary/15 text-primary shadow-[0_0_10px_oklch(var(--primary)/0.25)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid={`feed.region.${r.id}`}
                onClick={() => setActiveRegion(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Hot Right Now strip ── */}
        <section className="px-4 pt-3" data-ocid="feed.hot_strip">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">
            🔥 Hot Right Now
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {hotIdeas.map((idea, i) => (
              <HotCard key={String(idea.id)} idea={idea} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* ── Feed Grid ── */}
        <section className="px-4 py-6" data-ocid="feed.grid">
          {/* Auto-refresh indicator */}
          <div className="flex items-center justify-between mb-4">
            <AutoRefreshIndicator />
            {activeRegion === "worldwide" && (
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "oklch(0.62 0.25 280 / 0.12)",
                  border: "1px solid oklch(0.62 0.25 280 / 0.4)",
                  color: "oklch(0.42 0.22 280)",
                }}
              >
                🔥 Sorted by viral score
              </span>
            )}
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKELETON_KEYS.map((sk) => (
                <SkeletonCard key={sk} />
              ))}
            </div>
          ) : displayIdeas.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4 text-center"
              data-ocid="feed.empty_state"
            >
              <span className="text-5xl">🌌</span>
              <p className="text-xl font-display font-bold text-foreground">
                No ideas in this region yet
              </p>
              <p className="text-muted-foreground text-sm max-w-xs">
                Be the first to create and publish an idea here. The universe is
                empty — fill it!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayIdeas.map((idea, i) => (
                <React.Fragment key={String(idea.id)}>
                  <IdeaCard
                    idea={idea}
                    index={i}
                    region={getIdeaRegion(i)}
                    showViralBadge={activeRegion === "worldwide"}
                    onLike={handleLike}
                    onRemix={handleRemix}
                    onView={handleView}
                    onPublishReality={handleRealityTest}
                    onOpenDetail={handleOpenDetail}
                  />
                  {/* Feature 5: Intel Banner after first 3 cards */}
                  {i === 2 && (
                    <div
                      key={`intel-${String(idea.id)}`}
                      className="col-span-full"
                    >
                      <IntelBanner />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Feature 2: Reality Simulation Modal */}
      <AnimatePresence>
        {realityIdea && (
          <RealityModal idea={realityIdea} onClose={handleRealityClose} />
        )}
      </AnimatePresence>

      {/* Idea Detail Modal */}
      <AnimatePresence>
        {detailIdea && (
          <IdeaDetailModal
            idea={detailIdea}
            onClose={handleCloseDetail}
            onRemix={handleRemix}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
