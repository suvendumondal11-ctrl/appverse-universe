import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        glow: "0 0 20px rgba(var(--primary), 0.4)",
        "glow-accent": "0 0 16px rgba(var(--accent), 0.3)",
      },
      keyframes: {
        "twin-pulse": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.7"
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" }
        },
        "twin-float": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        },
        "twin-shimmer": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px oklch(var(--primary) / 0.3), inset 0 0 20px oklch(var(--primary) / 0.05)" },
          "50%": { boxShadow: "0 0 40px oklch(var(--primary) / 0.6), inset 0 0 30px oklch(var(--primary) / 0.1)" },
        },
        "ring-fill": {
          "0%": { strokeDasharray: "0, 1", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "0.5, 1", strokeDashoffset: "0" },
          "100%": { strokeDasharray: "1, 1", strokeDashoffset: "0" },
        },
        "toast-slide-bounce": {
          "0%": { transform: "translateY(120px) scale(0.85)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "counter-flip": {
          "0%, 10%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        "xp-shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fire-glow": {
          "0%, 100%": { boxShadow: "0 0 10px oklch(var(--accent) / 0.3)" },
          "50%": { boxShadow: "0 0 20px oklch(var(--accent) / 0.6)" },
        },
        "achievement-pop": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bulb-sparkle": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.8" },
          "50%": { transform: "scale(1.15) rotate(-5deg)", opacity: "1" },
        },
        "scan-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pipeline-flow": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 0%" },
        },
        "burst-expand": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        "particle-float": {
          "0%": { opacity: "1", transform: "translate(0, 0) scale(1)" },
          "100%": { opacity: "0", transform: "translate(var(--tx), var(--ty))) scale(0.3)" },
        },
        "legendary-cinematic": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "hologram-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "progress-fill": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "automation-node-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 24px oklch(var(--automation-neural) / 0.4), inset 0 0 24px oklch(var(--automation-neural) / 0.1), 0 0 36px oklch(var(--automation-decision) / 0.2)",
            transform: "scale(1)"
          },
          "50%": {
            boxShadow: "0 0 40px oklch(var(--automation-neural) / 0.6), inset 0 0 32px oklch(var(--automation-neural) / 0.15), 0 0 52px oklch(var(--automation-decision) / 0.35)",
            transform: "scale(1.06)"
          }
        },
        "confidence-spin": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        },
        "sync-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" }
        },
        "activity-pulse-in": {
          "from": { opacity: "0", transform: "translateX(-8px)" },
          "to": { opacity: "1", transform: "translateX(0)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "ring-fill": "ring-fill 2s ease-in-out infinite",
        "toast-slide-bounce": "toast-slide-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "sparkle": "sparkle 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "counter-flip": "counter-flip 2s ease-out infinite",
        "xp-shimmer": "xp-shimmer 3s ease-in-out infinite",
        "fire-glow": "fire-glow 1.5s ease-in-out infinite",
        "achievement-pop": "achievement-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bulb-sparkle": "bulb-sparkle 2s ease-in-out infinite",
        "scan-sweep": "scan-sweep 2s linear infinite",
        "pipeline-flow": "pipeline-flow 2s ease-in-out infinite",
        "burst-expand": "burst-expand 1s ease-out",
        "particle-float": "particle-float 1.5s ease-out",
        "legendary-cinematic": "legendary-cinematic 2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "hologram-shift": "hologram-shift 4s ease-in-out infinite",
        "progress-fill": "progress-fill 0.8s ease-out",
        "automation-node-pulse": "automation-node-pulse 2.4s ease-in-out infinite",
        "confidence-spin": "confidence-spin 3s linear infinite",
        "sync-pulse": "sync-pulse 1.5s ease-in-out infinite",
        "activity-pulse-in": "activity-pulse-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
