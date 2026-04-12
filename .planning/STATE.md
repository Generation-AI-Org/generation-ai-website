# Project State — Generation AI Website

> Session-Brücke für Context nach /clear

## Current Status

**Phase:** 1 — Project Setup
**Current Plan:** 01-02-PLAN.md (shadcn/ui + Layout + Logos)
**Current Wave:** 2 (von 3)
**Milestone:** v1.0 Launch
**Last Updated:** 2026-04-12T17:15

## Progress

```
Phase 1: [###------] 1/3 plans complete
Wave 1:  ✅ Done
Wave 2:  ⏳ Next (Checkpoint — Browser-Test)
Wave 3:  ⏸️ Pending (Vercel Deploy)
```

## What's Done

- [x] PROJECT.md erstellt
- [x] REQUIREMENTS.md erstellt
- [x] ROADMAP.md erstellt (5 Phasen)
- [x] config.json erstellt
- [x] Phase 1 geplant (3 Plans, 3 Waves)
- [x] **01-01-PLAN.md** ✅ — Next.js 16 + Tailwind v4 + Farbwelt + Fonts (3 tasks, 4m 13s)
  - pnpm installiert, Next.js 16 Projekt erstellt
  - Tailwind v4 mit @theme CSS Config
  - Inter Font + cn() Helper
  - Placeholder Homepage mit Color Test Section

## Key Decisions Made

1. **Auth-Architektur:** "Soft SSO" — Supabase Auth + Circle API, gleiche Email = gleiche Identity, aber separate Sessions
2. **Flow:** Landing Page → Fragebogen → Circle Magic Link → Community
3. **Circle ist das Zentrum:** tools-app ist Add-on, erreichbar aus Circle
4. **21st.dev Components:** Aurora/Shape Hero, Rotating Text, Animated Cards, Lamp CTA
5. **Fragebogen:** 4-5 Fragen auf Landing Page (Gatekeeping + Daten sammeln)
6. **Sign-up Result:** Success Page ("Check deine Emails"), kein Login-Button für existierende User
7. **Tailwind v4:** CSS-basierte @theme Config statt tailwind.config.js
8. **No src/:** Root-level app/ für shadcn Kompatibilität

## Open Blockers

- [ ] Circle API Token erstellen
- [ ] Domain DNS konfigurieren
- [ ] Design Assets (Logo, Illustrationen)

## Next Steps

1. `/gsd-execute-phase 1` — Wave 2 ausführen (shadcn/ui + Layout + Logos)
2. Browser-Test: `pnpm dev` → localhost:3000 checken
3. Wave 3: GitHub Repo + Vercel Deploy

## Context für neue Sessions

Das Website-Projekt ist ein Unterprojekt von Generation AI. Die Haupt-App ist `tools-app/` (KI-Tool-Bibliothek). Diese Website ist die öffentliche Landing Page die Leute zur Circle Community (community.generation-ai.org) bringt.

**Tech Stack:** Next.js 15, React 19, Tailwind, Supabase Auth, Circle API, Vercel

**Design:** Farbwelt A (Blue #3A3AFF + Neon #CEFF32), siehe `../v1-web-app/Design.md`
