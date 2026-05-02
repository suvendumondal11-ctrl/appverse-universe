var _a;
import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, i as create, u as useNavigate, h as useRouterState, r as reactExports, L as Link, e as Skeleton } from "./index-BB65hrJ6.js";
import { H as HolographicText, G as GlassButton } from "./HolographicText-C8UGVPGc.js";
import { c as useGetMyStats, i as getLevelFromXp } from "./index-DGa1wCGE.js";
import { Z as Zap, S as Sparkles } from "./zap-ejWsDErG.js";
import { B as Brain, U as Users } from "./users-D8yA43PM.js";
import { M as Moon } from "./moon-DPI3MEjk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
const LEVEL_ICONS = {
  Dreamer: "🌱",
  Builder: "⚡",
  Creator: "🔮",
  Legend: "👑"
};
const LEVEL_CLASSES = {
  Dreamer: "badge-dreamer",
  Builder: "badge-builder",
  Creator: "badge-creator",
  Legend: "badge-legend"
};
function LevelBadge({
  level,
  size = "md",
  showName = true,
  className
}) {
  const icon = LEVEL_ICONS[level];
  const badgeClass = LEVEL_CLASSES[level];
  if (size === "sm") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold",
          badgeClass,
          className
        ),
        "data-ocid": `level_badge.${level.toLowerCase()}`,
        title: level,
        children: icon
      }
    );
  }
  if (size === "lg") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: cn(
          "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-base font-bold glow-pulse",
          badgeClass,
          className
        ),
        "data-ocid": `level_badge.${level.toLowerCase()}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: icon }),
          showName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display tracking-wide", children: level })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold",
        badgeClass,
        className
      ),
      "data-ocid": `level_badge.${level.toLowerCase()}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }),
        showName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display", children: level })
      ]
    }
  );
}
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a2;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a2 = storage.getItem(name)) != null ? _a2 : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(name, JSON.stringify(newValue, void 0)),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => window.localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  let hydrationVersion = 0;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    return setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      return setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a2, _b;
    if (!storage) return;
    const currentVersion = ++hydrationVersion;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a22;
      return cb((_a22 = get()) != null ? _a22 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a2 = get()) != null ? _a2 : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a22;
      if (currentVersion !== hydrationVersion) {
        return;
      }
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a22 = get()) != null ? _a22 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      if (currentVersion !== hydrationVersion) {
        return;
      }
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(get(), void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      if (currentVersion !== hydrationVersion) {
        return;
      }
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const useThemeStore = create()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const next = get().theme === "dark" ? "light" : "dark";
        set({ theme: next });
        applyTheme(next);
      },
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      }
    }),
    {
      name: "neuralforge-theme",
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      }
    }
  )
);
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
}
const stored = localStorage.getItem("neuralforge-theme");
if (stored) {
  try {
    const parsed = JSON.parse(stored);
    applyTheme(((_a = parsed == null ? void 0 : parsed.state) == null ? void 0 : _a.theme) ?? "light");
  } catch {
    applyTheme("light");
  }
} else {
  applyTheme("light");
}
const NAV_LINKS = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: null,
    magic: false,
    dream: false
  },
  {
    label: "Brainstorm",
    to: "/brainstorm",
    icon: Brain,
    magic: false,
    dream: false
  },
  { label: "Feed", to: "/feed", icon: null, magic: false, dream: false },
  {
    label: "Live Data",
    to: "/live-data",
    icon: null,
    magic: false,
    dream: false
  },
  {
    label: "Transform ⚡",
    to: "/transform",
    icon: null,
    magic: true,
    dream: false
  },
  { label: "Collab", to: "/collab", icon: Users, magic: false, dream: false },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    icon: null,
    magic: false,
    dream: false
  },
  { label: "Magic ⚡", to: "/magic", icon: null, magic: true, dream: false },
  {
    label: "Dream World",
    to: "/dream-world",
    icon: Sparkles,
    magic: false,
    dream: true
  }
];
function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const { data: stats, isLoading: statsLoading } = useGetMyStats();
  const xpLevel = stats ? getLevelFromXp(stats.totalXp) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur-xl bg-card border-b border-border/50",
        "shadow-[0_1px_0_oklch(var(--border)/0.3),0_4px_16px_oklch(var(--primary)/0.06)]"
      ),
      "data-ocid": "navbar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto h-16 flex items-center gap-4 px-4 lg:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 shrink-0 group",
              "data-ocid": "navbar.logo_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_16px_oklch(var(--primary)/0.5)] transition-smooth", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary relative z-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 gradient-hologram opacity-20 group-hover:opacity-40 transition-opacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HolographicText,
                  {
                    as: "span",
                    variant: "primary",
                    className: "text-lg hidden sm:block",
                    children: "AppVerse"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1 ml-2", children: NAV_LINKS.map(({ label, to, icon: Icon, magic, dream }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              "data-ocid": `navbar.${label.toLowerCase().replace(/[^a-z0-9]/g, "")}_link`,
              className: cn(
                "px-3 py-1.5 rounded-md text-sm font-body font-medium transition-smooth flex items-center gap-1.5",
                dream ? pathname === to ? "bg-[var(--twin-dreamer)]/20 text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/40 shadow-[0_0_12px_color-mix(in_oklch,var(--twin-dreamer)_35%,transparent)]" : "text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/25 bg-[var(--twin-dreamer)]/8 hover:bg-[var(--twin-dreamer)]/15 hover:border-[var(--twin-dreamer)]/50 hover:shadow-[0_0_14px_color-mix(in_oklch,var(--twin-dreamer)_40%,transparent)] animate-[glow-pulse_2s_ease-in-out_infinite]" : magic ? pathname === to ? "bg-amber-500/20 text-amber-400 border border-amber-400/40 shadow-[0_0_12px_rgba(251,191,36,0.35)]" : "text-amber-400 border border-amber-400/25 bg-amber-400/8 hover:bg-amber-400/15 hover:border-amber-400/50 hover:shadow-[0_0_14px_rgba(251,191,36,0.4)] animate-[glow-pulse_2s_ease-in-out_infinite]" : pathname === to ? "bg-primary/15 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              ),
              children: [
                Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 shrink-0" }),
                label
              ]
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/25 hover:border-primary/50 hover:shadow-[0_0_14px_oklch(var(--primary)/0.25)] transition-smooth cursor-pointer",
              "data-ocid": "navbar.xp_counter",
              onClick: () => navigate({ to: "/profile" }),
              "aria-label": "View your XP and level",
              children: statsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16 rounded-full" }) : stats && xpLevel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level: xpLevel, size: "sm", showName: false }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold font-display text-primary", children: [
                  "⚡ ",
                  stats.totalXp.toLocaleString(),
                  " XP"
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-display text-muted-foreground", children: "⚡ 0 XP" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GlassButton,
            {
              variant: "secondary",
              size: "icon",
              className: "hidden sm:inline-flex",
              "aria-label": "Search",
              "data-ocid": "navbar.search_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GlassButton,
            {
              variant: "secondary",
              size: "icon",
              "aria-label": "Notifications",
              "data-ocid": "navbar.notifications_button",
              className: "relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent border border-card" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GlassButton,
            {
              variant: "ghost",
              size: "icon",
              onClick: toggleTheme,
              "aria-label": "Toggle theme",
              "data-ocid": "navbar.theme_toggle",
              children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4 text-primary" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", "data-ocid": "navbar.new_project_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GlassButton,
            {
              variant: "holographic",
              size: "sm",
              className: "hidden sm:inline-flex gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                "New Project"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "h-8 w-8 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center cursor-pointer hover:shadow-[0_0_12px_oklch(var(--primary)/0.4)] transition-smooth shrink-0",
              "data-ocid": "navbar.avatar",
              "aria-label": "User menu",
              onClick: () => navigate({ to: "/settings" }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-display text-primary", children: "AV" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GlassButton,
            {
              variant: "ghost",
              size: "icon",
              className: "md:hidden",
              "aria-label": "Toggle menu",
              "data-ocid": "navbar.mobile_menu_button",
              onClick: () => setMobileOpen((v) => !v),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
            }
          )
        ] }),
        mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: "md:hidden border-t border-border/30 bg-card backdrop-blur-xl px-4 py-3 flex flex-col gap-1",
            "data-ocid": "navbar.mobile_nav",
            children: [
              NAV_LINKS.map(({ label, to, icon: Icon, magic, dream }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to,
                  "data-ocid": `navbar.mobile.${label.toLowerCase().replace(/[^a-z0-9]/g, "")}_link`,
                  onClick: () => setMobileOpen(false),
                  className: cn(
                    "px-3 py-2 rounded-md text-sm font-body font-medium transition-smooth flex items-center gap-2",
                    dream ? pathname === to ? "bg-[var(--twin-dreamer)]/20 text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/40" : "text-[var(--twin-dreamer)] border border-[var(--twin-dreamer)]/20 bg-[var(--twin-dreamer)]/6 hover:bg-[var(--twin-dreamer)]/12 hover:border-[var(--twin-dreamer)]/40" : magic ? pathname === to ? "bg-amber-500/20 text-amber-400 border border-amber-400/40" : "text-amber-400 border border-amber-400/20 bg-amber-400/6 hover:bg-amber-400/12 hover:border-amber-400/40" : pathname === to ? "bg-primary/15 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  ),
                  children: [
                    Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 shrink-0" }),
                    label
                  ]
                },
                label
              )),
              stats && xpLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 px-3 py-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LevelBadge, { level: xpLevel, size: "sm", showName: false }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold font-display text-primary", children: [
                  "⚡ ",
                  stats.totalXp.toLocaleString(),
                  " XP"
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  Bell as B,
  LevelBadge as L,
  Navbar as N,
  Plus as P,
  Search as S,
  Sun as a,
  useThemeStore as u
};
