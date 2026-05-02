import { c as createLucideIcon, r as reactExports, u as useNavigate, a as useInternetIdentity, j as jsxRuntimeExports, L as Link } from "./index-BB65hrJ6.js";
import { H as HolographicText, G as GlassButton } from "./HolographicText-C8UGVPGc.js";
import { G as GlassCard } from "./GlassCard-yq_Jepy7.js";
import { G as GlowBadge } from "./GlowBadge-C6CIBIg8.js";
import { u as useScroll, a as useTransform, C as Canvas, b as useFrame } from "./use-transform-Cp3Bn3vE.js";
import { Z as Zap, S as Sparkles } from "./zap-ejWsDErG.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import { R as Rocket } from "./rocket-CuDcpT84.js";
import { U as Users, B as Brain } from "./users-D8yA43PM.js";
import { G as Globe } from "./globe-BKcMrgXO.js";
import { T as TrendingUp } from "./trending-up-B8DqBgwR.js";
import { C as ChevronRight } from "./chevron-right-s3pxMFhI.js";
import { u as useInView } from "./use-in-view-DbCtVUMT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode);
function ParticleField({ mouse }) {
  const meshRef = reactExports.useRef(null);
  const linesRef = reactExports.useRef(null);
  const PARTICLE_COUNT = 320;
  const CONNECTION_DIST = 1.8;
  const { positions, colors } = reactExports.useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 3.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi);
      const t = Math.random();
      col[i * 3] = 0.2 + t * 0.4;
      col[i * 3 + 1] = 0.6 + t * 0.3;
      col[i * 3 + 2] = 1;
    }
    return { positions: pos, colors: col };
  }, []);
  const linePositions = reactExports.useMemo(() => {
    const pts = [];
    const arr = positions;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = arr[i * 3] - arr[j * 3];
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          pts.push(arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2]);
          pts.push(arr[j * 3], arr[j * 3 + 1], arr[j * 3 + 2]);
        }
      }
    }
    return new Float32Array(pts);
  }, [positions]);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const tiltX = mouse.y * 0.15;
    const tiltY = mouse.x * 0.15;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.04 + tiltY;
      meshRef.current.rotation.x = Math.sin(t * 0.02) * 0.1 + tiltX;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04 + tiltY;
      linesRef.current.rotation.x = Math.sin(t * 0.02) * 0.1 + tiltX;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: meshRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("bufferGeometry", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-color", args: [colors, 3] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pointsMaterial",
        {
          size: 0.055,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("lineSegments", { ref: linesRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "bufferAttribute",
        {
          attach: "attributes-position",
          args: [linePositions, 3]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "lineBasicMaterial",
        {
          color: "#7c3aed",
          transparent: true,
          opacity: 0.12,
          linewidth: 1
        }
      )
    ] })
  ] });
}
function NeuralCore() {
  const coreRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.z = t * 0.15;
      const s = 1 + Math.sin(t * 1.2) * 0.06;
      coreRef.current.scale.setScalar(s);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.4;
      ringRef.current.rotation.y = t * 0.2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: coreRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.65, 2] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#06b6d4",
          emissive: "#0891b2",
          emissiveIntensity: 0.6,
          wireframe: true,
          transparent: true,
          opacity: 0.7
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: ringRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.1, 0.015, 8, 64] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#a855f7",
          emissive: "#7c3aed",
          emissiveIntensity: 0.9,
          transparent: true,
          opacity: 0.6
        }
      )
    ] })
  ] });
}
function HeroCanvas({ mouse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 8], fov: 60 },
      style: { position: "absolute", inset: 0 },
      gl: { antialias: true, alpha: true },
      dpr: [1, 1.5],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1.5, color: "#06b6d4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, -5], intensity: 1, color: "#a855f7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, { mouse }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralCore, {})
      ]
    }
  );
}
const IDEA_TRANSFORMS = [
  { idea: "Fitness app with challenges", app: "🏋️ FitQuest" },
  { idea: "Study buddy with AI", app: "📚 StudyMind" },
  { idea: "Pet care tracker", app: "🐾 PawTrack" },
  { idea: "Recipe finder app", app: "🍕 CookMaster" },
  { idea: "Travel planner AI", app: "✈️ JourneyAI" },
  { idea: "Meditation with streaks", app: "🧘 ZenFlow" },
  { idea: "Budget tracker + insights", app: "💰 WealthBot" }
];
function IdeaTicker() {
  const items = [...IDEA_TRANSFORMS, ...IDEA_TRANSFORMS];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden w-full select-none", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "flex gap-6 w-max",
      animate: { x: ["0%", "-50%"] },
      transition: {
        duration: 32,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY
      },
      children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 px-5 py-3 rounded-full glass-glow shrink-0 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-body", children: item.idea }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-primary/60 font-bold",
                style: { textShadow: "0 0 8px oklch(var(--primary)/0.5)" },
                children: "→"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display font-semibold text-primary",
                style: { textShadow: "0 0 12px oklch(var(--primary)/0.5)" },
                children: item.app
              }
            )
          ]
        },
        `${item.idea}-${i}`
      ))
    }
  ) });
}
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2e3;
    const step = 16;
    const totalSteps = duration / step;
    const increment = target / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);
  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    prefix,
    formatted,
    suffix
  ] });
}
const FEATURES = [
  {
    icon: Brain,
    title: "Your idea is live in 60 seconds",
    description: "Type anything. AI designs the UI, builds the backend, and ships it — while you watch. No code, no waiting.",
    badge: "AI-Powered",
    badgeVariant: "primary",
    glowColor: "oklch(var(--primary)/0.2)"
  },
  {
    icon: Sparkles,
    title: "AI that knows you better than you do",
    description: "The more you build, the smarter it gets. AppVerse predicts your next idea before you've typed a word.",
    badge: "Adaptive",
    badgeVariant: "secondary",
    glowColor: "oklch(var(--secondary)/0.2)"
  },
  {
    icon: Globe,
    title: "Go viral. Get remixed. Get famous.",
    description: "10,000+ creators are building right now. One tap to remix trending ideas and put your name on the map.",
    badge: "Connected",
    badgeVariant: "accent",
    glowColor: "oklch(var(--accent)/0.2)"
  },
  {
    icon: TrendingUp,
    title: "Building feels like winning",
    description: "Every app earns XP. Daily challenges, global leaderboards, and real rewards turn creation into your favourite game.",
    badge: "Gamified",
    badgeVariant: "primary",
    glowColor: "oklch(var(--primary)/0.2)"
  }
];
const LIVE_STATS = [
  {
    target: 10247,
    label: "Apps Launched",
    suffix: "",
    prefix: "",
    decimals: 0
  },
  {
    target: 3891,
    label: "Creators Worldwide",
    suffix: "",
    prefix: "",
    decimals: 0
  },
  {
    target: 1.2,
    label: "Users Simulated",
    suffix: "M",
    prefix: "",
    decimals: 1
  },
  {
    target: 99.7,
    label: "Build Success Rate",
    suffix: "%",
    prefix: "",
    decimals: 1
  }
];
const TESTIMONIALS = [
  {
    name: "Priya K.",
    level: "builder",
    levelLabel: "Builder",
    quote: "I described a meditation app at 11pm. By 11:05 I had a full feature set, a color palette, and a monetization plan. I screenshotted everything and sent it to my friends — they could not believe it.",
    initials: "PK",
    gradientFrom: "oklch(0.62 0.25 280 / 0.7)",
    gradientTo: "oklch(0.72 0.22 262 / 0.7)"
  },
  {
    name: "Arjun M.",
    level: "creator",
    levelLabel: "Creator",
    quote: "Remixed 3 trending ideas in one afternoon. My concept hit the global top 10 leaderboard before dinner. The community here goes insane when you drop something good.",
    initials: "AM",
    gradientFrom: "oklch(0.72 0.22 262 / 0.7)",
    gradientTo: "oklch(0.65 0.18 200 / 0.7)"
  },
  {
    name: "Sasha T.",
    level: "legend",
    levelLabel: "Legend",
    quote: "I went from 'I have an idea' to a full app preview in under 2 minutes. I'm not a developer. I'm 19. This thing just handed me a career and I haven't written a single line of code.",
    initials: "ST",
    gradientFrom: "oklch(0.75 0.28 50 / 0.7)",
    gradientTo: "oklch(0.7 0.25 30 / 0.7)"
  }
];
const REALITY_POWERS = [
  {
    emoji: "🧠",
    name: "Memory-Based Creation",
    description: "The app remembers every idea you've touched. Every session, it builds richer, more personalized content tailored to your creative DNA.",
    borderColor: "oklch(0.62 0.25 280)",
    glowColor: "oklch(0.62 0.25 280 / 0.06)"
  },
  {
    emoji: "🎭",
    name: "Become the Character",
    description: "Your face becomes your AI avatar. Transform into a Hero, Creator, or Influencer — and build apps from inside that identity.",
    borderColor: "oklch(0.65 0.22 50)",
    glowColor: "oklch(0.65 0.22 50 / 0.06)"
  },
  {
    emoji: "🔥",
    name: "Auto Viral Engine",
    description: "AI automatically creates trending reels and social clips optimized for each platform. Ready to post — no editing required.",
    borderColor: "oklch(0.6 0.25 20)",
    glowColor: "oklch(0.6 0.25 20 / 0.06)"
  },
  {
    emoji: "💗",
    name: "Emotion AI",
    description: "Happy? The app serves fun content. Feeling low? It switches to motivating, uplifting flows. The platform reacts exactly like a human would.",
    borderColor: "oklch(0.65 0.24 350)",
    glowColor: "oklch(0.65 0.24 350 / 0.06)"
  },
  {
    emoji: "🌍",
    name: "Shared Dream World",
    description: "Enter the same digital universe as other creators. Collaborate in real time, co-build ideas, and ship together from anywhere on Earth.",
    borderColor: "oklch(0.62 0.2 200)",
    glowColor: "oklch(0.62 0.2 200 / 0.06)"
  }
];
const LIVE_DATA_SOURCES = [
  {
    icon: "🌤️",
    title: "Weather APIs",
    description: "Live conditions, forecasts, and alerts — auto-wired into every app that needs real-world environmental context.",
    glowColor: "oklch(0.75 0.18 220 / 0.12)",
    borderColor: "oklch(0.55 0.2 220 / 0.35)"
  },
  {
    icon: "🗺️",
    title: "Maps & Location",
    description: "Real-time GPS, live traffic data, and turn-by-turn directions. Your app knows exactly where its users are.",
    glowColor: "oklch(0.7 0.22 160 / 0.12)",
    borderColor: "oklch(0.5 0.2 160 / 0.35)"
  },
  {
    icon: "🏥",
    title: "Health & Medical",
    description: "Doctor availability, fitness wearable sync, and nutrition databases — live data for apps that care about people.",
    glowColor: "oklch(0.72 0.2 350 / 0.12)",
    borderColor: "oklch(0.52 0.22 350 / 0.35)"
  },
  {
    icon: "📚",
    title: "Learning & Content",
    description: "Updated courses, live tutors, and fresh educational content. Your learning apps are always a step ahead.",
    glowColor: "oklch(0.78 0.22 50 / 0.12)",
    borderColor: "oklch(0.58 0.22 50 / 0.35)"
  }
];
function Landing() {
  const heroRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const { login, isLoginSuccess } = useInternetIdentity();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], ["0%", "10%"]);
  const [mouse, setMouse] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const handler = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  reactExports.useEffect(() => {
    if (isLoginSuccess) {
      navigate({ to: "/dashboard" });
    }
  }, [isLoginSuccess, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-[-20%] left-[10%] h-[700px] w-[700px] rounded-full blur-[140px] opacity-[0.06]",
          style: { background: "oklch(var(--primary))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-[5%] right-[5%] h-[500px] w-[600px] rounded-full blur-[120px] opacity-[0.04]",
          style: { background: "oklch(var(--secondary))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-[50%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[100px] opacity-[0.05]",
          style: { background: "oklch(var(--accent))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.022]",
          style: {
            backgroundImage: "linear-gradient(oklch(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: "sticky top-0 z-50 w-full h-16 backdrop-blur-xl bg-card border-b border-border/50 shadow-[0_1px_0_oklch(var(--border)/0.3),0_4px_16px_oklch(var(--primary)/0.06)]",
        "data-ocid": "navbar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto h-full flex items-center gap-4 px-4 lg:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 shrink-0 group",
              "data-ocid": "navbar.logo_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_16px_oklch(var(--primary)/0.5)] transition-smooth", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary relative z-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 gradient-hologram opacity-20 group-hover:opacity-40 transition-opacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HolographicText,
                  {
                    as: "span",
                    variant: "primary",
                    className: "text-lg hidden sm:block",
                    children: "AppVerse"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1 ml-2", children: ["Features", "Pricing", "Community"].map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "px-3 py-1.5 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth",
              onClick: () => {
                var _a;
                return (_a = document.getElementById(label.toLowerCase())) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              children: label
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "navbar.get_started_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassButton, { variant: "holographic", size: "sm", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            "Start Building Free"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: "hero",
          ref: heroRef,
          className: "relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden",
          "data-ocid": "landing.hero_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                style: { opacity: heroOpacity },
                className: "absolute inset-0 z-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCanvas, { mouse })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 z-[1] pointer-events-none flex items-center justify-center",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-[600px] w-[600px] rounded-full blur-[100px] opacity-[0.1] glow-pulse",
                    style: {
                      background: "radial-gradient(ellipse, oklch(var(--primary)/0.8) 0%, oklch(var(--secondary)/0.4) 50%, transparent 80%)"
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 z-[1] pointer-events-none",
                style: {
                  background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, oklch(var(--background)/0.7) 80%, oklch(var(--background)) 100%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                style: { y: heroY },
                className: "relative z-[2] container mx-auto px-4 lg:px-6 py-20 flex flex-col items-center text-center gap-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "primary", pulse: true, className: "mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
                        "The Fastest Way to Build a Real App — No Code Required"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 40 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      },
                      className: "font-display font-bold text-5xl sm:text-7xl lg:text-9xl leading-[1.0] max-w-5xl tracking-tight",
                      children: [
                        "BUILD REAL APPS",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          HolographicText,
                          {
                            as: "span",
                            variant: "rainbow",
                            className: "text-5xl sm:text-7xl lg:text-9xl",
                            children: "IN SECONDS."
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7, delay: 0.25 },
                      className: "text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body",
                      children: "Type your idea. AppVerse's AI designs, builds, and launches it — while you watch. From thought to product in under 60 seconds."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.38 },
                      "data-ocid": "landing.hero_tagline_evolving",
                      className: "relative inline-flex",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 rounded-full blur-xl pointer-events-none",
                            style: {
                              background: "linear-gradient(90deg, oklch(0.72 0.22 200 / 0.35), oklch(0.62 0.25 280 / 0.3), oklch(0.72 0.22 262 / 0.35))"
                            },
                            animate: { opacity: [0.5, 1, 0.5] },
                            transition: {
                              duration: 2.8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut"
                            },
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-lg sm:text-xl tracking-tight",
                            style: {
                              background: "linear-gradient(135deg, oklch(0.72 0.22 200 / 0.12), oklch(0.62 0.25 280 / 0.1), oklch(0.72 0.22 262 / 0.12))",
                              border: "1.5px solid oklch(0.62 0.25 280 / 0.45)",
                              boxShadow: "0 0 24px oklch(0.62 0.25 280 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.15)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.span,
                                {
                                  className: "absolute inset-0 rounded-full pointer-events-none",
                                  style: {
                                    background: "linear-gradient(90deg, transparent 0%, oklch(0.62 0.25 280 / 0.25) 50%, transparent 100%)",
                                    backgroundSize: "200% 100%"
                                  },
                                  animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                                  transition: {
                                    duration: 3.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear"
                                  },
                                  "aria-hidden": "true"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "bg-clip-text text-transparent relative",
                                  style: {
                                    backgroundImage: "linear-gradient(90deg, oklch(0.62 0.22 200), oklch(0.58 0.28 280), oklch(0.65 0.24 262))"
                                  },
                                  children: "Built by AI. Updated by the world"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xl sm:text-2xl relative",
                                  "aria-label": "globe",
                                  children: "🌐"
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.48 },
                      className: "flex flex-col sm:flex-row gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "landing.cta_primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          GlassButton,
                          {
                            variant: "holographic",
                            size: "lg",
                            className: "gap-2 min-w-52 shadow-[0_0_40px_oklch(var(--primary)/0.35)]",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-5 w-5" }),
                              "Create Your First App — Free →"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/feed", "data-ocid": "landing.cta_feed_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          GlassButton,
                          {
                            variant: "secondary",
                            size: "lg",
                            className: "gap-2 min-w-44",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
                              "See What's Being Built"
                            ]
                          }
                        ) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.6, delay: 0.5 },
                      className: "flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground font-body",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔐 Secured by Internet Identity" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block opacity-30", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡ Zero code needed" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block opacity-30", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎮 Earn XP from day one" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.6, delay: 0.9 },
                      className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body uppercase tracking-widest", children: "See it in action" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            animate: { y: [0, 6, 0] },
                            transition: {
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut"
                            },
                            className: "h-5 w-5 rounded-full border border-primary/40 flex items-center justify-center",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "relative py-10 overflow-hidden bg-muted/40",
          "data-ocid": "landing.ticker_section",
          "aria-label": "Idea transformation examples",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--primary)/0.5), oklch(var(--secondary)/0.4), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 bottom-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--secondary)/0.3), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 text-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "text-xs uppercase tracking-widest text-muted-foreground font-body",
                children: "⚡ Instant transformations happening now"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(IdeaTicker, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          id: "features",
          className: "relative py-28",
          "data-ocid": "landing.features_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "secondary", className: "mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
                    "Why Creators Choose AppVerse"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl lg:text-6xl mt-4 mb-5 tracking-tight", children: [
                    "Four Unfair",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      HolographicText,
                      {
                        as: "span",
                        variant: "rainbow",
                        className: "text-4xl lg:text-6xl",
                        children: "Advantages"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed", children: "Every feature was built to make you faster, smarter, and more addicted to creating than ever before." })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto", children: FEATURES.map(
              ({
                icon: Icon,
                title,
                description,
                badge,
                badgeVariant,
                glowColor
              }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: {
                    duration: 0.55,
                    delay: idx * 0.09,
                    ease: [0.16, 1, 0.3, 1]
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    GlassCard,
                    {
                      variant: "elevated",
                      className: "h-full group hover:border-primary/40 transition-smooth cursor-pointer hover:shadow-[0_0_40px_oklch(var(--primary)/0.15)] hover:-translate-y-1",
                      "data-ocid": `landing.feature_card.${idx + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-12 w-12 rounded-xl border flex items-center justify-center transition-smooth group-hover:scale-110",
                              style: {
                                background: glowColor,
                                borderColor: glowColor.replace("/0.2", "/0.4")
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(GlowBadge, { variant: badgeVariant, children: badge })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl mb-2", children: title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-primary text-sm font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [
                          "Explore feature",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                        ] })
                      ] })
                    }
                  )
                },
                title
              )
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: "reality-engine",
          className: "relative py-28 bg-muted/30",
          "data-ocid": "landing.reality_engine_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--secondary)/0.5), oklch(var(--accent)/0.4), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 bottom-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--primary)/0.3), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "accent", className: "mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 mr-1" }),
                      "Next Level Unlocked"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl lg:text-6xl mt-4 mb-5 tracking-tight", children: [
                      "⚡ The Reality Engine —",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HolographicText,
                        {
                          as: "span",
                          variant: "rainbow",
                          className: "text-4xl lg:text-6xl",
                          children: "5 New Powers"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed", children: "Five breakthroughs nobody has built into one platform — until now." })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: REALITY_POWERS.map(
                ({ emoji, name, description, borderColor, glowColor }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: {
                      duration: 0.55,
                      delay: idx * 0.09,
                      ease: [0.16, 1, 0.3, 1]
                    },
                    "data-ocid": `landing.reality_power_card.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "h-full rounded-2xl p-5 flex flex-col gap-3 backdrop-blur-md transition-smooth hover:-translate-y-1 group",
                        style: {
                          background: "oklch(0.97 0.012 262 / 0.97)",
                          borderLeft: `4px solid ${borderColor}`,
                          borderTop: "1px solid oklch(0.84 0.04 262 / 0.4)",
                          borderRight: "1px solid oklch(0.84 0.04 262 / 0.4)",
                          borderBottom: "1px solid oklch(0.84 0.04 262 / 0.4)",
                          boxShadow: `inset 0 0 20px ${glowColor}, 0 0 0px ${glowColor}`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-4xl group-hover:scale-110 transition-smooth inline-block",
                              role: "img",
                              "aria-label": name,
                              children: emoji
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-tight", children: name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
                        ]
                      }
                    )
                  },
                  name
                )
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: "pricing",
          className: "relative py-20 overflow-hidden bg-muted/30",
          "data-ocid": "landing.stats_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--primary)/0.5), oklch(var(--secondary)/0.4), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 bottom-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--primary)/0.3), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  background: "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(var(--primary)/0.04) 0%, transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "text-center mb-12",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "primary", className: "mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 mr-1" }),
                      "Live Universe Stats"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl lg:text-5xl mt-3", children: [
                      "The Numbers Don't",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HolographicText,
                        {
                          as: "span",
                          variant: "primary",
                          className: "text-3xl lg:text-5xl",
                          children: "Lie"
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: LIVE_STATS.map(
                ({ target, label, suffix, prefix, decimals }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: idx * 0.1 },
                    className: "glass-glow rounded-2xl flex flex-col items-center gap-2 py-8 px-4 text-center",
                    "data-ocid": `landing.stat.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-display font-bold text-4xl sm:text-5xl",
                          style: {
                            color: "oklch(var(--primary))",
                            textShadow: "0 0 30px oklch(var(--primary)/0.7), 0 0 60px oklch(var(--primary)/0.3)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AnimatedCounter,
                            {
                              target,
                              suffix,
                              prefix,
                              decimals
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body uppercase tracking-widest", children: label })
                    ]
                  },
                  label
                )
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          id: "community",
          className: "relative py-28",
          "data-ocid": "landing.testimonials_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "accent", className: "mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 mr-1" }),
                    "Creator Stories"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl lg:text-5xl mt-4 mb-5 tracking-tight", children: [
                    "Creators of the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      HolographicText,
                      {
                        as: "span",
                        variant: "accent",
                        className: "text-4xl lg:text-5xl",
                        children: "Future"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base leading-relaxed", children: "Real creators. Real creations. Real magic." })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map(
              ({
                name,
                level,
                levelLabel,
                quote,
                initials,
                gradientFrom,
                gradientTo
              }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: {
                    duration: 0.55,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  },
                  "data-ocid": `landing.testimonial.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    GlassCard,
                    {
                      variant: "glow",
                      className: "h-full flex flex-col gap-5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-12 w-12 rounded-full flex items-center justify-center text-sm font-display font-bold text-foreground shrink-0 border border-border/30",
                              style: {
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                              },
                              children: initials
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm truncate", children: name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `badge-${level} text-xs px-2 py-0.5 rounded-full font-body font-medium inline-block mt-0.5`,
                                children: levelLabel
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: [
                          '"',
                          quote,
                          '"'
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", "aria-label": "5 stars", children: ["s1", "s2", "s3", "s4", "s5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-accent text-xs",
                            style: {
                              textShadow: "0 0 8px oklch(var(--accent)/0.6)"
                            },
                            "aria-hidden": "true",
                            children: "★"
                          },
                          `star-${name}-${k}`
                        )) })
                      ]
                    }
                  )
                },
                name
              )
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          className: "relative py-16",
          "data-ocid": "landing.collab_cta_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "max-w-3xl mx-auto rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-7 backdrop-blur-xl",
                  style: {
                    background: "oklch(0.97 0.012 200 / 0.97)",
                    border: "1.5px solid oklch(0.62 0.2 200 / 0.45)",
                    boxShadow: "0 0 48px oklch(0.62 0.2 200 / 0.12), inset 0 0 32px oklch(0.62 0.2 200 / 0.05)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl shrink-0", "aria-hidden": "true", children: "🌐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl mb-2 text-foreground", children: "Enter the Dream World" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base leading-relaxed", children: "Step into a shared creative universe with builders from every corner of the planet. Co-create, remix in real time, and turn your ideas into something the world hasn't seen — together." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/collab",
                        "data-ocid": "landing.collab_cta_button",
                        className: "shrink-0",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          GlassButton,
                          {
                            variant: "holographic",
                            size: "lg",
                            className: "gap-2 whitespace-nowrap",
                            style: {
                              borderColor: "oklch(0.62 0.2 200 / 0.6)",
                              boxShadow: "0 0 24px oklch(0.62 0.2 200 / 0.3)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                              "Open Collab Studio →"
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              )
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: "live-data",
          className: "relative py-28",
          "data-ocid": "landing.live_data_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(0.65 0.22 200 / 0.5), oklch(0.7 0.2 180 / 0.4), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 bottom-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(0.65 0.22 200 / 0.3), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlowBadge, { variant: "accent", className: "mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 mr-1" }),
                      "AI-built apps with live global data ⚡"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl lg:text-6xl mt-4 mb-5 tracking-tight", children: [
                      "Connected to the",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HolographicText,
                        {
                          as: "span",
                          variant: "primary",
                          className: "text-4xl lg:text-6xl",
                          children: "Real World"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed", children: "Every app you create automatically connects to verified real-time data sources — weather, maps, health APIs, and more." })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10", children: LIVE_DATA_SOURCES.map(
                ({ icon, title, description, glowColor, borderColor }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: {
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    },
                    "data-ocid": `landing.live_data_card.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "h-full rounded-2xl p-5 flex flex-col gap-3 backdrop-blur-md transition-smooth hover:-translate-y-1 group cursor-default",
                        style: {
                          background: "oklch(0.97 0.012 200 / 0.97)",
                          border: `1.5px solid ${borderColor}`,
                          boxShadow: `inset 0 0 24px ${glowColor}, 0 0 0px transparent`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "h-11 w-11 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-smooth",
                                style: {
                                  background: glowColor,
                                  border: `1px solid ${borderColor}`,
                                  boxShadow: `0 0 14px ${glowColor}`
                                },
                                children: icon
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0",
                                style: {
                                  background: "oklch(0.9 0.1 145 / 0.25)",
                                  border: "1px solid oklch(0.55 0.2 145 / 0.5)",
                                  color: "oklch(0.35 0.18 145)"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    motion.span,
                                    {
                                      animate: { opacity: [1, 0.3, 1] },
                                      transition: {
                                        duration: 1.4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut"
                                      },
                                      className: "h-1.5 w-1.5 rounded-full inline-block",
                                      style: { background: "oklch(0.55 0.2 145)" }
                                    }
                                  ),
                                  "LIVE"
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-1", children: title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
                          ] })
                        ]
                      }
                    )
                  },
                  title
                )
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.4 },
                  className: "flex justify-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/live-data", "data-ocid": "landing.live_data_hub_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassButton, { variant: "holographic", size: "lg", className: "gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                    "Explore Live Data Hub →"
                  ] }) })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "relative py-32 overflow-hidden",
          "data-ocid": "landing.cta_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(var(--primary)/0.5), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full blur-[160px] opacity-[0.1] glow-pulse",
                style: { background: "oklch(var(--primary))" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              GlassCard,
              {
                variant: "glow",
                padding: "lg",
                className: "text-center max-w-4xl mx-auto",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.92 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    className: "flex flex-col items-center gap-7",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-10 w-10 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl lg:text-5xl mb-4 tracking-tight", children: [
                          "Your next big thing is",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            HolographicText,
                            {
                              as: "span",
                              variant: "rainbow",
                              className: "text-4xl lg:text-5xl",
                              children: "60 seconds away."
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed", children: "Stop overthinking. Stop waiting. The only thing standing between your idea and a real product is one prompt — and you've got this." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "landing.cta_final_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          GlassButton,
                          {
                            variant: "holographic",
                            size: "lg",
                            className: "gap-2 min-w-52 shadow-[0_0_40px_oklch(var(--primary)/0.4)] text-lg px-8 py-4",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-5 w-5" }),
                              "Build Something Right Now →"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          GlassButton,
                          {
                            variant: "secondary",
                            size: "lg",
                            className: "gap-2",
                            "data-ocid": "landing.cta_signin_final_button",
                            onClick: login,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
                              "Sign In with Internet Identity"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Free forever. No card needed. Start earning XP in the next 60 seconds." })
                    ]
                  }
                )
              }
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 bg-muted/40 backdrop-blur-md border-t border-border/40 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded bg-primary/20 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display font-semibold text-foreground", children: "AppVerse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— A Living Digital Universe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center gap-1 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : ""
            )}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-primary hover:text-primary/80 transition-colors underline underline-offset-2",
            children: "caffeine.ai"
          }
        )
      ] }) })
    ] }) })
  ] });
}
export {
  Landing as default
};
