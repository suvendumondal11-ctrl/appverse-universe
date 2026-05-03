import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-DQTVxuMq.js";
import { L as Layout } from "./Layout-Dzbux9En.js";
const STAGES = [
  { id: "concept", icon: "💭", label: "Concept" },
  { id: "visual", icon: "🎨", label: "Visual" },
  { id: "avatar", icon: "🗣️", label: "Avatar" },
  { id: "animation", icon: "🎬", label: "Animation" },
  { id: "reality", icon: "🌐", label: "Reality" }
];
const STAGE_DELAY_MS = 1500;
function generateParticles() {
  return Array.from({ length: 20 }, (_, i) => {
    const angle = i / 20 * 2 * Math.PI + Math.random() * 0.4;
    const dist = 80 + Math.random() * 120;
    return {
      id: i,
      tx: `${Math.cos(angle) * dist}px`,
      ty: `${Math.sin(angle) * dist - 60}px`,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 0.4
    };
  });
}
function deriveAppName(prompt) {
  const words = prompt.trim().split(/\s+/);
  const key = words.find((w) => w.length > 3) ?? words[0] ?? "Vision";
  return `${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}AI`;
}
function deriveFeatures(prompt) {
  const base = [
    "Real-time AI processing",
    "Adaptive smart UI",
    "Global data sync",
    "One-tap publishing"
  ];
  const lower = prompt.toLowerCase();
  if (lower.includes("fitness") || lower.includes("health"))
    base[0] = "Health metric tracking";
  if (lower.includes("music") || lower.includes("audio"))
    base[1] = "Audio waveform studio";
  if (lower.includes("travel") || lower.includes("map"))
    base[2] = "Live location mapping";
  if (lower.includes("social") || lower.includes("chat"))
    base[3] = "Real-time messaging";
  return base;
}
function PipelineNode({
  stage,
  status,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "flex flex-col items-center gap-1",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.08 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: [
              "stage-indicator",
              status === "active" ? "active" : "",
              status === "completed" ? "completed" : "",
              "text-xs font-semibold px-3 py-2 flex items-center gap-1.5"
            ].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: stage.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: stage.label })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: [
              "progress-step w-12",
              status === "completed" ? "completed" : "",
              status === "active" ? "active" : ""
            ].filter(Boolean).join(" ")
          }
        )
      ]
    }
  );
}
function ConceptCard({ prompt }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass-glow rounded-2xl p-6 max-w-xl mx-auto",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 24 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-primary/70 uppercase tracking-widest mb-3", children: "✦ Concept Extracted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground text-lg font-display leading-relaxed", children: [
          '"',
          prompt,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2 flex-wrap", children: ["AI-Powered", "Real-Time", "Futuristic", "Viral-Ready"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-2.5 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary font-medium",
            children: tag
          },
          tag
        )) })
      ]
    }
  );
}
function VisualCard({ prompt }) {
  const [resolved, setResolved] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setResolved(true), 1800);
    return () => clearTimeout(t);
  }, []);
  const hue1 = prompt.length * 7 % 360;
  const hue2 = (hue1 + 120) % 360;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass rounded-2xl overflow-hidden max-w-xl mx-auto",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 24 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative h-48 flex items-center justify-center overflow-hidden",
            style: {
              background: `linear-gradient(135deg, hsl(${hue1} 70% 35%), hsl(${hue2} 80% 40%))`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute w-32 h-32 rounded-full border-4 border-white/40 animate-spin",
                    style: {
                      top: "10%",
                      left: "10%",
                      animationDuration: "8s"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute w-20 h-20 rotate-45 border-2 border-white/40",
                    style: {
                      bottom: "15%",
                      right: "15%",
                      animation: "spin 12s linear infinite"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute w-16 h-16 rounded-full bg-white/10 blur-sm",
                    style: {
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)"
                    }
                  }
                )
              ] }),
              !resolved ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "AI Visual Generating…" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "relative z-10 text-center text-white",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-1", children: "🎨" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Visual Created" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2.5s ease-in-out infinite"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: "Style: Holographic Neon · Resolution: 1024×1024" }) })
      ]
    }
  );
}
function AvatarCard() {
  const [speaking, setSpeaking] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const interval = setInterval(() => setSpeaking((s) => !s), 600);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass-glow rounded-2xl p-8 max-w-xs mx-auto flex flex-col items-center gap-4",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 24 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-primary/70 uppercase tracking-widest", children: "✦ Talking Avatar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-[-8px] rounded-full border-2 border-primary/50 glow-pulse",
              style: { animation: "glow-pulse 2s ease-in-out infinite" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-[-16px] rounded-full border border-accent/30",
              style: { animation: "glow-pulse 3s ease-in-out infinite reverse" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              width: "96",
              height: "96",
              viewBox: "0 0 96 96",
              className: "relative z-10",
              "aria-label": "Talking avatar",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Talking Avatar" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "48",
                    cy: "48",
                    r: "40",
                    fill: "oklch(0.18 0.04 262)",
                    stroke: "oklch(0.72 0.22 262)",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ellipse",
                  {
                    cx: "34",
                    cy: "42",
                    rx: "6",
                    ry: "7",
                    fill: "oklch(0.72 0.22 262)",
                    style: { filter: "drop-shadow(0 0 6px oklch(0.72 0.22 262))" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ellipse",
                  {
                    cx: "62",
                    cy: "42",
                    rx: "6",
                    ry: "7",
                    fill: "oklch(0.72 0.22 262)",
                    style: { filter: "drop-shadow(0 0 6px oklch(0.72 0.22 262))" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "34", cy: "43", r: "2.5", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "62", cy: "43", r: "2.5", fill: "white" }),
                speaking ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ellipse",
                  {
                    cx: "48",
                    cy: "62",
                    rx: "10",
                    ry: "7",
                    fill: "oklch(0.75 0.28 50)",
                    style: { filter: "drop-shadow(0 0 4px oklch(0.75 0.28 50))" }
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 38 62 Q 48 68 58 62",
                    stroke: "oklch(0.75 0.28 50)",
                    strokeWidth: "2.5",
                    fill: "none",
                    strokeLinecap: "round",
                    style: { filter: "drop-shadow(0 0 4px oklch(0.75 0.28 50))" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 20 85 Q 48 78 76 85",
                    stroke: "oklch(0.62 0.25 280)",
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Reality Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: speaking ? "Speaking your vision…" : "Ready to narrate…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-8", children: ["b1", "b2", "b3", "b4", "b5", "b6", "b7"].map((id, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-1.5 rounded-full bg-primary",
            style: {
              height: speaking ? `${12 + Math.abs(Math.sin(i + Date.now() / 200) * 20)}px` : "6px",
              transition: "height 0.15s ease",
              opacity: speaking ? 1 : 0.4
            }
          },
          id
        )) })
      ]
    }
  );
}
function AnimationCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass rounded-2xl overflow-hidden max-w-xl mx-auto",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 24 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 flex items-center justify-center overflow-hidden bg-background/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32", children: [
            [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full border-2",
                style: {
                  borderColor: i === 0 ? "oklch(0.72 0.22 262 / 0.7)" : i === 1 ? "oklch(0.75 0.28 50 / 0.6)" : "oklch(0.62 0.25 280 / 0.5)",
                  transform: `scale(${1 + i * 0.25})`,
                  animation: `spin ${4 + i * 2}s linear infinite ${i % 2 ? "reverse" : ""}`
                }
              },
              i
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/30",
                style: { animation: "glow-pulse 1.5s ease-in-out infinite" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-xl", children: "⚡" })
          ] }),
          ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"].map((id, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute w-2 h-2 rounded-full",
              style: {
                background: i % 2 ? "oklch(0.72 0.22 262)" : "oklch(0.75 0.28 50)",
                left: `${10 + i * 11}%`,
                top: `${20 + i * 17 % 60}%`,
                animation: `sparkle ${1 + i % 3 * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: "0 0 8px currentColor"
              }
            },
            id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm", children: "🎬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Motion Preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Looping · 60fps · Reactive" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-1 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-medium", children: "LIVE" })
          ] })
        ] })
      ]
    }
  );
}
function RealityCard({ prompt }) {
  const appName = deriveAppName(prompt);
  const features = deriveFeatures(prompt);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "legendary-reveal glass-glow rounded-2xl p-6 max-w-xl mx-auto",
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 200, damping: 20 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl shadow-lg", children: "🚀" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg holographic-text", children: appName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Reality created · Live" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto px-2.5 py-1 text-xs rounded-full badge-legend font-bold", children: "🌟 Legendary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame !w-[100px] !h-[200px] !rounded-[20px] shrink-0 !border-[6px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "phone-notch !w-16 !h-4 !rounded-b-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "phone-content pt-6 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-ui !rounded-xl !p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-14 rounded-full bg-primary/40 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-10 rounded-full bg-accent/30 mb-3" }),
              ["r1", "r2", "r3"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-2 w-full rounded-full bg-primary/20 mb-1.5"
                },
                id
              ))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "phone-indicator" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wider", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                  f
                ]
              },
              f
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 flex-1 rounded-full bg-primary/20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-primary rounded-full",
                  style: {
                    width: "87%",
                    animation: "progress-fill 1s ease-out forwards"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-mono", children: "87%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Viral potential" })
          ] })
        ] })
      ]
    }
  );
}
function ParticleBurst({ particles }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "particle-burst pointer-events-none", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "particle gold",
      style: {
        width: p.size,
        height: p.size,
        top: "50%",
        left: "50%",
        marginTop: -p.size / 2,
        marginLeft: -p.size / 2,
        "--tx": p.tx,
        "--ty": p.ty,
        animationDelay: `${p.delay}s`,
        animationDuration: "1.8s"
      }
    },
    p.id
  )) });
}
function AmbientBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none overflow-hidden -z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute w-[600px] h-[600px] rounded-full opacity-20",
        style: {
          top: "-10%",
          left: "-15%",
          background: "radial-gradient(circle, oklch(0.72 0.22 262) 0%, transparent 70%)",
          animation: "glow-pulse 8s ease-in-out infinite",
          filter: "blur(60px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute w-[500px] h-[500px] rounded-full opacity-15",
        style: {
          bottom: "5%",
          right: "-10%",
          background: "radial-gradient(circle, oklch(0.75 0.28 50) 0%, transparent 70%)",
          animation: "glow-pulse 10s ease-in-out infinite reverse",
          filter: "blur(60px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute w-[400px] h-[400px] rounded-full opacity-10",
        style: {
          top: "40%",
          left: "30%",
          background: "radial-gradient(circle, oklch(0.62 0.25 280) 0%, transparent 70%)",
          animation: "glow-pulse 12s ease-in-out infinite",
          filter: "blur(80px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.025]",
        style: {
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, oklch(0.72 0.22 262) 3px, oklch(0.72 0.22 262) 4px)"
        }
      }
    )
  ] });
}
function TransformCanvas() {
  const [prompt, setPrompt] = reactExports.useState("");
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [currentStageIndex, setCurrentStageIndex] = reactExports.useState(-1);
  const [completedStages, setCompletedStages] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [showActions, setShowActions] = reactExports.useState(false);
  const [particles, setParticles] = reactExports.useState([]);
  const [showBurst, setShowBurst] = reactExports.useState(false);
  const [submittedPrompt, setSubmittedPrompt] = reactExports.useState("");
  const outputRef = reactExports.useRef(null);
  const stageStatus = reactExports.useCallback(
    (stageId, idx) => {
      if (completedStages.has(stageId)) return "completed";
      if (currentStageIndex === idx) return "active";
      return "idle";
    },
    [completedStages, currentStageIndex]
  );
  const handleTransform = () => {
    if (!prompt.trim() || isRunning) return;
    setSubmittedPrompt(prompt.trim());
    setIsRunning(true);
    setCurrentStageIndex(0);
    setCompletedStages(/* @__PURE__ */ new Set());
    setShowActions(false);
    setShowBurst(false);
    setTimeout(() => {
      var _a;
      (_a = outputRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };
  reactExports.useEffect(() => {
    if (!isRunning || currentStageIndex < 0) return;
    if (currentStageIndex >= STAGES.length) return;
    const timer = setTimeout(() => {
      const stageId = STAGES[currentStageIndex].id;
      setCompletedStages((prev) => /* @__PURE__ */ new Set([...prev, stageId]));
      const nextIdx = currentStageIndex + 1;
      if (nextIdx < STAGES.length) {
        setCurrentStageIndex(nextIdx);
      } else {
        setCurrentStageIndex(-1);
        setIsRunning(false);
        setShowActions(true);
        setParticles(generateParticles());
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 2500);
      }
    }, STAGE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isRunning, currentStageIndex]);
  const activeStage = currentStageIndex >= 0 ? STAGES[currentStageIndex] : void 0;
  const lastCompleted = !activeStage && completedStages.size > 0 ? STAGES[completedStages.size - 1] : void 0;
  const displayStage = activeStage ?? lastCompleted;
  const handleReset = () => {
    setPrompt("");
    setSubmittedPrompt("");
    setIsRunning(false);
    setCurrentStageIndex(-1);
    setCompletedStages(/* @__PURE__ */ new Set());
    setShowActions(false);
    setShowBurst(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center pt-16 pb-8 px-4",
          initial: { opacity: 0, y: -32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-xs font-mono text-primary/80 mb-5",
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
                  "Reality Engine v∞ · Live"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display font-black text-5xl md:text-7xl tracking-tight holographic-text leading-tight mb-5",
                style: { backgroundSize: "300% 300%" },
                children: "Reality Engine"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4 },
                children: [
                  "The moment you imagine something, it instantly transforms into a",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "living, dynamic reality" }),
                  "."
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "px-4 max-w-3xl mx-auto w-full mb-10",
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-glow rounded-2xl p-2 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "transformation-scan-line",
                style: { opacity: isRunning ? 1 : 0 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                "data-ocid": "transform.input",
                className: "w-full bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground text-base p-4 min-h-[100px] font-body",
                placeholder: "Describe your vision… ✨  e.g. a neon fitness tracking app with real-time AI coaching",
                value: prompt,
                onChange: (e) => setPrompt(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter" && e.metaKey) handleTransform();
                },
                disabled: isRunning,
                rows: 3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 font-mono", children: "⌘ + Enter to transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  "data-ocid": "transform.submit_button",
                  onClick: handleTransform,
                  disabled: !prompt.trim() || isRunning,
                  className: "px-6 py-2.5 rounded-xl font-semibold text-sm transition-smooth disabled:opacity-50 disabled:cursor-not-allowed",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.72 0.22 262), oklch(0.75 0.28 50))",
                    color: "oklch(0.08 0 0)",
                    boxShadow: "0 0 24px oklch(0.72 0.22 262 / 0.4)"
                  },
                  whileHover: { scale: 1.04 },
                  whileTap: { scale: 0.97 },
                  children: isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                    "Transforming…"
                  ] }) : "Transform It ⚡"
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: (isRunning || completedStages.size > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          "data-ocid": "transform.pipeline",
          className: "px-4 max-w-4xl mx-auto w-full mb-10",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: STAGES.map((stage, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center flex-1 min-w-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PipelineNode,
                  {
                    stage,
                    status: stageStatus(stage.id, idx),
                    index: idx
                  }
                ),
                idx < STAGES.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: [
                      "stage-connector mx-1",
                      completedStages.has(stage.id) ? "active" : ""
                    ].filter(Boolean).join(" "),
                    style: { flex: 1, minWidth: "16px" }
                  }
                )
              ]
            },
            stage.id
          )) }) })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: outputRef, className: "px-4 max-w-3xl mx-auto w-full mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: displayStage && submittedPrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: [
                  "stage-indicator",
                  stageStatus(
                    displayStage.id,
                    STAGES.findIndex((s) => s.id === displayStage.id)
                  ) === "active" ? "active" : "completed"
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: displayStage.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Stage",
                    " ",
                    STAGES.findIndex((s) => s.id === displayStage.id) + 1,
                    ":",
                    " ",
                    displayStage.label
                  ] })
                ]
              }
            ) }),
            displayStage.id === "concept" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConceptCard, { prompt: submittedPrompt }),
            displayStage.id === "visual" && /* @__PURE__ */ jsxRuntimeExports.jsx(VisualCard, { prompt: submittedPrompt }),
            displayStage.id === "avatar" && /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarCard, {}),
            displayStage.id === "animation" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimationCard, {}),
            displayStage.id === "reality" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              showBurst && /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleBurst, { particles }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RealityCard, { prompt: submittedPrompt })
            ] })
          ]
        },
        displayStage.id
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showActions && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": "transform.actions",
          className: "px-4 max-w-xl mx-auto w-full mb-16",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3 items-center justify-center", children: [
              {
                label: "Remix ⚡",
                ocid: "transform.remix_button",
                variant: "accent"
              },
              {
                label: "Build This 🚀",
                ocid: "transform.primary_button",
                variant: "primary"
              },
              {
                label: "Share 🌐",
                ocid: "transform.secondary_button",
                variant: "glass"
              }
            ].map((btn, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                "data-ocid": btn.ocid,
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 280,
                  damping: 22
                },
                className: [
                  "px-7 py-3 rounded-xl font-semibold text-sm transition-smooth w-full sm:w-auto",
                  btn.variant === "accent" ? "remix-btn" : "",
                  btn.variant === "primary" ? "bg-primary text-primary-foreground glow-primary hover:scale-105" : "",
                  btn.variant === "glass" ? "glass-glow text-foreground hover:scale-105" : ""
                ].filter(Boolean).join(" "),
                onClick: btn.label.startsWith("Remix") ? handleReset : void 0,
                whileHover: { scale: 1.04 },
                whileTap: { scale: 0.97 },
                children: btn.label
              },
              btn.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "text-center text-xs text-muted-foreground mt-4",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5 },
                children: "Your reality is ready. 20 XP earned ✨"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !isRunning && completedStages.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": "transform.empty_state",
          className: "px-4 max-w-3xl mx-auto w-full mb-16 text-center",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-5 gap-3 mb-6", children: STAGES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "glass rounded-xl p-3 flex flex-col items-center gap-2",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 + i * 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: s.label })
                ]
              },
              s.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                className: "text-muted-foreground text-sm",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.1 },
                children: [
                  "Type your idea above and watch it transform through 5 stages of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "AI reality generation" })
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
export {
  TransformCanvas as default
};
