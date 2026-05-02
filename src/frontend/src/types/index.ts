// ─── Core ID Types ────────────────────────────────────────────────────────────
export type ProjectId = bigint;
export type TemplateId = bigint;
export type Timestamp = bigint;
export type UserId = { toString(): string };

// ─── Project ──────────────────────────────────────────────────────────────────
export type ProjectStatus =
  | { draft: null }
  | { active: null }
  | { deployed: null };

export type ProjectStatusLabel = "draft" | "active" | "deployed";

export interface AiFeatureSuggestion {
  id: bigint;
  title: string;
  description: string;
  category: string;
  priority: bigint;
}

export interface Project {
  id: ProjectId;
  owner: UserId;
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  featureList: string[];
}

export interface CreateProjectInput {
  name: string;
  description: string;
  tags: string[];
  featureList: string[];
}

export interface UpdateProjectInput {
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  featureList: string[];
}

// ─── Template ─────────────────────────────────────────────────────────────────
export interface Template {
  id: TemplateId;
  name: string;
  category: string;
  description: string;
  featureList: string[];
}

// ─── Profile ──────────────────────────────────────────────────────────────────
export interface UserProfile {
  userId: UserId;
  displayName: string;
  createdAt: Timestamp;
  totalProjects: bigint;
}

// ─── Creator / Gamification ───────────────────────────────────────────────────
export type CreatorLevel = "Dreamer" | "Builder" | "Creator" | "Legend";

export interface CreatorStats {
  userId: string;
  totalXp: number;
  level: CreatorLevel;
  ideasGenerated: number;
  totalLikes: number;
  totalRemixes: number;
  streak: number;
}

export interface PublicIdea {
  id: bigint;
  creatorId: string;
  creatorName: string;
  appName: string;
  description: string;
  category: string;
  colorTheme: string;
  features: string[];
  earningModel: string;
  successScore: number;
  marketScore: number;
  uniquenessScore: number;
  monetizationScore: number;
  viralScore: number;
  likeCount: number;
  viewCount: number;
  remixCount: number;
  createdAt: bigint;
  isPublic: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  displayName: string;
  level: CreatorLevel;
  totalXp: number;
  ideasCount: number;
}

export type XpAction =
  | { GenerateIdea: null }
  | { ShareIdea: null }
  | { RemixIdea: null }
  | { ReceiveLike: null };

export interface PublishIdeaInput {
  appName: string;
  description: string;
  category: string;
  colorTheme: string;
  features: string[];
  earningModel: string;
}

// ─── Level helpers ────────────────────────────────────────────────────────────
export function getLevelThresholds(): Record<CreatorLevel, [number, number]> {
  return {
    Dreamer: [0, 99],
    Builder: [100, 499],
    Creator: [500, 1999],
    Legend: [2000, Number.POSITIVE_INFINITY],
  };
}

export function getLevelColor(level: CreatorLevel): string {
  const colors: Record<CreatorLevel, string> = {
    Dreamer: "oklch(0.75 0.15 260)",
    Builder: "oklch(0.8 0.2 280)",
    Creator: "oklch(0.85 0.25 262)",
    Legend: "#f5a623",
  };
  return colors[level];
}

export function getLevelFromXp(xp: number): CreatorLevel {
  if (xp >= 2000) return "Legend";
  if (xp >= 500) return "Creator";
  if (xp >= 100) return "Builder";
  return "Dreamer";
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────
export function getProjectStatusLabel(
  status: ProjectStatus,
): ProjectStatusLabel {
  if ("draft" in status) return "draft";
  if ("active" in status) return "active";
  return "deployed";
}

export function formatTimestamp(ts: Timestamp): string {
  const ms = Number(ts) / 1_000_000;
  const now = Date.now();
  const diff = now - ms;
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return `${Math.floor(diff / 86_400_000)}d ago`;
}

// ─── Character Personas ───────────────────────────────────────────────────────
export type CharacterPersonaId =
  | "Hero"
  | "Creator"
  | "Influencer"
  | "Dreamer"
  | "Pioneer"
  | "Rebel";

export interface CharacterPersona {
  id: CharacterPersonaId;
  name: string;
  description: string;
  emoji: string;
  colorTheme: string;
  xpMultiplier: number;
}

export const CHARACTER_PERSONAS: CharacterPersona[] = [
  {
    id: "Hero",
    name: "The Hero",
    description:
      "Born to solve big problems. You build apps that change lives.",
    emoji: "🦸",
    colorTheme: "oklch(0.7 0.25 30)",
    xpMultiplier: 1.5,
  },
  {
    id: "Creator",
    name: "The Creator",
    description:
      "Art meets tech. You craft experiences people remember forever.",
    emoji: "🎨",
    colorTheme: "oklch(0.75 0.22 280)",
    xpMultiplier: 1.4,
  },
  {
    id: "Influencer",
    name: "The Influencer",
    description: "Trends start with you. Build apps that go viral overnight.",
    emoji: "⭐",
    colorTheme: "oklch(0.8 0.2 60)",
    xpMultiplier: 1.6,
  },
  {
    id: "Dreamer",
    name: "The Dreamer",
    description: "Imagination unlimited. You see the future before it exists.",
    emoji: "🌙",
    colorTheme: "oklch(0.7 0.18 260)",
    xpMultiplier: 1.2,
  },
  {
    id: "Pioneer",
    name: "The Pioneer",
    description: "First mover. You enter markets nobody thought to explore.",
    emoji: "🚀",
    colorTheme: "oklch(0.72 0.24 195)",
    xpMultiplier: 1.8,
  },
  {
    id: "Rebel",
    name: "The Rebel",
    description: "Rules are meant to be broken. You disrupt everything.",
    emoji: "⚡",
    colorTheme: "oklch(0.68 0.28 10)",
    xpMultiplier: 2.0,
  },
];

// ─── Memory Ideas ─────────────────────────────────────────────────────────────
export interface MemoryIdea {
  id: string;
  prompt: string;
  category: string;
  timestamp: Date;
  cloneCount: number;
}

export const MEMORY_IDEAS: MemoryIdea[] = [
  {
    id: "mem-1",
    prompt:
      "Fitness app with AI coach, daily streak rewards, and friend challenges",
    category: "Health",
    timestamp: new Date(Date.now() - 2 * 86400000),
    cloneCount: 12,
  },
  {
    id: "mem-2",
    prompt: "Language learning game where you battle others in vocab duels",
    category: "Education",
    timestamp: new Date(Date.now() - 5 * 86400000),
    cloneCount: 8,
  },
  {
    id: "mem-3",
    prompt: "Freelance marketplace for Gen Z designers with crypto payouts",
    category: "Business",
    timestamp: new Date(Date.now() - 7 * 86400000),
    cloneCount: 24,
  },
  {
    id: "mem-4",
    prompt: "Music collab platform where DJs remix tracks in real-time",
    category: "Entertainment",
    timestamp: new Date(Date.now() - 10 * 86400000),
    cloneCount: 31,
  },
  {
    id: "mem-5",
    prompt:
      "Mental health journaling app with AI mood analysis and therapist matching",
    category: "Health",
    timestamp: new Date(Date.now() - 14 * 86400000),
    cloneCount: 19,
  },
  {
    id: "mem-6",
    prompt: "Study group finder with Pomodoro timer and shared notes board",
    category: "Education",
    timestamp: new Date(Date.now() - 21 * 86400000),
    cloneCount: 7,
  },
  {
    id: "mem-7",
    prompt: "Street food discovery map with review reels and order-ahead",
    category: "Lifestyle",
    timestamp: new Date(Date.now() - 28 * 86400000),
    cloneCount: 15,
  },
  {
    id: "mem-8",
    prompt:
      "Sustainability tracker that gamifies eco habits and rewards green actions",
    category: "Environment",
    timestamp: new Date(Date.now() - 35 * 86400000),
    cloneCount: 22,
  },
];

// ─── Mood ─────────────────────────────────────────────────────────────────────
export type MoodType = "happy" | "calm" | "inspired" | "focused";

export interface MoodConfig {
  label: string;
  emoji: string;
  primaryColor: string;
  bgGradient: string;
  suggestionTheme: string;
}

export const MOOD_CONFIG: Record<MoodType, MoodConfig> = {
  happy: {
    label: "Happy",
    emoji: "😊",
    primaryColor: "oklch(0.82 0.22 85)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.97 0.05 85), oklch(0.94 0.08 60))",
    suggestionTheme: "fun, social, games, celebrations",
  },
  calm: {
    label: "Calm",
    emoji: "😌",
    primaryColor: "oklch(0.75 0.18 220)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.97 0.03 220), oklch(0.94 0.06 200))",
    suggestionTheme: "meditation, journaling, wellness, mindfulness",
  },
  inspired: {
    label: "Inspired",
    emoji: "✨",
    primaryColor: "oklch(0.78 0.25 290)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.97 0.04 290), oklch(0.94 0.09 310))",
    suggestionTheme: "creativity, art, innovation, big ideas",
  },
  focused: {
    label: "Focused",
    emoji: "🎯",
    primaryColor: "oklch(0.72 0.2 255)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.97 0.03 255), oklch(0.94 0.07 240))",
    suggestionTheme: "productivity, tools, dashboards, analytics",
  },
};

// ─── Viral Angles ─────────────────────────────────────────────────────────────
export interface ViralAngle {
  id: string;
  hookHeadline: string;
  clipSimulation: string;
  hashtags: string[];
  viralScore: number;
  platform: "TikTok" | "Instagram" | "Twitter";
}

export function generateViralAngles(appName: string): ViralAngle[] {
  return [
    {
      id: "va-1",
      hookHeadline: `POV: You built ${appName} in 30 seconds using AI 🤯`,
      clipSimulation: `Open with shocked face, cut to app demo, end with download counter spinning up. Text overlay: "I can't believe this actually works." Trending sound: lo-fi beat drop.`,
      hashtags: [
        "#AIApp",
        "#AppVerse",
        "#BuildWithAI",
        "#GenZCreator",
        "#TechTok",
      ],
      viralScore: 91,
      platform: "TikTok",
    },
    {
      id: "va-2",
      hookHeadline: `This ${appName} idea just hit 10K users in 24 hours 📈`,
      clipSimulation: `Before/after split screen. Left: blank screen. Right: live analytics dashboard showing growing numbers. Voiceover: "All I did was describe my idea." End card: "Your turn →"`,
      hashtags: [
        "#StartupLife",
        "#MadeWithAI",
        `#${appName.replace(/\s/g, "")}`,
        "#CreatorEconomy",
        "#Viral",
      ],
      viralScore: 87,
      platform: "Instagram",
    },
    {
      id: "va-3",
      hookHeadline: `Why is nobody talking about ${appName}? Thread 🧵`,
      clipSimulation:
        "Tweet thread: Tweet 1 introduces the problem. Tweet 2 shows the solution. Tweet 3 shares first user reaction. Tweet 4 drops the link. Each tweet gets progressively more engagement.",
      hashtags: [
        "#BuildInPublic",
        "#Indiehacker",
        "#AITools",
        "#AppVerse",
        "#FutureOfApps",
      ],
      viralScore: 78,
      platform: "Twitter",
    },
  ];
}

// ─── Collab Session ───────────────────────────────────────────────────────────
export interface CollabParticipant {
  id: string;
  name: string;
  avatarEmoji: string;
  isActive: boolean;
  joinedAt: Date;
}

export interface CollabMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: Date;
  reaction: string | null;
}

export interface CollabSession {
  sessionCode: string;
  hostName: string;
  participants: CollabParticipant[];
  messages: CollabMessage[];
  sharedPrompt: string;
  status: "active" | "ended";
}

export function generateSessionCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
