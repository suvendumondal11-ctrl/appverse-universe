import { c as createLucideIcon, r as reactExports, b as ue, j as jsxRuntimeExports, d as cn } from "./index-BB65hrJ6.js";
import { N as Navbar } from "./Navbar-DFO37bKo.js";
import { B as Badge } from "./badge-jgtNc1zS.js";
import { B as Button } from "./button-C-UP_Gtb.js";
import { a as Textarea, S as Star, T as Trash2, F as Flame, H as Heart } from "./textarea-CPU6Ihms.js";
import { S as Sparkles, Z as Zap } from "./zap-ejWsDErG.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import { B as Brain, U as Users } from "./users-D8yA43PM.js";
import { A as AnimatePresence } from "./index-BDLPNy_3.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-B3eK8ND6.js";
import { C as Copy } from "./copy-D_TgVocj.js";
import { T as TrendingUp } from "./trending-up-B8DqBgwR.js";
import { C as Check } from "./check-Dk6czMzH.js";
import "./HolographicText-C8UGVPGc.js";
import "./index-DGa1wCGE.js";
import "./moon-DPI3MEjk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode);
function generateVariations(raw) {
  const cleaned = raw.trim().replace(/\s+/g, " ");
  const lower = cleaned.toLowerCase();
  const words = cleaned.split(" ").filter(Boolean);
  const core = words.length <= 5 ? cleaned : words.slice(-Math.ceil(words.length / 2)).join(" ");
  const coreShort = words.slice(0, 4).join(" ");
  const urgencyBase = core.charAt(0).toUpperCase() + core.slice(1);
  const urgencyVerb = lower.includes("build") || lower.includes("creat") ? "Launch" : lower.includes("learn") ? "Master" : "Start";
  const urgencyText = `Right now: ${urgencyVerb} ${urgencyBase.replace(/^(I want|I need|I have|A|An|The)\s+/i, "")}. Every second you wait, someone else ships it first.`;
  const outcomes = [
    "your revenue",
    "your reach",
    "your creative output",
    "your workflow",
    "your impact"
  ];
  const outcome = outcomes[Math.floor(words.length % outcomes.length)];
  const benefitText = `Finally, a way to 10× ${outcome} — ${core.charAt(0).toLowerCase() + core.slice(1)}, without the frustration or the waiting.`;
  const hookText = `This changes everything: ${core.charAt(0).toUpperCase() + core.slice(1)} is no longer a dream you chase — it's the thing you wake up and build today.`;
  const niche = lower.includes("fit") || lower.includes("health") ? "fitness creators" : lower.includes("edu") || lower.includes("learn") ? "educators" : lower.includes("busi") ? "entrepreneurs" : "creators";
  const socialText = `10,000+ ${niche} already use this to ${core.charAt(0).toLowerCase() + core.slice(1)} — and they're not looking back.`;
  const boldWords = words.filter(
    (w) => w.length > 3 && ![
      "that",
      "this",
      "with",
      "from",
      "have",
      "your",
      "will",
      "just",
      "want",
      "need"
    ].includes(w.toLowerCase())
  ).slice(0, 3).map((w) => w.toUpperCase());
  const boldText = boldWords.length >= 2 ? `${boldWords.join(". ")}.` : `${coreShort.toUpperCase()} — OR STAY AVERAGE.`;
  return [
    {
      label: "Urgency",
      tag: "Urgency",
      text: urgencyText,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4" }),
      color: "oklch(var(--destructive))",
      bgColor: "rgba(239,68,68,0.12)",
      borderColor: "rgba(239,68,68,0.4)"
    },
    {
      label: "Benefit-Led",
      tag: "Benefit-Led",
      text: benefitText,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
      color: "oklch(var(--primary))",
      bgColor: "rgba(99,102,241,0.12)",
      borderColor: "rgba(99,102,241,0.4)"
    },
    {
      label: "Emotional Hook",
      tag: "Emotional Hook",
      text: hookText,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
      color: "oklch(var(--secondary))",
      bgColor: "rgba(168,85,247,0.12)",
      borderColor: "rgba(168,85,247,0.4)"
    },
    {
      label: "Social Proof",
      tag: "Social Proof",
      text: socialText,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
      color: "oklch(var(--accent))",
      bgColor: "rgba(34,211,238,0.12)",
      borderColor: "rgba(34,211,238,0.4)"
    },
    {
      label: "Bold Statement",
      tag: "Bold Statement",
      text: boldText,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
      color: "oklch(var(--ai-marketing))",
      bgColor: "rgba(234,179,8,0.12)",
      borderColor: "rgba(234,179,8,0.4)"
    }
  ];
}
function NeuralActivityIndicator({ isActive }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-2",
      "data-ocid": "brainstorm.neural_indicator",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-widest", children: "AI Nodes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "rounded-full",
            style: {
              width: 8,
              height: 8,
              background: isActive ? "oklch(var(--primary))" : "oklch(var(--muted-foreground) / 0.3)",
              boxShadow: isActive ? "0 0 8px oklch(var(--primary) / 0.7)" : "none"
            },
            animate: isActive ? {
              opacity: [0.3, 1, 0.3],
              scale: [0.85, 1.25, 0.85]
            } : { opacity: 0.3, scale: 1 },
            transition: isActive ? {
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.18,
              ease: "easeInOut"
            } : { duration: 0.3 }
          },
          i
        )) })
      ]
    }
  );
}
function HeroBannerPreview({ copy }) {
  const words = copy.split(" ");
  const title = words.slice(0, Math.min(7, Math.ceil(words.length / 2))).join(" ");
  const subtitle = words.slice(Math.min(7, Math.ceil(words.length / 2))).join(" ") || "Your next move starts right here.";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border/40 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative p-6 flex flex-col gap-3 min-h-[140px] justify-center",
      style: {
        background: "linear-gradient(135deg, oklch(0.94 0.04 262 / 0.9) 0%, oklch(0.96 0.03 280 / 0.85) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-10",
            style: {
              background: "radial-gradient(circle at 70% 50%, oklch(var(--primary)), transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold uppercase tracking-widest text-primary relative z-10", children: "Hero Banner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-display font-bold text-lg leading-tight relative z-10 line-clamp-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed relative z-10 line-clamp-2", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "relative z-10 self-start mt-1 px-4 py-1.5 rounded-lg text-xs font-semibold font-body text-primary-foreground",
            style: { background: "oklch(var(--primary))" },
            children: "Get Started →"
          }
        )
      ]
    }
  ) });
}
function FeatureCardPreview({ copy }) {
  const words = copy.split(" ");
  const title = words.slice(0, Math.min(5, Math.ceil(words.length / 2))).join(" ");
  const desc = words.slice(Math.min(5, Math.ceil(words.length / 2))).join(" ") || "Designed to make you unstoppable.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 p-5 bg-card shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Feature Card" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-9 w-9 rounded-lg flex items-center justify-center shrink-0",
          style: {
            background: "oklch(var(--primary) / 0.12)",
            border: "1px solid oklch(var(--primary) / 0.25)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm text-foreground leading-snug line-clamp-2 mb-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3", children: desc })
      ] })
    ] })
  ] });
}
function StatCardPreview({ copy }) {
  const words = copy.split(" ");
  const number = words.find((w) => /\d/.test(w)) ?? "10x";
  const label = words.filter((w) => !/\d/.test(w)).slice(0, 5).join(" ") || copy;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 p-5 bg-card shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Stat Card" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-9 w-9 rounded-lg flex items-center justify-center shrink-0",
          style: {
            background: "oklch(var(--accent) / 0.12)",
            border: "1px solid oklch(var(--accent) / 0.3)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartColumn,
            {
              className: "h-4 w-4",
              style: { color: "oklch(var(--accent))" }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-2xl text-foreground leading-none", children: number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed", children: label })
      ] })
    ] })
  ] });
}
function VariationCard({
  variation,
  index,
  isSelected,
  isSaved,
  onSelect,
  onCopy,
  onSave
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const cardRef = reactExports.useRef(null);
  const handleCopy = () => {
    onCopy(variation.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: cardRef,
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
      transition: { delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      "data-ocid": `brainstorm.variation.item.${index + 1}`,
      onClick: onSelect,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        perspective: "1000px",
        transform: isHovered ? "rotateY(8deg) rotateX(-3deg) translateY(-4px)" : "rotateY(0deg) rotateX(0deg) translateY(0px)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
      },
      className: cn(
        "group relative rounded-xl border p-4 cursor-pointer",
        isSelected ? "border-primary/50 shadow-[0_0_20px_oklch(var(--primary)/0.22)]" : "border-border/50 hover:border-primary/40",
        "bg-card"
      ),
      children: [
        isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-0 rounded-xl pointer-events-none",
            style: {
              background: "linear-gradient(135deg, oklch(var(--primary) / 0.18), oklch(var(--secondary) / 0.12), oklch(var(--accent) / 0.15))",
              border: "1px solid transparent",
              backgroundClip: "padding-box"
            }
          }
        ),
        isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-[-1px] rounded-xl pointer-events-none",
            style: {
              background: `linear-gradient(135deg, ${variation.color}, oklch(var(--secondary)), oklch(var(--accent)))`,
              opacity: 0.5,
              filter: "blur(2px)",
              borderRadius: "inherit",
              zIndex: -1
            }
          }
        ),
        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-0 rounded-xl opacity-5 pointer-events-none",
            style: { background: "oklch(var(--primary))" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-3 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "flex items-center justify-center h-6 w-6 rounded-md shrink-0",
                style: { background: variation.bgColor, color: variation.color },
                children: variation.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-xs font-semibold font-display shrink-0",
                style: {
                  borderColor: variation.borderColor,
                  color: variation.color
                },
                children: variation.tag
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": isSaved ? "Remove from favorites" : "Save to favorites",
                "data-ocid": `brainstorm.save_button.${index + 1}`,
                onClick: (e) => {
                  e.stopPropagation();
                  onSave(variation);
                },
                className: cn(
                  "h-7 w-7 rounded-md flex items-center justify-center transition-smooth",
                  isSaved ? "text-amber-500" : "text-muted-foreground hover:text-amber-400"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-3.5 w-3.5", isSaved && "fill-current") })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Copy variation",
                "data-ocid": `brainstorm.copy_button.${index + 1}`,
                onClick: (e) => {
                  e.stopPropagation();
                  handleCopy();
                },
                className: "h-7 px-2 rounded-md flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth",
                children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "Copied" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground font-body relative z-10", children: variation.text }),
        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-primary font-medium flex items-center gap-1 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
          " Selected for preview"
        ] })
      ]
    }
  );
}
function LoadingShimmer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", "data-ocid": "brainstorm.loading_state", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 p-4 bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md bg-muted animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-24 rounded-full bg-muted animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full rounded bg-muted animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-5/6 rounded bg-muted animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 rounded bg-muted animate-pulse" })
    ] })
  ] }, i)) });
}
function ProcessingRing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute inset-0 rounded-xl pointer-events-none overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute inset-[-2px] rounded-xl",
        style: {
          background: "conic-gradient(oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)), oklch(var(--primary)))",
          animation: "spin 1.2s linear infinite",
          opacity: 0.6
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-[1px] rounded-[10px] bg-card" })
  ] });
}
const LOCALSTORAGE_KEY = "appverse_brainstorm_favorites";
function Brainstorm() {
  const [rawIdea, setRawIdea] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [variations, setVariations] = reactExports.useState([]);
  const [variationKey, setVariationKey] = reactExports.useState(0);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const [savedIdeas, setSavedIdeas] = reactExports.useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEY) ?? "[]"
      );
    } catch {
      return [];
    }
  });
  const [favoritesOpen, setFavoritesOpen] = reactExports.useState(false);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedIdeas));
  }, [savedIdeas]);
  const handleRefine = reactExports.useCallback(() => {
    if (!rawIdea.trim()) {
      ue.error("Drop your raw idea first — even a single word works.");
      return;
    }
    setIsProcessing(true);
    setVariations([]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsProcessing(false);
      setVariationKey((k) => k + 1);
      setVariations(generateVariations(rawIdea));
      setSelectedIndex(0);
    }, 1200);
  }, [rawIdea]);
  const handleCopy = reactExports.useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => {
      ue.success("Copied to clipboard!", { duration: 2500 });
    }).catch(() => {
      ue.error("Couldn't copy — try selecting the text manually.");
    });
  }, []);
  const handleSave = reactExports.useCallback((variation) => {
    setSavedIdeas((prev) => {
      const exists = prev.find((s) => s.text === variation.text);
      if (exists) {
        ue("Removed from Saved Ideas", { icon: "🗑️" });
        return prev.filter((s) => s.text !== variation.text);
      }
      ue.success("Saved to your ideas!", { icon: "⭐" });
      const newIdea = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        tag: variation.tag,
        text: variation.text,
        savedAt: Date.now()
      };
      setFavoritesOpen(true);
      return [newIdea, ...prev];
    });
  }, []);
  const handleRemoveSaved = reactExports.useCallback((id) => {
    setSavedIdeas((prev) => prev.filter((s) => s.id !== id));
    ue("Removed from Saved Ideas", { icon: "🗑️" });
  }, []);
  const isSaved = (text) => savedIdeas.some((s) => s.text === text);
  const selectedVariation = variations[selectedIndex] ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "border-b border-border/40 bg-card",
        "data-ocid": "brainstorm.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-6 py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-wrap gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display",
                style: {
                  background: "oklch(var(--primary) / 0.1)",
                  border: "1px solid oklch(var(--primary) / 0.3)",
                  color: "oklch(var(--primary))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                  "AI-Powered"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display",
                style: {
                  background: "oklch(var(--accent) / 0.1)",
                  border: "1px solid oklch(var(--accent) / 0.3)",
                  color: "oklch(var(--accent))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                  "Instant Results"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                animate: {
                  boxShadow: [
                    "0 0 8px oklch(var(--secondary) / 0.3)",
                    "0 0 20px oklch(var(--secondary) / 0.7)",
                    "0 0 8px oklch(var(--secondary) / 0.3)"
                  ]
                },
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                },
                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display",
                style: {
                  background: "oklch(var(--secondary) / 0.12)",
                  border: "1px solid oklch(var(--secondary) / 0.5)",
                  color: "oklch(var(--secondary))"
                },
                "data-ocid": "brainstorm.multi_ai_badge",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3 w-3" }),
                  "Multi-AI Brain"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-display font-black text-foreground leading-tight mb-2", children: [
            "Brainstorm",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: "Canvas"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "holographic-text text-sm font-display font-semibold mb-2",
              style: { backgroundSize: "300% 300%" },
              children: "Multi-AI brain. One smart result 🧠"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground font-body leading-relaxed", children: [
            "Turn messy thoughts into copy that converts.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Instantly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralActivityIndicator, { isActive: isProcessing }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 container mx-auto px-4 lg:px-6 py-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col gap-6",
            "data-ocid": "brainstorm.input_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "raw-idea",
                    className: "text-sm font-semibold font-display text-foreground",
                    children: "Dump Your Raw Idea Here"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "A half-sentence, a messy thought, even a single word — AI will make it brilliant." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "raw-idea",
                    "data-ocid": "brainstorm.idea_input",
                    value: rawIdea,
                    onChange: (e) => setRawIdea(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                        handleRefine();
                    },
                    placeholder: "Write anything — half a sentence, a messy thought, a name. AI will make it brilliant.",
                    className: "min-h-[160px] resize-none text-base leading-relaxed font-body border-border/60 focus:border-primary/50 focus:ring-primary/20 bg-card placeholder:text-muted-foreground/60 rounded-xl",
                    maxLength: 500
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute bottom-3 right-3 text-xs text-muted-foreground/60 tabular-nums select-none pointer-events-none", children: [
                  rawIdea.length,
                  "/500"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessingRing, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "brainstorm.refine_button",
                    onClick: handleRefine,
                    disabled: isLoading || !rawIdea.trim(),
                    className: "relative w-full h-12 text-base font-display font-bold rounded-xl transition-smooth",
                    style: isLoading || !rawIdea.trim() ? {} : {
                      background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                      boxShadow: "0 0 24px oklch(var(--primary) / 0.3)",
                      color: "oklch(var(--primary-foreground))",
                      border: "none"
                    },
                    children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "h-4 w-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full",
                          style: { animation: "spin 0.8s linear infinite" }
                        }
                      ),
                      "AI is thinking…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                      "Refine with AI",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "⌘ + Enter to refine · Ideas stay local · No account needed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedVariation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 8 },
                  transition: { duration: 0.4 },
                  className: "flex flex-col gap-4",
                  "data-ocid": "brainstorm.preview_section",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border/50" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold font-display text-muted-foreground uppercase tracking-wider px-2", children: "See it in context" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border/50" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBannerPreview, { copy: selectedVariation.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCardPreview, { copy: selectedVariation.text }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCardPreview, { copy: selectedVariation.text })
                    ] })
                  ]
                },
                "preview-section"
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col gap-4",
            "data-ocid": "brainstorm.output_panel",
            children: [
              !isLoading && variations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "flex flex-col items-center justify-center py-16 px-8 rounded-2xl border border-dashed border-border/60 bg-muted/20 text-center gap-4",
                  "data-ocid": "brainstorm.output_empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-14 w-14 rounded-2xl flex items-center justify-center",
                        style: {
                          background: "oklch(var(--primary) / 0.1)",
                          border: "1px solid oklch(var(--primary) / 0.2)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-primary" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground mb-1", children: "Your 5 AI variations will appear here" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                        "Type any rough idea on the left and hit",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Refine with AI" }),
                        "."
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap justify-center", children: [
                      "Urgency",
                      "Benefit-Led",
                      "Emotional Hook",
                      "Social Proof",
                      "Bold Statement"
                    ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2.5 py-1 rounded-full font-medium font-display",
                        style: {
                          background: "oklch(var(--muted))",
                          color: "oklch(var(--muted-foreground))",
                          border: "1px solid oklch(var(--border) / 0.6)"
                        },
                        children: tag
                      },
                      tag
                    )) })
                  ]
                }
              ),
              isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingShimmer, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !isLoading && variations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  className: "flex flex-col gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold font-display text-foreground", children: "5 AI Variations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Hover to rotate · Click to preview" })
                    ] }),
                    variations.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      VariationCard,
                      {
                        variation: v,
                        index: i,
                        isSelected: selectedIndex === i,
                        isSaved: isSaved(v.text),
                        onSelect: () => setSelectedIndex(i),
                        onCopy: handleCopy,
                        onSave: handleSave
                      },
                      v.tag
                    ))
                  ]
                },
                variationKey
              ) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", "data-ocid": "brainstorm.favorites_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "brainstorm.favorites_toggle",
            onClick: () => setFavoritesOpen((v) => !v),
            className: "w-full flex items-center justify-between px-5 py-4 rounded-xl border border-border/50 bg-card hover:bg-muted/30 transition-smooth group",
            "aria-expanded": favoritesOpen,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-7 w-7 rounded-lg flex items-center justify-center",
                    style: {
                      background: "oklch(var(--accent) / 0.12)",
                      border: "1px solid oklch(var(--accent) / 0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "h-3.5 w-3.5",
                        style: { color: "oklch(var(--accent))" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: "Saved Ideas" }),
                savedIdeas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-xs font-bold font-display",
                    style: {
                      background: "oklch(var(--accent) / 0.15)",
                      color: "oklch(var(--accent))",
                      border: "1px solid oklch(var(--accent) / 0.3)"
                    },
                    children: savedIdeas.length
                  }
                )
              ] }),
              favoritesOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: favoritesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3", children: savedIdeas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center py-10 rounded-xl border border-dashed border-border/50 text-center gap-2",
                "data-ocid": "brainstorm.favorites_empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-muted-foreground/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Star any variation to save it here." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: savedIdeas.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { delay: i * 0.04 },
                "data-ocid": `brainstorm.saved_idea.item.${i + 1}`,
                className: "group relative rounded-xl border border-border/50 p-4 bg-card hover:border-primary/30 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs font-display shrink-0",
                        children: idea.tag
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Remove from saved",
                        "data-ocid": `brainstorm.saved_delete_button.${i + 1}`,
                        onClick: () => handleRemoveSaved(idea.id),
                        className: "h-6 w-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-destructive transition-smooth opacity-0 group-hover:opacity-100",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed line-clamp-3 font-body", children: idea.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Copy saved idea",
                      "data-ocid": `brainstorm.saved_copy_button.${i + 1}`,
                      onClick: () => handleCopy(idea.text),
                      className: "mt-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-smooth",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
                        "Copy"
                      ]
                    }
                  )
                ]
              },
              idea.id
            )) }) })
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-muted/40 py-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary hover:underline",
          children: "caffeine.ai"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes spin { to { transform: rotate(360deg); } }
      ` })
  ] });
}
export {
  Brainstorm as default
};
