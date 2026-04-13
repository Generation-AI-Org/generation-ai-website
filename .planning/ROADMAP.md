# Roadmap — Generation AI Website

> v1.0 Launch: Anfang Mai 2026

## Milestone Overview

| Phase | Name | Goal | Status |
|-------|------|------|--------|
| 1 | Project Setup | Next.js + Design System + Deploy | done |
| 2 | Landing Content | "Was wir bieten" + "Für wen" Sections | done |
| 3 | Sign-up Flow | Fragebogen + Auth (Supabase + Circle) | DNS pending |
| 4 | Polish & Launch | SEO, Performance, Accessibility, Final QA | planning |

**Timeline:** ~2-3 Wochen bis Launch

---

## Phase 1: Project Setup

**Status:** Done

**Was gebaut wurde:**
- [x] Next.js 16 + React 19 + Tailwind v4
- [x] Generation AI Farbwelt (Dark/Light Mode)
- [x] Terminal Splash (Typing, Sound, schwebendes Logo)
- [x] Hero Section mit SignalGrid Background
- [x] Header + Footer
- [x] Vercel Deploy + Domain DNS

---

## Phase 2: Landing Content

**Goal:** Statische Content-Sections die erklären was Generation AI bietet.

**Sections:**

### 2.1 "Was wir bieten"
- 3-4 Feature Cards:
  - KI-Tool-Bibliothek (tools-app)
  - Community (Circle - Austausch, Fragen)
  - Kurse & Guides (kommt)
  - Events (Webinare, Workshops, Guest Speaker - kommt)
- Icons oder Illustrationen
- Responsive Grid

### 2.2 "Für wen"
- Zielgruppe: Studierende im DACH-Raum
- Kurze Value Proposition
- Evtl. 2-3 Use Cases / Personas

**Deliverables:**
- [x] Features Section Component
- [x] "Für wen" Section Component
- [x] Mobile Responsive
- [x] Scroll-Anchor für "Mehr erfahren" Button

---

## Phase 3: Sign-up Flow

**Goal:** Funktionierender Fragebogen mit Auth-Integration.

**UI Components:**
- [x] Sign-up Section Layout
- [x] Fragebogen UI:
  - Was studierst du? (Dropdown/Chips)
  - Welche Hochschule? (Dropdown mit Suche)
  - **"Test Yourself" KI-Level 1-5** (Slider oder Chips)
  - Interessen (Multi-Select Chips)
- [x] Email Input + Submit Button
- [x] Loading State
- [x] Success State ("Check deine Emails")
- [x] Error Handling

**Backend:**
- [x] Supabase `profiles` Tabelle erstellen
- [x] Supabase Client konfiguriert
- [x] API Route `/api/auth/signup`
- [x] Circle API Integration
- [x] RLS Policies für profiles Tabelle

**Status:** DNS pending

---

## Phase 4: Polish & Launch

**Goal:** Production-ready, getestet, live.

**Plans:** 5 plans

Plans:
- [ ] 04-01-PLAN.md — SEO Metadata Setup (meta tags, robots, sitemap, schema.org)
- [ ] 04-02-PLAN.md — OG Image Creation (branded social sharing image)
- [ ] 04-03-PLAN.md — Accessibility Improvements (keyboard nav, focus states, ARIA)
- [ ] 04-04-PLAN.md — Performance Optimization (images, bundle, Lighthouse)
- [ ] 04-05-PLAN.md — Cross-Browser & Device Testing (final QA checkpoint)

**Requirements:**
- D-01 to D-07: SEO (Meta, OG, Twitter, Schema.org)
- D-08 to D-11: Performance (Core Web Vitals, Images, Bundle)
- D-12 to D-15: Accessibility (Keyboard, Screen Reader, Contrast, Focus)
- D-16 to D-18: Testing (Desktop/Mobile browsers, Breakpoints)

---

## Abhängigkeiten & Blocker

| Item | Required for | Status |
|------|--------------|--------|
| Circle API Token | Phase 3 | done |
| Domain DNS | Phase 1 | done |
| Supabase Projekt | Phase 3 | done |
| Content Texte | Phase 2 | done |
| DNS Migration | Phase 3 | pending |

---

## Cross-Project Sync

**Auth-Architektur:** `../Decisions/Auth-Architecture.md`
- Website erstellt Supabase User + Circle Member
- tools-app liest Supabase Session
- Beide auf `*.generation-ai.org` für Cookie-Sharing

**tools-app wartet auf:**
- Supabase Auth Setup (von Website Phase 3)
- Session-Check Middleware

---

*Last updated: 2026-04-13*
