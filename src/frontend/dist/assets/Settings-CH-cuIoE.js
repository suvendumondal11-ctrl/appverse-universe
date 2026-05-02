import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, d as cn } from "./index-BB65hrJ6.js";
import { L as Layout } from "./Layout-Ca_fTK18.js";
import { H as HolographicText, G as GlassButton } from "./HolographicText-C8UGVPGc.js";
import { G as GlassCard } from "./GlassCard-yq_Jepy7.js";
import { b as useGetProfile, n as useUpdateDisplayName } from "./index-DGa1wCGE.js";
import { B as Bell, u as useThemeStore, a as Sun } from "./Navbar-DFO37bKo.js";
import { m as motion } from "./proxy-6cLYjlvs.js";
import { A as AnimatePresence } from "./index-BDLPNy_3.js";
import { C as Check } from "./check-Dk6czMzH.js";
import { C as Cpu } from "./cpu-D6DEXG2z.js";
import { M as Moon } from "./moon-DPI3MEjk.js";
import { B as Bot } from "./bot-CkzgxLBM.js";
import { G as Globe } from "./globe-BKcMrgXO.js";
import { L as Layers } from "./layers-Cv1g4mfZ.js";
import { Z as Zap, S as Sparkles } from "./zap-ejWsDErG.js";
import { C as ChevronRight } from "./chevron-right-s3pxMFhI.js";
import "./users-D8yA43PM.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = createLucideIcon("settings-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const TABS = ["Profile", "Appearance", "Preferences", "About"];
const ACCENT_PRESETS = [
  { id: "cyan", label: "Cyan", color: "oklch(0.72 0.22 200)" },
  { id: "purple", label: "Purple", color: "oklch(0.72 0.22 262)" },
  { id: "orange", label: "Orange", color: "oklch(0.75 0.28 50)" },
  { id: "green", label: "Green", color: "oklch(0.72 0.22 140)" },
  { id: "red", label: "Red", color: "oklch(0.65 0.25 20)" },
  { id: "pink", label: "Pink", color: "oklch(0.70 0.24 330)" }
];
const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Portuguese",
  "Chinese (Simplified)"
];
const AI_MODES = [
  {
    id: "aggressive",
    label: "Aggressive",
    desc: "Suggest features constantly, anticipate needs"
  },
  {
    id: "balanced",
    label: "Balanced",
    desc: "Smart suggestions at key moments"
  },
  {
    id: "minimal",
    label: "Minimal",
    desc: "Only suggest when explicitly asked"
  }
];
const TWIN_MOODS = ["Bold", "Playful", "Experimental", "Professional"];
const TWIN_FREQUENCIES = ["6h", "12h", "24h"];
const ROADMAP_ITEMS = [
  {
    emoji: "🧠",
    title: "Thought-to-App",
    desc: "Predict what you want to build before you type"
  },
  {
    emoji: "🥽",
    title: "AR/VR Preview",
    desc: "View your app in 3D space with gesture controls"
  },
  {
    emoji: "🤖",
    title: "AI Co-Founder",
    desc: "Business model + pricing + marketing strategy"
  },
  {
    emoji: "🌍",
    title: "Global Deploy",
    desc: "One-click publish to Android, iOS & Web"
  }
];
function loadPrefs() {
  try {
    const raw = localStorage.getItem("neuralforge-prefs");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function savePrefs(data) {
  localStorage.setItem("neuralforge-prefs", JSON.stringify(data));
}
function SectionHeader({
  icon: Icon,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: subtitle })
    ] })
  ] });
}
function ToggleSwitch({
  checked,
  onChange,
  large = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      onClick: () => onChange(!checked),
      className: cn(
        "relative rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0",
        large ? "h-8 w-16" : "h-5 w-9",
        checked ? "bg-primary shadow-[0_0_12px_oklch(var(--primary)/0.5)]" : "bg-muted border border-border/40"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
            large ? "h-6 w-6" : "h-3.5 w-3.5",
            checked ? large ? "translate-x-9" : "translate-x-4" : large ? "translate-x-1" : "translate-x-1",
            checked ? "bg-primary-foreground" : "bg-foreground"
          )
        }
      )
    }
  );
}
function NotifRow({
  label,
  desc,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 py-3 border-b border-border/15 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: value, onChange })
  ] });
}
function DeleteModal({
  open,
  onClose,
  onConfirm
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      "data-ocid": "delete_modal.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-background/80 backdrop-blur-md",
            role: "button",
            tabIndex: -1,
            "aria-label": "Close modal",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "relative z-10 w-full max-w-sm",
            initial: { scale: 0.9, opacity: 0, y: 20 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.9, opacity: 0, y: 20 },
            transition: { type: "spring", stiffness: 300, damping: 30 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { variant: "glow", padding: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-destructive/15 border border-destructive/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 24, className: "text-destructive" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: "Delete All Projects?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "This action is permanent and cannot be undone. All your projects, configurations and build history will be erased." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GlassButton,
                  {
                    variant: "secondary",
                    className: "flex-1",
                    onClick: onClose,
                    "data-ocid": "delete_modal.cancel_button",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "flex-1 h-10 rounded-lg bg-destructive/90 text-destructive-foreground border border-destructive/50 text-sm font-medium transition-smooth hover:bg-destructive hover:shadow-[0_0_16px_oklch(var(--destructive)/0.4)]",
                    onClick: onConfirm,
                    "data-ocid": "delete_modal.confirm_button",
                    children: "Delete All"
                  }
                )
              ] })
            ] }) })
          }
        )
      ]
    }
  ) });
}
function ProfileTab({
  profileData,
  isFetching
}) {
  var _a;
  const updateName = useUpdateDisplayName();
  const [displayName, setDisplayName] = reactExports.useState("");
  const [saved, setSaved] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (profileData == null ? void 0 : profileData.displayName) setDisplayName(profileData.displayName);
  }, [profileData == null ? void 0 : profileData.displayName]);
  async function handleSaveName() {
    if (!displayName.trim()) return;
    await updateName.mutateAsync(displayName.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }
  const principalStr = ((_a = profileData == null ? void 0 : profileData.userId) == null ? void 0 : _a.toString()) ?? "—";
  const shortPrincipal = principalStr.length > 20 ? `${principalStr.slice(0, 10)}...${principalStr.slice(-8)}` : principalStr;
  const memberSince = (profileData == null ? void 0 : profileData.createdAt) ? new Date(Number(profileData.createdAt) / 1e6).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  ) : "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "space-y-5",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-primary/15 border-2 border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-primary", children: isFetching ? "…" : (displayName[0] ?? "N").toUpperCase() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-base text-foreground", children: isFetching ? "Loading…" : displayName || "NeuralForge User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: (profileData == null ? void 0 : profileData.totalProjects) !== void 0 ? `${profileData.totalProjects} projects` : "Builder" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: User,
              title: "Display Name",
              subtitle: "Stored on the Internet Computer — visible to collaborators"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: displayName,
                onChange: (e) => setDisplayName(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && handleSaveName(),
                placeholder: "Your display name",
                className: "flex-1 h-10 px-3 rounded-lg bg-muted/50 border border-border/40 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                "data-ocid": "profile.display_name.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              GlassButton,
              {
                variant: saved ? "accent" : "primary",
                size: "md",
                onClick: handleSaveName,
                loading: updateName.isPending,
                "data-ocid": "profile.save_name.button",
                children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }),
                  " Saved"
                ] }) : "Save"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: saved && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.p,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className: "mt-2 text-xs text-primary flex items-center gap-1",
              "data-ocid": "profile.save_name.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10 }),
                " Name updated successfully"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: Cpu, title: "Account Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: [
            {
              label: "Internet Identity",
              value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-md",
                  title: principalStr,
                  children: isFetching ? "Loading…" : shortPrincipal
                }
              )
            },
            {
              label: "Member since",
              value: isFetching ? "—" : memberSince
            },
            {
              label: "Total projects",
              value: isFetching ? "—" : String((profileData == null ? void 0 : profileData.totalProjects) ?? 0n)
            }
          ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-3 border-b border-border/15 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: value })
              ]
            },
            label
          )) })
        ] })
      ]
    }
  );
}
function AppearanceTab() {
  const { theme, setTheme } = useThemeStore();
  const prefs = loadPrefs();
  const [accent, setAccent] = reactExports.useState(
    prefs.accent ?? "purple"
  );
  const [fontSize, setFontSize] = reactExports.useState(
    prefs.fontSize ?? 14
  );
  function handleAccent(id) {
    setAccent(id);
    savePrefs({ ...loadPrefs(), accent: id });
  }
  function handleFontSize(val) {
    setFontSize(val);
    savePrefs({ ...loadPrefs(), fontSize: val });
    document.documentElement.style.fontSize = `${val}px`;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "space-y-5",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Moon,
              title: "Theme",
              subtitle: "Switch between dark and light interfaces"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Sun,
              {
                size: 18,
                className: cn(
                  "transition-colors",
                  theme === "light" ? "text-accent" : "text-muted-foreground"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleSwitch,
              {
                large: true,
                checked: theme === "dark",
                onChange: (isDark) => setTheme(isDark ? "dark" : "light"),
                "data-ocid": "appearance.theme.toggle"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Moon,
              {
                size: 18,
                className: cn(
                  "transition-colors",
                  theme === "dark" ? "text-primary" : "text-muted-foreground"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Currently:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium capitalize", children: [
                theme,
                " mode"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Palette,
              title: "Accent Color",
              subtitle: "Personalise your interface palette"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ACCENT_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              title: preset.label,
              onClick: () => handleAccent(preset.id),
              className: cn(
                "relative h-9 w-9 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                accent === preset.id && "ring-2 ring-offset-2 ring-foreground/50 scale-110"
              ),
              style: { background: preset.color },
              "data-ocid": `appearance.accent_color.${preset.id}`,
              children: accent === preset.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Check,
                {
                  size: 14,
                  className: "absolute inset-0 m-auto text-background drop-shadow"
                }
              )
            },
            preset.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
            "Selected:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium capitalize", children: accent })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Settings2,
              title: "Font Size",
              subtitle: "Base text size for the interface"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-6", children: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: 12,
                  max: 18,
                  step: 1,
                  value: fontSize,
                  onChange: (e) => handleFontSize(Number(e.target.value)),
                  className: "flex-1 h-2 rounded-full accent-primary cursor-pointer",
                  "data-ocid": "appearance.font_size.input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-6", children: "18" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Current size:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                fontSize,
                "px"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function PreferencesTab() {
  const prefs = loadPrefs();
  const [notifs, setNotifs] = reactExports.useState({
    buildComplete: prefs.notif_buildComplete ?? true,
    aiSuggestions: prefs.notif_aiSuggestions ?? true,
    teamActivity: prefs.notif_teamActivity ?? false,
    deployAlerts: prefs.notif_deployAlerts ?? true,
    weeklyDigest: prefs.notif_weeklyDigest ?? false
  });
  const [aiMode, setAiMode] = reactExports.useState(
    prefs.aiMode ?? "balanced"
  );
  const [language, setLanguage] = reactExports.useState(
    prefs.language ?? "English"
  );
  const [twinAutoGen, setTwinAutoGen] = reactExports.useState(
    prefs.twin_autoGen ?? true
  );
  const [twinFrequency, setTwinFrequency] = reactExports.useState(
    prefs.twin_frequency ?? "12h"
  );
  const [twinMoods, setTwinMoods] = reactExports.useState(
    prefs.twin_moods ?? ["Playful", "Experimental"]
  );
  function updateNotif(key, val) {
    const next = { ...notifs, [key]: val };
    setNotifs(next);
    savePrefs({ ...loadPrefs(), [`notif_${key}`]: val });
  }
  function handleAiMode(mode) {
    setAiMode(mode);
    savePrefs({ ...loadPrefs(), aiMode: mode });
  }
  function handleLanguage(lang) {
    setLanguage(lang);
    savePrefs({ ...loadPrefs(), language: lang });
  }
  function handleTwinAutoGen(val) {
    setTwinAutoGen(val);
    savePrefs({ ...loadPrefs(), twin_autoGen: val });
  }
  function handleTwinFrequency(freq) {
    setTwinFrequency(freq);
    savePrefs({ ...loadPrefs(), twin_frequency: freq });
  }
  function toggleTwinMood(mood) {
    const next = twinMoods.includes(mood) ? twinMoods.filter((m) => m !== mood) : [...twinMoods, mood];
    setTwinMoods(next);
    savePrefs({ ...loadPrefs(), twin_moods: next });
  }
  const MOOD_COLORS = {
    Bold: "oklch(var(--twin-visionary))",
    Playful: "oklch(var(--twin-dreamer))",
    Experimental: "oklch(var(--twin-hacker))",
    Professional: "oklch(var(--twin-artist))"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "space-y-5",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Bell,
              title: "Notifications",
              subtitle: "Control how NeuralForge communicates with you"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotifRow,
            {
              label: "Build Complete",
              desc: "Notify when your app finishes building",
              value: notifs.buildComplete,
              onChange: (v) => updateNotif("buildComplete", v)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotifRow,
            {
              label: "AI Suggestions",
              desc: "Get notified when AI has feature ideas",
              value: notifs.aiSuggestions,
              onChange: (v) => updateNotif("aiSuggestions", v)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotifRow,
            {
              label: "Team Activity",
              desc: "Collaborator edits and comments",
              value: notifs.teamActivity,
              onChange: (v) => updateNotif("teamActivity", v)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotifRow,
            {
              label: "Deploy Alerts",
              desc: "Status updates for live deployments",
              value: notifs.deployAlerts,
              onChange: (v) => updateNotif("deployAlerts", v)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotifRow,
            {
              label: "Weekly Digest",
              desc: "Summary of your project activity",
              value: notifs.weeklyDigest,
              onChange: (v) => updateNotif("weeklyDigest", v)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Bot,
              title: "AI Suggestions",
              subtitle: "How proactively the AI co-pilot assists you"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: AI_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleAiMode(mode.id),
              className: cn(
                "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-smooth border",
                aiMode === mode.id ? "bg-primary/10 border-primary/30 shadow-[0_0_12px_oklch(var(--primary)/0.15)]" : "bg-muted/50 border-border/40 hover:bg-muted/70"
              ),
              "data-ocid": `preferences.ai_mode.${mode.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "h-4 w-4 rounded-full border-2 shrink-0 transition-smooth",
                      aiMode === mode.id ? "border-primary bg-primary" : "border-muted-foreground"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: mode.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: mode.desc })
                ] }),
                aiMode === mode.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary shrink-0" })
              ]
            },
            mode.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Globe,
              title: "Language",
              subtitle: "Interface display language"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: language,
              onChange: (e) => handleLanguage(e.target.value),
              className: "w-full h-10 px-3 rounded-lg bg-muted/50 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
              "data-ocid": "preferences.language.select",
              children: LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: lang, children: lang }, lang))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "glow", className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none rounded-xl opacity-[0.03]",
              style: {
                background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)))",
                backgroundSize: "300% 300%",
                animation: "shimmer 8s ease-in-out infinite"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Cpu,
                title: "Digital Twin",
                subtitle: "Configure your AI-powered digital counterpart"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between gap-4 py-3.5 border-b border-border/15",
                "data-ocid": "preferences.twin_auto_gen.row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Auto-Generation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Twin automatically generates ideas on your behalf" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: twinAutoGen, onChange: handleTwinAutoGen })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: twinAutoGen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25 },
                className: "py-3.5 border-b border-border/15 overflow-hidden",
                "data-ocid": "preferences.twin_frequency.row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-3", children: "Generation Frequency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: TWIN_FREQUENCIES.map((freq) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleTwinFrequency(freq),
                      className: cn(
                        "flex-1 h-9 rounded-lg text-sm font-semibold transition-smooth border",
                        twinFrequency === freq ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_10px_oklch(var(--primary)/0.2)]" : "bg-muted/50 text-muted-foreground border-border/40 hover:bg-muted/70 hover:text-foreground"
                      ),
                      "data-ocid": `preferences.twin_frequency.${freq.toLowerCase()}`,
                      children: freq
                    },
                    freq
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                    "Twin generates new ideas every",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: twinFrequency })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3.5", "data-ocid": "preferences.twin_moods.row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "Mood Preferences" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Select the creative energy your Twin expresses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TWIN_MOODS.map((mood) => {
                const active = twinMoods.includes(mood);
                const color = MOOD_COLORS[mood];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleTwinMood(mood),
                    className: "rounded-full px-4 py-1.5 text-xs font-semibold transition-smooth border",
                    style: {
                      background: active ? `${color}15` : "oklch(var(--muted) / 0.5)",
                      borderColor: active ? `${color}60` : "oklch(var(--border) / 0.4)",
                      color: active ? color : "oklch(var(--muted-foreground))",
                      boxShadow: active ? `0 0 10px ${color}25` : "none"
                    },
                    "data-ocid": `preferences.twin_mood.${mood.toLowerCase()}`,
                    "aria-pressed": active,
                    children: [
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: "✓" }),
                      mood
                    ]
                  },
                  mood
                );
              }) }),
              twinMoods.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-2 italic", children: "Select at least one mood for your Twin" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function AboutTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "space-y-5",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { variant: "glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-3 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-2xl bg-primary/10 border border-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 28, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HolographicText, { as: "h2", variant: "rainbow", className: "text-2xl", children: "NeuralForge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "AI-Powered App Builder Platform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-border/30 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "Version 1.0.0-beta"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: Cpu, title: "Technology Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
            { label: "Frontend", value: "React + TypeScript" },
            { label: "Blockchain", value: "Internet Computer" },
            { label: "Backend", value: "Motoko Canister" },
            { label: "Auth", value: "Internet Identity" },
            { label: "Animations", value: "Motion/React" },
            { label: "Styling", value: "Tailwind + OKLCH" }
          ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-2.5 rounded-lg bg-muted/60 border border-border/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono font-medium text-foreground mt-0.5", children: value })
              ]
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: Info, title: "Built on Internet Computer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/15 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
              "NeuralForge runs as a fully decentralised canister smart contract on the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Internet Computer Protocol" }),
              ". Your data and code live on-chain — censorship resistant, always available, and owned by you."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: Sparkles,
              title: "Feature Roadmap",
              subtitle: "Coming soon to NeuralForge"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ROADMAP_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/40 group hover:border-primary/25 hover:bg-primary/5 transition-smooth cursor-default",
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.07 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: item.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.desc })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronRight,
                  {
                    size: 14,
                    className: "text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  }
                )
              ]
            },
            item.title
          )) })
        ] })
      ]
    }
  );
}
const TAB_ICONS = {
  Profile: User,
  Appearance: Palette,
  Preferences: Bell,
  About: Info
};
function SettingsPage() {
  const [activeTab, setActiveTab] = reactExports.useState("Profile");
  const [showDeleteModal, setShowDeleteModal] = reactExports.useState(false);
  const [deleteSuccess, setDeleteSuccess] = reactExports.useState(false);
  const { data: profileData, isFetching } = useGetProfile();
  function handleDeleteAll() {
    setShowDeleteModal(false);
    setDeleteSuccess(true);
    setTimeout(() => setDeleteSuccess(false), 3e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", "data-ocid": "settings.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HolographicText, { as: "h1", variant: "primary", className: "text-3xl mb-1", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage your profile, appearance and preferences" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { variant: "subtle", padding: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex gap-1", role: "tablist", "data-ocid": "settings.tabs", children: TABS.map((tab) => {
        const Icon = TAB_ICONS[tab];
        const isActive = activeTab === tab;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": isActive,
            onClick: () => setActiveTab(tab),
            className: cn(
              "flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive ? "bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_oklch(var(--primary)/0.2)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
            ),
            "data-ocid": `settings.tab.${tab.toLowerCase()}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab })
            ]
          },
          tab
        );
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        activeTab === "Profile" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileTab, { profileData, isFetching }),
        activeTab === "Appearance" && /* @__PURE__ */ jsxRuntimeExports.jsx(AppearanceTab, {}),
        activeTab === "Preferences" && /* @__PURE__ */ jsxRuntimeExports.jsx(PreferencesTab, {}),
        activeTab === "About" && /* @__PURE__ */ jsxRuntimeExports.jsx(AboutTab, {})
      ] }, activeTab) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { variant: "default", className: "border-destructive/25", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            icon: TriangleAlert,
            title: "Danger Zone",
            subtitle: "Irreversible actions — proceed with caution"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 rounded-xl bg-destructive/5 border border-destructive/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Delete All Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Permanently delete every project and its data" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowDeleteModal(true),
              className: "shrink-0 h-9 px-4 rounded-lg bg-destructive/15 text-destructive border border-destructive/30 text-sm font-medium transition-smooth hover:bg-destructive/25 hover:border-destructive/50 hover:shadow-[0_0_12px_oklch(var(--destructive)/0.3)]",
              "data-ocid": "danger_zone.delete_all.open_modal_button",
              children: "Delete All Projects"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: deleteSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "mt-3 flex items-center gap-2 text-xs text-primary bg-primary/10 border border-primary/20 rounded-lg px-3 py-2",
            "data-ocid": "danger_zone.delete.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
              "All projects deleted successfully."
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteModal,
      {
        open: showDeleteModal,
        onClose: () => setShowDeleteModal(false),
        onConfirm: handleDeleteAll
      }
    )
  ] });
}
export {
  SettingsPage as default
};
