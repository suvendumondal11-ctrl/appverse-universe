import { Layout } from "@/components/layout/Layout";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { HolographicText } from "@/components/ui/HolographicText";
import { useGetProfile, useUpdateDisplayName } from "@/hooks/useBackend";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";
import {
  AlertTriangle,
  Bell,
  Bot,
  Check,
  ChevronRight,
  Cpu,
  Globe,
  Info,
  Layers,
  type LucideProps,
  Moon,
  Palette,
  Settings2,
  Sparkles,
  Sun,
  User,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const TABS = ["Profile", "Appearance", "Preferences", "About"] as const;
type TabId = (typeof TABS)[number];

const ACCENT_PRESETS = [
  { id: "cyan", label: "Cyan", color: "oklch(0.72 0.22 200)" },
  { id: "purple", label: "Purple", color: "oklch(0.72 0.22 262)" },
  { id: "orange", label: "Orange", color: "oklch(0.75 0.28 50)" },
  { id: "green", label: "Green", color: "oklch(0.72 0.22 140)" },
  { id: "red", label: "Red", color: "oklch(0.65 0.25 20)" },
  { id: "pink", label: "Pink", color: "oklch(0.70 0.24 330)" },
] as const;
type AccentId = (typeof ACCENT_PRESETS)[number]["id"];

const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Portuguese",
  "Chinese (Simplified)",
];

const AI_MODES = [
  {
    id: "aggressive" as const,
    label: "Aggressive",
    desc: "Suggest features constantly, anticipate needs",
  },
  {
    id: "balanced" as const,
    label: "Balanced",
    desc: "Smart suggestions at key moments",
  },
  {
    id: "minimal" as const,
    label: "Minimal",
    desc: "Only suggest when explicitly asked",
  },
];
type AiMode = (typeof AI_MODES)[number]["id"];

const TWIN_MOODS = ["Bold", "Playful", "Experimental", "Professional"] as const;
type TwinMood = (typeof TWIN_MOODS)[number];

const TWIN_FREQUENCIES = ["6h", "12h", "24h"] as const;
type TwinFrequency = (typeof TWIN_FREQUENCIES)[number];

const ROADMAP_ITEMS = [
  {
    emoji: "🧠",
    title: "Thought-to-App",
    desc: "Predict what you want to build before you type",
  },
  {
    emoji: "🥽",
    title: "AR/VR Preview",
    desc: "View your app in 3D space with gesture controls",
  },
  {
    emoji: "🤖",
    title: "AI Co-Founder",
    desc: "Business model + pricing + marketing strategy",
  },
  {
    emoji: "🌍",
    title: "Global Deploy",
    desc: "One-click publish to Android, iOS & Web",
  },
];

// ─── Settings Persistence ─────────────────────────────────────────────────────

function loadPrefs(): Record<string, unknown> {
  try {
    const raw = localStorage.getItem("neuralforge-prefs");
    return raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

function savePrefs(data: Record<string, unknown>) {
  localStorage.setItem("neuralforge-prefs", JSON.stringify(data));
}

// ─── Shared: Section Header ───────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.FC<LucideProps>;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground text-sm">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ─── Shared: Toggle Switch ────────────────────────────────────────────────────

function ToggleSwitch({
  checked,
  onChange,
  large = false,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0",
        large ? "h-8 w-16" : "h-5 w-9",
        checked
          ? "bg-primary shadow-[0_0_12px_oklch(var(--primary)/0.5)]"
          : "bg-muted border border-border/40",
      )}
    >
      <span
        className={cn(
          "absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
          large ? "h-6 w-6" : "h-3.5 w-3.5",
          checked
            ? large
              ? "translate-x-9"
              : "translate-x-4"
            : large
              ? "translate-x-1"
              : "translate-x-1",
          checked ? "bg-primary-foreground" : "bg-foreground",
        )}
      />
    </button>
  );
}

// ─── Shared: Notification Row ─────────────────────────────────────────────────

function NotifRow({
  label,
  desc,
  value,
  onChange,
}: {
  label: string;
  desc: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border/15 last:border-0">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <ToggleSwitch checked={value} onChange={onChange} />
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────────────────────────

function DeleteModal({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-ocid="delete_modal.dialog"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            role="button"
            tabIndex={-1}
            aria-label="Close modal"
            onClick={onClose}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
          />
          <motion.div
            className="relative z-10 w-full max-w-sm"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <GlassCard variant="glow" padding="lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-destructive/15 border border-destructive/30">
                  <AlertTriangle size={24} className="text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Delete All Projects?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This action is permanent and cannot be undone. All your
                    projects, configurations and build history will be erased.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <GlassButton
                    variant="secondary"
                    className="flex-1"
                    onClick={onClose}
                    data-ocid="delete_modal.cancel_button"
                  >
                    Cancel
                  </GlassButton>
                  <button
                    type="button"
                    className="flex-1 h-10 rounded-lg bg-destructive/90 text-destructive-foreground border border-destructive/50 text-sm font-medium transition-smooth hover:bg-destructive hover:shadow-[0_0_16px_oklch(var(--destructive)/0.4)]"
                    onClick={onConfirm}
                    data-ocid="delete_modal.confirm_button"
                  >
                    Delete All
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Profile Tab ──────────────────────────────────────────────────────────────

interface ProfileData {
  displayName: string;
  userId: { toString(): string };
  createdAt: bigint;
  totalProjects: bigint;
}

function ProfileTab({
  profileData,
  isFetching,
}: {
  profileData?: ProfileData;
  isFetching: boolean;
}) {
  const updateName = useUpdateDisplayName();
  const [displayName, setDisplayName] = useState("");
  const [saved, setSaved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (profileData?.displayName) setDisplayName(profileData.displayName);
  }, [profileData?.displayName]);

  async function handleSaveName() {
    if (!displayName.trim()) return;
    await updateName.mutateAsync(displayName.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const principalStr = profileData?.userId?.toString() ?? "—";
  const shortPrincipal =
    principalStr.length > 20
      ? `${principalStr.slice(0, 10)}...${principalStr.slice(-8)}`
      : principalStr;

  const memberSince = profileData?.createdAt
    ? new Date(Number(profileData.createdAt) / 1_000_000).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      )
    : "—";

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar + display name */}
      <GlassCard variant="elevated">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-14 w-14 rounded-2xl bg-primary/15 border-2 border-primary/30 flex items-center justify-center shrink-0">
            <span className="text-2xl font-display font-bold text-primary">
              {isFetching ? "…" : (displayName[0] ?? "N").toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-display font-semibold text-base text-foreground">
              {isFetching ? "Loading…" : displayName || "NeuralForge User"}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {profileData?.totalProjects !== undefined
                ? `${profileData.totalProjects} projects`
                : "Builder"}
            </p>
          </div>
        </div>

        <SectionHeader
          icon={User}
          title="Display Name"
          subtitle="Stored on the Internet Computer — visible to collaborators"
        />
        <div className="flex gap-3 items-center">
          <input
            ref={inputRef}
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
            placeholder="Your display name"
            className="flex-1 h-10 px-3 rounded-lg bg-muted/50 border border-border/40 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            data-ocid="profile.display_name.input"
          />
          <GlassButton
            variant={saved ? "accent" : "primary"}
            size="md"
            onClick={handleSaveName}
            loading={updateName.isPending}
            data-ocid="profile.save_name.button"
          >
            {saved ? (
              <>
                <Check size={14} /> Saved
              </>
            ) : (
              "Save"
            )}
          </GlassButton>
        </div>

        <AnimatePresence>
          {saved && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-xs text-primary flex items-center gap-1"
              data-ocid="profile.save_name.success_state"
            >
              <Check size={10} /> Name updated successfully
            </motion.p>
          )}
        </AnimatePresence>
      </GlassCard>

      {/* Account info */}
      <GlassCard variant="default">
        <SectionHeader icon={Cpu} title="Account Info" />
        <div className="space-y-0">
          {[
            {
              label: "Internet Identity",
              value: (
                <span
                  className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-md"
                  title={principalStr}
                >
                  {isFetching ? "Loading…" : shortPrincipal}
                </span>
              ),
            },
            {
              label: "Member since",
              value: isFetching ? "—" : memberSince,
            },
            {
              label: "Total projects",
              value: isFetching
                ? "—"
                : String(profileData?.totalProjects ?? 0n),
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between py-3 border-b border-border/15 last:border-0"
            >
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-medium text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Appearance Tab ───────────────────────────────────────────────────────────

function AppearanceTab() {
  const { theme, setTheme } = useThemeStore();
  const prefs = loadPrefs();
  const [accent, setAccent] = useState<AccentId>(
    (prefs.accent as AccentId) ?? "purple",
  );
  const [fontSize, setFontSize] = useState<number>(
    (prefs.fontSize as number) ?? 14,
  );

  function handleAccent(id: AccentId) {
    setAccent(id);
    savePrefs({ ...loadPrefs(), accent: id });
  }

  function handleFontSize(val: number) {
    setFontSize(val);
    savePrefs({ ...loadPrefs(), fontSize: val });
    document.documentElement.style.fontSize = `${val}px`;
  }

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Theme toggle */}
      <GlassCard variant="elevated">
        <SectionHeader
          icon={Moon}
          title="Theme"
          subtitle="Switch between dark and light interfaces"
        />
        <div className="flex items-center gap-6">
          <Sun
            size={18}
            className={cn(
              "transition-colors",
              theme === "light" ? "text-accent" : "text-muted-foreground",
            )}
          />
          <ToggleSwitch
            large
            checked={theme === "dark"}
            onChange={(isDark) => setTheme(isDark ? "dark" : "light")}
            data-ocid="appearance.theme.toggle"
          />
          <Moon
            size={18}
            className={cn(
              "transition-colors",
              theme === "dark" ? "text-primary" : "text-muted-foreground",
            )}
          />
          <span className="text-sm text-muted-foreground">
            Currently:{" "}
            <span className="text-foreground font-medium capitalize">
              {theme} mode
            </span>
          </span>
        </div>
      </GlassCard>

      {/* Accent color */}
      <GlassCard variant="default">
        <SectionHeader
          icon={Palette}
          title="Accent Color"
          subtitle="Personalise your interface palette"
        />
        <div className="flex flex-wrap gap-3">
          {ACCENT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              title={preset.label}
              onClick={() => handleAccent(preset.id)}
              className={cn(
                "relative h-9 w-9 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                accent === preset.id &&
                  "ring-2 ring-offset-2 ring-foreground/50 scale-110",
              )}
              style={{ background: preset.color }}
              data-ocid={`appearance.accent_color.${preset.id}`}
            >
              {accent === preset.id && (
                <Check
                  size={14}
                  className="absolute inset-0 m-auto text-background drop-shadow"
                />
              )}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Selected:{" "}
          <span className="text-foreground font-medium capitalize">
            {accent}
          </span>
        </p>
      </GlassCard>

      {/* Font size */}
      <GlassCard variant="default">
        <SectionHeader
          icon={Settings2}
          title="Font Size"
          subtitle="Base text size for the interface"
        />
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-6">12</span>
            <input
              type="range"
              min={12}
              max={18}
              step={1}
              value={fontSize}
              onChange={(e) => handleFontSize(Number(e.target.value))}
              className="flex-1 h-2 rounded-full accent-primary cursor-pointer"
              data-ocid="appearance.font_size.input"
            />
            <span className="text-xs text-muted-foreground w-6">18</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Current size:{" "}
            <span className="text-foreground font-medium">{fontSize}px</span>
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Preferences Tab ──────────────────────────────────────────────────────────

interface NotifState {
  buildComplete: boolean;
  aiSuggestions: boolean;
  teamActivity: boolean;
  deployAlerts: boolean;
  weeklyDigest: boolean;
}

function PreferencesTab() {
  const prefs = loadPrefs();
  const [notifs, setNotifs] = useState<NotifState>({
    buildComplete: (prefs.notif_buildComplete as boolean) ?? true,
    aiSuggestions: (prefs.notif_aiSuggestions as boolean) ?? true,
    teamActivity: (prefs.notif_teamActivity as boolean) ?? false,
    deployAlerts: (prefs.notif_deployAlerts as boolean) ?? true,
    weeklyDigest: (prefs.notif_weeklyDigest as boolean) ?? false,
  });
  const [aiMode, setAiMode] = useState<AiMode>(
    (prefs.aiMode as AiMode) ?? "balanced",
  );
  const [language, setLanguage] = useState<string>(
    (prefs.language as string) ?? "English",
  );
  const [twinAutoGen, setTwinAutoGen] = useState<boolean>(
    (prefs.twin_autoGen as boolean) ?? true,
  );
  const [twinFrequency, setTwinFrequency] = useState<TwinFrequency>(
    (prefs.twin_frequency as TwinFrequency) ?? "12h",
  );
  const [twinMoods, setTwinMoods] = useState<TwinMood[]>(
    (prefs.twin_moods as TwinMood[]) ?? ["Playful", "Experimental"],
  );

  function updateNotif(key: keyof NotifState, val: boolean) {
    const next = { ...notifs, [key]: val };
    setNotifs(next);
    savePrefs({ ...loadPrefs(), [`notif_${key}`]: val });
  }
  function handleAiMode(mode: AiMode) {
    setAiMode(mode);
    savePrefs({ ...loadPrefs(), aiMode: mode });
  }
  function handleLanguage(lang: string) {
    setLanguage(lang);
    savePrefs({ ...loadPrefs(), language: lang });
  }
  function handleTwinAutoGen(val: boolean) {
    setTwinAutoGen(val);
    savePrefs({ ...loadPrefs(), twin_autoGen: val });
  }
  function handleTwinFrequency(freq: TwinFrequency) {
    setTwinFrequency(freq);
    savePrefs({ ...loadPrefs(), twin_frequency: freq });
  }
  function toggleTwinMood(mood: TwinMood) {
    const next = twinMoods.includes(mood)
      ? twinMoods.filter((m) => m !== mood)
      : [...twinMoods, mood];
    setTwinMoods(next);
    savePrefs({ ...loadPrefs(), twin_moods: next });
  }

  const MOOD_COLORS: Record<TwinMood, string> = {
    Bold: "oklch(var(--twin-visionary))",
    Playful: "oklch(var(--twin-dreamer))",
    Experimental: "oklch(var(--twin-hacker))",
    Professional: "oklch(var(--twin-artist))",
  };

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Notifications */}
      <GlassCard variant="elevated">
        <SectionHeader
          icon={Bell}
          title="Notifications"
          subtitle="Control how NeuralForge communicates with you"
        />
        <NotifRow
          label="Build Complete"
          desc="Notify when your app finishes building"
          value={notifs.buildComplete}
          onChange={(v) => updateNotif("buildComplete", v)}
        />
        <NotifRow
          label="AI Suggestions"
          desc="Get notified when AI has feature ideas"
          value={notifs.aiSuggestions}
          onChange={(v) => updateNotif("aiSuggestions", v)}
        />
        <NotifRow
          label="Team Activity"
          desc="Collaborator edits and comments"
          value={notifs.teamActivity}
          onChange={(v) => updateNotif("teamActivity", v)}
        />
        <NotifRow
          label="Deploy Alerts"
          desc="Status updates for live deployments"
          value={notifs.deployAlerts}
          onChange={(v) => updateNotif("deployAlerts", v)}
        />
        <NotifRow
          label="Weekly Digest"
          desc="Summary of your project activity"
          value={notifs.weeklyDigest}
          onChange={(v) => updateNotif("weeklyDigest", v)}
        />
      </GlassCard>

      {/* AI suggestions mode */}
      <GlassCard variant="default">
        <SectionHeader
          icon={Bot}
          title="AI Suggestions"
          subtitle="How proactively the AI co-pilot assists you"
        />
        <div className="space-y-2">
          {AI_MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => handleAiMode(mode.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-smooth border",
                aiMode === mode.id
                  ? "bg-primary/10 border-primary/30 shadow-[0_0_12px_oklch(var(--primary)/0.15)]"
                  : "bg-muted/50 border-border/40 hover:bg-muted/70",
              )}
              data-ocid={`preferences.ai_mode.${mode.id}`}
            >
              <div
                className={cn(
                  "h-4 w-4 rounded-full border-2 shrink-0 transition-smooth",
                  aiMode === mode.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground",
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {mode.label}
                </p>
                <p className="text-xs text-muted-foreground">{mode.desc}</p>
              </div>
              {aiMode === mode.id && (
                <Check size={14} className="text-primary shrink-0" />
              )}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Language */}
      <GlassCard variant="default">
        <SectionHeader
          icon={Globe}
          title="Language"
          subtitle="Interface display language"
        />
        <select
          value={language}
          onChange={(e) => handleLanguage(e.target.value)}
          className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          data-ocid="preferences.language.select"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </GlassCard>

      {/* Digital Twin Settings */}
      <GlassCard variant="glow" className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none rounded-xl opacity-[0.03]"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)))",
            backgroundSize: "300% 300%",
            animation: "shimmer 8s ease-in-out infinite",
          }}
        />
        <div className="relative">
          <SectionHeader
            icon={Cpu}
            title="Digital Twin"
            subtitle="Configure your AI-powered digital counterpart"
          />

          {/* Auto-generation toggle */}
          <div
            className="flex items-center justify-between gap-4 py-3.5 border-b border-border/15"
            data-ocid="preferences.twin_auto_gen.row"
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                Auto-Generation
              </p>
              <p className="text-xs text-muted-foreground">
                Twin automatically generates ideas on your behalf
              </p>
            </div>
            <ToggleSwitch checked={twinAutoGen} onChange={handleTwinAutoGen} />
          </div>

          {/* Frequency selector */}
          <AnimatePresence>
            {twinAutoGen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="py-3.5 border-b border-border/15 overflow-hidden"
                data-ocid="preferences.twin_frequency.row"
              >
                <p className="text-sm font-medium text-foreground mb-3">
                  Generation Frequency
                </p>
                <div className="flex gap-2">
                  {TWIN_FREQUENCIES.map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => handleTwinFrequency(freq)}
                      className={cn(
                        "flex-1 h-9 rounded-lg text-sm font-semibold transition-smooth border",
                        twinFrequency === freq
                          ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_10px_oklch(var(--primary)/0.2)]"
                          : "bg-muted/50 text-muted-foreground border-border/40 hover:bg-muted/70 hover:text-foreground",
                      )}
                      data-ocid={`preferences.twin_frequency.${freq.toLowerCase()}`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Twin generates new ideas every{" "}
                  <span className="text-foreground font-medium">
                    {twinFrequency}
                  </span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mood preferences multi-select */}
          <div className="pt-3.5" data-ocid="preferences.twin_moods.row">
            <p className="text-sm font-medium text-foreground mb-1">
              Mood Preferences
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Select the creative energy your Twin expresses
            </p>
            <div className="flex flex-wrap gap-2">
              {TWIN_MOODS.map((mood) => {
                const active = twinMoods.includes(mood);
                const color = MOOD_COLORS[mood];
                return (
                  <button
                    key={mood}
                    type="button"
                    onClick={() => toggleTwinMood(mood)}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold transition-smooth border"
                    style={{
                      background: active
                        ? `${color}15`
                        : "oklch(var(--muted) / 0.5)",
                      borderColor: active
                        ? `${color}60`
                        : "oklch(var(--border) / 0.4)",
                      color: active ? color : "oklch(var(--muted-foreground))",
                      boxShadow: active ? `0 0 10px ${color}25` : "none",
                    }}
                    data-ocid={`preferences.twin_mood.${mood.toLowerCase()}`}
                    aria-pressed={active}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {mood}
                  </button>
                );
              })}
            </div>
            {twinMoods.length === 0 && (
              <p className="text-xs text-muted-foreground/60 mt-2 italic">
                Select at least one mood for your Twin
              </p>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── About Tab ────────────────────────────────────────────────────────────────

function AboutTab() {
  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Platform identity */}
      <GlassCard variant="glow">
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/25">
            <Layers size={28} className="text-primary" />
          </div>
          <div>
            <HolographicText as="h2" variant="rainbow" className="text-2xl">
              NeuralForge
            </HolographicText>
            <p className="text-sm text-muted-foreground mt-1">
              AI-Powered App Builder Platform
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-border/30 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Version 1.0.0-beta
          </div>
        </div>
      </GlassCard>

      {/* Tech stack */}
      <GlassCard variant="elevated">
        <SectionHeader icon={Cpu} title="Technology Stack" />
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Frontend", value: "React + TypeScript" },
            { label: "Blockchain", value: "Internet Computer" },
            { label: "Backend", value: "Motoko Canister" },
            { label: "Auth", value: "Internet Identity" },
            { label: "Animations", value: "Motion/React" },
            { label: "Styling", value: "Tailwind + OKLCH" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="p-2.5 rounded-lg bg-muted/60 border border-border/40"
            >
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-xs font-mono font-medium text-foreground mt-0.5">
                {value}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* ICP badge */}
      <GlassCard variant="default">
        <SectionHeader icon={Info} title="Built on Internet Computer" />
        <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
          <div className="p-2 rounded-lg bg-primary/15 shrink-0">
            <Zap size={14} className="text-primary" />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            NeuralForge runs as a fully decentralised canister smart contract on
            the{" "}
            <span className="text-foreground font-medium">
              Internet Computer Protocol
            </span>
            . Your data and code live on-chain — censorship resistant, always
            available, and owned by you.
          </p>
        </div>
      </GlassCard>

      {/* Roadmap */}
      <GlassCard variant="default">
        <SectionHeader
          icon={Sparkles}
          title="Feature Roadmap"
          subtitle="Coming soon to NeuralForge"
        />
        <div className="space-y-3">
          {ROADMAP_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/40 group hover:border-primary/25 hover:bg-primary/5 transition-smooth cursor-default"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <span className="text-xl shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <ChevronRight
                size={14}
                className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Main Settings Page ───────────────────────────────────────────────────────

const TAB_ICONS: Record<TabId, React.FC<LucideProps>> = {
  Profile: User,
  Appearance: Palette,
  Preferences: Bell,
  About: Info,
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("Profile");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const { data: profileData, isFetching } = useGetProfile();

  function handleDeleteAll() {
    setShowDeleteModal(false);
    setDeleteSuccess(true);
    setTimeout(() => setDeleteSuccess(false), 3000);
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6" data-ocid="settings.page">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <HolographicText as="h1" variant="primary" className="text-3xl mb-1">
            Settings
          </HolographicText>
          <p className="text-sm text-muted-foreground">
            Manage your profile, appearance and preferences
          </p>
        </motion.div>

        {/* Tab bar */}
        <GlassCard variant="subtle" padding="sm">
          <nav className="flex gap-1" role="tablist" data-ocid="settings.tabs">
            {TABS.map((tab) => {
              const Icon = TAB_ICONS[tab];
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_oklch(var(--primary)/0.2)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                  )}
                  data-ocid={`settings.tab.${tab.toLowerCase()}`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{tab}</span>
                </button>
              );
            })}
          </nav>
        </GlassCard>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {activeTab === "Profile" && (
              <ProfileTab profileData={profileData} isFetching={isFetching} />
            )}
            {activeTab === "Appearance" && <AppearanceTab />}
            {activeTab === "Preferences" && <PreferencesTab />}
            {activeTab === "About" && <AboutTab />}
          </div>
        </AnimatePresence>

        {/* Danger zone */}
        <GlassCard variant="default" className="border-destructive/25">
          <SectionHeader
            icon={AlertTriangle}
            title="Danger Zone"
            subtitle="Irreversible actions — proceed with caution"
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 rounded-xl bg-destructive/5 border border-destructive/20">
            <div>
              <p className="text-sm font-medium text-foreground">
                Delete All Projects
              </p>
              <p className="text-xs text-muted-foreground">
                Permanently delete every project and its data
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowDeleteModal(true)}
              className="shrink-0 h-9 px-4 rounded-lg bg-destructive/15 text-destructive border border-destructive/30 text-sm font-medium transition-smooth hover:bg-destructive/25 hover:border-destructive/50 hover:shadow-[0_0_12px_oklch(var(--destructive)/0.3)]"
              data-ocid="danger_zone.delete_all.open_modal_button"
            >
              Delete All Projects
            </button>
          </div>

          <AnimatePresence>
            {deleteSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex items-center gap-2 text-xs text-primary bg-primary/10 border border-primary/20 rounded-lg px-3 py-2"
                data-ocid="danger_zone.delete.success_state"
              >
                <Check size={12} />
                All projects deleted successfully.
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>

      <DeleteModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAll}
      />
    </Layout>
  );
}
