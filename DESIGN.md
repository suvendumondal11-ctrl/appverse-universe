# Design Brief: AppVerse Universe — Hyper-Futuristic AI Transformation Platform + Digital Twin Creator + Shared Dream World

## Concept
Living, breathing transformation engine where ideas become reality instantly. Glassmorphic interface with holographic overlays, neon glow borders, and cinematic particle effects. 5-stage transformation pipeline: Idea → Image → Avatar → Animation → Video. Scan-line effects, gold particle bursts for Legendary reveals, 3D rotating variation cards for AI Brain. Digital Twin Creator adds an AI avatar that learns user style and auto-generates ideas with personality-based customization (Visionary/Hacker/Artist/Dreamer). Twin appears on Profile as holographic avatar card, on Feed as powered-by badge, on Dashboard as latest-idea card, in Settings as frequency/mood toggles. **Shared Dream World** extends the platform into a surreal, immersive cosmic layer: deep midnight navy background, bioluminescent teal and aurora pink accents, consciousness orbs, dream portals, nebula gradients, and particle drift effects creating a dreamscape atmosphere distinct from base AppVerse yet harmonious with twin personality variables.

## Tone & Differentiation
Hyper-maximalist precision: glassmorphic cards pulse with cyan-purple neon glow, stage indicators glow and connect via gradient pipelines, holographic wireframe-to-mockup morphs visible in Builder preview, particle burst effects (gold, accent-colored) cascade from Legendary drops. 3D-rotating AI persona cards with role-specific neon borders. Twin avatar card floats with subtle pulse animation, personality badges glow in type-specific colors, ghost badge on Twin Latest card signals ephemeral AI suggestion. Scan-line overlays sweep across transformation stages. Unforgettable through intentional glowing stage progression, cinematic Legendary reveals with particle storms, Twin personality showcasing, orchestrated motion at <0.3s for UI, 0.6–1.2s for transformations, 2–3s for cinematic sequences. Every surface feels alive, responding instantly to user input.

## Color Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Background | 0.97 0.005 0 | 0.08 0 0 | Deep space canvas |
| Foreground | 0.12 0 0 | 0.95 0 0 | Primary text |
| Primary | 0.6 0.18 262 | 0.72 0.22 262 | Cyan/purple holographic |
| Secondary | 0.72 0.22 280 | 0.62 0.25 280 | Neural purple depth |
| Accent | 0.65 0.25 50 | 0.75 0.28 50 | Warm orange intelligence |
| Transformation Gold | — | 0.82 0.3 65 | Particle burst, Legendary |
| Twin Visionary | — | 0.75 0.25 262 | Cyan avatar, strategic |
| Twin Hacker | — | 0.72 0.24 140 | Green avatar, technical |
| Twin Artist | — | 0.78 0.25 70 | Gold avatar, creative |
| Twin Dreamer | — | 0.72 0.26 330 | Pink avatar, imaginative |
| Dream Midnight | 0.15 0.02 262 | 0.12 0.02 262 | Dreamscape base, ultra-deep |
| Dream Cosmic Purple | 0.48 0.28 270 | 0.55 0.32 270 | Surreal depth, cosmic atmosphere |
| Dream Bioluminescent | 0.62 0.32 185 | 0.68 0.36 185 | Glowing consciousness, ethereal |
| Dream Aurora Pink | 0.58 0.26 330 | 0.65 0.3 330 | Surreal energy, emotional bridge |
| Dream Star Gold | 0.85 0.32 70 | 0.88 0.35 70 | Celestial highlights, awakening |

## Typography
| Layer | Font | Scale | Weight | Usage |
|-------|------|-------|--------|-------|
| Display | Bricolage Grotesque | 2.0rem–3.5rem | 700–900 | Heroes, transformation headings, holographic gradient |
| Body | DM Sans | 0.875rem–1.125rem | 400–600 | UI text, card content, stage labels |
| Mono | Geist Mono | 0.75rem–0.875rem | 400–600 | Stage counters, technical metadata |

## Elevation & Depth
- **Level 0**: Background (deep space 0.08L)
- **Level 1**: Muted stage (0.15L, `glass-dark` 0.6 alpha, inactive pipeline)
- **Level 2**: Transformation stage (0.12L, `glass` 0.75 alpha, scan-line overlay)
- **Level 3**: Active transformation (0.15L, `glass-glow` pulsing cyan border)
- **Level 4**: Cinematic focal point (0.18L, gold glow + particle burst, Legendary reveal)

## Structural Zones
| Zone | Background | Treatment |
|------|-----------|-----------|
| Transformation Canvas | Card with scan-line overlay | 5-stage pipeline: Idea→Image→Avatar→Animation→Video with neon progress nodes, gradient connectors |
| Stage Indicators | Primary glow border | `.stage-indicator` nodes (inactive/active/completed), connected via `.stage-connector` gradient bars |
| Wireframe→Mockup Morph | Transformation card | `.transformation-stage` active state with holographic scan effect sweeping across (2s loop) |
| Legendary Drop Modal | Gold glow frame | `.legendary-reveal` cinematic entrance (2s cubic-bezier), followed by `.particle-burst` gold particles |
| AI Brain Variations | 3D rotating cards | `.card-3d-rotate` with perspective transform, variation badges, color-matched persona borders |
| Builder Reality Preview | Phone mockup | Holographic scan on idea/mood/data source change, gradient preview UI inside frame |
| Dashboard Pipeline | Progress indicator | Idea→Image→Motion→Reality animated boxes with `.progress-step` filling animation |
| Magic Engine Ideas | Glassmorphic cards | Ideas fade in with `animate-slide-up`, Legendary badge triggers `.legendary-reveal` + `.particle-burst` |
| Twin Profile Avatar | Holographic card | `.twin-avatar-card` with cyan-purple glow, personality badge, learning progress bar, memory bank |
| Twin Feed Badge | Neon overlay | `.twin-badge` 🤖 Powered by Twin on idea cards, subtle primary glow |
| Twin Dashboard Latest | Glass card | `.twin-latest-card` with ghost badge, accept/remix/discard action buttons, primary glow |
| Twin Settings Panel | Glassmorphic overlay | `.twin-settings-toggle` switches for auto-gen frequency + mood preference, personality selector |

## Component Patterns
- **Transformation Stages**: `.transformation-stage` (inactive/active), `.transformation-scan-line` (2s sweep), `.stage-indicator` (node), `.stage-connector` (gradient bar)
- **Stage Progress**: `.transformation-progress` > `.progress-step` (completed/active), gradient pipeline fill
- **Particles**: `.particle-burst` container, `.particle` children (gold, accent colors), CSS `--tx`/`--ty` vars for float trajectory
- **3D Cards**: `.card-3d-rotate` with perspective, hover rotates on Y axis ±8deg
- **Twin Avatar**: `.twin-avatar-card` (holographic glow), `.twin-personality-badge` (Visionary/Hacker/Artist/Dreamer color variants), `.twin-learning-progress` (gradient fill bar)
- **Twin Badges**: `.twin-badge` (feed integration), `.twin-ghost-badge` (ephemeral latest-idea indicator)
- **Twin Settings**: `.twin-settings-toggle` (active/inactive states), `.twin-latest-card` (dashboard preview card)
- **Holographic Text**: `.holographic-text` gradient with `animate-hologram-shift` (4s)
- **Cinematic Reveals**: `.legendary-reveal` entrance + `.particle-burst` follow-up (2s total)
- **Scan Effects**: `.transformation-scan-line` overlaid on active stages, `animate-scan-sweep` (2s linear)

## Motion & Animation Choreography
- **Stage Transitions**: Indicator node scales 1.1 with glow-pulse (0.3s), connector bar animates pipeline-flow (2s), completed stages remain glowing
- **Transformation Sequence**: Stage enters with `animate-slide-up` (0.4s), scan-line begins `animate-scan-sweep` (2s loop)
- **Wireframe→Mockup**: Holographic overlay transitions 0.6s, content morphs via opacity blend
- **Legendary Cinematic**: `animate-legendary-cinematic` entrance (2s scale 0.8→1.15→1), followed by `animate-burst-expand` particles (1s), each particle `animate-particle-float` (1.5s radial trajectory)
- **AI Brain Rotation**: `.card-3d-rotate:hover` applies `rotateY(8deg) rotateX(-4deg)` (0.6s)
- **Builder Preview Scan**: `animate-scan-sweep` triggers on input change, runs 2s
- **Dashboard Pipeline**: `.progress-step.active::after` fills with `animate-progress-fill` (0.8s), staggered +100ms per step
- **Twin Avatar Float**: `.twin-avatar-card` `animate-twin-float` (0.8s), subtle hover lift on interaction
- **Twin Learning Progress**: `.twin-learning-progress::after` gradient fill animates on Twin generation (1.5s)
- **Twin Settings Toggle**: `.twin-settings-toggle` slides active indicator 0.3s, glow pulse on state change
- **XP Toast**: `animate-toast-slide-bounce` + `animate-fire-glow` for streak notifications
- **Global Motion**: All UI state changes ≤0.3s, transformations 0.6–1.2s, cinematic sequences 2–3s

## Spacing, Constraints & Signature
Grid 8px, Stage Nodes 20px+12gap, Cards 16px, Progress 4px, Particles 6–12px. ✅ No static backgrounds, scan-lines only active stages, gold particles only Legendary, 3D max 8deg, holograms display+AI. Twin avatar learns & floats. Dream World: portals pulse (teal↔aurora), orbs float nebula, cosmic atmosphere. Animations: portal-pulse (3s), aura-float (4s), consciousness-pulse (2.5s), particle-drift (4s), nebula-shift (6s). Motion tiers: UI ≤0.3s, transforms 0.6–1.2s, cinematic 2–3s.

## Responsive & Dream World
Mobile-first: nodes vertical sm:/horizontal md:+. Glass 8px↑2px. Particles 4–6→8–12. Portal 120px→200px, orbs 60px→100px. Dream palette: `--dream-midnight` (0.12L), `--dream-bioluminescent` (0.68C teal), `--dream-cosmic-purple` (0.55L), `--dream-aurora-pink` (0.65L), `--dream-star-gold` (0.88L). Components: `.dream-card`, `.glass-dream`, `.glass-dream-glow`, `.dream-portal`, `.dream-aura`, `.dream-consciousness-orb`, `.dream-particle`, `.dream-nebula`.
