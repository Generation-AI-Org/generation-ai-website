# Project State — Generation AI Website

> Session-Brücke für Context nach /clear

## Current Status

**Phase:** Pre-Phase 1 (Planning complete)
**Milestone:** v1.0 Launch
**Last Updated:** 2026-04-12

## What's Done

- [x] PROJECT.md erstellt
- [x] REQUIREMENTS.md erstellt
- [x] ROADMAP.md erstellt (5 Phasen)
- [x] config.json erstellt (YOLO mode, quality profile)

## Key Decisions Made

1. **Auth-Architektur:** "Soft SSO" — Supabase Auth + Circle API, gleiche Email = gleiche Identity, aber separate Sessions
2. **Flow:** Landing Page → Fragebogen → Circle Magic Link → Community
3. **Circle ist das Zentrum:** tools-app ist Add-on, erreichbar aus Circle
4. **21st.dev Components:** Aurora/Shape Hero, Rotating Text, Animated Cards, Lamp CTA
5. **Fragebogen:** 4-5 Fragen auf Landing Page (Gatekeeping + Daten sammeln)
6. **Sign-up Result:** Success Page ("Check deine Emails"), kein Login-Button für existierende User

## Open Blockers

- [ ] Circle API Token erstellen
- [ ] Domain DNS konfigurieren
- [ ] Design Assets (Logo, Illustrationen)

## Next Steps

1. `/gsd-plan-phase 1` — Project Setup planen
2. Oder direkt mit Phase 1 starten (Next.js Setup)

## Context für neue Sessions

Das Website-Projekt ist ein Unterprojekt von Generation AI. Die Haupt-App ist `tools-app/` (KI-Tool-Bibliothek). Diese Website ist die öffentliche Landing Page die Leute zur Circle Community (community.generation-ai.org) bringt.

**Tech Stack:** Next.js 15, React 19, Tailwind, Supabase Auth, Circle API, Vercel

**Design:** Farbwelt A (Blue #3A3AFF + Neon #CEFF32), siehe `../v1-web-app/Design.md`
