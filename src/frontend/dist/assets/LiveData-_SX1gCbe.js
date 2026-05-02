import { j as jsxRuntimeExports, d as cn, r as reactExports, L as Link } from "./index-BB65hrJ6.js";
import { B as Button } from "./button-C-UP_Gtb.js";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
const APP_TYPES = [
  {
    id: "fitness",
    label: "Fitness App",
    icon: "🏃",
    sources: [
      {
        icon: "💓",
        name: "Health APIs (steps, heart rate, calories)",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "⌚",
        name: "Wearable Device Sync",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "🥗",
        name: "Nutrition Database",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      }
    ]
  },
  {
    id: "doctor",
    label: "Doctor App",
    icon: "🩺",
    sources: [
      {
        icon: "📅",
        name: "Doctor Availability API",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "🕐",
        name: "Appointment Slots",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "🔒",
        name: "Medical Records (HIPAA-safe)",
        badge: "Verified",
        badgeColor: "oklch(0.52 0.2 262)"
      },
      {
        icon: "📍",
        name: "Location Services",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      }
    ]
  },
  {
    id: "map",
    label: "Map App",
    icon: "🗺️",
    sources: [
      {
        icon: "🛰️",
        name: "GPS Location Services",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "🚦",
        name: "Traffic Data API",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "📍",
        name: "Points of Interest",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      },
      {
        icon: "🏙️",
        name: "Street View Data",
        badge: "Verified",
        badgeColor: "oklch(0.52 0.2 262)"
      }
    ]
  },
  {
    id: "learning",
    label: "Learning App",
    icon: "📚",
    sources: [
      {
        icon: "🎓",
        name: "Course Content API",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      },
      {
        icon: "📈",
        name: "Progress Tracking",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "📋",
        name: "Updated Curriculum",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      },
      {
        icon: "❓",
        name: "Quiz Data",
        badge: "Verified",
        badgeColor: "oklch(0.52 0.2 262)"
      }
    ]
  },
  {
    id: "weather",
    label: "Weather App",
    icon: "🌤️",
    sources: [
      {
        icon: "🌡️",
        name: "OpenWeatherMap API",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "💨",
        name: "Air Quality Index",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "⚡",
        name: "Severe Weather Alerts",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "📊",
        name: "Forecast Data",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      }
    ]
  },
  {
    id: "food",
    label: "Food App",
    icon: "🍔",
    sources: [
      {
        icon: "🍽️",
        name: "Restaurant APIs",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "📜",
        name: "Menu Data",
        badge: "Updated",
        badgeColor: "oklch(0.55 0.22 50)"
      },
      {
        icon: "🚴",
        name: "Delivery Status",
        badge: "Live",
        badgeColor: "oklch(0.52 0.18 140)"
      },
      {
        icon: "🥦",
        name: "Food Nutrition DB",
        badge: "Verified",
        badgeColor: "oklch(0.52 0.2 262)"
      }
    ]
  }
];
const SHOWCASE_APPS = [
  {
    icon: "🩺",
    name: "Doctor Finder",
    description: "Live doctor availability, booking slots, and real-time wait times",
    accentClass: "showcase-teal",
    accentStyle: {
      "--showcase-color": "oklch(0.52 0.18 160)"
    },
    sources: ["Doctor Availability", "Appointment Slots", "Wait Times"]
  },
  {
    icon: "🗺️",
    name: "City Navigator",
    description: "Real-time traffic, public transit updates, and live crowd data",
    accentClass: "showcase-blue",
    accentStyle: {
      "--showcase-color": "oklch(0.52 0.2 220)"
    },
    sources: ["Traffic Data", "Transit API", "Crowd Density"]
  },
  {
    icon: "📚",
    name: "Learn & Grow",
    description: "Fresh course content, live tutors, and updated learning paths",
    accentClass: "showcase-purple",
    accentStyle: {
      "--showcase-color": "oklch(0.52 0.2 280)"
    },
    sources: ["Course Content", "Live Tutors", "Learning Paths"]
  },
  {
    icon: "🌤️",
    name: "WeatherSphere",
    description: "Minute-by-minute conditions, air quality, and severe weather alerts",
    accentClass: "showcase-amber",
    accentStyle: {
      "--showcase-color": "oklch(0.65 0.22 50)"
    },
    sources: ["Weather API", "Air Quality", "Alerts Feed"]
  }
];
const STATS = [
  { value: 50, suffix: "+", label: "Live APIs Connected", prefix: "" },
  { value: 10, suffix: "M+", label: "Data Points Daily", prefix: "" },
  { value: 99.9, suffix: "%", label: "Uptime", prefix: "" },
  { value: 100, suffix: "ms", label: "Real-time Sync", prefix: "<" }
];
function AnimatedGlobe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center",
      style: { width: 260, height: 260 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute rounded-full",
            style: {
              width: 260,
              height: 260,
              background: "radial-gradient(circle, oklch(0.65 0.22 220 / 0.15) 0%, transparent 70%)",
              animation: "glow-pulse 3s ease-in-out infinite"
            }
          }
        ),
        [
          { size: 240, hue: 200, dur: 8 },
          { size: 200, hue: 220, dur: 12 },
          { size: 160, hue: 240, dur: 16 }
        ].map(({ size, hue, dur }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute rounded-full border",
            style: {
              width: size,
              height: size,
              borderColor: `oklch(0.62 0.2 ${hue} / 0.22)`,
              animation: `spin ${dur}s linear infinite`
            }
          },
          size
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-full flex items-center justify-center",
            style: {
              width: 120,
              height: 120,
              background: "radial-gradient(circle at 35% 35%, oklch(0.72 0.2 220), oklch(0.42 0.22 260))",
              boxShadow: "0 0 40px oklch(0.62 0.2 220 / 0.5), inset 0 0 20px oklch(0.9 0.05 220 / 0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "120",
                  height: "120",
                  viewBox: "0 0 120 120",
                  className: "absolute inset-0",
                  style: { opacity: 0.35 },
                  "aria-hidden": "true",
                  children: [
                    [30, 45, 60, 75, 90].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "ellipse",
                      {
                        cx: "60",
                        cy: y,
                        rx: Math.sqrt(Math.max(0, 3600 - (y - 60) ** 2)),
                        ry: "4",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "0.8"
                      },
                      y
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "60",
                        y1: "5",
                        x2: "60",
                        y2: "115",
                        stroke: "white",
                        strokeWidth: "0.8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "20",
                        y1: "20",
                        x2: "100",
                        y2: "100",
                        stroke: "white",
                        strokeWidth: "0.8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "100",
                        y1: "20",
                        x2: "20",
                        y2: "100",
                        stroke: "white",
                        strokeWidth: "0.8"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl relative z-10", children: "🌐" })
            ]
          }
        ),
        [
          { id: "n1", top: "8%", left: "12%", delay: "0s" },
          { id: "n2", top: "15%", right: "10%", delay: "0.5s" },
          { id: "n3", bottom: "20%", left: "8%", delay: "1s" },
          { id: "n4", bottom: "12%", right: "15%", delay: "1.5s" },
          { id: "n5", top: "48%", left: "2%", delay: "0.8s" },
          { id: "n6", top: "40%", right: "2%", delay: "1.2s" }
        ].map((pos) => {
          const { id, delay, ...stylePos } = pos;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute w-3 h-3 rounded-full",
              style: {
                ...stylePos,
                background: "oklch(0.78 0.22 180)",
                boxShadow: "0 0 8px oklch(0.72 0.22 180 / 0.8)",
                animation: "ping-dot 2s ease-in-out infinite",
                animationDelay: delay
              }
            },
            id
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0",
            width: "260",
            height: "260",
            style: { opacity: 0.25 },
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "40",
                  y1: "30",
                  x2: "130",
                  y2: "130",
                  stroke: "oklch(0.72 0.2 200)",
                  strokeWidth: "1",
                  strokeDasharray: "4 3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "220",
                  y1: "45",
                  x2: "130",
                  y2: "130",
                  stroke: "oklch(0.72 0.2 200)",
                  strokeWidth: "1",
                  strokeDasharray: "4 3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "28",
                  y1: "195",
                  x2: "130",
                  y2: "130",
                  stroke: "oklch(0.72 0.2 200)",
                  strokeWidth: "1",
                  strokeDasharray: "4 3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "234",
                  y1: "170",
                  x2: "130",
                  y2: "130",
                  stroke: "oklch(0.72 0.2 200)",
                  strokeWidth: "1",
                  strokeDasharray: "4 3"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes ping-dot {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrow-dash {
          0%   { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes count-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .live-dot {
          width: 10px; height: 10px;
          background: oklch(0.62 0.22 140);
          border-radius: 50%;
          position: relative;
        }
        .live-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: oklch(0.62 0.22 140 / 0.35);
          animation: ping-dot 1.5s ease-in-out infinite;
        }
        .source-card-enter {
          animation: fade-slide-up 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .source-card-enter:nth-child(1) { animation-delay: 0ms; }
        .source-card-enter:nth-child(2) { animation-delay: 70ms; }
        .source-card-enter:nth-child(3) { animation-delay: 140ms; }
        .source-card-enter:nth-child(4) { animation-delay: 210ms; }
        .arrow-animated {
          stroke-dasharray: 40;
          animation: arrow-dash 1.2s linear infinite;
        }
      ` })
      ]
    }
  );
}
function AnimatedStat({ stat, trigger }) {
  const [count, setCount] = reactExports.useState(0);
  const isFloat = stat.value % 1 !== 0;
  reactExports.useEffect(() => {
    if (!trigger) return;
    const duration = 1800;
    const steps = 60;
    const step = stat.value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, stat.value);
      setCount(current);
      if (current >= stat.value) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [trigger, stat.value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "text-4xl font-black font-display",
        style: {
          background: "linear-gradient(135deg, oklch(0.52 0.2 262), oklch(0.62 0.25 200))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        },
        children: [
          stat.prefix,
          isFloat ? count.toFixed(1) : Math.round(count),
          stat.suffix
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground text-center", children: stat.label })
  ] });
}
function HowStep({
  step,
  icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center text-center gap-3 px-4",
      "data-ocid": `how_it_works.step.${step}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl relative",
            style: {
              background: "oklch(0.95 0.04 220 / 0.7)",
              border: "1.5px solid oklch(0.62 0.18 220 / 0.4)",
              boxShadow: "0 0 20px oklch(0.62 0.2 220 / 0.2)",
              backdropFilter: "blur(10px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white",
                  style: { background: "oklch(0.52 0.2 262)" },
                  children: step
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-[180px]", children: desc })
      ]
    }
  );
}
function LiveBadge({
  badge,
  color
}) {
  const icons = { Live: "●", Updated: "↻", Verified: "✓" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full",
      style: {
        background: `${color.replace(")", " / 0.12)")}`,
        border: `1px solid ${color.replace(")", " / 0.4)")}`,
        color
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: badge === "Live" ? { animation: "ping-dot 1.5s ease-in-out infinite" } : {},
            children: icons[badge]
          }
        ),
        badge
      ]
    }
  );
}
function LiveData() {
  const [activeApp, setActiveApp] = reactExports.useState("fitness");
  const [prevApp, setPrevApp] = reactExports.useState("fitness");
  const [animKey, setAnimKey] = reactExports.useState(0);
  const [statsTrigger, setStatsTrigger] = reactExports.useState(false);
  const statsRef = reactExports.useRef(null);
  const activeAppData = APP_TYPES.find((a) => a.id === activeApp);
  function selectApp(id) {
    if (id === activeApp) return;
    setPrevApp(activeApp);
    setActiveApp(id);
    setAnimKey((k) => k + 1);
  }
  reactExports.useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsTrigger(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const showcaseAccentMap = {
    "showcase-teal": "oklch(0.52 0.18 160)",
    "showcase-blue": "oklch(0.52 0.2 220)",
    "showcase-purple": "oklch(0.52 0.2 280)",
    "showcase-amber": "oklch(0.65 0.22 50)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background text-foreground",
      "data-ocid": "live_data.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24 gap-8",
            style: {
              background: "linear-gradient(160deg, oklch(0.97 0.015 220 / 1) 0%, oklch(0.96 0.02 262 / 1) 60%, oklch(0.97 0.008 280 / 1) 100%)",
              minHeight: "90vh"
            },
            "data-ocid": "live_data.hero.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage: "radial-gradient(circle, oklch(0.62 0.18 220 / 0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none",
                  style: {
                    width: 600,
                    height: 400,
                    background: "radial-gradient(ellipse, oklch(0.72 0.2 220 / 0.12) 0%, transparent 70%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium",
                    style: {
                      background: "oklch(0.94 0.04 220 / 0.8)",
                      border: "1px solid oklch(0.62 0.2 220 / 0.4)",
                      color: "oklch(0.35 0.18 220)",
                      backdropFilter: "blur(8px)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "live-dot" }),
                      "Live data streaming now"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-5xl sm:text-6xl lg:text-7xl font-black font-display leading-tight tracking-tight",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.15 0.02 262) 0%, oklch(0.38 0.2 220) 50%, oklch(0.52 0.2 262) 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    },
                    children: "AI-built apps with live global data ⚡"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed", children: [
                  "Your app connects to the world.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Real data. Real time. Real results." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "live_data.hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "text-base font-semibold px-7 py-3 rounded-xl",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.52 0.2 220), oklch(0.52 0.2 262))",
                        boxShadow: "0 0 24px oklch(0.52 0.2 220 / 0.35)",
                        border: "none",
                        color: "white"
                      },
                      children: "Start Building Free"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("explorer")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "px-7 py-3 rounded-xl text-base font-semibold transition-smooth",
                      style: {
                        background: "oklch(0.96 0.02 220 / 0.8)",
                        border: "1.5px solid oklch(0.62 0.2 220 / 0.35)",
                        color: "oklch(0.35 0.18 220)",
                        backdropFilter: "blur(8px)"
                      },
                      "data-ocid": "live_data.hero.secondary_button",
                      children: "Explore Data Sources"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedGlobe, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-20 px-6",
            style: { background: "oklch(0.99 0.005 0)" },
            "data-ocid": "live_data.how_it_works.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                    style: {
                      background: "oklch(0.94 0.04 262 / 0.7)",
                      color: "oklch(0.35 0.18 262)"
                    },
                    children: "The Process"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black font-display mt-3 text-foreground", children: "From idea to live app in 3 steps" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-base max-w-md mx-auto", children: "No APIs to configure. No backend to manage. Just describe what you want." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HowStep,
                  {
                    step: 1,
                    icon: "🧠",
                    title: "You describe your app",
                    desc: "Type your idea in plain language — voice or text, no code needed."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4 md:py-0 md:px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "60",
                    height: "28",
                    viewBox: "0 0 60 28",
                    className: "rotate-90 md:rotate-0",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M2 14 H52 M42 4 L54 14 L42 24",
                        fill: "none",
                        stroke: "oklch(0.62 0.2 220)",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "arrow-animated"
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HowStep,
                  {
                    step: 2,
                    icon: "🗄️",
                    title: "AI selects live data sources",
                    desc: "Our engine picks the best APIs and data feeds automatically for your app."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4 md:py-0 md:px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "60",
                    height: "28",
                    viewBox: "0 0 60 28",
                    className: "rotate-90 md:rotate-0",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M2 14 H52 M42 4 L54 14 L42 24",
                        fill: "none",
                        stroke: "oklch(0.62 0.2 220)",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "arrow-animated",
                        style: { animationDelay: "0.4s" }
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HowStep,
                  {
                    step: 3,
                    icon: "⚡",
                    title: "Your app updates in real-time",
                    desc: "Data flows continuously — your users always see the latest information."
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            id: "explorer",
            className: "py-20 px-6",
            style: { background: "oklch(0.97 0.012 262 / 1)" },
            "data-ocid": "live_data.explorer.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                    style: {
                      background: "oklch(0.92 0.06 220 / 0.6)",
                      color: "oklch(0.32 0.18 220)"
                    },
                    children: "Live Data Explorer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black font-display mt-3 text-foreground", children: "Every app type. Real data sources." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-md mx-auto", children: "Select an app type to see which live data sources power it." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex flex-wrap gap-2.5 justify-center mb-10",
                  "data-ocid": "live_data.explorer.filter_tabs",
                  children: APP_TYPES.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => selectApp(app.id),
                      "data-ocid": `live_data.explorer.tab.${app.id}`,
                      className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-smooth",
                      style: activeApp === app.id ? {
                        background: "linear-gradient(135deg, oklch(0.52 0.2 220), oklch(0.52 0.2 262))",
                        color: "white",
                        boxShadow: "0 0 18px oklch(0.52 0.2 220 / 0.35)",
                        border: "1.5px solid transparent"
                      } : {
                        background: "oklch(0.97 0.01 262 / 0.9)",
                        border: "1.5px solid oklch(0.78 0.06 262 / 0.5)",
                        color: "oklch(0.35 0.05 262)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: app.icon }),
                        app.label
                      ]
                    },
                    app.id
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                  "data-ocid": "live_data.explorer.sources_list",
                  children: activeAppData.sources.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "source-card-enter rounded-2xl p-4 flex flex-col gap-3",
                      style: {
                        background: "oklch(0.98 0.008 262 / 0.97)",
                        border: "1px solid oklch(0.82 0.06 262 / 0.5)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 2px 16px oklch(0.52 0.1 262 / 0.06)"
                      },
                      "data-ocid": `live_data.explorer.source.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0",
                              style: {
                                background: `${src.badgeColor.replace(")", " / 0.1)")}`,
                                border: `1px solid ${src.badgeColor.replace(")", " / 0.25)")}`,
                                boxShadow: `0 0 12px ${src.badgeColor.replace(")", " / 0.2)")}`
                              },
                              children: src.icon
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "live-dot mt-1.5" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-snug", children: src.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LiveBadge, { badge: src.badge, color: src.badgeColor })
                      ]
                    },
                    `${prevApp}-${src.name}-${i}`
                  ))
                },
                `${activeApp}-${animKey}`
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-20 px-6",
            style: { background: "oklch(0.99 0.005 0)" },
            "data-ocid": "live_data.showcase.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                    style: {
                      background: "oklch(0.95 0.06 50 / 0.6)",
                      color: "oklch(0.32 0.2 50)"
                    },
                    children: "Example Apps"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black font-display mt-3 text-foreground", children: "Real apps. Live data. Right now." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-md mx-auto", children: "These are just examples — you can build thousands more in minutes." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                  "data-ocid": "live_data.showcase.list",
                  children: SHOWCASE_APPS.map((app, i) => {
                    const accent = showcaseAccentMap[app.accentClass];
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Card,
                      {
                        className: "relative overflow-hidden flex flex-col gap-4 p-5 rounded-2xl transition-smooth hover:-translate-y-1 cursor-default",
                        style: {
                          background: "oklch(0.98 0.01 262 / 0.97)",
                          border: `1.5px solid ${accent.replace(")", " / 0.2)")}`,
                          backdropFilter: "blur(12px)",
                          boxShadow: `0 0 24px ${accent.replace(")", " / 0.1)")}`
                        },
                        "data-ocid": `live_data.showcase.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl",
                              style: {
                                background: `linear-gradient(90deg, ${accent}, transparent)`
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl",
                              style: {
                                background: `${accent.replace(")", " / 0.1)")}`,
                                border: `1.5px solid ${accent.replace(")", " / 0.25)")}`,
                                boxShadow: `0 0 16px ${accent.replace(")", " / 0.2)")}`
                              },
                              children: app.icon
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base text-foreground", children: app.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: app.description })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-auto", children: app.sources.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs px-2 py-0.5 rounded-full font-medium",
                              style: {
                                background: `${accent.replace(")", " / 0.08)")}`,
                                border: `1px solid ${accent.replace(")", " / 0.2)")}`,
                                color: accent
                              },
                              children: s
                            },
                            s
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              className: "w-full py-2 rounded-xl text-xs font-semibold transition-smooth hover:opacity-90",
                              style: {
                                background: `linear-gradient(135deg, ${accent.replace(")", " / 0.15)")}, ${accent.replace(")", " / 0.08)")})`,
                                border: `1px solid ${accent.replace(")", " / 0.3)")}`,
                                color: accent
                              },
                              "data-ocid": `live_data.showcase.demo_button.${i + 1}`,
                              children: "See Live Demo →"
                            }
                          )
                        ]
                      },
                      app.name
                    );
                  })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            ref: statsRef,
            className: "py-14 px-6",
            style: {
              background: "linear-gradient(135deg, oklch(0.52 0.2 220 / 0.08), oklch(0.52 0.2 262 / 0.06))",
              borderTop: "1px solid oklch(0.62 0.2 220 / 0.15)",
              borderBottom: "1px solid oklch(0.62 0.2 220 / 0.15)"
            },
            "data-ocid": "live_data.stats.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              AnimatedStat,
              {
                stat,
                trigger: statsTrigger
              },
              stat.label
            )) }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-24 px-6 text-center",
            style: { background: "oklch(0.97 0.012 262 / 1)" },
            "data-ocid": "live_data.cta.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.52 0.2 220 / 0.15), oklch(0.52 0.2 262 / 0.1))",
                    border: "1.5px solid oklch(0.62 0.2 220 / 0.4)",
                    boxShadow: "0 0 24px oklch(0.52 0.2 220 / 0.2)"
                  },
                  children: "🚀"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black font-display text-foreground", children: "Ready to connect your app to the world?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-base max-w-sm", children: [
                "Join ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "50,000+ creators" }),
                " ",
                "already building with live global data."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "live_data.cta.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  className: "text-base font-bold px-10 py-4 rounded-xl",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.52 0.2 220), oklch(0.52 0.2 262))",
                    boxShadow: "0 0 32px oklch(0.52 0.2 220 / 0.4)",
                    border: "none",
                    color: "white"
                  },
                  children: "Start Building ⚡"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Free forever on the starter plan. No credit card required." })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "footer",
          {
            className: "py-6 px-6 text-center text-xs text-muted-foreground border-t border-border",
            style: { background: "oklch(0.99 0.005 0)" },
            children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              ". Built with love using",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                  className: "underline hover:text-foreground transition-colors",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "caffeine.ai"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  LiveData as default
};
