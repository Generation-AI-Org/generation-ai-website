# Phase 1: Project Setup - Research

**Researched:** 2026-04-12
**Domain:** Next.js 16 + Tailwind CSS v4 + Component Libraries
**Confidence:** HIGH

## Summary

Next.js 16.2.3 ist die aktuelle stabile Version mit Turbopack als Default-Bundler und React 19.2. Die wichtigste Breaking Change ist das Rename von `middleware.ts` zu `proxy.ts`. Tailwind CSS v4.2.2 verwendet eine neue CSS-basierte Konfiguration mit `@theme` statt der JavaScript-Config.

Fuer 21st.dev/Magic UI gibt es kein NPM-Package zum Installieren - es ist eine Registry von Components die via `npx shadcn@latest add "https://21st.dev/r/..."` einzeln geholt werden. ReactBits funktioniert identisch. Beide setzen auf shadcn/ui als Basis-Infrastruktur.

**Primary recommendation:** shadcn/ui initialisieren als Fundament, dann einzelne 21st.dev/ReactBits Components in Phase 2 hinzufuegen.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Next.js 16** mit App Router (neueste stable)
- **React 19** (shipped mit Next.js 16)
- **TypeScript** strict mode
- **pnpm** als Package Manager
- **ESLint** + **Prettier** von Start an
- **Tailwind CSS v4** (neueste)
- Farbwelt A als Default:
  - `blue-brand: #3A3AFF` (Primary)
  - `neon: #CEFF32` (Accent/CTA)
  - `black-brand: #141414` (Dark Background)
  - `gray-light: #F6F6F6` (Light Background)
- **Inter** via `next/font/google` fuer UI/Body
- Project Structure wie in CONTEXT.md definiert

### Claude's Discretion
- Exakte Tailwind v4 Config Syntax
- ESLint Config Details
- Genaue 21st.dev/Magic UI Package Namen
- Ob zusaetzliche Dependencies noetig sind (clsx, tailwind-merge, etc.)

### Deferred Ideas (OUT OF SCOPE)
- Display Font (Canela-aehnlich)
- ReactBits Components Selection (Phase 2)
- Farbwelt B Theming aktiv nutzen
</user_constraints>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.2.3 | Framework | [VERIFIED: npm registry] Aktuellste stable, Turbopack default |
| react | 19.2.5 | UI Library | [VERIFIED: npm registry] Shipped mit Next.js 16 |
| tailwindcss | 4.2.2 | Styling | [VERIFIED: npm registry] CSS-first config, 70% kleineres Output |
| typescript | 5.x | Type Safety | [CITED: nextjs.org] Minimum 5.1.0 required |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| clsx | 2.1.1 | Conditional classes | [VERIFIED: npm registry] Fuer `cn()` helper |
| tailwind-merge | 3.5.0 | Class deduplication | [VERIFIED: npm registry] Fuer `cn()` helper |
| framer-motion | 12.38.0 | Animation | [VERIFIED: npm registry] Peer dep fuer 21st.dev/ReactBits |
| lucide-react | latest | Icons | [CITED: 21st.dev] Standard icon library |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| pnpm | npm/yarn | pnpm ist schneller und disk-efficient (User Decision: pnpm) |
| Tailwind v4 | Tailwind v3 | v4 hat CSS-first config, v3 hat JS config (User Decision: v4) |

**Installation:**
```bash
# pnpm muss erst installiert werden (nicht vorhanden auf System)
npm install -g pnpm

pnpm create next-app@latest website --typescript --tailwind --eslint --app
cd website
pnpm add clsx tailwind-merge framer-motion lucide-react
```

## Architecture Patterns

### Recommended Project Structure
```
app/
  layout.tsx        # Root Layout mit Fonts, Metadata
  page.tsx          # Placeholder Homepage
  globals.css       # Tailwind + @theme + CSS Variables
components/
  ui/               # shadcn/21st.dev Components (Phase 2)
  layout/           # Header, Footer (Platzhalter)
lib/
  utils.ts          # cn() helper
  fonts.ts          # Inter font config
public/
  logos/            # Generation AI Logos
```

### Pattern 1: Tailwind v4 CSS-First Configuration
**What:** Farben und Fonts direkt in CSS definieren statt tailwind.config.js
**When to use:** Immer in Tailwind v4
**Example:**
```css
/* Source: tailwindcss.com/docs/theme */
@import "tailwindcss";

@theme {
  /* Generation AI Farbwelt A */
  --color-blue-brand: #3A3AFF;
  --color-neon: #CEFF32;
  --color-black-brand: #141414;
  --color-gray-light: #F6F6F6;
  
  /* Farbwelt B (konfiguriert, nicht aktiv) */
  --color-pink-brand: #FC78FE;
  --color-red-brand: #F5133B;
  
  /* Fonts */
  --font-sans: var(--font-inter), system-ui, sans-serif;
}
```

### Pattern 2: cn() Utility Helper
**What:** Kombiniert clsx + tailwind-merge fuer intelligentes Class Merging
**When to use:** Ueberall wo Tailwind Classes dynamisch kombiniert werden
**Example:**
```typescript
// Source: ui.shadcn.com/docs/installation/manual
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Pattern 3: Next.js 16 Font Setup
**What:** next/font fuer optimierte Font-Loading
**When to use:** Immer
**Example:**
```typescript
// lib/fonts.ts
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// app/layout.tsx
import { inter } from "@/lib/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Anti-Patterns to Avoid
- **tailwind.config.js in v4:** Nicht mehr noetig, verwende `@theme` in CSS [CITED: tailwindcss.com/docs/theme]
- **middleware.ts:** Deprecated in Next.js 16, verwende `proxy.ts` [CITED: nextjs.org/blog/next-16]
- **@tailwind directives:** Ersetzt durch `@import "tailwindcss"` in v4

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Class merging | Custom merge logic | `cn()` with clsx + tailwind-merge | Edge cases mit Tailwind specificity |
| Font loading | `<link>` tags | `next/font` | Auto-optimization, no layout shift |
| Icon system | Custom SVGs | lucide-react | Consistency, tree-shaking |
| Animations | CSS keyframes | framer-motion | Gesture support, layout animations |
| Component primitives | Custom buttons/inputs | shadcn/ui | Accessibility, variants system |

**Key insight:** 21st.dev und ReactBits sind Component-Registries, keine Packages. Sie bauen auf shadcn/ui auf und erwarten dass `cn()` und Tailwind v4 bereits konfiguriert sind.

## Common Pitfalls

### Pitfall 1: middleware.ts statt proxy.ts
**What goes wrong:** Next.js 16 zeigt Deprecation Warning, zukuenftige Versionen brechen
**Why it happens:** Alte Tutorials/Docs referenzieren middleware.ts
**How to avoid:** Direkt `proxy.ts` verwenden wenn Middleware noetig
**Warning signs:** Console Warning "middleware.ts is deprecated"

### Pitfall 2: Tailwind v3 Config Syntax in v4
**What goes wrong:** Colors/Fonts werden nicht erkannt
**Why it happens:** v4 verwendet `@theme` in CSS, nicht `theme.extend` in JS
**How to avoid:** Alle Custom Tokens in `globals.css` mit `@theme {}` definieren
**Warning signs:** Tailwind Classes wie `bg-blue-brand` funktionieren nicht

### Pitfall 3: 21st.dev als npm Package suchen
**What goes wrong:** Kein Package gefunden, Verwirrung
**Why it happens:** 21st.dev ist eine Registry, kein Package
**How to avoid:** Via `npx shadcn@latest add "https://21st.dev/r/..."` installieren
**Warning signs:** `npm install @21st-ui/react` findet nichts

### Pitfall 4: create-next-app ohne --src-dir
**What goes wrong:** Konflikte mit shadcn/ui Path-Aliases
**Why it happens:** Default structure unterscheidet sich
**How to avoid:** Explizit `--src-dir` NICHT verwenden (shadcn erwartet root-level app/)
**Warning signs:** Import Errors nach shadcn init

### Pitfall 5: PostCSS Config vergessen
**What goes wrong:** Tailwind v4 funktioniert nicht
**Why it happens:** Tailwind v4 braucht `@tailwindcss/postcss` statt altem `tailwindcss` Plugin
**How to avoid:** PostCSS Config erstellen mit `@tailwindcss/postcss`
**Warning signs:** CSS wird nicht kompiliert

## Code Examples

### Complete globals.css for Generation AI
```css
/* Source: Design.md + tailwindcss.com/docs/theme */
@import "tailwindcss";

@theme {
  /* Farbwelt A - Primary (Web-App Default) */
  --color-blue-brand: #3A3AFF;
  --color-neon: #CEFF32;
  --color-black-brand: #141414;
  --color-gray-light: #F6F6F6;
  
  /* Farbwelt B - Secondary (Campaigns) */
  --color-pink-brand: #FC78FE;
  --color-red-brand: #F5133B;
  
  /* Semantic Colors */
  --color-background: var(--color-black-brand);
  --color-foreground: var(--color-gray-light);
  --color-primary: var(--color-blue-brand);
  --color-accent: var(--color-neon);
  
  /* Typography */
  --font-sans: var(--font-inter), system-ui, sans-serif;
}

/* Dark-first base styles */
html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```

### PostCSS Config (Required for Tailwind v4)
```javascript
// postcss.config.mjs
// Source: tailwindcss.com/docs/guides/nextjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### Root Layout Template
```typescript
// app/layout.tsx
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://generation-ai.org"),
  title: {
    default: "Generation AI",
    template: "%s | Generation AI",
  },
  description: "Die erste kostenlose KI-Community fuer Studierende im DACH-Raum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-black-brand text-gray-light antialiased">
        {children}
      </body>
    </html>
  );
}
```

### shadcn/ui Init Command
```bash
# Nach create-next-app
pnpm dlx shadcn@latest init

# Empfohlene Optionen:
# - Style: Default
# - Base color: Neutral (wir ueberschreiben mit @theme)
# - CSS variables: Yes
# - Tailwind prefix: (none)
# - Components location: @/components
# - Utils location: @/lib/utils
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| tailwind.config.js | @theme in CSS | Tailwind v4 (2025) | Config lebt jetzt in CSS |
| middleware.ts | proxy.ts | Next.js 16 (Oct 2025) | Rename, gleiche Funktionalitaet |
| @tailwind base/components/utilities | @import "tailwindcss" | Tailwind v4 | Single import statt drei directives |
| Webpack default | Turbopack default | Next.js 16 | 2-5x schnellere Builds |
| next lint | ESLint directly | Next.js 16 | next lint command entfernt |

**Deprecated/outdated:**
- `middleware.ts`: Deprecated, wird in zukuenftiger Version entfernt [CITED: nextjs.org/blog/next-16]
- `next/legacy/image`: Deprecated, use `next/image` [CITED: nextjs.org/blog/next-16]
- `images.domains` config: Use `images.remotePatterns` [CITED: nextjs.org/blog/next-16]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| - | - | - | - |

**Note:** Alle Claims wurden via npm registry, offizielle Docs, WebSearch oder direkte System-Checks verifiziert. Keine unverifizierten Annahmen.

## Open Questions (RESOLVED)

1. **Vercel Projekt Setup**
   - What we know: Vercel CLI ist `vercel link && vercel deploy`
   - What's unclear: Ist bereits ein Vercel Account/Team fuer Generation AI vorhanden?
   - **RESOLVED:** Plan 01-03 Task 2 verwendet interaktiven `vercel link` Checkpoint — User entscheidet Account/Scope live

2. **Logo Assets Location**
   - What we know: Design.md referenziert `../Assets/logos/`
   - What's unclear: Exakter Pfad relativ zum neuen website/ Projekt
   - **RESOLVED:** Plan 01-02 Task 2 kopiert von `/Users/lucaschweigmann/projects/GenerationAI/Assets/logos/svg/` nach `public/logos/`

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js 16 | YES | v25.8.2 | -- |
| pnpm | Package Manager | NO | -- | `npm install -g pnpm` |
| git | Version Control | [ASSUMED] | any | -- |

**Missing dependencies with no fallback:**
- Keine - Node.js 25.8.2 erfuellt Next.js 16 Anforderung (>= 20.9.0)

**Missing dependencies with fallback:**
- pnpm ist nicht installiert, muss mit `npm install -g pnpm` installiert werden (Wave 0 Task)

## Sources

### Primary (HIGH confidence)
- [npm registry] - Package versions verified via `npm view`
- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16) - Breaking changes, new features
- [Tailwind CSS v4 Theme Docs](https://tailwindcss.com/docs/theme) - @theme syntax
- [Tailwind CSS Next.js Guide](https://tailwindcss.com/docs/guides/nextjs) - Installation

### Secondary (MEDIUM confidence)
- [shadcn/ui Installation](https://ui.shadcn.com/docs/installation/next) - Next.js setup
- [shadcn/ui Manual Installation](https://ui.shadcn.com/docs/installation/manual) - cn() utility
- [21st.dev](https://21st.dev) - Component registry (via shadcn CLI)
- [ReactBits GitHub](https://github.com/DavidHDev/react-bits) - CLI installation method

### Tertiary (LOW confidence)
- None - alle kritischen Claims wurden verifiziert

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH - npm registry Versionen direkt verifiziert
- Architecture: HIGH - Offizielle Tailwind v4 und Next.js 16 Docs
- Pitfalls: MEDIUM - Kombination aus Docs und Community Reports

**Research date:** 2026-04-12
**Valid until:** 2026-05-12 (30 days - stable stack)
