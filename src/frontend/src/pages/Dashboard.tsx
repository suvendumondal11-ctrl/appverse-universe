import { Layout } from "@/components/layout/Layout";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowBadge } from "@/components/ui/GlowBadge";
import { HolographicText } from "@/components/ui/HolographicText";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateProject,
  useGenerate,
  useGetMyStats,
  useGetProfile,
  useListProjects,
  useListTemplates,
} from "@/hooks/useBackend";
import type { GenerateResult } from "@/hooks/useBackend";
import {
  type CreateProjectInput,
  type CreatorStats,
  MEMORY_IDEAS,
  type MemoryIdea,
  type Project,
  type Template,
  type UserProfile,
  formatTimestamp,
  getLevelFromXp,
  getLevelThresholds,
  getProjectStatusLabel,
} from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Bot,
  Brain,
  Check,
  CheckCircle,
  Clock,
  Compass,
  Flame,
  GitFork,
  Globe,
  Heart,
  Layers,
  Lightbulb,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Sparkles,
  Star,
  Tag,
  Trash2,
  TrendingUp,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Static keys ─────────────────────────────────────────────────────────────
const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];
const RING_KEYS = ["ring-0", "ring-1", "ring-2"];

// ─── Lucky Create & Magic Drop Data ──────────────────────────────────────────
type Rarity = "Common" | "Rare" | "Legendary";

interface MagicIdea {
  name: string;
  concept: string;
  features: string[];
  rarity: Rarity;
  attribution: string;
}

const LUCKY_IDEAS: MagicIdea[] = [
  {
    name: "MoodMarket",
    concept:
      "A marketplace that adapts product recommendations to your real-time emotional state, detected through text patterns.",
    features: [
      "Emotion-aware recommendation engine",
      "Live mood dashboard",
      "Smart cart that adjusts to your vibe",
      "Daily mood trend report",
    ],
    rarity: "Rare",
    attribution: "Trending in emotional commerce + AI behavior modeling",
  },
  {
    name: "SkillDuel",
    concept:
      "Real-time head-to-head skill challenges where users bet XP on who can learn a topic faster.",
    features: [
      "Live 1v1 learning battles",
      "AI-generated quiz content",
      "XP wagering system",
      "Global leaderboard",
      "Spectator mode",
    ],
    rarity: "Common",
    attribution: "Gamification trends + EdTech viral mechanics",
  },
  {
    name: "DreamMapper",
    concept:
      "A journaling app that uses AI to find hidden patterns in your dreams and predict recurring themes.",
    features: [
      "Voice-to-text dream logging",
      "Pattern recognition AI",
      "Symbol dictionary",
      "Sleep quality correlation",
    ],
    rarity: "Rare",
    attribution: "Wellness trends + AI pattern analysis",
  },
  {
    name: "FoodLens",
    concept:
      "Point your camera at any meal — AI identifies every ingredient, calculates macros, and suggests healthier swaps.",
    features: [
      "Real-time food recognition",
      "Instant macro breakdown",
      "Healthier alternative suggestions",
      "Meal history tracker",
    ],
    rarity: "Common",
    attribution: "Health-tech + computer vision boom",
  },
  {
    name: "NeighbourOS",
    concept:
      "A hyperlocal OS for neighbourhoods — share resources, report issues, and organise events in a 1km radius.",
    features: [
      "Resource lending network",
      "Issue reporting to local council",
      "Event coordination",
      "Neighbour reputation system",
    ],
    rarity: "Legendary",
    attribution: "Community-tech gap in every city + civic engagement data",
  },
  {
    name: "VoiceCoach",
    concept:
      "An AI coach that listens to you speak for 60 seconds and gives a personalised confidence, clarity, and tone report.",
    features: [
      "Real-time speech analysis",
      "Confidence score",
      "Tone and clarity feedback",
      "Weekly progress tracking",
    ],
    rarity: "Common",
    attribution: "Professional development + voice AI breakthroughs",
  },
  {
    name: "PetTranslator",
    concept:
      "Analyse your pet's sounds and behaviour patterns to decode their emotional state and health signals.",
    features: [
      "Sound pattern analysis",
      "Behaviour mood map",
      "Health alert system",
      "Vet consultation triggers",
    ],
    rarity: "Rare",
    attribution: "Pet-tech market surge + AI audio classification",
  },
  {
    name: "TimeAuction",
    concept:
      "A freelance platform where experts auction 15-minute micro-consultations in real-time bidding sessions.",
    features: [
      "Live bidding system",
      "Expert scheduling",
      "Micro-session recordings",
      "Instant payments",
    ],
    rarity: "Legendary",
    attribution: "Gig economy evolution + premium knowledge monetisation",
  },
  {
    name: "SleepScore Arena",
    concept:
      "Gamified sleep competition — track your sleep quality and compete with friends for the best rest score.",
    features: [
      "Sleep tracking integration",
      "Weekly team competitions",
      "Sleep streak rewards",
      "Leaderboard with sleep tips",
    ],
    rarity: "Common",
    attribution: "Sleep health awareness + competitive wellness trends",
  },
  {
    name: "IdeaGPS",
    concept:
      "You enter a vague concept; AI maps the exact path from idea to validated product in 30 days.",
    features: [
      "Idea validation checklist",
      "Step-by-step roadmap generator",
      "Competitor radar",
      "Milestones with XP rewards",
    ],
    rarity: "Rare",
    attribution: "Startup methodology + AI planning tools",
  },
  {
    name: "ReputationShield",
    concept:
      "Monitor your digital footprint across social platforms and get instant alerts when your name appears online.",
    features: [
      "Cross-platform name monitoring",
      "Sentiment analysis",
      "Instant breach alerts",
      "Reputation score dashboard",
    ],
    rarity: "Common",
    attribution: "Digital privacy demand + personal brand awareness",
  },
  {
    name: "HabitForge",
    concept:
      "Build atomic habits through micro-commitments — 2-minute daily actions that compound into life-changing routines.",
    features: [
      "Micro-habit builder",
      "Streak fire system",
      "Social accountability groups",
      "Monthly transformation report",
    ],
    rarity: "Common",
    attribution: "Behavioural science + habit-forming app popularity",
  },
  {
    name: "GlobalMenu",
    concept:
      "Every day, AI curates a dish from a random country. Users cook it, share a photo, and earn cultural XP.",
    features: [
      "Daily global dish discovery",
      "Step-by-step recipe with video",
      "Photo challenge upload",
      "Cultural knowledge badges",
    ],
    rarity: "Rare",
    attribution: "Food content virality + cultural discovery trends",
  },
  {
    name: "FutureLetters",
    concept:
      "Write a letter to your future self — AI predicts how likely you are to achieve each goal you mention.",
    features: [
      "Time-locked letter vault",
      "AI goal probability scoring",
      "Reminder delivery on your chosen future date",
      "Reflection insights",
    ],
    rarity: "Legendary",
    attribution: "Self-growth market + AI predictive analytics",
  },
  {
    name: "CrowdFix",
    concept:
      "Local residents collectively fund and track the repair of broken public infrastructure in their city.",
    features: [
      "Issue photo reporting",
      "Community crowdfunding",
      "Council escalation tools",
      "Fix verification system",
    ],
    rarity: "Rare",
    attribution: "Civic tech opportunity + community funding models",
  },
];

const DAILY_DROP_IDEA: MagicIdea = {
  name: "NeighbourOS",
  concept:
    "A hyperlocal operating system for your neighbourhood — share resources, organise events, and connect with the 50 people closest to you.",
  features: [
    "Resource lending & borrowing network",
    "Hyperlocal event coordination",
    "Anonymous issue reporting to councils",
    "Neighbour reputation & trust scores",
    "Emergency alert broadcast to 1km radius",
  ],
  rarity: "Legendary",
  attribution:
    "Today's AI prediction — community-tech is the most underserved gap in every city on Earth.",
};

const RARITY_CONFIG: Record<
  Rarity,
  { label: string; glow: string; badge: string; border: string }
> = {
  Common: {
    label: "Common",
    glow: "oklch(0.55 0.01 0 / 0.25)",
    badge: "bg-muted/50 text-muted-foreground border-border/50",
    border: "border-border/40",
  },
  Rare: {
    label: "✦ Rare",
    glow: "oklch(0.65 0.28 308 / 0.4)",
    badge:
      "bg-violet-500/20 text-violet-600 border-violet-400/40 dark:text-violet-300",
    border: "border-violet-400/35",
  },
  Legendary: {
    label: "🌟 Legendary",
    glow: "rgba(251,191,36,0.45)",
    badge:
      "bg-amber-400/20 text-amber-600 border-amber-400/50 dark:text-amber-300",
    border: "border-amber-400/40",
  },
};

function getRandomIdea(): MagicIdea {
  return LUCKY_IDEAS[Math.floor(Math.random() * LUCKY_IDEAS.length)];
}

function useMagicCountdown(): string {
  const [time, setTime] = useState(() => {
    const now = new Date();
    const midnight = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1),
    );
    return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const midnight = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1),
      );
      const secs = Math.max(
        0,
        Math.floor((midnight.getTime() - now.getTime()) / 1000),
      );
      setTime(secs);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// ─── Daily challenges (7, cycle by day-of-week) ───────────────────────────────
const DAILY_CHALLENGES = [
  "Mission: Build a social app where friends compete in real-time challenges — first to 100 users wins.",
  "Mission: Design a fitness tracker that makes skipping a workout feel like losing a life in a game.",
  "Mission: Create a local marketplace that turns your neighbourhood into a thriving mini-economy.",
  "Mission: Build a language learning game so addictive people forget they're actually studying.",
  "Mission: Design a mental wellness app that makes journaling feel like unlocking daily achievements.",
  "Mission: Create a music collab platform where strangers co-produce hits across the globe.",
  "Mission: Build a smart recipe app that turns whatever's in your fridge into a Michelin-star suggestion.",
];

function getTodayChallenge(): string {
  const dayOfWeek = new Date().getDay();
  return DAILY_CHALLENGES[dayOfWeek % DAILY_CHALLENGES.length];
}

// ─── Mock activity feed ───────────────────────────────────────────────────────
interface ActivityItem {
  id: string;
  icon: string;
  text: string;
  time: string;
  type: "create" | "like" | "remix" | "level" | "join";
}

const ACTIVITY_FEED: ActivityItem[] = [
  {
    id: "act-create",
    icon: "💡",
    text: "You created FitQuest Pro",
    time: "2h ago",
    type: "create",
  },
  {
    id: "act-like",
    icon: "❤️",
    text: "Your idea received 5 likes",
    time: "1d ago",
    type: "like",
  },
  {
    id: "act-remix",
    icon: "🔀",
    text: "Arjun M. remixed your idea",
    time: "2d ago",
    type: "remix",
  },
  {
    id: "act-level",
    icon: "⚡",
    text: "Level up! You reached Builder",
    time: "3d ago",
    type: "level",
  },
  {
    id: "act-join",
    icon: "🏆",
    text: "You joined the Creator Universe",
    time: "7d ago",
    type: "join",
  },
];

const ACTIVITY_TYPE_COLORS: Record<ActivityItem["type"], string> = {
  create: "bg-primary/15 text-primary border-primary/25",
  like: "bg-destructive/15 text-destructive border-destructive/25",
  remix: "bg-secondary/15 text-secondary border-secondary/25",
  level: "bg-accent/15 text-accent border-accent/25",
  join: "bg-muted/40 text-muted-foreground border-border/30",
};

// ─── Mock data ────────────────────────────────────────────────────────────────
const MOCK_PROJECTS: Project[] = [
  {
    id: 1n,
    owner: { toString: () => "user1" },
    name: "AI Chat Assistant",
    description:
      "Real-time conversational AI with context memory and multi-turn dialogue.",
    tags: ["ai", "chat"],
    status: { active: null },
    createdAt: BigInt(Date.now() - 7_200_000) * BigInt(1_000_000),
    updatedAt: BigInt(Date.now() - 7_200_000) * BigInt(1_000_000),
    featureList: ["OpenAI integration", "Chat history", "Multi-user support"],
  },
  {
    id: 2n,
    owner: { toString: () => "user1" },
    name: "Neural Analytics",
    description:
      "Deep-insight dashboard powered by ML data processing pipelines.",
    tags: ["analytics", "dashboard"],
    status: { deployed: null },
    createdAt: BigInt(Date.now() - 86_400_000) * BigInt(1_000_000),
    updatedAt: BigInt(Date.now() - 14_400_000) * BigInt(1_000_000),
    featureList: ["Real-time charts", "AI predictions", "Export reports"],
  },
  {
    id: 3n,
    owner: { toString: () => "user1" },
    name: "Image Gen Studio",
    description:
      "Generate stunning AI visuals from natural language text prompts.",
    tags: ["image", "generative-ai"],
    status: { draft: null },
    createdAt: BigInt(Date.now() - 172_800_000) * BigInt(1_000_000),
    updatedAt: BigInt(Date.now() - 86_400_000) * BigInt(1_000_000),
    featureList: ["Stable Diffusion", "Style presets", "Batch generation"],
  },
  {
    id: 4n,
    owner: { toString: () => "user1" },
    name: "Predictive Engine v2",
    description:
      "ML pipeline for forecasting business metrics and market trends.",
    tags: ["ml", "forecasting"],
    status: { deployed: null },
    createdAt: BigInt(Date.now() - 259_200_000) * BigInt(1_000_000),
    updatedAt: BigInt(Date.now() - 3_600_000) * BigInt(1_000_000),
    featureList: ["Time series", "Auto-scaling", "REST API"],
  },
  {
    id: 5n,
    owner: { toString: () => "user1" },
    name: "Voice Command Hub",
    description:
      "Voice-first interaction layer with wake-word detection for any app.",
    tags: ["voice", "ai"],
    status: { active: null },
    createdAt: BigInt(Date.now() - 432_000_000) * BigInt(1_000_000),
    updatedAt: BigInt(Date.now() - 28_800_000) * BigInt(1_000_000),
    featureList: ["Wake word detection", "STT/TTS", "Command mapping"],
  },
];

const MOCK_TEMPLATES: Template[] = [
  {
    id: 1n,
    name: "AI SaaS Starter",
    category: "saas",
    description: "Full-stack SaaS template with auth, billing and AI features.",
    featureList: [
      "User authentication",
      "Stripe billing",
      "OpenAI integration",
      "Analytics dashboard",
    ],
  },
  {
    id: 2n,
    name: "E-Commerce Platform",
    category: "ecommerce",
    description:
      "Production-ready store with cart, payments and inventory management.",
    featureList: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Order management",
    ],
  },
  {
    id: 3n,
    name: "Real-Time Dashboard",
    category: "analytics",
    description:
      "Live data visualization with streaming updates and custom KPIs.",
    featureList: [
      "Live charts",
      "WebSocket data",
      "Custom KPIs",
      "Alert system",
    ],
  },
];

const MOCK_STATS: CreatorStats = {
  userId: "user1",
  totalXp: 1234,
  level: "Creator",
  ideasGenerated: 12,
  totalLikes: 47,
  totalRemixes: 8,
  streak: 3,
};

// ─── Auto-Evolving System Data ───────────────────────────────────────────────
interface GlobalTrend {
  name: string;
  category: string;
  country: string;
  viral: number;
  rarity: Rarity;
}

const GLOBAL_TRENDING: GlobalTrend[] = [
  {
    name: "FitTrack AI",
    category: "Fitness",
    country: "🇯🇵 Japan",
    viral: 94,
    rarity: "Legendary",
  },
  {
    name: "MediBot",
    category: "Health",
    country: "🇺🇸 USA",
    viral: 87,
    rarity: "Rare",
  },
  {
    name: "EcoMap",
    category: "Environment",
    country: "🇩🇪 Germany",
    viral: 82,
    rarity: "Rare",
  },
  {
    name: "StudyBuddy",
    category: "Education",
    country: "🇮🇳 India",
    viral: 76,
    rarity: "Common",
  },
  {
    name: "LocalEats",
    category: "Food",
    country: "🇧🇷 Brazil",
    viral: 71,
    rarity: "Common",
  },
];

interface AiUpgradeSuggestion {
  appName: string;
  upgrade: string;
  reason: string;
}

const AI_SUGGESTIONS: AiUpgradeSuggestion[] = [
  {
    appName: "FitTrack Pro",
    upgrade: "Wearables & Health API Integration",
    reason: "Trending in 🇺🇸 USA and 🇯🇵 Japan",
  },
  {
    appName: "MindSpace App",
    upgrade: "Emotion AI Mood Tracking",
    reason: "Viral among Gen Z creators globally",
  },
  {
    appName: "EduFlow",
    upgrade: "Live Quiz & Leaderboard Mode",
    reason: "Top trending in 🇮🇳 India and 🇩🇪 Germany",
  },
];

// ─── Global Awareness Banner ──────────────────────────────────────────────────
function GlobalAwarenessBanner({
  onDismiss,
  onExplore,
}: { onDismiss: () => void; onExplore: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      data-ocid="dashboard.global_awareness_banner"
      className="relative overflow-hidden rounded-xl"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.30 0.18 290 / 0.92), oklch(0.28 0.22 200 / 0.88))",
        border: "1px solid oklch(0.65 0.28 280 / 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 40px oklch(0.55 0.25 280 / 0.2)",
      }}
    >
      {/* shimmer */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.15 200 / 0.3) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 4s ease-in-out infinite",
        }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 px-5 py-3.5">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <Globe
            className="h-4 w-4 text-cyan-300 shrink-0 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <p className="text-sm font-body text-white/90 leading-snug">
            <span className="font-semibold text-white">
              🌍 3 ideas are trending globally right now
            </span>
            {" — "}want to build one?
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onExplore}
            data-ocid="dashboard.global_awareness_banner.explore_button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border transition-smooth hover:opacity-90"
            style={{
              background: "oklch(0.65 0.25 280 / 0.4)",
              borderColor: "oklch(0.75 0.2 270 / 0.5)",
            }}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Explore Trends
          </button>
          <button
            type="button"
            onClick={onDismiss}
            data-ocid="dashboard.global_awareness_banner.dismiss_button"
            className="p-1.5 rounded-lg hover:bg-white/10 transition-smooth text-white/70 hover:text-white"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Live Sync Indicator ──────────────────────────────────────────────────────
function LiveSyncIndicator({ compact = false }: { compact?: boolean }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-flex">
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        data-ocid="dashboard.live_sync_indicator"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border cursor-default"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        style={{
          background: "oklch(0.85 0.18 145 / 0.12)",
          borderColor: "oklch(0.72 0.2 145 / 0.35)",
          color: "oklch(0.40 0.15 145)",
        }}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: "oklch(0.65 0.22 145)" }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ background: "oklch(0.50 0.18 145)" }}
          />
        </span>
        {compact ? (
          <span className="hidden sm:inline">Live</span>
        ) : (
          <>
            <RefreshCw className="h-3 w-3" />
            Live · Syncing global trends
          </>
        )}
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            data-ocid="dashboard.live_sync_indicator.tooltip"
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
            style={{
              background: "oklch(0.10 0.01 0 / 0.92)",
              border: "1px solid oklch(0.65 0.22 145 / 0.6)",
              boxShadow: "0 0 14px oklch(0.65 0.22 145 / 0.35)",
              color: "oklch(0.92 0 0)",
            }}
          >
            Syncing with 847 live data sources worldwide
            {/* Arrow */}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 -mt-px block"
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "5px solid oklch(0.65 0.22 145 / 0.6)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Trending Now Section ─────────────────────────────────────────────────────
function TrendingNowSection({ onRemix }: { onRemix: (name: string) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="trending-now-section"
      data-ocid="dashboard.trending_now_section"
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Trending Now 🌍
          </h2>
          <p className="text-sm text-muted-foreground font-body mt-0.5">
            What the world is building right now
          </p>
        </div>
        <LiveSyncIndicator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {GLOBAL_TRENDING.map((item, i) => {
          const rc = RARITY_CONFIG[item.rarity];
          const isLegendary = item.rarity === "Legendary";
          const isRare = item.rarity === "Rare";
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.38, ease: "easeOut" }}
              data-ocid={`dashboard.trending_card.${i + 1}`}
              className="relative rounded-2xl overflow-hidden group"
              style={{
                boxShadow: isLegendary
                  ? "0 0 28px rgba(251,191,36,0.3)"
                  : isRare
                    ? "0 0 20px oklch(0.65 0.28 308 / 0.25)"
                    : undefined,
                border: `1px solid ${isLegendary ? "rgba(251,191,36,0.35)" : isRare ? "oklch(0.65 0.28 308 / 0.3)" : "oklch(var(--border) / 0.5)"}`,
                background: isLegendary
                  ? "linear-gradient(135deg, rgba(251,191,36,0.06), oklch(var(--card)/0.9), rgba(245,158,11,0.04))"
                  : isRare
                    ? "linear-gradient(135deg, oklch(0.65 0.28 308 / 0.06), oklch(var(--card)/0.9))"
                    : undefined,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top edge */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: isLegendary
                    ? "linear-gradient(90deg, transparent, rgba(251,191,36,0.9), transparent)"
                    : isRare
                      ? "linear-gradient(90deg, transparent, oklch(0.65 0.28 308 / 0.8), transparent)"
                      : "linear-gradient(90deg, transparent, oklch(var(--primary)/0.5), transparent)",
                }}
              />

              <div className="p-4 space-y-3">
                {/* Rank + rarity */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                    #{i + 1}
                    {/* Fire emoji with fire-glow animation */}
                    <span
                      className="streak-fire text-sm leading-none"
                      aria-hidden
                    >
                      🔥
                    </span>
                  </span>
                  <motion.span
                    animate={
                      item.rarity !== "Common"
                        ? {
                            boxShadow: [
                              `0 0 6px ${rc.glow}`,
                              `0 0 14px ${rc.glow}`,
                              `0 0 6px ${rc.glow}`,
                            ],
                          }
                        : {}
                    }
                    transition={
                      item.rarity !== "Common"
                        ? {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }
                        : {}
                    }
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${rc.badge}`}
                  >
                    {rc.label}
                  </motion.span>
                </div>

                {/* Name + country */}
                <div>
                  <p className="font-display font-semibold text-sm text-foreground leading-tight group-hover:text-primary transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.country} · {item.category}
                  </p>
                </div>

                {/* Viral score bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Viral Score</span>
                    <span className="font-bold text-foreground">
                      {item.viral}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.viral}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + i * 0.07,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: isLegendary
                          ? "linear-gradient(90deg, rgba(251,191,36,0.9), rgba(245,158,11,1))"
                          : isRare
                            ? "linear-gradient(90deg, oklch(0.65 0.28 308), oklch(0.72 0.22 280))"
                            : "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--secondary)))",
                      }}
                    />
                  </div>
                </div>

                {/* Remix button */}
                <GlassButton
                  variant={
                    isLegendary ? "holographic" : isRare ? "secondary" : "ghost"
                  }
                  size="sm"
                  className="w-full gap-1.5 text-xs font-semibold"
                  onClick={() => onRemix(item.name)}
                  data-ocid={`dashboard.trending_card.remix_button.${i + 1}`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Remix This Idea
                </GlassButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── AI Upgrade Suggestions Section ──────────────────────────────────────────
type SuggestionState = "idle" | "accepted" | "skipped";

function AiSuggestionsSection() {
  const [states, setStates] = useState<SuggestionState[]>(() =>
    AI_SUGGESTIONS.map(() => "idle" as SuggestionState),
  );

  function accept(i: number) {
    setStates((prev) => prev.map((s, idx) => (idx === i ? "accepted" : s)));
    toast.success("Your app just upgraded itself ⚡", {
      description: `${AI_SUGGESTIONS[i].upgrade} has been added.`,
    });
  }

  function skip(i: number) {
    setStates((prev) => prev.map((s, idx) => (idx === i ? "skipped" : s)));
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-ocid="dashboard.ai_suggestions_section"
    >
      <div className="mb-5">
        <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          AI Upgrade Suggestions ⚡
        </h2>
        <p className="text-sm text-muted-foreground font-body mt-0.5">
          Your apps are getting smarter
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {AI_SUGGESTIONS.map((s, i) => {
          const state = states[i];
          const isAccepted = state === "accepted";
          const isSkipped = state === "skipped";

          return (
            <motion.div
              key={s.appName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              data-ocid={`dashboard.ai_suggestion_card.${i + 1}`}
            >
              <GlassCard
                variant="elevated"
                padding="none"
                className={`h-full flex flex-col transition-smooth ${isSkipped ? "opacity-50" : ""} ${isAccepted ? "border-accent/40 shadow-[0_0_20px_oklch(var(--accent)/0.2)]" : "hover:shadow-[0_0_24px_oklch(var(--primary)/0.2)]"}`}
                style={
                  !isSkipped && !isAccepted
                    ? {
                        borderLeft: "4px solid oklch(var(--accent))",
                        boxShadow: isAccepted
                          ? "0 0 20px oklch(var(--accent)/0.2)"
                          : undefined,
                      }
                    : undefined
                }
              >
                <div className="h-[2px] w-full rounded-t-xl bg-gradient-to-r from-accent/60 via-primary/60 to-secondary/60" />
                <div className="p-4 flex flex-col gap-3 flex-1">
                  {/* Auto-upgraded badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border bg-amber-400/15 text-amber-600 border-amber-400/35">
                      ⚡ Auto-upgraded
                    </span>
                    {isAccepted && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2 py-0.5">
                        ✅ Confirmed
                      </span>
                    )}
                  </div>

                  {/* App name */}
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {s.appName}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Add{" "}
                      <span className="text-foreground font-medium">
                        {s.upgrade}
                      </span>
                    </p>
                  </div>

                  {/* Reason */}
                  <div className="flex items-start gap-2 rounded-lg border border-primary/15 bg-primary/5 px-3 py-2">
                    <Globe className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {s.reason}
                    </p>
                  </div>

                  {/* Action buttons */}
                  {!isAccepted && !isSkipped && (
                    <div className="flex gap-2 mt-auto">
                      <GlassButton
                        variant="accent"
                        size="sm"
                        className="flex-1 text-xs gap-1"
                        onClick={() => accept(i)}
                        data-ocid={`dashboard.ai_suggestion_card.accept_button.${i + 1}`}
                      >
                        <CheckCircle className="h-3.5 w-3.5" />
                        Accept
                      </GlassButton>
                      <GlassButton
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => skip(i)}
                        data-ocid={`dashboard.ai_suggestion_card.skip_button.${i + 1}`}
                      >
                        Skip
                      </GlassButton>
                    </div>
                  )}

                  {isAccepted && (
                    <div className="mt-auto flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Upgrade applied successfully
                    </div>
                  )}

                  {isSkipped && (
                    <p className="mt-auto text-xs text-muted-foreground">
                      Skipped
                    </p>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Reality Engine Pipeline Widget ──────────────────────────────────────────
const PIPELINE_STAGES = [
  { icon: "💭", label: "Idea", key: "idea" },
  { icon: "🎨", label: "Image", key: "image" },
  { icon: "🎬", label: "Motion", key: "motion" },
  { icon: "🌐", label: "Reality", key: "reality" },
] as const;

function RealityEnginePipeline({
  navigate,
}: { navigate: ReturnType<typeof useNavigate> }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-ocid="dashboard.reality_engine_widget"
      className="relative rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.04 280 / 0.95), oklch(0.12 0.03 260 / 0.98), oklch(0.14 0.05 300 / 0.9))",
        border: "1px solid oklch(0.65 0.25 280 / 0.3)",
        backdropFilter: "blur(16px)",
        boxShadow:
          "0 0 40px oklch(0.55 0.28 280 / 0.12), inset 0 0 60px oklch(0.55 0.25 280 / 0.04)",
      }}
    >
      {/* Top neon edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.65 0.28 280 / 0.9), oklch(0.72 0.25 200 / 0.7), oklch(0.78 0.28 50 / 0.6), transparent)",
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute -top-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.55 0.28 280 / 0.08)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.75 0.28 50 / 0.06)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
          {/* Left: title + subtext */}
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="font-display font-bold text-lg md:text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.65 0.28 280), oklch(0.75 0.28 50))",
                  backgroundSize: "300% 300%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reality Engine
              </motion.div>
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border"
                style={{
                  background: "oklch(0.72 0.22 262 / 0.15)",
                  borderColor: "oklch(0.72 0.22 262 / 0.4)",
                  color: "oklch(0.80 0.18 262)",
                }}
              >
                LIVE
              </span>
            </div>
            <p
              className="text-xs font-body"
              style={{ color: "oklch(0.65 0.04 280)" }}
            >
              Built by AI. Updated by the world 🌐
            </p>
          </div>

          {/* Center: pipeline stages */}
          <div className="flex items-center gap-0 flex-1 min-w-0">
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage.key} className="flex items-center flex-1 min-w-0">
                {/* Stage node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center gap-1 shrink-0"
                  data-ocid={`dashboard.reality_engine_widget.stage.${i + 1}`}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 8px oklch(0.65 0.25 280 / 0.3)",
                        "0 0 18px oklch(0.65 0.25 280 / 0.6)",
                        "0 0 8px oklch(0.65 0.25 280 / 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: "oklch(0.20 0.06 280 / 0.9)",
                      border: "1.5px solid oklch(0.65 0.25 280 / 0.5)",
                    }}
                  >
                    {stage.icon}
                  </motion.div>
                  <span
                    className="text-[10px] font-semibold font-body"
                    style={{ color: "oklch(0.72 0.12 280)" }}
                  >
                    {stage.label}
                  </span>
                </motion.div>

                {/* Connector line (not after last stage) */}
                {i < PIPELINE_STAGES.length - 1 && (
                  <div className="flex-1 mx-1.5 relative h-[2px] overflow-hidden rounded-full">
                    {/* Base gradient line */}
                    <div
                      className="absolute inset-0 stage-connector"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.55 0.25 280), oklch(0.72 0.25 200), oklch(0.78 0.28 50))",
                        backgroundSize: "200% 100%",
                      }}
                    />
                    {/* Flowing particle / energy dot */}
                    <motion.div
                      className="absolute top-0 h-full rounded-full"
                      style={{
                        width: "30%",
                        background:
                          "linear-gradient(90deg, transparent, oklch(0.95 0.1 0 / 0.9), transparent)",
                        filter: "blur(1px)",
                      }}
                      animate={{ x: ["-30%", "130%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: CTA button */}
          <div className="shrink-0">
            <motion.button
              type="button"
              onClick={() =>
                navigate({ to: "/builder/$id", params: { id: "new" } })
              }
              data-ocid="dashboard.reality_engine_widget.transform_button"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-bold text-sm overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.28 280), oklch(0.65 0.25 220))",
                boxShadow:
                  "0 0 20px oklch(0.55 0.28 280 / 0.45), 0 4px 12px oklch(0.55 0.25 280 / 0.3)",
                color: "white",
                border: "1px solid oklch(0.75 0.2 270 / 0.4)",
              }}
            >
              {/* Shimmer */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.1) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />
              <Zap className="h-4 w-4 relative z-10" />
              <span className="relative z-10 whitespace-nowrap">
                Transform an Idea ⚡
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const PRESET_TAGS = [
  "ai",
  "chat",
  "analytics",
  "dashboard",
  "ecommerce",
  "mobile",
  "voice",
  "ml",
  "image",
  "api",
  "saas",
  "iot",
];

type StatusVariantKey = "success" | "warning" | "muted";
const STATUS_CONFIG: Record<
  string,
  { label: string; variant: StatusVariantKey; pulse: boolean }
> = {
  active: { label: "Active", variant: "success", pulse: true },
  deployed: { label: "Deployed", variant: "warning", pulse: false },
  draft: { label: "Draft", variant: "muted", pulse: false },
};

// Category → suggested app type
const CATEGORY_APP_MAP: Record<string, string> = {
  ai: "AI Assistant",
  analytics: "Data Dashboard",
  dashboard: "Analytics Platform",
  saas: "SaaS Tool",
  chat: "Chat Platform",
  ml: "ML Pipeline",
  voice: "Voice App",
  mobile: "Mobile App",
  ecommerce: "Commerce Store",
  image: "Visual Studio",
};

function getPredictedAppType(projects: Project[]): string {
  if (projects.length === 0) return "Creator Platform";
  const tagCounts: Record<string, number> = {};
  for (const p of projects) {
    for (const tag of p.tags) {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    }
  }
  const topTag = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
  return (topTag && CATEGORY_APP_MAP[topTag]) ?? "Creator Platform";
}

// XP rank simulator
function getTopPercent(xp: number): string {
  if (xp >= 2000) return "Top 5%";
  if (xp >= 500) return "Top 15%";
  if (xp >= 100) return "Top 35%";
  return "Top 60%";
}

// ─── Feature 6: Prediction Banner ────────────────────────────────────────────
function PredictionBanner({
  projects,
  onDismiss,
  onStart,
}: {
  projects: Project[];
  onDismiss: () => void;
  onStart: (appType: string) => void;
}) {
  const appType = getPredictedAppType(projects);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      data-ocid="dashboard.prediction_banner"
    >
      <div className="prediction-banner relative overflow-hidden">
        {/* Holographic shimmer overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.25 280 / 0.4), oklch(0.72 0.22 262 / 0.3))",
            backgroundSize: "300% 300%",
            animation: "shimmer 6s ease-in-out infinite",
          }}
        />

        {/* Left: Brain/bulb icon */}
        <div
          className="prediction-icon flex items-center justify-center w-12 h-12 rounded-full relative z-10"
          style={{
            background: "oklch(0.62 0.25 280 / 0.25)",
            border: "1.5px solid oklch(0.72 0.22 262 / 0.5)",
          }}
        >
          <Brain className="h-6 w-6 text-foreground" />
          <span className="absolute -top-1 -right-1 text-xs animate-sparkle">
            ✨
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 relative z-10">
          <p className="text-xs text-foreground/60 font-body uppercase tracking-wider mb-0.5">
            🧠 Your Next Build — AI Prediction
          </p>
          <p className="text-sm font-display font-semibold text-foreground leading-snug">
            Based on your last 3 builds, you're ready to create a{" "}
            <span className="text-primary font-bold">{appType}</span> app. Your
            pattern screams it.{" "}
            <button
              type="button"
              onClick={() => onStart(appType)}
              className="underline underline-offset-2 hover:no-underline text-accent font-bold transition-colors"
              data-ocid="dashboard.prediction_banner.start_button"
            >
              Start now — I dare you. →
            </button>
          </p>
        </div>

        {/* CTA + Dismiss */}
        <div className="flex items-center gap-2 shrink-0 relative z-10">
          <GlassButton
            variant="holographic"
            size="sm"
            onClick={() => onStart(appType)}
            data-ocid="dashboard.prediction_banner.build_button"
            className="text-xs gap-1.5 hidden sm:flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Build It Now →
          </GlassButton>
          <button
            type="button"
            onClick={onDismiss}
            className="prediction-dismiss p-1.5 rounded-lg hover:bg-foreground/10"
            aria-label="Dismiss prediction"
            data-ocid="dashboard.prediction_banner.dismiss_button"
          >
            <X className="h-4 w-4 text-foreground/70" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero Banner ─────────────────────────────────────────────────────────────
function HeroBanner({
  profile,
  stats,
}: {
  profile: UserProfile | undefined;
  stats: CreatorStats;
}) {
  const name = profile?.displayName ?? "";
  const greeting = name
    ? `Back again, ${name}! Let's build. 🚀`
    : "You're back! Let's build something. 🚀";
  const thresholds = getLevelThresholds();
  const totalXpNum = Number(stats.totalXp);
  const level = getLevelFromXp(totalXpNum);
  const [minXp, maxXp] = thresholds[level];
  const xpInLevel = totalXpNum - minXp;
  const xpRange = maxXp === Number.POSITIVE_INFINITY ? 1000 : maxXp - minXp;
  const progress = Math.min(100, Math.round((xpInLevel / xpRange) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative rounded-2xl overflow-hidden"
      data-ocid="dashboard.hero_banner"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/8 to-accent/10 rounded-2xl" />
      <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <p className="text-muted-foreground text-sm font-body">
                  Your ideas are waiting — let's build something the world
                  hasn't seen yet.
                </p>
                <LiveSyncIndicator compact />
              </div>
              <HolographicText
                as="h1"
                className="text-2xl md:text-3xl lg:text-4xl"
              >
                {greeting}
              </HolographicText>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <LevelBadge level={stats.level} size="lg" />
              <div className="flex flex-col gap-1 min-w-[180px]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-body">
                    {Number(stats.totalXp).toLocaleString()} XP
                  </span>
                  <span className="text-muted-foreground font-body">
                    {maxXp === Number.POSITIVE_INFINITY
                      ? "∞"
                      : maxXp.toLocaleString()}{" "}
                    XP
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_oklch(var(--primary)/0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px oklch(var(--primary)/0)",
                "0 0 28px oklch(var(--primary)/0.5)",
                "0 0 0px oklch(var(--primary)/0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="rounded-xl self-start sm:self-auto"
          >
            <GlassButton
              variant="holographic"
              size="lg"
              className="gap-2.5 font-semibold"
              data-ocid="dashboard.hero.create_button"
              onClick={() =>
                document.getElementById("create-project-trigger")?.click()
              }
            >
              <Plus className="h-5 w-5" />
              Create New App
            </GlassButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Quick Stats Row ─────────────────────────────────────────────────────────
function QuickStatsRow({ stats }: { stats: CreatorStats }) {
  const items = [
    {
      emoji: "💡",
      label: "Ideas Generated",
      value: Number(stats.ideasGenerated),
      suffix: "",
      color: "from-primary/20 to-primary/5",
      glow: "oklch(var(--primary)/0.3)",
    },
    {
      emoji: "❤️",
      label: "Total Likes",
      value: Number(stats.totalLikes),
      suffix: "",
      color: "from-destructive/20 to-destructive/5",
      glow: "oklch(var(--destructive)/0.3)",
    },
    {
      emoji: "🔥",
      label: "Day Streak",
      value: Number(stats.streak),
      suffix: " days",
      color: "from-accent/20 to-accent/5",
      glow: "oklch(var(--accent)/0.3)",
    },
    {
      emoji: "👑",
      label: "Global Rank",
      value: getTopPercent(Number(stats.totalXp)),
      suffix: "",
      color: "from-secondary/20 to-secondary/5",
      glow: "oklch(var(--secondary)/0.3)",
    },
  ];

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      data-ocid="dashboard.quick_stats"
    >
      {items.map(({ emoji, label, value, suffix, color, glow }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
          data-ocid={`dashboard.stat_card.${i + 1}`}
        >
          <GlassCard
            variant="elevated"
            padding="md"
            className={`relative overflow-hidden group hover:shadow-[0_0_24px_${glow}] transition-smooth`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60`}
            />
            <div className="relative z-10 space-y-2">
              <div className="text-2xl">{emoji}</div>
              <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-none">
                {typeof value === "number"
                  ? `${value.toLocaleString()}${suffix}`
                  : value}
              </p>
              <p className="text-xs text-muted-foreground font-body">{label}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Daily Challenge Widget ───────────────────────────────────────────────────
function DailyChallengeWidget({ onAccept }: { onAccept: () => void }) {
  const challenge = getTodayChallenge();
  const day = new Date().getDay();
  const completedCount = 2 + (day % 3);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.45 }}
      data-ocid="dashboard.daily_challenge"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-accent/8 to-secondary/10" />
        <div className="absolute inset-0 border border-accent/30 rounded-2xl" />
        <motion.div
          className="absolute inset-0 border border-accent/20 rounded-2xl"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.01, 1] }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-display font-bold text-foreground text-base">
                Today's Mission
              </span>
            </div>
            <span className="text-xs text-accent bg-accent/10 rounded-full px-2.5 py-1 border border-accent/25 font-semibold">
              🔥 Live Now
            </span>
          </div>
          <p className="text-foreground font-body text-sm leading-relaxed">
            {challenge}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs text-accent font-semibold bg-accent/10 border border-accent/25 rounded-full px-2.5 py-1">
              <Zap className="h-3 w-3" />
              +100 XP — complete before midnight
            </span>
            <span className="text-xs text-muted-foreground">
              {completedCount}/3 creators finished this today
            </span>
          </div>
          <GlassButton
            variant="accent"
            size="sm"
            onClick={onAccept}
            data-ocid="dashboard.daily_challenge.accept_button"
            className="w-full sm:w-auto gap-2 font-semibold"
          >
            <Rocket className="h-4 w-4" />
            Accept Mission →
          </GlassButton>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Activity Feed ────────────────────────────────────────────────────────────
function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      data-ocid="dashboard.activity_feed"
    >
      <GlassCard variant="elevated" padding="md">
        <h2 className="font-display font-semibold text-base text-foreground mb-4 flex items-center gap-2">
          <Flame className="h-4 w-4 text-accent" />
          Recent Activity
        </h2>
        <div className="space-y-3">
          {ACTIVITY_FEED.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.35 }}
              className="flex items-start gap-3"
              data-ocid={`dashboard.activity_item.${i + 1}`}
            >
              <span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full border text-sm shrink-0 mt-0.5 ${ACTIVITY_TYPE_COLORS[item.type]}`}
              >
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-snug break-words">
                  {item.text}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Quick Actions ────────────────────────────────────────────────────────────
function QuickActions({
  onCreateClick,
  navigate,
}: {
  onCreateClick: () => void;
  navigate: ReturnType<typeof useNavigate>;
}) {
  const actions = [
    {
      emoji: "🚀",
      title: "Turn an Idea into Reality",
      desc: "Describe it. AI builds it. You own it.",
      variant: "holographic" as const,
      onClick: onCreateClick,
      ocid: "dashboard.quick_action.generate",
    },
    {
      emoji: "🌍",
      title: "See What's Trending",
      desc: "10,000+ creators building right now.",
      variant: "secondary" as const,
      onClick: () => navigate({ to: "/feed" }),
      ocid: "dashboard.quick_action.feed",
    },
    {
      emoji: "👑",
      title: "Check Your Global Rank",
      desc: "Are you in the top 10% yet?",
      variant: "ghost" as const,
      onClick: () => navigate({ to: "/leaderboard" }),
      ocid: "dashboard.quick_action.leaderboard",
    },
  ];

  return (
    <div data-ocid="dashboard.quick_actions">
      <h2 className="font-display font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
        <Compass className="h-5 w-5 text-primary" />
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map(({ emoji, title, desc, variant, onClick, ocid }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          >
            <button
              type="button"
              onClick={onClick}
              data-ocid={ocid}
              className={`w-full text-left rounded-2xl p-5 border transition-smooth group space-y-2 backdrop-blur-sm
                ${
                  variant === "holographic"
                    ? "border-primary/40 bg-primary/6 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_24px_oklch(var(--primary)/0.15)]"
                    : variant === "secondary"
                      ? "border-secondary/30 bg-secondary/5 hover:bg-secondary/8 hover:border-secondary/50"
                      : "border-border/50 bg-card hover:bg-muted/40 hover:border-border/70"
                }`}
            >
              <div className="text-3xl">{emoji}</div>
              <p className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {title}
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {desc}
              </p>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
const MOCK_CARD_META = [
  { xp: "+120 XP", likes: 14, remixes: 3 },
  { xp: "+85 XP", likes: 27, remixes: 7 },
  { xp: "+50 XP", likes: 6, remixes: 1 },
  { xp: "+200 XP", likes: 41, remixes: 12 },
  { xp: "+65 XP", likes: 9, remixes: 2 },
];

// Projects with pending auto-upgrades (by mock index)
const AUTO_UPGRADED_INDICES = new Set([0, 3]);

function ProjectCard({
  project,
  index,
  onClick,
}: { project: Project; index: number; onClick: () => void }) {
  const statusKey = getProjectStatusLabel(project.status);
  const status = STATUS_CONFIG[statusKey];
  const meta = MOCK_CARD_META[index % MOCK_CARD_META.length];
  const hasAutoUpgrade = AUTO_UPGRADED_INDICES.has(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: "easeOut" }}
      data-ocid={`project.item.${index + 1}`}
    >
      <GlassCard
        variant="elevated"
        padding="none"
        className={`group cursor-pointer hover:border-primary/40 hover:shadow-[0_0_32px_oklch(var(--primary)/0.2)] transition-smooth relative ${hasAutoUpgrade ? "border-amber-400/30" : ""}`}
        onClick={onClick}
      >
        {/* Auto-upgraded badge pinned to top-right corner */}
        {hasAutoUpgrade && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.06 + 0.3,
              type: "spring",
              stiffness: 380,
              damping: 20,
            }}
            className="absolute -top-2.5 -right-2.5 z-20"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 6px rgba(251,191,36,0.5)",
                  "0 0 16px rgba(251,191,36,0.9)",
                  "0 0 6px rgba(251,191,36,0.5)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border bg-amber-400/20 text-amber-600 border-amber-400/60 whitespace-nowrap"
              data-ocid={`project.auto_upgraded_badge.${index + 1}`}
            >
              ⚡ Auto-upgraded
            </motion.span>
          </motion.div>
        )}

        <div className="h-1.5 w-full gradient-hologram rounded-t-xl" />
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-foreground text-base leading-tight group-hover:text-primary transition-colors truncate min-w-0">
              {project.name}
            </h3>
            <GlowBadge variant={status.variant} pulse={status.pulse}>
              {status.label}
            </GlowBadge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary border border-primary/20 font-body"
                >
                  <Tag className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 text-accent font-semibold">
              <Zap className="h-3 w-3" />
              {meta.xp}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {meta.likes}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {meta.remixes} remixes
            </span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {formatTimestamp(project.updatedAt)}
            </span>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth">
              <GlassButton
                variant="ghost"
                size="sm"
                className="h-7 px-2.5 text-xs"
              >
                Open Builder
              </GlassButton>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Template Card ────────────────────────────────────────────────────────────
const TEMPLATE_ICONS = [Zap, Rocket, Layers] as const;
const TEMPLATE_POPULAR = [true, false, true];

function TemplateCard({
  template,
  selected,
  onSelect,
  index,
}: {
  template: Template;
  selected: boolean;
  onSelect: () => void;
  index: number;
}) {
  const Icon = TEMPLATE_ICONS[index % TEMPLATE_ICONS.length];
  const isPopular = TEMPLATE_POPULAR[index % TEMPLATE_POPULAR.length];

  return (
    <button
      type="button"
      onClick={onSelect}
      data-ocid={`create_modal.template.${index + 1}`}
      className={`w-full text-left rounded-xl p-4 border transition-smooth backdrop-blur-sm space-y-2 ${
        selected
          ? "border-primary/60 bg-primary/8 shadow-[0_0_16px_oklch(var(--primary)/0.15)]"
          : "border-border/50 bg-card hover:border-primary/30 hover:bg-muted/30"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`p-2 rounded-lg ${selected ? "bg-primary/20" : "bg-muted/40"}`}
        >
          <Icon
            className={`h-4 w-4 ${selected ? "text-primary" : "text-muted-foreground"}`}
          />
        </div>
        <span className="font-display font-semibold text-sm text-foreground flex-1 truncate">
          {template.name}
        </span>
        {isPopular && (
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 shrink-0">
            🌟 Popular
          </span>
        )}
        {selected && <CheckCircle className="h-4 w-4 text-primary shrink-0" />}
      </div>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {template.description}
      </p>
      <ul className="space-y-0.5">
        {template.featureList.slice(0, 3).map((feat) => (
          <li
            key={feat}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
    </button>
  );
}

// ─── Create Modal ─────────────────────────────────────────────────────────────
function CreateModal({
  templates,
  onClose,
  onSubmit,
  isPending,
}: {
  templates: Template[];
  onClose: () => void;
  onSubmit: (data: CreateProjectInput) => void;
  isPending: boolean;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function addCustomTag() {
    const t = customTag.trim().toLowerCase();
    if (t && !selectedTags.includes(t)) setSelectedTags((prev) => [...prev, t]);
    setCustomTag("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({
      name: name.trim(),
      description: description.trim(),
      tags: selectedTags,
      featureList: selectedTemplate?.featureList ?? [],
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="create_modal.dialog"
    >
      <motion.div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.96 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <GlassCard variant="glow" padding="lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <HolographicText as="h2" className="text-xl">
                Create New App
              </HolographicText>
              <p className="text-muted-foreground text-sm mt-0.5">
                Describe your idea — AI builds it instantly
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-ocid="create_modal.close_button"
              className="p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="app-name"
              >
                App Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="app-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Doctor Consultation Platform"
                data-ocid="create_modal.name_input"
                className="bg-card/50 border-border/40 focus:border-primary/60"
              />
            </div>
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="app-desc"
              >
                Description
              </label>
              <Textarea
                id="app-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What does your app do? What problem does it solve?"
                rows={3}
                data-ocid="create_modal.description_textarea"
                className="bg-card/50 border-border/40 focus:border-primary/60 resize-none"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Tags</p>
              <div className="flex flex-wrap gap-2">
                {PRESET_TAGS.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    data-ocid={`create_modal.tag.${tag}`}
                    className={`px-2.5 py-1 rounded-full text-xs border transition-smooth font-body ${
                      selectedTags.includes(tag)
                        ? "bg-primary/20 border-primary/50 text-primary"
                        : "bg-muted/30 border-border/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addCustomTag();
                    }
                  }}
                  placeholder="Add custom tag..."
                  data-ocid="create_modal.custom_tag_input"
                  className="h-8 text-xs bg-card/50 border-border/40"
                />
                <GlassButton
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={addCustomTag}
                  data-ocid="create_modal.add_tag_button"
                  className="h-8 shrink-0"
                >
                  Add
                </GlassButton>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Start from a template{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {templates.map((t, i) => (
                  <TemplateCard
                    key={t.id.toString()}
                    template={t}
                    index={i}
                    selected={selectedTemplate?.id === t.id}
                    onSelect={() =>
                      setSelectedTemplate(
                        selectedTemplate?.id === t.id ? null : t,
                      )
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <GlassButton
                type="button"
                variant="secondary"
                onClick={onClose}
                data-ocid="create_modal.cancel_button"
              >
                Cancel
              </GlassButton>
              <GlassButton
                type="submit"
                variant="holographic"
                size="lg"
                loading={isPending}
                disabled={!name.trim()}
                data-ocid="create_modal.submit_button"
                className="min-w-[140px]"
              >
                <Sparkles className="h-4 w-4" />
                Build with AI
              </GlassButton>
            </div>
          </form>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

// ─── Memory Category Colors ───────────────────────────────────────────────────
const CATEGORY_NEON: Record<string, { badge: string; bar: string }> = {
  Health: {
    badge:
      "bg-emerald-500/15 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
    bar: "from-emerald-500 to-teal-500",
  },
  Education: {
    badge: "bg-blue-500/15 text-blue-600 border-blue-500/30 dark:text-blue-400",
    bar: "from-blue-500 to-cyan-500",
  },
  Business: {
    badge:
      "bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400",
    bar: "from-amber-500 to-orange-500",
  },
  Entertainment: {
    badge:
      "bg-purple-500/15 text-purple-600 border-purple-500/30 dark:text-purple-400",
    bar: "from-purple-500 to-pink-500",
  },
  Lifestyle: {
    badge: "bg-rose-500/15 text-rose-600 border-rose-500/30 dark:text-rose-400",
    bar: "from-rose-500 to-red-500",
  },
  Environment: {
    badge:
      "bg-green-500/15 text-green-700 border-green-500/30 dark:text-green-400",
    bar: "from-green-500 to-emerald-600",
  },
};

function getCategoryStyle(cat: string) {
  return (
    CATEGORY_NEON[cat] ?? {
      badge: "bg-primary/10 text-primary border-primary/25",
      bar: "from-primary to-secondary",
    }
  );
}

function formatMemoryAge(date: Date): string {
  const diff = Date.now() - date.getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

// ─── AI Next Build Predictions ────────────────────────────────────────────────
interface NextBuildSuggestion {
  emoji: string;
  category: string;
  title: string;
  description: string;
  confidence: number;
}

const NEXT_BUILD_SUGGESTIONS: NextBuildSuggestion[] = [
  {
    emoji: "🏋️",
    category: "Health",
    title: "Group Fitness Challenge App",
    description:
      "Let friends compete in 30-day body transformation challenges with AI coaching.",
    confidence: 88,
  },
  {
    emoji: "🎓",
    category: "Education",
    title: "AI Flashcard Battle Game",
    description:
      "Turn any subject into a real-time multiplayer quiz duel with adaptive difficulty.",
    confidence: 74,
  },
  {
    emoji: "🌿",
    category: "Environment",
    title: "Carbon Footprint Tracker",
    description:
      "Gamify daily eco choices and reward users who hit green milestones.",
    confidence: 61,
  },
];

// ─── Memory Card ──────────────────────────────────────────────────────────────
function MemoryCard({
  idea,
  index,
  onRebuild,
}: { idea: MemoryIdea; index: number; onRebuild: () => void }) {
  const style = getCategoryStyle(idea.category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
      className="flex-shrink-0 w-64 snap-start"
      data-ocid={`dashboard.memory_card.${index + 1}`}
    >
      <GlassCard
        variant="elevated"
        padding="none"
        className="h-full flex flex-col hover:border-primary/40 hover:shadow-[0_0_24px_oklch(var(--primary)/0.18)] transition-smooth group"
      >
        <div className="h-1 w-full rounded-t-xl bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60" />
        <div className="p-4 flex flex-col gap-3 flex-1">
          {/* Category badge */}
          <span
            className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${style.badge}`}
          >
            {idea.category}
          </span>

          {/* Prompt */}
          <p className="text-sm text-foreground font-body leading-snug line-clamp-2 flex-1">
            {idea.prompt}
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0" />
              {formatMemoryAge(idea.timestamp)}
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-accent shrink-0" />
              {idea.cloneCount} rebuilds
            </span>
          </div>

          {/* Rebuild button */}
          <GlassButton
            variant="secondary"
            size="sm"
            className="w-full gap-1.5 text-xs font-semibold"
            onClick={onRebuild}
            data-ocid={`dashboard.memory_card.rebuild_button.${index + 1}`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Rebuild This Idea
          </GlassButton>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Idea Memory Section ──────────────────────────────────────────────────────
function IdeaMemorySection({
  onNavigateBuilder,
}: { onNavigateBuilder: (prompt: string) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-ocid="dashboard.idea_memory_section"
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🧠</span>
            <h2 className="font-display font-bold text-xl text-foreground">
              Your Idea Memory
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-body">
            The more you build, the smarter your AI gets — every idea is saved
            and learned from.
          </p>
        </div>
        <GlowBadge variant="success" pulse>
          {MEMORY_IDEAS.length} saved
        </GlowBadge>
      </div>

      {/* Horizontal scrollable carousel */}
      <div className="relative">
        {/* Fade edge right */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide">
          {MEMORY_IDEAS.slice(0, 6).map((idea, i) => (
            <MemoryCard
              key={idea.id}
              idea={idea}
              index={i}
              onRebuild={() => {
                onNavigateBuilder(idea.prompt);
                toast.success("+50 XP! Rebuilding idea ✨", {
                  description: `${idea.prompt.slice(0, 60)}...`,
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* AI Predicts Your Next Build panel */}
      <div className="mt-8" data-ocid="dashboard.ai_predict_panel">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🔮</span>
          <h3 className="font-display font-semibold text-lg text-foreground">
            AI Predicts Your Next Build
          </h3>
          <span className="text-xs bg-primary/10 text-primary border border-primary/25 rounded-full px-2.5 py-0.5 font-semibold ml-1">
            Beta
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-5 font-body">
          Based on your build history, these are the ideas your AI thinks you'll
          love next.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NEXT_BUILD_SUGGESTIONS.map((s, i) => {
            const style = getCategoryStyle(s.category);
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                data-ocid={`dashboard.ai_predict_card.${i + 1}`}
              >
                <GlassCard
                  variant="elevated"
                  padding="none"
                  className="h-full flex flex-col hover:border-primary/40 hover:shadow-[0_0_24px_oklch(var(--primary)/0.15)] transition-smooth group"
                >
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    {/* Emoji + category */}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{s.emoji}</span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${style.badge}`}
                      >
                        {s.category}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div className="flex-1 space-y-1.5">
                      <p className="font-display font-semibold text-sm text-foreground leading-snug">
                        {s.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    {/* Confidence bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-muted-foreground font-body">
                          AI Confidence
                        </span>
                        <span className="font-semibold text-foreground">
                          {s.confidence}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.confidence}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.2 + i * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${style.bar}`}
                        />
                      </div>
                    </div>

                    {/* Start Building CTA */}
                    <GlassButton
                      variant="holographic"
                      size="sm"
                      className="w-full gap-1.5 text-xs font-semibold mt-auto"
                      onClick={() => {
                        onNavigateBuilder(s.title);
                        toast.success(`Starting: ${s.title} 🚀`, {
                          description: "AI is setting up your workspace...",
                        });
                      }}
                      data-ocid={`dashboard.ai_predict_card.start_button.${i + 1}`}
                    >
                      <Rocket className="h-3.5 w-3.5" />
                      Start Building →
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Lucky Idea Modal ─────────────────────────────────────────────────────────
function LuckyIdeaModal({
  idea,
  onClose,
  onBuild,
}: {
  idea: MagicIdea;
  onClose: () => void;
  onBuild: () => void;
}) {
  const rarity = RARITY_CONFIG[idea.rarity];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="lucky_modal.dialog"
    >
      <motion.div
        className="absolute inset-0 bg-background/75 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.94 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Legendary outer glow */}
        {idea.rarity === "Legendary" && (
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,191,36,0.5), rgba(245,158,11,0.2), rgba(251,191,36,0.4))",
              filter: "blur(1px)",
            }}
          />
        )}
        {idea.rarity === "Rare" && (
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.28 308 / 0.5), oklch(0.55 0.24 290 / 0.2), oklch(0.65 0.28 308 / 0.4))",
              filter: "blur(1px)",
            }}
          />
        )}

        <div className="relative backdrop-blur-xl bg-card/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Shimmer header strip */}
          <div
            className="h-1 w-full"
            style={{
              background:
                idea.rarity === "Legendary"
                  ? "linear-gradient(90deg, rgba(251,191,36,0.8), rgba(245,158,11,1), rgba(251,191,36,0.8))"
                  : idea.rarity === "Rare"
                    ? "linear-gradient(90deg, oklch(0.65 0.28 308 / 0.8), oklch(0.72 0.22 280), oklch(0.65 0.28 308 / 0.8))"
                    : "linear-gradient(90deg, oklch(var(--primary)/0.6), oklch(var(--secondary)/0.8), oklch(var(--primary)/0.6))",
            }}
          />

          <div className="p-6 space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${rarity.badge}`}
                    style={
                      idea.rarity !== "Common"
                        ? { boxShadow: `0 0 10px ${rarity.glow}` }
                        : undefined
                    }
                  >
                    {rarity.label}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    AI Lucky Pick
                  </span>
                </div>
                <HolographicText as="h2" className="text-xl leading-tight">
                  {idea.name}
                </HolographicText>
              </div>
              <button
                type="button"
                onClick={onClose}
                data-ocid="lucky_modal.close_button"
                className="p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground shrink-0"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Concept */}
            <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-1.5">
                💡 Concept
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {idea.concept}
              </p>
            </div>

            {/* Features */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-2.5">
                ⚡ Key Features
              </p>
              <ul className="space-y-2">
                {idea.features.map((feat, i) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 h-4 w-4 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                      style={{
                        background:
                          idea.rarity === "Legendary"
                            ? "rgba(251,191,36,0.2)"
                            : "oklch(var(--primary)/0.15)",
                        color:
                          idea.rarity === "Legendary"
                            ? "rgb(251,191,36)"
                            : "oklch(var(--primary))",
                        border:
                          idea.rarity === "Legendary"
                            ? "1px solid rgba(251,191,36,0.4)"
                            : "1px solid oklch(var(--primary)/0.3)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Luck attribution */}
            <div className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-2.5 flex items-start gap-2">
              <Brain className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
              <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                <span className="text-primary font-semibold">Smart Luck™:</span>{" "}
                {idea.attribution}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-1">
              <GlassButton
                variant="secondary"
                size="sm"
                onClick={onClose}
                data-ocid="lucky_modal.cancel_button"
                className="flex-1"
              >
                Maybe Later
              </GlassButton>
              <GlassButton
                variant="holographic"
                size="md"
                onClick={onBuild}
                data-ocid="lucky_modal.build_button"
                className="flex-[2] gap-2 font-semibold"
              >
                <Rocket className="h-4 w-4" />
                Start Building →
              </GlassButton>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Twin Latest Card ───────────────────────────────────────────────────────
const TWIN_IDEAS: MagicIdea[] = [
  {
    name: "NeuroScheduler",
    concept:
      "An AI calendar that learns your energy levels and auto-schedules deep work, meetings, and breaks at your peak cognitive windows.",
    features: [
      "Energy curve detection from historical patterns",
      "Auto-blocking deep work sessions before 10am",
      "Smart rescheduling when your stress spikes",
    ],
    rarity: "Legendary",
    attribution: "Trending in productivity AI + biometric scheduling research",
  },
  {
    name: "SocialLens",
    concept:
      "Overlay real-time reputation and mutual-connection data on anyone you meet — powered by public social graphs.",
    features: [
      "Cross-platform profile aggregation",
      "Shared-connection graph visualiser",
      "Privacy-safe public signal scoring",
    ],
    rarity: "Rare",
    attribution: "Web3 identity trends + professional networking demand",
  },
  {
    name: "SkillPassport",
    concept:
      "A portable, verifiable record of every skill you've learned — accepted by employers worldwide as a living CV.",
    features: [
      "Blockchain-backed skill verification",
      "Auto-updated from courses and projects",
      "One-tap share to LinkedIn / recruiters",
    ],
    rarity: "Rare",
    attribution: "Future-of-work shifts + verifiable credentials boom",
  },
  {
    name: "EcoChain",
    concept:
      "Track the full carbon journey of every product you buy — from factory to your door — with green alternatives suggested.",
    features: [
      "Barcode scanner + supply chain lookup",
      "CO\u2082 footprint dashboard",
      "Green swap recommendations with price diff",
    ],
    rarity: "Common",
    attribution: "Sustainability consumer demand + ESG data APIs",
  },
  {
    name: "RealityAudit",
    concept:
      "Fact-check any claim in real time as you browse — highlights misinformation with source confidence scores.",
    features: [
      "Browser extension + mobile reader mode",
      "Multi-source credibility scoring",
      "One-tap corrections with trusted citations",
    ],
    rarity: "Legendary",
    attribution: "Media literacy crisis + AI fact-checking breakthroughs",
  },
  {
    name: "MindMirror",
    concept:
      "A journaling AI that reflects your thoughts back as questions, helping you think deeper instead of just venting.",
    features: [
      "Socratic dialogue engine",
      "Pattern tracking across entries",
      "Weekly insight digest",
    ],
    rarity: "Common",
    attribution: "Mental wellness surge + conversational AI tools",
  },
  {
    name: "LiquidTeam",
    concept:
      "Build a startup team on-demand — match with co-founders, designers, and engineers by skill + availability in 48 hours.",
    features: [
      "Skill-based instant matching",
      "Project brief \u2192 team proposal in minutes",
      "Short-term collab contracts built in",
    ],
    rarity: "Rare",
    attribution: "Fractional work trends + startup formation acceleration",
  },
  {
    name: "SignalMap",
    concept:
      "A crowdsourced heatmap of every city's quality of life — noise, air, walkability, vibe — updated in real time by residents.",
    features: [
      "Anonymous resident signal reporting",
      "Live air and noise sensor integration",
      "Neighbourhood comparison dashboard",
    ],
    rarity: "Legendary",
    attribution: "Urban mobility + smart-city data explosion",
  },
];

function getTwinIdea(): MagicIdea {
  const idx = new Date().getDay() % TWIN_IDEAS.length;
  return TWIN_IDEAS[idx];
}

type TwinCardState = "visible" | "accepted" | "discarded";

function TwinLatestCard({
  navigate,
}: { navigate: ReturnType<typeof useNavigate> }) {
  const [state, setState] = useState<TwinCardState>("visible");
  const idea = useMemo(() => getTwinIdea(), []);
  const rc = RARITY_CONFIG[idea.rarity];
  const isLegendary = idea.rarity === "Legendary";
  const isRare = idea.rarity === "Rare";

  function handleAccept() {
    setState("accepted");
    toast.success("\uD83E\uDD16 Twin idea published!", {
      description: `"${idea.name}" is now live on your profile.`,
    });
  }

  function handleRemix() {
    navigate({ to: "/builder/$id", params: { id: "new" } });
    toast.success("Opening builder with Twin's idea \u2728", {
      description: idea.concept.slice(0, 60),
    });
  }

  function handleDiscard() {
    setState("discarded");
  }

  const neonDot = isLegendary
    ? "rgba(251,191,36,0.9)"
    : isRare
      ? "oklch(0.65 0.28 308)"
      : "oklch(var(--primary))";

  const neonDotGlow1 = isLegendary
    ? "rgba(251,191,36,0.4)"
    : isRare
      ? "oklch(0.65 0.28 308 / 0.4)"
      : "oklch(var(--primary)/0.3)";

  const neonDotGlow2 = isLegendary
    ? "rgba(251,191,36,0.8)"
    : isRare
      ? "oklch(0.65 0.28 308 / 0.7)"
      : "oklch(var(--primary)/0.6)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.45 }}
      data-ocid="dashboard.twin_latest_section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "oklch(0.65 0.22 145)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ background: "oklch(0.55 0.2 145)" }}
            />
          </span>
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Twin's Latest \u26A1
          </h2>
        </div>
        <span
          className="text-xs font-body"
          style={{ color: "oklch(0.55 0.18 145)" }}
        >
          Twin is active \u2022 Updated 2h ago
        </span>
      </div>

      <AnimatePresence mode="wait">
        {state === "visible" && (
          <motion.div
            key="twin-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30, scale: 0.97 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="twin-latest-card"
            data-ocid="dashboard.twin_latest_card"
          >
            <div
              className="h-[2px] w-full"
              style={{
                background: isLegendary
                  ? "linear-gradient(90deg, transparent, rgba(251,191,36,0.9), transparent)"
                  : isRare
                    ? "linear-gradient(90deg, transparent, oklch(0.65 0.28 308 / 0.8), transparent)"
                    : "linear-gradient(90deg, transparent, oklch(var(--primary)/0.5), transparent)",
              }}
            />

            <div className="p-5 md:p-6 space-y-4">
              {/* Header row */}
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 12px oklch(0.65 0.25 280 / 0.3)",
                      "0 0 24px oklch(0.65 0.25 280 / 0.6)",
                      "0 0 12px oklch(0.65 0.25 280 / 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{
                    background: "oklch(0.65 0.25 280 / 0.1)",
                    border: "1.5px dashed oklch(0.65 0.25 280 / 0.4)",
                  }}
                  aria-hidden
                >
                  \uD83D\uDC7B
                </motion.div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                      Your Twin Generated This
                    </p>
                    <span className="twin-ghost-badge">
                      \uD83D\uDC7B Auto-Generated
                    </span>
                    <span className="text-xs text-muted-foreground font-body">
                      2h ago
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <HolographicText as="h3" className="text-lg leading-tight">
                      {idea.name}
                    </HolographicText>
                    <motion.span
                      animate={
                        idea.rarity !== "Common"
                          ? {
                              boxShadow: [
                                `0 0 6px ${rc.glow}`,
                                `0 0 14px ${rc.glow}`,
                                `0 0 6px ${rc.glow}`,
                              ],
                            }
                          : {}
                      }
                      transition={
                        idea.rarity !== "Common"
                          ? {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }
                          : {}
                      }
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${rc.badge}`}
                    >
                      {rc.label}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Concept */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {idea.concept}
              </p>

              {/* Feature bullets with neon dots */}
              <ul className="space-y-2">
                {idea.features.slice(0, 3).map((feat, i) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <motion.span
                      animate={{
                        boxShadow: [
                          `0 0 4px ${neonDotGlow1}`,
                          `0 0 10px ${neonDotGlow2}`,
                          `0 0 4px ${neonDotGlow1}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                      style={{ background: neonDot }}
                    />
                    <span className="text-sm text-foreground/85 leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <motion.button
                  type="button"
                  onClick={handleAccept}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  data-ocid="dashboard.twin_latest_card.accept_button"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-display font-semibold text-sm transition-smooth"
                  style={{
                    background: "oklch(0.55 0.22 145 / 0.15)",
                    border: "1.5px solid oklch(0.55 0.22 145 / 0.5)",
                    color: "oklch(0.55 0.20 145)",
                    boxShadow: "0 0 16px oklch(0.55 0.22 145 / 0.2)",
                  }}
                >
                  <Check className="h-4 w-4" />
                  Accept & Publish
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleRemix}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  data-ocid="dashboard.twin_latest_card.remix_button"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-display font-semibold text-sm transition-smooth"
                  style={{
                    background: "oklch(0.65 0.28 308 / 0.12)",
                    border: "1.5px solid oklch(0.65 0.28 308 / 0.45)",
                    color: "oklch(0.65 0.28 308)",
                    boxShadow: "0 0 14px oklch(0.65 0.28 308 / 0.2)",
                  }}
                >
                  <GitFork className="h-4 w-4" />
                  Remix in Builder
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleDiscard}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  data-ocid="dashboard.twin_latest_card.discard_button"
                  className="sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-body text-sm transition-smooth"
                  style={{
                    background: "oklch(0.52 0.24 20 / 0.08)",
                    border: "1px solid oklch(0.52 0.24 20 / 0.3)",
                    color: "oklch(0.52 0.24 20)",
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Discard
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {state === "accepted" && (
          <motion.div
            key="twin-accepted"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            data-ocid="dashboard.twin_latest_card.success_state"
            className="twin-latest-card"
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4 text-center">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="oklch(0.55 0.22 145 / 0.2)"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="oklch(0.55 0.22 145)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M20 32l9 9 15-15"
                    stroke="oklch(0.55 0.22 145)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>
              <p className="font-display font-bold text-foreground text-base">
                \uD83E\uDD16 Twin idea published!
              </p>
              <p className="text-sm text-muted-foreground font-body">
                <span className="font-semibold text-foreground">
                  {idea.name}
                </span>{" "}
                is now live on your profile.
              </p>
            </div>
          </motion.div>
        )}

        {state === "discarded" && (
          <motion.div
            key="twin-discarded"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-ocid="dashboard.twin_latest_card.discarded_state"
            className="twin-latest-card"
          >
            <div className="p-5 flex items-center justify-center gap-2 text-center">
              <span className="text-lg">\u2728</span>
              <p className="text-sm text-muted-foreground font-body">
                Twin is learning your preference \u2728
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Daily Magic Drop ─────────────────────────────────────────────────────────
function DailyMagicDrop({ onTryDrop }: { onTryDrop: () => void }) {
  const countdown = useMagicCountdown();
  const idea = DAILY_DROP_IDEA;
  const rarity = RARITY_CONFIG[idea.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.45 }}
      data-ocid="dashboard.daily_magic_drop"
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          boxShadow: `0 0 40px ${rarity.glow}, 0 0 80px rgba(251,191,36,0.12)`,
        }}
      >
        {/* Animated gold border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,191,36,0.35), rgba(245,158,11,0.1), rgba(251,191,36,0.3))",
            padding: "1px",
          }}
        />
        <div className="absolute inset-0 border border-amber-400/35 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/8 via-card to-amber-400/5 rounded-2xl" />

        {/* Gold shimmer top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.9), rgba(245,158,11,1), rgba(251,191,36,0.9), transparent)",
          }}
        />

        <div className="relative z-10 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Left: icon + badge */}
            <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{
                  background: "rgba(251,191,36,0.15)",
                  border: "1.5px solid rgba(251,191,36,0.4)",
                  boxShadow: "0 0 16px rgba(251,191,36,0.3)",
                }}
              >
                ✨
              </motion.div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border whitespace-nowrap ${rarity.badge}`}
                style={{ boxShadow: `0 0 10px ${rarity.glow}` }}
              >
                {rarity.label}
              </span>
            </div>

            {/* Middle: content */}
            <div className="flex-1 min-w-0 space-y-2">
              <div>
                <p className="text-[11px] text-amber-400/80 uppercase tracking-widest font-body mb-0.5">
                  Today's Magic Drop ✨
                </p>
                <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                  {idea.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {idea.concept}
              </p>
              {/* Viral score */}
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span
                  className="flex items-center gap-1.5 font-semibold px-2.5 py-1 rounded-full border"
                  style={{
                    background: "rgba(251,191,36,0.12)",
                    borderColor: "rgba(251,191,36,0.35)",
                    color: "rgb(251,191,36)",
                  }}
                >
                  🔥 Viral Score: 98/100
                </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Resets in{" "}
                  <span
                    className="font-mono font-bold ml-0.5"
                    style={{ color: "rgb(251,191,36)" }}
                    data-ocid="dashboard.magic_drop.countdown"
                  >
                    {countdown}
                  </span>
                </span>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex sm:flex-col items-center gap-2 sm:items-end shrink-0">
              <GlassButton
                variant="holographic"
                size="sm"
                onClick={onTryDrop}
                data-ocid="dashboard.magic_drop.try_button"
                className="gap-1.5 font-semibold whitespace-nowrap"
                style={{ boxShadow: "0 0 16px rgba(251,191,36,0.25)" }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Try Today's Drop
              </GlassButton>
              <span className="text-[10px] text-muted-foreground text-center">
                Free for all creators
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Multi-AI Generator Section ──────────────────────────────────────────────
function MultiAiGeneratorSection() {
  const [prompt, setPrompt] = useState("Create a futuristic app idea");
  const [result, setResult] = useState<GenerateResult | null>(null);
  const generate = useGenerate();

  function handleGenerate() {
    if (!prompt.trim()) return;
    generate.mutate(
      { prompt: prompt.trim(), device: "mobile" },
      {
        onSuccess: (data) => {
          setResult(data);
        },
        onError: () => {
          toast.error("Generation failed", {
            description: "Please try again in a moment.",
          });
        },
      },
    );
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-ocid="dashboard.multi_ai_generator_section"
    >
      {/* Section header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <Brain className="h-5 w-5 text-primary" />
          <h2 className="font-display font-bold text-xl text-foreground">
            Multi-AI Generator
          </h2>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-primary/10 text-primary border-primary/25">
            🧠 Beta
          </span>
        </div>
        <p className="text-sm text-muted-foreground font-body mt-1">
          Powered by many AIs. Perfected by one ⚡
        </p>
      </div>

      {/* Input + button */}
      <div
        className="relative rounded-2xl overflow-hidden p-5 md:p-6 space-y-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.05 280 / 0.95), oklch(0.15 0.04 260 / 0.98))",
          border: "1px solid oklch(0.65 0.25 280 / 0.3)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 0 40px oklch(0.55 0.28 280 / 0.12)",
        }}
      >
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.28 280 / 0.9), oklch(0.72 0.28 190 / 0.7), transparent)",
          }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleGenerate();
            }}
            placeholder="Describe your app idea..."
            data-ocid="dashboard.multi_ai_generator.prompt_input"
            className="flex-1 h-12 text-sm font-body"
            style={{
              background: "oklch(0.12 0.03 280 / 0.8)",
              border: "1px solid oklch(0.65 0.2 280 / 0.35)",
              color: "oklch(0.92 0.02 280)",
            }}
          />
          <motion.button
            type="button"
            onClick={handleGenerate}
            disabled={generate.isPending || !prompt.trim()}
            data-ocid="dashboard.multi_ai_generator.generate_button"
            whileHover={
              !generate.isPending ? { scale: 1.02, y: -1 } : undefined
            }
            whileTap={!generate.isPending ? { scale: 0.98 } : undefined}
            className="relative h-12 px-6 rounded-xl font-display font-bold text-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden transition-all duration-200"
            style={{
              background: generate.isPending
                ? "oklch(0.45 0.2 280 / 0.8)"
                : "linear-gradient(135deg, oklch(0.55 0.28 280), oklch(0.65 0.25 220))",
              boxShadow: generate.isPending
                ? "none"
                : "0 0 24px oklch(0.55 0.28 280 / 0.5), 0 4px 16px oklch(0.55 0.25 280 / 0.3)",
              color: "white",
              border: "1px solid oklch(0.75 0.2 270 / 0.4)",
            }}
          >
            {/* Shimmer sweep on hover */}
            <span
              className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.15), transparent)",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              {generate.isPending ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  AI thinking...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4" />
                  Generate ⚡
                </>
              )}
            </span>
          </motion.button>
        </div>

        {/* Loading state */}
        <AnimatePresence>
          {generate.isPending && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              data-ocid="dashboard.multi_ai_generator.loading_state"
            >
              <div className="rounded-xl overflow-hidden space-y-2 pt-1">
                {(
                  [
                    { w: 100, delay: 0 },
                    { w: 85, delay: 0.2 },
                    { w: 70, delay: 0.4 },
                  ] as const
                ).map(({ w, delay }) => (
                  <motion.div
                    key={w}
                    className="h-3 rounded-full"
                    style={{
                      width: `${w}%`,
                      background: "oklch(0.65 0.22 280 / 0.2)",
                    }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{
                      duration: 1.4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error state */}
        <AnimatePresence>
          {generate.isError && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              data-ocid="dashboard.multi_ai_generator.error_state"
              className="text-xs text-destructive font-body"
            >
              ⚠️ Something went wrong — please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Result card */}
      <AnimatePresence>
        {result && !generate.isPending && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            data-ocid="dashboard.multi_ai_generator.result_card"
            className="mt-4 relative rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.16 0.06 280 / 0.97), oklch(0.14 0.04 240 / 0.98))",
              border: "1px solid oklch(0.60 0.22 280 / 0.35)",
              backdropFilter: "blur(16px)",
              boxShadow:
                "0 0 60px oklch(0.55 0.28 280 / 0.15), 0 8px 32px oklch(0.25 0.1 280 / 0.3)",
            }}
          >
            {/* Gradient top edge */}
            <div
              className="h-[2px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.28 280 / 0.8), oklch(0.72 0.28 190 / 0.7), oklch(0.80 0.22 80 / 0.6))",
              }}
            />

            <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 🤖 AI section */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="rounded-xl p-4 space-y-2"
                style={{
                  background: "oklch(0.55 0.28 280 / 0.1)",
                  border: "1px solid oklch(0.65 0.28 280 / 0.25)",
                  boxShadow: "0 0 20px oklch(0.55 0.28 280 / 0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <p
                    className="text-xs font-bold uppercase tracking-widest font-body"
                    style={{ color: "oklch(0.75 0.22 280)" }}
                  >
                    AI
                  </p>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed font-body">
                  {result.ai}
                </p>
              </motion.div>

              {/* 🌐 Trend section */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="rounded-xl p-4 space-y-2"
                style={{
                  background: "oklch(0.65 0.22 190 / 0.1)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                  boxShadow: "0 0 20px oklch(0.60 0.22 190 / 0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌐</span>
                  <p
                    className="text-xs font-bold uppercase tracking-widest font-body"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  >
                    Trend
                  </p>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed font-body">
                  {result.trend}
                </p>
              </motion.div>

              {/* ⚡ Lucky section */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="rounded-xl p-4 space-y-2"
                style={{
                  background: "oklch(0.80 0.22 80 / 0.08)",
                  border: "1px solid oklch(0.80 0.22 80 / 0.25)",
                  boxShadow: "0 0 20px oklch(0.75 0.22 80 / 0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <p
                    className="text-xs font-bold uppercase tracking-widest font-body"
                    style={{ color: "oklch(0.78 0.20 80)" }}
                  >
                    Lucky
                  </p>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed font-body">
                  {result.lucky}
                </p>
              </motion.div>
            </div>

            {/* Build CTA */}
            <div className="px-5 md:px-6 pb-5">
              <GlassButton
                variant="holographic"
                size="sm"
                data-ocid="dashboard.multi_ai_generator.build_idea_button"
                className="gap-2 text-xs font-semibold"
                onClick={() => {
                  toast.success("Opening builder ✨", {
                    description: "AI is setting up your workspace...",
                  });
                }}
              >
                <Rocket className="h-3.5 w-3.5" />
                Build This Idea →
              </GlassButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ onCreateClick }: { onCreateClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20 px-4 text-center"
      data-ocid="dashboard.empty_state"
    >
      <div className="relative mb-8">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 60px oklch(var(--primary)/0.2)",
              "0 0 100px oklch(var(--primary)/0.4)",
              "0 0 60px oklch(var(--primary)/0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-28 h-28 rounded-full gradient-hologram flex items-center justify-center"
        >
          <Sparkles className="h-12 w-12 text-foreground/80" />
        </motion.div>
        {RING_KEYS.map((key, i) => (
          <motion.div
            key={key}
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      <HolographicText as="h2" className="text-2xl mb-3">
        Your first app is 60 seconds away
      </HolographicText>
      <p className="text-muted-foreground max-w-sm mb-8 text-sm leading-relaxed">
        Describe any idea — no matter how half-baked. AI turns it into a full
        app concept with features, a business model, and a success forecast. For
        free. Right now.
      </p>
      <GlassButton
        variant="holographic"
        size="lg"
        onClick={onCreateClick}
        data-ocid="dashboard.empty_state.start_building_button"
        className="gap-2.5"
      >
        <Plus className="h-5 w-5" />
        Start Building
      </GlassButton>
    </motion.div>
  );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Lucky Create + Daily Magic Drop shared modal state
  const [luckyModalOpen, setLuckyModalOpen] = useState(false);
  const [currentIdea, setCurrentIdea] = useState<MagicIdea | null>(null);

  // Prediction banner state (session-persisted dismissal)
  const [showPrediction, setShowPrediction] = useState(() => {
    try {
      return sessionStorage.getItem("prediction-dismissed") !== "1";
    } catch {
      return true;
    }
  });

  const { data: backendProjects, isLoading } = useListProjects();
  const { data: backendTemplates } = useListTemplates();
  const { data: profile } = useGetProfile();
  const { data: rawStats } = useGetMyStats();
  const createProject = useCreateProject();

  const stats: CreatorStats = rawStats ?? MOCK_STATS;
  const projects: Project[] = isLoading
    ? MOCK_PROJECTS
    : (backendProjects ?? []);
  const templates: Template[] = backendTemplates?.length
    ? backendTemplates
    : MOCK_TEMPLATES;

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [projects, searchQuery]);

  function dismissPrediction() {
    setShowPrediction(false);
    try {
      sessionStorage.setItem("prediction-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  function handlePredictionStart(appType: string) {
    setShowPrediction(false);
    try {
      sessionStorage.setItem("prediction-dismissed", "1");
    } catch {
      /* ignore */
    }
    navigate({ to: "/builder/$id", params: { id: "new" } });
    toast.success(`Starting ${appType} builder! ✨`, {
      description: "AI is preparing your workspace...",
    });
  }

  function handleCreateSubmit(data: CreateProjectInput) {
    createProject.mutate(data, {
      onSuccess: (project) => {
        setShowCreateModal(false);
        toast.success("App created!", {
          description: `"${project.name}" is ready to build.`,
        });
        navigate({ to: "/builder/$id", params: { id: project.id.toString() } });
      },
      onError: () => {
        toast.error("Failed to create project", {
          description: "Please try again.",
        });
      },
    });
  }

  function handleChallengeAccept() {
    const challenge = getTodayChallenge();
    navigate({ to: "/builder/$id", params: { id: "new" } });
    toast.success("Challenge accepted! ⚡", { description: `"${challenge}"` });
  }

  function handleLuckyCreate() {
    const idea = getRandomIdea();
    setCurrentIdea(idea);
    setLuckyModalOpen(true);
  }

  function handleTryDailyDrop() {
    setCurrentIdea(DAILY_DROP_IDEA);
    setLuckyModalOpen(true);
  }

  function handleBuildIdea() {
    setLuckyModalOpen(false);
    navigate({ to: "/builder/$id", params: { id: "new" } });
    toast.success(`Starting: ${currentIdea?.name ?? "your idea"} 🚀`, {
      description: "AI is setting up your workspace...",
    });
  }

  const showEmpty = !isLoading && filteredProjects.length === 0;

  // Global Awareness Banner state
  const [showGlobalBanner, setShowGlobalBanner] = useState(true);

  function scrollToTrending() {
    document
      .getElementById("trending-now-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Layout>
      {/* Background ambient orbs */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-8" data-ocid="dashboard.page">
        {/* Global Awareness Banner */}
        <AnimatePresence>
          {showGlobalBanner && (
            <GlobalAwarenessBanner
              onDismiss={() => setShowGlobalBanner(false)}
              onExplore={() => {
                setShowGlobalBanner(false);
                scrollToTrending();
              }}
            />
          )}
        </AnimatePresence>

        {/* Hero Banner */}
        <HeroBanner profile={profile} stats={stats} />

        {/* Reality Engine Pipeline */}
        <RealityEnginePipeline navigate={navigate} />

        {/* Lucky Create Button — prominent CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          data-ocid="dashboard.lucky_create_section"
        >
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">
              🎲 Smart Luck Engine
            </p>
            <p className="text-sm text-foreground/80 font-body">
              Don't know what to build next? Let AI surprise you with a powerful
              idea — intelligently generated from global trends.
            </p>
          </div>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px oklch(var(--primary)/0)",
                "0 0 28px oklch(var(--primary)/0.55)",
                "0 0 0px oklch(var(--primary)/0)",
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="rounded-xl shrink-0"
          >
            <GlassButton
              variant="holographic"
              size="lg"
              onClick={handleLuckyCreate}
              data-ocid="dashboard.lucky_create_button"
              className="gap-2.5 font-bold text-base px-6"
            >
              <Zap className="h-5 w-5" />
              Lucky Create ⚡
            </GlassButton>
          </motion.div>
        </motion.div>

        {/* Daily Magic Drop */}
        <DailyMagicDrop onTryDrop={handleTryDailyDrop} />

        {/* Twin's Latest \u26A1 */}
        <TwinLatestCard navigate={navigate} />

        {/* Quick Stats */}
        <QuickStatsRow stats={stats} />

        {/* Trending Now — Auto-Evolving Live Data */}
        <TrendingNowSection
          onRemix={(name) => {
            navigate({ to: "/builder/$id", params: { id: "new" } });
            toast.success(`Remixing: ${name} 🔀`, {
              description: "Opening builder with this idea...",
            });
          }}
        />

        {/* Multi-AI Generator */}
        <MultiAiGeneratorSection />

        {/* AI Upgrade Suggestions */}
        <AiSuggestionsSection />

        {/* Challenge + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <DailyChallengeWidget onAccept={handleChallengeAccept} />
          </div>
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions
          onCreateClick={() => setShowCreateModal(true)}
          navigate={navigate}
        />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xs text-muted-foreground font-body">
              PROJECT LIBRARY
            </span>
          </div>
        </div>

        {/* Feature 6: Prediction Banner (above project list) */}
        <AnimatePresence>
          {showPrediction && !isLoading && (
            <PredictionBanner
              projects={projects}
              onDismiss={dismissPrediction}
              onStart={handlePredictionStart}
            />
          )}
        </AnimatePresence>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name or tag..."
              data-ocid="dashboard.search_input"
              className="pl-10 h-11 bg-card/60 backdrop-blur-sm border-border/40 focus:border-primary/50 focus:bg-card/80 transition-smooth"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            id="create-project-trigger"
            type="button"
            onClick={() => setShowCreateModal(true)}
            data-ocid="dashboard.create_new_button"
            className="hidden"
            aria-hidden
          />

          <GlassButton
            variant="holographic"
            size="md"
            onClick={() => setShowCreateModal(true)}
            data-ocid="dashboard.library.create_button"
            className="gap-2 shrink-0"
          >
            <Plus className="h-4 w-4" />
            New App
          </GlassButton>
        </motion.div>

        {/* Content area */}
        {showEmpty ? (
          searchQuery ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-20 text-center"
              data-ocid="dashboard.search_empty_state"
            >
              <Search className="h-10 w-10 text-muted-foreground/40 mb-4" />
              <p className="font-display font-semibold text-foreground mb-1">
                No results for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-muted-foreground text-sm">
                Try a different name or tag
              </p>
            </motion.div>
          ) : (
            <EmptyState onCreateClick={() => setShowCreateModal(true)} />
          )
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-semibold text-xl flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                {searchQuery ? "Search Results" : "My Projects"}
                <GlowBadge variant="muted">{filteredProjects.length}</GlowBadge>
              </h2>
              {searchQuery && (
                <p className="text-sm text-muted-foreground">
                  for &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              data-ocid="dashboard.projects_list"
            >
              <AnimatePresence mode="popLayout">
                {isLoading
                  ? SKELETON_KEYS.slice(0, 6).map((key) => (
                      <div key={key}>
                        <SkeletonCard showBadge lines={2} />
                      </div>
                    ))
                  : filteredProjects.map((project, i) => (
                      <ProjectCard
                        key={project.id.toString()}
                        project={project}
                        index={i}
                        onClick={() =>
                          navigate({
                            to: "/builder/$id",
                            params: { id: project.id.toString() },
                          })
                        }
                      />
                    ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Templates Section */}
        <div data-ocid="dashboard.templates_section">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-secondary" />
            <h2 className="font-display font-semibold text-xl text-foreground">
              Start from a Template
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {templates.map((t, i) => {
              const Icon = TEMPLATE_ICONS[i % TEMPLATE_ICONS.length];
              const isPopular = TEMPLATE_POPULAR[i % TEMPLATE_POPULAR.length];
              return (
                <motion.button
                  key={t.id.toString()}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  onClick={() => setShowCreateModal(true)}
                  data-ocid={`dashboard.template_card.${i + 1}`}
                  className="text-left rounded-2xl p-5 border border-border/30 bg-card/50 hover:border-primary/40 hover:bg-card/70 hover:shadow-[0_0_20px_oklch(var(--primary)/0.15)] transition-smooth backdrop-blur-sm space-y-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-smooth">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground text-sm flex-1 truncate">
                      {t.name}
                    </span>
                    {isPopular && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 shrink-0">
                        🌟 Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {t.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.featureList.slice(0, 3).map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/20"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xs text-muted-foreground font-body">
              IDEA MEMORY
            </span>
          </div>
        </div>

        {/* Idea Memory + AI Predictions */}
        <IdeaMemorySection
          onNavigateBuilder={(prompt) => {
            navigate({ to: "/builder/$id", params: { id: "new" } });
            toast.success("Opening builder ✨", {
              description: prompt.slice(0, 60),
            });
          }}
        />
      </div>

      {/* Create modal */}
      <AnimatePresence>
        {showCreateModal && (
          <CreateModal
            templates={templates}
            onClose={() => setShowCreateModal(false)}
            onSubmit={handleCreateSubmit}
            isPending={createProject.isPending}
          />
        )}
      </AnimatePresence>

      {/* Lucky Idea modal */}
      <AnimatePresence>
        {luckyModalOpen && currentIdea && (
          <LuckyIdeaModal
            idea={currentIdea}
            onClose={() => setLuckyModalOpen(false)}
            onBuild={handleBuildIdea}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
