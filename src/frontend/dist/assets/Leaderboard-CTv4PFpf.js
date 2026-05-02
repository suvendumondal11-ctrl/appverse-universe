import { j as jsxRuntimeExports, e as Skeleton, u as useNavigate } from "./index-BB65hrJ6.js";
import { L as Layout } from "./Layout-Ca_fTK18.js";
import { L as LevelBadge } from "./Navbar-DFO37bKo.js";
import { s as useGetLeaderboard, b as useGetProfile, c as useGetMyStats, i as getLevelFromXp } from "./index-DGa1wCGE.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import "./HolographicText-C8UGVPGc.js";
import "./zap-ejWsDErG.js";
import "./users-D8yA43PM.js";
import "./moon-DPI3MEjk.js";
const SEED_ENTRIES = [
  {
    rank: 1,
    userId: "seed-1",
    displayName: "Kai T.",
    level: "Legend",
    totalXp: 5230,
    ideasCount: 47
  },
  {
    rank: 2,
    userId: "seed-2",
    displayName: "Priya K.",
    level: "Creator",
    totalXp: 1845,
    ideasCount: 31
  },
  {
    rank: 3,
    userId: "seed-3",
    displayName: "Arjun M.",
    level: "Creator",
    totalXp: 1423,
    ideasCount: 24
  },
  {
    rank: 4,
    userId: "seed-4",
    displayName: "Maya S.",
    level: "Builder",
    totalXp: 487,
    ideasCount: 16
  },
  {
    rank: 5,
    userId: "seed-5",
    displayName: "Sasha P.",
    level: "Builder",
    totalXp: 312,
    ideasCount: 11
  },
  {
    rank: 6,
    userId: "seed-6",
    displayName: "Leo R.",
    level: "Builder",
    totalXp: 278,
    ideasCount: 9
  },
  {
    rank: 7,
    userId: "seed-7",
    displayName: "Nina F.",
    level: "Builder",
    totalXp: 201,
    ideasCount: 7
  },
  {
    rank: 8,
    userId: "seed-8",
    displayName: "Zara Q.",
    level: "Dreamer",
    totalXp: 89,
    ideasCount: 4
  },
  {
    rank: 9,
    userId: "seed-9",
    displayName: "Max B.",
    level: "Dreamer",
    totalXp: 62,
    ideasCount: 3
  },
  {
    rank: 10,
    userId: "seed-10",
    displayName: "Ava C.",
    level: "Dreamer",
    totalXp: 41,
    ideasCount: 2
  }
];
function RankMedal({ rank }) {
  if (rank === 1)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-label": "Gold", children: "👑" });
  if (rank === 2)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-label": "Silver", children: "🥈" });
  if (rank === 3)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-label": "Bronze", children: "🥉" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full bg-muted/40 border border-border/40 flex items-center justify-center text-xs font-mono font-bold text-muted-foreground", children: rank });
}
function rankBorderClass(rank, isCurrentUser) {
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
function AvatarCircle({
  name,
  level,
  size = "md"
}) {
  const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const levelGrad = {
    Dreamer: "gradient-hologram",
    Builder: "gradient-hologram",
    Creator: "gradient-hologram",
    Legend: "gradient-hologram"
  };
  const sz = size === "sm" ? "w-9 h-9 text-sm" : "w-12 h-12 text-base";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${sz} rounded-full ${levelGrad[level]} flex items-center justify-center font-display font-black shrink-0 shadow-lg`,
      style: { color: "oklch(var(--foreground))" },
      children: initials
    }
  );
}
function LeaderboardRow({
  entry,
  index,
  isCurrentUser
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05, duration: 0.4 },
      className: `flex items-center gap-4 px-5 py-4 rounded-2xl transition-smooth ${isCurrentUser ? "bg-primary/8" : "bg-card hover:bg-muted/40"} ${rankBorderClass(entry.rank, isCurrentUser)}`,
      "data-ocid": `leaderboard.row.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RankMedal, { rank: entry.rank }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarCircle, { name: entry.displayName, level: entry.level, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `font-bold text-sm truncate ${isCurrentUser ? "text-primary" : "text-foreground"}`,
                children: entry.displayName
              }
            ),
            isCurrentUser && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-primary/20 text-primary border border-primary/40 rounded-full px-2 py-0.5 font-bold shrink-0", children: "YOU" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            entry.ideasCount,
            " ideas"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level: entry.level, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "font-mono font-black text-right shrink-0 text-accent",
            "data-ocid": `leaderboard.xp.item.${index + 1}`,
            children: [
              Number(entry.totalXp).toLocaleString(),
              " XP"
            ]
          }
        )
      ]
    }
  );
}
function HallOfFame({ entry }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 },
      className: "relative overflow-hidden rounded-3xl p-8 glow-pulse",
      style: {
        background: "linear-gradient(135deg, oklch(0.95 0.05 50 / 0.95), oklch(0.97 0.03 262 / 0.97))",
        border: "1.5px solid oklch(0.55 0.22 50 / 0.6)",
        boxShadow: "0 0 40px oklch(0.55 0.22 50 / 0.2), inset 0 0 40px oklch(0.75 0.28 50 / 0.03)"
      },
      "data-ocid": "leaderboard.hall_of_fame",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-6 text-3xl opacity-40 pointer-events-none select-none animate-pulse", children: "✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-4 right-16 text-2xl opacity-30 pointer-events-none select-none animate-pulse",
            style: { animationDelay: "0.7s" },
            children: "⭐"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-8 right-28 text-xl opacity-20 pointer-events-none select-none animate-pulse",
            style: { animationDelay: "1.4s" },
            children: "✦"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row items-center sm:items-start gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl font-display font-black text-foreground shadow-2xl", children: entry.displayName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 text-2xl", children: "👑" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-accent uppercase tracking-widest mb-1", children: "🏆 Hall of Fame — #1 Creator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-black text-foreground mb-1", children: entry.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-3", children: "Legendary Creator 👑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 justify-center sm:justify-start flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level: entry.level, size: "md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-black text-xl text-accent", children: [
                Number(entry.totalXp).toLocaleString(),
                " XP"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                entry.ideasCount,
                " ideas created"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function YourRankCard({
  rank,
  xp,
  entries
}) {
  const navigate = useNavigate();
  const entryAbove = entries.find((e) => e.rank === rank - 1);
  const xpToPass = entryAbove ? Number(entryAbove.totalXp) - xp + 1 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 },
      className: "glass-glow rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5",
      "data-ocid": "leaderboard.your_rank_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-display font-black text-primary", children: [
          "# ",
          rank
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center sm:text-left min-w-0 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground", children: [
            "You are ranked ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "#",
              rank
            ] }),
            " with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-accent", children: [
              xp.toLocaleString(),
              " XP"
            ] })
          ] }),
          entryAbove && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "🎯 Just",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
              xpToPass.toLocaleString(),
              " more XP"
            ] }),
            " ",
            "to pass ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: entryAbove.displayName })
          ] }),
          !entryAbove && rank === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-accent font-bold", children: "👑 You're at the top! Keep ruling!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/builder/$id", params: { id: "new" } }),
            className: "glass-glow-accent rounded-xl px-5 py-2.5 text-sm font-bold text-accent hover:bg-accent/10 transition-smooth shrink-0 whitespace-nowrap",
            "data-ocid": "leaderboard.climb_ranks_button",
            children: "Build another idea to climb the ranks →"
          }
        )
      ]
    }
  );
}
function Leaderboard() {
  var _a;
  const { data: backendEntries, isLoading } = useGetLeaderboard(10);
  const { data: profile } = useGetProfile();
  const { data: stats } = useGetMyStats();
  const entries = (() => {
    const be = backendEntries ?? [];
    if (be.length >= 5) return be;
    const seedNeeded = SEED_ENTRIES.slice(be.length);
    const merged = [...be, ...seedNeeded].slice(0, 10).map((e, i) => ({
      ...e,
      rank: i + 1
    }));
    return merged;
  })();
  const topEntry = entries[0];
  const currentUserId = (_a = profile == null ? void 0 : profile.userId) == null ? void 0 : _a.toString();
  const myXp = Number((stats == null ? void 0 : stats.totalXp) ?? 0);
  const myLevel = (stats == null ? void 0 : stats.level) ?? getLevelFromXp(myXp);
  const myEntry = entries.find((e) => e.userId === currentUserId);
  const myRank = (myEntry == null ? void 0 : myEntry.rank) ?? entries.length + 1;
  const displayEntries = myEntry ? entries : [
    ...entries,
    {
      rank: entries.length + 1,
      userId: currentUserId ?? "me",
      displayName: (profile == null ? void 0 : profile.displayName) ?? "You",
      level: myLevel,
      totalXp: myXp,
      ideasCount: Number((stats == null ? void 0 : stats.ideasGenerated) ?? 0)
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-3xl mx-auto px-4 py-10 space-y-8",
      "data-ocid": "leaderboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            className: "relative text-center space-y-3 py-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
                { s: "✨", i: 0 },
                { s: "⭐", i: 1 },
                { s: "✦", i: 2 },
                { s: "🌟", i: 3 },
                { s: "✦", i: 4 },
                { s: "⭐", i: 5 }
              ].map(({ s, i }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute text-yellow-400/30 animate-pulse select-none",
                  style: {
                    top: `${10 + i * 13}%`,
                    left: `${5 + i * 15}%`,
                    fontSize: `${0.8 + i % 3 * 0.4}rem`,
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `${2 + i * 0.3}s`
                  },
                  children: s
                },
                `spark-pos-${i}`
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "relative text-4xl md:text-5xl font-display font-black",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.85 0.3 50), oklch(0.75 0.25 30), oklch(0.9 0.15 60))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px oklch(0.75 0.28 50 / 0.4))"
                  },
                  "data-ocid": "leaderboard.title",
                  children: "👑 Global Creator Leaderboard"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-muted-foreground font-body max-w-md mx-auto", children: "The top minds shaping the Digital Universe" })
            ]
          }
        ),
        topEntry && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(HallOfFame, { entry: topEntry }),
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YourRankCard, { rank: myRank, xp: myXp, entries: displayEntries }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "leaderboard.table", children: isLoading ? ["s1", "s2", "s3", "s4", "s5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-2xl" }, k)) : displayEntries.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeaderboardRow,
          {
            entry,
            index: i,
            isCurrentUser: entry.userId === currentUserId
          },
          entry.userId
        )) })
      ]
    }
  ) });
}
export {
  Leaderboard as default
};
