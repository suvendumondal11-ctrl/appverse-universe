import { MeshDistortMaterial, OrbitControls, Torus } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Atom,
  BookOpen,
  Bot,
  Brain,
  Building2,
  ChevronRight,
  Cloud,
  Cpu,
  Gamepad2,
  Globe,
  Heart,
  Infinity as InfinityIcon,
  Lock,
  Moon,
  Mountain,
  Palette,
  Shield,
  ShoppingBag,
  Sparkles,
  Stars,
  UserPlus,
  Users,
  Video,
  Zap,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { Suspense, useRef, useState } from "react";

// ── Floating icon component ────────────────────────────────────────────────
function FloatingIcon({
  icon: Icon,
  x,
  y,
  delay,
  size = 28,
}: {
  icon: LucideIcon;
  x: string;
  y: string;
  delay: number;
  size?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: ["0px", "-18px", "0px"],
        opacity: [0.4, 0.9, 0.4],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      <div
        className="rounded-full p-3"
        style={{
          background: "oklch(var(--dream-cosmic-purple) / 0.15)",
          border: "1.5px solid oklch(var(--dream-bioluminescent) / 0.5)",
          boxShadow: "0 0 20px oklch(var(--dream-bioluminescent) / 0.3)",
        }}
      >
        <Icon
          size={size}
          style={{ color: "oklch(var(--dream-bioluminescent))" }}
        />
      </div>
    </motion.div>
  );
}

// ── Particle field (CSS-only, no Three.js) ────────────────────────────────
function ParticleField() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i as number,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "oklch(var(--dream-bioluminescent))",
            boxShadow: `0 0 ${p.size * 4}px oklch(var(--dream-bioluminescent) / 0.6)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            y: ["0px", "-30px", "0px"],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── 3D Dreamscape scene ───────────────────────────────────────────────────
function DreamTorusScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 3, 3]} intensity={2} color="#68e0e8" />
      <pointLight position={[-3, -2, 2]} intensity={1.5} color="#c85fe0" />
      <Torus args={[1.6, 0.45, 32, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <MeshDistortMaterial
          color="#3dd6e8"
          wireframe
          distort={0.25}
          speed={1.5}
          opacity={0.75}
          transparent
        />
      </Torus>
      <Torus args={[2.4, 0.08, 16, 120]} rotation={[Math.PI / 3, 0.3, 0]}>
        <meshBasicMaterial color="#b060e8" transparent opacity={0.55} />
      </Torus>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </>
  );
}

// ── Section wrapper with scroll-triggered fade-in ─────────────────────────
function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────
function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="text-center mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-black mb-4"
      >
        <span className="holographic-text">{title}</span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "oklch(var(--dream-bioluminescent) / 0.8)" }}
        >
          {sub}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mx-auto mt-4 h-0.5 w-24 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--dream-bioluminescent)), oklch(var(--dream-aurora-pink)))",
          boxShadow: "0 0 12px oklch(var(--dream-bioluminescent) / 0.6)",
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1 — HERO
// ═══════════════════════════════════════════════════════════════════════════
function HeroSection({
  dreamEntryRef,
}: { dreamEntryRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(var(--dream-cosmic-purple) / 0.35) 0%, oklch(0.06 0.01 262) 70%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/dream-world-hero.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
        }}
      />
      {/* Particle field */}
      <ParticleField />

      {/* Floating icons */}
      <FloatingIcon icon={Brain} x="8%" y="18%" delay={0} size={26} />
      <FloatingIcon icon={Stars} x="85%" y="22%" delay={1.2} size={24} />
      <FloatingIcon icon={InfinityIcon} x="12%" y="70%" delay={0.7} size={28} />
      <FloatingIcon icon={Moon} x="80%" y="68%" delay={1.8} size={22} />
      <FloatingIcon icon={Atom} x="48%" y="10%" delay={2.2} size={20} />
      <FloatingIcon icon={Sparkles} x="90%" y="48%" delay={0.4} size={20} />

      {/* Gradient overlay ring */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, oklch(var(--dream-aurora-pink) / 0.08), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glow-pulse"
          style={{
            background: "oklch(var(--dream-midnight) / 0.8)",
            border: "1.5px solid oklch(var(--dream-bioluminescent) / 0.6)",
            boxShadow: "0 0 20px oklch(var(--dream-bioluminescent) / 0.3)",
          }}
          data-ocid="dream-world.badge"
        >
          <Brain
            size={16}
            style={{ color: "oklch(var(--dream-bioluminescent))" }}
          />
          <span
            className="text-sm font-semibold tracking-wider"
            style={{ color: "oklch(var(--dream-bioluminescent))" }}
          >
            🧠 Powered by Collective Consciousness
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.02em" }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--dream-bioluminescent)), oklch(var(--dream-aurora-pink)), oklch(var(--dream-star-gold)))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "300% 300%",
              animation: "hologram-shift 5s ease-in-out infinite",
              textShadow: "none",
            }}
          >
            Shared Dream
          </span>
          <br />
          <span
            className="holographic-text"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--dream-aurora-pink)), oklch(var(--dream-cosmic-purple)), oklch(var(--dream-bioluminescent)))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "300% 300%",
              animation: "hologram-shift 4s ease-in-out infinite reverse",
            }}
          >
            World
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-xl md:text-2xl font-body mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ color: "oklch(var(--dream-bioluminescent) / 0.85)" }}
        >
          Where imagination becomes reality,{" "}
          <span style={{ color: "oklch(var(--dream-aurora-pink))" }}>
            shared across infinite minds
          </span>
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.65,
            type: "spring",
            bounce: 0.35,
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            dreamEntryRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-display font-bold text-xl transition-smooth"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--dream-bioluminescent) / 0.25), oklch(var(--dream-aurora-pink) / 0.2))",
            border: "2px solid oklch(var(--dream-bioluminescent) / 0.7)",
            color: "oklch(var(--dream-bioluminescent))",
            boxShadow:
              "0 0 32px oklch(var(--dream-bioluminescent) / 0.35), 0 0 60px oklch(var(--dream-aurora-pink) / 0.15)",
          }}
          data-ocid="dream-world.enter_dream_button"
        >
          <Sparkles size={22} />
          Enter the Dream
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.06 0.01 262))",
        }}
      />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2 — CORE VISION
// ═══════════════════════════════════════════════════════════════════════════
const visionPillars: {
  icon: LucideIcon;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  color: string;
}[] = [
  {
    icon: InfinityIcon,
    title: "Infinite Creativity",
    desc: "Unlock the boundless creative potential of every human mind, amplified and fused by collective AI intelligence. No canvas is too large, no dream too wild.",
    stat: "∞",
    statLabel: "Minds Connected",
    color: "var(--dream-bioluminescent)",
  },
  {
    icon: Brain,
    title: "Shared Consciousness",
    desc: "Experience the first true merger of human minds — synchronized thought streams, shared emotions, and co-created realities that blur the boundary of self.",
    stat: "0ms",
    statLabel: "Dream Latency",
    color: "var(--dream-aurora-pink)",
  },
  {
    icon: Stars,
    title: "Beyond Reality",
    desc: "Step beyond the physical world into persistent, evolving dream dimensions where the laws of physics are suggestions and imagination is the only limit.",
    stat: "100%",
    statLabel: "Reality",
    color: "var(--dream-star-gold)",
  },
];

function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 px-6 relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(var(--dream-cosmic-purple) / 0.12), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The Vision"
          sub="This is not virtual reality. This is the next evolution of human existence — where the boundary between mind and world dissolves completely."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visionPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="dream-card p-8 rounded-2xl group cursor-default"
              data-ocid={`dream-world.vision_card.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `oklch(${pillar.color} / 0.15)`,
                  border: `1.5px solid oklch(${pillar.color} / 0.4)`,
                  boxShadow: `0 0 20px oklch(${pillar.color} / 0.25)`,
                }}
              >
                <pillar.icon
                  size={24}
                  style={{ color: `oklch(${pillar.color})` }}
                />
              </div>
              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: `oklch(${pillar.color})` }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "oklch(var(--dream-bioluminescent) / 0.7)" }}
              >
                {pillar.desc}
              </p>
              <div
                className="border-t pt-4"
                style={{ borderColor: `oklch(${pillar.color} / 0.2)` }}
              >
                <span
                  className="font-display text-3xl font-black"
                  style={{
                    color: `oklch(${pillar.color})`,
                    textShadow: `0 0 16px oklch(${pillar.color} / 0.5)`,
                  }}
                >
                  {pillar.stat}
                </span>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(var(--dream-bioluminescent) / 0.5)" }}
                >
                  {pillar.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3 — DREAM ENTRY PROTOCOL
// ═══════════════════════════════════════════════════════════════════════════
const entrySteps = [
  {
    num: "01",
    icon: Lock,
    emoji: "🔑",
    title: "Connect Identity",
    desc: "Synchronize your consciousness profile and establish your neural signature in the Dream Network. Your unique mind-print becomes your passport.",
  },
  {
    num: "02",
    icon: Bot,
    emoji: "🌌",
    title: "Choose Your Avatar",
    desc: "Select your consciousness form — how your inner self manifests in the shared dreamscape. Light being, shadow walker, or pure energy.",
  },
  {
    num: "03",
    icon: Zap,
    emoji: "⚡",
    title: "Synchronize Minds",
    desc: "Establish a neural handshake with your co-dreamers. Feel the moment when separate minds begin to resonate at the same frequency.",
  },
  {
    num: "04",
    icon: Sparkles,
    emoji: "✨",
    title: "Enter the Dreamscape",
    desc: "Dissolve into the shared world. Awareness expands, physics relax, and the collective imagination springs into infinite reality around you.",
  },
];

function EntryProtocolSection({
  sectionRef,
}: { sectionRef: React.RefObject<HTMLDivElement | null> }) {
  const [activeStep, setActiveStep] = useState(0);
  const innerRef = useRef(null);
  const inView = useInView(innerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.06 0.01 262) 0%, oklch(var(--dream-midnight) / 0.6) 50%, oklch(0.06 0.01 262) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The Dream Entry Protocol"
          sub="Four steps to cross the threshold from waking reality into the shared dreamscape."
        />
        <div ref={innerRef} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5"
            style={{ zIndex: 0 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full w-full origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--dream-bioluminescent)), oklch(var(--dream-aurora-pink)))",
                boxShadow: "0 0 8px oklch(var(--dream-bioluminescent) / 0.5)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {entrySteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveStep(i)}
                className="cursor-pointer"
                data-ocid={`dream-world.entry_step.${i + 1}`}
              >
                <motion.div
                  animate={{
                    scale: activeStep === i ? 1.04 : 1,
                    borderColor:
                      activeStep === i
                        ? "oklch(var(--dream-bioluminescent) / 0.9)"
                        : "oklch(var(--dream-bioluminescent) / 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="dream-card p-6 rounded-2xl h-full"
                  style={{
                    boxShadow:
                      activeStep === i
                        ? "0 0 32px oklch(var(--dream-bioluminescent) / 0.4), 0 0 48px oklch(var(--dream-aurora-pink) / 0.15)"
                        : undefined,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto font-display font-black text-lg"
                    style={{
                      background:
                        activeStep === i
                          ? "oklch(var(--dream-bioluminescent) / 0.2)"
                          : "oklch(var(--dream-cosmic-purple) / 0.2)",
                      border: `2px solid oklch(var(--dream-bioluminescent) / ${activeStep === i ? "0.8" : "0.4"})`,
                      color: "oklch(var(--dream-bioluminescent))",
                      boxShadow:
                        activeStep === i
                          ? "0 0 16px oklch(var(--dream-bioluminescent) / 0.5)"
                          : undefined,
                    }}
                  >
                    {step.num}
                  </div>
                  <div className="text-2xl mb-3 text-center">{step.emoji}</div>
                  <h3
                    className="font-display font-bold text-center mb-3 text-base"
                    style={{ color: "oklch(var(--dream-bioluminescent))" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed text-center"
                    style={{
                      color: "oklch(var(--dream-bioluminescent) / 0.65)",
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4 — TECHNOLOGY ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════
const techPillars = [
  {
    icon: Cpu,
    title: "AI Brain Interface",
    desc: "Adaptive neural simulation that reads emotional states and translates raw intention into environmental commands within the dreamscape.",
    detail:
      "The AI Brain Interface uses multi-layered transformer networks trained on human creative output. It converts high-level emotional and cognitive signals into precise world-generation instructions, adapting in real time as your imagination evolves.",
  },
  {
    icon: Globe,
    title: "Real-time World Generation",
    desc: "Generative AI continuously sculpts and evolves the dream environment, responding to collective thought patterns and individual desires.",
    detail:
      "Our Real-time World Engine runs at 240Hz world-update cycles using diffusion-based volumetric rendering. Every rock, light beam, and physics law is generated on-the-fly from the collective mental state of all dreamers currently connected.",
  },
  {
    icon: Activity,
    title: "Emotion Detection Engine",
    desc: "Real-time emotional scanning shapes the atmosphere, color palette, and physics of the shared world based on the collective emotional state.",
    detail:
      "Seven primary emotional axes are monitored per dreamer. The Emotion Engine aggregates these into a collective mood vector that drives adaptive world parameters — from sky color to gravity constants to the warmth of ambient light.",
  },
  {
    icon: Cloud,
    title: "Cloud Consciousness Sync",
    desc: "Ultra-low-latency synchronization ensures all participants experience a truly unified reality with zero perceptual drift.",
    detail:
      "Sub-2ms synchronization across global nodes using our proprietary Consciousness Mesh Protocol. State vectors for each dreamer are reconciled 500 times per second to maintain perfect shared coherence, eliminating dream divergence.",
  },
  {
    icon: Shield,
    title: "Neural Safety Layer",
    desc: "Intelligent safety systems prevent fear spirals, nightmare intrusions, and mental overload — keeping every dream experience positive and empowering.",
    detail:
      "The Neural Safety Layer monitors stress biomarkers and cognitive load, deploying adaptive calming interventions before distress thresholds are crossed. Dream architects can set personal safety profiles, and emergency exit protocols engage in under 50ms.",
  },
];

function TechSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 50%, oklch(var(--dream-cosmic-purple) / 0.1), transparent 60%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="The Neural Framework" />
        <div ref={ref} className="space-y-4">
          {techPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dream-card rounded-2xl overflow-hidden"
              data-ocid={`dream-world.tech_pillar.${i + 1}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-5 p-6 text-left transition-smooth hover:bg-white/5"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "oklch(var(--dream-bioluminescent) / 0.12)",
                    border:
                      "1.5px solid oklch(var(--dream-bioluminescent) / 0.4)",
                  }}
                >
                  <pillar.icon
                    size={22}
                    style={{ color: "oklch(var(--dream-bioluminescent))" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display font-bold text-base mb-1"
                    style={{ color: "oklch(var(--dream-bioluminescent))" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "oklch(var(--dream-bioluminescent) / 0.65)",
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="relative">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "oklch(var(--success-glow))",
                        boxShadow: "0 0 8px oklch(var(--success-glow) / 0.7)",
                      }}
                    />
                    <motion.div
                      animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{ background: "oklch(var(--success-glow) / 0.4)" }}
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "oklch(var(--dream-bioluminescent) / 0.6)",
                      }}
                    />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 pb-6 pt-0 text-sm leading-relaxed"
                      style={{
                        color: "oklch(var(--dream-aurora-pink) / 0.85)",
                        borderTop:
                          "1px solid oklch(var(--dream-bioluminescent) / 0.15)",
                        paddingTop: "1rem",
                      }}
                    >
                      {pillar.detail}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5 — FEATURES
// ═══════════════════════════════════════════════════════════════════════════
const features = [
  {
    icon: Users,
    title: "Multi-User Dream Rooms",
    color: "262",
    colorName: "violet",
    teaser:
      "Up to 1,000 minds in one synchronized dreamspace, co-creating infinite worlds in real time.",
    bullets: [
      "Sub-2ms synchronization across global dreamers",
      "Private rooms, public realms, event theaters",
      "Role-based permissions — architect, explorer, observer",
    ],
    badge: null,
  },
  {
    icon: Globe,
    title: "AI-Generated Worlds",
    color: "185",
    colorName: "teal",
    teaser:
      "Speak a vision and watch generative AI sculpt entire civilizations, landscapes, and physics systems in seconds.",
    bullets: [
      "Natural language world prompts",
      "Real-time terrain and atmosphere generation",
      "Physics rules defined by imagination",
    ],
    badge: null,
  },
  {
    icon: Video,
    title: "Memory Recording & Playback",
    color: "50",
    colorName: "amber",
    teaser:
      "Crystallize your most vivid shared experiences into cinematic memories you can replay, remix, and share forever.",
    bullets: [
      "Cinematic auto-edit from dream streams",
      "Multi-perspective replay from any dreamer's POV",
      "Export as immersive video or shareable memory capsule",
    ],
    badge: null,
  },
  {
    icon: ShoppingBag,
    title: "Dream Marketplace",
    color: "330",
    colorName: "pink",
    teaser:
      "Build, sell, and collect entire dream worlds. Turn your imagination into a living creative economy.",
    bullets: [
      "Monetize world templates and dream experiences",
      "NFT-backed dream asset ownership",
      "Creator royalties on every remix",
    ],
    badge: "Legendary",
  },
  {
    icon: Bot,
    title: "AI Dream Guide",
    color: "140",
    colorName: "green",
    teaser:
      "Your personal AI consciousness companion, always present to guide, protect, inspire, and unlock hidden layers of the dream.",
    bullets: [
      "Adaptive personality tuned to your dream style",
      "Real-time narrative weaving and world hints",
      "Emergency anchor — always a path home",
    ],
    badge: "Rare",
  },
  {
    icon: Shield,
    title: "Safety Layer",
    color: "220",
    colorName: "blue",
    teaser:
      "Intelligent guardian systems ensure every journey through the dreamscape remains empowering, not frightening.",
    bullets: [
      "Nightmare intrusion blocking at neural level",
      "Cognitive load monitoring and auto-adjustment",
      "Instant safe-exit in under 50ms",
    ],
    badge: null,
  },
];

function FeaturesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 px-6"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 80% 50%, oklch(var(--dream-aurora-pink) / 0.07), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Core Capabilities of the Dream World" />
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`dream-world.feature_card.${i + 1}`}
            >
              <motion.div
                layout
                className="dream-card rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  borderColor: `oklch(0.65 0.28 ${feat.color} / 0.4)`,
                  boxShadow:
                    expanded === i
                      ? `0 0 32px oklch(0.65 0.28 ${feat.color} / 0.3), 0 0 48px oklch(0.65 0.28 ${feat.color} / 0.1)`
                      : undefined,
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `oklch(0.65 0.28 ${feat.color} / 0.15)`,
                        border: `1.5px solid oklch(0.65 0.28 ${feat.color} / 0.4)`,
                      }}
                    >
                      <feat.icon
                        size={22}
                        style={{ color: `oklch(0.75 0.28 ${feat.color})` }}
                      />
                    </div>
                    {feat.badge && (
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background:
                            feat.badge === "Legendary"
                              ? "oklch(var(--dream-star-gold) / 0.2)"
                              : "oklch(0.62 0.25 280 / 0.2)",
                          border: `1px solid ${
                            feat.badge === "Legendary"
                              ? "oklch(var(--dream-star-gold) / 0.7)"
                              : "oklch(0.62 0.25 280 / 0.6)"
                          }`,
                          color:
                            feat.badge === "Legendary"
                              ? "oklch(var(--dream-star-gold))"
                              : "oklch(0.75 0.25 280)",
                          boxShadow:
                            feat.badge === "Legendary"
                              ? "0 0 12px oklch(var(--dream-star-gold) / 0.4)"
                              : undefined,
                        }}
                      >
                        {feat.badge === "Legendary" ? "🌟" : "💎"} {feat.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: `oklch(0.8 0.25 ${feat.color})` }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "oklch(var(--dream-bioluminescent) / 0.65)",
                    }}
                  >
                    {feat.teaser}
                  </p>
                </div>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-6"
                        style={{
                          borderTop: `1px solid oklch(0.65 0.28 ${feat.color} / 0.2)`,
                          paddingTop: "1rem",
                        }}
                      >
                        <ul className="space-y-2">
                          {feat.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm"
                              style={{ color: `oklch(0.8 0.2 ${feat.color})` }}
                            >
                              <ChevronRight
                                size={14}
                                className="flex-shrink-0 mt-0.5"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6 — USE CASES
// ═══════════════════════════════════════════════════════════════════════════
const useCases = [
  {
    emoji: "🎮",
    title: "Entertainment",
    desc: "Epic adventures, living game worlds, and infinite storytelling playgrounds co-created with friends across the planet.",
    bg: "oklch(0.55 0.22 50 / 0.12)",
    border: "oklch(0.65 0.25 50 / 0.35)",
    glow: "oklch(0.65 0.25 50 / 0.2)",
  },
  {
    emoji: "📚",
    title: "Education",
    desc: "Step inside history, walk through molecular biology, or explore ancient civilizations — immersive learning that makes knowledge unforgettable.",
    bg: "oklch(0.55 0.22 220 / 0.12)",
    border: "oklch(0.65 0.25 220 / 0.35)",
    glow: "oklch(0.65 0.25 220 / 0.2)",
  },
  {
    emoji: "🌿",
    title: "Therapy",
    desc: "Confront and dissolve fears in a fully controlled, safe dream environment guided by AI — healing at the speed of imagination.",
    bg: "oklch(0.55 0.22 140 / 0.12)",
    border: "oklch(0.65 0.25 140 / 0.35)",
    glow: "oklch(0.65 0.25 140 / 0.2)",
  },
  {
    emoji: "🤝",
    title: "Social Connection",
    desc: "Meet people beyond the constraints of physical bodies and geography — connect soul to soul in spaces built purely from shared feeling.",
    bg: "oklch(0.55 0.22 330 / 0.12)",
    border: "oklch(0.65 0.25 330 / 0.35)",
    glow: "oklch(0.65 0.25 330 / 0.2)",
  },
  {
    emoji: "🎨",
    title: "Creative Collab",
    desc: "Build entire worlds together with artists, architects, and dreamers from every corner of the earth — collective imagination made manifest.",
    bg: "oklch(0.55 0.22 262 / 0.12)",
    border: "oklch(0.65 0.25 262 / 0.35)",
    glow: "oklch(0.65 0.25 262 / 0.2)",
  },
];

function UseCasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 px-6"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 100%, oklch(var(--dream-cosmic-purple) / 0.12), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Where Dreams Transform Reality"
          sub="Five dimensions where the Shared Dream World reshapes what's possible."
        />
        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                rotateX: 4,
                rotateY: -3,
                scale: 1.03,
              }}
              className="flex-shrink-0 w-64 md:w-auto cursor-default"
              style={{ perspective: 800 }}
              data-ocid={`dream-world.use_case.${i + 1}`}
            >
              <div
                className="rounded-2xl p-6 h-full"
                style={{
                  background: uc.bg,
                  border: `1.5px solid ${uc.border}`,
                  boxShadow: `0 0 20px ${uc.glow}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-4xl mb-4 text-center">{uc.emoji}</div>
                <h3
                  className="font-display font-bold text-center text-sm mb-2"
                  style={{ color: "oklch(var(--dream-bioluminescent))" }}
                >
                  {uc.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-center"
                  style={{ color: "oklch(var(--dream-bioluminescent) / 0.6)" }}
                >
                  {uc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 7 — VISUAL STYLE
// ═══════════════════════════════════════════════════════════════════════════
const vignettes: {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}[] = [
  {
    icon: Building2,
    title: "Floating Cities",
    desc: "Entire metropolises suspended in luminous sky-seas, tethered by gravity fields woven from collective will. Architecture that breathes.",
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.15 220 / 0.8), oklch(0.15 0.12 262 / 0.6))",
  },
  {
    icon: Mountain,
    title: "Infinite Landscapes",
    desc: "Terrain that extends forever in every direction, reshaping itself as dreamers move — forests of crystal, oceans of starlight.",
    gradient:
      "linear-gradient(135deg, oklch(0.2 0.12 140 / 0.8), oklch(0.18 0.14 185 / 0.6))",
  },
  {
    icon: Atom,
    title: "Shifting Physics",
    desc: "Gravity whispers, time stretches into ribbons, and matter flows like water. Each dream layer operates on its own custom physical laws.",
    gradient:
      "linear-gradient(135deg, oklch(0.22 0.15 270 / 0.8), oklch(0.18 0.16 300 / 0.6))",
  },
  {
    icon: Sparkles,
    title: "Light-Based Structures",
    desc: "Buildings, bridges, and beings made of pure luminous energy — architecture that exists only as long as collective attention sustains it.",
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.18 50 / 0.7), oklch(0.2 0.15 30 / 0.6))",
  },
];

function VisualStyleSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 px-6"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 50%, oklch(var(--dream-midnight) / 0.8), oklch(0.06 0.01 262))",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The Dreamscape Aesthetic"
          sub="An atmosphere beyond description — where beauty is physics and physics is art."
        />

        {/* Top vignettes (2) */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {vignettes.slice(0, 2).map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-8 min-h-[160px] flex items-end relative overflow-hidden"
              style={{ background: v.gradient, backdropFilter: "blur(8px)" }}
              data-ocid={`dream-world.vignette.${i + 1}`}
            >
              <v.icon
                size={80}
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10"
                style={{ color: "oklch(var(--dream-bioluminescent))" }}
              />
              <div>
                <h3
                  className="font-display font-bold text-lg mb-1"
                  style={{
                    color: "oklch(var(--dream-bioluminescent))",
                    textShadow:
                      "0 0 20px oklch(var(--dream-bioluminescent) / 0.5)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(var(--dream-bioluminescent) / 0.7)" }}
                >
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto rounded-3xl overflow-hidden mb-10"
          style={{
            height: 360,
            maxWidth: 640,
            background:
              "radial-gradient(ellipse at center, oklch(var(--dream-midnight) / 0.9), oklch(0.04 0.01 262))",
            border: "1.5px solid oklch(var(--dream-bioluminescent) / 0.3)",
            boxShadow:
              "0 0 60px oklch(var(--dream-bioluminescent) / 0.15), 0 0 120px oklch(var(--dream-aurora-pink) / 0.08)",
          }}
          data-ocid="dream-world.3d_scene"
        >
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full animate-spin"
                  style={{
                    border:
                      "3px solid oklch(var(--dream-bioluminescent) / 0.2)",
                    borderTopColor: "oklch(var(--dream-bioluminescent))",
                  }}
                />
              </div>
            }
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <DreamTorusScene />
            </Canvas>
          </Suspense>
          <div
            className="absolute bottom-4 left-0 right-0 text-center"
            style={{ color: "oklch(var(--dream-bioluminescent) / 0.5)" }}
          >
            <p className="text-xs tracking-widest uppercase">
              Neural Resonance Core
            </p>
          </div>
        </motion.div>

        {/* Bottom vignettes (2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {vignettes.slice(2).map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="rounded-2xl p-8 min-h-[160px] flex items-end relative overflow-hidden"
              style={{ background: v.gradient, backdropFilter: "blur(8px)" }}
              data-ocid={`dream-world.vignette.${i + 3}`}
            >
              <v.icon
                size={80}
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10"
                style={{ color: "oklch(var(--dream-bioluminescent))" }}
              />
              <div>
                <h3
                  className="font-display font-bold text-lg mb-1"
                  style={{
                    color: "oklch(var(--dream-star-gold))",
                    textShadow: "0 0 20px oklch(var(--dream-star-gold) / 0.5)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(var(--dream-bioluminescent) / 0.7)" }}
                >
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 8 — TIMELINE
// ═══════════════════════════════════════════════════════════════════════════
const timelineNodes = [
  {
    years: "2026 – 2031",
    title: "Neural Dreamscapes Launch",
    desc: "The first synchronized shared dream environments go live. Early adopters synchronize minds across five continents, breaking every record for human collaborative experience.",
    isLegendary: false,
  },
  {
    years: "2031 – 2040",
    title: "Global Dream Network",
    desc: "One billion dreamers connected on a unified platform. Dream languages emerge — emotional shorthand that crosses all spoken barriers and unites creative communities.",
    isLegendary: false,
  },
  {
    years: "2040 – 2050",
    title: "Autonomous Dream Management",
    desc: "AI systems manage, evolve, and curate dream worlds independently. The boundary between human creativity and machine imagination dissolves into pure collaborative flow.",
    isLegendary: false,
  },
  {
    years: "2050 – 2070",
    title: "Physical-Digital Integration",
    desc: "The dreamscape begins bleeding into waking reality. Projected dream layers overlay physical space, and matter itself becomes programmable by collective intention.",
    isLegendary: false,
  },
  {
    years: "2070 +",
    title: "Parallel Digital Consciousness Universe",
    desc: "Humanity achieves its ultimate evolution: a persistent, self-governing universe of pure consciousness. Millions choose to inhabit it permanently, becoming the first digital civilization.",
    isLegendary: true,
  },
];

function TimelineSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "-60px" });

  return (
    <section className="py-28 px-6" ref={containerRef}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="The Next 50 Years"
          sub="A roadmap from today's dream into tomorrow's new reality."
        />
        <div ref={inViewRef} className="relative pl-10 md:pl-14">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 rounded-full overflow-hidden"
            style={{ background: "oklch(var(--dream-midnight) / 0.5)" }}
          >
            <motion.div
              style={{
                scaleY: lineScaleY,
                transformOrigin: "top",
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(180deg, oklch(var(--dream-bioluminescent)), oklch(var(--dream-aurora-pink)), oklch(var(--dream-star-gold)))",
                boxShadow: "0 0 12px oklch(var(--dream-bioluminescent) / 0.5)",
              }}
            />
          </div>

          <div className="space-y-10">
            {timelineNodes.map((node, i) => (
              <motion.div
                key={node.years}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
                data-ocid={`dream-world.timeline_node.${i + 1}`}
              >
                {/* Node circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.15,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className="absolute -left-10 md:-left-14 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: node.isLegendary
                      ? "oklch(var(--dream-star-gold) / 0.2)"
                      : "oklch(var(--dream-midnight) / 0.8)",
                    border: `2px solid ${
                      node.isLegendary
                        ? "oklch(var(--dream-star-gold))"
                        : "oklch(var(--dream-bioluminescent) / 0.6)"
                    }`,
                    boxShadow: node.isLegendary
                      ? "0 0 20px oklch(var(--dream-star-gold) / 0.6), 0 0 40px oklch(var(--dream-star-gold) / 0.2)"
                      : "0 0 12px oklch(var(--dream-bioluminescent) / 0.3)",
                  }}
                >
                  {node.isLegendary ? (
                    <Stars
                      size={14}
                      style={{ color: "oklch(var(--dream-star-gold))" }}
                    />
                  ) : (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "oklch(var(--dream-bioluminescent))",
                      }}
                    />
                  )}
                </motion.div>

                <div
                  className="dream-card rounded-2xl p-6"
                  style={{
                    borderColor: node.isLegendary
                      ? "oklch(var(--dream-star-gold) / 0.5)"
                      : "oklch(var(--dream-bioluminescent) / 0.25)",
                    boxShadow: node.isLegendary
                      ? "0 0 32px oklch(var(--dream-star-gold) / 0.2), 0 0 60px oklch(var(--dream-star-gold) / 0.08)"
                      : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: node.isLegendary
                          ? "oklch(var(--dream-star-gold) / 0.15)"
                          : "oklch(var(--dream-bioluminescent) / 0.1)",
                        border: `1px solid ${
                          node.isLegendary
                            ? "oklch(var(--dream-star-gold) / 0.5)"
                            : "oklch(var(--dream-bioluminescent) / 0.3)"
                        }`,
                        color: node.isLegendary
                          ? "oklch(var(--dream-star-gold))"
                          : "oklch(var(--dream-bioluminescent))",
                      }}
                    >
                      {node.years}
                    </span>
                    {node.isLegendary && (
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: "oklch(var(--dream-star-gold) / 0.2)",
                          border:
                            "1px solid oklch(var(--dream-star-gold) / 0.6)",
                          color: "oklch(var(--dream-star-gold))",
                          boxShadow:
                            "0 0 12px oklch(var(--dream-star-gold) / 0.3)",
                        }}
                      >
                        🌟 Legendary Milestone
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{
                      color: node.isLegendary
                        ? "oklch(var(--dream-star-gold))"
                        : "oklch(var(--dream-bioluminescent))",
                      textShadow: node.isLegendary
                        ? "0 0 20px oklch(var(--dream-star-gold) / 0.4)"
                        : undefined,
                    }}
                  >
                    {node.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "oklch(var(--dream-bioluminescent) / 0.65)",
                    }}
                  >
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CTA FOOTER SECTION
// ═══════════════════════════════════════════════════════════════════════════
function CtaSection() {
  return (
    <RevealSection>
      <section
        className="py-28 px-6"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, oklch(var(--dream-cosmic-purple) / 0.2), oklch(0.06 0.01 262) 70%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block rounded-3xl p-12"
            style={{
              background: "oklch(var(--dream-midnight) / 0.85)",
              border: "1.5px solid oklch(var(--dream-bioluminescent) / 0.4)",
              boxShadow:
                "0 0 60px oklch(var(--dream-bioluminescent) / 0.12), 0 0 100px oklch(var(--dream-aurora-pink) / 0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-black mb-4"
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--dream-bioluminescent)), oklch(var(--dream-aurora-pink)))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ready to Enter the Dream?
              </span>
            </motion.h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "oklch(var(--dream-bioluminescent) / 0.7)" }}
            >
              The threshold between imagination and reality has never been
              thinner.
              <br />
              Your shared dream world awaits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link to="/builder/$id" params={{ id: "new" }}>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-base transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--dream-bioluminescent) / 0.25), oklch(var(--dream-aurora-pink) / 0.15))",
                    border:
                      "2px solid oklch(var(--dream-bioluminescent) / 0.7)",
                    color: "oklch(var(--dream-bioluminescent))",
                    boxShadow:
                      "0 0 24px oklch(var(--dream-bioluminescent) / 0.3)",
                  }}
                  data-ocid="dream-world.cta_create_button"
                >
                  <Zap size={18} /> Start Creating ⚡
                </motion.button>
              </Link>
              <Link to="/magic">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-base transition-smooth"
                  style={{
                    background: "oklch(var(--dream-midnight) / 0.6)",
                    border: "2px solid oklch(var(--dream-aurora-pink) / 0.5)",
                    color: "oklch(var(--dream-aurora-pink))",
                    boxShadow: "0 0 20px oklch(var(--dream-aurora-pink) / 0.2)",
                  }}
                  data-ocid="dream-world.cta_magic_button"
                >
                  Explore Magic Engine 🎲
                </motion.button>
              </Link>
            </div>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--dream-bioluminescent) / 0.45)" }}
            >
              Built by AI. Updated by the world 🌐
            </p>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE EXPORT
// ═══════════════════════════════════════════════════════════════════════════
export default function DreamWorld() {
  const dreamEntryRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.06 0.01 262)",
        color: "oklch(var(--dream-bioluminescent))",
      }}
      data-ocid="dream-world.page"
    >
      <HeroSection dreamEntryRef={dreamEntryRef} />
      <VisionSection />
      <EntryProtocolSection sectionRef={dreamEntryRef} />
      <TechSection />
      <FeaturesSection />
      <UseCasesSection />
      <VisualStyleSection />
      <TimelineSection />
      <CtaSection />
    </div>
  );
}
