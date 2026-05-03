import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertCircle,
  Bell,
  Brain,
  Calendar,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  Clock,
  CreditCard,
  DollarSign,
  Footprints,
  Heart,
  Home,
  Shield,
  TrendingUp,
  Users,
  Wifi,
  WifiOff,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types

type LifeArea = "Schedule" | "Health" | "Tasks" | "Social" | "Finance";
type SyncStatus = "synced" | "syncing" | "offline";
type DecisionStatus = "approve" | "override" | "pending";

interface Decision {
  id: string;
  area: LifeArea;
  action: string;
  reasoning: string;
  confidence: number;
  timestamp: string;
  status: DecisionStatus;
}

interface Device {
  id: string;
  name: string;
  icon: React.ReactNode;
  status: SyncStatus;
  metric: string;
  metricLabel: string;
  connected: boolean;
}

interface ActivityItem {
  id: string;
  area: LifeArea;
  action: string;
  timestamp: string;
  type: "auto" | "approved" | "overridden";
}

interface LifeAreaCard {
  area: LifeArea;
  color: string;
  automationOn: boolean;
  metric: string;
  metricLabel: string;
  lastAction: string;
  score: number;
}

// ─── Constants

const AREA_COLORS: Record<LifeArea, string> = {
  Schedule: "oklch(0.68 0.36 190)",
  Health: "oklch(0.72 0.24 140)",
  Tasks: "oklch(0.75 0.28 262)",
  Social: "oklch(0.72 0.26 330)",
  Finance: "oklch(0.78 0.25 70)",
};

const AREA_ICONS: Record<LifeArea, React.ReactNode> = {
  Schedule: <Calendar className="w-5 h-5" />,
  Health: <Heart className="w-5 h-5" />,
  Tasks: <CheckSquare className="w-5 h-5" />,
  Social: <Users className="w-5 h-5" />,
  Finance: <DollarSign className="w-5 h-5" />,
};

const AUTONOMY_LEVELS = [
  {
    pct: 0,
    label: "Suggest Only",
    desc: "Twin proposes, you decide everything",
  },
  {
    pct: 25,
    label: "Co-Pilot",
    desc: "Twin handles routine, you approve big decisions",
  },
  {
    pct: 50,
    label: "Co-Pilot",
    desc: "Twin handles routine, you approve big decisions",
  },
  {
    pct: 75,
    label: "Trusted Agent",
    desc: "Twin acts freely, notifies you afterward",
  },
  {
    pct: 100,
    label: "Full Control",
    desc: "Twin runs your entire life automatically",
  },
];

const PERSONALITIES = [
  {
    id: "visionary",
    label: "Visionary",
    emoji: "🔭",
    desc: "Bold long-term thinking",
  },
  {
    id: "hacker",
    label: "Hacker",
    emoji: "💻",
    desc: "Optimize, automate, ship",
  },
  {
    id: "artist",
    label: "Artist",
    emoji: "🎨",
    desc: "Creative, expressive choices",
  },
  {
    id: "dreamer",
    label: "Dreamer",
    emoji: "✨",
    desc: "Intuitive, possibility-led",
  },
];

const SEED_DECISIONS: Decision[] = [
  {
    id: "d1",
    area: "Schedule",
    action: "Blocked 2:00–4:00 PM for deep work",
    reasoning:
      "Your focus metrics peak in afternoon. 3 meetings already today — protecting creative time.",
    confidence: 92,
    timestamp: "2 min ago",
    status: "pending",
  },
  {
    id: "d2",
    area: "Health",
    action: "Suggested 15-min walk break at 3 PM",
    reasoning:
      "Steps today: 2,100 (goal: 8,000). Sedentary streak: 4 hrs. Cortisol pattern high.",
    confidence: 88,
    timestamp: "18 min ago",
    status: "pending",
  },
  {
    id: "d3",
    area: "Finance",
    action: "Paused 3 non-essential subscriptions",
    reasoning:
      "Monthly spend 12% over budget. Paused rarely-used services — saves ₹1,840/mo.",
    confidence: 95,
    timestamp: "1 hr ago",
    status: "approve",
  },
  {
    id: "d4",
    area: "Tasks",
    action: "Reprioritized task list for sprint goal",
    reasoning:
      "Detected deadline shift. Moved high-impact tasks to top, deferred 4 low-urgency items.",
    confidence: 87,
    timestamp: "2 hrs ago",
    status: "approve",
  },
  {
    id: "d5",
    area: "Social",
    action: "Drafted reply to 3 pending messages",
    reasoning:
      "Response time above 48h for close contacts. Drafted empathetic responses matching your tone.",
    confidence: 79,
    timestamp: "3 hrs ago",
    status: "pending",
  },
  {
    id: "d6",
    area: "Schedule",
    action: "Rescheduled Monday 9 AM call to 11 AM",
    reasoning:
      "Calendar conflict detected. Both parties free at 11 AM. Morning buffer preserved.",
    confidence: 91,
    timestamp: "Yesterday",
    status: "approve",
  },
];

const SEED_FEED: ActivityItem[] = [
  {
    id: "a1",
    area: "Finance",
    action: "Paused Netflix & Spotify subscriptions — saving ₹1,840/mo",
    timestamp: "2 min ago",
    type: "auto",
  },
  {
    id: "a2",
    area: "Schedule",
    action: "Blocked deep work window: 2–4 PM today",
    timestamp: "8 min ago",
    type: "auto",
  },
  {
    id: "a3",
    area: "Health",
    action: "Walk break reminder sent to smartwatch",
    timestamp: "20 min ago",
    type: "approved",
  },
  {
    id: "a4",
    area: "Tasks",
    action: "Sprint backlog reprioritized — 7 tasks reordered",
    timestamp: "55 min ago",
    type: "auto",
  },
  {
    id: "a5",
    area: "Social",
    action: "Reply drafted for Priya's unanswered message",
    timestamp: "1 hr ago",
    type: "approved",
  },
  {
    id: "a6",
    area: "Finance",
    action: "Budget alert: dining spend 18% above target",
    timestamp: "2 hrs ago",
    type: "overridden",
  },
];

// ─── Sub-components

function NeuralNode({ area, active }: { area: LifeArea; active: boolean }) {
  const color = AREA_COLORS[area];
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center relative"
        style={{
          background: `radial-gradient(circle, ${color}33, ${color}11)`,
          border: `2px solid ${color}${active ? "cc" : "44"}`,
          boxShadow: active
            ? `0 0 24px ${color}66, inset 0 0 16px ${color}1a`
            : `0 0 6px ${color}22`,
          animation: active
            ? "automation-node-pulse 2.4s ease-in-out infinite"
            : "none",
        }}
      >
        <span style={{ color, opacity: active ? 1 : 0.5 }}>
          {AREA_ICONS[area]}
        </span>
        {active && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${color}44`,
              animation: "neon-ping 2s ease-out infinite",
            }}
          />
        )}
      </div>
      <span
        className="text-[10px] font-mono"
        style={{ color, opacity: active ? 1 : 0.5 }}
      >
        {area}
      </span>
    </div>
  );
}

function ConfidenceRing({ value, color }: { value: number; color: string }) {
  const radius = 26;
  const circ = 2 * Math.PI * radius;
  const offset = circ * (1 - value / 100);
  return (
    <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
      <svg
        className="absolute inset-0"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        aria-label="Confidence ring"
        role="img"
      >
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke={`${color}22`}
          strokeWidth="4"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 28 28)"
          style={{
            filter: `drop-shadow(0 0 5px ${color})`,
            transition: "stroke-dashoffset 0.8s ease-out",
          }}
        />
      </svg>
      <span className="text-[11px] font-bold font-mono" style={{ color }}>
        {value}%
      </span>
    </div>
  );
}

function SyncDot({ status }: { status: SyncStatus }) {
  const c =
    status === "synced"
      ? "#22c55e"
      : status === "syncing"
        ? "oklch(0.68 0.36 190)"
        : "#ef4444";
  return (
    <span className="relative flex items-center justify-center w-3 h-3">
      {status === "syncing" && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: c,
            animation: "sync-pulse 1.5s ease-in-out infinite",
          }}
        />
      )}
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{ background: c, boxShadow: `0 0 6px ${c}` }}
      />
    </span>
  );
}

function DecisionCard({
  d,
  autonomy,
  onApprove,
  onOverride,
}: {
  d: Decision;
  autonomy: number;
  onApprove: (id: string) => void;
  onOverride: (id: string) => void;
}) {
  const color = AREA_COLORS[d.area];
  const isFullAuto = autonomy >= 75;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      className="rounded-xl p-4 mb-3"
      style={{
        background: "oklch(0.12 0.01 0 / 0.7)",
        border: `1.5px solid ${color}44`,
        boxShadow: `0 0 14px ${color}18`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-start gap-3">
        <ConfidenceRing value={d.confidence} color={color} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color }}
            >
              {d.area}
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">
              {d.timestamp}
            </span>
            {isFullAuto && d.status === "approve" && (
              <Badge
                className="text-[9px] px-1.5 py-0 h-4"
                style={{
                  background: `${color}22`,
                  borderColor: `${color}55`,
                  color,
                }}
              >
                Auto-done
              </Badge>
            )}
          </div>
          <p className="text-sm font-medium text-foreground leading-snug mb-1">
            {d.action}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {d.reasoning}
          </p>
        </div>
      </div>
      {d.status === "pending" && !isFullAuto && (
        <div className="flex gap-2 mt-3">
          <Button
            size="sm"
            type="button"
            className="h-7 text-xs flex-1"
            style={{
              background: `${color}22`,
              border: `1px solid ${color}77`,
              color,
            }}
            onClick={() => onApprove(d.id)}
            data-ocid="decision.confirm_button"
          >
            <CheckCircle2 className="w-3 h-3 mr-1" /> Approve
          </Button>
          <Button
            size="sm"
            type="button"
            variant="outline"
            className="h-7 text-xs flex-1 border-destructive/40 text-destructive hover:bg-destructive/10"
            onClick={() => onOverride(d.id)}
            data-ocid="decision.cancel_button"
          >
            <XCircle className="w-3 h-3 mr-1" /> Override
          </Button>
        </div>
      )}
    </motion.div>
  );
}

function ActivityFeed({ items }: { items: ActivityItem[] }) {
  const typeColors: Record<string, string> = {
    auto: AREA_COLORS.Schedule,
    approved: "oklch(0.72 0.24 140)",
    overridden: "oklch(0.65 0.25 20)",
  };
  const typeLabels: Record<string, string> = {
    auto: "AUTO",
    approved: "APPROVED",
    overridden: "OVERRIDE",
  };
  return (
    <div className="space-y-1.5">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
          className="flex items-start gap-2.5 p-2.5 rounded-lg"
          style={{
            background: "oklch(0.12 0.01 0 / 0.5)",
            borderLeft: `3px solid ${AREA_COLORS[item.area]}77`,
            backdropFilter: "blur(8px)",
          }}
          data-ocid={`activity.item.${i + 1}`}
        >
          <span
            className="mt-0.5 flex-shrink-0"
            style={{ color: AREA_COLORS[item.area] }}
          >
            {AREA_ICONS[item.area]}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-foreground leading-snug">
              {item.action}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[9px] font-mono text-muted-foreground">
                {item.timestamp}
              </span>
              <span
                className="text-[9px] font-mono font-bold px-1 rounded"
                style={{
                  color: typeColors[item.type],
                  background: `${typeColors[item.type]}18`,
                }}
              >
                {typeLabels[item.type]}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Page

export default function DigitalTwinLife() {
  const navigate = useNavigate();

  const [autonomy, setAutonomy] = useState(75);
  const autonomyLevel = AUTONOMY_LEVELS.reduce((best, lvl) =>
    Math.abs(autonomy - lvl.pct) <= Math.abs(autonomy - best.pct) ? lvl : best,
  );

  const [personality, setPersonality] = useState("visionary");
  const [decisions, setDecisions] = useState<Decision[]>(SEED_DECISIONS);
  const [historyOpen, setHistoryOpen] = useState(false);

  const [devices, setDevices] = useState<Device[]>([
    {
      id: "cal",
      name: "Smart Calendar",
      icon: <Calendar className="w-4 h-4" />,
      status: "synced",
      metric: "3",
      metricLabel: "meetings today",
      connected: true,
    },
    {
      id: "fit",
      name: "Fitness Tracker",
      icon: <Footprints className="w-4 h-4" />,
      status: "syncing",
      metric: "2,840",
      metricLabel: "steps today",
      connected: true,
    },
    {
      id: "rem",
      name: "Smart Reminders",
      icon: <Bell className="w-4 h-4" />,
      status: "synced",
      metric: "5",
      metricLabel: "active tasks",
      connected: true,
    },
    {
      id: "hom",
      name: "Smart Home Hub",
      icon: <Home className="w-4 h-4" />,
      status: "offline",
      metric: "22°C",
      metricLabel: "home temp",
      connected: false,
    },
    {
      id: "fin",
      name: "Finance Monitor",
      icon: <CreditCard className="w-4 h-4" />,
      status: "synced",
      metric: "₹38,200",
      metricLabel: "monthly spend",
      connected: true,
    },
  ]);

  const [lifeAreas, setLifeAreas] = useState<LifeAreaCard[]>([
    {
      area: "Schedule",
      color: AREA_COLORS.Schedule,
      automationOn: true,
      metric: "94%",
      metricLabel: "on-time rate",
      lastAction: "Blocked 2–4 PM deep work",
      score: 94,
    },
    {
      area: "Health",
      color: AREA_COLORS.Health,
      automationOn: true,
      metric: "2,840",
      metricLabel: "steps",
      lastAction: "Sent walk break to wearable",
      score: 61,
    },
    {
      area: "Tasks",
      color: AREA_COLORS.Tasks,
      automationOn: true,
      metric: "7/12",
      metricLabel: "done today",
      lastAction: "Reprioritized sprint backlog",
      score: 78,
    },
    {
      area: "Social",
      color: AREA_COLORS.Social,
      automationOn: false,
      metric: "3",
      metricLabel: "pending replies",
      lastAction: "Drafted reply to Priya",
      score: 55,
    },
    {
      area: "Finance",
      color: AREA_COLORS.Finance,
      automationOn: true,
      metric: "₹38,200",
      metricLabel: "this month",
      lastAction: "Paused 3 subscriptions",
      score: 82,
    },
  ]);

  const [feed, setFeed] = useState<ActivityItem[]>(SEED_FEED);
  const feedRef = useRef<HTMLDivElement>(null);

  const addFeedItem = useCallback(() => {
    const areas: LifeArea[] = [
      "Schedule",
      "Health",
      "Tasks",
      "Social",
      "Finance",
    ];
    const actions: Record<LifeArea, string[]> = {
      Schedule: [
        "Optimized tomorrow's calendar",
        "Auto-declined low-priority invite",
      ],
      Health: ["Hydration reminder dispatched", "Sleep schedule aligned"],
      Tasks: ["Flagged overdue task for review", "Auto-assigned priority tag"],
      Social: ["Suggested check-in with mentor", "Flagged unread thread"],
      Finance: ["Rounded up savings ₹120", "Flagged unusual transaction"],
    };
    const area = areas[Math.floor(Math.random() * areas.length)];
    const actionList = actions[area];
    const action = actionList[Math.floor(Math.random() * actionList.length)];
    setFeed((prev) => [
      {
        id: `a-${Date.now()}`,
        area,
        action,
        timestamp: "just now",
        type: autonomy >= 75 ? "auto" : "approved",
      },
      ...prev.slice(0, 11),
    ]);
  }, [autonomy]);

  useEffect(() => {
    const t = setInterval(addFeedItem, 5000);
    return () => clearInterval(t);
  }, [addFeedItem]);

  const twinScore = Math.round(
    (lifeAreas.filter((a) => a.automationOn).length / lifeAreas.length) *
      autonomy,
  );
  const pendingCount = decisions.filter((d) => d.status === "pending").length;

  const handleApprove = (id: string) =>
    setDecisions((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "approve" as DecisionStatus } : d,
      ),
    );
  const handleOverride = (id: string) =>
    setDecisions((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "override" as DecisionStatus } : d,
      ),
    );

  const toggleDevice = (id: string) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              connected: !d.connected,
              status: d.connected ? "offline" : ("syncing" as SyncStatus),
            }
          : d,
      ),
    );
    setTimeout(
      () =>
        setDevices((prev) =>
          prev.map((d) =>
            d.id === id && d.connected
              ? { ...d, status: "synced" as SyncStatus }
              : d,
          ),
        ),
      1800,
    );
  };

  const toggleArea = (area: LifeArea) =>
    setLifeAreas((prev) =>
      prev.map((a) =>
        a.area === area ? { ...a, automationOn: !a.automationOn } : a,
      ),
    );

  const NEU = "oklch(0.68 0.36 190)";
  const BG = "oklch(0.06 0.008 200)";
  const CARD = "oklch(0.1 0.01 190 / 0.85)";

  return (
    <div
      className="min-h-screen"
      style={{ background: BG, color: "oklch(0.92 0.02 190)" }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden h-52">
        <img
          src="/assets/generated/digital-twin-hero.dim_1400x500.jpg"
          alt="Digital Twin Neural Control"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${BG}55, ${BG})` }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between p-5">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-muted-foreground"
              onClick={() => navigate({ to: "/profile" })}
              data-ocid="twin-life.back_button"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Brain className="w-5 h-5" style={{ color: NEU }} />
            <span
              className="font-display font-bold text-lg"
              style={{ color: NEU }}
            >
              Digital Twin Life
            </span>
            <Badge
              style={{
                background: `${NEU}22`,
                borderColor: `${NEU}66`,
                color: NEU,
              }}
              className="text-[10px]"
            >
              ACTIVE
            </Badge>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-1">
                Intelligence Mode
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "oklch(0.85 0.02 190)" }}
              >
                "{autonomyLevel.label}" • {twinScore}% of your life automated
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {(
                [
                  "Schedule",
                  "Health",
                  "Tasks",
                  "Social",
                  "Finance",
                ] as LifeArea[]
              ).map((area) => (
                <NeuralNode
                  key={area}
                  area={area}
                  active={
                    lifeAreas.find((a) => a.area === area)?.automationOn ??
                    false
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="px-4 md:px-6 lg:px-8 py-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Autonomy Slider */}
          <section
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}44`,
              backdropFilter: "blur(16px)",
            }}
            data-ocid="twin-life.autonomy_section"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-display font-bold" style={{ color: NEU }}>
                  Autonomy Spectrum
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {autonomyLevel.desc}
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-3xl font-bold font-mono"
                  style={{ color: NEU, textShadow: `0 0 20px ${NEU}88` }}
                >
                  {autonomy}%
                </p>
                <p
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: `${NEU}bb` }}
                >
                  {autonomyLevel.label}
                </p>
              </div>
            </div>
            <div className="relative mb-3 h-3">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "oklch(0.18 0.02 190)" }}
              />
              <div
                className="absolute top-0 left-0 h-3 rounded-full"
                style={{
                  width: `${autonomy}%`,
                  background: `linear-gradient(90deg, oklch(0.45 0.2 190), ${NEU}, oklch(0.78 0.38 190))`,
                  backgroundSize: "200% 100%",
                  animation: "autonomy-shimmer 3s ease-in-out infinite",
                  boxShadow: `0 0 14px ${NEU}88`,
                  transition: "width 0.15s",
                }}
              />
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={autonomy}
                onChange={(e) => setAutonomy(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-3"
                style={{ zIndex: 10 }}
                data-ocid="twin-life.autonomy_slider"
                aria-label="Autonomy level"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full pointer-events-none"
                style={{
                  left: `calc(${autonomy}% - 10px)`,
                  background: NEU,
                  boxShadow: `0 0 18px ${NEU}cc, 0 0 36px ${NEU}55`,
                  border: "2px solid oklch(0.85 0.02 190 / 0.8)",
                  transition: "left 0.1s",
                }}
              />
            </div>
            <div className="flex justify-between">
              {[
                "0 — Suggest",
                "25",
                "50 — Co-Pilot",
                "75",
                "100 — Full Control",
              ].map((m) => (
                <span
                  key={m}
                  className="text-[9px] font-mono text-muted-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </section>

          {/* Life Area Cards */}
          <section data-ocid="twin-life.life_areas_section">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-bold" style={{ color: NEU }}>
                Life Areas
              </h2>
              <span className="text-xs text-muted-foreground font-mono">
                {lifeAreas.filter((a) => a.automationOn).length}/5 automated
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {lifeAreas.map((la, i) => (
                <motion.div
                  key={la.area}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-xl p-4 relative overflow-hidden"
                  style={{
                    background: "oklch(0.1 0.01 190 / 0.7)",
                    border: `1.5px solid ${la.color}${la.automationOn ? "55" : "22"}`,
                    backdropFilter: "blur(12px)",
                    boxShadow: la.automationOn
                      ? `0 0 18px ${la.color}1a`
                      : "none",
                  }}
                  data-ocid={`twin-life.area.${i + 1}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          color: la.color,
                          opacity: la.automationOn ? 1 : 0.5,
                        }}
                      >
                        {AREA_ICONS[la.area]}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: la.color,
                          opacity: la.automationOn ? 1 : 0.6,
                        }}
                      >
                        {la.area}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleArea(la.area)}
                      className="relative w-10 h-5 rounded-full transition-all duration-300"
                      style={{
                        background: la.automationOn
                          ? `${la.color}44`
                          : "oklch(0.2 0.01 0)",
                        border: `1px solid ${la.color}${la.automationOn ? "88" : "22"}`,
                        boxShadow: la.automationOn
                          ? `0 0 8px ${la.color}44`
                          : "none",
                      }}
                      data-ocid={`twin-life.area_toggle.${i + 1}`}
                      aria-label={`Toggle ${la.area} automation`}
                    >
                      <span
                        className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300"
                        style={{
                          left: la.automationOn ? "calc(100% - 18px)" : "2px",
                          background: la.automationOn
                            ? la.color
                            : "oklch(0.4 0 0)",
                          boxShadow: la.automationOn
                            ? `0 0 8px ${la.color}`
                            : "none",
                        }}
                      />
                    </button>
                  </div>
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <p
                        className="text-xl font-bold font-mono"
                        style={{
                          color: la.color,
                          opacity: la.automationOn ? 1 : 0.5,
                        }}
                      >
                        {la.metric}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wide">
                        {la.metricLabel}
                      </p>
                    </div>
                    <ConfidenceRing
                      value={la.score}
                      color={la.automationOn ? la.color : "oklch(0.35 0 0)"}
                    />
                  </div>
                  <div
                    className="text-[11px] text-muted-foreground truncate pt-2"
                    style={{ borderTop: `1px solid ${la.color}22` }}
                  >
                    <span style={{ color: la.color }}>↳</span> {la.lastAction}
                  </div>
                </motion.div>
              ))}

              {/* Twin Score */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="rounded-xl p-4 flex flex-col items-center justify-center gap-3"
                style={{
                  background: "oklch(0.1 0.01 190 / 0.7)",
                  border: `1.5px solid ${NEU}55`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 28px ${NEU}22`,
                }}
                data-ocid="twin-life.twin_score_card"
              >
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                  Twin Score
                </p>
                <div className="relative">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    aria-label="Twin score ring"
                    role="img"
                  >
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      fill="none"
                      stroke="oklch(0.18 0.02 190)"
                      strokeWidth="7"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      fill="none"
                      stroke={NEU}
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 38}`}
                      strokeDashoffset={`${2 * Math.PI * 38 * (1 - twinScore / 100)}`}
                      transform="rotate(-90 48 48)"
                      style={{
                        filter: `drop-shadow(0 0 8px ${NEU}cc)`,
                        transition: "stroke-dashoffset 0.8s ease-out",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className="text-2xl font-bold font-mono"
                      style={{ color: NEU, textShadow: `0 0 14px ${NEU}cc` }}
                    >
                      {twinScore}%
                    </span>
                    <span className="text-[9px] text-muted-foreground font-mono">
                      AUTOMATED
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Zap className="w-3 h-3" style={{ color: NEU }} />
                    <span className="text-[10px] text-muted-foreground">
                      Power intensity
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full"
                    style={{ background: "oklch(0.18 0.02 190)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${twinScore}%`,
                        background: `linear-gradient(90deg, oklch(0.45 0.2 190), ${NEU})`,
                        boxShadow: `0 0 8px ${NEU}88`,
                        animation: "autonomy-shimmer 2.5s ease-in-out infinite",
                        transition: "width 0.8s",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Decision Engine */}
          <section
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}33`,
              backdropFilter: "blur(16px)",
            }}
            data-ocid="twin-life.decisions_section"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" style={{ color: NEU }} />
                <h2 className="font-display font-bold" style={{ color: NEU }}>
                  Decision Engine
                </h2>
                {pendingCount > 0 && (
                  <Badge
                    style={{
                      background: `${NEU}22`,
                      borderColor: `${NEU}66`,
                      color: NEU,
                    }}
                    className="text-[10px] h-4 px-1.5"
                  >
                    {pendingCount} pending
                  </Badge>
                )}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground h-7"
                onClick={() => setHistoryOpen((h) => !h)}
                data-ocid="twin-life.history_toggle"
              >
                {historyOpen ? "Hide history" : "View history"}
              </Button>
            </div>
            <AnimatePresence mode="popLayout">
              {decisions
                .filter((d) => historyOpen || d.status === "pending")
                .map((d) => (
                  <DecisionCard
                    key={d.id}
                    d={d}
                    autonomy={autonomy}
                    onApprove={handleApprove}
                    onOverride={handleOverride}
                  />
                ))}
            </AnimatePresence>
            {!historyOpen && pendingCount === 0 && (
              <div
                className="text-center py-8"
                data-ocid="twin-life.decisions_empty_state"
              >
                <CheckCircle2
                  className="w-9 h-9 mx-auto mb-2"
                  style={{ color: "oklch(0.72 0.24 140)" }}
                />
                <p className="text-sm text-muted-foreground">
                  All decisions handled — Twin is running smoothly
                </p>
              </div>
            )}
          </section>

          {/* Smart Devices */}
          <section
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}33`,
              backdropFilter: "blur(16px)",
            }}
            data-ocid="twin-life.devices_section"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4" style={{ color: NEU }} />
              <h2 className="font-display font-bold" style={{ color: NEU }}>
                Smart Device Ecosystem
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {devices.map((dev, i) => (
                <div
                  key={dev.id}
                  className="rounded-xl p-4 transition-opacity duration-300"
                  style={{
                    background: "oklch(0.12 0.01 190 / 0.7)",
                    border: `1.5px solid ${dev.connected ? `${NEU}44` : "oklch(0.3 0 0 / 0.4)"}`,
                    backdropFilter: "blur(8px)",
                    opacity: dev.connected ? 1 : 0.6,
                  }}
                  data-ocid={`twin-life.device.${i + 1}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          color: dev.connected ? NEU : "oklch(0.4 0 0)",
                        }}
                      >
                        {dev.icon}
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        {dev.name}
                      </span>
                    </div>
                    <SyncDot status={dev.status} />
                  </div>
                  {dev.connected && (
                    <div className="mb-3">
                      <p
                        className="text-lg font-bold font-mono"
                        style={{ color: NEU }}
                      >
                        {dev.metric}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-mono">
                        {dev.metricLabel}
                      </p>
                    </div>
                  )}
                  <Button
                    type="button"
                    size="sm"
                    className="w-full h-7 text-xs"
                    style={{
                      background: dev.connected
                        ? "oklch(0.65 0.25 20 / 0.15)"
                        : `${NEU}22`,
                      border: `1px solid ${dev.connected ? "oklch(0.65 0.25 20 / 0.6)" : `${NEU}66`}`,
                      color: dev.connected ? "oklch(0.65 0.25 20)" : NEU,
                    }}
                    onClick={() => toggleDevice(dev.id)}
                    data-ocid={`twin-life.device_toggle.${i + 1}`}
                  >
                    {dev.connected ? (
                      <>
                        <WifiOff className="w-3 h-3 mr-1" />
                        Disconnect
                      </>
                    ) : (
                      <>
                        <Wifi className="w-3 h-3 mr-1" />
                        Connect
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5">
          {/* Twin Identity */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}66`,
              backdropFilter: "blur(16px)",
              boxShadow: `0 0 32px ${NEU}18`,
            }}
            data-ocid="twin-life.twin_identity_card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${NEU}55, ${NEU}22)`,
                  border: `2px solid ${NEU}bb`,
                  boxShadow: `0 0 24px ${NEU}66, inset 0 0 20px ${NEU}1a`,
                  animation: "automation-node-pulse 3s ease-in-out infinite",
                }}
              >
                <Brain className="w-6 h-6" style={{ color: NEU }} />
              </div>
              <div>
                <p
                  className="font-display font-bold"
                  style={{ color: "oklch(0.9 0.02 190)" }}
                >
                  Your Twin
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Neural ID: TW-4821
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "oklch(0.72 0.24 140)",
                      boxShadow: "0 0 6px oklch(0.72 0.24 140)",
                      animation: "sync-pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="text-[10px] font-mono"
                    style={{ color: "oklch(0.72 0.24 140)" }}
                  >
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Personality */}
            <div className="mb-4">
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-2">
                Personality Mode
              </p>
              <div className="grid grid-cols-2 gap-2">
                {PERSONALITIES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPersonality(p.id)}
                    className="rounded-lg p-2.5 text-left transition-all duration-200"
                    style={{
                      background:
                        personality === p.id
                          ? `${NEU}22`
                          : "oklch(0.12 0.01 0 / 0.5)",
                      border: `1.5px solid ${personality === p.id ? `${NEU}cc` : `${NEU}22`}`,
                      boxShadow:
                        personality === p.id ? `0 0 14px ${NEU}44` : "none",
                    }}
                    data-ocid={`twin-life.personality.${p.id}`}
                  >
                    <div className="text-base mb-0.5">{p.emoji}</div>
                    <div
                      className="text-xs font-bold"
                      style={{
                        color: personality === p.id ? NEU : "oklch(0.65 0 0)",
                      }}
                    >
                      {p.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight">
                      {p.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-2 pt-3"
              style={{ borderTop: `1px solid ${NEU}22` }}
            >
              {[
                { label: "Decisions", value: "247" },
                { label: "Accuracy", value: "94%" },
                { label: "Time Saved", value: "3.2h" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="text-base font-bold font-mono"
                    style={{ color: NEU }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Activity Feed */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}33`,
              backdropFilter: "blur(16px)",
            }}
            data-ocid="twin-life.activity_feed"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" style={{ color: NEU }} />
                <h3
                  className="font-display font-bold text-sm"
                  style={{ color: NEU }}
                >
                  Neural Activity
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "oklch(0.72 0.24 140)",
                    animation: "sync-pulse 1.5s ease-in-out infinite",
                  }}
                />
                <span className="text-[10px] font-mono text-muted-foreground">
                  LIVE
                </span>
              </div>
            </div>
            <div
              ref={feedRef}
              className="max-h-72 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              <ActivityFeed items={feed} />
            </div>
          </div>

          {/* Decision Log */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: CARD,
              border: `1.5px solid ${NEU}22`,
              backdropFilter: "blur(16px)",
            }}
            data-ocid="twin-life.history_section"
          >
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4" style={{ color: NEU }} />
              <h3
                className="font-display font-bold text-sm"
                style={{ color: NEU }}
              >
                Decision Log
              </h3>
            </div>
            <div className="space-y-2">
              {decisions
                .filter((d) => d.status !== "pending")
                .slice(0, 4)
                .map((d, i) => (
                  <div
                    key={d.id}
                    className="flex items-center gap-3 p-2.5 rounded-lg"
                    style={{
                      background: "oklch(0.12 0.01 0 / 0.5)",
                      border: `1px solid ${NEU}18`,
                    }}
                    data-ocid={`twin-life.log.${i + 1}`}
                  >
                    <span style={{ color: AREA_COLORS[d.area] }}>
                      {AREA_ICONS[d.area]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground truncate">
                        {d.action}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        {d.timestamp}
                      </p>
                    </div>
                    {d.status === "approve" ? (
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.72 0.24 140)" }}
                      />
                    ) : d.status === "override" ? (
                      <XCircle
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.65 0.25 20)" }}
                      />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 opacity-40" />
                    )}
                  </div>
                ))}
              {decisions.filter((d) => d.status !== "pending").length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">
                  No completed decisions yet
                </p>
              )}
            </div>
          </div>

          {/* Safety Layer */}
          <div
            className="rounded-xl p-4"
            style={{
              background: "oklch(0.1 0.01 190 / 0.6)",
              border: "1px solid oklch(0.72 0.24 140 / 0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield
                className="w-3.5 h-3.5"
                style={{ color: "oklch(0.72 0.24 140)" }}
              />
              <span
                className="text-xs font-bold"
                style={{ color: "oklch(0.72 0.24 140)" }}
              >
                Safety Layer Active
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              All autonomous decisions are reversible within 24h. Your Twin
              never shares personal data externally. Override at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
