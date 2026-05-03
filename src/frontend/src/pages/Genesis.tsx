import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  Globe,
  Lock,
  Monitor,
  Shuffle,
  Smartphone,
  Sparkles,
  Star,
  Tablet,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Scroll-reveal wrapper ───────────────────────────────────────────────────
function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial =
    direction === "up"
      ? { opacity: 0, y: 48 }
      : direction === "left"
        ? { opacity: 0, x: -48 }
        : direction === "right"
          ? { opacity: 0, x: 48 }
          : { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Counting number ──────────────────────────────────────────────────────────
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Section title ────────────────────────────────────────────────────────────
function PillarTitle({
  num,
  label,
  color,
}: {
  num: string;
  label: string;
  color: string;
}) {
  return (
    <div className="mb-8">
      <span
        className="text-xs font-mono font-bold tracking-widest uppercase mb-2 block"
        style={{ color }}
      >
        {num}
      </span>
      <h2
        className="text-3xl md:text-4xl font-display font-black text-foreground"
        style={{ textShadow: `0 0 40px ${color}55` }}
      >
        {label}
      </h2>
      <div
        className="mt-3 h-0.5 w-24 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  );
}

const PILLAR_DOTS = [
  { id: 1, color: "var(--genesis-cyan)" },
  { id: 2, color: "var(--genesis-purple)" },
  { id: 3, color: "var(--genesis-gold)" },
  { id: 4, color: "var(--genesis-teal)" },
  { id: 5, color: "var(--genesis-magenta)" },
  { id: 6, color: "var(--genesis-orange)" },
  { id: 7, color: "var(--genesis-rose)" },
  { id: 8, color: "var(--genesis-cyan)" },
];

const TAGLINES = [
  "Multi-AI brain. One smart result 🧠",
  "Built by AI. Updated by the world 🌐",
  "Tap luck. Build magic ⚡",
];

// ─── PILLAR 1 ─────────────────────────────────────────────────────────────────
function Pillar1Architecture() {
  const nodes = [
    {
      icon: Code2,
      label: "Frontend",
      sub: "React + TS",
      color: "var(--genesis-cyan)",
    },
    {
      icon: Database,
      label: "Backend",
      sub: "Motoko",
      color: "var(--genesis-purple)",
    },
    {
      icon: Globe,
      label: "IC State",
      sub: "Canister",
      color: "var(--genesis-teal)",
    },
    {
      icon: Brain,
      label: "AI/APIs",
      sub: "HTTP Outcalls",
      color: "var(--genesis-magenta)",
    },
  ];
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 800);
    return () => clearInterval(t);
  }, []);
  const stats = [
    { label: "Pages", value: 13 },
    { label: "Extensions", value: 8 },
    { label: "Canister", value: 1 },
    { label: "Scaling", value: 0, suffix: "∞" },
  ];
  return (
    <section id="pillar-1" className="py-20 px-4">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-1 in-view">
        <Reveal>
          <PillarTitle
            num="01"
            label="System Architecture"
            color="oklch(var(--genesis-cyan))"
          />
        </Reveal>
        {/* Architecture flow */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          {nodes.map((n, i) => (
            <div key={n.label} className="flex items-center gap-3">
              <Reveal delay={i * 0.12}>
                <div
                  className="glass-glow rounded-2xl p-5 text-center w-32"
                  style={{ borderColor: `${n.color}88` }}
                >
                  <n.icon
                    className="h-7 w-7 mx-auto mb-2"
                    style={{ color: n.color }}
                  />
                  <div className="text-sm font-bold font-display text-foreground">
                    {n.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {n.sub}
                  </div>
                </div>
              </Reveal>
              {i < nodes.length - 1 && (
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: ((tick + i) * 0.3) % 1.2,
                  }}
                  className="hidden sm:flex items-center gap-1"
                >
                  <div
                    className="h-0.5 w-8"
                    style={{
                      background: `linear-gradient(90deg, ${nodes[i].color}, ${nodes[i + 1].color})`,
                    }}
                  />
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="glass rounded-xl p-4 text-center">
                <div
                  className="text-2xl font-display font-black"
                  style={{ color: "oklch(var(--genesis-cyan))" }}
                >
                  {s.suffix ? s.suffix : <CountUp target={s.value} />}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-body">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Live canister */}
        <Reveal delay={0.3}>
          <div className="mt-6 flex items-center gap-3 glass rounded-xl px-5 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm font-body text-muted-foreground">
              Live canister state
            </span>
            <span
              className="ml-auto text-xs font-mono"
              style={{ color: "oklch(var(--genesis-cyan))" }}
            >
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PILLAR 2 ─────────────────────────────────────────────────────────────────
const AI_OUTPUTS = [
  {
    ai: "AI Fitness Coach with wearable sync",
    trend: "Wearables are trending globally 📈",
    lucky: "Dream Journal App",
  },
  {
    ai: "Real-time Crypto Portfolio Tracker",
    trend: "DeFi tools exploding in Asia 🌏",
    lucky: "Space Explorer Game",
  },
  {
    ai: "Voice-first Meditation App",
    trend: "Mental health apps up 340% 🧘",
    lucky: "Social Recipe Network",
  },
];

function Pillar2MultiAI() {
  const sources = [
    {
      label: "OpenAI",
      sub: "GPT-4o",
      icon: Brain,
      color: "var(--genesis-purple)",
    },
    {
      label: "Trend API",
      sub: "Live global",
      icon: Globe,
      color: "var(--genesis-teal)",
    },
    {
      label: "Lucky Engine",
      sub: "Smart random",
      icon: Shuffle,
      color: "var(--genesis-gold)",
    },
  ];
  const [outputIdx, setOutputIdx] = useState(0);
  const [pulsing, setPulsing] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setPulsing(true);
      setTimeout(() => {
        setOutputIdx((i) => (i + 1) % AI_OUTPUTS.length);
        setPulsing(false);
      }, 400);
    }, 4000);
    return () => clearInterval(t);
  }, []);
  const out = AI_OUTPUTS[outputIdx];
  return (
    <section id="pillar-2" className="py-20 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-2 in-view">
        <Reveal>
          <PillarTitle
            num="02"
            label="Multi-AI Intelligence Engine"
            color="oklch(var(--genesis-purple))"
          />
        </Reveal>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Source cards */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {sources.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.12} direction="left">
                <motion.div
                  animate={pulsing ? { scale: [1, 1.04, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  className="card-3d-rotate glass-glow rounded-xl p-4 flex items-center gap-4 min-w-[200px]"
                  style={{ borderColor: `${s.color}66` }}
                >
                  <s.icon
                    className="h-8 w-8 shrink-0"
                    style={{ color: s.color }}
                  />
                  <div>
                    <div className="font-bold font-display text-foreground text-sm">
                      {s.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          {/* Arrow */}
          <div className="hidden lg:flex flex-col items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.25,
                }}
                className="h-2 w-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--genesis-purple)), oklch(var(--genesis-gold)))",
                }}
              />
            ))}
            <ChevronRight className="h-6 w-6 text-muted-foreground rotate-0" />
          </div>
          {/* Fusion output */}
          <Reveal direction="right" className="flex-1 w-full">
            <motion.div
              animate={
                pulsing
                  ? {
                      boxShadow: [
                        "0 0 24px oklch(var(--genesis-purple)/0.4)",
                        "0 0 56px oklch(var(--genesis-purple)/0.7)",
                        "0 0 24px oklch(var(--genesis-purple)/0.4)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.6 }}
              className="glass-dream-glow rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  className="h-5 w-5"
                  style={{ color: "oklch(var(--genesis-gold))" }}
                />
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: "oklch(var(--genesis-gold))" }}
                >
                  Fusion Core Output
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={outputIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-sm font-body">
                    <span className="text-muted-foreground">🧠 AI:</span>{" "}
                    <span className="text-foreground font-medium">
                      {out.ai}
                    </span>
                  </div>
                  <div className="text-sm font-body">
                    <span className="text-muted-foreground">🌐 Trend:</span>{" "}
                    <span className="text-foreground font-medium">
                      {out.trend}
                    </span>
                  </div>
                  <div className="text-sm font-body">
                    <span className="text-muted-foreground">🎲 Lucky:</span>{" "}
                    <span
                      style={{ color: "oklch(var(--genesis-gold))" }}
                      className="font-bold"
                    >
                      {out.lucky}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <p
                className="mt-4 text-xs text-center font-mono"
                style={{ color: "oklch(var(--genesis-purple))" }}
              >
                "Multi-AI brain. One smart result 🧠"
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── PILLAR 3 ─────────────────────────────────────────────────────────────────
const PALETTE = [
  { name: "Primary", val: "oklch(0.72 0.22 262)", hex: "var(--primary)" },
  { name: "Accent", val: "oklch(0.75 0.28 50)", hex: "var(--accent)" },
  {
    name: "Genesis Cyan",
    val: "oklch(0.72 0.36 190)",
    hex: "var(--genesis-cyan)",
  },
  {
    name: "Genesis Purple",
    val: "oklch(0.78 0.28 265)",
    hex: "var(--genesis-purple)",
  },
  {
    name: "Genesis Gold",
    val: "oklch(0.85 0.32 68)",
    hex: "var(--genesis-gold)",
  },
  {
    name: "Genesis Teal",
    val: "oklch(0.68 0.34 205)",
    hex: "var(--genesis-teal)",
  },
  {
    name: "Genesis Magenta",
    val: "oklch(0.70 0.32 335)",
    hex: "var(--genesis-magenta)",
  },
  {
    name: "Genesis Orange",
    val: "oklch(0.78 0.30 55)",
    hex: "var(--genesis-orange)",
  },
];

const GLASS_VARIANTS = [
  { cls: "glass", label: "glass" },
  { cls: "glass-glow", label: "glass-glow" },
  { cls: "glass-dream", label: "glass-dream" },
  { cls: "glass-dream-glow", label: "glass-dream-glow" },
];

const ANIM_DEMOS = [
  { label: "Glow Pulse", cls: "glow-pulse", preview: "●" },
  { label: "Hologram Shift", cls: "holographic-text", preview: "Genesis" },
  { label: "Scan Sweep", cls: "", scanSweep: true, preview: "" },
  { label: "Legendary Reveal", cls: "legendary-reveal", preview: "★" },
];

function Pillar3DesignSystem() {
  return (
    <section id="pillar-3" className="py-20 px-4">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-3 in-view">
        <Reveal>
          <PillarTitle
            num="03"
            label="Real-Time Design System"
            color="oklch(var(--genesis-gold))"
          />
        </Reveal>
        {/* Color palette */}
        <Reveal>
          <h3 className="text-sm font-bold font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Color Palette
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-8">
            {PALETTE.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1.5">
                <div
                  className="h-10 w-10 rounded-xl border border-white/10 shadow-lg"
                  style={{
                    background: `oklch(${p.val.replace("oklch(", "").replace(")", "")})`,
                  }}
                />
                <span className="text-[9px] text-center text-muted-foreground font-mono leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        {/* Glass variants */}
        <Reveal delay={0.1}>
          <h3 className="text-sm font-bold font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Glass Variants
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {GLASS_VARIANTS.map((g) => (
              <div
                key={g.label}
                className={cn(g.cls, "rounded-xl p-4 text-center")}
              >
                <div className="text-2xl mb-2">◈</div>
                <code
                  className="text-xs font-mono"
                  style={{ color: "oklch(var(--genesis-gold))" }}
                >
                  .{g.label}
                </code>
              </div>
            ))}
          </div>
        </Reveal>
        {/* Animation demos */}
        <Reveal delay={0.2}>
          <h3 className="text-sm font-bold font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Animation System
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ANIM_DEMOS.map((a) => (
              <div
                key={a.label}
                className="glass rounded-xl p-4 text-center overflow-hidden relative"
              >
                {a.scanSweep ? (
                  <div className="relative h-8 mb-2 overflow-hidden rounded">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[scan-sweep_2s_linear_infinite]" />
                    <span className="relative z-10 text-sm text-muted-foreground">
                      ▬▬▬
                    </span>
                  </div>
                ) : (
                  <div className={cn("text-2xl mb-2", a.cls)}>{a.preview}</div>
                )}
                <code className="text-xs font-mono text-muted-foreground">
                  {a.label}
                </code>
              </div>
            ))}
          </div>
        </Reveal>
        {/* Font showcase */}
        <Reveal delay={0.3}>
          <div className="mt-6 glass rounded-xl p-5">
            <p className="font-display text-2xl font-black text-foreground">
              Bricolage Grotesque — Display
            </p>
            <p className="font-body text-base text-muted-foreground mt-1">
              DM Sans — Body copy that reads beautifully at every size
            </p>
            <p
              className="font-mono text-sm mt-1"
              style={{ color: "oklch(var(--genesis-gold))" }}
            >
              Geist Mono — code + data
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PILLAR 4 ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Lock,
    front: "Internet Identity",
    back: "Blockchain-backed auth, no passwords, zero server storage",
    color: "var(--genesis-teal)",
  },
  {
    icon: Star,
    front: "Search & Filters",
    back: "Real-time semantic search across ideas, creators, and templates",
    color: "var(--genesis-cyan)",
  },
  {
    icon: Zap,
    front: "XP Gamification",
    back: "Dreamer → Builder → Creator → Legend, with XP, streaks, and badges",
    color: "var(--genesis-gold)",
  },
  {
    icon: Shuffle,
    front: "Lucky Engine",
    back: "trends × user behavior × global data = unexpected but powerful ideas",
    color: "var(--genesis-purple)",
  },
  {
    icon: Smartphone,
    front: "Device-Aware AI",
    back: "Output optimized for Mobile, Tablet, or Desktop automatically",
    color: "var(--genesis-magenta)",
  },
  {
    icon: CreditCard,
    front: "Payments",
    back: "Freemium model: free tier + premium upgrades via secure gateway",
    color: "var(--genesis-orange)",
  },
];

function Pillar4Features() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <section id="pillar-4" className="py-20 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-4 in-view">
        <Reveal>
          <PillarTitle
            num="04"
            label="Advanced Features"
            color="oklch(var(--genesis-teal))"
          />
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.front} delay={i * 0.08}>
              <button
                type="button"
                data-ocid={`genesis.feature_card.${i + 1}`}
                className={cn(
                  "genesis-flip-card w-full",
                  flipped[i] && "flipped",
                )}
                style={{ height: 200 }}
                onClick={() => setFlipped((p) => ({ ...p, [i]: !p[i] }))}
                aria-label={`${f.front} - click to flip`}
              >
                <div className="genesis-flip-card-inner h-full">
                  {/* Front */}
                  <div
                    className="genesis-flip-face glass-glow rounded-2xl flex-col gap-3"
                    style={{ borderColor: `${f.color}66` }}
                  >
                    <f.icon className="h-10 w-10" style={{ color: f.color }} />
                    <span className="font-display font-bold text-sm text-foreground text-center px-4">
                      {f.front}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      tap to reveal
                    </span>
                  </div>
                  {/* Back */}
                  <div
                    className="genesis-flip-face back glass rounded-2xl flex-col gap-3 p-5"
                    style={{
                      borderColor: `${f.color}88`,
                      background: `${f.color}15`,
                    }}
                  >
                    <span
                      className="font-display font-bold text-sm text-center"
                      style={{ color: f.color }}
                    >
                      {f.front}
                    </span>
                    <p className="text-xs text-center font-body leading-relaxed text-foreground/90">
                      {f.back}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PILLAR 5 ─────────────────────────────────────────────────────────────────
const TRENDING = [
  { idea: "AI Medical Diagnosis", rarity: "Legendary", flag: "🇺🇸" },
  { idea: "Anime Creator Studio", rarity: "Rare", flag: "🇯🇵" },
  { idea: "Crypto Wallet UX", rarity: "Rare", flag: "🇮🇳" },
  { idea: "Urban Farming App", rarity: "Common", flag: "🇬🇧" },
  { idea: "Dream Journal AI", rarity: "Common", flag: "🇧🇷" },
];

const RARITY_STYLES: Record<
  string,
  { color: string; glow: string; badge: string }
> = {
  Legendary: {
    color: "oklch(var(--genesis-gold))",
    glow: "trending-glow-legendary",
    badge: "bg-amber-400/10 border border-amber-400/40 text-amber-400",
  },
  Rare: {
    color: "oklch(var(--genesis-purple))",
    glow: "trending-glow-rare",
    badge: "bg-purple-400/10 border border-purple-400/40 text-purple-400",
  },
  Common: {
    color: "oklch(var(--genesis-cyan))",
    glow: "trending-glow-common",
    badge: "bg-cyan-400/10 border border-cyan-400/40 text-cyan-400",
  },
};

function Pillar5AutoEvolving() {
  const [accepted, setAccepted] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="pillar-5" className="py-20 px-4">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-5 in-view">
        <Reveal>
          <PillarTitle
            num="05"
            label="Auto-Evolving System"
            color="oklch(var(--genesis-magenta))"
          />
        </Reveal>
        {/* Sync indicator */}
        <Reveal>
          <div className="flex items-center gap-3 glass rounded-xl px-5 py-3 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm font-body text-muted-foreground">
              Syncing with global trends
            </span>
            <span
              className="ml-auto text-xs font-mono"
              style={{ color: "oklch(var(--genesis-magenta))" }}
            >
              {time.toLocaleTimeString()}
            </span>
          </div>
        </Reveal>
        {/* Trending now */}
        <Reveal delay={0.1}>
          <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest mb-3">
            🔥 Trending Now
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {TRENDING.map((t, i) => {
              const s = RARITY_STYLES[t.rarity];
              return (
                <Reveal key={t.idea} delay={i * 0.07}>
                  <div
                    className={cn(
                      "glass rounded-xl px-4 py-3 flex items-center gap-3 min-w-[180px]",
                      s.glow,
                    )}
                  >
                    <span className="text-lg">{t.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-foreground truncate">
                        {t.idea}
                      </div>
                      <span
                        className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full",
                          s.badge,
                        )}
                      >
                        {t.rarity}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="remix-btn text-xs px-2 py-1 rounded-lg shrink-0"
                    >
                      Remix
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
        {/* AI Suggestion */}
        <Reveal delay={0.2}>
          <AnimatePresence>
            {!accepted && (
              <motion.div
                exit={{ opacity: 0, scale: 0.9, height: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-glow rounded-2xl p-5 flex items-center gap-4"
                style={{ borderColor: "oklch(var(--genesis-magenta)/0.6)" }}
              >
                <Sparkles
                  className="h-8 w-8 shrink-0"
                  style={{ color: "oklch(var(--genesis-magenta))" }}
                />
                <div className="flex-1">
                  <p className="text-sm font-body text-foreground">
                    <strong
                      className="font-display"
                      style={{ color: "oklch(var(--genesis-magenta))" }}
                    >
                      AI Suggestion:
                    </strong>{" "}
                    Your Fitness App could gain a Wearables feature — trending
                    now!
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    +340 XP if accepted
                  </p>
                </div>
                <Button
                  size="sm"
                  data-ocid="genesis.ai_suggestion.accept_button"
                  className="shrink-0"
                  style={{
                    background: "oklch(var(--genesis-magenta)/0.2)",
                    borderColor: "oklch(var(--genesis-magenta)/0.6)",
                    color: "oklch(var(--genesis-magenta))",
                  }}
                  onClick={() => setAccepted(true)}
                >
                  Accept
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-sm font-body text-foreground">
                Feature accepted! +340 XP earned ⚡
              </span>
            </motion.div>
          )}
        </Reveal>
        <Reveal delay={0.3}>
          <p
            className="text-center text-sm font-mono mt-6"
            style={{ color: "oklch(var(--genesis-magenta))" }}
          >
            "Built by AI. Updated by the world 🌐"
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PILLAR 6 ─────────────────────────────────────────────────────────────────
const DEVICE_CONFIGS: Record<
  string,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    w: string;
    h: string;
    preview: string;
  }
> = {
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    w: "w-36",
    h: "h-64",
    preview:
      "Compact, thumb-friendly UI\n• Quick actions\n• Card-first layout\n• Bottom nav",
  },
  tablet: {
    label: "Tablet",
    icon: Tablet,
    w: "w-48",
    h: "h-56",
    preview:
      "Hybrid layout\n• Sidebar + content\n• Touch + pointer\n• Grid display",
  },
  desktop: {
    label: "Desktop",
    icon: Monitor,
    w: "w-72",
    h: "h-44",
    preview:
      "Full power layout\n• Multi-column grid\n• Hover interactions\n• Data-dense tables",
  },
};

function Pillar6RealityPreview() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "mobile",
  );
  const [prompt, setPrompt] = useState("");
  const [transforming, setTransforming] = useState(false);
  const [output, setOutput] = useState("");

  function transform() {
    if (!prompt.trim()) return;
    setTransforming(true);
    setTimeout(() => {
      setOutput(
        `${DEVICE_CONFIGS[device].preview}\n\nIdea: ${prompt}\n\n"The moment you imagine it — it becomes reality ⚡"`,
      );
      setTransforming(false);
    }, 1600);
  }

  const d = DEVICE_CONFIGS[device];

  return (
    <section id="pillar-6" className="py-20 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-6 in-view">
        <Reveal>
          <PillarTitle
            num="06"
            label="Reality Preview"
            color="oklch(var(--genesis-orange))"
          />
        </Reveal>
        {/* Device selector */}
        <Reveal>
          <div className="genesis-device-selector mb-6">
            {Object.entries(DEVICE_CONFIGS).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                data-ocid={`genesis.device_selector.${key}`}
                onClick={() => {
                  setDevice(key as "mobile" | "tablet" | "desktop");
                  setOutput("");
                }}
                className={cn(
                  "genesis-device-btn flex items-center gap-2",
                  device === key && "active",
                )}
              >
                <cfg.icon className="h-4 w-4" />
                {cfg.label}
              </button>
            ))}
          </div>
        </Reveal>
        {/* Input + transform */}
        <Reveal delay={0.1}>
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              placeholder="Describe your app idea…"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && transform()}
              data-ocid="genesis.transform_input"
              className="flex-1 glass rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[oklch(var(--genesis-orange)/0.5)] border-0"
            />
            <Button
              type="button"
              onClick={transform}
              disabled={transforming}
              data-ocid="genesis.transform_button"
              className="shrink-0"
              style={{
                background: "oklch(var(--genesis-orange)/0.15)",
                borderColor: "oklch(var(--genesis-orange)/0.6)",
                color: "oklch(var(--genesis-orange))",
              }}
            >
              <Zap className="h-4 w-4 mr-1.5" />
              Transform
            </Button>
          </div>
        </Reveal>
        {/* Preview card */}
        <Reveal delay={0.2}>
          <div className="flex justify-center">
            <motion.div
              key={device}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative rounded-2xl glass-glow overflow-hidden",
                d.w,
                d.h,
              )}
              style={{
                borderColor: "oklch(var(--genesis-orange)/0.6)",
                boxShadow: transforming
                  ? "0 0 60px oklch(var(--genesis-orange)/0.4)"
                  : "0 0 24px oklch(var(--genesis-orange)/0.2)",
              }}
            >
              {transforming && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(var(--genesis-orange)/0.3), transparent)",
                  }}
                />
              )}
              <div className="p-4 h-full flex flex-col">
                <div
                  className="text-[10px] font-bold font-mono mb-2"
                  style={{ color: "oklch(var(--genesis-orange))" }}
                >
                  {d.label} Preview
                </div>
                {output ? (
                  <pre className="text-[10px] font-mono text-foreground/80 whitespace-pre-wrap leading-relaxed flex-1 overflow-hidden">
                    {output}
                  </pre>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center">
                      Enter an idea and click Transform ⚡
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PILLAR 7 ─────────────────────────────────────────────────────────────────
const PERSONALITIES = [
  {
    label: "Visionary",
    icon: "✨",
    color: "var(--twin-visionary)",
    trait: "Dreams beyond limits — sees the future before it exists",
  },
  {
    label: "Hacker",
    icon: "💻",
    color: "var(--twin-hacker)",
    trait: "Breaks systems to build better ones — speed is a feature",
  },
  {
    label: "Artist",
    icon: "🎨",
    color: "var(--twin-artist)",
    trait: "Beauty is functionality — every pixel tells a story",
  },
  {
    label: "Dreamer",
    icon: "🌙",
    color: "var(--twin-dreamer)",
    trait: "Reality is just the starting point — imagination is infinite",
  },
];

const TWIN_IDEAS = [
  { name: "AI Fitness Coach", rarity: "Legendary" },
  { name: "Dream Journal App", rarity: "Rare" },
  { name: "Space Explorer Game", rarity: "Common" },
];

function Pillar7DigitalTwin() {
  const [personality, setPersonality] = useState(0);
  const p = PERSONALITIES[personality];

  return (
    <section id="pillar-7" className="py-20 px-4">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-7 in-view">
        <Reveal>
          <PillarTitle
            num="07"
            label="Digital Twin Creator"
            color="oklch(var(--genesis-rose))"
          />
        </Reveal>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Avatar */}
          <Reveal direction="left">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  className="h-32 w-32 rounded-full flex items-center justify-center text-5xl"
                  style={{
                    background: `radial-gradient(circle, oklch(${p.color}/0.3), oklch(${p.color}/0.05))`,
                    border: "3px solid transparent",
                    backgroundClip: "padding-box",
                    boxShadow: `0 0 0 3px oklch(var(--${p.color.replace("var(", "").replace(")", "")}/0.7)), 0 0 40px oklch(var(--genesis-rose)/0.4)`,
                  }}
                >
                  <span className="text-4xl">{p.icon}</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid oklch(var(--genesis-rose)/0.4)" }}
                />
              </div>
              <span className="font-display font-bold text-foreground">
                AI Twin
              </span>
              <span className="text-xs text-center text-muted-foreground max-w-[160px] leading-relaxed">
                {p.trait}
              </span>
            </div>
          </Reveal>
          <div className="flex-1 space-y-6">
            {/* Personality selector */}
            <Reveal delay={0.1}>
              <div className="genesis-avatar-selector">
                {PERSONALITIES.map((per, i) => (
                  <button
                    key={per.label}
                    type="button"
                    data-ocid={`genesis.personality.${per.label.toLowerCase()}`}
                    onClick={() => setPersonality(i)}
                    className={cn(
                      "genesis-avatar-option flex flex-col items-center gap-1",
                      personality === i && "selected",
                    )}
                  >
                    <span className="text-xl">{per.icon}</span>
                    <span
                      className="text-xs font-bold font-display"
                      style={{
                        color:
                          personality === i
                            ? "oklch(var(--genesis-rose))"
                            : undefined,
                      }}
                    >
                      {per.label}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Ideas", v: 47 },
                  { label: "XP Earned", v: 1240 },
                  { label: "Remix %", v: 82, suffix: "%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl p-3 text-center"
                  >
                    <div
                      className="text-xl font-display font-black"
                      style={{ color: "oklch(var(--genesis-rose))" }}
                    >
                      <CountUp target={s.v} suffix={s.suffix || ""} />
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            {/* Memory Bank */}
            <Reveal delay={0.3}>
              <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest mb-3">
                Twin Memory Bank
              </h3>
              <div className="space-y-2">
                {TWIN_IDEAS.map((idea, i) => {
                  const s = RARITY_STYLES[idea.rarity];
                  return (
                    <div
                      key={idea.name}
                      data-ocid={`genesis.twin_idea.${i + 1}`}
                      className="glass rounded-xl px-4 py-2 flex items-center gap-3"
                    >
                      <span className="text-sm text-muted-foreground">
                        {i + 1}.
                      </span>
                      <span className="flex-1 text-sm font-body text-foreground">
                        {idea.name}
                      </span>
                      <Badge className={cn("text-[10px]", s.badge)}>
                        {idea.rarity}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        Twin learned ✓
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PILLAR 8 ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    year: "2025",
    title: "AppVerse Universe Launch",
    status: "✅ LIVE",
    color: "oklch(var(--genesis-cyan))",
    delay: 0,
  },
  {
    year: "2026",
    title: "Multi-AI Fusion Engine",
    status: "🔧 Building",
    color: "oklch(var(--genesis-purple))",
    delay: 0.1,
  },
  {
    year: "2028",
    title: "Digital Twin Consciousness",
    status: "⚡ Coming",
    color: "oklch(var(--genesis-gold))",
    delay: 0.2,
  },
  {
    year: "2030",
    title: "AR/VR Reality Layers",
    status: "🌐 Planned",
    color: "oklch(var(--genesis-teal))",
    delay: 0.3,
  },
  {
    year: "2040",
    title: "Autonomous AI Dream Architect",
    status: "🧠 Vision",
    color: "oklch(var(--genesis-magenta))",
    delay: 0.4,
  },
  {
    year: "2075",
    title: "Parallel Digital Consciousness Universe",
    status: "∞ Genesis",
    color: "oklch(var(--genesis-rose))",
    delay: 0.5,
  },
];

function Pillar8Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="pillar-8" className="py-20 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto genesis-pillar-card pillar-8 in-view">
        <Reveal>
          <PillarTitle
            num="08"
            label="Futuristic Roadmap"
            color="oklch(var(--genesis-magenta))"
          />
        </Reveal>
        <div ref={ref} className="genesis-timeline">
          <div
            className="relative ml-4 pl-6 border-l-2"
            style={{ borderColor: "oklch(var(--genesis-cyan)/0.3)" }}
          >
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24, scale: 0.9 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: item.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mb-6 last:mb-0"
                data-ocid={`genesis.timeline.${i + 1}`}
              >
                {/* Node dot */}
                <div
                  className="absolute -left-[31px] top-4 h-4 w-4 rounded-full border-2"
                  style={{
                    background: item.color,
                    borderColor: item.color,
                    boxShadow: `0 0 16px ${item.color}88`,
                  }}
                />
                <div
                  className="glass-glow rounded-xl p-4"
                  style={{ borderColor: `${item.color}55` }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <p className="font-display font-bold text-sm text-foreground">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Dream World CTA */}
        <Reveal delay={0.6}>
          <div className="mt-10 text-center glass-dream-glow rounded-2xl p-8">
            <Sparkles
              className="h-10 w-10 mx-auto mb-3"
              style={{ color: "oklch(var(--dream-bioluminescent))" }}
            />
            <h3 className="text-2xl font-display font-black text-foreground mb-2">
              The Dream Awaits
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Step into the Shared Dream World — where imagination becomes
              collective reality
            </p>
            <a
              href="/dream-world"
              data-ocid="genesis.dream_world_cta"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-display font-bold text-sm transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--dream-cosmic-purple)/0.2), oklch(var(--dream-bioluminescent)/0.15))",
                border: "1.5px solid oklch(var(--dream-bioluminescent)/0.5)",
                color: "oklch(var(--dream-bioluminescent))",
                boxShadow: "0 0 32px oklch(var(--dream-bioluminescent)/0.25)",
              }}
            >
              <Sparkles className="h-4 w-4" />
              Enter Dream World
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HERO_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `p${i}`,
  size: 2 + (i % 4),
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 13 + 8) % 100}%`,
  color:
    i % 3 === 0
      ? "oklch(var(--genesis-cyan))"
      : i % 3 === 1
        ? "oklch(var(--genesis-gold))"
        : "oklch(var(--genesis-magenta))",
  animation: `dream-particle-drift ${3 + (i % 4)}s ease-in-out infinite`,
  animationDelay: `${(i * 0.35) % 3}s`,
}));

function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setTaglineIdx((i) => (i + 1) % TAGLINES.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  function scrollToPillar(i: number) {
    const el = document.getElementById(`pillar-${i + 1}`);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "oklch(0.06 0.02 262)" }}
    >
      {/* BG image */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url('/assets/generated/genesis-hero.dim_1600x900.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 genesis-hero opacity-25"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.28 270), oklch(0.85 0.32 70), oklch(0.62 0.32 185))",
          backgroundSize: "300% 300%",
          animation: "genesis-gradient-shift 8s ease-in-out infinite",
        }}
      />
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {HERO_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full opacity-40"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              background: p.color,
              boxShadow: "0 0 8px currentColor",
              animation: p.animation,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge
            className="mb-6 px-4 py-1.5 text-xs font-mono tracking-widest"
            style={{
              background: "oklch(var(--genesis-cyan)/0.15)",
              borderColor: "oklch(var(--genesis-cyan)/0.5)",
              color: "oklch(var(--genesis-cyan))",
            }}
          >
            PLATFORM MANIFESTO
          </Badge>
          <h1
            className="text-7xl md:text-9xl font-display font-black holographic-text mb-4"
            style={{ backgroundSize: "300% 300%" }}
          >
            Genesis
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-4 font-body leading-relaxed">
            The Platform Itself as Architecture — AppVerse Universe builds,
            analyzes, and deploys itself
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-bold font-mono mb-8"
              style={{ color: "oklch(var(--genesis-gold))" }}
            >
              {TAGLINES[taglineIdx]}
            </motion.p>
          </AnimatePresence>
          {/* Pillar dots */}
          <div
            className="flex items-center justify-center gap-3 mt-4"
            data-ocid="genesis.pillar_dots"
          >
            {PILLAR_DOTS.map((dot, i) => (
              <button
                key={dot.id}
                type="button"
                data-ocid={`genesis.pillar_dot.${i + 1}`}
                onClick={() => scrollToPillar(i)}
                className="relative h-4 w-4 rounded-full transition-smooth hover:scale-125 focus:outline-none focus-visible:ring-2"
                style={{
                  background: dot.color,
                  boxShadow: `0 0 10px ${dot.color}`,
                }}
                aria-label={`Go to pillar ${dot.id}`}
              >
                <span className="sr-only">{dot.id}</span>
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-1">
            {PILLAR_DOTS.map((dot, i) => (
              <span
                key={dot.id}
                className="text-[8px] text-muted-foreground font-mono"
              >
                {i + 1}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest">
            SCROLL
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Genesis() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Pillar1Architecture />
      <Pillar2MultiAI />
      <Pillar3DesignSystem />
      <Pillar4Features />
      <Pillar5AutoEvolving />
      <Pillar6RealityPreview />
      <Pillar7DigitalTwin />
      <Pillar8Roadmap />
      {/* Branding footer */}
      <footer
        className="py-8 px-4 text-center border-t border-border/30"
        style={{ background: "oklch(var(--card)/0.5)" }}
      >
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
      <BottomTabBar />
    </div>
  );
}
