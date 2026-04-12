# Project State — Generation AI Website

> Session-Brücke für Context nach /clear

## Current Status

**Phase:** 2 → 3 Transition
**Milestone:** v1.0 Launch (Anfang Mai 2026)
**Last Updated:** 2026-04-12T23:30

## Progress

```
Phase 1: [#########] ✅ Complete
Phase 2: [#########] ✅ Complete
Phase 3: [         ] Ready (Sign-up + Auth)
Phase 4: [         ] Pending (Polish)
```

## What's Done

### Phase 1: Project Setup ✅
- Next.js 16 + React 19 + Tailwind v4
- Terminal Splash (Sound, Typing, schwebendes Logo)
- Hero Section mit SignalGrid Background
- Header + Footer (SVG Logos)
- Vercel Deploy + Domain DNS (generation-ai.org)

### Phase 2: Landing Content ✅
- **Features Section:** 4 Cards (Tools, Community, Kurse, Events)
- **"Für wen" Section:** Zielgruppe Studierende DACH
- Coming Soon Badges für zukünftige Features
- Responsive Grid Layouts
- #features Scroll-Anchor funktioniert

## Next Up

**Phase 3: Sign-up Flow**
- Sign-up Section UI auf Landing Page
- Fragebogen (Studiengang, Hochschule, KI-Level 1-5, Interessen)
- Auth Backend (Supabase + Circle API)
- profiles Tabelle in Supabase

## Blocker für Phase 3

- [ ] Circle API Token erstellen

## Key Decisions

1. **"Test Yourself" Level 1-5** im Fragebogen für KI-Erfahrung
2. **Sign-up Section auf Landing Page** statt separate Seite
3. **Soft SSO:** Supabase Auth + Circle API
4. **Launch Anfang Mai:** MVP = Website + tools-app + aktive Circle Community

## Cross-Project

- **tools-app:** Phase 4 Auth done, wartet auf Website Sign-up
- **Auth-Architektur:** `../Decisions/Auth-Architecture.md`

## Context für neue Sessions

Website für Generation AI (Student KI Community DACH). 
Launch Anfang Mai. Phase 1+2 done. Phase 3 (Sign-up + Auth) ist nächster Schritt.
Besonderheit: Terminal Splash + SignalGrid Background.
Live: https://generation-ai.org
