# Project State — Generation AI Website

> Session-Brücke für Context nach /clear

## Current Status

**Phase:** 2 — Landing Content
**Current Plan:** 02-01-PLAN.md (Features + Für wen)
**Milestone:** v1.0 Launch (Anfang Mai 2026)
**Last Updated:** 2026-04-12T23:15

## Progress

```
Phase 1: [#########] ✅ Complete
Phase 2: [         ] Ready to plan
Phase 3: [         ] Pending (Sign-up + Auth)
Phase 4: [         ] Pending (Polish)
```

## What's Done

### Phase 1: Project Setup ✅
- Next.js 16 + React 19 + Tailwind v4
- Terminal Splash (Sound, Typing, schwebendes Logo)
- Hero Section mit SignalGrid Background
- Header + Footer (SVG Logos)
- Vercel Deploy: website-indol-eight-13.vercel.app
- Domain DNS: generation-ai.org → Vercel

### Quick Fixes (heute)
- Hero CTAs verlinkt ("Beitreten" → #signup, "Mehr erfahren" → #features)
- Header Logo auf SVG umgestellt

## Next Up

**Phase 2: Landing Content**
- "Was wir bieten" Section (Tools, Community, Kurse, Events)
- "Für wen" Section (Studierende DACH)

**Phase 3: Sign-up Flow**
- Fragebogen UI (Studiengang, Hochschule, KI-Level 1-5, Interessen)
- Auth Backend (Supabase + Circle)

## Key Decisions

1. **"Test Yourself" Level 1-5** im Fragebogen für KI-Erfahrung
2. **Sign-up Section auf Landing Page** statt separate Seite
3. **Soft SSO:** Supabase Auth + Circle API (siehe `../Decisions/Auth-Architecture.md`)
4. **Launch Anfang Mai:** MVP = Website + tools-app + aktive Circle Community

## Blocker

- [ ] Circle API Token erstellen
- [ ] Content-Texte für Sections

## Cross-Project

- **tools-app:** Baut Agent, wartet auf Auth
- **Auth-Architektur:** `../Decisions/Auth-Architecture.md`

## Context für neue Sessions

Website für Generation AI (Student KI Community DACH). 
Launch Anfang Mai. MVP: Landing Page mit Sign-up Flow der Supabase User + Circle Member erstellt.
Besonderheit: Terminal Splash + SignalGrid Background.
