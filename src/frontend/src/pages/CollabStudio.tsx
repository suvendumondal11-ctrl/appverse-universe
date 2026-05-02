import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CollabMessage, CollabParticipant, CollabSession } from "@/types";
import { generateSessionCode } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Check,
  Copy,
  Globe,
  LogOut,
  Play,
  RefreshCw,
  Send,
  Share2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────
const MOCK_PARTICIPANTS: CollabParticipant[] = [
  {
    id: "p1",
    name: "Aria",
    avatarEmoji: "🦋",
    isActive: true,
    joinedAt: new Date(),
  },
  {
    id: "p2",
    name: "Kai",
    avatarEmoji: "🔥",
    isActive: true,
    joinedAt: new Date(),
  },
  {
    id: "p3",
    name: "Zoe",
    avatarEmoji: "⚡",
    isActive: false,
    joinedAt: new Date(),
  },
  {
    id: "p4",
    name: "Neo",
    avatarEmoji: "🚀",
    isActive: true,
    joinedAt: new Date(),
  },
];

const SEED_MESSAGES: CollabMessage[] = [
  {
    id: "m1",
    senderId: "p1",
    senderName: "Aria",
    text: "Let's build a fitness app that rewards streaks with crypto! 💪",
    timestamp: new Date(Date.now() - 4 * 60000),
    reaction: null,
  },
  {
    id: "m2",
    senderId: "p2",
    senderName: "Kai",
    text: "Love that! Add a leaderboard and social challenges — instant viral 🔥",
    timestamp: new Date(Date.now() - 2 * 60000),
    reaction: null,
  },
  {
    id: "m3",
    senderId: "p3",
    senderName: "Zoe",
    text: "What if AI generates your personalized workout plan based on mood? 🧠",
    timestamp: new Date(Date.now() - 60000),
    reaction: null,
  },
];

const ACTIVITY_POOL = [
  "Aria added a new feature",
  "Kai liked the idea",
  "AI suggested: Dark mode toggle",
  "Neo joined the session",
  "AI suggested: Push notifications",
  "Zoe added: Onboarding flow",
  "Kai suggested: Social sharing",
  "AI suggested: Gamification rewards",
  "Aria approved the design direction",
  "AI suggested: Analytics dashboard",
];

const AI_SUGGESTION_CHIPS = [
  "🏋️ Daily challenges",
  "🏆 Global leaderboard",
  "🤖 AI coach",
  "💎 Crypto rewards",
  "📊 Progress tracker",
  "👥 Friend battles",
  "🎵 Motivation beats",
  "🧬 Habit science",
];

const MOCK_SESSION_CODES = ["DREAM7", "VIBE9X", "BUILD4"];
const RECENT_SESSIONS = MOCK_SESSION_CODES;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function fmtDuration(secs: number): string {
  const m = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// ─── Landing / Create-Join view ────────────────────────────────────────────────
function LandingView({
  onStart,
}: { onStart: (session: CollabSession) => void }) {
  const [generatedCode, setGeneratedCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    setGeneratedCode(generateSessionCode());
  }

  function handleCopy() {
    if (!generatedCode) return;
    navigator.clipboard.writeText(generatedCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function startSession(code: string) {
    onStart({
      sessionCode: code,
      hostName: "You",
      participants: MOCK_PARTICIPANTS,
      messages: SEED_MESSAGES,
      sharedPrompt: "",
      status: "active",
    });
  }

  return (
    <div className="py-10 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            <Globe className="w-4 h-4" />
            Shared Dream World
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)))",
                backgroundSize: "200% 200%",
                animation: "shimmer 6s ease-in-out infinite",
              }}
            >
              Create Together,
            </span>
            <br />
            <span className="text-foreground">In Real Time.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Enter the same digital space with your crew — share ideas, build
            apps, and watch imagination become reality&nbsp;instantly.
          </p>
        </motion.div>
      </div>

      {/* Two action cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Create card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-glow rounded-2xl p-8 flex flex-col gap-5"
          data-ocid="collab.create_card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Create a Dream Session
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Spark a new collaborative universe. Share the code and build
            together.
          </p>

          {generatedCode ? (
            <div className="space-y-3">
              <div
                className="flex items-center justify-center rounded-xl border-2 border-primary/30 bg-primary/5 px-6 py-5"
                data-ocid="collab.session_code_box"
              >
                <span className="font-mono text-3xl font-black tracking-[0.3em] text-primary">
                  {generatedCode}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={handleCopy}
                  data-ocid="collab.copy_code_button"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
                <Button
                  className="flex-1 gap-2 gradient-hologram text-white font-semibold"
                  onClick={() => startSession(generatedCode)}
                  data-ocid="collab.start_session_button"
                >
                  <Play className="w-4 h-4" />
                  Start Session
                </Button>
              </div>
            </div>
          ) : (
            <Button
              className="w-full gradient-hologram text-white font-semibold gap-2"
              size="lg"
              onClick={handleGenerate}
              data-ocid="collab.generate_code_button"
            >
              <Sparkles className="w-4 h-4" />
              Generate Session Code
            </Button>
          )}
        </motion.div>

        {/* Join card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-glow-accent rounded-2xl p-8 flex flex-col gap-5"
          data-ocid="collab.join_card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Join a Dream Session
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Got a code? Jump straight into your crew's creative universe.
          </p>

          <div className="flex gap-2">
            <Input
              placeholder="Enter session code…"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="font-mono tracking-widest text-center text-lg uppercase"
              data-ocid="collab.join_code_input"
            />
            <Button
              onClick={() => joinCode.length >= 4 && startSession(joinCode)}
              disabled={joinCode.length < 4}
              className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/80"
              data-ocid="collab.join_button"
            >
              Join Now
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              Recent sessions
            </p>
            <div className="flex flex-wrap gap-2">
              {RECENT_SESSIONS.map((code) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => startSession(code)}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-muted border border-border hover:border-accent/50 hover:bg-accent/5 transition-smooth text-foreground font-semibold tracking-widest"
                  data-ocid={`collab.recent_session.${code}`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-center font-display text-xl font-bold text-foreground mb-8">
          How It Works
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: "✨",
              step: "1",
              title: "Create Session",
              desc: "Generate a unique code and open your Dream Space in seconds.",
            },
            {
              icon: "📤",
              step: "2",
              title: "Share Your Code",
              desc: "Send the code to your crew — they join from anywhere on Earth.",
            },
            {
              icon: "🚀",
              step: "3",
              title: "Build Together",
              desc: "Ideate, type, and watch AI build your app in real time, together.",
            },
          ].map(({ icon, step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl glass flex items-center justify-center text-2xl shadow-sm">
                {icon}
              </div>
              <div className="w-6 h-6 mx-auto rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                {step}
              </div>
              <h4 className="font-display font-semibold text-foreground">
                {title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass rounded-2xl px-8 py-5 grid grid-cols-3 divide-x divide-border/50">
          {[
            { value: "2,847", label: "dream sessions created" },
            { value: "12,331", label: "co-built apps" },
            { value: "48", label: "countries" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <div className="font-display text-2xl font-black text-primary">
                {value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Active Collaboration Canvas ───────────────────────────────────────────────
function ActiveCanvas({
  session,
  onLeave,
}: {
  session: CollabSession;
  onLeave: () => void;
}) {
  const navigate = useNavigate();
  const [sharedPrompt, setSharedPrompt] = useState(session.sharedPrompt);
  const [messages, setMessages] = useState<CollabMessage[]>(session.messages);
  const [chatInput, setChatInput] = useState("");
  const [activity, setActivity] = useState<{ id: string; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [elapsedSecs, setElapsedSecs] = useState(0);
  const [reactions, setReactions] = useState<Record<string, string[]>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [activeChips, setActiveChips] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const activityIdx = useRef(0);

  function handleBuildTogether() {
    toast.success("Launching shared idea into Builder...");
    void navigate({ to: "/builder/$id", params: { id: "new" } });
  }

  // Timer
  useEffect(() => {
    const id = setInterval(() => setElapsedSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Simulated activity feed (every 3s)
  useEffect(() => {
    const id = setInterval(() => {
      const msg = ACTIVITY_POOL[activityIdx.current % ACTIVITY_POOL.length];
      activityIdx.current += 1;
      setActivity((prev) => [
        ...prev.slice(-4),
        { id: `act-${Date.now()}`, text: msg },
      ]);

      // Occasionally show typing indicator
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1400);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  function sendMessage() {
    if (!chatInput.trim()) return;
    const msg: CollabMessage = {
      id: `msg-${Date.now()}`,
      senderId: "me",
      senderName: "You",
      text: chatInput.trim(),
      timestamp: new Date(),
      reaction: null,
    };
    setMessages((prev) => [...prev, msg]);
    setChatInput("");
  }

  function toggleReaction(msgId: string, emoji: string) {
    setReactions((prev) => {
      const cur = prev[msgId] ?? [];
      const has = cur.includes(emoji);
      return {
        ...prev,
        [msgId]: has ? cur.filter((e) => e !== emoji) : [...cur, emoji],
      };
    });
  }

  function toggleChip(chip: string) {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip],
    );
    if (!sharedPrompt.includes(chip.split(" ").slice(1).join(" "))) {
      setSharedPrompt((p) =>
        p
          ? `${p}, ${chip.split(" ").slice(1).join(" ")}`
          : chip.split(" ").slice(1).join(" "),
      );
    }
  }

  if (showSummary) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-glow rounded-3xl p-10 max-w-md w-full text-center space-y-6"
          data-ocid="collab.session_summary"
        >
          <div className="text-5xl">🎉</div>
          <h2 className="font-display text-2xl font-black text-foreground">
            Dream Session Complete!
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "👥",
                val: session.participants.length,
                label: "Collaborators",
              },
              { icon: "💡", val: "12", label: "Ideas Contributed" },
              { icon: "📱", val: "1", label: "App Co-Created" },
              { icon: "⚡", val: "+250 XP", label: "XP Earned" },
            ].map(({ icon, val, label }) => (
              <div key={label} className="glass rounded-xl p-4">
                <div className="text-xl mb-1">{icon}</div>
                <div className="font-display text-xl font-bold text-primary">
                  {val}
                </div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setShowSummary(false)}
              data-ocid="collab.rejoin_button"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Rejoin
            </Button>
            <Button
              className="flex-1 gradient-hologram text-white"
              onClick={onLeave}
              data-ocid="collab.new_session_button"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Start New Session
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-130px)] min-h-[600px]">
      {/* Top bar */}
      <div className="glass border-b border-border/40 px-4 py-3 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
            Live
          </span>
        </div>
        <div
          className="font-mono text-sm font-bold px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary tracking-[0.2em]"
          data-ocid="collab.session_code_badge"
        >
          {session.sessionCode}
        </div>

        {/* Participants */}
        <div
          className="flex -space-x-2 ml-1"
          data-ocid="collab.participants_row"
        >
          {session.participants.map((p) => (
            <div
              key={p.id}
              title={p.name}
              className="relative w-8 h-8 rounded-full glass border-2 border-background flex items-center justify-center text-sm"
            >
              {p.avatarEmoji}
              {p.isActive && (
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background" />
              )}
            </div>
          ))}
        </div>

        <Button
          size="sm"
          variant="destructive"
          className="ml-auto gap-1.5 text-xs"
          onClick={() => setShowSummary(true)}
          data-ocid="collab.leave_session_button"
        >
          <LogOut className="w-3.5 h-3.5" />
          Leave Session
        </Button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden gap-0">
        {/* Left: Canvas 65% */}
        <div className="flex-[65] flex flex-col overflow-hidden border-r border-border/40 p-5 gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Shared Idea Canvas
            </h2>
            <p className="text-xs text-muted-foreground">
              Everyone in this session sees and builds on this idea together.
            </p>
          </div>

          {/* Shared prompt textarea */}
          <div className="relative flex-1 min-h-[160px]">
            <textarea
              value={sharedPrompt}
              onChange={(e) => setSharedPrompt(e.target.value)}
              placeholder="Describe your dream app… AI will help you build it with your crew 🚀"
              className="w-full h-full min-h-[160px] resize-none rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
              data-ocid="collab.shared_prompt_textarea"
            />
            {isTyping && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full bg-primary/60 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </span>
                Kai is typing…
              </div>
            )}
          </div>

          {/* AI suggestion chips */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium">
              AI suggestions — tap to add:
            </p>
            <div className="flex flex-wrap gap-2">
              {AI_SUGGESTION_CHIPS.map((chip) => (
                <button
                  type="button"
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-smooth ${
                    activeChips.includes(chip)
                      ? "bg-primary/15 border-primary/50 text-primary font-semibold"
                      : "bg-muted/60 border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                  data-ocid={`collab.ai_chip.${chip.replace(/[^a-z0-9]/gi, "_").toLowerCase()}`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Build together button */}
          <Button
            className="w-full gradient-hologram text-white font-semibold text-base py-5 gap-2"
            size="lg"
            data-ocid="collab.build_together_button"
            onClick={handleBuildTogether}
          >
            <Zap className="w-5 h-5" />
            Building Together — Launch to Reality
          </Button>

          {/* Activity feed */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Live Activity
            </p>
            <div className="space-y-1.5 min-h-[100px]">
              <AnimatePresence mode="popLayout">
                {activity.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {item.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              {activity.length === 0 && (
                <p className="text-xs text-muted-foreground italic">
                  Waiting for collaborators…
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Chat 35% */}
        <div className="flex-[35] flex flex-col overflow-hidden bg-card/30">
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-border/40 flex items-center justify-between">
            <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
              Dream Chat
            </h3>
            <Badge variant="secondary" className="text-xs gap-1">
              <Users className="w-3 h-3" />
              {session.participants.length}
            </Badge>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-4" data-ocid="collab.chat_messages">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1"
                    data-ocid={`collab.message.${idx + 1}`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full glass flex items-center justify-center text-sm shrink-0">
                        {session.participants.find((p) => p.id === msg.senderId)
                          ?.avatarEmoji ?? "👤"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-xs font-semibold text-foreground">
                            {msg.senderName}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed break-words">
                          {msg.text}
                        </p>
                      </div>
                    </div>

                    {/* Emoji reactions */}
                    <div className="flex gap-1 pl-9">
                      {["👍", "❤️", "🔥", "🎉"].map((emoji) => {
                        const active = (reactions[msg.id] ?? []).includes(
                          emoji,
                        );
                        return (
                          <button
                            type="button"
                            key={emoji}
                            onClick={() => toggleReaction(msg.id, emoji)}
                            className={`text-xs px-1.5 py-0.5 rounded-md border transition-smooth ${
                              active
                                ? "bg-primary/10 border-primary/30 scale-110"
                                : "bg-muted/40 border-border/30 hover:bg-muted text-muted-foreground"
                            }`}
                            data-ocid={`collab.reaction.${idx + 1}.${emoji}`}
                          >
                            {emoji}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={chatEndRef} />
            </div>
          </ScrollArea>

          {/* Chat input */}
          <div className="px-3 py-3 border-t border-border/40 flex gap-2">
            <Input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Share an idea…"
              className="text-sm"
              data-ocid="collab.chat_input"
            />
            <Button
              size="sm"
              onClick={sendMessage}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-3"
              data-ocid="collab.send_message_button"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="glass border-t border-border/40 px-4 py-3 flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-foreground shrink-0">
            Now Building:
          </span>
          <span className="truncate text-primary">
            {sharedPrompt || "Waiting for your idea…"}
          </span>
        </div>
        <div className="flex items-center gap-1 ml-auto shrink-0">
          <Users className="w-3.5 h-3.5" />
          {session.participants.filter((p) => p.isActive).length} active
        </div>
        <div className="font-mono shrink-0 text-primary font-semibold">
          {fmtDuration(elapsedSecs)}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CollabStudio() {
  const [activeSession, setActiveSession] = useState<CollabSession | null>(
    null,
  );

  return (
    <Layout fluid={!!activeSession}>
      <AnimatePresence mode="wait">
        {activeSession ? (
          <motion.div
            key="canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveCanvas
              session={activeSession}
              onLeave={() => setActiveSession(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingView onStart={setActiveSession} />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
