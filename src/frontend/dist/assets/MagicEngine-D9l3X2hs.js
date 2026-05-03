import { a6 as animateVisualElement, a7 as setTarget, a8 as useConstant, a9 as useIsomorphicLayoutEffect, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, u as useNavigate } from "./index-DQTVxuMq.js";
function stopAnimation(visualElement) {
  visualElement.values.forEach((value) => value.stop());
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach((key) => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach((child) => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function animationControls() {
  const subscribers = /* @__PURE__ */ new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      const animations = [];
      subscribers.forEach((visualElement) => {
        animations.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations);
    },
    set(definition) {
      return subscribers.forEach((visualElement) => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach((visualElement) => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      return () => {
        controls.stop();
      };
    }
  };
  return controls;
}
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
const useAnimation = useAnimationControls;
const DYNAMIC_TREND_SEEDS = [
  {
    name: "AI Wellness Coach",
    category: "Health",
    trendScore: 94,
    trendRegion: "Japan 🇯🇵",
    description: "Personalized AI health advisor that adapts to your biometrics daily",
    rarity: "Legendary"
  },
  {
    name: "Carbon Footprint Tracker",
    category: "Eco",
    trendScore: 87,
    trendRegion: "Germany 🇩🇪",
    description: "Real-time carbon impact of every purchase, journey, and meal",
    rarity: "Rare"
  },
  {
    name: "Micro-Learning App",
    category: "Education",
    trendScore: 82,
    trendRegion: "India 🇮🇳",
    description: "Master any skill with 5-minute daily lessons and spaced repetition",
    rarity: "Common"
  },
  {
    name: "Local Hero Finder",
    category: "Community",
    trendScore: 75,
    trendRegion: "Brazil 🇧🇷",
    description: "Discover and connect with unsung heroes making a difference nearby",
    rarity: "Common"
  },
  {
    name: "Daily Habit Streaks",
    category: "Productivity",
    trendScore: 89,
    trendRegion: "USA 🇺🇸",
    description: "Gamified habit tracker that builds streaks with social accountability",
    rarity: "Rare"
  },
  {
    name: "Voice Journal AI",
    category: "Wellness",
    trendScore: 91,
    trendRegion: "South Korea 🇰🇷",
    description: "Speak your thoughts — AI organizes, summarizes, and reveals your patterns",
    rarity: "Legendary"
  },
  {
    name: "Smart Recipe Planner",
    category: "Food",
    trendScore: 78,
    trendRegion: "France 🇫🇷",
    description: "Weekly meal plans generated from your dietary goals, budget, and fridge",
    rarity: "Common"
  },
  {
    name: "Event Discover App",
    category: "Social",
    trendScore: 73,
    trendRegion: "UK 🇬🇧",
    description: "Hyper-local event discovery matching your mood, interests, and schedule",
    rarity: "Common"
  },
  {
    name: "Mental Health Buddy",
    category: "Wellness",
    trendScore: 96,
    trendRegion: "Australia 🇦🇺",
    description: "AI companion for daily check-ins, mood tracking, and mental resilience",
    rarity: "Legendary"
  },
  {
    name: "Creator Monetization Tool",
    category: "Business",
    trendScore: 88,
    trendRegion: "USA 🇺🇸",
    description: "One-click monetization layer for any creator — tips, subscriptions, merch",
    rarity: "Rare"
  },
  {
    name: "Real-Time Language Tutor",
    category: "Education",
    trendScore: 85,
    trendRegion: "Singapore 🇸🇬",
    description: "Live AI conversation partner for language learning in real scenarios",
    rarity: "Rare"
  },
  {
    name: "Community Map Builder",
    category: "Social",
    trendScore: 72,
    trendRegion: "Nigeria 🇳🇬",
    description: "Crowdsourced local maps where residents annotate their neighbourhood",
    rarity: "Common"
  }
];
const APP_IDEAS = [
  {
    id: "1",
    name: "SleepSync AI",
    concept: "AI alarm that wakes you at the perfect sleep cycle moment",
    features: [
      "Sleep stage detection via mic",
      "Smart alarm window",
      "Weekly sleep score",
      "Dream journal prompts"
    ],
    rarity: "Common",
    category: "Health",
    attribution: ["Trending in Japan", "Global viral themes"]
  },
  {
    id: "2",
    name: "PlantWhisperer",
    concept: "Talk to your plants — AI tells you what they need",
    features: [
      "Photo plant diagnosis",
      "Watering reminders",
      "Disease detection",
      "Plant community",
      "Growth tracker"
    ],
    rarity: "Rare",
    category: "Nature",
    attribution: ["Based on your creator history", "Trending in UK"]
  },
  {
    id: "3",
    name: "ReputationDAO",
    concept: "Blockchain-backed trust scores for freelancers worldwide",
    features: [
      "On-chain reviews",
      "Skill verification",
      "Client matching",
      "Dispute resolution"
    ],
    rarity: "Legendary",
    category: "Web3",
    attribution: ["Global viral themes", "Trending in USA"]
  },
  {
    id: "4",
    name: "MoodMarket",
    concept: "Stock market for emotions — trade daily mood indexes",
    features: [
      "Daily mood tracking",
      "Global emotion charts",
      "Mood prediction AI",
      "Social feed"
    ],
    rarity: "Rare",
    category: "Social",
    attribution: ["Your creator interests", "Trending in Korea"]
  },
  {
    id: "5",
    name: "EchoMentor",
    concept: "AI mentor that speaks in the voice of your chosen legend",
    features: [
      "Voice cloning of public figures",
      "Custom knowledge base",
      "Daily lessons",
      "Progress tracking",
      "Quiz challenges"
    ],
    rarity: "Legendary",
    category: "Education",
    attribution: ["Global viral themes", "Based on your creator history"]
  },
  {
    id: "6",
    name: "NeighborGrid",
    concept: "Hyper-local skill exchange — barter talents with neighbors",
    features: [
      "Skill listing",
      "Proximity matching",
      "Time-bank credits",
      "Rating system"
    ],
    rarity: "Common",
    category: "Community",
    attribution: ["Trending in Germany", "Your creator interests"]
  },
  {
    id: "7",
    name: "FitDuel",
    concept: "Real-time fitness battles — compete live with strangers globally",
    features: [
      "Live workout matching",
      "Rep counter via camera",
      "Global leaderboard",
      "Streak rewards",
      "Team modes"
    ],
    rarity: "Rare",
    category: "Fitness",
    attribution: ["Trending in Brazil", "Global viral themes"]
  },
  {
    id: "8",
    name: "MemoryVault",
    concept: "AI-curated life archive — your memories, beautifully organized",
    features: [
      "Photo auto-tagging",
      "Story generation",
      "Timeline view",
      "Family sharing",
      "Annual books"
    ],
    rarity: "Common",
    category: "Personal",
    attribution: ["Based on your creator history", "Trending in India"]
  },
  {
    id: "9",
    name: "SoundScape AI",
    concept: "Generate personalized ambient sound environments for focus",
    features: [
      "AI sound generation",
      "Mood-based presets",
      "Binaural beats",
      "Timer integration"
    ],
    rarity: "Common",
    category: "Productivity",
    attribution: ["Your creator interests", "Trending in Sweden"]
  },
  {
    id: "10",
    name: "DreamCommute",
    concept: "Turn your commute into an immersive audio adventure",
    features: [
      "GPS-aware storytelling",
      "Dynamic story branches",
      "Commute tracking",
      "Social chapters"
    ],
    rarity: "Rare",
    category: "Entertainment",
    attribution: ["Trending in USA", "Global viral themes"]
  },
  {
    id: "11",
    name: "NexusChef",
    concept: "AI chef that builds recipes from whatever's in your fridge",
    features: [
      "Fridge photo scan",
      "Instant recipe generation",
      "Nutritional analysis",
      "Shopping list sync",
      "Meal prep planner"
    ],
    rarity: "Common",
    category: "Food",
    attribution: ["Your creator interests", "Trending in France"]
  },
  {
    id: "12",
    name: "QuantumCalm",
    concept: "Real-time stress monitoring with AI breathwork coaching",
    features: [
      "Camera-based HRV detection",
      "Live stress meter",
      "Breathing guide animations",
      "Wellness history"
    ],
    rarity: "Legendary",
    category: "Wellness",
    attribution: ["Global viral themes", "Trending in Japan"]
  },
  {
    id: "13",
    name: "ByteBarter",
    concept: "Micro-task marketplace — complete 5-min tasks for digital rewards",
    features: [
      "Task matching",
      "Instant micropayments",
      "Skill level badges",
      "Daily task feed"
    ],
    rarity: "Common",
    category: "Work",
    attribution: ["Trending in Nigeria", "Your creator interests"]
  },
  {
    id: "14",
    name: "OracleVerse",
    concept: "Daily AI predictions personalized to your life data",
    features: [
      "Personal data integration",
      "Daily forecasts",
      "Pattern recognition",
      "Probability scores",
      "Decision helper"
    ],
    rarity: "Rare",
    category: "AI",
    attribution: ["Based on your creator history", "Trending in India"]
  },
  {
    id: "15",
    name: "CrowdCanvas",
    concept: "Collaborative AI art where every user adds one brushstroke",
    features: [
      "Live global canvas",
      "AI style transfer",
      "Daily theme drops",
      "NFT minting"
    ],
    rarity: "Legendary",
    category: "Art",
    attribution: ["Global viral themes", "Trending in Italy"]
  },
  {
    id: "16",
    name: "SportIQ",
    concept: "AI coach that analyzes your sport videos frame-by-frame",
    features: [
      "Video pose analysis",
      "Technique scoring",
      "Drill recommendations",
      "Progress comparison"
    ],
    rarity: "Rare",
    category: "Sports",
    attribution: ["Trending in Brazil", "Your creator interests"]
  },
  {
    id: "17",
    name: "SocialDetox",
    concept: "Gamified digital wellness — earn rewards for going offline",
    features: [
      "Screen-free streaks",
      "Reward tokens",
      "Focus challenges",
      "Accountability groups"
    ],
    rarity: "Common",
    category: "Wellness",
    attribution: ["Trending in UK", "Global viral themes"]
  },
  {
    id: "18",
    name: "VoiceDAO",
    concept: "Community decisions made through collective voice voting",
    features: [
      "Audio proposals",
      "Sentiment analysis",
      "Anonymous voting",
      "Result summaries"
    ],
    rarity: "Rare",
    category: "Web3",
    attribution: ["Based on your creator history", "Trending in USA"]
  },
  {
    id: "19",
    name: "StarterKit AI",
    concept: "Instant co-founder match — AI pairs solo founders with complementary skills",
    features: [
      "Skill gap analysis",
      "Co-founder matching",
      "Equity calculator",
      "Idea validation"
    ],
    rarity: "Legendary",
    category: "Startup",
    attribution: ["Global viral themes", "Trending in Silicon Valley"]
  },
  {
    id: "20",
    name: "CityPulse",
    concept: "Real-time city vibe tracker — know where the energy is right now",
    features: [
      "Crowd density maps",
      "Noise level data",
      "Event discovery",
      "Friend location sharing",
      "Mood zones"
    ],
    rarity: "Common",
    category: "Social",
    attribution: ["Trending in NYC", "Your creator interests"]
  }
];
const TRENDING_IDEAS = [
  {
    id: "t1",
    name: "AI Sleep Doctor",
    concept: "AI diagnoses sleep disorders from snoring patterns",
    viralScore: 94,
    rarity: "Legendary",
    country: "Japan",
    flag: "🇯🇵"
  },
  {
    id: "t2",
    name: "Emotion Commerce",
    concept: "Shop based on your mood — AI curates what you need right now",
    viralScore: 88,
    rarity: "Rare",
    country: "USA",
    flag: "🇺🇸"
  },
  {
    id: "t3",
    name: "PetTranslator AI",
    concept: "Decode what your pet is really feeling with AI",
    viralScore: 97,
    rarity: "Legendary",
    country: "South Korea",
    flag: "🇰🇷"
  },
  {
    id: "t4",
    name: "StudyStreak",
    concept: "Duolingo-style gamified studying for any subject",
    viralScore: 82,
    rarity: "Common",
    country: "India",
    flag: "🇮🇳"
  },
  {
    id: "t5",
    name: "HackerMatch",
    concept: "Tinder for hackathon teams — swipe to build your dream team",
    viralScore: 76,
    rarity: "Rare",
    country: "Germany",
    flag: "🇩🇪"
  },
  {
    id: "t6",
    name: "StreetArtAR",
    concept: "Augmented reality layer over city walls — artists go global",
    viralScore: 91,
    rarity: "Legendary",
    country: "Brazil",
    flag: "🇧🇷"
  },
  {
    id: "t7",
    name: "MindfulMoments",
    concept: "1-minute daily mindfulness drops tied to your location",
    viralScore: 79,
    rarity: "Common",
    country: "UK",
    flag: "🇬🇧"
  },
  {
    id: "t8",
    name: "LinguaMatch",
    concept: "Language exchange with instant AI correction and scoring",
    viralScore: 85,
    rarity: "Rare",
    country: "France",
    flag: "🇫🇷"
  }
];
const TREND_ATTRIBUTION_POOL = [
  {
    label: "Trending in Japan 🇯🇵",
    reason: "Health & AI apps are going viral across Japan right now",
    kind: "country"
  },
  {
    label: "Viral in USA 🇺🇸",
    reason: "Creator economy tools are exploding across North America",
    kind: "country"
  },
  {
    label: "Hot in India 🇮🇳",
    reason: "EdTech and micro-learning are surging across South Asia",
    kind: "country"
  },
  {
    label: "Rising in Europe 🌍",
    reason: "Eco-tech and sustainability apps are trending in the EU",
    kind: "country"
  },
  {
    label: "Viral in South Korea 🇰🇷",
    reason: "Wellness and beauty AI are dominating K-tech right now",
    kind: "country"
  },
  {
    label: "Trending in Brazil 🇧🇷",
    reason: "Social and fitness apps are booming across Latin America",
    kind: "country"
  },
  {
    label: "Hot in Australia 🇦🇺",
    reason: "Mental health and outdoor activity apps are rising fast",
    kind: "country"
  },
  {
    label: "Rising in UK 🇬🇧",
    reason: "Community and local-discovery apps are gaining momentum",
    kind: "country"
  },
  {
    label: "Viral in Nigeria 🇳🇬",
    reason: "FinTech and community marketplaces are exploding in Africa",
    kind: "country"
  },
  {
    label: "Global Tech Trend 🌐",
    reason: "AI-powered productivity is the #1 global category right now",
    kind: "category"
  },
  {
    label: "Worldwide Viral 🔥",
    reason: "This concept is spreading across 50+ countries simultaneously",
    kind: "category"
  },
  {
    label: "AI Breakout Trend 🤖",
    reason: "Conversational AI features are ranking #1 in app stores globally",
    kind: "category"
  },
  {
    label: "Creator Economy Wave 🎨",
    reason: "Creator monetization tools hit a new peak this week worldwide",
    kind: "category"
  }
];
const INTEREST_ATTRIBUTION = {
  label: "Based on Your Interests ⚡",
  reason: "Matched from your builder history, past ideas, and creator profile",
  kind: "interest"
};
function pickTrendAttribution(seed) {
  if (!seed) return INTEREST_ATTRIBUTION;
  const regionWord = seed.trendRegion.split(" ")[0];
  const countryMatch = TREND_ATTRIBUTION_POOL.find(
    (t) => t.kind === "country" && t.label.includes(regionWord)
  );
  if (countryMatch && Math.random() > 0.3) return countryMatch;
  return TREND_ATTRIBUTION_POOL[Math.floor(Math.random() * TREND_ATTRIBUTION_POOL.length)];
}
function seedToIdea(seed) {
  return {
    id: `seed-${seed.name.replace(/\s+/g, "-").toLowerCase()}`,
    name: seed.name,
    concept: seed.description,
    features: [
      "Smart AI engine",
      "Real-time data sync",
      "Social sharing",
      "Analytics dashboard",
      "Cross-platform support"
    ],
    rarity: seed.rarity,
    category: seed.category,
    attribution: [`Trending in ${seed.trendRegion}`, "Global viral themes"],
    trendRegion: seed.trendRegion,
    trendAttribution: pickTrendAttribution(seed)
  };
}
function pickRandomIdea() {
  const useSeed = Math.random() < 0.7;
  const roll = Math.random();
  if (useSeed) {
    let seedPool;
    if (roll < 0.1)
      seedPool = DYNAMIC_TREND_SEEDS.filter((s) => s.rarity === "Legendary");
    else if (roll < 0.4)
      seedPool = DYNAMIC_TREND_SEEDS.filter((s) => s.rarity === "Rare");
    else seedPool = DYNAMIC_TREND_SEEDS.filter((s) => s.rarity === "Common");
    const seed = seedPool[Math.floor(Math.random() * seedPool.length)];
    return seedToIdea(seed);
  }
  let pool;
  if (roll < 0.1) pool = APP_IDEAS.filter((i) => i.rarity === "Legendary");
  else if (roll < 0.4) pool = APP_IDEAS.filter((i) => i.rarity === "Rare");
  else pool = APP_IDEAS.filter((i) => i.rarity === "Common");
  const idea = pool[Math.floor(Math.random() * pool.length)];
  return { ...idea, trendAttribution: INTEREST_ATTRIBUTION };
}
function trendingToIdea(t) {
  const base = APP_IDEAS.find((a) => a.name === t.name);
  if (base) return base;
  return {
    id: t.id,
    name: t.name,
    concept: t.concept,
    features: [
      "Smart AI engine",
      "Real-time data",
      "Social sharing",
      "Analytics dashboard"
    ],
    rarity: t.rarity,
    category: "Trending",
    attribution: [`Trending in ${t.country}`, "Global viral themes"]
  };
}
function playLegendaryChime() {
  try {
    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = "sine";
      const t = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(1e-3, t + 0.45);
      osc.start(t);
      osc.stop(t + 0.5);
    });
    setTimeout(() => ctx.close(), 2e3);
  } catch (_) {
  }
}
function RarityBadge({ rarity }) {
  if (rarity === "Legendary") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "data-ocid": "rarity.legendary_badge",
        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider",
        style: {
          background: "oklch(0.75 0.28 50 / 0.18)",
          border: "1.5px solid oklch(0.75 0.28 50 / 0.9)",
          color: "oklch(0.85 0.3 50)",
          boxShadow: "0 0 18px oklch(0.75 0.28 50 / 0.55), 0 0 6px oklch(0.75 0.28 50 / 0.3)",
          animation: "bulb-sparkle 2s ease-in-out infinite"
        },
        children: "🌟 Legendary"
      }
    );
  }
  if (rarity === "Rare") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "data-ocid": "rarity.rare_badge",
        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider glow-pulse",
        style: {
          background: "oklch(0.62 0.25 280 / 0.18)",
          border: "1.5px solid oklch(0.62 0.25 280 / 0.8)",
          color: "oklch(0.82 0.22 280)",
          boxShadow: "0 0 14px oklch(0.62 0.25 280 / 0.45)"
        },
        children: "💜 Rare"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-ocid": "rarity.common_badge",
      className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider glass",
      style: { color: "oklch(var(--muted-foreground))" },
      children: "⚪ Common"
    }
  );
}
function TransformationReveal({
  idea,
  isMystery,
  onComplete
}) {
  const [stage, setStage] = reactExports.useState("wireframe");
  const [dotCount, setDotCount] = reactExports.useState(1);
  reactExports.useEffect(() => {
    if (!isMystery) return;
    const iv = setInterval(() => setDotCount((d) => d % 3 + 1), 380);
    return () => clearInterval(iv);
  }, [isMystery]);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setStage("mockup"), 500);
    const t2 = setTimeout(() => setStage("build-ready"), 1e3);
    const t3 = setTimeout(() => {
      setStage("done");
      onComplete();
    }, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);
  const stageLabel = isMystery ? `Reality Materializing${".".repeat(dotCount)}` : stage === "wireframe" ? "Materializing..." : stage === "mockup" ? "Rendering..." : "Build-ready ⚡";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": "magic.reveal_overlay",
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "oklch(0.06 0 0 / 0.92)",
              backdropFilter: "blur(10px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5", children: ["wireframe", "mockup", "build-ready"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 h-1 rounded-full overflow-hidden",
              style: { background: "oklch(0.25 0.02 262 / 0.5)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))"
                  },
                  initial: { width: 0 },
                  animate: {
                    width: stage === "wireframe" && i === 0 || stage === "mockup" && i <= 1 || stage === "build-ready" && i <= 2 ? "100%" : "0%"
                  },
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              )
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "text-center text-sm font-semibold mb-6",
              style: { color: "oklch(0.72 0.22 262)" },
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.2 },
              children: stageLabel
            },
            stageLabel
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative rounded-2xl overflow-hidden",
              style: { minHeight: 200 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                stage === "wireframe" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute inset-0 rounded-2xl p-5 flex flex-col gap-3",
                    style: {
                      background: "oklch(0.1 0.01 262 / 0.6)",
                      border: "1.5px solid oklch(0.72 0.22 262 / 0.6)",
                      boxShadow: "0 0 24px oklch(0.72 0.22 262 / 0.2)"
                    },
                    initial: { opacity: 0, scale: 0.94 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 1.04 },
                    transition: { duration: 0.35 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden",
                          style: { zIndex: 2 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: "absolute top-0 left-0 w-full h-2",
                              style: {
                                background: "linear-gradient(180deg, oklch(0.72 0.22 262 / 0.7), transparent)",
                                filter: "blur(2px)"
                              },
                              animate: { top: ["0%", "100%"] },
                              transition: {
                                duration: 0.5,
                                ease: "linear",
                                repeat: Number.POSITIVE_INFINITY
                              }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-16 h-4 rounded",
                            style: {
                              background: "oklch(0.72 0.22 262 / 0.3)",
                              border: "1px solid oklch(0.72 0.22 262 / 0.5)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-10 h-4 rounded",
                            style: {
                              background: "oklch(0.72 0.22 262 / 0.15)",
                              border: "1px solid oklch(0.72 0.22 262 / 0.3)"
                            }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-3/4 h-6 rounded",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.2)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.4)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-full h-3 rounded",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.12)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.2)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-5/6 h-3 rounded",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.12)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.2)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-1", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "flex-1 h-3 rounded",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.1)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.2)"
                          }
                        },
                        n
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mt-auto w-full h-9 rounded-xl",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.15)",
                            border: "1.5px solid oklch(0.72 0.22 262 / 0.5)"
                          }
                        }
                      )
                    ]
                  },
                  "wireframe"
                ),
                stage === "mockup" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute inset-0 rounded-2xl p-5 flex flex-col gap-3",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.12 0.02 262 / 0.8), oklch(0.14 0.02 280 / 0.8))",
                      border: `1.5px solid ${idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.5)" : idea.rarity === "Rare" ? "oklch(0.62 0.25 280 / 0.5)" : "oklch(0.72 0.22 262 / 0.4)"}`
                    },
                    initial: { opacity: 0, scale: 0.96 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 1.04 },
                    transition: { duration: 0.35 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-16 h-5 rounded animate-pulse",
                          style: {
                            background: idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.4)" : "oklch(0.72 0.22 262 / 0.4)"
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-3/4 h-6 rounded-lg",
                          style: {
                            background: idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.25)" : "oklch(0.72 0.22 262 / 0.3)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-full h-3 rounded",
                            style: { background: "oklch(0.6 0.05 262 / 0.35)" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-4/5 h-3 rounded",
                            style: { background: "oklch(0.6 0.05 262 / 0.25)" }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-1", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "flex-1 h-4 rounded-lg animate-pulse",
                          style: {
                            background: "oklch(0.55 0.1 262 / 0.3)",
                            animationDelay: `${n * 0.1}s`
                          }
                        },
                        n
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mt-auto w-full h-9 rounded-xl",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.72 0.22 262 / 0.5), oklch(0.75 0.28 50 / 0.4))"
                          }
                        }
                      )
                    ]
                  },
                  "mockup"
                ),
                (stage === "build-ready" || stage === "done") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute inset-0 rounded-2xl p-5 flex flex-col gap-2 overflow-hidden",
                    style: {
                      background: "oklch(0.12 0.01 0 / 0.96)",
                      border: `1.5px solid ${idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.7)" : idea.rarity === "Rare" ? "oklch(0.62 0.25 280 / 0.6)" : "oklch(var(--border) / 0.5)"}`,
                      boxShadow: idea.rarity === "Legendary" ? "0 0 40px oklch(0.75 0.28 50 / 0.3)" : "none"
                    },
                    initial: { opacity: 0, scale: 0.92 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0 },
                    transition: { type: "spring", damping: 18, stiffness: 320 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RarityBadge, { rarity: idea.rarity }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "text-lg font-display font-bold",
                          style: {
                            background: idea.rarity === "Legendary" ? "linear-gradient(135deg, oklch(0.85 0.3 50), oklch(0.75 0.28 50))" : idea.rarity === "Rare" ? "linear-gradient(135deg, oklch(0.82 0.22 280), oklch(0.72 0.22 262))" : "linear-gradient(135deg, oklch(var(--foreground)), oklch(var(--muted-foreground)))",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          },
                          children: idea.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs leading-relaxed",
                          style: { color: "oklch(var(--muted-foreground))" },
                          children: idea.concept
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: idea.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2 py-0.5 rounded-full",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.12)",
                            color: "oklch(0.72 0.22 262)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.25)"
                          },
                          children: f
                        },
                        f
                      )) })
                    ]
                  },
                  "build-ready"
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
}
const BURST_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  angle: i / 20 * 360,
  distance: 80 + Math.random() * 60,
  size: 4 + Math.random() * 5,
  hue: 50 + Math.random() * 20
}));
function LegendaryParticleBurst() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      style: { zIndex: 20 },
      children: BURST_PARTICLES.map((p) => {
        const rad = p.angle * Math.PI / 180;
        const tx = Math.cos(rad) * p.distance;
        const ty = Math.sin(rad) * p.distance;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute rounded-full",
            style: {
              width: p.size,
              height: p.size,
              background: `oklch(0.82 0.32 ${p.hue})`,
              boxShadow: `0 0 ${p.size * 2}px oklch(0.82 0.32 ${p.hue} / 0.8)`
            },
            initial: { x: 0, y: 0, opacity: 1, scale: 1 },
            animate: { x: tx, y: ty, opacity: 0, scale: 0.2 },
            transition: { duration: 0.9, ease: "easeOut" }
          },
          p.id
        );
      })
    }
  );
}
function LegendaryCinematicOverlay({ onDone }) {
  const [showText, setShowText] = reactExports.useState(true);
  const [showBurst, setShowBurst] = reactExports.useState(true);
  reactExports.useEffect(() => {
    playLegendaryChime();
    const t1 = setTimeout(() => setShowBurst(false), 1e3);
    const t2 = setTimeout(() => setShowText(false), 2e3);
    const t3 = setTimeout(onDone, 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute rounded-full",
        style: {
          width: 160,
          height: 160,
          border: "2px solid oklch(0.82 0.3 65 / 0.9)",
          boxShadow: "0 0 40px oklch(0.82 0.3 65 / 0.5), inset 0 0 30px oklch(0.82 0.3 65 / 0.1)"
        },
        initial: { scale: 0.3, opacity: 1 },
        animate: { scale: 3.5, opacity: 0 },
        transition: { duration: 1.2, ease: "easeOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showBurst && /* @__PURE__ */ jsxRuntimeExports.jsx(LegendaryParticleBurst, {}, "burst") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showText && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute",
        style: {
          top: "-48px",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap"
        },
        initial: { opacity: 0, y: 10, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 1.1 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-2xl font-display font-black uppercase tracking-widest",
            style: {
              background: "linear-gradient(90deg, oklch(0.85 0.3 50), oklch(0.95 0.15 70), oklch(0.82 0.32 40), oklch(0.92 0.25 65))",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 12px oklch(0.82 0.3 65 / 0.8))",
              animation: "shimmer 1.5s ease-in-out infinite"
            },
            children: "✦ LEGENDARY ✦"
          }
        )
      }
    ) })
  ] });
}
const PARTICLE_CONFIGS = [0, 1, 2, 3, 4, 5, 6, 7];
function LegendaryParticles() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden rounded-2xl", children: PARTICLE_CONFIGS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute w-1.5 h-1.5 rounded-full",
      style: {
        background: `oklch(0.75 0.28 ${50 + i * 10} / 0.9)`,
        left: `${10 + i * 10}%`,
        top: `${15 + i % 3 * 25}%`,
        boxShadow: "0 0 6px oklch(0.75 0.28 50 / 0.8)"
      },
      animate: {
        y: [0, -12, 0],
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.4, 1]
      },
      transition: {
        duration: 1.8 + i * 0.2,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.15
      }
    },
    `particle-${i}`
  )) });
}
const SYNC_MESSAGES = [
  "Syncing trends...",
  "Analyzing global patterns...",
  "Reading user behavior...",
  "Ready ⚡"
];
function LiveTrendBadge() {
  const [msgIdx, setMsgIdx] = reactExports.useState(0);
  const [isReady, setIsReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx((prev) => {
        const next = (prev + 1) % SYNC_MESSAGES.length;
        if (next === SYNC_MESSAGES.length - 1) setIsReady(true);
        return next;
      });
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": "magic.live_trend_badge",
      className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold",
      style: {
        background: "oklch(0.18 0.04 142 / 0.85)",
        border: "1px solid oklch(0.55 0.2 142 / 0.45)",
        backdropFilter: "blur(8px)"
      },
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: 0.6, duration: 0.4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              style: { background: "oklch(0.7 0.22 142)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "relative inline-flex rounded-full h-2 w-2",
              style: { background: "oklch(0.7 0.22 142)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.span,
          {
            initial: { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.25 },
            style: {
              color: isReady ? "oklch(0.7 0.22 142)" : "oklch(0.75 0.15 142)"
            },
            children: [
              "🌐 ",
              SYNC_MESSAGES[msgIdx]
            ]
          },
          msgIdx
        ) })
      ]
    }
  );
}
const BEHAVIOR_STATS = [
  { icon: "🎲", label: "Lucky Creates Today", target: 47293, suffix: "" },
  { icon: "🌍", label: "Countries Active", target: 89, suffix: "" },
  { icon: "⚡", label: "Apps Built This Hour", target: 1247, suffix: "" }
];
function CountUpNumber({
  target,
  duration = 300
}) {
  const [count, setCount] = reactExports.useState(0);
  const rafRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: count.toLocaleString() });
}
function BehaviorTracker() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "data-ocid": "magic.behavior_tracker",
      className: "mt-6 mx-auto max-w-lg rounded-2xl px-4 py-3",
      style: {
        background: "oklch(0.12 0.01 262 / 0.6)",
        border: "1px solid oklch(0.72 0.22 262 / 0.15)",
        backdropFilter: "blur(16px)"
      },
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.8, duration: 0.5 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-around gap-2", children: BEHAVIOR_STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-base font-black tabular-nums",
            style: {
              background: "linear-gradient(135deg, oklch(0.85 0.2 262), oklch(0.72 0.22 262))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: [
              stat.icon,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CountUpNumber, { target: stat.target, duration: 1200 }),
              stat.suffix
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-xs text-center",
            style: { color: "oklch(var(--muted-foreground) / 0.7)" },
            children: stat.label
          }
        )
      ] }, stat.label)) })
    }
  );
}
const GLOBAL_PATTERNS = [
  {
    icon: "🔥",
    title: "Health & Wellness is viral in Asia",
    region: "Asia",
    strength: 92
  },
  {
    icon: "📚",
    title: "EdTech surging in South America",
    region: "South America",
    strength: 87
  },
  {
    icon: "🌿",
    title: "Eco Apps trending in Europe",
    region: "Europe",
    strength: 83
  },
  {
    icon: "🤖",
    title: "AI Tools dominate North America",
    region: "North America",
    strength: 95
  },
  {
    icon: "🎮",
    title: "Gaming Apps rising in SE Asia",
    region: "SE Asia",
    strength: 79
  },
  {
    icon: "💸",
    title: "FinTech hot in Africa",
    region: "Africa",
    strength: 76
  }
];
function GlobalPatternsPanel() {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.section,
    {
      "data-ocid": "magic.global_patterns_section",
      className: "py-16 px-4",
      style: { background: "oklch(var(--background))" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            "data-ocid": "magic.global_patterns_toggle",
            onClick: () => setExpanded((v) => !v),
            className: "w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-smooth group",
            style: {
              background: "oklch(0.12 0.01 262 / 0.5)",
              border: "1px solid oklch(0.72 0.22 262 / 0.2)",
              backdropFilter: "blur(12px)"
            },
            whileHover: { scale: 1.005 },
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌐" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "text-xl font-display font-bold",
                      style: { color: "oklch(var(--foreground))" },
                      children: "Global Patterns 🌐"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "oklch(var(--muted-foreground))" },
                      children: "What the world is building right now"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: expanded ? 180 : 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  className: "text-lg",
                  style: { color: "oklch(0.72 0.22 262)" },
                  children: "▼"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.4, ease: "easeInOut" },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4", children: GLOBAL_PATTERNS.map((pattern, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": `global_patterns.card.${i + 1}`,
                className: "rounded-2xl p-4 flex flex-col gap-3 group",
                style: {
                  background: "oklch(0.13 0.01 262 / 0.7)",
                  border: "1px solid oklch(0.72 0.22 262 / 0.14)",
                  backdropFilter: "blur(12px)"
                },
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: i * 0.06, duration: 0.35 },
                whileHover: { scale: 1.02 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0 mt-0.5", children: pattern.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm font-semibold leading-snug",
                          style: { color: "oklch(var(--foreground))" },
                          children: pattern.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block mt-1 text-xs px-2 py-0.5 rounded-full",
                          style: {
                            background: "oklch(0.72 0.22 262 / 0.12)",
                            color: "oklch(0.72 0.22 262)",
                            border: "1px solid oklch(0.72 0.22 262 / 0.25)"
                          },
                          children: pattern.region
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-medium",
                          style: { color: "oklch(var(--muted-foreground))" },
                          children: "Trend strength"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-xs font-black tabular-nums",
                          style: {
                            background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          },
                          children: [
                            pattern.strength,
                            "%"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-full h-1.5 rounded-full overflow-hidden",
                        style: { background: "oklch(0.25 0.02 262 / 0.6)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "h-full rounded-full",
                            style: {
                              background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))"
                            },
                            initial: { width: 0 },
                            animate: { width: `${pattern.strength}%` },
                            transition: {
                              delay: 0.15 + i * 0.06,
                              duration: 0.7,
                              ease: "easeOut"
                            }
                          }
                        )
                      }
                    )
                  ] })
                ]
              },
              pattern.title
            )) })
          }
        ) })
      ] })
    }
  );
}
function IdeaModal({
  idea,
  onClose,
  isMystery = false,
  isLegendaryReveal = false
}) {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [showCinematic, setShowCinematic] = reactExports.useState(
    isLegendaryReveal && idea.rarity === "Legendary"
  );
  reactExports.useEffect(() => {
    if (!showCinematic) {
      controls.start({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 20, stiffness: 280 }
      });
    }
  }, [controls, showCinematic]);
  const handleCinematicDone = reactExports.useCallback(() => {
    setShowCinematic(false);
    controls.start({
      scale: [1.15, 1],
      transition: { type: "spring", damping: 14, stiffness: 260 }
    });
  }, [controls]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": "magic.modal",
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.25 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0",
            style: {
              background: "oklch(0.08 0 0 / 0.85)",
              backdropFilter: "blur(8px)"
            },
            onClick: onClose,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: `relative z-10 w-full max-w-md rounded-2xl p-6 overflow-hidden ${idea.rarity === "Legendary" && isLegendaryReveal ? "legendary-reveal" : ""}`,
            style: {
              background: "oklch(0.12 0.01 0 / 0.96)",
              border: `1.5px solid ${idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.6)" : idea.rarity === "Rare" ? "oklch(0.62 0.25 280 / 0.6)" : "oklch(var(--border) / 0.5)"}`,
              boxShadow: idea.rarity === "Legendary" ? "0 0 60px oklch(0.75 0.28 50 / 0.25), 0 20px 40px oklch(0.08 0 0 / 0.6)" : idea.rarity === "Rare" ? "0 0 40px oklch(0.62 0.25 280 / 0.2), 0 20px 40px oklch(0.08 0 0 / 0.6)" : "0 20px 40px oklch(0.08 0 0 / 0.6)"
            },
            initial: { scale: 0.85, opacity: 0, y: 20 },
            animate: controls,
            exit: { scale: 0.9, opacity: 0, y: 10 },
            transition: { type: "spring", damping: 20, stiffness: 280 },
            children: [
              idea.rarity === "Legendary" && /* @__PURE__ */ jsxRuntimeExports.jsx(LegendaryParticles, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showCinematic && /* @__PURE__ */ jsxRuntimeExports.jsx(
                LegendaryCinematicOverlay,
                {
                  onDone: handleCinematicDone
                },
                "cinematic"
              ) }),
              isMystery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl pointer-events-none",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.72 0.22 262 / 0.04), oklch(0.62 0.25 280 / 0.06))",
                    animation: "shimmer 3s ease-in-out infinite"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "magic.close_button",
                  onClick: onClose,
                  className: "absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-smooth hover:scale-110",
                  style: {
                    background: "oklch(var(--muted) / 0.5)",
                    color: "oklch(var(--muted-foreground))"
                  },
                  "aria-label": "Close modal",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RarityBadge, { rarity: idea.rarity }),
                isMystery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-medium px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.72 0.22 262 / 0.15)",
                      color: "oklch(0.72 0.22 262)",
                      border: "1px solid oklch(0.72 0.22 262 / 0.4)"
                    },
                    children: "🎮 Mystery Mode"
                  }
                )
              ] }),
              idea.trendAttribution && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": "magic.trend_attribution_banner",
                  className: "mb-4 rounded-xl overflow-hidden",
                  initial: { opacity: 0, y: -6 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.1, duration: 0.35 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 px-3 py-2",
                        style: {
                          background: idea.trendAttribution.kind === "interest" ? "oklch(0.55 0.22 50 / 0.14)" : idea.trendAttribution.kind === "country" ? "oklch(0.55 0.2 142 / 0.14)" : "oklch(0.72 0.22 262 / 0.14)",
                          borderBottom: `1px solid ${idea.trendAttribution.kind === "interest" ? "oklch(0.55 0.22 50 / 0.25)" : idea.trendAttribution.kind === "country" ? "oklch(0.55 0.2 142 / 0.25)" : "oklch(0.72 0.22 262 / 0.25)"}`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-bold uppercase tracking-widest",
                              style: {
                                color: idea.trendAttribution.kind === "interest" ? "oklch(0.7 0.22 50)" : idea.trendAttribution.kind === "country" ? "oklch(0.7 0.22 142)" : "oklch(0.72 0.22 262)"
                              },
                              children: idea.trendAttribution.kind === "interest" ? "✨ Why this idea?" : "📡 Trend Source"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-semibold px-2.5 py-0.5 rounded-full",
                              style: {
                                background: idea.trendAttribution.kind === "interest" ? "oklch(0.55 0.22 50 / 0.2)" : idea.trendAttribution.kind === "country" ? "oklch(0.55 0.2 142 / 0.2)" : "oklch(0.72 0.22 262 / 0.2)",
                                color: idea.trendAttribution.kind === "interest" ? "oklch(0.78 0.22 50)" : idea.trendAttribution.kind === "country" ? "oklch(0.78 0.22 142)" : "oklch(0.78 0.22 262)",
                                border: `1px solid ${idea.trendAttribution.kind === "interest" ? "oklch(0.55 0.22 50 / 0.4)" : idea.trendAttribution.kind === "country" ? "oklch(0.55 0.2 142 / 0.4)" : "oklch(0.72 0.22 262 / 0.4)"}`
                              },
                              children: idea.trendAttribution.label
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "px-3 py-2",
                        style: {
                          background: idea.trendAttribution.kind === "interest" ? "oklch(0.55 0.22 50 / 0.07)" : idea.trendAttribution.kind === "country" ? "oklch(0.55 0.2 142 / 0.07)" : "oklch(0.72 0.22 262 / 0.07)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "text-xs leading-snug",
                            style: { color: "oklch(var(--muted-foreground))" },
                            children: [
                              "💡 ",
                              idea.trendAttribution.reason
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-2xl font-display font-bold mb-2",
                  style: {
                    background: idea.rarity === "Legendary" ? "linear-gradient(135deg, oklch(0.85 0.3 50), oklch(0.75 0.28 50))" : idea.rarity === "Rare" ? "linear-gradient(135deg, oklch(0.82 0.22 280), oklch(0.72 0.22 262))" : "linear-gradient(135deg, oklch(var(--foreground)), oklch(var(--muted-foreground)))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  },
                  children: idea.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm mb-5",
                  style: { color: "oklch(var(--muted-foreground))" },
                  children: idea.concept
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs uppercase tracking-widest font-semibold mb-2",
                    style: { color: "oklch(var(--primary))" },
                    children: "Core Features"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: idea.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm",
                    style: { color: "oklch(var(--foreground) / 0.85)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "mt-0.5 shrink-0",
                          style: { color: "oklch(var(--accent))" },
                          children: "⚡"
                        }
                      ),
                      f
                    ]
                  },
                  f
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mb-6 rounded-xl p-3",
                  style: {
                    background: "oklch(0.72 0.22 262 / 0.06)",
                    border: "1px solid oklch(0.72 0.22 262 / 0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-semibold mb-1.5",
                        style: { color: "oklch(0.72 0.22 262)" },
                        children: "🧠 Powered by Smart Luck"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: idea.attribution.map((attr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2 py-0.5 rounded-full",
                        style: {
                          background: "oklch(var(--muted) / 0.6)",
                          color: "oklch(var(--muted-foreground))"
                        },
                        children: attr
                      },
                      attr
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "magic.start_building_button",
                  onClick: () => navigate({ to: "/builder/$id", params: { id: "magic-lucky" } }),
                  className: "w-full py-3 rounded-xl font-bold text-sm transition-smooth gradient-hologram hover:scale-[1.02] active:scale-[0.98]",
                  style: {
                    color: "oklch(0.08 0 0)",
                    boxShadow: "0 4px 20px oklch(var(--primary) / 0.35)"
                  },
                  children: [
                    "⚡ Start Building ",
                    idea.name
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function MysteryLoader({ onDone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex flex-col items-center justify-center",
      style: {
        background: "oklch(0.08 0 0 / 0.92)",
        backdropFilter: "blur(12px)"
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onAnimationComplete: () => setTimeout(onDone, 800),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "w-24 h-24 rounded-full mb-6 glow-pulse",
            style: {
              background: "radial-gradient(circle, oklch(0.72 0.22 262 / 0.3) 0%, transparent 70%)",
              border: "2px solid oklch(0.72 0.22 262 / 0.6)"
            },
            animate: { scale: [1, 1.2, 1], rotate: [0, 180, 360] },
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "text-lg font-display font-bold",
            style: {
              background: "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.62 0.25 280))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
            children: "Summoning your destiny..."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm mt-2",
            style: { color: "oklch(var(--muted-foreground))" },
            children: "✨ Reading the cosmic patterns"
          }
        )
      ]
    }
  );
}
const ORB_COLORS = [
  "oklch(0.72 0.22 262)",
  "oklch(0.62 0.25 280)",
  "oklch(0.75 0.28 50)"
];
function LuckOrb() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative mx-auto mb-10",
      style: { width: 180, height: 180 },
      animate: { rotate: 360 },
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-full",
            style: {
              background: "conic-gradient(from 0deg, oklch(0.72 0.22 262), oklch(0.62 0.25 280), oklch(0.75 0.28 50), oklch(0.72 0.22 262))",
              padding: "2px",
              animation: "glow-pulse 2s ease-in-out infinite"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full h-full rounded-full",
                style: { background: "oklch(0.08 0 0)" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-4 rounded-full",
            style: {
              background: "radial-gradient(circle at 35% 35%, oklch(0.75 0.22 262 / 0.9), oklch(0.35 0.2 280 / 0.8) 60%, oklch(0.15 0.1 280) 100%)",
              boxShadow: "inset 0 0 20px oklch(0.72 0.22 262 / 0.3), 0 0 30px oklch(0.72 0.22 262 / 0.4)"
            },
            animate: { scale: [1, 1.05, 1] },
            transition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center",
            style: {
              fontSize: 48,
              lineHeight: 1,
              filter: "drop-shadow(0 0 12px oklch(0.75 0.28 50 / 0.8))"
            },
            children: "⚡"
          }
        ),
        ORB_COLORS.map((color, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute w-3 h-3 rounded-full",
            style: {
              background: color,
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
              boxShadow: "0 0 8px currentColor"
            },
            animate: { rotate: [i * 120, i * 120 + 360] },
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.3
            }
          },
          color
        ))
      ]
    }
  );
}
function TrendingCard({ idea, index, onRemix }) {
  const rarityGlowClass = idea.rarity === "Legendary" ? "trending-glow-legendary" : idea.rarity === "Rare" ? "trending-glow-rare" : "trending-glow-common";
  const borderColor = idea.rarity === "Legendary" ? "oklch(0.75 0.28 50 / 0.65)" : idea.rarity === "Rare" ? "oklch(0.62 0.25 280 / 0.6)" : "oklch(0.72 0.22 262 / 0.4)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `trending.item.${index + 1}`,
      className: `rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden group cursor-default ${rarityGlowClass}`,
      style: {
        backdropFilter: "blur(12px)",
        background: "oklch(var(--card) / 0.5)",
        border: `1.5px solid ${borderColor}`
      },
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.07, duration: 0.4 },
      whileHover: { scale: 1.02 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 h-0.5 rounded-t-2xl",
            style: {
              width: `${idea.viralScore}%`,
              background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
              opacity: 0.7
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: idea.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-medium",
                  style: { color: "oklch(var(--muted-foreground))" },
                  children: idea.country
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display font-bold text-base",
                style: { color: "oklch(var(--foreground))" },
                children: idea.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-lg font-black tabular-nums",
                style: {
                  background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--accent)))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: idea.viralScore
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xs",
                style: { color: "oklch(var(--muted-foreground))" },
                children: "viral"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm",
            style: { color: "oklch(var(--muted-foreground))" },
            children: idea.concept
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RarityBadge, { rarity: idea.rarity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `trending.remix_button.${index + 1}`,
              onClick: () => onRemix(idea),
              className: "remix-btn text-xs font-bold px-3 py-1.5 rounded-full",
              children: "🔀 Remix This"
            }
          )
        ] })
      ]
    }
  );
}
const SMART_LUCK_CARDS = [
  {
    icon: "📈",
    title: "Global Trends",
    desc: "Scans trending apps, topics, and searches worldwide in real time to surface what the world is building next."
  },
  {
    icon: "🧠",
    title: "Your Interests",
    desc: "Learns from your creator history, the apps you've built, remixed, and explored to predict your next win."
  },
  {
    icon: "🌍",
    title: "Global Data Patterns",
    desc: "Analyzes viral success patterns across 50+ countries to identify which ideas have the highest breakout potential."
  }
];
const RARITY_INFO = [
  {
    rarity: "Common",
    pct: "60%",
    desc: "Solid, buildable ideas with clear market fit. Great foundations for your next project.",
    glow: ""
  },
  {
    rarity: "Rare",
    pct: "30%",
    desc: "Innovative concepts with unique angles. These ideas turn heads and spark curiosity.",
    glow: "0 0 30px oklch(0.62 0.25 280 / 0.3)"
  },
  {
    rarity: "Legendary",
    pct: "10%",
    desc: "Once-in-a-generation breakthrough ideas. If you get one — build it. The world is waiting.",
    glow: "0 0 40px oklch(0.75 0.28 50 / 0.35)"
  }
];
function MagicEngine() {
  const [modalIdea, setModalIdea] = reactExports.useState(null);
  const [isMystery, setIsMystery] = reactExports.useState(false);
  const [mysteryLoading, setMysteryLoading] = reactExports.useState(false);
  const [showReveal, setShowReveal] = reactExports.useState(false);
  const [revealIdea, setRevealIdea] = reactExports.useState(null);
  const [revealIsMystery, setRevealIsMystery] = reactExports.useState(false);
  const [isLegendaryReveal, setIsLegendaryReveal] = reactExports.useState(false);
  const openLucky = reactExports.useCallback(() => {
    const idea = pickRandomIdea();
    setRevealIdea(idea);
    setRevealIsMystery(false);
    setShowReveal(true);
  }, []);
  const openMystery = reactExports.useCallback(() => {
    setMysteryLoading(true);
  }, []);
  const onMysteryRevealed = reactExports.useCallback(() => {
    setMysteryLoading(false);
    const idea = pickRandomIdea();
    setRevealIdea(idea);
    setRevealIsMystery(true);
    setShowReveal(true);
  }, []);
  const onRevealComplete = reactExports.useCallback(() => {
    if (!revealIdea) return;
    setShowReveal(false);
    setIsMystery(revealIsMystery);
    setIsLegendaryReveal(revealIdea.rarity === "Legendary");
    setModalIdea(revealIdea);
  }, [revealIdea, revealIsMystery]);
  const onRemix = reactExports.useCallback((t) => {
    setIsMystery(false);
    setIsLegendaryReveal(false);
    setModalIdea(trendingToIdea(t));
  }, []);
  const closeModal = reactExports.useCallback(() => {
    setModalIdea(null);
    setIsMystery(false);
    setIsLegendaryReveal(false);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "oklch(var(--background))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            "data-ocid": "magic.hero_section",
            className: "relative overflow-hidden flex flex-col items-center justify-center text-center px-4 py-24 min-h-screen",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20",
                    style: {
                      background: "radial-gradient(circle, oklch(0.72 0.22 262 / 0.6) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15",
                    style: { background: "oklch(0.75 0.28 50 / 0.5)" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "relative z-10 max-w-3xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-semibold",
                        style: {
                          background: "oklch(0.72 0.22 262 / 0.12)",
                          border: "1px solid oklch(0.72 0.22 262 / 0.35)",
                          color: "oklch(0.72 0.22 262)"
                        },
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.1, duration: 0.5 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✨ New" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(var(--muted-foreground))" }, children: "|" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI-powered luck engine" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LuckOrb, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.h1,
                      {
                        className: "text-5xl md:text-7xl font-display font-black mb-4 leading-none",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.95 0 0) 20%, oklch(0.72 0.22 262) 50%, oklch(0.75 0.28 50) 80%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        },
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2, duration: 0.6 },
                        children: "Magic & Luck Engine ⚡"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        className: "text-xl md:text-2xl font-medium mb-4",
                        style: { color: "oklch(var(--muted-foreground))" },
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.3, duration: 0.5 },
                        children: "Tap luck. Build magic ⚡"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        className: "text-base mb-10 max-w-lg mx-auto",
                        style: { color: "oklch(var(--muted-foreground) / 0.7)" },
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4, duration: 0.5 },
                        children: "Our AI analyzes global trends, your creator history, and viral patterns to generate ideas that feel like luck — but are actually intelligent design."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "flex flex-col items-center gap-4",
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.5, duration: 0.5 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                "data-ocid": "magic.lucky_create_button",
                                onClick: openLucky,
                                className: "px-8 py-4 rounded-2xl font-bold text-lg gradient-hologram transition-smooth hover:scale-[1.04] active:scale-[0.97] glow-primary",
                                style: { color: "oklch(0.08 0 0)", minWidth: 200 },
                                children: "⚡ Lucky Create"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                "data-ocid": "magic.mystery_mode_button",
                                onClick: openMystery,
                                className: "px-8 py-4 rounded-2xl font-bold text-lg transition-smooth hover:scale-[1.04] active:scale-[0.97]",
                                style: {
                                  background: "oklch(var(--card) / 0.6)",
                                  border: "1.5px solid oklch(0.62 0.25 280 / 0.5)",
                                  color: "oklch(0.82 0.22 280)",
                                  backdropFilter: "blur(12px)",
                                  boxShadow: "0 0 20px oklch(0.62 0.25 280 / 0.2)",
                                  minWidth: 200
                                },
                                children: "🎮 Mystery Mode"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTrendBadge, {})
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BehaviorTracker, {})
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            "data-ocid": "magic.smart_luck_section",
            className: "py-20 px-4",
            style: { background: "oklch(0.1 0.005 262 / 0.5)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "text-center mb-12",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        className: "text-3xl md:text-4xl font-display font-bold mb-3",
                        style: { color: "oklch(var(--foreground))" },
                        children: "Smart Luck, Not Random 🧠"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "oklch(var(--muted-foreground))" }, children: "Every idea is crafted by intelligence disguised as fortune" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: SMART_LUCK_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `smart_luck.card.${i + 1}`,
                  className: "glass-glow rounded-2xl p-6 text-center",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.1, duration: 0.4 },
                  whileHover: { scale: 1.03 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: card.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-lg font-display font-bold mb-2",
                        style: { color: "oklch(var(--foreground))" },
                        children: card.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed",
                        style: { color: "oklch(var(--muted-foreground))" },
                        children: card.desc
                      }
                    )
                  ]
                },
                card.title
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalPatternsPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            "data-ocid": "magic.trending_section",
            className: "py-20 px-4",
            style: { background: "oklch(0.1 0.005 262 / 0.5)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "text-center mb-12",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        className: "text-3xl md:text-4xl font-display font-bold mb-3",
                        style: { color: "oklch(var(--foreground))" },
                        children: "Global Trend Magic 🌍"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "oklch(var(--muted-foreground))" }, children: "Ideas trending right now around the world — remix any of them instantly" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: TRENDING_IDEAS.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TrendingCard,
                {
                  idea,
                  index: i,
                  onRemix
                },
                idea.id
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            "data-ocid": "magic.rarity_section",
            className: "py-20 px-4",
            style: { background: "oklch(var(--background))" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        className: "text-3xl md:text-4xl font-display font-bold mb-3",
                        style: { color: "oklch(var(--foreground))" },
                        children: "Rare Idea System 💎"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "mb-10",
                        style: { color: "oklch(var(--muted-foreground))" },
                        children: "Every creation is unique. Some ideas are once-in-a-generation."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: RARITY_INFO.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `rarity_info.card.${i + 1}`,
                  className: "rounded-2xl p-6 glass-glow",
                  style: { boxShadow: r.glow || void 0 },
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.12, duration: 0.4 },
                  whileHover: { scale: 1.03 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RarityBadge, { rarity: r.rarity }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-4xl font-black mb-2",
                        style: {
                          background: r.rarity === "Legendary" ? "linear-gradient(135deg, oklch(0.85 0.3 50), oklch(0.75 0.28 50))" : r.rarity === "Rare" ? "linear-gradient(135deg, oklch(0.82 0.22 280), oklch(0.72 0.22 262))" : "linear-gradient(135deg, oklch(var(--foreground)), oklch(var(--muted-foreground)))",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        },
                        children: r.pct
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed",
                        style: { color: "oklch(var(--muted-foreground))" },
                        children: r.desc
                      }
                    )
                  ]
                },
                r.rarity
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            "data-ocid": "magic.cta_section",
            className: "py-24 px-4 text-center relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-15",
                  style: { background: "oklch(0.72 0.22 262 / 0.7)" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    className: "text-4xl md:text-5xl font-display font-black mb-4",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.95 0 0), oklch(0.72 0.22 262), oklch(0.75 0.28 50))",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    },
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    children: "Your next big idea is one tap away"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    className: "text-lg mb-8",
                    style: { color: "oklch(var(--muted-foreground))" },
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true },
                    transition: { delay: 0.1 },
                    children: "Create with AI. Discover with luck."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    initial: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.2 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "magic.cta_lucky_button",
                        onClick: openLucky,
                        className: "px-8 py-4 rounded-2xl font-bold text-lg gradient-hologram transition-smooth hover:scale-[1.04] active:scale-[0.97] glow-primary",
                        style: { color: "oklch(0.08 0 0)" },
                        children: "⚡ Try Lucky Create Now"
                      }
                    )
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "footer",
          {
            className: "py-6 px-4 text-center text-xs",
            style: {
              color: "oklch(var(--muted-foreground))",
              borderTop: "1px solid oklch(var(--border) / 0.3)"
            },
            children: [
              `© ${(/* @__PURE__ */ new Date()).getFullYear()}. Built with love using `,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "underline transition-smooth hover:opacity-80",
                  style: { color: "oklch(var(--primary))" },
                  children: "caffeine.ai"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mysteryLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(MysteryLoader, { onDone: onMysteryRevealed }, "mystery-loader") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showReveal && revealIdea && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TransformationReveal,
          {
            idea: revealIdea,
            isMystery: revealIsMystery,
            onComplete: onRevealComplete
          },
          "reveal"
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: modalIdea && /* @__PURE__ */ jsxRuntimeExports.jsx(
          IdeaModal,
          {
            idea: modalIdea,
            onClose: closeModal,
            isMystery,
            isLegendaryReveal
          },
          "modal"
        ) })
      ]
    }
  );
}
export {
  MagicEngine as default
};
