# Phase 1: Project Setup - Context

**Gathered:** 2026-04-12
**Status:** Ready for planning
**Source:** User discussion + Design.md

<domain>
## Phase Boundary

Funktionierendes Next.js Projekt mit Design System und Development-Workflow ready. Keine UI-Components, keine Pages — nur Fundament.

**In Scope:**
- Next.js 16 Projekt mit App Router
- Tailwind CSS v4 mit Generation AI Farbwelt A
- Font Setup (Inter)
- Vercel Projekt anlegen + Preview Deploy
- Basis-Layout Struktur (Header/Footer Platzhalter)
- 21st.dev Dependencies (Magic UI)

**Out of Scope:**
- Konkrete 21st.dev Components (Phase 2)
- Eigentliche Landing Page Content (Phase 2)
- Sign-up Flow (Phase 3)

</domain>

<decisions>
## Implementation Decisions

### Framework & Tooling
- **Next.js 16** mit App Router (neueste stable)
- **React 19** (shipped mit Next.js 16)
- **TypeScript** strict mode
- **pnpm** als Package Manager (schnell, disk-efficient)
- **ESLint** + **Prettier** von Start an

### Styling
- **Tailwind CSS v4** (neueste)
- Farbwelt A als Default:
  - `blue-brand: #3A3AFF` — Primary
  - `neon: #CEFF32` — Accent/CTA
  - `black-brand: #141414` — Dark Background
  - `gray-light: #F6F6F6` — Light Background
- Farbwelt B (Pink/Red) als sekundäre Palette konfigurieren aber nicht aktiv nutzen

### Typography
- **Inter** via `next/font/google` für UI/Body
- **Cascadia Code** für Code-Snippets (später, wenn relevant)
- Display Font TBD — erstmal Inter Bold für Headlines

### 21st.dev / Magic UI
- Dependencies installieren: `@21st-ui/react` oder Magic UI Basis
- Noch keine konkreten Components — werden in Phase 2 ausgewählt
- Peer Dependencies sicherstellen (framer-motion, etc.)

### Project Structure
```
app/
  layout.tsx        ← Root Layout mit Fonts
  page.tsx          ← Placeholder
  globals.css       ← Tailwind + CSS Variables
components/
  ui/               ← Für 21st.dev/Magic UI Components
  layout/           ← Header, Footer (Platzhalter)
lib/
  utils.ts          ← cn() helper etc.
public/
  logos/            ← Generation AI Logos
```

### Vercel
- Neues Vercel Projekt erstellen
- GitHub Repo verbinden
- Preview Deploys aktivieren
- Noch keine Environment Variables nötig (Phase 4)

### Claude's Discretion
- Exakte Tailwind v4 Config Syntax (hat sich geändert)
- ESLint Config Details
- Genaue 21st.dev/Magic UI Package Namen (muss recherchiert werden)
- Ob zusätzliche Dependencies nötig sind (clsx, tailwind-merge, etc.)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design System
- `../v1-web-app/Design.md` — Definiert Farben, Fonts, Patterns, Component-Referenzen

### Shared Resources
- `~/projects/_shared/NEXTJS-SETUP.md` — Standard Next.js Setup Patterns
- `~/projects/_shared/COLOR-SYSTEM.md` — Tailwind Farbsystem Best Practices

</canonical_refs>

<specifics>
## Specific Ideas

- Dark-first Design (siehe Design.md Prinzipien)
- `cn()` Helper von shadcn/ui Pattern übernehmen
- Logos aus `../Assets/logos/` kopieren nach `public/`
- CSS Custom Properties zusätzlich zu Tailwind für komplexere Theming-Fälle

</specifics>

<deferred>
## Deferred Ideas

- Display Font (Canela-ähnlich) — Font-Name noch nicht bestätigt
- ReactBits Components — werden in Phase 2 ausgewählt
- Farbwelt B Theming — nur konfigurieren, nicht implementieren

</deferred>

---

*Phase: 01-project-setup*
*Context gathered: 2026-04-12 via user discussion*
