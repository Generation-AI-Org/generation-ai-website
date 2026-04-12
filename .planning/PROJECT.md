# Generation AI — Website

> Die öffentliche Präsenz von Generation AI. Landing Page + Member Sign-up.

## What This Is

Eine Marketing-Website die Generation AI vorstellt und Studierende zur Community bringt. Zentraler Einstiegspunkt für alle, die sich für KI-Bildung interessieren.

**Geplante Domain:** [generation-ai.org](https://generation-ai.org)

## Core Value

**Gateway to Community.** Die Website ist kein Selbstzweck — sie existiert um Menschen in die Circle Community zu bringen. Jede Design-Entscheidung wird daran gemessen: "Bringt das mehr Leute dazu, sich anzumelden?"

## Context

- **Team:** Generation AI (Studierenden-Initiative, Uni Mannheim)
- **Stack:** Next.js 15, React 19, Tailwind CSS, Vercel
- **Design:** Bestehendes CI-System (siehe `../v1-web-app/Design.md`)
- **UI Components:** 21st.dev für moderne, animierte Komponenten
- **Related Projects:** 
  - `tools-app/` — KI-Tool-Bibliothek + Chat (separate App)
  - `circle-community/` — Circle.so Setup (community.generation-ai.org)

## Current Milestone: v1.0 Launch

**Goal:** Live-Website die Generation AI vorstellt und Sign-ups generiert.

**Target Features:**
- Hero Section mit klarer Value Proposition
- Was ist Generation AI? (Mission, Vision)
- Für wen? (Zielgruppe: Studierende DACH)
- Was bieten wir? (Community, Tools, Wissen)
- Sign-up Flow → Circle Community
- Team/About Section
- Responsive, mobile-first

**Auth-Architektur (Hybrid-Ansatz):**
- Supabase Auth als zentraler "Generation AI Account"
- Sign-up auf Website erstellt User in Supabase
- Backend erstellt Circle-Member via Admin API
- Circle sendet Magic Link für Community-Zugang
- Gleiche Email = gleiche Identity (tools-app + Circle)
- **Zentrale Doku:** `../Decisions/Auth-Architecture.md`

**Deferred:**
- Blog/Content-Bereich
- Partner-Showcase
- Events-Integration
- Mehrsprachigkeit (EN)

## Key Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-12 | Hybrid Auth statt Circle SSO | Business Plan hat kein Custom SSO, Enterprise zu teuer |
| 2026-04-12 | 21st.dev Components | Moderne UI ohne alles selbst zu bauen |
| 2026-04-12 | Separates Projekt von tools-app | Unterschiedliche Zwecke, cleaner getrennt |

## Design Constraints

- **Farbwelt A** (Blue/Green) als Default — siehe Design.md
- **Mobile-first** — Studierende nutzen primär Smartphones
- **Performance** — Schnelle Ladezeiten, Core Web Vitals im Grünen
- **Accessibility** — WCAG 2.1 AA Minimum

## Out of Scope (v1.0)

- [ ] Login-geschützter Member-Bereich auf der Website selbst
- [ ] Eigenes CMS für Content
- [ ] E-Commerce/Payments
- [ ] Newsletter (erstmal über Circle)

## Evolution

This document evolves at phase transitions and milestone boundaries.

---

*Last updated: 2026-04-12*
