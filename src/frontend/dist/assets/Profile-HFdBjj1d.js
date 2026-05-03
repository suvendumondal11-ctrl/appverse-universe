import { u as useNavigate, g as useGetProfile, h as useGetMyStats, Q as useListPublicIdeas, J as useUpdateDisplayName, r as reactExports, w as getLevelFromXp, j as jsxRuntimeExports, m as motion, o as LevelBadge, Y as Skeleton, v as getLevelThresholds, _ as CHARACTER_PERSONAS, A as AnimatePresence } from "./index-DQTVxuMq.js";
import { L as Layout } from "./Layout-Dzbux9En.js";
const TWIN_PERSONALITIES = [
  {
    id: "Visionary",
    label: "Visionary",
    icon: "🔮",
    desc: "Sees the future, builds it first",
    color: "oklch(var(--twin-visionary))",
    cssVar: "--twin-visionary"
  },
  {
    id: "Hacker",
    label: "Hacker",
    icon: "⚡",
    desc: "Solves problems with elegant code",
    color: "oklch(var(--twin-hacker))",
    cssVar: "--twin-hacker"
  },
  {
    id: "Artist",
    label: "Artist",
    icon: "🎨",
    desc: "Crafts experiences that awe and inspire",
    color: "oklch(var(--twin-artist))",
    cssVar: "--twin-artist"
  },
  {
    id: "Dreamer",
    label: "Dreamer",
    icon: "✨",
    desc: "Imagines realities others can't see",
    color: "oklch(var(--twin-dreamer))",
    cssVar: "--twin-dreamer"
  }
];
const TWIN_MEMORY_IDEAS = [
  { name: "FitPulse AI Coach", category: "Health", score: 94 },
  { name: "StudyForge 3D", category: "Education", score: 89 },
  { name: "MarketPulse Live", category: "Finance", score: 82 }
];
function DigitalTwinSection({
  displayName,
  xp
}) {
  const [selectedPersonality, setSelectedPersonality] = reactExports.useState("Visionary");
  const [twinActive, setTwinActive] = reactExports.useState(true);
  const [progressPct] = reactExports.useState(() => 60 + Math.floor(Math.random() * 25));
  const [particles, setParticles] = reactExports.useState([]);
  const progressRef = reactExports.useRef(null);
  const selected = TWIN_PERSONALITIES.find(
    (p) => p.id === selectedPersonality
  );
  const twinXp = Math.floor(xp * 0.42);
  const twinName = `${displayName.split(" ")[0]}'s Twin`;
  const triggerParticles = reactExports.useCallback(() => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.08, duration: 0.5 },
      className: "space-y-6",
      "data-ocid": "profile.digital_twin_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl brain-sparkle", children: "🤖" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-black text-foreground", children: "Your Twin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your AI-powered digital counterpart" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs font-mono bg-primary/10 text-primary border border-primary/30 px-2.5 py-1 rounded-full", children: "BETA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "twin-avatar-card p-6 space-y-5",
            style: { animation: "hologram-shift 4s ease-in-out infinite" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none rounded-2xl opacity-5",
                  style: {
                    background: "linear-gradient(135deg, transparent 30%, oklch(0.9 0.1 262 / 0.6) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 5s ease-in-out infinite"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0 relative overflow-hidden",
                    style: {
                      background: `linear-gradient(135deg, ${selected.color}20, ${selected.color}08)`,
                      border: `2px solid ${selected.color}`,
                      boxShadow: `0 0 24px ${selected.color}50`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { filter: `drop-shadow(0 0 12px ${selected.color})` }, children: selected.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "transformation-scan-line",
                          style: {
                            opacity: twinActive ? 1 : 0,
                            animation: twinActive ? "scan-sweep 2s linear infinite" : "none"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-lg text-foreground", children: twinName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "twin-personality-badge mt-1.5 text-xs",
                      style: {
                        background: `${selected.color}15`,
                        borderColor: `${selected.color}60`,
                        color: selected.color,
                        boxShadow: `0 0 10px ${selected.color}25`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selected.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selected.label })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: twinActive ? "Active" : "Idle" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": twinActive,
                      onClick: () => setTwinActive((v) => !v),
                      className: `twin-settings-toggle ${twinActive ? "active" : ""}`,
                      "data-ocid": "profile.twin_activate_toggle",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300",
                          style: {
                            background: twinActive ? `${selected.color}` : "oklch(var(--muted-foreground))",
                            transform: `translate(${twinActive ? "28px" : "4px"}, -50%)`,
                            boxShadow: twinActive ? `0 0 8px ${selected.color}80` : "none"
                          }
                        }
                      )
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", "data-ocid": "profile.twin_stats_row", children: [
                {
                  label: "Ideas Generated",
                  value: Math.floor(twinXp / 12),
                  icon: "💡"
                },
                { label: "XP Earned", value: twinXp.toLocaleString(), icon: "⚡" },
                {
                  label: "Remix Rate",
                  value: `${Math.floor(40 + xp % 30)}%`,
                  icon: "🔀"
                }
              ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-1 rounded-xl px-3 py-2.5 text-center",
                  style: {
                    background: `${selected.color}10`,
                    border: `1px solid ${selected.color}30`
                  },
                  "data-ocid": `profile.twin_stat.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: stat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-mono font-black text-sm",
                        style: { color: selected.color },
                        children: stat.value
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-tight mt-0.5", children: stat.label })
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "space-y-2 relative",
                  "data-ocid": "profile.twin_learning_progress",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Learning from your best ideas..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-mono font-bold",
                          style: { color: selected.color },
                          children: [
                            progressPct,
                            "%"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "twin-learning-bar",
                        style: {
                          height: "8px",
                          borderRadius: "999px",
                          background: `${selected.color}18`,
                          border: `1px solid ${selected.color}30`,
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            ref: progressRef,
                            initial: { width: 0 },
                            animate: { width: `${progressPct}%` },
                            transition: { duration: 1.6, ease: "easeOut", delay: 0.4 },
                            onAnimationComplete: triggerParticles,
                            style: {
                              height: "100%",
                              borderRadius: "999px",
                              background: `linear-gradient(90deg, ${selected.color}, ${selected.color}80)`,
                              boxShadow: `0 0 8px ${selected.color}60`,
                              position: "relative"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                                style: {
                                  background: selected.color,
                                  boxShadow: `0 0 8px ${selected.color}, 0 0 16px ${selected.color}60`,
                                  animation: "glow-pulse 1.5s ease-in-out infinite"
                                }
                              }
                            )
                          }
                        )
                      }
                    ),
                    particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "absolute w-1.5 h-1.5 rounded-full pointer-events-none",
                        style: {
                          left: `${p.x}%`,
                          top: `${p.y}%`,
                          background: selected.color,
                          boxShadow: `0 0 6px ${selected.color}`,
                          animation: "particle-float 1.2s ease-out forwards"
                        }
                      },
                      p.id
                    ))
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "profile.twin_personality_selector", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Twin Personality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: TWIN_PERSONALITIES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              onClick: () => setSelectedPersonality(p.id),
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: {
                delay: 0.1 + i * 0.06,
                type: "spring",
                stiffness: 260,
                damping: 22
              },
              whileHover: { scale: 1.04, y: -2 },
              whileTap: { scale: 0.97 },
              className: "flex flex-col items-center gap-2 rounded-xl p-4 text-center cursor-pointer transition-smooth",
              style: {
                background: selectedPersonality === p.id ? `${p.color}15` : "oklch(var(--card) / 0.5)",
                border: `2px solid ${selectedPersonality === p.id ? p.color : `${p.color}35`}`,
                boxShadow: selectedPersonality === p.id ? `0 0 20px ${p.color}35, 0 0 8px ${p.color}20` : "none",
                backdropFilter: "blur(12px)"
              },
              "data-ocid": `profile.twin_personality.item.${i + 1}`,
              "aria-pressed": selectedPersonality === p.id,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-3xl",
                    style: {
                      filter: selectedPersonality === p.id ? `drop-shadow(0 0 10px ${p.color})` : "none"
                    },
                    children: p.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-xs text-foreground", children: p.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-tight", children: p.desc }),
                selectedPersonality === p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    className: "w-1.5 h-1.5 rounded-full mt-0.5",
                    style: {
                      background: p.color,
                      boxShadow: `0 0 6px ${p.color}`
                    }
                  }
                )
              ]
            },
            p.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "profile.twin_memory_bank", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🧠" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Twin's Memory" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: "Top ideas your twin learned from" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: TWIN_MEMORY_IDEAS.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.94 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.15 + i * 0.08 },
              className: "twin-latest-card p-4 space-y-2.5",
              "data-ocid": `profile.twin_memory.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-primary/10 text-primary border border-primary/25 rounded-full px-2 py-0.5", children: idea.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "twin-badge text-xs", children: "✨ Learned" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground leading-tight", children: idea.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Influence" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-mono font-bold",
                        style: { color: selected.color },
                        children: [
                          idea.score,
                          "%"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1 rounded-full",
                      style: { background: `${selected.color}18` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { width: 0 },
                          animate: { width: `${idea.score}%` },
                          transition: {
                            duration: 1,
                            delay: 0.3 + i * 0.1,
                            ease: "easeOut"
                          },
                          style: {
                            height: "100%",
                            borderRadius: "999px",
                            background: `linear-gradient(90deg, ${selected.color}, ${selected.color}70)`,
                            boxShadow: `0 0 6px ${selected.color}50`
                          }
                        }
                      )
                    }
                  )
                ] })
              ]
            },
            idea.name
          )) })
        ] })
      ]
    }
  );
}
function AnimatedNumber({
  value,
  duration = 1.2
}) {
  const [display, setDisplay] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = 0;
    const steps = 40;
    const increment = value / steps;
    const interval = duration * 1e3 / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else setDisplay(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reality-counter", children: display.toLocaleString() });
}
function CircularProgress({
  pct,
  label,
  color,
  size = 80
}) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = pct / 100 * circ;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: size, height: size }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: size,
          height: size,
          className: "-rotate-90",
          role: "img",
          "aria-label": `${label} progress: ${pct}%`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
              label,
              " progress: ",
              pct,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: size / 2,
                cy: size / 2,
                r,
                fill: "none",
                strokeWidth: "6",
                stroke: "oklch(var(--muted) / 0.3)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.circle,
              {
                cx: size / 2,
                cy: size / 2,
                r,
                fill: "none",
                strokeWidth: "6",
                strokeLinecap: "round",
                stroke: color,
                strokeDasharray: circ,
                initial: { strokeDashoffset: circ },
                animate: { strokeDashoffset: circ - dash },
                transition: { duration: 1.4, ease: "easeOut" },
                style: { filter: `drop-shadow(0 0 6px ${color})` }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-xs text-foreground", children: [
        pct,
        "%"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground text-center leading-tight max-w-[80px]", children: label })
  ] });
}
const PERSONA_DETAILS = {
  Hero: {
    mission: "Build apps that uplift communities and spark real change in the world.",
    specialPower: "Inspires others — your ideas get featured first on the global feed.",
    stats: { buildSpeed: 85, viralPower: 70, communityScore: 95 },
    title: "World Changer"
  },
  Creator: {
    mission: "Turn imagination into experiences people will remember forever.",
    specialPower: "AI Designer Mode — unlock advanced visual themes for every build.",
    stats: { buildSpeed: 75, viralPower: 80, communityScore: 85 },
    title: "Digital Artist"
  },
  Influencer: {
    mission: "Set the trends. Build apps that spread like wildfire overnight.",
    specialPower: "Auto Viral Engine — AI generates 3 trending reel ideas for every app.",
    stats: { buildSpeed: 70, viralPower: 98, communityScore: 90 },
    title: "Trend Setter"
  },
  Dreamer: {
    mission: "Imagine futures nobody else dares to see and turn them into reality.",
    specialPower: "Predictive Creation — AI suggests your next idea before you think of it.",
    stats: { buildSpeed: 65, viralPower: 75, communityScore: 80 },
    title: "Visionary Mind"
  },
  Pioneer: {
    mission: "Enter uncharted markets first and build where nobody else looks.",
    specialPower: "Market Scout — AI reveals untapped niches with zero competition.",
    stats: { buildSpeed: 90, viralPower: 78, communityScore: 72 },
    title: "First Mover"
  },
  Rebel: {
    mission: "Break every rule, disrupt every industry, and reshape the game.",
    specialPower: "Double XP always active — every build earns 2x the normal points.",
    stats: { buildSpeed: 95, viralPower: 92, communityScore: 65 },
    title: "Rule Breaker"
  }
};
function CharacterCard({
  persona,
  isSelected,
  onSelect,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: index * 0.07,
        type: "spring",
        stiffness: 260,
        damping: 22
      },
      whileHover: { scale: 1.04, y: -3 },
      whileTap: { scale: 0.97 },
      onClick: onSelect,
      className: "relative flex flex-col items-center gap-3 rounded-2xl p-5 text-left cursor-pointer transition-smooth group",
      style: {
        background: isSelected ? `linear-gradient(135deg, ${persona.colorTheme}18, ${persona.colorTheme}08)` : "oklch(0.97 0.012 262 / 0.97)",
        border: `2px solid ${isSelected ? persona.colorTheme : `${persona.colorTheme}44`}`,
        boxShadow: isSelected ? `0 0 0 3px ${persona.colorTheme}30, 0 0 32px ${persona.colorTheme}40` : `0 0 12px ${persona.colorTheme}10`,
        backdropFilter: "blur(12px)"
      },
      "data-ocid": `profile.character_card.item.${index + 1}`,
      "aria-pressed": isSelected,
      children: [
        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 400, damping: 20 },
            className: "absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white",
            style: { background: persona.colorTheme },
            children: "✓"
          }
        ),
        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-0 rounded-2xl pointer-events-none",
            style: {
              animation: "glow-pulse 2s ease-in-out infinite",
              borderRadius: "1rem"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-4xl select-none",
            style: {
              filter: isSelected ? `drop-shadow(0 0 12px ${persona.colorTheme})` : "none",
              transition: "filter 0.3s ease"
            },
            children: persona.emoji
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-sm text-foreground text-center leading-tight", children: persona.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-full px-2.5 py-0.5 text-xs font-bold font-mono",
            style: {
              background: `${persona.colorTheme}20`,
              border: `1px solid ${persona.colorTheme}60`,
              color: persona.colorTheme
            },
            children: [
              persona.xpMultiplier,
              "x XP"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center leading-snug line-clamp-2 max-w-[140px]", children: persona.description })
      ]
    }
  );
}
function StatBar({
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold", style: { color }, children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted/40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${value}%` },
        transition: { duration: 1, ease: "easeOut", delay: 0.2 },
        className: "h-full rounded-full",
        style: {
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          boxShadow: `0 0 6px ${color}80`
        }
      }
    ) })
  ] });
}
function BecomeTheCharacter() {
  const [selectedId, setSelectedId] = reactExports.useState("Creator");
  const [notification, setNotification] = reactExports.useState(null);
  const notifTimerRef = reactExports.useRef(null);
  const selectedPersona = CHARACTER_PERSONAS.find((p) => p.id === selectedId);
  const selectedDetails = PERSONA_DETAILS[selectedId];
  function handleSelect(persona) {
    if (persona.id === selectedId) return;
    setSelectedId(persona.id);
    if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    setNotification(
      `${persona.emoji} ${persona.name} activated! Your dashboard now reflects ${persona.id} theme.`
    );
    notifTimerRef.current = setTimeout(() => setNotification(null), 4e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1 },
      className: "space-y-6",
      "data-ocid": "profile.become_character_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-display font-black text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brain-sparkle", children: "✨" }),
            " Become the Character"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Choose your identity — your avatar follows you everywhere" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: notification && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -12, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -12, scale: 0.96 },
            transition: { type: "spring", stiffness: 340, damping: 26 },
            className: "rounded-xl px-4 py-3 text-sm font-semibold text-foreground flex items-center gap-2",
            style: {
              background: `linear-gradient(135deg, ${selectedPersona.colorTheme}18, ${selectedPersona.colorTheme}10)`,
              border: `1.5px solid ${selectedPersona.colorTheme}60`,
              boxShadow: `0 0 20px ${selectedPersona.colorTheme}20`
            },
            "data-ocid": "profile.character_activation_notification",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: notification.split(" ")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: notification.split(" ").slice(1).join(" ") })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
            "data-ocid": "profile.character_grid",
            children: CHARACTER_PERSONAS.map((persona, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CharacterCard,
              {
                persona,
                isSelected: selectedId === persona.id,
                onSelect: () => handleSelect(persona),
                index: i
              },
              persona.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35 },
            className: "rounded-2xl p-6 space-y-4",
            style: {
              background: `linear-gradient(135deg, ${selectedPersona.colorTheme}12, ${selectedPersona.colorTheme}06)`,
              border: `1.5px solid ${selectedPersona.colorTheme}50`,
              boxShadow: `0 0 30px ${selectedPersona.colorTheme}18`
            },
            "data-ocid": "profile.active_character_stats",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0",
                    style: {
                      background: `${selectedPersona.colorTheme}20`,
                      border: `2px solid ${selectedPersona.colorTheme}60`,
                      boxShadow: `0 0 20px ${selectedPersona.colorTheme}30`
                    },
                    children: selectedPersona.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-display font-black text-lg",
                      style: { color: selectedPersona.colorTheme },
                      children: selectedPersona.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "text-xs font-bold rounded-full px-2.5 py-0.5 inline-block mt-1",
                      style: {
                        background: `${selectedPersona.colorTheme}18`,
                        border: `1px solid ${selectedPersona.colorTheme}50`,
                        color: selectedPersona.colorTheme
                      },
                      children: [
                        selectedPersona.xpMultiplier,
                        "x XP Multiplier"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Mission" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium leading-relaxed", children: selectedDetails.mission })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-3.5 flex items-start gap-3",
                  style: {
                    background: `${selectedPersona.colorTheme}10`,
                    border: `1px solid ${selectedPersona.colorTheme}40`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0 mt-0.5", children: "⚡" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5", children: "Special Power" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: selectedDetails.specialPower })
                    ] })
                  ]
                }
              )
            ]
          },
          selectedId
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "🎴 Character Studio — Your Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, rotateY: -15, scale: 0.95 },
              animate: { opacity: 1, rotateY: 0, scale: 1 },
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 22
              },
              className: "relative max-w-[280px] mx-auto rounded-3xl p-6 space-y-5 overflow-hidden",
              style: {
                background: `linear-gradient(145deg, ${selectedPersona.colorTheme}20, ${selectedPersona.colorTheme}08, oklch(0.97 0.01 262 / 0.98))`,
                border: `2.5px solid ${selectedPersona.colorTheme}70`,
                boxShadow: `0 8px 40px ${selectedPersona.colorTheme}30, inset 0 0 30px ${selectedPersona.colorTheme}08`
              },
              "data-ocid": "profile.character_trading_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 pointer-events-none rounded-3xl opacity-10",
                    style: {
                      background: "linear-gradient(135deg, transparent 30%, oklch(0.9 0.1 262 / 0.5) 50%, transparent 70%)",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 5s ease-in-out infinite"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-xs font-bold rounded-full px-2.5 py-1 uppercase tracking-widest",
                      style: {
                        background: `${selectedPersona.colorTheme}20`,
                        border: `1px solid ${selectedPersona.colorTheme}60`,
                        color: selectedPersona.colorTheme
                      },
                      children: selectedDetails.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs font-bold text-muted-foreground", children: [
                    "#",
                    selectedPersona.id.toUpperCase()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-6xl select-none inline-block",
                      style: {
                        filter: `drop-shadow(0 0 20px ${selectedPersona.colorTheme})`
                      },
                      children: selectedPersona.emoji
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-display font-black text-xl mt-2",
                      style: { color: selectedPersona.colorTheme },
                      children: selectedPersona.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "AppVerse Creator Card" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBar,
                    {
                      label: "Build Speed",
                      value: selectedDetails.stats.buildSpeed,
                      color: selectedPersona.colorTheme
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBar,
                    {
                      label: "Viral Power",
                      value: selectedDetails.stats.viralPower,
                      color: selectedPersona.colorTheme
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBar,
                    {
                      label: "Community Score",
                      value: selectedDetails.stats.communityScore,
                      color: selectedPersona.colorTheme
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center rounded-xl py-2 font-mono font-black text-sm",
                    style: {
                      background: `${selectedPersona.colorTheme}15`,
                      border: `1px solid ${selectedPersona.colorTheme}40`,
                      color: selectedPersona.colorTheme
                    },
                    children: [
                      selectedPersona.xpMultiplier,
                      "x XP Multiplier Active"
                    ]
                  }
                )
              ]
            },
            `card-${selectedId}`
          )
        ] })
      ]
    }
  );
}
const DNA_CATEGORIES = [
  { label: "Productivity", pct: 45, color: "oklch(var(--ai-designer))" },
  { label: "Gaming", pct: 30, color: "oklch(var(--secondary))" },
  { label: "Education", pct: 25, color: "oklch(var(--ai-developer))" }
];
const SKILL_DEVELOPING = [
  { label: "UI Design", pct: 72, color: "oklch(var(--ai-designer))" },
  { label: "Business Logic", pct: 58, color: "oklch(var(--ai-business))" },
  { label: "Viral Strategy", pct: 44, color: "oklch(var(--ai-marketing))" }
];
function CreatorDNAPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 },
      className: "brain-profile rounded-3xl p-6 space-y-6",
      style: {
        background: "oklch(var(--card) / 0.45)",
        border: "1px solid oklch(var(--primary) / 0.4)",
        boxShadow: "0 0 40px oklch(var(--primary) / 0.08), inset 0 0 40px oklch(var(--secondary) / 0.04)"
      },
      "data-ocid": "profile.creator_dna_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl brain-sparkle", children: "🧬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-xl font-display font-black",
              style: {
                background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)), oklch(var(--accent)))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              },
              children: "Creator DNA"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-0.5 rounded-full border border-border/30", children: "AI Analysis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Top Categories" }),
          DNA_CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 + i * 0.1 },
              className: "space-y-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: cat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-mono text-xs font-bold",
                      style: { color: cat.color },
                      children: [
                        cat.pct,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "brain-progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "brain-progress-fill h-full rounded-full",
                    initial: { width: 0 },
                    animate: { width: `${cat.pct}%` },
                    transition: {
                      duration: 1.2,
                      delay: 0.35 + i * 0.1,
                      ease: "easeOut"
                    },
                    style: {
                      background: `linear-gradient(90deg, ${cat.color}, oklch(var(--accent)))`,
                      boxShadow: `0 0 8px ${cat.color}`
                    }
                  }
                ) })
              ]
            },
            cat.label
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Skills Developing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around", children: SKILL_DEVELOPING.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.7 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.6 + i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircularProgress,
                {
                  pct: skill.pct,
                  label: skill.label,
                  color: skill.color
                }
              )
            },
            skill.label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.9 },
            className: "relative rounded-2xl p-4 overflow-hidden",
            style: {
              background: "linear-gradient(135deg, oklch(var(--secondary) / 0.25), oklch(var(--primary) / 0.25))",
              border: "1px solid oklch(var(--primary) / 0.5)",
              boxShadow: "0 0 24px oklch(var(--secondary) / 0.2)"
            },
            "data-ocid": "profile.ai_prediction_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hologram opacity-5 pointer-events-none rounded-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl brain-sparkle", children: "🔮" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "AI Predicts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-black text-sm text-foreground", children: [
                    "Your next idea will be a",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--secondary)))",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        },
                        children: "Game App"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted/30 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full rounded-full",
                        initial: { width: 0 },
                        animate: { width: "87%" },
                        transition: { duration: 1.5, delay: 1, ease: "easeOut" },
                        style: {
                          background: "linear-gradient(90deg, oklch(var(--secondary)), oklch(var(--primary)))",
                          boxShadow: "0 0 8px oklch(var(--primary) / 0.6)"
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-primary shrink-0", children: "87% conf." })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const TIER_META = {
  Dreamer: {
    icon: "🌱",
    color: "oklch(0.42 0.18 262)",
    bgColor: "oklch(0.93 0.06 262)",
    borderColor: "oklch(0.52 0.18 262 / 0.4)",
    next: "Builder"
  },
  Builder: {
    icon: "⚡",
    color: "oklch(0.38 0.22 280)",
    bgColor: "oklch(0.93 0.06 280)",
    borderColor: "oklch(0.48 0.22 280 / 0.4)",
    next: "Creator"
  },
  Creator: {
    icon: "🔮",
    color: "oklch(0.35 0.2 262)",
    bgColor: "oklch(0.92 0.07 262)",
    borderColor: "oklch(0.52 0.2 262 / 0.45)",
    next: "Legend"
  },
  Legend: {
    icon: "👑",
    color: "oklch(0.38 0.22 50)",
    bgColor: "oklch(0.94 0.08 50)",
    borderColor: "oklch(0.55 0.22 50 / 0.45)",
    next: null
  }
};
function XPRankCard({
  level,
  xp,
  progressPct,
  curMin,
  nextThreshold,
  streak
}) {
  var _a;
  const meta = TIER_META[level];
  const xpInTier = xp - curMin;
  const xpNeeded = nextThreshold - curMin;
  const xpGap = nextThreshold - xp;
  const fireActive = streak >= 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.25 },
      className: "glass-glow rounded-3xl p-6 space-y-5",
      "data-ocid": "profile.xp_rank_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-muted-foreground uppercase tracking-widest", children: "🎮 Game Rank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `streak-counter text-sm ${fireActive ? "streak-fire" : ""}`,
              "data-ocid": "profile.streak_counter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: fireActive ? "animate-bounce" : "opacity-50", children: "🔥" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-black", children: streak > 0 ? `${streak} Day Streak` : "No Streak Yet" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5 flex items-center gap-5",
            style: {
              background: meta.bgColor,
              border: `1.5px solid ${meta.borderColor}`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0",
                  style: {
                    background: "oklch(0.98 0.01 0)",
                    border: `2px solid ${meta.borderColor}`
                  },
                  children: meta.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-display font-black text-xl",
                    style: { color: meta.color },
                    children: level
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: meta.next ? `${xpGap.toLocaleString()} XP to ${meta.next}` : "🏆 Maximum tier reached!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-black text-lg text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedNumber, { value: xp }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Total XP" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              xpInTier.toLocaleString(),
              " /",
              " ",
              (level === "Legend" ? xp : xpNeeded).toLocaleString(),
              " XP"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-bold",
                style: {
                  color: meta.color
                },
                children: [
                  Math.round(progressPct),
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "xp-fill rounded-full",
              initial: { width: 0 },
              animate: { width: `${progressPct}%` },
              transition: { duration: 1.4, ease: "easeOut" },
              style: {
                background: `linear-gradient(90deg, ${meta.color}, oklch(var(--accent)))`
              },
              "data-ocid": "profile.xp_rank_progress_bar"
            }
          ) }),
          meta.next && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
            "Keep creating to reach",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
              (_a = TIER_META[meta.next]) == null ? void 0 : _a.icon,
              " ",
              meta.next
            ] }),
            "!"
          ] })
        ] })
      ]
    }
  );
}
const ACHIEVEMENTS = [
  {
    id: "first_app",
    emoji: "🚀",
    label: "First App",
    criteria: "Publish your first idea",
    unlocked: true
  },
  {
    id: "viral",
    emoji: "⚡",
    label: "Viral Creator",
    criteria: "Get 50+ likes on one idea",
    unlocked: true
  },
  {
    id: "streak7",
    emoji: "🔥",
    label: "7-Day Streak",
    criteria: "Build 7 days in a row",
    unlocked: false
  },
  {
    id: "master",
    emoji: "🏗️",
    label: "Master Builder",
    criteria: "Publish 10+ ideas",
    unlocked: false
  },
  {
    id: "community",
    emoji: "⭐",
    label: "Community Star",
    criteria: "Receive 100+ total likes",
    unlocked: false
  },
  {
    id: "alchemist",
    emoji: "🧪",
    label: "Idea Alchemist",
    criteria: "Remix 5+ ideas",
    unlocked: false
  }
];
function AchievementBadges() {
  const [hoveredId, setHoveredId] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.35 },
      className: "glass rounded-3xl p-6 space-y-5",
      "data-ocid": "profile.achievements_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-muted-foreground uppercase tracking-widest", children: "🏆 Achievement Badges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-muted-foreground", children: [
            ACHIEVEMENTS.filter((a) => a.unlocked).length,
            "/",
            ACHIEVEMENTS.length,
            " ",
            "Unlocked"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: ACHIEVEMENTS.map((badge, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              delay: 0.4 + i * 0.08,
              type: "spring",
              stiffness: 260,
              damping: 20
            },
            className: "relative flex flex-col items-center gap-2",
            onMouseEnter: () => setHoveredId(badge.id),
            onMouseLeave: () => setHoveredId(null),
            "data-ocid": `profile.achievement.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `achievement-hexagon text-2xl cursor-pointer ${badge.unlocked ? "achievement-unlocked" : "achievement-locked"}`,
                  children: badge.emoji
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs text-center font-semibold leading-tight max-w-[70px] ${badge.unlocked ? "text-foreground" : "text-muted-foreground/40"}`,
                  children: badge.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hoveredId === badge.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 4, scale: 0.92 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 4, scale: 0.92 },
                  transition: { duration: 0.18 },
                  className: "absolute -top-14 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap",
                  "data-ocid": `profile.achievement_tooltip.${badge.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg",
                        style: {
                          background: "oklch(var(--card) / 0.95)",
                          border: "1px solid oklch(var(--primary) / 0.4)",
                          backdropFilter: "blur(12px)"
                        },
                        children: [
                          badge.unlocked ? "✅ " : "🔒 ",
                          badge.criteria
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rotate-45 mx-auto -mt-1",
                        style: {
                          background: "oklch(var(--card) / 0.95)",
                          border: "1px solid oklch(var(--primary) / 0.4)"
                        }
                      }
                    )
                  ]
                }
              ) })
            ]
          },
          badge.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Achievement Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-accent", children: [
              ACHIEVEMENTS.filter((a) => a.unlocked).length,
              "/",
              ACHIEVEMENTS.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-full rounded-full",
              initial: { width: 0 },
              animate: {
                width: `${ACHIEVEMENTS.filter((a) => a.unlocked).length / ACHIEVEMENTS.length * 100}%`
              },
              transition: { duration: 1.2, delay: 0.8, ease: "easeOut" },
              style: {
                background: "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--secondary)))",
                boxShadow: "0 0 8px oklch(var(--accent) / 0.5)"
              }
            }
          ) })
        ] })
      ]
    }
  );
}
const ALL_LEVELS = [
  { level: "Dreamer", emoji: "🌱", label: "Dreamer", range: "0 – 99 XP" },
  { level: "Builder", emoji: "⚡", label: "Builder", range: "100 – 499 XP" },
  { level: "Creator", emoji: "🔮", label: "Creator", range: "500 – 1,999 XP" },
  { level: "Legend", emoji: "👑", label: "Legend", range: "2,000+ XP" }
];
function LevelStepper({
  xp,
  currentLevel
}) {
  const levelOrder = [
    "Dreamer",
    "Builder",
    "Creator",
    "Legend"
  ];
  const currentIdx = levelOrder.indexOf(currentLevel);
  const nextLevel = currentIdx < 3 ? ALL_LEVELS[currentIdx + 1] : null;
  const thresholds = getLevelThresholds();
  const nextThreshold = nextLevel ? thresholds[nextLevel.level][0] : null;
  const xpToNext = nextThreshold !== null ? nextThreshold - Number(xp) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-glow rounded-2xl p-6 space-y-4",
      "data-ocid": "profile.level_stepper",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-muted-foreground uppercase tracking-widest", children: "⚡ Level Progression" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ALL_LEVELS.map((l, i) => {
          const isPast = i < currentIdx;
          const isCurrent = i === currentIdx;
          const isFuture = i > currentIdx;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-smooth ${isCurrent ? "glass-glow glow-pulse border border-primary/60" : isPast ? "bg-muted/60 border border-border/40" : "opacity-50 bg-muted/40 border border-border/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl w-7 text-center", children: isPast ? "✅" : l.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `font-bold text-sm ${isCurrent ? "text-primary" : isPast ? "text-muted-foreground" : "text-muted-foreground/50"}`,
                      children: l.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground/60", children: l.range })
                ] }),
                isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/30", children: "YOU" }),
                isFuture && (nextLevel == null ? void 0 : nextLevel.level) === l.level && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground/50", children: [
                  xpToNext.toLocaleString(),
                  " XP away"
                ] })
              ]
            },
            l.level
          );
        }) }),
        nextLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground pt-2", children: [
          "🚀 You're",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
            xpToNext.toLocaleString(),
            " XP"
          ] }),
          " ",
          "away from",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
            nextLevel.emoji,
            " ",
            nextLevel.label
          ] }),
          "! Keep building!"
        ] }),
        !nextLevel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-accent font-bold", children: "👑 You've reached the pinnacle — Legendary status!" })
      ]
    }
  );
}
function MiniIdeaCard({ idea, index }) {
  const themeColorStyles = {
    cyan: { borderColor: "oklch(0.72 0.22 262 / 0.4)" },
    purple: { borderColor: "oklch(0.62 0.25 280 / 0.4)" },
    orange: { borderColor: "oklch(0.75 0.28 50 / 0.4)" },
    green: { borderColor: "oklch(0.72 0.22 145 / 0.4)" },
    pink: { borderColor: "oklch(0.72 0.22 330 / 0.4)" }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.08 },
      className: "glass rounded-xl p-4 border transition-smooth cursor-pointer group border-border/30",
      style: themeColorStyles[idea.colorTheme] ?? {},
      "data-ocid": `profile.my_idea.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-foreground truncate", children: idea.appName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: idea.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end gap-1 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-primary/10 text-primary border border-primary/30 rounded-full px-2 py-0.5", children: idea.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "❤️ ",
            Number(idea.likeCount)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "🔀 ",
            Number(idea.remixCount)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "👁️ ",
            Number(idea.viewCount)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto font-mono text-accent", children: [
            idea.successScore,
            "% 🎯"
          ] })
        ] })
      ]
    }
  );
}
function Profile() {
  const navigate = useNavigate();
  const { data: profile, isLoading: profileLoading } = useGetProfile();
  const { data: stats, isLoading: statsLoading } = useGetMyStats();
  const { data: allIdeas } = useListPublicIdeas("recent", void 0, 50);
  const updateName = useUpdateDisplayName();
  const [editingName, setEditingName] = reactExports.useState(false);
  const [nameValue, setNameValue] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const loading = profileLoading || statsLoading;
  const displayName = (profile == null ? void 0 : profile.displayName) ?? "Creator";
  const xp = Number((stats == null ? void 0 : stats.totalXp) ?? 0);
  const streak = Number((stats == null ? void 0 : stats.streak) ?? 0);
  const level = (stats == null ? void 0 : stats.level) ?? getLevelFromXp(xp);
  const thresholds = getLevelThresholds();
  const [curMin, nextMax] = thresholds[level];
  const nextLevelThreshold = level === "Legend" ? xp : nextMax === Number.POSITIVE_INFINITY ? xp : nextMax;
  const nextLevelLabel = level === "Dreamer" ? "Builder" : level === "Builder" ? "Creator" : level === "Creator" ? "Legend" : null;
  const progressPct = level === "Legend" ? 100 : Math.min(100, (xp - curMin) / (nextLevelThreshold - curMin) * 100);
  const initials = displayName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const myIdeas = (allIdeas ?? []).filter(
    (idea) => profile ? idea.creatorId === profile.userId.toString() : false
  );
  function startEdit() {
    setNameValue(displayName);
    setEditingName(true);
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 50);
  }
  async function saveName() {
    const trimmed = nameValue.trim();
    if (trimmed && trimmed !== displayName)
      await updateName.mutateAsync(trimmed);
    setEditingName(false);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") saveName();
    if (e.key === "Escape") setEditingName(false);
  }
  const categories = ["🏋️ Fitness Apps", "📚 Education Apps", "💰 Finance Apps"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-4 py-10 space-y-8",
      "data-ocid": "profile.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "relative glass-glow rounded-3xl p-8 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hologram opacity-5 pointer-events-none rounded-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col md:flex-row items-center gap-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full gradient-hologram flex items-center justify-center text-4xl font-display font-black shadow-2xl glow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground drop-shadow", children: loading ? "?" : initials }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level, size: "sm", showName: false }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left min-w-0 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 justify-center md:justify-start", children: editingName ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ref: inputRef,
                      value: nameValue,
                      onChange: (e) => setNameValue(e.target.value),
                      onKeyDown: handleKeyDown,
                      onBlur: saveName,
                      className: "bg-transparent border-b-2 border-primary text-3xl font-display font-black text-foreground outline-none w-full max-w-xs",
                      "data-ocid": "profile.name_input"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: startEdit,
                      className: "text-3xl font-display font-black text-foreground hover:text-primary transition-smooth group flex items-center gap-2",
                      "data-ocid": "profile.name_edit_button",
                      title: "Click to edit name",
                      children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-48" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        displayName,
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg opacity-0 group-hover:opacity-100 transition-smooth", children: "✏️" })
                      ] })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-center md:justify-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level, size: "lg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: "🔮 Creator Level" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-w-sm mx-auto md:mx-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground font-mono", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        xp.toLocaleString(),
                        " XP"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: level === "Legend" ? "MAX LEVEL 👑" : `${nextLevelThreshold.toLocaleString()} XP to ${nextLevelLabel}` })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 rounded-full bg-muted/40 overflow-hidden border border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: `${progressPct}%` },
                        transition: { duration: 1.2, ease: "easeOut" },
                        className: "h-full rounded-full relative overflow-hidden",
                        style: {
                          background: "linear-gradient(90deg, oklch(0.72 0.22 262), oklch(0.62 0.25 280))",
                          boxShadow: "0 0 12px oklch(0.72 0.22 262 / 0.6)"
                        },
                        "data-ocid": "profile.xp_progress_bar",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 animate-pulse" })
                      }
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "grid grid-cols-2 gap-3 shrink-0",
                    "data-ocid": "profile.quick_stats",
                    children: [
                      { label: "XP", value: xp.toLocaleString(), emoji: "⚡" },
                      { label: "Streak", value: `${streak}d`, emoji: "🔥" }
                    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "glass rounded-xl px-4 py-3 text-center min-w-[80px]",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: s.emoji }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-bold text-lg text-primary", children: s.value }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
                        ]
                      },
                      s.label
                    ))
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "glass-glow rounded-3xl p-6 md:p-8",
            "data-ocid": "profile.digital_twin_wrapper",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalTwinSection, { displayName, xp })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "glass-glow rounded-3xl p-6 md:p-8",
            "data-ocid": "profile.creator_identity_section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(BecomeTheCharacter, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreatorDNAPanel, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XPRankCard,
              {
                level,
                xp,
                progressPct,
                curMin,
                nextThreshold: nextLevelThreshold,
                nextLevelLabel,
                streak
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AchievementBadges, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 },
            className: "space-y-4",
            "data-ocid": "profile.creator_dna_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-black text-foreground", children: "🧬 Your Creator DNA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                {
                  emoji: "💡",
                  label: "Ideas Generated",
                  value: Number((stats == null ? void 0 : stats.ideasGenerated) ?? 0),
                  ocid: "profile.stat_ideas"
                },
                {
                  emoji: "❤️",
                  label: "Total Likes Earned",
                  value: Number((stats == null ? void 0 : stats.totalLikes) ?? 0),
                  ocid: "profile.stat_likes"
                },
                {
                  emoji: "🔀",
                  label: "Total Remixes",
                  value: Number((stats == null ? void 0 : stats.totalRemixes) ?? 0),
                  ocid: "profile.stat_remixes"
                },
                {
                  emoji: "🔥",
                  label: "Day Streak",
                  value: `${streak} days`,
                  ocid: "profile.stat_streak"
                }
              ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.2 + i * 0.07 },
                  className: "glass-glow rounded-2xl p-5 text-center space-y-2",
                  "data-ocid": stat.ocid,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: stat.emoji }),
                    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-16 mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-black text-2xl text-primary", children: typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-tight", children: stat.label })
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Top Categories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "glass-glow rounded-full px-4 py-1.5 text-sm font-bold text-primary",
                    children: cat
                  },
                  cat
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Based on your creation history" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LevelStepper, { xp, currentLevel: level })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            className: "space-y-4",
            "data-ocid": "profile.my_ideas_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-black text-foreground", children: "✨ My Creations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({ to: "/builder/$id", params: { id: "new" } }),
                    className: "text-sm font-bold text-primary hover:text-primary/80 transition-smooth flex items-center gap-1",
                    "data-ocid": "profile.create_idea_button",
                    children: "+ New Idea"
                  }
                )
              ] }),
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ["sk1", "sk2"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-xl" }, k)) }) : myIdeas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "glass-glow rounded-2xl p-10 text-center space-y-4",
                  "data-ocid": "profile.my_ideas_empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "🚀" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-lg text-foreground", children: "No ideas published yet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mx-auto", children: "Your creations will appear here. Build your first idea and share it with the universe!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => navigate({ to: "/builder/$id", params: { id: "new" } }),
                        className: "glass-glow rounded-xl px-6 py-2.5 text-sm font-bold text-primary hover:bg-primary/10 transition-smooth",
                        "data-ocid": "profile.publish_first_idea_button",
                        children: "Publish your first idea →"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: myIdeas.map((idea, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MiniIdeaCard, { idea, index: i }, idea.id.toString())) })
            ]
          }
        )
      ]
    }
  ) });
}
export {
  Profile as default
};
