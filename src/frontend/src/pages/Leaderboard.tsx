import { Layout } from "@/components/layout/Layout";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetLeaderboard,
  useGetMyStats,
  useGetProfile,
} from "@/hooks/useBackend";
import type { CreatorLevel, LeaderboardEntry } from "@/types";
import { getLevelFromXp } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";

// ─── Seed data to guarantee 10 entries ────────────────────────────────────────
const SEED_ENTRIES: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "seed-1",
    displayName: "Kai T.",
    level: "Legend",
    totalXp: 5230,
    ideasCount: 47,
  },
  {
    rank: 2,
    userId: "seed-2",
    displayName: "Priya K.",
    level: "Creator",
    totalXp: 1845,
    ideasCount: 31,
  },
  {
    rank: 3,
    userId: "seed-3",
    displayName: "Arjun M.",
    level: "Creator",
    totalXp: 1423,
    ideasCount: 24,
  },
  {
    rank: 4,
    userId: "seed-4",
    displayName: "Maya S.",
    level: "Builder",
    totalXp: 487,
    ideasCount: 16,
  },
  {
    rank: 5,
    userId: "seed-5",
    displayName: "Sasha P.",
    level: "Builder",
    totalXp: 312,
    ideasCount: 11,
  },
  {
    rank: 6,
    userId: "seed-6",
    displayName: "Leo R.",
    level: "Builder",
    totalXp: 278,
    ideasCount: 9,
  },
  {
    rank: 7,
    userId: "seed-7",
    displayName: "Nina F.",
    level: "Builder",
    totalXp: 201,
    ideasCount: 7,
  },
  {
    rank: 8,
    userId: "seed-8",
    displayName: "Zara Q.",
    level: "Dreamer",
    totalXp: 89,
    ideasCount: 4,
  },
  {
    rank: 9,
    userId: "seed-9",
    displayName: "Max B.",
    level: "Dreamer",
    totalXp: 62,
    ideasCount: 3,
  },
  {
    rank: 10,
    userId: "seed-10",
    displayName: "Ava C.",
    level: "Dreamer",
    totalXp: 41,
    ideasCount: 2,
  },
];

// ─── Rank Medal ───────────────────────────────────────────────────────────────
function RankMedal({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="text-2xl" aria-label="Gold">
        👑
      </span>
    );
  if (rank === 2)
    return (
      <span className="text-2xl" aria-label="Silver">
        🥈
      </span>
    );
  if (rank === 3)
    return (
      <span className="text-2xl" aria-label="Bronze">
        🥉
      </span>
    );
  return (
    <span className="w-7 h-7 rounded-full bg-muted/40 border border-border/40 flex items-center justify-center text-xs font-mono font-bold text-muted-foreground">
      {rank}
    </span>
  );
}

// ─── Row border by rank ───────────────────────────────────────────────────────
function rankBorderClass(rank: number, isCurrentUser: boolean): string {
  if (isCurrentUser)
    return "border border-cyan-400/60 shadow-[0_0_16px_oklch(0.72_0.22_262/0.4)]";
  if (rank === 1)
    return "border border-yellow-500/60 shadow-[0_0_16px_oklch(0.75_0.28_50/0.35)]";
  if (rank === 2)
    return "border border-slate-300/40 shadow-[0_0_10px_oklch(0.75_0_0/0.2)]";
  if (rank === 3)
    return "border border-orange-600/50 shadow-[0_0_10px_oklch(0.65_0.18_30/0.2)]";
  return "border border-border/20";
}

// ─── Avatar circle ────────────────────────────────────────────────────────────
function AvatarCircle({
  name,
  level,
  size = "md",
}: { name: string; level: CreatorLevel; size?: "sm" | "md" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const levelGrad: Record<CreatorLevel, string> = {
    Dreamer: "gradient-hologram",
    Builder: "gradient-hologram",
    Creator: "gradient-hologram",
    Legend: "gradient-hologram",
  };
  const sz = size === "sm" ? "w-9 h-9 text-sm" : "w-12 h-12 text-base";
  return (
    <div
      className={`${sz} rounded-full ${levelGrad[level]} flex items-center justify-center font-display font-black shrink-0 shadow-lg`}
      style={{ color: "oklch(var(--foreground))" }}
    >
      {initials}
    </div>
  );
}

// ─── Leaderboard Row ──────────────────────────────────────────────────────────
function LeaderboardRow({
  entry,
  index,
  isCurrentUser,
}: {
  entry: LeaderboardEntry;
  index: number;
  isCurrentUser: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-smooth ${
        isCurrentUser ? "bg-primary/8" : "bg-card hover:bg-muted/40"
      } ${rankBorderClass(entry.rank, isCurrentUser)}`}
      data-ocid={`leaderboard.row.item.${index + 1}`}
    >
      {/* Rank */}
      <div className="w-8 flex items-center justify-center shrink-0">
        <RankMedal rank={entry.rank} />
      </div>

      {/* Avatar */}
      <AvatarCircle name={entry.displayName} level={entry.level} size="sm" />

      {/* Name + level */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`font-bold text-sm truncate ${isCurrentUser ? "text-primary" : "text-foreground"}`}
          >
            {entry.displayName}
          </span>
          {isCurrentUser && (
            <span className="text-xs bg-primary/20 text-primary border border-primary/40 rounded-full px-2 py-0.5 font-bold shrink-0">
              YOU
            </span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          {entry.ideasCount} ideas
        </div>
      </div>

      {/* Level badge */}
      <LevelBadge level={entry.level} size="sm" />

      {/* XP */}
      <div
        className="font-mono font-black text-right shrink-0 text-accent"
        data-ocid={`leaderboard.xp.item.${index + 1}`}
      >
        {Number(entry.totalXp).toLocaleString()} XP
      </div>
    </motion.div>
  );
}

// ─── Hall of Fame Card ────────────────────────────────────────────────────────
function HallOfFame({ entry }: { entry: LeaderboardEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl p-8 glow-pulse"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.95 0.05 50 / 0.95), oklch(0.97 0.03 262 / 0.97))",
        border: "1.5px solid oklch(0.55 0.22 50 / 0.6)",
        boxShadow:
          "0 0 40px oklch(0.55 0.22 50 / 0.2), inset 0 0 40px oklch(0.75 0.28 50 / 0.03)",
      }}
      data-ocid="leaderboard.hall_of_fame"
    >
      {/* Decorative sparkles */}
      <div className="absolute top-3 right-6 text-3xl opacity-40 pointer-events-none select-none animate-pulse">
        ✨
      </div>
      <div
        className="absolute bottom-4 right-16 text-2xl opacity-30 pointer-events-none select-none animate-pulse"
        style={{ animationDelay: "0.7s" }}
      >
        ⭐
      </div>
      <div
        className="absolute top-8 right-28 text-xl opacity-20 pointer-events-none select-none animate-pulse"
        style={{ animationDelay: "1.4s" }}
      >
        ✦
      </div>

      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Large avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl font-display font-black text-foreground shadow-2xl">
            {entry.displayName
              .split(" ")
              .map((w) => w[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)}
          </div>
          <span className="absolute -top-2 -right-2 text-2xl">👑</span>
        </div>

        <div className="text-center sm:text-left flex-1 min-w-0">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
            🏆 Hall of Fame — #1 Creator
          </div>
          <div className="text-2xl font-display font-black text-foreground mb-1">
            {entry.displayName}
          </div>
          <div className="text-sm text-muted-foreground mb-3">
            Legendary Creator 👑
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start flex-wrap">
            <LevelBadge level={entry.level} size="md" />
            <span className="font-mono font-black text-xl text-accent">
              {Number(entry.totalXp).toLocaleString()} XP
            </span>
            <span className="text-sm text-muted-foreground">
              {entry.ideasCount} ideas created
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Your Rank Card ───────────────────────────────────────────────────────────
function YourRankCard({
  rank,
  xp,
  entries,
}: {
  rank: number;
  xp: number;
  entries: LeaderboardEntry[];
}) {
  const navigate = useNavigate();
  const entryAbove = entries.find((e) => e.rank === rank - 1);
  const xpToPass = entryAbove ? Number(entryAbove.totalXp) - xp + 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-glow rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5"
      data-ocid="leaderboard.your_rank_card"
    >
      <div className="text-5xl font-display font-black text-primary">
        # {rank}
      </div>
      <div className="flex-1 text-center sm:text-left min-w-0 space-y-1">
        <div className="font-bold text-foreground">
          You are ranked <span className="text-primary">#{rank}</span> with{" "}
          <span className="font-mono text-accent">
            {xp.toLocaleString()} XP
          </span>
        </div>
        {entryAbove && (
          <div className="text-sm text-muted-foreground">
            🎯 Just{" "}
            <span className="font-bold text-primary">
              {xpToPass.toLocaleString()} more XP
            </span>{" "}
            to pass <span className="font-bold">{entryAbove.displayName}</span>
          </div>
        )}
        {!entryAbove && rank === 1 && (
          <div className="text-sm text-accent font-bold">
            👑 You're at the top! Keep ruling!
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => navigate({ to: "/builder/$id", params: { id: "new" } })}
        className="glass-glow-accent rounded-xl px-5 py-2.5 text-sm font-bold text-accent hover:bg-accent/10 transition-smooth shrink-0 whitespace-nowrap"
        data-ocid="leaderboard.climb_ranks_button"
      >
        Build another idea to climb the ranks →
      </button>
    </motion.div>
  );
}

// ─── Leaderboard Page ─────────────────────────────────────────────────────────
export default function Leaderboard() {
  const { data: backendEntries, isLoading } = useGetLeaderboard(10);
  const { data: profile } = useGetProfile();
  const { data: stats } = useGetMyStats();

  // Merge backend + seed data
  const entries: LeaderboardEntry[] = (() => {
    const be = backendEntries ?? [];
    if (be.length >= 5) return be;
    const seedNeeded = SEED_ENTRIES.slice(be.length);
    const merged = [...be, ...seedNeeded].slice(0, 10).map((e, i) => ({
      ...e,
      rank: i + 1,
    }));
    return merged;
  })();

  const topEntry = entries[0];
  const currentUserId = profile?.userId?.toString();
  const myXp = Number(stats?.totalXp ?? 0);
  const myLevel = stats?.level ?? getLevelFromXp(myXp);

  // Determine current user's rank
  const myEntry = entries.find((e) => e.userId === currentUserId);
  const myRank = myEntry?.rank ?? entries.length + 1;

  // If user not in entries, create a virtual entry
  const displayEntries: LeaderboardEntry[] = myEntry
    ? entries
    : [
        ...entries,
        {
          rank: entries.length + 1,
          userId: currentUserId ?? "me",
          displayName: profile?.displayName ?? "You",
          level: myLevel,
          totalXp: myXp,
          ideasCount: Number(stats?.ideasGenerated ?? 0),
        },
      ];

  return (
    <Layout>
      <div
        className="max-w-3xl mx-auto px-4 py-10 space-y-8"
        data-ocid="leaderboard.page"
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center space-y-3 py-6"
        >
          {/* Particle background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { s: "✨", i: 0 },
              { s: "⭐", i: 1 },
              { s: "✦", i: 2 },
              { s: "🌟", i: 3 },
              { s: "✦", i: 4 },
              { s: "⭐", i: 5 },
            ].map(({ s, i }) => (
              <span
                key={`spark-pos-${i}`}
                className="absolute text-yellow-400/30 animate-pulse select-none"
                style={{
                  top: `${10 + i * 13}%`,
                  left: `${5 + i * 15}%`,
                  fontSize: `${0.8 + (i % 3) * 0.4}rem`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <h1
            className="relative text-4xl md:text-5xl font-display font-black"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.3 50), oklch(0.75 0.25 30), oklch(0.9 0.15 60))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px oklch(0.75 0.28 50 / 0.4))",
            }}
            data-ocid="leaderboard.title"
          >
            👑 Global Creator Leaderboard
          </h1>
          <p className="relative text-muted-foreground font-body max-w-md mx-auto">
            The top minds shaping the Digital Universe
          </p>
        </motion.div>

        {/* ── Hall of Fame ── */}
        {topEntry && !isLoading && <HallOfFame entry={topEntry} />}
        {isLoading && <Skeleton className="h-40 rounded-3xl" />}

        {/* ── Your Rank Card ── */}
        <YourRankCard rank={myRank} xp={myXp} entries={displayEntries} />

        {/* ── Leaderboard Table ── */}
        <div className="space-y-2" data-ocid="leaderboard.table">
          {isLoading
            ? (["s1", "s2", "s3", "s4", "s5"] as const).map((k) => (
                <Skeleton key={k} className="h-16 rounded-2xl" />
              ))
            : displayEntries.map((entry, i) => (
                <LeaderboardRow
                  key={entry.userId}
                  entry={entry}
                  index={i}
                  isCurrentUser={entry.userId === currentUserId}
                />
              ))}
        </div>
      </div>
    </Layout>
  );
}
