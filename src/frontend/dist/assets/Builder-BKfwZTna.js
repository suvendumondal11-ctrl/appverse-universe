import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, u as useNavigate, r as reactExports, b as ue, X } from "./index-BB65hrJ6.js";
import { j as usePublishIdea, k as useAwardXp, d as useCreateProject, l as MOOD_CONFIG, e as useGenerate, m as generateViralAngles } from "./index-DGa1wCGE.js";
import { S as Sparkles, Z as Zap } from "./zap-ejWsDErG.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import { A as AnimatePresence } from "./index-BDLPNy_3.js";
import { R as Rocket } from "./rocket-CuDcpT84.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-B3eK8ND6.js";
import { C as Check } from "./check-Dk6czMzH.js";
import { C as Copy } from "./copy-D_TgVocj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
function scoreToColor(score) {
  if (score >= 80)
    return {
      stroke: "oklch(0.85 0.18 200)",
      glow: "oklch(0.85 0.18 200 / 0.5)"
    };
  if (score >= 60)
    return {
      stroke: "oklch(0.78 0.22 230)",
      glow: "oklch(0.78 0.22 230 / 0.4)"
    };
  if (score >= 40)
    return {
      stroke: "oklch(0.72 0.22 262)",
      glow: "oklch(0.72 0.22 262 / 0.4)"
    };
  return { stroke: "oklch(0.75 0.28 50)", glow: "oklch(0.75 0.28 50 / 0.4)" };
}
function SuccessRing({
  score,
  size = 120,
  animate = true,
  className,
  children
}) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - clampedScore / 100);
  const center = size / 2;
  const { stroke, glow } = scoreToColor(clampedScore);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative inline-flex items-center justify-center flex-col",
        className
      ),
      "data-ocid": "success_ring",
      style: { width: size, height: size },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: size,
            height: size,
            className: "absolute inset-0 -rotate-90",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: center,
                  cy: center,
                  r: radius,
                  fill: "none",
                  stroke: "oklch(var(--border) / 0.3)",
                  strokeWidth: 8
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "ring-glow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3", result: "blur" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: center,
                  cy: center,
                  r: radius,
                  fill: "none",
                  stroke,
                  strokeWidth: 8,
                  strokeLinecap: "round",
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                  filter: "url(#ring-glow)",
                  className: cn(animate && "success-ring"),
                  style: {
                    transition: animate ? "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)" : void 0,
                    filter: `drop-shadow(0 0 6px ${glow})`
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display font-black leading-none",
              style: {
                fontSize: size * 0.22,
                color: stroke,
                textShadow: `0 0 16px ${glow}`
              },
              children: clampedScore
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-muted-foreground font-body",
              style: { fontSize: size * 0.1 },
              children: "/ 100"
            }
          )
        ] }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-full", children })
      ]
    }
  );
}
const IDEA_CHIPS = [
  {
    label: "🏋️ Fitness App",
    prompt: "fitness app with daily challenges and friend competition"
  },
  {
    label: "📚 Study Buddy",
    prompt: "study buddy with flashcards, progress tracking and AI tutoring"
  },
  {
    label: "🍕 Recipe Finder",
    prompt: "recipe finder with personalized recommendations and shopping list"
  },
  {
    label: "💰 Budget Tracker",
    prompt: "budget tracker with spending insights and savings goals"
  },
  {
    label: "🎵 Music App",
    prompt: "music app with mood-based playlists and social sharing"
  },
  {
    label: "🌍 Travel Planner",
    prompt: "travel planner with AI itinerary generation and local tips"
  }
];
const MOOD_FEATURE_SUGGESTIONS = {
  happy: ["🎮 Gamified Rewards", "👥 Social Challenges", "🎉 Celebration Feed"],
  calm: ["🧘 Minimalist Design", "⏱️ Focus Timer", "📓 Mindful Journaling"],
  inspired: ["🎨 Creative Canvas", "🌐 AR Mode", "💡 Idea Spark Board"],
  focused: [
    "📊 Analytics Dashboard",
    "⚡ Productivity Tools",
    "📋 Smart Task Queue"
  ]
};
const CATEGORY_DATA = {
  fitness: {
    names: ["FitQuest Pro", "ActiveLife", "PowerTrack"],
    features: [
      "🏆 Daily Challenges",
      "👥 Friend Competition",
      "📊 Progress Tracking",
      "🎯 Goal Setting",
      "🔥 Streak Rewards"
    ],
    earningModel: "💰 Freemium + Premium Subscription ($4.99/mo)",
    palette: ["#00ffd5", "#7c3aed", "#ff6b35"],
    categoryLabel: "Health & Fitness",
    scores: { market: 88, uniqueness: 72, monetization: 78, viral: 85 }
  },
  education: {
    names: ["StudyBrain", "LearnSphere", "AcademiQ"],
    features: [
      "🃏 Smart Flashcards",
      "🤖 AI Tutor",
      "📈 Progress Analytics",
      "🏅 Achievement Badges",
      "👥 Study Groups"
    ],
    earningModel: "💰 Freemium + Pro Plan ($7.99/mo)",
    palette: ["#60a5fa", "#a78bfa", "#34d399"],
    categoryLabel: "Education",
    scores: { market: 91, uniqueness: 68, monetization: 72, viral: 74 }
  },
  food: {
    names: ["ChefMind", "RecipeVerse", "TasteAI"],
    features: [
      "🍳 AI Recipe Generator",
      "🛒 Smart Shopping List",
      "📷 Ingredient Scanner",
      "⭐ Personal Ratings",
      "🌍 Cuisine Explorer"
    ],
    earningModel: "💰 Free + Premium Collections ($2.99/mo)",
    palette: ["#fb923c", "#f59e0b", "#a3e635"],
    categoryLabel: "Food & Cooking",
    scores: { market: 82, uniqueness: 76, monetization: 65, viral: 88 }
  },
  finance: {
    names: ["WealthPulse", "CashFlow AI", "MintSense"],
    features: [
      "💳 Expense Tracking",
      "🎯 Savings Goals",
      "📉 Spending Insights",
      "🔔 Bill Reminders",
      "📊 Net Worth Dashboard"
    ],
    earningModel: "💰 Freemium + Financial Tools ($5.99/mo)",
    palette: ["#22c55e", "#06b6d4", "#f59e0b"],
    categoryLabel: "Finance",
    scores: { market: 85, uniqueness: 65, monetization: 88, viral: 68 }
  },
  entertainment: {
    names: ["VibeFlow", "SoundVerse", "MoodBeats"],
    features: [
      "🎵 Mood-Based Playlists",
      "👥 Social Listening",
      "🎤 Karaoke Mode",
      "📻 Radio Discovery",
      "🌟 Trending Charts"
    ],
    earningModel: "💰 Ad-Supported + Premium ($3.99/mo)",
    palette: ["#e879f9", "#818cf8", "#fb7185"],
    categoryLabel: "Entertainment",
    scores: { market: 78, uniqueness: 70, monetization: 74, viral: 92 }
  },
  travel: {
    names: ["WanderAI", "NomadMind", "ExploreNow"],
    features: [
      "🗺️ AI Itinerary Builder",
      "🏨 Smart Hotel Picks",
      "🌤️ Weather Integration",
      "📸 Travel Journal",
      "💬 Local Insider Tips"
    ],
    earningModel: "💰 Free + Travel Partnerships (Commission)",
    palette: ["#38bdf8", "#34d399", "#fbbf24"],
    categoryLabel: "Travel",
    scores: { market: 80, uniqueness: 78, monetization: 70, viral: 82 }
  },
  productivity: {
    names: ["FlowOS", "MindForge", "ZenWork"],
    features: [
      "⚡ Smart Task Engine",
      "🤖 AI Assistant",
      "📅 Calendar Sync",
      "📊 Productivity Metrics",
      "🔄 Workflow Automation"
    ],
    earningModel: "💰 Freemium + Teams Plan ($9.99/mo)",
    palette: ["#818cf8", "#a78bfa", "#06b6d4"],
    categoryLabel: "Productivity",
    scores: { market: 84, uniqueness: 71, monetization: 85, viral: 72 }
  }
};
function detectCategory(prompt) {
  const lower = prompt.toLowerCase();
  if (/fitness|workout|gym|exercise|health|run|sport/.test(lower))
    return "fitness";
  if (/study|learn|education|school|tutor|course|quiz/.test(lower))
    return "education";
  if (/recipe|cook|food|meal|ingredient|chef|kitchen/.test(lower))
    return "food";
  if (/money|budget|finance|expense|saving|invest|bank|cash/.test(lower))
    return "finance";
  if (/music|song|play|listen|beat|sound|audio|podcast/.test(lower))
    return "entertainment";
  if (/travel|trip|journey|explore|vacation|hotel|flight/.test(lower))
    return "travel";
  return "productivity";
}
function generateApp(prompt) {
  const cat = detectCategory(prompt);
  const data = CATEGORY_DATA[cat];
  const nameIdx = Math.floor(Math.random() * 3);
  const v = Math.floor(Math.random() * 11) - 5;
  const successScore = Math.min(
    99,
    Math.max(
      60,
      Math.round(
        (data.scores.market + data.scores.uniqueness + data.scores.monetization + data.scores.viral) / 4
      ) + v
    )
  );
  return {
    appName: data.names[nameIdx],
    category: cat,
    categoryLabel: data.categoryLabel,
    description: `An AI-powered ${data.categoryLabel.toLowerCase()} app built for the next generation of users. Designed for engagement, retention, and viral growth.`,
    features: data.features,
    earningModel: data.earningModel,
    palette: data.palette,
    successScore,
    marketScore: Math.min(99, data.scores.market + v),
    uniquenessScore: Math.min(99, data.scores.uniqueness + v),
    monetizationScore: Math.min(99, data.scores.monetization + v),
    viralScore: Math.min(99, data.scores.viral + v)
  };
}
const AI_TEAM_STEPS = [
  {
    icon: "🎨",
    name: "ELARA — Creative Director",
    task: "Crafting your UI theme, colour palette, and visual identity...",
    detail: "swatches"
  },
  {
    icon: "⚡",
    name: "KAI — Lead Engineer",
    task: "Architecting features, API routes, and the backend logic...",
    detail: "code"
  },
  {
    icon: "📊",
    name: "ATLAS — Growth Strategist",
    task: "Sizing the market opportunity and nailing your monetisation play...",
    detail: "bar"
  },
  {
    icon: "🔥",
    name: "NOVA — Viral Growth Expert",
    task: "Engineering your viral loop and growth-hacking strategy...",
    detail: "score"
  }
];
const AI_PERSONAS = [
  {
    role: "Creative Director",
    roleClass: "ai-designer",
    avatar: "🎨",
    color: "oklch(0.75 0.25 262)",
    name: "ELARA",
    generalSuggestions: [
      "Nail the first 5 seconds — your onboarding is where users decide to stay or bail",
      "Micro-animations on key actions make the app feel alive, not just functional"
    ],
    fitnessSuggestions: [
      "Vibrant gradients signal energy — make progress feel electric, not clinical",
      "Animated achievement badges trigger dopamine — users will share them without being asked"
    ],
    educationSuggestions: [
      "Calm blues and structured layouts keep focus sharp — less friction, more flow",
      "Progress rings are addictive — they make users feel the gap between where they are and their goal"
    ],
    foodSuggestions: [
      "Warm amber tones invoke hunger and warmth — users will feel it before they read a word",
      "Full-bleed food photography is your biggest retention lever — make it look delicious"
    ],
    entertainmentSuggestions: [
      "Dark mode with neon accents creates an immersive world users want to live inside",
      "Swipe gestures make discovery feel like play — borrow everything TikTok taught us"
    ],
    travelSuggestions: [
      "Full-bleed photography with overlay cards sells the dream before a single feature is read",
      "A map-centric layout anchors every experience — users need to feel like they're already there"
    ]
  },
  {
    role: "Lead Engineer",
    roleClass: "ai-developer",
    avatar: "⚡",
    color: "oklch(0.72 0.24 140)",
    name: "KAI",
    generalSuggestions: [
      "Offline-first with service workers — your app should work on a train with no signal",
      "Cache user progress locally — nobody should lose their streak because of a bad connection"
    ],
    fitnessSuggestions: [
      "Tap into device sensors for passive step counting — zero effort for the user",
      "Push notifications for streak reminders are your most powerful retention lever"
    ],
    educationSuggestions: [
      "Spaced repetition is scientifically proven — bake it into your flashcard algorithm",
      "Cross-device sync keeps users in the habit even when they switch phones"
    ],
    financeSuggestions: [
      "Bank-grade encryption isn't optional — users won't trust you without it",
      "Biometric auth for anything sensitive — make security feel effortless"
    ],
    entertainmentSuggestions: [
      "Adaptive bitrate audio streaming keeps playback smooth regardless of connection",
      "WebSocket-based listening parties create real-time social moments that go viral"
    ],
    travelSuggestions: [
      "GPS-based real-time local tips make your app feel genuinely useful on the ground",
      "Offline map caching means your app works when the user needs it most"
    ]
  },
  {
    role: "Growth Strategist",
    roleClass: "ai-business",
    avatar: "📊",
    color: "oklch(0.78 0.25 70)",
    name: "ATLAS",
    generalSuggestions: [
      "Freemium converts best when the free tier is genuinely great — make premium feel irresistible, not like a paywall",
      "Referral rewards cost less than paid acquisition and convert 5x better"
    ],
    fitnessSuggestions: [
      "A premium coaching tier at $14.99/mo closes consistently — health spend has high emotional ROI",
      "Corporate wellness deals = recurring B2B revenue that doesn't churn"
    ],
    educationSuggestions: [
      "Institution licences give you predictable MRR at scale — think beyond individual users",
      "Certification add-ons justify premium pricing — people pay for credentials"
    ],
    financeSuggestions: [
      "Financial marketplace referrals have the highest LTV of any category — build those partnerships early",
      "The premium plan should literally pay for itself through savings — make that the headline"
    ],
    entertainmentSuggestions: [
      "Ad + subscription hybrid maximizes ARPU — give users a choice and they'll often upgrade",
      "Artist merch integration creates a revenue stream that feels organic, not corporate"
    ],
    productivitySuggestions: [
      "Team tier at $9.99/seat scales with org growth — one enterprise deal beats 100 individual signups",
      "Annual billing cuts churn by 40% — price it at a discount and watch conversions spike"
    ]
  },
  {
    role: "Viral Growth Expert",
    roleClass: "ai-marketing",
    avatar: "🔥",
    color: "oklch(0.72 0.26 330)",
    name: "NOVA",
    generalSuggestions: [
      "Social sharing isn't a feature — it's the product. Build sharing into every win.",
      "Daily challenge mechanics are your most powerful tool for converting passive users into addicts"
    ],
    fitnessSuggestions: [
      "A 30-day challenge with daily Instagram story output is self-marketing — users become your ads",
      "Leaderboard FOMO converts 3x more free trials than any banner ad"
    ],
    educationSuggestions: [
      "Streaks (Duolingo-style) aren't just gamification — they're the single biggest retention driver in education apps",
      "Back-to-school campaigns can drive 10x your normal install rate in a single week"
    ],
    foodSuggestions: [
      "TikTok recipe videos cost nothing to produce and can drive 100k users organically",
      "UGC recipe sharing lowers your CAC by 60% — let your users market for you"
    ],
    entertainmentSuggestions: [
      "Shared playlists are your viral loop — every share is a free acquisition",
      "Real-time listening parties create moments worth screenshotting and posting"
    ],
    travelSuggestions: [
      "Travel journal sharing drives the best kind of word-of-mouth — people brag about trips",
      "Seasonal campaigns timed to booking surges can 10x your install rate at near-zero cost"
    ]
  }
];
function getPersonaSuggestions(persona, category) {
  switch (category) {
    case "fitness":
      return persona.fitnessSuggestions ?? persona.generalSuggestions;
    case "education":
      return persona.educationSuggestions ?? persona.generalSuggestions;
    case "food":
      return persona.foodSuggestions ?? persona.generalSuggestions;
    case "finance":
      return persona.financeSuggestions ?? persona.generalSuggestions;
    case "entertainment":
      return persona.entertainmentSuggestions ?? persona.generalSuggestions;
    case "travel":
      return persona.travelSuggestions ?? persona.generalSuggestions;
    default:
      return persona.productivitySuggestions ?? persona.generalSuggestions;
  }
}
const MOOD_KEYS = ["happy", "calm", "inspired", "focused"];
function MoodSelector({ selected, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.05 },
      className: "relative z-10 w-full max-w-2xl",
      "data-ocid": "builder.mood_selector",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "❤️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground", children: "How are you feeling right now?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap sm:flex-nowrap", children: MOOD_KEYS.map((mood) => {
          const cfg = MOOD_CONFIG[mood];
          const isActive = selected === mood;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.96 },
              onClick: () => onSelect(isActive ? null : mood),
              className: "flex-1 min-w-[72px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200",
              style: isActive ? {
                background: `${cfg.primaryColor}20`,
                borderColor: cfg.primaryColor,
                color: cfg.primaryColor,
                boxShadow: `0 0 14px ${cfg.primaryColor}50`
              } : {
                background: "oklch(var(--muted) / 0.4)",
                borderColor: "oklch(var(--border) / 0.4)",
                color: "oklch(var(--muted-foreground))"
              },
              "data-ocid": `builder.mood_button.${mood}`,
              "aria-pressed": isActive,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cfg.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cfg.label })
              ]
            },
            mood
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.25 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-3 px-4 py-2.5 rounded-xl text-xs font-medium",
                style: {
                  background: `${MOOD_CONFIG[selected].primaryColor}15`,
                  border: `1px solid ${MOOD_CONFIG[selected].primaryColor}30`,
                  color: MOOD_CONFIG[selected].primaryColor
                },
                "data-ocid": "builder.mood_banner",
                children: [
                  "Your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: MOOD_CONFIG[selected].label }),
                  " ",
                  "energy is detected — creating",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold italic", children: MOOD_CONFIG[selected].suggestionTheme }),
                  " ",
                  "content for you ✨"
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
function AiTeamPanel({ category, mood }) {
  const [expandedIdx, setExpandedIdx] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.38 },
      className: "relative z-10",
      "data-ocid": "builder.ai_team_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-muted-foreground uppercase tracking-widest mb-4", children: "🤖 Your Personal Creation Squad — All In on Your Idea" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mood && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            className: "mb-4 flex flex-wrap gap-2",
            children: MOOD_FEATURE_SUGGESTIONS[mood].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: i * 0.07 },
                className: "px-3 py-1.5 rounded-full text-xs font-semibold border",
                style: {
                  background: `${MOOD_CONFIG[mood].primaryColor}18`,
                  borderColor: `${MOOD_CONFIG[mood].primaryColor}40`,
                  color: MOOD_CONFIG[mood].primaryColor
                },
                "data-ocid": `builder.mood_suggestion.${i + 1}`,
                children: s
              },
              s
            ))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: AI_PERSONAS.map((persona, i) => {
          const suggestions = getPersonaSuggestions(persona, category);
          const isExpanded = expandedIdx === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: `ai-persona ${persona.roleClass} rounded-xl overflow-hidden cursor-pointer`,
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 + i * 0.08 },
              whileHover: { y: -2 },
              "data-ocid": `builder.ai_persona.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center gap-3 p-4 text-left",
                    onClick: () => setExpandedIdx(isExpanded ? null : i),
                    "aria-expanded": isExpanded,
                    "data-ocid": `builder.ai_persona_toggle.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-10 w-10 rounded-xl flex items-center justify-center text-xl shrink-0",
                          style: {
                            background: `${persona.color}20`,
                            border: `1.5px solid ${persona.color}60`,
                            boxShadow: `0 0 12px ${persona.color}30`
                          },
                          children: persona.avatar
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "font-display font-bold text-sm",
                            style: { color: persona.color },
                            children: persona.role
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                          "AI · ",
                          persona.name
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: persona.color }, children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
                    ]
                  }
                ),
                !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 space-y-1.5", children: suggestions.slice(0, 2).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 text-xs text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "mt-0.5 h-1.5 w-1.5 rounded-full shrink-0",
                          style: { background: persona.color }
                        }
                      ),
                      s
                    ]
                  },
                  s
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.25 },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 space-y-2.5", children: suggestions.map((s, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -8 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: si * 0.07 },
                        className: "flex items-start gap-2.5 p-2.5 rounded-lg text-xs",
                        style: {
                          background: `${persona.color}10`,
                          border: `1px solid ${persona.color}25`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "mt-0.5 h-2 w-2 rounded-full shrink-0",
                              style: {
                                background: persona.color,
                                boxShadow: `0 0 6px ${persona.color}80`
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 leading-relaxed", children: s })
                        ]
                      },
                      s
                    )) })
                  }
                ) })
              ]
            },
            persona.name
          );
        }) })
      ]
    }
  );
}
function PhonePreviewModal({ app, onClose }) {
  const [darkMode, setDarkMode] = reactExports.useState(true);
  const [isScanning, setIsScanning] = reactExports.useState(false);
  const [showRecalc, setShowRecalc] = reactExports.useState(false);
  const prevAppRef = reactExports.useRef(app);
  const displayFeatures = app.features.slice(0, 4);
  const [p1, p2, p3] = app.palette;
  reactExports.useEffect(() => {
    if (prevAppRef.current !== app) {
      prevAppRef.current = app;
      setIsScanning(true);
      setShowRecalc(true);
      setTimeout(() => setIsScanning(false), 800);
      setTimeout(() => setShowRecalc(false), 1800);
    }
  }, [app]);
  reactExports.useEffect(() => {
    setIsScanning(true);
    setShowRecalc(true);
    const t1 = setTimeout(() => setIsScanning(false), 800);
    const t2 = setTimeout(() => setShowRecalc(false), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      style: {
        background: "oklch(0.05 0 0 / 0.85)",
        backdropFilter: "blur(12px)"
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      "data-ocid": "builder.preview_modal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "relative rounded-2xl p-6 sm:p-8 glass-glow max-w-sm w-full",
          initial: { scale: 0.85, opacity: 0, y: 20 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.9, opacity: 0 },
          transition: { type: "spring", stiffness: 280, damping: 24 },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: "Reality Preview Mode" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "See your app on device ✨" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDarkMode(!darkMode),
                    className: "px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/30 border border-border/30 text-muted-foreground hover:text-foreground transition-smooth",
                    "data-ocid": "builder.preview_theme_toggle",
                    children: darkMode ? "☀️ Light" : "🌙 Dark"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    className: "h-8 w-8 rounded-lg flex items-center justify-center bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-smooth",
                    "aria-label": "Close preview",
                    "data-ocid": "builder.preview_close_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-[2px] rounded-[46px]",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.62 0.25 280), oklch(0.75 0.28 50), oklch(0.72 0.26 330), oklch(0.72 0.22 262))",
                    backgroundSize: "300% 300%",
                    animation: "phone-holo-border 4s ease-in-out infinite"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "phone-frame relative overflow-hidden",
                      style: {
                        borderColor: darkMode ? "oklch(0.18 0.01 0)" : "oklch(0.88 0.01 0)",
                        boxShadow: `0 0 60px ${p1}30, 0 20px 60px oklch(0.05 0 0 / 0.8)`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isScanning && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-x-0 z-20 pointer-events-none",
                            style: {
                              height: "2px",
                              background: `linear-gradient(90deg, transparent, ${p1}, oklch(0.85 0.3 200), ${p1}, transparent)`,
                              boxShadow: `0 0 12px ${p1}80, 0 0 24px ${p1}40`
                            },
                            initial: { top: "0%", opacity: 0 },
                            animate: { top: "100%", opacity: [0, 1, 1, 0] },
                            exit: { opacity: 0 },
                            transition: { duration: 0.8, ease: "linear" }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            className: "w-full h-full",
                            animate: { opacity: isScanning ? 0.7 : 1 },
                            transition: { duration: 0.15 },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "phone-notch",
                                  style: {
                                    background: darkMode ? "oklch(0.14 0.01 0)" : "oklch(0.9 0.01 0)"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "phone-content",
                                  style: {
                                    background: darkMode ? "oklch(0.1 0.01 0)" : "oklch(0.97 0.005 0)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className: "flex items-center justify-between px-4 pt-8 pb-2",
                                        style: { background: darkMode ? `${p1}18` : `${p1}12` },
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className: "text-[10px] font-mono",
                                              style: {
                                                color: darkMode ? "oklch(0.7 0 0)" : "oklch(0.4 0 0)"
                                              },
                                              children: "9:41"
                                            }
                                          ),
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className: "text-[9px]",
                                              style: {
                                                color: darkMode ? "oklch(0.6 0 0)" : "oklch(0.5 0 0)"
                                              },
                                              children: "●●● ▲ 🔋"
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className: "px-4 py-3 border-b",
                                        style: {
                                          borderColor: darkMode ? `${p1}25` : `${p1}30`,
                                          background: darkMode ? `${p1}10` : `${p1}08`
                                        },
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              className: "font-display font-black text-base",
                                              style: { color: p1, textShadow: `0 0 12px ${p1}60` },
                                              children: app.appName
                                            }
                                          ),
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              className: "text-[10px] mt-0.5",
                                              style: {
                                                color: darkMode ? "oklch(0.55 0 0)" : "oklch(0.5 0 0)"
                                              },
                                              children: app.categoryLabel
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 space-y-2", children: displayFeatures.map((feat, fi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      motion.div,
                                      {
                                        initial: { opacity: 0, x: -6 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: { delay: 0.15 + fi * 0.06 },
                                        className: "flex items-center gap-2 rounded-lg px-3 py-2 text-[11px]",
                                        style: {
                                          background: darkMode ? `${app.palette[fi % 3]}15` : `${app.palette[fi % 3]}10`,
                                          border: `1px solid ${app.palette[fi % 3]}30`,
                                          color: darkMode ? "oklch(0.8 0 0)" : "oklch(0.25 0 0)"
                                        },
                                        children: feat
                                      },
                                      feat
                                    )) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-ui mx-3 mb-3 rounded-xl overflow-hidden flex flex-col gap-2", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "div",
                                        {
                                          className: "h-16 rounded-lg",
                                          style: {
                                            background: `linear-gradient(135deg, ${p1}40, ${p2}30)`,
                                            border: `1px solid ${p1}25`
                                          }
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            className: "h-10 rounded-lg",
                                            style: {
                                              background: `${p2}30`,
                                              border: `1px solid ${p2}20`
                                            }
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            className: "h-10 rounded-lg",
                                            style: {
                                              background: `${p3}30`,
                                              border: `1px solid ${p3}20`
                                            }
                                          }
                                        )
                                      ] }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "div",
                                        {
                                          className: "h-8 rounded-lg flex items-center justify-center text-[10px] font-semibold",
                                          style: {
                                            background: `linear-gradient(90deg, ${p1}, ${p2})`,
                                            color: "white"
                                          },
                                          children: "Launch App →"
                                        }
                                      )
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "phone-indicator" })
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showRecalc && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  className: "flex items-center gap-1.5 text-[11px] font-semibold",
                  style: { color: p1 },
                  "data-ocid": "builder.recalc_label",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        animate: { rotate: 360 },
                        transition: {
                          duration: 0.6,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear"
                        },
                        className: "inline-block",
                        children: "⟳"
                      }
                    ),
                    "Recalculating reality..."
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center gap-1",
                  "data-ocid": "builder.preview_stages",
                  children: [
                    { label: "Concept", color: "#00ff8c", active: true },
                    { label: "Design", color: "#ffe033", active: true },
                    { label: "Reality", color: "#00e5ff", active: true }
                  ].map((stage, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-1 flex-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            className: "flex flex-col items-center gap-1",
                            initial: { opacity: 0, scale: 0.5 },
                            animate: { opacity: 1, scale: 1 },
                            transition: {
                              delay: i * 0.12,
                              type: "spring",
                              stiffness: 400
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.div,
                                {
                                  className: "h-2.5 w-2.5 rounded-full",
                                  style: {
                                    background: stage.color,
                                    border: `1.5px solid ${stage.color}`
                                  },
                                  animate: {
                                    boxShadow: [
                                      `0 0 4px ${stage.color}`,
                                      `0 0 12px ${stage.color}, 0 0 24px ${stage.color}60`,
                                      `0 0 4px ${stage.color}`
                                    ]
                                  },
                                  transition: {
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.4
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-[9px] font-medium",
                                  style: { color: stage.color },
                                  children: stage.label
                                }
                              )
                            ]
                          }
                        ),
                        i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "flex-1 h-px mb-3",
                            style: { background: "oklch(var(--border) / 0.3)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: "h-full",
                                style: {
                                  background: `linear-gradient(90deg, ${stage.color}, ${arr[i + 1].color})`
                                },
                                initial: { width: 0 },
                                animate: { width: "100%" },
                                transition: { delay: i * 0.15 + 0.3, duration: 0.4 }
                              }
                            )
                          }
                        )
                      ]
                    },
                    stage.label
                  ))
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-5", children: [
              "Tap outside or press",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-1.5 py-0.5 rounded bg-muted/40 font-mono text-[10px]", children: "Esc" }),
              " ",
              "to close"
            ] })
          ]
        }
      )
    }
  );
}
function computeForecast(prompt) {
  if (!prompt.trim()) {
    return { market: 0, uniqueness: 0, monetization: 0, viral: 0 };
  }
  const cat = detectCategory(prompt);
  const data = CATEGORY_DATA[cat];
  const words = prompt.trim().split(/\s+/).length;
  const lengthBonus = Math.min(words * 1.5, 12);
  const hasSocial = /social|friend|share|compe|viral|community/.test(
    prompt.toLowerCase()
  );
  const hasMoney = /earn|premium|pay|subscri|money|revenue|monetiz/.test(
    prompt.toLowerCase()
  );
  const hasUnique = /unique|innov|original|new|novel|never/.test(
    prompt.toLowerCase()
  );
  return {
    market: Math.min(99, Math.round(data.scores.market + lengthBonus)),
    uniqueness: Math.min(
      99,
      Math.round(
        data.scores.uniqueness + (hasUnique ? 10 : 0) + lengthBonus * 0.5
      )
    ),
    monetization: Math.min(
      99,
      Math.round(
        data.scores.monetization + (hasMoney ? 10 : 0) + lengthBonus * 0.5
      )
    ),
    viral: Math.min(
      99,
      Math.round(data.scores.viral + (hasSocial ? 12 : 0) + lengthBonus * 0.5)
    )
  };
}
function getForecastRec(avg) {
  if (avg >= 60)
    return "This idea has real legs. Strong market signal, solid virality. Sharpen the unique hook and you could be looking at a top-10 launch.";
  if (avg >= 40)
    return "Solid concept with clear room to grow. Add social sharing and a challenge loop — those two tweaks alone could push you into the top tier.";
  return "You've got something interesting here. Dial in the monetisation model and add a social hook — those are the two levers that turn a good idea into a viral one.";
}
const GAUGE_META = [
  {
    key: "market",
    label: "Market Fit",
    color: "oklch(0.72 0.22 262)"
  },
  {
    key: "uniqueness",
    label: "Uniqueness",
    color: "oklch(0.62 0.25 280)"
  },
  {
    key: "monetization",
    label: "Monetization",
    color: "oklch(0.75 0.28 50)"
  },
  {
    key: "viral",
    label: "Viral Factor",
    color: "oklch(0.72 0.26 330)"
  }
];
function MiniGauge({
  value,
  label,
  color,
  delay
}) {
  const [displayed, setDisplayed] = reactExports.useState(0);
  const frameRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const start = performance.now();
    const duration = 900;
    const from = 0;
    const tick = (now) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - (1 - pct) ** 3;
      setDisplayed(Math.round(from + ease * (value - from)));
      if (pct < 1) frameRef.current = requestAnimationFrame(tick);
    };
    const id = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, delay * 1e3);
    return () => {
      clearTimeout(id);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [value, delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-20 h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full -rotate-90", viewBox: "0 0 80 80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
          label,
          " gauge"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "40",
            cy: "40",
            r: "32",
            fill: "none",
            stroke: "oklch(0.85 0.03 262 / 0.6)",
            strokeWidth: "8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.circle,
          {
            cx: "40",
            cy: "40",
            r: "32",
            fill: "none",
            stroke: color,
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeDasharray: `${2 * Math.PI * 32}`,
            initial: { strokeDashoffset: 2 * Math.PI * 32 },
            animate: {
              strokeDashoffset: 2 * Math.PI * 32 * (1 - value / 100)
            },
            transition: { duration: 0.9, delay, ease: "easeOut" },
            style: { filter: `drop-shadow(0 0 6px ${color}80)` }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-0 flex items-center justify-center font-display font-black text-sm",
          style: { color },
          children: [
            displayed,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] ml-0.5", children: "%" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground text-center leading-tight", children: label })
  ] });
}
function ForecastPanel({ prompt }) {
  const [scores, setScores] = reactExports.useState({
    market: 0,
    uniqueness: 0,
    monetization: 0,
    viral: 0
  });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setScores(computeForecast(prompt));
    }, 500);
    return () => clearTimeout(timer);
  }, [prompt]);
  const avg = Math.round(
    (scores.market + scores.uniqueness + scores.monetization + scores.viral) / 4
  );
  const rec = getForecastRec(avg);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.34 },
      className: "relative z-10 glass-glow rounded-2xl p-6",
      "data-ocid": "builder.success_forecast",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-muted-foreground uppercase tracking-widest", children: "🎯 Auto Success Forecast" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0.7, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { type: "spring", stiffness: 300 },
              className: "px-3 py-1 rounded-full text-xs font-bold",
              style: {
                background: avg >= 60 ? "oklch(0.92 0.08 140 / 0.8)" : avg >= 40 ? "oklch(0.94 0.08 50 / 0.8)" : "oklch(0.92 0.07 262 / 0.8)",
                border: `1px solid ${avg >= 60 ? "oklch(0.52 0.18 140 / 0.4)" : avg >= 40 ? "oklch(0.55 0.22 50 / 0.4)" : "oklch(0.52 0.2 262 / 0.4)"}`,
                color: avg >= 60 ? "oklch(0.3 0.18 140)" : avg >= 40 ? "oklch(0.32 0.2 50)" : "oklch(0.3 0.2 262)"
              },
              children: avg >= 60 ? "Strong" : avg >= 40 ? "Good" : "Developing"
            },
            avg
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-5 leading-relaxed", children: "A live score across 4 dimensions — the higher each number, the better your idea's shot at real-world success. Watch it update as you type." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex flex-col items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full -rotate-90", viewBox: "0 0 112 112", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Overall success score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: "56",
                  cy: "56",
                  r: "46",
                  fill: "none",
                  stroke: "oklch(0.85 0.03 262 / 0.5)",
                  strokeWidth: "10"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.circle,
                {
                  cx: "56",
                  cy: "56",
                  r: "46",
                  fill: "none",
                  stroke: "url(#forecastGrad)",
                  strokeWidth: "10",
                  strokeLinecap: "round",
                  strokeDasharray: `${2 * Math.PI * 46}`,
                  initial: { strokeDashoffset: 2 * Math.PI * 46 },
                  animate: {
                    strokeDashoffset: 2 * Math.PI * 46 * (1 - avg / 100)
                  },
                  transition: { duration: 1.1, ease: "easeOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "linearGradient",
                {
                  id: "forecastGrad",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.22 262)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.75 0.28 50)" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  className: "font-display font-black text-2xl gradient-hologram bg-clip-text text-transparent",
                  children: avg
                },
                avg
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground uppercase tracking-wider", children: "Score" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid grid-cols-2 gap-4", children: GAUGE_META.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            MiniGauge,
            {
              value: scores[g.key],
              label: g.label,
              color: g.color,
              delay: i * 0.1
            },
            g.key
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.6 },
            className: "mt-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-primary/10 border border-primary/20",
            "data-ocid": "builder.forecast_recommendation",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: "💡" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "forecast-rec text-xs leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "AI Insight: " }),
                rec
              ] })
            ]
          },
          rec
        )
      ]
    }
  );
}
function ConstellationBg() {
  const STARS = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    x: (i * 37 + 13) % 100,
    y: (i * 53 + 7) % 100,
    r: 0.8 + i % 3 * 0.5,
    dur: 2.5 + i % 5 * 0.7,
    delay: i % 8 * 0.3
  }));
  const LINES = [
    [0, 5],
    [5, 12],
    [12, 21],
    [21, 8],
    [8, 3],
    [3, 17],
    [17, 29],
    [29, 38],
    [38, 44],
    [44, 31],
    [31, 22],
    [22, 11],
    [11, 6],
    [6, 19],
    [19, 33],
    [33, 41],
    [41, 47],
    [47, 36],
    [36, 25],
    [25, 14]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: "absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid slice",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Background constellation" }),
        LINES.map(([a, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: STARS[a].x,
            y1: STARS[a].y,
            x2: STARS[b].x,
            y2: STARS[b].y,
            stroke: "oklch(0.72 0.22 262)",
            strokeWidth: "0.15",
            strokeDasharray: "1 2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "animate",
              {
                attributeName: "opacity",
                values: "0.3;0.7;0.3",
                dur: `${3 + i * 0.2}s`,
                repeatCount: "indefinite"
              }
            )
          },
          `cl-${a}-${b}`
        )),
        STARS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "circle",
          {
            cx: s.x,
            cy: s.y,
            r: s.r,
            fill: "oklch(0.85 0.18 200)",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animate",
                {
                  attributeName: "opacity",
                  values: "0.4;1;0.4",
                  dur: `${s.dur}s`,
                  begin: `${s.delay}s`,
                  repeatCount: "indefinite"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animate",
                {
                  attributeName: "r",
                  values: `${s.r};${s.r * 1.8};${s.r}`,
                  dur: `${s.dur}s`,
                  begin: `${s.delay}s`,
                  repeatCount: "indefinite"
                }
              )
            ]
          },
          `cs-${s.id}`
        ))
      ]
    }
  );
}
function CountUp({
  target,
  duration = 2e3,
  prefix = "",
  suffix = ""
}) {
  const [value, setValue] = reactExports.useState(0);
  const frameRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - (1 - pct) ** 3;
      setValue(Math.round(ease * target));
      if (pct < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    prefix,
    value.toLocaleString(),
    suffix
  ] });
}
function SubScoreRow({
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-32 shrink-0", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "h-full rounded-full",
        style: { background: color },
        initial: { width: 0 },
        animate: { width: `${value}%` },
        transition: { duration: 1, delay: 0.3, ease: "easeOut" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold w-8 text-right", style: { color }, children: [
      value,
      "%"
    ] })
  ] });
}
function SimulationCard({
  value,
  label,
  glow,
  prefix = "",
  suffix = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4 },
      className: "relative rounded-xl p-4 text-center overflow-hidden",
      style: {
        background: "oklch(var(--card))",
        border: `1px solid ${glow}40`,
        boxShadow: `0 0 16px ${glow}20`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.04] rounded-xl",
            style: {
              background: `radial-gradient(circle at 50% 50%, ${glow}, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative font-display font-black text-xl",
            style: { color: glow, textShadow: `0 0 20px ${glow}80` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { target: value, prefix, suffix })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1 leading-tight", children: label })
      ]
    }
  );
}
const PLATFORM_COLORS = {
  TikTok: "oklch(0.72 0.22 330)",
  Instagram: "oklch(0.72 0.25 20)",
  Twitter: "oklch(0.68 0.18 220)"
};
const PLATFORM_ICONS = {
  TikTok: "🎵",
  Instagram: "📸",
  Twitter: "🐦"
};
function ViralAngleCard({
  angle,
  index
}) {
  const [clipState, setClipState] = reactExports.useState("idle");
  const [shareState, setShareState] = reactExports.useState("idle");
  const platformColor = PLATFORM_COLORS[angle.platform];
  const handleClip = () => {
    setClipState("done");
    setTimeout(() => setClipState("idle"), 2e3);
  };
  const handleShare = () => {
    setShareState("done");
    setTimeout(() => setShareState("idle"), 2e3);
  };
  const viralBadgeColor = angle.viralScore >= 80 ? "oklch(0.7 0.26 25)" : angle.viralScore >= 60 ? "oklch(0.75 0.22 55)" : "oklch(0.78 0.2 85)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.12, duration: 0.45, ease: "easeOut" },
      className: "flex flex-col rounded-2xl overflow-hidden border",
      style: {
        background: "oklch(var(--card))",
        borderColor: `${platformColor}30`,
        boxShadow: `0 4px 24px ${platformColor}12`
      },
      "data-ocid": `builder.viral_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 pt-4 pb-3 flex items-center justify-between",
            style: {
              background: `${platformColor}12`,
              borderBottom: `1px solid ${platformColor}20`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
                  style: {
                    background: `${platformColor}20`,
                    color: platformColor,
                    border: `1px solid ${platformColor}40`
                  },
                  children: [
                    PLATFORM_ICONS[angle.platform],
                    " ",
                    angle.platform
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-xs font-black px-2.5 py-1 rounded-full",
                  style: {
                    background: `${viralBadgeColor}22`,
                    color: viralBadgeColor,
                    border: `1px solid ${viralBadgeColor}40`
                  },
                  "data-ocid": `builder.viral_score.${index + 1}`,
                  children: [
                    "🔥 ",
                    angle.viralScore
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold text-sm text-foreground leading-snug",
              "data-ocid": `builder.viral_headline.${index + 1}`,
              children: angle.hookHeadline
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic leading-relaxed", children: angle.clipSimulation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-1.5 flex-wrap overflow-x-auto pb-0.5",
              "data-ocid": `builder.viral_hashtags.${index + 1}`,
              children: angle.hashtags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "shrink-0 px-2 py-0.5 rounded-full text-[11px] font-medium",
                  style: {
                    background: `${platformColor}12`,
                    color: platformColor,
                    border: `1px solid ${platformColor}25`
                  },
                  children: tag
                },
                tag
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleClip,
                className: "flex-1 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:bg-muted/40",
                style: {
                  borderColor: `${platformColor}30`,
                  color: platformColor
                },
                "data-ocid": `builder.viral_clip_button.${index + 1}`,
                children: clipState === "done" ? "✅ Preview Created!" : "🎬 Generate Clip"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleShare,
                className: "flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-200",
                style: shareState === "done" ? {
                  background: "oklch(0.65 0.18 140)",
                  color: "white",
                  border: "1px solid oklch(0.5 0.18 140)"
                } : {
                  background: `${platformColor}20`,
                  color: platformColor,
                  border: `1px solid ${platformColor}40`
                },
                "data-ocid": `builder.viral_share_button.${index + 1}`,
                children: shareState === "done" ? "✅ Copied!" : "🚀 Share Now"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ViralEngineSection({ appName }) {
  const angles = generateViralAngles(appName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1 },
      className: "relative z-10",
      "data-ocid": "builder.viral_engine_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-2xl p-5 mb-5",
            style: {
              background: "linear-gradient(135deg, oklch(0.97 0.04 330), oklch(0.96 0.03 280))",
              border: "1px solid oklch(0.72 0.22 330 / 0.3)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      animate: { scale: [1, 1.2, 1] },
                      transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                      className: "text-xl",
                      children: "⚡"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-base text-foreground", children: "Auto Viral Engine" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your app is live — now make it go viral. Pick your platform and launch your first clip." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 border border-primary/30 text-primary", children: "3 angles ready" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: angles.map((angle, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ViralAngleCard, { angle, index: i }, angle.id)) })
      ]
    }
  );
}
const LIVE_DATA_RULES = [
  {
    keywords: /fitness|health|workout|exercise|gym/i,
    sources: [
      { emoji: "❤️", name: "Health APIs", color: "oklch(0.72 0.24 350)" },
      { emoji: "⌚", name: "Wearable Sync", color: "oklch(0.68 0.2 280)" },
      { emoji: "🥦", name: "Nutrition DB", color: "oklch(0.68 0.2 145)" }
    ]
  },
  {
    keywords: /doctor|medical|hospital|clinic|appointment/i,
    sources: [
      {
        emoji: "🩺",
        name: "Doctor Availability",
        color: "oklch(0.65 0.22 200)"
      },
      { emoji: "📅", name: "Appointment Slots", color: "oklch(0.7 0.22 262)" },
      { emoji: "📋", name: "Medical Records", color: "oklch(0.67 0.18 180)" }
    ]
  },
  {
    keywords: /map|location|navigation|direction|travel|gps/i,
    sources: [
      { emoji: "📍", name: "GPS Services", color: "oklch(0.7 0.22 160)" },
      { emoji: "🚦", name: "Traffic API", color: "oklch(0.68 0.24 25)" },
      { emoji: "🏛️", name: "Points of Interest", color: "oklch(0.72 0.2 55)" }
    ]
  },
  {
    keywords: /learn|course|education|study|quiz|school/i,
    sources: [
      { emoji: "📚", name: "Course Content API", color: "oklch(0.72 0.22 50)" },
      { emoji: "📈", name: "Progress Tracking", color: "oklch(0.68 0.2 140)" },
      {
        emoji: "🎓",
        name: "Curriculum Updates",
        color: "oklch(0.68 0.22 262)"
      }
    ]
  },
  {
    keywords: /weather|temperature|rain|forecast|climate/i,
    sources: [
      { emoji: "🌤️", name: "Weather API", color: "oklch(0.72 0.2 220)" },
      { emoji: "💨", name: "Air Quality", color: "oklch(0.68 0.18 200)" },
      { emoji: "📡", name: "Forecast Data", color: "oklch(0.7 0.2 240)" }
    ]
  },
  {
    keywords: /food|restaurant|recipe|delivery|eat|meal/i,
    sources: [
      { emoji: "🍽️", name: "Restaurant APIs", color: "oklch(0.72 0.24 30)" },
      { emoji: "📖", name: "Menu Data", color: "oklch(0.74 0.22 50)" },
      { emoji: "🥗", name: "Nutrition DB", color: "oklch(0.68 0.2 145)" }
    ]
  }
];
function getMatchedSources(prompt) {
  if (!prompt.trim()) return null;
  for (const rule of LIVE_DATA_RULES) {
    if (rule.keywords.test(prompt)) return rule.sources;
  }
  return null;
}
function LiveDataPanel({ prompt }) {
  const [sources, setSources] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setSources(getMatchedSources(prompt));
    }, 300);
    return () => clearTimeout(timer);
  }, [prompt]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3 },
      className: "relative z-10 glass-glow rounded-2xl p-5",
      "data-ocid": "builder.live_data_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              animate: { opacity: [1, 0.4, 1] },
              transition: {
                duration: 1.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              className: "h-2 w-2 rounded-full bg-emerald-500 inline-block shrink-0",
              style: { boxShadow: "0 0 8px oklch(0.72 0.2 145 / 0.8)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-muted-foreground uppercase tracking-widest", children: "📡 Suggested Live Data Sources" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Based on your app idea" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: sources ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.3 },
            className: "flex flex-wrap gap-2",
            children: sources.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: i * 0.08 },
                className: "flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold",
                style: {
                  background: `${src.color}18`,
                  border: `1px solid ${src.color}40`,
                  color: src.color
                },
                "data-ocid": `builder.live_source.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: src.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: src.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      animate: { opacity: [1, 0.3, 1] },
                      transition: {
                        duration: 1.4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.2
                      },
                      className: "h-1.5 w-1.5 rounded-full shrink-0",
                      style: { background: "oklch(0.55 0.2 145)" }
                    }
                  )
                ]
              },
              src.name
            ))
          },
          "sources"
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "flex items-center gap-3 text-muted-foreground/60 py-2",
            "data-ocid": "builder.live_data_empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🔍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs leading-relaxed", children: "Start typing your idea to discover matching live data sources..." })
            ]
          },
          "empty"
        ) })
      ]
    }
  );
}
function CopyButton({ text }) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      ue.error("Could not copy to clipboard");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: handleCopy,
      "aria-label": copied ? "Copied!" : "Copy to clipboard",
      className: "h-7 w-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0",
      style: {
        background: copied ? "oklch(0.65 0.2 145 / 0.2)" : "oklch(var(--muted) / 0.5)",
        border: copied ? "1px solid oklch(0.65 0.2 145 / 0.5)" : "1px solid oklch(var(--border) / 0.4)",
        color: copied ? "oklch(0.65 0.2 145)" : "oklch(var(--muted-foreground))"
      },
      children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" })
    }
  );
}
function MultiAiPanel() {
  const [aiPrompt, setAiPrompt] = reactExports.useState("");
  const [device, setDevice] = reactExports.useState(
    "mobile"
  );
  const [error, setError] = reactExports.useState(null);
  const generate = useGenerate();
  const handlePromptChange = (value) => {
    setAiPrompt(value);
    if (generate.data) generate.reset();
    if (error) setError(null);
  };
  const handleGenerate = async () => {
    const finalPrompt = aiPrompt.trim() || "Create a futuristic app idea";
    setError(null);
    try {
      await generate.mutateAsync({ prompt: finalPrompt, device });
    } catch {
      setError("Failed to connect to the AI engine. Please try again.");
    }
  };
  const result = generate.data;
  const isLoading = generate.isPending;
  const DEVICE_OPTIONS = [
    { value: "mobile", label: "Mobile", emoji: "📱" },
    { value: "tablet", label: "Tablet", emoji: "💻" },
    { value: "desktop", label: "Desktop", emoji: "🖥️" }
  ];
  const resultItems = result ? [
    {
      icon: "🧠",
      label: "AI Idea",
      content: result.ai,
      borderColor: "oklch(0.72 0.22 262)",
      glowColor: "oklch(0.72 0.22 262 / 0.35)",
      bgColor: "oklch(0.72 0.22 262 / 0.07)"
    },
    {
      icon: "🌐",
      label: "Live Trend",
      content: result.trend,
      borderColor: "oklch(0.7 0.2 160)",
      glowColor: "oklch(0.7 0.2 160 / 0.35)",
      bgColor: "oklch(0.7 0.2 160 / 0.07)"
    },
    {
      icon: "🎲",
      label: "Lucky Pick",
      content: result.lucky,
      borderColor: "oklch(0.75 0.28 50)",
      glowColor: "oklch(0.75 0.28 50 / 0.35)",
      bgColor: "oklch(0.75 0.28 50 / 0.07)"
    }
  ] : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 },
      className: "relative z-10 w-full max-w-xl mx-auto",
      "data-ocid": "builder.multi_ai_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-8 w-8 rounded-xl flex items-center justify-center shrink-0",
              style: {
                background: "oklch(0.72 0.22 262 / 0.15)",
                border: "1.5px solid oklch(0.72 0.22 262 / 0.5)",
                boxShadow: "0 0 14px oklch(0.72 0.22 262 / 0.2)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "🤖" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: "Multi-AI Intelligence Engine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Multi-AI brain. One smart result 🧠" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-3", "data-ocid": "builder.device_selector", children: DEVICE_OPTIONS.map((opt) => {
          const isActive = device === opt.value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.96 },
              onClick: () => {
                setDevice(opt.value);
                if (generate.data) generate.reset();
              },
              className: "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200",
              style: isActive ? {
                background: "oklch(0.72 0.22 262 / 0.18)",
                borderColor: "oklch(0.72 0.22 262 / 0.7)",
                color: "oklch(0.88 0.15 262)",
                boxShadow: "0 0 12px oklch(0.72 0.22 262 / 0.3)"
              } : {
                background: "oklch(var(--muted) / 0.3)",
                borderColor: "oklch(var(--border) / 0.4)",
                color: "oklch(var(--muted-foreground))"
              },
              "aria-pressed": isActive,
              "data-ocid": `builder.device_button.${opt.value}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.label })
              ]
            },
            opt.value
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: aiPrompt,
              onChange: (e) => handlePromptChange(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !isLoading) handleGenerate();
              },
              placeholder: "Create a futuristic app idea",
              className: "flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200",
              style: {
                background: "oklch(var(--card) / 0.6)",
                border: "1px solid oklch(var(--border) / 0.5)"
              },
              "data-ocid": "builder.multi_ai_input",
              disabled: isLoading
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100",
                style: {
                  animation: "neon-ping 1s ease-out infinite",
                  border: "2px solid oklch(0.72 0.22 262 / 0.8)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                whileHover: !isLoading ? { scale: 1.04 } : void 0,
                whileTap: !isLoading ? { scale: 0.97 } : void 0,
                onClick: handleGenerate,
                disabled: isLoading,
                className: "relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 disabled:cursor-not-allowed",
                style: {
                  background: isLoading ? "oklch(0.72 0.22 262 / 0.3)" : "oklch(0.72 0.22 262 / 0.2)",
                  border: "1.5px solid oklch(0.72 0.22 262 / 0.6)",
                  color: "oklch(0.88 0.15 262)",
                  boxShadow: isLoading ? "none" : "0 0 18px oklch(0.72 0.22 262 / 0.25)"
                },
                "data-ocid": "builder.multi_ai_generate_button",
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Thinking..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generate ⚡" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            className: "mt-3 flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm",
            style: {
              background: "oklch(0.65 0.25 20 / 0.12)",
              border: "1px solid oklch(0.65 0.25 20 / 0.4)",
              color: "oklch(0.65 0.25 20)"
            },
            "data-ocid": "builder.multi_ai_error_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "⚠️ ",
                error
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setError(null);
                    handleGenerate();
                  },
                  className: "text-xs font-semibold underline underline-offset-2 shrink-0 hover:opacity-80 transition-opacity",
                  children: "Try Again"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: result && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.4, ease: "easeOut" },
            className: "mt-4 rounded-2xl overflow-hidden",
            style: {
              background: "oklch(var(--card) / 0.6)",
              border: "1px solid oklch(var(--primary) / 0.2)",
              backdropFilter: "blur(12px)"
            },
            "data-ocid": "builder.multi_ai_result_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-2.5 border-b flex items-center gap-2",
                  style: { borderColor: "oklch(var(--primary) / 0.15)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "✨" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest", children: "Multi-AI Results" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "divide-y",
                  style: { borderColor: "oklch(var(--border) / 0.2)" },
                  children: [
                    resultItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -12 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: idx * 0.1, duration: 0.35 },
                        className: "p-4",
                        style: {
                          background: item.bgColor,
                          borderLeft: `3px solid ${item.borderColor}`
                        },
                        "data-ocid": `builder.multi_ai_section.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: item.icon }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs font-bold uppercase tracking-wide",
                                  style: { color: item.borderColor },
                                  children: item.label
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: item.content })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85 leading-relaxed", children: item.content })
                        ]
                      },
                      item.label
                    )),
                    result.image && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -12 },
                        animate: { opacity: 1, x: 0 },
                        transition: {
                          delay: resultItems.length * 0.1,
                          duration: 0.35
                        },
                        className: "p-4",
                        style: {
                          background: "oklch(0.72 0.26 330 / 0.07)",
                          borderLeft: "3px solid oklch(0.72 0.26 330)"
                        },
                        "data-ocid": "builder.multi_ai_section.4",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🎨" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-xs font-bold uppercase tracking-wide",
                                style: { color: "oklch(0.72 0.26 330)" },
                                children: "AI Visual"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: result.image,
                              alt: "AI-generated visual for your app idea",
                              className: "w-full rounded-xl object-cover",
                              style: {
                                maxHeight: "200px",
                                border: "1.5px solid oklch(0.72 0.26 330 / 0.5)",
                                boxShadow: "0 0 18px oklch(0.72 0.26 330 / 0.25)"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-2", children: "AI-generated visual" })
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function TransformationStages({ prompt, mood }) {
  const conceptActive = true;
  const designActive = prompt.length >= 10;
  const realityActive = mood !== null;
  const stages = [
    {
      label: "Concept",
      active: conceptActive,
      color: "#00ff8c",
      delay: 0
    },
    {
      label: "Design",
      active: designActive,
      color: "#ffe033",
      delay: 0.1
    },
    {
      label: "Reality",
      active: realityActive,
      color: "#00e5ff",
      delay: 0.2
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3 },
      className: "flex items-center gap-2 mt-3",
      "data-ocid": "builder.transformation_stages",
      children: stages.map((stage, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: stage.delay, type: "spring", stiffness: 400 },
            className: "flex flex-col items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-3 w-3 rounded-full shrink-0",
                  style: {
                    background: stage.active ? stage.color : "oklch(var(--muted))",
                    boxShadow: stage.active ? `0 0 8px ${stage.color}, 0 0 16px ${stage.color}80` : "none",
                    border: `1.5px solid ${stage.active ? stage.color : "oklch(var(--border) / 0.5)"}`
                  },
                  animate: stage.active ? {
                    boxShadow: [
                      `0 0 4px ${stage.color}`,
                      `0 0 14px ${stage.color}, 0 0 28px ${stage.color}60`,
                      `0 0 4px ${stage.color}`
                    ]
                  } : {},
                  transition: stage.active ? {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  } : {},
                  "data-ocid": `builder.stage_dot.${i + 1}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-semibold leading-none tracking-wide",
                  style: {
                    color: stage.active ? stage.color : "oklch(var(--muted-foreground) / 0.5)"
                  },
                  children: stage.label
                }
              )
            ]
          }
        ),
        i < stages.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 h-px rounded-full overflow-hidden",
            style: { background: "oklch(var(--border) / 0.3)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full rounded-full",
                style: {
                  background: `linear-gradient(90deg, ${stages[i].color}, ${stages[i + 1].color})`,
                  backgroundSize: "200% 100%"
                },
                initial: { width: 0 },
                animate: { width: stage.active ? "100%" : "0%" },
                transition: { duration: 0.5, delay: stage.delay + 0.1 }
              }
            )
          }
        )
      ] }, stage.label))
    }
  );
}
function Builder() {
  const navigate = useNavigate();
  const [phase, setPhase] = reactExports.useState("input");
  const [prompt, setPrompt] = reactExports.useState("");
  const [generatedApp, setGeneratedApp] = reactExports.useState(null);
  const [progress, setProgress] = reactExports.useState(0);
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const [isPublishing, setIsPublishing] = reactExports.useState(false);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [showPreview, setShowPreview] = reactExports.useState(false);
  const [isPublished, setIsPublished] = reactExports.useState(false);
  const [selectedMood, setSelectedMood] = reactExports.useState(null);
  const publishIdea = usePublishIdea();
  const awardXp = useAwardXp();
  const createProject = useCreateProject();
  const textareaRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setShowPreview(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const handleGenerate = reactExports.useCallback(async () => {
    if (!prompt.trim()) {
      ue.error("Describe your dream app first ✨");
      return;
    }
    setPhase("generating");
    setProgress(0);
    setActiveStep(0);
    setIsPublished(false);
    const totalMs = 3800;
    const startTime = performance.now();
    const stepInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(elapsed / totalMs, 1);
      setProgress(Math.round(pct * 100));
      setActiveStep(Math.min(Math.floor(pct * 4), 3));
      if (pct >= 1) clearInterval(stepInterval);
    }, 60);
    await new Promise((r) => setTimeout(r, totalMs + 200));
    clearInterval(stepInterval);
    setProgress(100);
    const app = generateApp(prompt);
    setGeneratedApp(app);
    setPhase("result");
  }, [prompt]);
  const handleReset = reactExports.useCallback(() => {
    setPhase("input");
    setPrompt("");
    setGeneratedApp(null);
    setProgress(0);
    setActiveStep(0);
    setShowPreview(false);
    setIsPublished(false);
    setSelectedMood(null);
    setTimeout(() => {
      var _a;
      return (_a = textareaRef.current) == null ? void 0 : _a.focus();
    }, 100);
  }, []);
  const handlePublish = reactExports.useCallback(async () => {
    if (!generatedApp) return;
    setIsPublishing(true);
    try {
      const input = {
        appName: generatedApp.appName,
        description: generatedApp.description,
        category: generatedApp.categoryLabel,
        colorTheme: generatedApp.palette.join(","),
        features: Array.from(generatedApp.features),
        earningModel: generatedApp.earningModel
      };
      await publishIdea.mutateAsync(input);
      const xpAction = { GenerateIdea: null };
      const xp = await awardXp.mutateAsync(xpAction);
      ue.success(`🚀 Published! +${Number(xp)} XP earned!`, {
        className: "toast-xp"
      });
      setIsPublished(true);
    } catch {
      ue.error("Failed to publish. Try again!");
    } finally {
      setIsPublishing(false);
    }
  }, [generatedApp, publishIdea, awardXp]);
  const handleSave = reactExports.useCallback(async () => {
    if (!generatedApp) return;
    setIsSaving(true);
    try {
      await createProject.mutateAsync({
        name: generatedApp.appName,
        description: generatedApp.description,
        tags: [generatedApp.categoryLabel],
        featureList: Array.from(generatedApp.features)
      });
      ue.success("💾 Saved to your projects!");
    } catch {
      ue.error("Failed to save project.");
    } finally {
      setIsSaving(false);
    }
  }, [generatedApp, createProject]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background relative overflow-x-hidden",
      "data-ocid": "builder.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-3 px-4 sm:px-6 py-3 bg-card border-b border-border/50 sticky top-0 z-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/dashboard" }),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 transition-smooth",
              "data-ocid": "builder.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-border/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-sm truncate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Idea" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground mx-1", children: "→" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-hologram bg-clip-text text-transparent", children: "Reality Engine" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          phase === "result" && generatedApp && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.96 },
              onClick: () => setShowPreview(true),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold glass-glow text-primary hover:text-foreground transition-smooth",
              "data-ocid": "builder.preview_device_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Preview on Device" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Preview" })
              ]
            }
          ),
          phase === "result" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleReset,
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 transition-smooth",
              "data-ocid": "builder.reset_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Idea" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          phase === "input" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "relative min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-12",
              "data-ocid": "builder.input_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ConstellationBg, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-2xl space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MoodSelector,
                    {
                      selected: selectedMood,
                      onSelect: setSelectedMood
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.1, duration: 0.6 },
                      className: "text-center space-y-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                          "AI-Powered · Idea to Reality in under 60 seconds"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl sm:text-5xl leading-tight", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "What's the one idea " }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-hologram bg-clip-text text-transparent inline-block", children: "you can't stop thinking about?" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "Say it out loud. Your AI team will design it, build it, score it, and show you exactly how to make it blow up. ⚡" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2, duration: 0.5 },
                      className: "glass-glow rounded-2xl p-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            ref: (el) => {
                              textareaRef.current = el;
                              if (el && phase === "input") el.focus();
                            },
                            value: prompt,
                            onChange: (e) => {
                              setPrompt(e.target.value);
                              if (e.target.value === "") setSelectedMood(null);
                            },
                            onKeyDown: (e) => {
                              if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                                handleGenerate();
                            },
                            placeholder: `Paint us a picture... e.g., "a fitness app where friends compete in weekly step challenges and the loser buys coffee"`,
                            rows: 4,
                            className: "w-full resize-none bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 p-5 focus:outline-none font-body leading-relaxed rounded-xl",
                            "data-ocid": "builder.prompt_textarea"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 pb-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground opacity-60", children: prompt.length > 0 ? `${prompt.length} chars · Ctrl+Enter to generate` : "Type your idea above" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100",
                                style: {
                                  animation: "neon-ping 1s ease-out infinite",
                                  border: "2px solid oklch(var(--accent) / 0.7)"
                                },
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              motion.button,
                              {
                                type: "button",
                                whileHover: { scale: 1.04 },
                                whileTap: { scale: 0.97 },
                                onClick: handleGenerate,
                                disabled: !prompt.trim(),
                                className: "relative flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-display font-bold text-sm glass-glow-accent text-accent-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-smooth",
                                "data-ocid": "builder.generate_primary_button",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                                  "BUILD MY REALITY →"
                                ]
                              }
                            )
                          ] })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationStages, { prompt, mood: selectedMood }),
                  prompt.length > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      className: "glass rounded-2xl p-5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3", children: "⚡ Live Success Score — Updates as You Type" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: GAUGE_META.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          MiniGauge,
                          {
                            value: computeForecast(prompt)[g.key],
                            label: g.label,
                            color: g.color,
                            delay: i * 0.08
                          },
                          g.key
                        )) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDataPanel, { prompt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.35, duration: 0.5 },
                      className: "flex flex-wrap gap-2 justify-center",
                      children: IDEA_CHIPS.map((chip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.button,
                        {
                          type: "button",
                          whileHover: { scale: 1.07, y: -1 },
                          whileTap: { scale: 0.95 },
                          initial: { opacity: 0, y: 12 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.4 + i * 0.06 },
                          onClick: () => {
                            var _a;
                            setPrompt(chip.prompt);
                            (_a = textareaRef.current) == null ? void 0 : _a.focus();
                          },
                          className: "px-4 py-2 rounded-full text-sm font-medium bg-muted/60 border border-border/40 text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-smooth",
                          "data-ocid": `builder.chip.${i + 1}`,
                          children: chip.label
                        },
                        chip.label
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultiAiPanel, {}) })
                ] })
              ]
            },
            "input-phase"
          ),
          phase === "generating" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "fixed inset-0 z-40 flex flex-col items-center justify-center px-4",
              style: {
                background: "oklch(var(--background) / 0.96)",
                backdropFilter: "blur(16px)"
              },
              "data-ocid": "builder.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ConstellationBg, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-lg space-y-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { rotate: [0, 360] },
                        transition: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear"
                        },
                        className: "h-16 w-16 mx-auto rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-4",
                        style: { boxShadow: "0 0 40px oklch(var(--primary) / 0.4)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-primary" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-hologram bg-clip-text text-transparent", children: "Your Reality Is Being Built..." }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your creative squad is firing on all cylinders ⚡" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: AI_TEAM_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeStep >= i && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.4, ease: "easeOut" },
                      className: `flex items-center gap-4 rounded-xl p-4 transition-smooth ${activeStep === i ? "glass-glow" : "bg-muted/50 border border-border/40 opacity-70"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl shrink-0", children: step.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm", children: step.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: step.task })
                        ] }),
                        activeStep === i && step.detail === "swatches" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 shrink-0", children: [
                          "oklch(0.72 0.22 262)",
                          "oklch(0.62 0.25 280)",
                          "oklch(0.75 0.28 50)"
                        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            transition: {
                              delay: c === "oklch(0.72 0.22 262)" ? 0 : c === "oklch(0.62 0.25 280)" ? 0.15 : 0.3
                            },
                            className: "h-5 w-5 rounded-full border border-white/20",
                            style: { background: c }
                          },
                          `swatch-${c}`
                        )) }),
                        activeStep === i && step.detail === "code" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-primary/70 shrink-0 space-y-0.5", children: ["const app = {", "  routes: 12,", "}"].map(
                          (line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: {
                                delay: line === "const app = {" ? 0 : line.includes("routes") ? 0.2 : 0.4
                              },
                              children: line
                            },
                            `code-${line.trim()}`
                          )
                        ) }),
                        activeStep === i && step.detail === "bar" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 space-y-1 w-24", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Market fit" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted/40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: "h-full bg-primary rounded-full",
                              initial: { width: 0 },
                              animate: { width: "78%" },
                              transition: { duration: 1.2 }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-primary font-semibold", children: "78%" })
                        ] }),
                        activeStep === i && step.detail === "score" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { opacity: 0, scale: 0.5 },
                              animate: { opacity: 1, scale: 1 },
                              className: "font-display font-black text-accent text-lg",
                              style: {
                                textShadow: "0 0 16px oklch(var(--accent) / 0.6)"
                              },
                              children: "82/100"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Viral Score" })
                        ] }),
                        activeStep > i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-primary text-sm", children: "✓" })
                      ]
                    }
                  ) }, step.name)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Building your reality..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-primary", children: [
                        progress,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted/30 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full rounded-full gradient-hologram",
                        style: { width: `${progress}%` },
                        transition: { duration: 0.1 }
                      }
                    ) })
                  ] })
                ] })
              ]
            },
            "generating-phase"
          ),
          phase === "result" && generatedApp && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5 },
              className: "relative px-4 sm:px-6 py-8 max-w-3xl mx-auto space-y-6",
              "data-ocid": "builder.result_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ConstellationBg, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.1 },
                    className: "relative z-10 glass-glow rounded-2xl p-6 overflow-hidden",
                    "data-ocid": "builder.app_card",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 opacity-[0.04] pointer-events-none rounded-2xl",
                          style: {
                            background: `radial-gradient(ellipse at 30% 50%, ${generatedApp.palette[0]}, transparent 60%)`
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row sm:items-start gap-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex sm:flex-col gap-2 shrink-0", children: generatedApp.palette.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-8 w-8 rounded-xl border border-white/20 shrink-0",
                            style: {
                              background: color,
                              boxShadow: `0 0 12px ${color}60`
                            }
                          },
                          `pal-${color}`
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl text-foreground", children: generatedApp.appName }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-semibold border border-primary/40 bg-primary/15 text-primary", children: generatedApp.categoryLabel }),
                            selectedMood && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                className: "px-3 py-1 rounded-full text-xs font-semibold border",
                                style: {
                                  background: `${MOOD_CONFIG[selectedMood].primaryColor}18`,
                                  borderColor: `${MOOD_CONFIG[selectedMood].primaryColor}40`,
                                  color: MOOD_CONFIG[selectedMood].primaryColor
                                },
                                "data-ocid": "builder.app_mood_badge",
                                children: [
                                  MOOD_CONFIG[selectedMood].emoji,
                                  " ",
                                  MOOD_CONFIG[selectedMood].label
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: generatedApp.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground/60", children: [
                            "Generated from:",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70 italic", children: [
                              '"',
                              prompt,
                              '"'
                            ] })
                          ] })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.18 },
                    className: "relative z-10 space-y-3",
                    "data-ocid": "builder.features_section",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-muted-foreground uppercase tracking-widest", children: "⚡ Core Features" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: generatedApp.features.map((feat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, scale: 0.85 },
                          animate: { opacity: 1, scale: 1 },
                          transition: { delay: 0.22 + i * 0.07 },
                          className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-muted/60 border border-border/40 hover:border-primary/30 hover:bg-primary/8 transition-smooth",
                          "data-ocid": `builder.feature.${i + 1}`,
                          children: feat
                        },
                        feat
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.28 },
                    className: "relative z-10 glass-glow-accent rounded-xl px-5 py-4 flex items-center gap-3",
                    "data-ocid": "builder.earning_model",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl shrink-0", children: "💰" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5", children: "Recommended Earning Model" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base text-foreground", children: generatedApp.earningModel.replace("💰 ", "") })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForecastPanel, { prompt }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AiTeamPanel, { category: generatedApp.category, mood: selectedMood }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDataPanel, { prompt }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.42 },
                    className: "relative z-10 glass-glow rounded-2xl p-6",
                    "data-ocid": "builder.multi_ai_section",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultiAiPanel, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.46 },
                    className: "relative z-10 glass-glow rounded-2xl p-6",
                    "data-ocid": "builder.success_predictor",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-muted-foreground uppercase tracking-widest mb-5", children: "📊 Detailed Score Breakdown" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-center sm:items-start", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SuccessRing,
                          {
                            score: generatedApp.successScore,
                            size: 140,
                            animate: true
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-3 w-full", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SubScoreRow,
                            {
                              label: "Market Demand",
                              value: generatedApp.marketScore,
                              color: "oklch(0.72 0.22 262)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SubScoreRow,
                            {
                              label: "Uniqueness",
                              value: generatedApp.uniquenessScore,
                              color: "oklch(0.62 0.25 280)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SubScoreRow,
                            {
                              label: "Monetization",
                              value: generatedApp.monetizationScore,
                              color: "oklch(0.75 0.28 50)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SubScoreRow,
                            {
                              label: "Viral Potential",
                              value: generatedApp.viralScore,
                              color: "oklch(0.85 0.18 200)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { delay: 0.8 },
                              className: "mt-4 flex items-start gap-2 p-3 rounded-xl bg-primary/10 border border-primary/20",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm shrink-0", children: "💡" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "AI Tip:" }),
                                  " ",
                                  "Add a social leaderboard to boost your Viral score by ~15%"
                                ] })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.52 },
                    className: "relative z-10 rounded-2xl overflow-hidden",
                    "data-ocid": "builder.simulation_section",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-2xl p-6",
                        style: {
                          background: "oklch(var(--card))",
                          border: "1px solid oklch(var(--border) / 0.6)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                animate: { scale: [1, 1.15, 1] },
                                transition: {
                                  duration: 1.8,
                                  repeat: Number.POSITIVE_INFINITY
                                },
                                className: "h-2 w-2 rounded-full bg-primary",
                                style: {
                                  boxShadow: "0 0 8px oklch(var(--primary) / 0.8)"
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base", children: "🌐 Live Reality Simulation" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SimulationCard,
                              {
                                value: 1247,
                                label: "Virtual Users Testing",
                                glow: "oklch(0.85 0.18 200)"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SimulationCard,
                              {
                                value: 48,
                                label: "Average Rating ★",
                                glow: "oklch(0.85 0.28 85)"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SimulationCard,
                              {
                                value: 12400,
                                label: "Revenue Potential/mo ($)",
                                glow: "oklch(0.8 0.2 145)",
                                prefix: "$"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SimulationCard,
                              {
                                value: 89,
                                label: "User Retention",
                                glow: "oklch(0.72 0.22 280)",
                                suffix: "%"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-muted-foreground mt-4", children: "Based on 10,000+ similar app simulations in our database" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.58 },
                    className: "relative z-10 flex flex-col sm:flex-row gap-3",
                    "data-ocid": "builder.actions_section",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.button,
                        {
                          type: "button",
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          onClick: handlePublish,
                          disabled: isPublishing || isPublished,
                          className: "flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm glass-glow-accent text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "builder.publish_button",
                          children: isPublishing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                animate: { rotate: 360 },
                                transition: {
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" })
                              }
                            ),
                            "Publishing..."
                          ] }) : isPublished ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "✅ Published!" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
                            "🚀 Publish to Creator Feed"
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          type: "button",
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          onClick: () => setShowPreview(true),
                          className: "sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm glass-glow text-primary hover:text-foreground transition-smooth",
                          "data-ocid": "builder.preview_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4" }),
                            "Preview on Device"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          type: "button",
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          onClick: handleReset,
                          className: "sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-muted/30 border border-border/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth",
                          "data-ocid": "builder.new_idea_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
                            "New Idea"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          type: "button",
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          onClick: handleSave,
                          disabled: isSaving,
                          className: "sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm glass-glow text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-smooth",
                          "data-ocid": "builder.save_button",
                          children: [
                            isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                animate: { rotate: 360 },
                                transition: {
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" })
                              }
                            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
                            "Save to Projects"
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isPublished && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.5 },
                    className: "pb-12",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ViralEngineSection, { appName: generatedApp.appName })
                  }
                ) })
              ]
            },
            "result-phase"
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showPreview && generatedApp && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhonePreviewModal,
          {
            app: generatedApp,
            onClose: () => setShowPreview(false)
          }
        ) })
      ]
    }
  );
}
export {
  Builder as default
};
