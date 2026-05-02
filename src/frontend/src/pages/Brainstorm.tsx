import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Flame,
  Heart,
  Sparkles,
  Star,
  Trash2,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Variation {
  label: string;
  tag:
    | "Urgency"
    | "Benefit-Led"
    | "Emotional Hook"
    | "Social Proof"
    | "Bold Statement";
  text: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface SavedIdea {
  id: string;
  tag: string;
  text: string;
  savedAt: number;
}

// ─── AI Transformation Logic ──────────────────────────────────────────────────
function generateVariations(raw: string): Variation[] {
  const cleaned = raw.trim().replace(/\s+/g, " ");
  const lower = cleaned.toLowerCase();
  const words = cleaned.split(" ").filter(Boolean);
  const core =
    words.length <= 5
      ? cleaned
      : words.slice(-Math.ceil(words.length / 2)).join(" ");
  const coreShort = words.slice(0, 4).join(" ");

  const urgencyBase = core.charAt(0).toUpperCase() + core.slice(1);
  const urgencyVerb =
    lower.includes("build") || lower.includes("creat")
      ? "Launch"
      : lower.includes("learn")
        ? "Master"
        : "Start";
  const urgencyText = `Right now: ${urgencyVerb} ${urgencyBase.replace(/^(I want|I need|I have|A|An|The)\s+/i, "")}. Every second you wait, someone else ships it first.`;

  const outcomes = [
    "your revenue",
    "your reach",
    "your creative output",
    "your workflow",
    "your impact",
  ];
  const outcome = outcomes[Math.floor(words.length % outcomes.length)];
  const benefitText = `Finally, a way to 10× ${outcome} — ${core.charAt(0).toLowerCase() + core.slice(1)}, without the frustration or the waiting.`;

  const hookText = `This changes everything: ${core.charAt(0).toUpperCase() + core.slice(1)} is no longer a dream you chase — it's the thing you wake up and build today.`;

  const niche =
    lower.includes("fit") || lower.includes("health")
      ? "fitness creators"
      : lower.includes("edu") || lower.includes("learn")
        ? "educators"
        : lower.includes("busi")
          ? "entrepreneurs"
          : "creators";
  const socialText = `10,000+ ${niche} already use this to ${core.charAt(0).toLowerCase() + core.slice(1)} — and they're not looking back.`;

  const boldWords = words
    .filter(
      (w) =>
        w.length > 3 &&
        ![
          "that",
          "this",
          "with",
          "from",
          "have",
          "your",
          "will",
          "just",
          "want",
          "need",
        ].includes(w.toLowerCase()),
    )
    .slice(0, 3)
    .map((w) => w.toUpperCase());
  const boldText =
    boldWords.length >= 2
      ? `${boldWords.join(". ")}.`
      : `${coreShort.toUpperCase()} — OR STAY AVERAGE.`;

  return [
    {
      label: "Urgency",
      tag: "Urgency",
      text: urgencyText,
      icon: <Flame className="h-4 w-4" />,
      color: "oklch(var(--destructive))",
      bgColor: "rgba(239,68,68,0.12)",
      borderColor: "rgba(239,68,68,0.4)",
    },
    {
      label: "Benefit-Led",
      tag: "Benefit-Led",
      text: benefitText,
      icon: <TrendingUp className="h-4 w-4" />,
      color: "oklch(var(--primary))",
      bgColor: "rgba(99,102,241,0.12)",
      borderColor: "rgba(99,102,241,0.4)",
    },
    {
      label: "Emotional Hook",
      tag: "Emotional Hook",
      text: hookText,
      icon: <Heart className="h-4 w-4" />,
      color: "oklch(var(--secondary))",
      bgColor: "rgba(168,85,247,0.12)",
      borderColor: "rgba(168,85,247,0.4)",
    },
    {
      label: "Social Proof",
      tag: "Social Proof",
      text: socialText,
      icon: <Users className="h-4 w-4" />,
      color: "oklch(var(--accent))",
      bgColor: "rgba(34,211,238,0.12)",
      borderColor: "rgba(34,211,238,0.4)",
    },
    {
      label: "Bold Statement",
      tag: "Bold Statement",
      text: boldText,
      icon: <Zap className="h-4 w-4" />,
      color: "oklch(var(--ai-marketing))",
      bgColor: "rgba(234,179,8,0.12)",
      borderColor: "rgba(234,179,8,0.4)",
    },
  ];
}

// ─── Neural Activity Indicator ────────────────────────────────────────────────
function NeuralActivityIndicator({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="flex items-center gap-2"
      data-ocid="brainstorm.neural_indicator"
    >
      <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-widest">
        AI Nodes
      </span>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: isActive
                ? "oklch(var(--primary))"
                : "oklch(var(--muted-foreground) / 0.3)",
              boxShadow: isActive
                ? "0 0 8px oklch(var(--primary) / 0.7)"
                : "none",
            }}
            animate={
              isActive
                ? {
                    opacity: [0.3, 1, 0.3],
                    scale: [0.85, 1.25, 0.85],
                  }
                : { opacity: 0.3, scale: 1 }
            }
            transition={
              isActive
                ? {
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
          />
        ))}
      </div>
    </div>
  );
}

// ─── Visual Preview Cards ─────────────────────────────────────────────────────
function HeroBannerPreview({ copy }: { copy: string }) {
  const words = copy.split(" ");
  const title = words
    .slice(0, Math.min(7, Math.ceil(words.length / 2)))
    .join(" ");
  const subtitle =
    words.slice(Math.min(7, Math.ceil(words.length / 2))).join(" ") ||
    "Your next move starts right here.";

  return (
    <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm">
      <div
        className="relative p-6 flex flex-col gap-3 min-h-[140px] justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.04 262 / 0.9) 0%, oklch(0.96 0.03 280 / 0.85) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, oklch(var(--primary)), transparent 60%)",
          }}
        />
        <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary relative z-10">
          Hero Banner
        </p>
        <h3 className="text-foreground font-display font-bold text-lg leading-tight relative z-10 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed relative z-10 line-clamp-2">
          {subtitle}
        </p>
        <button
          type="button"
          className="relative z-10 self-start mt-1 px-4 py-1.5 rounded-lg text-xs font-semibold font-body text-primary-foreground"
          style={{ background: "oklch(var(--primary))" }}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}

function FeatureCardPreview({ copy }: { copy: string }) {
  const words = copy.split(" ");
  const title = words
    .slice(0, Math.min(5, Math.ceil(words.length / 2)))
    .join(" ");
  const desc =
    words.slice(Math.min(5, Math.ceil(words.length / 2))).join(" ") ||
    "Designed to make you unstoppable.";

  return (
    <div className="rounded-xl border border-border/40 p-5 bg-card shadow-sm">
      <p className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Feature Card
      </p>
      <div className="flex items-start gap-3">
        <div
          className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: "oklch(var(--primary) / 0.12)",
            border: "1px solid oklch(var(--primary) / 0.25)",
          }}
        >
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="min-w-0">
          <h4 className="font-display font-semibold text-sm text-foreground leading-snug line-clamp-2 mb-1">
            {title}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCardPreview({ copy }: { copy: string }) {
  const words = copy.split(" ");
  const number = words.find((w) => /\d/.test(w)) ?? "10x";
  const label =
    words
      .filter((w) => !/\d/.test(w))
      .slice(0, 5)
      .join(" ") || copy;

  return (
    <div className="rounded-xl border border-border/40 p-5 bg-card shadow-sm">
      <p className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Stat Card
      </p>
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: "oklch(var(--accent) / 0.12)",
            border: "1px solid oklch(var(--accent) / 0.3)",
          }}
        >
          <BarChart3
            className="h-4 w-4"
            style={{ color: "oklch(var(--accent))" }}
          />
        </div>
        <div className="min-w-0">
          <p className="font-display font-black text-2xl text-foreground leading-none">
            {number}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 3D Variation Card ────────────────────────────────────────────────────────
function VariationCard({
  variation,
  index,
  isSelected,
  isSaved,
  onSelect,
  onCopy,
  onSave,
}: {
  variation: Variation;
  index: number;
  isSelected: boolean;
  isSaved: boolean;
  onSelect: () => void;
  onCopy: (text: string) => void;
  onSave: (variation: Variation) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    onCopy(variation.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      data-ocid={`brainstorm.variation.item.${index + 1}`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
        transform: isHovered
          ? "rotateY(8deg) rotateX(-3deg) translateY(-4px)"
          : "rotateY(0deg) rotateX(0deg) translateY(0px)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={cn(
        "group relative rounded-xl border p-4 cursor-pointer",
        isSelected
          ? "border-primary/50 shadow-[0_0_20px_oklch(var(--primary)/0.22)]"
          : "border-border/50 hover:border-primary/40",
        "bg-card",
      )}
    >
      {/* Holographic gradient border overlay on hover */}
      {isHovered && (
        <span
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--primary) / 0.18), oklch(var(--secondary) / 0.12), oklch(var(--accent) / 0.15))",
            border: "1px solid transparent",
            backgroundClip: "padding-box",
          }}
        />
      )}

      {/* Glow pulse border on hover */}
      {isHovered && (
        <span
          className="absolute inset-[-1px] rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${variation.color}, oklch(var(--secondary)), oklch(var(--accent)))`,
            opacity: 0.5,
            filter: "blur(2px)",
            borderRadius: "inherit",
            zIndex: -1,
          }}
        />
      )}

      {isSelected && (
        <span
          className="absolute inset-0 rounded-xl opacity-5 pointer-events-none"
          style={{ background: "oklch(var(--primary))" }}
        />
      )}

      {/* Header row */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="flex items-center justify-center h-6 w-6 rounded-md shrink-0"
            style={{ background: variation.bgColor, color: variation.color }}
          >
            {variation.icon}
          </span>
          <Badge
            variant="outline"
            className="text-xs font-semibold font-display shrink-0"
            style={{
              borderColor: variation.borderColor,
              color: variation.color,
            }}
          >
            {variation.tag}
          </Badge>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            aria-label={isSaved ? "Remove from favorites" : "Save to favorites"}
            data-ocid={`brainstorm.save_button.${index + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              onSave(variation);
            }}
            className={cn(
              "h-7 w-7 rounded-md flex items-center justify-center transition-smooth",
              isSaved
                ? "text-amber-500"
                : "text-muted-foreground hover:text-amber-400",
            )}
          >
            <Star className={cn("h-3.5 w-3.5", isSaved && "fill-current")} />
          </button>

          <button
            type="button"
            aria-label="Copy variation"
            data-ocid={`brainstorm.copy_button.${index + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="h-7 px-2 rounded-md flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-600" />
                <span className="text-green-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Copy text */}
      <p className="text-sm leading-relaxed text-foreground font-body relative z-10">
        {variation.text}
      </p>

      {isSelected && (
        <p className="mt-2 text-xs text-primary font-medium flex items-center gap-1 relative z-10">
          <Check className="h-3 w-3" /> Selected for preview
        </p>
      )}
    </motion.div>
  );
}

// ─── Loading Shimmer ──────────────────────────────────────────────────────────
function LoadingShimmer() {
  return (
    <div className="flex flex-col gap-3" data-ocid="brainstorm.loading_state">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-xl border border-border/40 p-4 bg-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-md bg-muted animate-pulse" />
            <div className="h-5 w-24 rounded-full bg-muted animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-muted animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Processing Ring Animation ────────────────────────────────────────────────
function ProcessingRing() {
  return (
    <span className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
      <span
        className="absolute inset-[-2px] rounded-xl"
        style={{
          background:
            "conic-gradient(oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)), oklch(var(--primary)))",
          animation: "spin 1.2s linear infinite",
          opacity: 0.6,
        }}
      />
      <span className="absolute inset-[1px] rounded-[10px] bg-card" />
    </span>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const LOCALSTORAGE_KEY = "appverse_brainstorm_favorites";

export default function Brainstorm() {
  const [rawIdea, setRawIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [variationKey, setVariationKey] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEY) ?? "[]",
      ) as SavedIdea[];
    } catch {
      return [];
    }
  });
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const handleRefine = useCallback(() => {
    if (!rawIdea.trim()) {
      toast.error("Drop your raw idea first — even a single word works.");
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

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!", { duration: 2500 });
      })
      .catch(() => {
        toast.error("Couldn't copy — try selecting the text manually.");
      });
  }, []);

  const handleSave = useCallback((variation: Variation) => {
    setSavedIdeas((prev) => {
      const exists = prev.find((s) => s.text === variation.text);
      if (exists) {
        toast("Removed from Saved Ideas", { icon: "🗑️" });
        return prev.filter((s) => s.text !== variation.text);
      }
      toast.success("Saved to your ideas!", { icon: "⭐" });
      const newIdea: SavedIdea = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        tag: variation.tag,
        text: variation.text,
        savedAt: Date.now(),
      };
      setFavoritesOpen(true);
      return [newIdea, ...prev];
    });
  }, []);

  const handleRemoveSaved = useCallback((id: string) => {
    setSavedIdeas((prev) => prev.filter((s) => s.id !== id));
    toast("Removed from Saved Ideas", { icon: "🗑️" });
  }, []);

  const isSaved = (text: string) => savedIdeas.some((s) => s.text === text);
  const selectedVariation = variations[selectedIndex] ?? null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page hero */}
      <section
        className="border-b border-border/40 bg-card"
        data-ocid="brainstorm.page"
      >
        <div className="container mx-auto px-4 lg:px-6 py-10 md:py-14">
          <div className="max-w-3xl">
            {/* Badge row */}
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display"
                style={{
                  background: "oklch(var(--primary) / 0.1)",
                  border: "1px solid oklch(var(--primary) / 0.3)",
                  color: "oklch(var(--primary))",
                }}
              >
                <Sparkles className="h-3 w-3" />
                AI-Powered
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display"
                style={{
                  background: "oklch(var(--accent) / 0.1)",
                  border: "1px solid oklch(var(--accent) / 0.3)",
                  color: "oklch(var(--accent))",
                }}
              >
                <Zap className="h-3 w-3" />
                Instant Results
              </span>

              {/* Multi-AI Brain badge */}
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 8px oklch(var(--secondary) / 0.3)",
                    "0 0 20px oklch(var(--secondary) / 0.7)",
                    "0 0 8px oklch(var(--secondary) / 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-display"
                style={{
                  background: "oklch(var(--secondary) / 0.12)",
                  border: "1px solid oklch(var(--secondary) / 0.5)",
                  color: "oklch(var(--secondary))",
                }}
                data-ocid="brainstorm.multi_ai_badge"
              >
                <Brain className="h-3 w-3" />
                Multi-AI Brain
              </motion.span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground leading-tight mb-2">
              Brainstorm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Canvas
              </span>
            </h1>

            {/* Holographic tagline */}
            <p
              className="holographic-text text-sm font-display font-semibold mb-2"
              style={{ backgroundSize: "300% 300%" }}
            >
              Multi-AI brain. One smart result 🧠
            </p>

            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Turn messy thoughts into copy that converts.{" "}
              <span className="font-semibold text-foreground">Instantly.</span>
            </p>

            {/* Neural activity indicator */}
            <div className="mt-4">
              <NeuralActivityIndicator isActive={isProcessing} />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ─── LEFT: Input ───────────────────────────────────────────── */}
          <div
            className="flex flex-col gap-6"
            data-ocid="brainstorm.input_panel"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="raw-idea"
                className="text-sm font-semibold font-display text-foreground"
              >
                Dump Your Raw Idea Here
              </label>
              <p className="text-xs text-muted-foreground">
                A half-sentence, a messy thought, even a single word — AI will
                make it brilliant.
              </p>
            </div>

            <div className="relative">
              <Textarea
                id="raw-idea"
                data-ocid="brainstorm.idea_input"
                value={rawIdea}
                onChange={(e) => setRawIdea(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                    handleRefine();
                }}
                placeholder="Write anything — half a sentence, a messy thought, a name. AI will make it brilliant."
                className="min-h-[160px] resize-none text-base leading-relaxed font-body border-border/60 focus:border-primary/50 focus:ring-primary/20 bg-card placeholder:text-muted-foreground/60 rounded-xl"
                maxLength={500}
              />
              <span className="absolute bottom-3 right-3 text-xs text-muted-foreground/60 tabular-nums select-none pointer-events-none">
                {rawIdea.length}/500
              </span>
            </div>

            {/* Refine button */}
            <div className="relative">
              {isProcessing && <ProcessingRing />}
              <Button
                data-ocid="brainstorm.refine_button"
                onClick={handleRefine}
                disabled={isLoading || !rawIdea.trim()}
                className="relative w-full h-12 text-base font-display font-bold rounded-xl transition-smooth"
                style={
                  isLoading || !rawIdea.trim()
                    ? {}
                    : {
                        background:
                          "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                        boxShadow: "0 0 24px oklch(var(--primary) / 0.3)",
                        color: "oklch(var(--primary-foreground))",
                        border: "none",
                      }
                }
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full"
                      style={{ animation: "spin 0.8s linear infinite" }}
                    />
                    AI is thinking…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Refine with AI
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>

            {/* Tip row */}
            <p className="text-xs text-muted-foreground text-center">
              ⌘ + Enter to refine · Ideas stay local · No account needed
            </p>

            {/* Visual preview */}
            <AnimatePresence>
              {selectedVariation && (
                <motion.div
                  key="preview-section"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4"
                  data-ocid="brainstorm.preview_section"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border/50" />
                    <span className="text-xs font-semibold font-display text-muted-foreground uppercase tracking-wider px-2">
                      See it in context
                    </span>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>
                  <HeroBannerPreview copy={selectedVariation.text} />
                  <div className="grid grid-cols-2 gap-3">
                    <FeatureCardPreview copy={selectedVariation.text} />
                    <StatCardPreview copy={selectedVariation.text} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── RIGHT: AI Refinement Output ───────────────────────────── */}
          <div
            className="flex flex-col gap-4"
            data-ocid="brainstorm.output_panel"
          >
            {/* Empty state */}
            {!isLoading && variations.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 px-8 rounded-2xl border border-dashed border-border/60 bg-muted/20 text-center gap-4"
                data-ocid="brainstorm.output_empty_state"
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "oklch(var(--primary) / 0.1)",
                    border: "1px solid oklch(var(--primary) / 0.2)",
                  }}
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground mb-1">
                    Your 5 AI variations will appear here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Type any rough idea on the left and hit{" "}
                    <span className="font-semibold text-primary">
                      Refine with AI
                    </span>
                    .
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {[
                    "Urgency",
                    "Benefit-Led",
                    "Emotional Hook",
                    "Social Proof",
                    "Bold Statement",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium font-display"
                      style={{
                        background: "oklch(var(--muted))",
                        color: "oklch(var(--muted-foreground))",
                        border: "1px solid oklch(var(--border) / 0.6)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Loading shimmer */}
            {isLoading && <LoadingShimmer />}

            {/* Variations with morphing AnimatePresence */}
            <AnimatePresence mode="wait">
              {!isLoading && variations.length > 0 && (
                <motion.div
                  key={variationKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold font-display text-foreground">
                      5 AI Variations
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hover to rotate · Click to preview
                    </p>
                  </div>
                  {variations.map((v, i) => (
                    <VariationCard
                      key={v.tag}
                      variation={v}
                      index={i}
                      isSelected={selectedIndex === i}
                      isSaved={isSaved(v.text)}
                      onSelect={() => setSelectedIndex(i)}
                      onCopy={handleCopy}
                      onSave={handleSave}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Saved Ideas panel ────────────────────────────────────────── */}
        <div className="mt-12" data-ocid="brainstorm.favorites_section">
          <button
            type="button"
            data-ocid="brainstorm.favorites_toggle"
            onClick={() => setFavoritesOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-border/50 bg-card hover:bg-muted/30 transition-smooth group"
            aria-expanded={favoritesOpen}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-7 w-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "oklch(var(--accent) / 0.12)",
                  border: "1px solid oklch(var(--accent) / 0.3)",
                }}
              >
                <Star
                  className="h-3.5 w-3.5"
                  style={{ color: "oklch(var(--accent))" }}
                />
              </div>
              <span className="font-display font-bold text-foreground text-sm">
                Saved Ideas
              </span>
              {savedIdeas.length > 0 && (
                <span
                  className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-xs font-bold font-display"
                  style={{
                    background: "oklch(var(--accent) / 0.15)",
                    color: "oklch(var(--accent))",
                    border: "1px solid oklch(var(--accent) / 0.3)",
                  }}
                >
                  {savedIdeas.length}
                </span>
              )}
            </div>
            {favoritesOpen ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </button>

          <AnimatePresence>
            {favoritesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-3">
                  {savedIdeas.length === 0 ? (
                    <div
                      className="flex flex-col items-center justify-center py-10 rounded-xl border border-dashed border-border/50 text-center gap-2"
                      data-ocid="brainstorm.favorites_empty_state"
                    >
                      <Star className="h-6 w-6 text-muted-foreground/40" />
                      <p className="text-sm text-muted-foreground">
                        Star any variation to save it here.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {savedIdeas.map((idea, i) => (
                        <motion.div
                          key={idea.id}
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: i * 0.04 }}
                          data-ocid={`brainstorm.saved_idea.item.${i + 1}`}
                          className="group relative rounded-xl border border-border/50 p-4 bg-card hover:border-primary/30 transition-smooth"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="text-xs font-display shrink-0"
                            >
                              {idea.tag}
                            </Badge>
                            <button
                              type="button"
                              aria-label="Remove from saved"
                              data-ocid={`brainstorm.saved_delete_button.${i + 1}`}
                              onClick={() => handleRemoveSaved(idea.id)}
                              className="h-6 w-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-destructive transition-smooth opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed line-clamp-3 font-body">
                            {idea.text}
                          </p>
                          <button
                            type="button"
                            aria-label="Copy saved idea"
                            data-ocid={`brainstorm.saved_copy_button.${i + 1}`}
                            onClick={() => handleCopy(idea.text)}
                            className="mt-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-smooth"
                          >
                            <Copy className="h-3 w-3" />
                            Copy
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/40 py-6 text-center">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
