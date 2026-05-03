import { r as reactExports, u as useNavigate, Q as useListPublicIdeas, R as useLikeIdea, T as useRemixIdea, V as useIncrementView, k as ue, j as jsxRuntimeExports, m as motion, A as AnimatePresence, W as React, Y as Skeleton, o as LevelBadge } from "./index-DQTVxuMq.js";
import { L as Layout } from "./Layout-Dzbux9En.js";
const SEED_IDEAS = [
  {
    id: 1n,
    creatorId: "priya-k",
    creatorName: "Priya K.",
    appName: "FitQuest Pro",
    description: "Gamified fitness platform with daily challenges, friend leaderboards, and streak rewards. Turn every workout into an epic quest.",
    category: "fitness",
    colorTheme: "#06b6d4,#8b5cf6,#f59e0b",
    features: [
      "Daily Challenges",
      "Friend Competition",
      "Progress Tracking",
      "Workout Plans",
      "Achievement Badges"
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
    createdAt: BigInt(Date.now() - 3 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true,
    moodBadge: "😊",
    coCreated: true,
    isTwinGenerated: true
  },
  {
    id: 2n,
    creatorId: "arjun-m",
    creatorName: "Arjun M.",
    appName: "StudyMind AI",
    description: "AI-powered study companion that generates quizzes, tracks your progress, and adapts to your learning style in real time.",
    category: "education",
    colorTheme: "#6366f1,#ec4899,#06b6d4",
    features: [
      "Spaced Repetition",
      "Quiz Generator",
      "Study Streaks",
      "AI Tutor",
      "Progress Map"
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
    createdAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true
  },
  {
    id: 3n,
    creatorId: "lena-r",
    creatorName: "Lena R.",
    appName: "CookMaster",
    description: "Smart recipe finder and meal planner with AI nutrition tracking. Discover thousands of dishes and build your perfect weekly menu.",
    category: "food",
    colorTheme: "#f59e0b,#ef4444,#84cc16",
    features: [
      "Recipe Finder",
      "Meal Planner",
      "Shopping List",
      "Nutrition Tracker",
      "Video Recipes"
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
    createdAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true,
    moodBadge: "😔"
  },
  {
    id: 4n,
    creatorId: "kai-t",
    creatorName: "Kai T.",
    appName: "WealthWave",
    description: "Next-gen personal finance app with AI budget coaching, investment tips, and predictive expense analytics. Your money, amplified.",
    category: "finance",
    colorTheme: "#10b981,#06b6d4,#8b5cf6",
    features: [
      "Budget Tracker",
      "Investment Tips",
      "Expense Analytics",
      "Goal Setting",
      "AI Advisor"
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
    createdAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true,
    moodBadge: "😊",
    coCreated: true,
    isTwinGenerated: true
  },
  {
    id: 5n,
    creatorId: "sasha-p",
    creatorName: "Sasha P.",
    appName: "JourneyAI",
    description: "Your AI travel companion that builds dream itineraries, finds hidden gems, and keeps your entire trip budget in check.",
    category: "travel",
    colorTheme: "#0ea5e9,#8b5cf6,#f97316",
    features: [
      "Trip Planner",
      "Local Tips",
      "Budget Tracker",
      "Hotel Finder",
      "Offline Maps"
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
    createdAt: BigInt(Date.now() - 4 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true
  },
  {
    id: 6n,
    creatorId: "maya-s",
    creatorName: "Maya S.",
    appName: "VibeForge",
    description: "The ultimate music creation studio for creators — beat maker, AI playlist generator, and live collab studio in one app.",
    category: "emotion",
    colorTheme: "#a855f7,#ec4899,#f59e0b",
    features: [
      "Beat Maker",
      "Playlist Generator",
      "Mood Music",
      "Collab Studio",
      "Viral Charts"
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
    createdAt: BigInt(Date.now() - 6 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true,
    moodBadge: "🎭"
  },
  {
    id: 7n,
    creatorId: "zoe-w",
    creatorName: "Zoe W.",
    appName: "MindSpace",
    description: "AI-guided mental wellness app with mood tracking, guided meditations, and personalized self-care routines. Feel better, every day.",
    category: "lifestyle",
    colorTheme: "#8b5cf6,#06b6d4,#a3e635",
    features: [
      "Mood Tracker",
      "Guided Meditations",
      "Breathing Exercises",
      "Sleep Sounds",
      "Daily Journal"
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
    createdAt: BigInt(Date.now() - 1 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true,
    moodBadge: "😊"
  },
  {
    id: 8n,
    creatorId: "rafi-n",
    creatorName: "Rafi N.",
    appName: "LearnFlow",
    description: "Skill-building platform that creates personalized learning paths using AI. From zero to job-ready in weeks, not years.",
    category: "education",
    colorTheme: "#f97316,#6366f1,#22d3ee",
    features: [
      "Skill Paths",
      "Video Lessons",
      "Live Mentors",
      "Project Challenges",
      "Certificate Engine"
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
    createdAt: BigInt(Date.now() - 8 * 24 * 60 * 60 * 1e3) * BigInt(1e6),
    isPublic: true
  }
];
const TWIN_CATEGORY_LABELS = {
  fitness: "Health & Fitness",
  education: "EdTech",
  finance: "FinTech",
  food: "Food & Nutrition",
  music: "Music & Entertainment",
  travel: "Travel & Lifestyle",
  lifestyle: "Lifestyle",
  emotion: "Wellness & Emotion"
};
const CREATOR_LEVELS = {
  "priya-k": "Builder",
  "arjun-m": "Creator",
  "lena-r": "Dreamer",
  "kai-t": "Legend",
  "sasha-p": "Creator",
  "maya-s": "Builder",
  "zoe-w": "Creator",
  "rafi-n": "Builder"
};
const REGION_FILTERS = [
  { id: "all", label: "🌍 All" },
  { id: "americas", label: "🇺🇸 Americas" },
  { id: "europe", label: "🇪🇺 Europe" },
  { id: "asia", label: "🇯🇵 Asia" },
  { id: "africa", label: "🌍 Africa" },
  { id: "oceania", label: "🇦🇺 Oceania" },
  { id: "trending", label: "⭐ Trending" },
  { id: "worldwide", label: "🌍 Worldwide Viral" }
];
function getIdeaRegion(index) {
  const map = [
    "asia",
    "americas",
    "europe",
    "asia",
    "americas",
    "europe",
    "asia",
    "americas",
    "europe"
  ];
  return map[index % map.length] ?? "americas";
}
const REGION_LABEL_CONFIG = {
  asia: {
    text: "Trending in Japan",
    flag: "🇯🇵",
    color: "oklch(0.75 0.28 50 / 0.15)",
    border: "oklch(0.75 0.28 50 / 0.4)"
  },
  americas: {
    text: "Popular in USA",
    flag: "🇺🇸",
    color: "oklch(0.72 0.22 262 / 0.15)",
    border: "oklch(0.72 0.22 262 / 0.4)"
  },
  europe: {
    text: "Rising in Europe",
    flag: "🇪🇺",
    color: "oklch(0.65 0.2 135 / 0.15)",
    border: "oklch(0.65 0.2 135 / 0.4)"
  },
  africa: {
    text: "Growing in Africa",
    flag: "🌍",
    color: "oklch(0.75 0.28 50 / 0.12)",
    border: "oklch(0.75 0.28 50 / 0.3)"
  },
  oceania: {
    text: "Hot in Australia",
    flag: "🇦🇺",
    color: "oklch(0.72 0.22 262 / 0.12)",
    border: "oklch(0.72 0.22 262 / 0.3)"
  },
  trending: {
    text: "Trending Worldwide",
    flag: "⭐",
    color: "oklch(0.62 0.25 280 / 0.15)",
    border: "oklch(0.62 0.25 280 / 0.4)"
  }
};
function getRealityMetrics(idea) {
  const cat = idea.category;
  if (cat === "fitness")
    return {
      crash: "0.8%",
      retention: "88%",
      topFeature: "Workout Streaks",
      suggestion: "Add social sharing to boost virality"
    };
  if (cat === "education")
    return {
      crash: "0.5%",
      retention: "84%",
      topFeature: "AI Quiz Generator",
      suggestion: "Add offline mode for mobile users"
    };
  if (cat === "finance")
    return {
      crash: "0.3%",
      retention: "91%",
      topFeature: "Budget Coach",
      suggestion: "Add bank sync for instant insights"
    };
  if (cat === "food")
    return {
      crash: "1.1%",
      retention: "79%",
      topFeature: "Recipe Discovery",
      suggestion: "Add grocery delivery integration"
    };
  if (cat === "music")
    return {
      crash: "1.4%",
      retention: "75%",
      topFeature: "Beat Maker",
      suggestion: "Add real-time collab sessions"
    };
  if (cat === "travel")
    return {
      crash: "0.9%",
      retention: "82%",
      topFeature: "AI Itinerary",
      suggestion: "Add flight price tracker"
    };
  return {
    crash: "1.2%",
    retention: "82%",
    topFeature: "Core Feature",
    suggestion: "Add push notifications to boost retention"
  };
}
const TAGS = [
  { id: "all", label: "🔥 Trending", color: "accent" },
  { id: "fitness", label: "🏋️ Fitness", color: "primary" },
  { id: "education", label: "📚 Education", color: "secondary" },
  { id: "food", label: "🍕 Food", color: "accent" },
  { id: "finance", label: "💰 Finance", color: "primary" },
  { id: "music", label: "🎵 Music", color: "secondary" },
  { id: "travel", label: "🌍 Travel", color: "accent" },
  { id: "lifestyle", label: "🏠 Lifestyle", color: "primary" },
  { id: "emotion", label: "💗 Emotion", color: "secondary" }
];
const SORT_OPTIONS = [
  { id: "trending", label: "Trending" },
  { id: "recent", label: "Newest" },
  { id: "liked", label: "Most Liked" },
  { id: "remixed", label: "Most Remixed" }
];
const CATEGORY_COLORS = {
  fitness: "oklch(0.72 0.22 262 / 0.25)",
  education: "oklch(0.62 0.25 280 / 0.25)",
  food: "oklch(0.75 0.28 50 / 0.25)",
  finance: "oklch(0.72 0.22 162 / 0.25)",
  music: "oklch(0.65 0.25 320 / 0.25)",
  travel: "oklch(0.7 0.22 200 / 0.25)",
  lifestyle: "oklch(0.62 0.25 280 / 0.25)",
  emotion: "oklch(0.65 0.24 350 / 0.25)"
};
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}
function parseThemeColors(colorTheme) {
  return colorTheme.split(",").map((c) => c.trim()).slice(0, 3);
}
function sortIdeas(ideas, sort) {
  const copy = [...ideas];
  if (sort === "liked")
    return copy.sort((a, b) => Number(b.likeCount) - Number(a.likeCount));
  if (sort === "remixed")
    return copy.sort((a, b) => Number(b.remixCount) - Number(a.remixCount));
  if (sort === "recent")
    return copy.sort((a, b) => Number(b.createdAt - a.createdAt));
  return copy.sort(
    (a, b) => Number(b.likeCount) * 2 + Number(b.viewCount) * 0.5 + Number(b.remixCount) * 3 - (Number(a.likeCount) * 2 + Number(a.viewCount) * 0.5 + Number(a.remixCount) * 3)
  );
}
function SuccessRing({ score }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - score / 100);
  const color = score >= 80 ? "oklch(0.75 0.28 50)" : score >= 65 ? "oklch(0.72 0.22 262)" : "oklch(0.62 0.25 280)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-10 h-10 flex items-center justify-center flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 w-full h-full -rotate-90",
        viewBox: "0 0 40 40",
        "aria-label": `Success score: ${score}`,
        role: "img",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "20",
              cy: "20",
              r: radius,
              fill: "none",
              stroke: "oklch(0.85 0.03 262)",
              strokeWidth: "3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "20",
              cy: "20",
              r: radius,
              fill: "none",
              stroke: color,
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
              style: { filter: `drop-shadow(0 0 4px ${color})` }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono text-foreground relative z-10", children: score })
  ] });
}
function SuccessForecast({ idea }) {
  const scores = [
    { label: "Market", value: idea.marketScore, color: "oklch(0.72 0.22 262)" },
    {
      label: "Unique",
      value: idea.uniquenessScore,
      color: "oklch(0.62 0.25 280)"
    },
    { label: "Viral", value: idea.viralScore, color: "oklch(0.75 0.28 50)" },
    {
      label: "Revenue",
      value: idea.monetizationScore,
      color: "oklch(0.65 0.2 135)"
    }
  ];
  const overall = Math.round(
    (idea.marketScore + idea.uniquenessScore + idea.viralScore + idea.monetizationScore) / 4
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-2 p-3 rounded-xl bg-muted/60 border border-border/40",
      onClick: (e) => e.stopPropagation(),
      onKeyDown: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Success Forecast" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-xs font-bold",
              style: { color: "oklch(0.75 0.28 50)" },
              children: [
                overall,
                "% Overall"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: scores.map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forecast-mini-gauge w-10 h-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "forecast-gauge-fill",
                style: {
                  "--percentage": `${value / 100 * 360}deg`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[9px] font-bold relative z-10",
                style: { color },
                children: value
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-medium", children: label })
        ] }, label)) })
      ]
    }
  );
}
function RegionLabel({ region }) {
  const cfg = REGION_LABEL_CONFIG[region];
  if (!cfg) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "region-label text-xs",
      style: { background: cfg.color, borderColor: cfg.border },
      children: [
        cfg.flag,
        " ",
        cfg.text
      ]
    }
  );
}
function IntelBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4 },
      className: "intel-banner col-span-full flex items-center gap-3",
      "data-ocid": "feed.intel_banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            animate: { opacity: [0.5, 1, 0.5] },
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            className: "text-lg flex-shrink-0",
            children: "💡"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Similar ideas trending in USA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: " — +500 views this week" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 flex-shrink-0", children: "🌐 Global Intel" })
      ]
    }
  );
}
function RealityModal({
  idea,
  onClose
}) {
  const [count, setCount] = reactExports.useState(0);
  const metrics = getRealityMetrics(idea);
  const target = 1e4;
  reactExports.useEffect(() => {
    const start = performance.now();
    const duration = 2e3;
    let rafId;
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
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
      desc: "Low crash — excellent stability"
    },
    {
      label: "Day-7 Retention",
      value: metrics.retention,
      badge: "primary",
      desc: "Above industry average"
    },
    {
      label: "Top Feature",
      value: metrics.topFeature,
      badge: "secondary",
      desc: "Most used by virtual users"
    },
    {
      label: "AI Suggestion",
      value: metrics.suggestion,
      badge: "accent",
      desc: "Improve to boost metrics"
    }
  ];
  const badgeColors = {
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    primary: "oklch(0.72 0.22 262)",
    secondary: "oklch(0.62 0.25 280)",
    accent: "oklch(0.75 0.28 50)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      "data-ocid": "feed.reality_modal.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-background/80 backdrop-blur-md",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.92, y: 32 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.92, y: 32 },
            transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
            className: "reality-modal relative z-10 w-full max-w-lg rounded-2xl p-7",
            "data-ocid": "feed.reality_modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground",
                  "aria-label": "Close modal",
                  "data-ocid": "feed.reality_modal.close_button",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest mb-2", children: "Feature 2 · Parallel Reality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-black gradient-hologram bg-clip-text text-transparent", children: "🌐 Parallel Reality Report" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                  '"',
                  idea.appName,
                  '" was simulated across virtual user clusters'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    className: "reality-counter text-6xl font-display font-black",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    },
                    children: count.toLocaleString()
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 font-medium", children: "Virtual Users Tested Your App" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 rounded-full bg-muted/30 overflow-hidden max-w-48 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      background: "linear-gradient(90deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))"
                    },
                    initial: { width: "0%" },
                    animate: { width: `${Math.round(count / target * 100)}%` },
                    transition: { duration: 0.1 }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-6", children: metricCards.map(({ label, value, badge, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 + i * 0.15, duration: 0.35 },
                  className: "reality-metric rounded-xl p-3 space-y-1",
                  "data-ocid": `feed.reality_modal.metric.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider font-medium", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-bold font-display leading-snug",
                        style: badge !== "success" ? { color: badgeColors[badge] } : void 0,
                        children: value
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-relaxed", children: desc })
                  ]
                },
                label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.2 },
                  type: "button",
                  onClick: onClose,
                  "data-ocid": "feed.reality_modal.confirm_button",
                  className: "w-full py-3 rounded-xl font-display font-bold text-foreground transition-smooth hover:scale-[1.02]",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.72 0.22 262 / 0.2), oklch(0.62 0.25 280 / 0.2))",
                    border: "1px solid oklch(0.72 0.22 262 / 0.4)"
                  },
                  children: "✅ Reality Test Complete"
                }
              )
            ]
          }
        )
      ]
    }
  );
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
  onOpenDetail
}) {
  const colors = parseThemeColors(idea.colorTheme);
  const level = CREATOR_LEVELS[idea.creatorId] ?? "Dreamer";
  const categoryBg = CATEGORY_COLORS[idea.category] ?? CATEGORY_COLORS.lifestyle;
  const moodBadge = idea.moodBadge;
  const coCreated = idea.coCreated;
  const isTwinGenerated = idea.isTwinGenerated;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index % 6 * 0.07 },
      className: "group relative glass-glow rounded-2xl p-5 flex flex-col gap-3 cursor-pointer\n        hover:-translate-y-1 hover:shadow-[0_0_32px_oklch(var(--primary)/0.2)] transition-smooth",
      "data-ocid": `feed.card.${index + 1}`,
      onClick: () => {
        onView(idea.id);
        onOpenDetail(idea);
      },
      children: [
        moodBadge && !showViralBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute top-3 right-3 text-lg leading-none select-none z-10",
            title: "Emotion mood",
            "aria-label": `Mood: ${moodBadge}`,
            "data-ocid": `feed.mood_badge.${index + 1}`,
            children: moodBadge
          }
        ),
        showViralBadge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold z-10 select-none",
            style: {
              background: "oklch(0.75 0.28 50 / 0.18)",
              border: "1px solid oklch(0.75 0.28 50 / 0.5)",
              color: "oklch(0.45 0.24 50)"
            },
            title: `Viral score: ${idea.viralScore}`,
            "data-ocid": `feed.viral_badge.${index + 1}`,
            children: [
              "🔥 ",
              idea.viralScore
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RegionLabel, { region }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-lg font-display font-black leading-tight gradient-hologram bg-clip-text text-transparent truncate",
                title: idea.appName,
                children: idea.appName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block px-2 py-0.5 rounded-full text-xs font-bold capitalize text-foreground",
                  style: { background: categoryBg },
                  children: idea.category
                }
              ),
              coCreated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold",
                  style: {
                    background: "oklch(0.62 0.2 200 / 0.15)",
                    border: "1px solid oklch(0.62 0.2 200 / 0.45)",
                    color: "oklch(0.42 0.18 200)"
                  },
                  "data-ocid": `feed.cocreated_badge.${index + 1}`,
                  children: "🌐 Co-Created"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessRing, { score: idea.successScore })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 items-center", children: [
          colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "w-4 h-4 rounded-full ring-1 ring-border/30 flex-shrink-0",
              style: { background: c, boxShadow: `0 0 6px ${c}66` },
              "aria-hidden": "true"
            },
            c
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1 font-mono", children: idea.earningModel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2 font-body", children: idea.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          idea.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-0.5 rounded-full text-xs font-medium bg-muted/60 text-foreground/70 border border-border/30",
              children: f
            },
            f
          )),
          idea.features.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full text-xs font-medium text-muted-foreground", children: [
            "+",
            idea.features.length - 3
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessForecast, { idea }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0",
              style: {
                background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`
              },
              "aria-label": idea.creatorName,
              children: getInitials(idea.creatorName)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground/80 truncate min-w-0", children: idea.creatorName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level, size: "sm", showName: false }),
          isTwinGenerated && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "twin-badge glow-pulse flex-shrink-0",
              title: "Powered by Twin AI",
              "data-ocid": `feed.twin_badge.${index + 1}`,
              children: "🤖 Powered by Twin"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "👁️ ",
            Number(idea.viewCount).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "❤️ ",
            Number(idea.likeCount).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "🔀 ",
            Number(idea.remixCount).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-2 pt-1",
            onClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold glass border border-border/30 text-foreground/70 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_oklch(var(--primary)/0.3)] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  "data-ocid": `feed.like_button.${index + 1}`,
                  onClick: () => onLike(idea.id),
                  "aria-label": `Like ${idea.appName}`,
                  children: "❤️ Like"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold remix-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  "data-ocid": `feed.remix_button.${index + 1}`,
                  onClick: () => onRemix(idea),
                  "aria-label": `Remix ${idea.appName}`,
                  children: "🔀 Remix"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex items-center justify-center px-2.5 py-2 rounded-xl text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  style: {
                    background: "oklch(0.62 0.25 280 / 0.15)",
                    border: "1px solid oklch(0.62 0.25 280 / 0.4)",
                    color: "oklch(0.75 0.22 280)"
                  },
                  "data-ocid": `feed.reality_test_button.${index + 1}`,
                  onClick: () => onPublishReality(idea),
                  "aria-label": `Reality test ${idea.appName}`,
                  title: "Run Parallel Reality Simulation",
                  children: "🌐"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function IdeaDetailModal({
  idea,
  onClose,
  onRemix
}) {
  const colors = parseThemeColors(idea.colorTheme);
  const level = CREATOR_LEVELS[idea.creatorId] ?? "Dreamer";
  const isTwinGenerated = idea.isTwinGenerated ?? false;
  const hasRemixes = Number(idea.remixCount) > 0;
  const twinCategoryLabel = TWIN_CATEGORY_LABELS[idea.category] ?? idea.category;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      "data-ocid": "feed.idea_detail.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-background/80 backdrop-blur-md",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.92, y: 32 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.92, y: 32 },
            transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
            className: "reality-modal relative z-10 w-full max-w-lg rounded-2xl p-7 overflow-y-auto max-h-[90vh]",
            "data-ocid": "feed.idea_detail",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/40 transition-smooth text-muted-foreground hover:text-foreground",
                  "aria-label": "Close detail",
                  "data-ocid": "feed.idea_detail.close_button",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-black gradient-hologram bg-clip-text text-transparent", children: idea.appName }),
                  isTwinGenerated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "twin-badge glow-pulse",
                      "data-ocid": "feed.idea_detail.twin_badge",
                      children: "🤖 Powered by Twin"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: idea.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-4 h-4 rounded-full ring-1 ring-border/30",
                    style: { background: c, boxShadow: `0 0 6px ${c}66` },
                    "aria-hidden": "true"
                  },
                  c
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono ml-1", children: idea.earningModel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "ml-2 px-2 py-0.5 rounded-full text-xs font-bold capitalize text-foreground",
                    style: {
                      background: CATEGORY_COLORS[idea.category] ?? CATEGORY_COLORS.lifestyle
                    },
                    children: idea.category
                  }
                )
              ] }),
              isTwinGenerated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2, duration: 0.35 },
                  className: "mb-5 p-4 rounded-xl",
                  style: {
                    background: "oklch(var(--primary) / 0.08)",
                    border: "1.5px solid oklch(var(--primary) / 0.35)",
                    boxShadow: "0 0 16px oklch(var(--primary) / 0.12)"
                  },
                  "data-ocid": "feed.idea_detail.twin_insight",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🤖" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-bold uppercase tracking-wider",
                          style: { color: "oklch(var(--primary))" },
                          children: "Twin Insight"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
                      "Why Twin created this:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                        "Trending in ",
                        twinCategoryLabel,
                        ", matches your Builder style"
                      ] })
                    ] })
                  ]
                }
              ),
              hasRemixes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: isTwinGenerated ? 0.3 : 0.2, duration: 0.35 },
                  className: "mb-5 p-4 rounded-xl",
                  style: {
                    background: "oklch(0.96 0.012 262 / 0.97)",
                    border: "1px solid oklch(var(--border) / 0.5)"
                  },
                  "data-ocid": "feed.idea_detail.remix_chain",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3", children: "Remix Chain" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0",
                            style: {
                              background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`
                            },
                            "aria-label": idea.creatorName,
                            children: getInitials(idea.creatorName)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Creator" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: idea.creatorName })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm mx-1", children: "→" }),
                      isTwinGenerated && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 glow-pulse",
                              style: {
                                background: "oklch(var(--primary) / 0.15)",
                                border: "1.5px solid oklch(var(--primary) / 0.6)"
                              },
                              "aria-label": "Twin AI",
                              children: "🤖"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "AI Twin" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-xs font-bold",
                                style: { color: "oklch(var(--primary))" },
                                children: "Twin"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm mx-1", children: "→" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0",
                            style: {
                              background: "oklch(var(--accent) / 0.2)",
                              border: "1.5px solid oklch(var(--accent) / 0.5)",
                              color: "oklch(var(--accent))"
                            },
                            "aria-label": "Remixers",
                            children: "🔀"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Remixed by" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "text-xs font-bold",
                              style: { color: "oklch(var(--accent))" },
                              children: [
                                Number(idea.remixCount),
                                " creators"
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0",
                    style: {
                      background: `linear-gradient(135deg, ${colors[0] ?? "#8b5cf6"}, ${colors[1] ?? "#06b6d4"})`
                    },
                    children: getInitials(idea.creatorName)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: idea.creatorName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level, size: "sm", showName: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "👁️ ",
                    Number(idea.viewCount).toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "❤️ ",
                    Number(idea.likeCount).toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "🔀 ",
                    Number(idea.remixCount).toLocaleString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: idea.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-2.5 py-1 rounded-full text-xs font-medium bg-muted/60 text-foreground/70 border border-border/30",
                  children: f
                },
                f
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "flex-1 py-3 rounded-xl text-sm font-bold glass border border-border/30 text-foreground/70 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_oklch(var(--primary)/0.3)] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    "data-ocid": "feed.idea_detail.close_button",
                    onClick: onClose,
                    children: "Close"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "flex-1 py-3 rounded-xl text-sm font-bold remix-btn transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    "data-ocid": "feed.idea_detail.remix_button",
                    onClick: () => {
                      onRemix(idea);
                      onClose();
                    },
                    children: "🔀 Remix This"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const GLOBAL_TREND_MESSAGES = [
  "FitTrack AI is viral in Japan 🇯🇵",
  "MediBot is blowing up in USA 🇺🇸",
  "EcoMap going viral in Europe 🇩🇪"
];
function GlobalAwarenessBanner({ onDismiss }) {
  const [msgIndex, setMsgIndex] = reactExports.useState(0);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const autoDismissId = setTimeout(() => {
      onDismiss();
    }, 5e3);
    return () => clearTimeout(autoDismissId);
  }, [onDismiss]);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % GLOBAL_TREND_MESSAGES.length);
    }, 3e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -24, height: "auto" },
      animate: { opacity: 1, y: 0, height: "auto" },
      exit: {
        opacity: 0,
        y: -16,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      className: "mx-4 mt-4 rounded-2xl flex items-center gap-3 px-4 py-3 backdrop-blur-xl overflow-hidden",
      style: {
        background: "linear-gradient(135deg, oklch(0.97 0.015 262 / 0.97) 0%, oklch(0.97 0.018 280 / 0.97) 100%)",
        border: "1px solid oklch(0.72 0.22 262 / 0.35)",
        boxShadow: "0 0 24px oklch(0.72 0.22 262 / 0.12), inset 0 0 16px oklch(0.62 0.25 280 / 0.06)"
      },
      "data-ocid": "feed.global_awareness_banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0", "aria-hidden": "true", children: "🌍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground leading-tight", children: "3 ideas are trending globally right now 🌍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.3 },
              className: "text-xs text-muted-foreground mt-0.5",
              children: GLOBAL_TREND_MESSAGES[msgIndex]
            },
            msgIndex
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/magic" }),
            className: "flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            style: {
              background: "oklch(0.62 0.25 280 / 0.15)",
              border: "1px solid oklch(0.62 0.25 280 / 0.45)",
              color: "oklch(0.42 0.22 280)"
            },
            "data-ocid": "feed.global_awareness_explore_button",
            children: "Explore 🌍"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "flex-shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "aria-label": "Dismiss global awareness banner",
            "data-ocid": "feed.global_awareness_close_button",
            children: "✕"
          }
        )
      ]
    }
  );
}
function AutoRefreshIndicator() {
  const [seconds, setSeconds] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1e3);
    return () => clearInterval(id);
  }, []);
  const label = seconds === 0 ? "just now" : seconds < 60 ? `${seconds}s ago` : `${Math.floor(seconds / 60)}m ago`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium",
      style: {
        background: "oklch(0.9 0.08 145 / 0.2)",
        border: "1px solid oklch(0.55 0.2 145 / 0.4)",
        color: "oklch(0.35 0.18 145)"
      },
      "data-ocid": "feed.auto_refresh_indicator",
      "aria-label": "Feed auto-refreshing",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "h-2 w-2 rounded-full inline-block flex-shrink-0",
            style: { background: "oklch(0.55 0.2 145)" },
            animate: { opacity: [1, 0.3, 1] },
            transition: {
              duration: 1.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔄 Auto-refreshing • Live" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
          "• Updated ",
          label
        ] })
      ]
    }
  );
}
const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c"];
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-10 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-2/3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" })
  ] });
}
function HotCard({ idea, rank }) {
  const colors = parseThemeColors(idea.colorTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-glow-accent rounded-xl px-4 py-3 flex items-center gap-3 flex-shrink-0 w-52",
      "data-ocid": `feed.hot_card.${rank}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-black font-mono text-accent", children: [
          "#",
          rank
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm font-bold font-display truncate text-foreground",
              title: idea.appName,
              children: idea.appName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "🔀 ",
            Number(idea.remixCount),
            " remixes"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: colors.slice(0, 2).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "w-3 h-3 rounded-full flex-shrink-0",
            style: { background: c },
            "aria-hidden": "true"
          },
          c
        )) })
      ]
    }
  );
}
function Feed() {
  const [activeTag, setActiveTag] = reactExports.useState("all");
  const [activeSort, setActiveSort] = reactExports.useState("trending");
  const [activeRegion, setActiveRegion] = reactExports.useState("all");
  const [realityIdea, setRealityIdea] = reactExports.useState(null);
  const [detailIdea, setDetailIdea] = reactExports.useState(null);
  const [showGlobalBanner, setShowGlobalBanner] = reactExports.useState(() => {
    if (typeof sessionStorage !== "undefined") {
      return !sessionStorage.getItem("globalAwarenessShown");
    }
    return true;
  });
  const tagsRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const dismissGlobalBanner = reactExports.useCallback(() => {
    setShowGlobalBanner(false);
    sessionStorage.setItem("globalAwarenessShown", "1");
  }, []);
  const { data: backendIdeas, isLoading } = useListPublicIdeas(
    activeSort,
    activeTag === "all" ? void 0 : activeTag,
    50
  );
  const likeMutation = useLikeIdea();
  const remixMutation = useRemixIdea();
  const viewMutation = useIncrementView();
  const rawIdeas = reactExports.useMemo(() => {
    if (backendIdeas && backendIdeas.length > 0) return backendIdeas;
    if (activeTag === "all") return SEED_IDEAS;
    return SEED_IDEAS.filter((i) => i.category === activeTag);
  }, [backendIdeas, activeTag]);
  const sortedIdeas = reactExports.useMemo(
    () => sortIdeas(rawIdeas, activeSort),
    [rawIdeas, activeSort]
  );
  const displayIdeas = reactExports.useMemo(() => {
    if (activeRegion === "all") return sortedIdeas;
    if (activeRegion === "trending") return sortedIdeas.filter((_, i) => i < 4);
    if (activeRegion === "worldwide")
      return [...sortedIdeas].sort((a, b) => b.viralScore - a.viralScore);
    return sortedIdeas.filter((_, i) => getIdeaRegion(i) === activeRegion);
  }, [sortedIdeas, activeRegion]);
  const hotIdeas = reactExports.useMemo(
    () => sortIdeas(SEED_IDEAS, "trending").slice(0, 3),
    []
  );
  const handleLike = reactExports.useCallback(
    (id) => {
      likeMutation.mutate(id, {
        onSuccess: () => {
          ue.success("+5 XP", {
            description: "You liked an idea!",
            className: "toast-xp",
            duration: 3e3
          });
        }
      });
    },
    [likeMutation]
  );
  const handleRemix = reactExports.useCallback(
    (idea) => {
      ue.success("+15 XP — Remix started!", {
        description: `Remixing "${idea.appName}"`,
        className: "toast-xp",
        duration: 3e3
      });
      remixMutation.mutate(idea.id);
      navigate({ to: "/builder/$id", params: { id: "new" } });
    },
    [remixMutation, navigate]
  );
  const handleView = reactExports.useCallback(
    (id) => {
      viewMutation.mutate(id);
    },
    [viewMutation]
  );
  const handleOpenDetail = reactExports.useCallback((idea) => {
    setDetailIdea(idea);
  }, []);
  const handleCloseDetail = reactExports.useCallback(() => {
    setDetailIdea(null);
  }, []);
  function handleRealityTest(idea) {
    setRealityIdea(idea);
  }
  function handleRealityClose() {
    setRealityIdea(null);
    ue.success("Reality Test Complete! +20 XP 🌐", {
      description: "Your app survived 10,000 virtual users!",
      className: "toast-xp",
      duration: 4e3
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", "data-ocid": "feed.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-card border-b border-border/40 px-4 py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-16 left-1/4 w-64 h-64 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, oklch(0.72 0.22 262 / 0.18) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-8 right-1/4 w-48 h-48 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, oklch(0.75 0.28 50 / 0.14) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "relative z-10 max-w-2xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-black leading-tight gradient-hologram bg-clip-text text-transparent", children: "🌍 Creator Universe Feed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground font-body text-base md:text-lg", children: "See what the world is creating. Remix anything. Become a legend." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showGlobalBanner && /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalAwarenessBanner, { onDismiss: dismissGlobalBanner }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/30 px-4 py-3 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: tagsRef,
            className: "flex gap-2 overflow-x-auto scrollbar-hide pb-0.5",
            "data-ocid": "feed.tags_bar",
            children: TAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${activeTag === tag.id ? "bg-primary/20 border border-primary/70 text-primary shadow-[0_0_12px_oklch(var(--primary)/0.3)]" : "glass border border-border/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
                "data-ocid": `feed.tag.${tag.id}`,
                onClick: () => setActiveTag(tag.id),
                children: tag.label
              },
              tag.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex gap-2 overflow-x-auto scrollbar-hide",
            "data-ocid": "feed.sort_bar",
            children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${activeSort === opt.id ? "bg-secondary/20 border border-secondary/60 text-secondary" : "text-muted-foreground hover:text-foreground"}`,
                "data-ocid": `feed.sort.${opt.id}`,
                onClick: () => setActiveSort(opt.id),
                children: opt.label
              },
              opt.id
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-4 pb-1", "data-ocid": "feed.region_filter_bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto scrollbar-hide pb-1", children: REGION_FILTERS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: `region-filter flex-shrink-0 text-sm font-semibold ${activeRegion === r.id ? "!border-primary/70 !bg-primary/15 text-primary shadow-[0_0_10px_oklch(var(--primary)/0.25)]" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": `feed.region.${r.id}`,
          onClick: () => setActiveRegion(r.id),
          children: r.label
        },
        r.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pt-3", "data-ocid": "feed.hot_strip", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3", children: "🔥 Hot Right Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto scrollbar-hide pb-1", children: hotIdeas.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(HotCard, { idea, rank: i + 1 }, String(idea.id))) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-6", "data-ocid": "feed.grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoRefreshIndicator, {}),
          activeRegion === "worldwide" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-bold px-2.5 py-1 rounded-full",
              style: {
                background: "oklch(0.62 0.25 280 / 0.12)",
                border: "1px solid oklch(0.62 0.25 280 / 0.4)",
                color: "oklch(0.42 0.22 280)"
              },
              children: "🔥 Sorted by viral score"
            }
          )
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SKELETON_KEYS.map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, sk)) }) : displayIdeas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-24 gap-4 text-center",
            "data-ocid": "feed.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: "🌌" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: "No ideas in this region yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "Be the first to create and publish an idea here. The universe is empty — fill it!" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: displayIdeas.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IdeaCard,
            {
              idea,
              index: i,
              region: getIdeaRegion(i),
              showViralBadge: activeRegion === "worldwide",
              onLike: handleLike,
              onRemix: handleRemix,
              onView: handleView,
              onPublishReality: handleRealityTest,
              onOpenDetail: handleOpenDetail
            }
          ),
          i === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "col-span-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(IntelBanner, {})
            },
            `intel-${String(idea.id)}`
          )
        ] }, String(idea.id))) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: realityIdea && /* @__PURE__ */ jsxRuntimeExports.jsx(RealityModal, { idea: realityIdea, onClose: handleRealityClose }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: detailIdea && /* @__PURE__ */ jsxRuntimeExports.jsx(
      IdeaDetailModal,
      {
        idea: detailIdea,
        onClose: handleCloseDetail,
        onRemix: handleRemix
      }
    ) })
  ] });
}
export {
  Feed as default
};
