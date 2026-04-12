# Roadmap — Generation AI Website

> v1.0 Launch: Anfang Mai 2026

## Milestone Overview

| Phase | Name | Goal | Status |
|-------|------|------|--------|
| 1 | Project Setup | Next.js + Design System + Deploy | ✅ done |
| 2 | Landing Content | "Was wir bieten" + "Für wen" Sections | pending |
| 3 | Sign-up Flow | Fragebogen + Auth (Supabase + Circle) | pending |
| 4 | Polish & Launch | Mobile, Performance, Final QA | pending |

**Timeline:** ~2-3 Wochen bis Launch

---

## Phase 1: Project Setup ✅

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
- [ ] Features Section Component
- [ ] "Für wen" Section Component
- [ ] Mobile Responsive
- [ ] Scroll-Anchor für "Mehr erfahren" Button

---

## Phase 3: Sign-up Flow

**Goal:** Funktionierender Fragebogen mit Auth-Integration.

**UI Components:**
- [ ] Sign-up Section Layout
- [ ] Fragebogen UI:
  - Was studierst du? (Dropdown/Chips)
  - Welche Hochschule? (Dropdown mit Suche)
  - **"Test Yourself" KI-Level 1-5** (Slider oder Chips)
  - Interessen (Multi-Select Chips)
- [ ] Email Input + Submit Button
- [ ] Loading State
- [ ] Success State ("Check deine Emails")
- [ ] Error Handling

**Backend:**
- [ ] Supabase `profiles` Tabelle erstellen (Schema siehe Auth-Architecture.md)
- [ ] Supabase Client mit Cookie-Domain `.generation-ai.org` konfigurieren
- [ ] API Route `/api/auth/signup`:
  - Supabase User erstellen (Magic Link)
  - Profil + Fragebogen-Antworten speichern
  - Circle Member via Admin API erstellen
- [ ] Circle API Integration
- [ ] RLS Policies für profiles Tabelle

**Koordination mit tools-app:**
- tools-app Phase 4 (Auth Layer) ist FERTIG
- tools-app liest Sessions die wir erstellen
- Gleiche Supabase-Instanz, gleiche Cookie-Domain
- Siehe: `../Decisions/Auth-Architecture.md`

**Abhängigkeiten:**
- [ ] Circle API Token (Admin API) — Luca muss erstellen
- [x] Supabase Projekt (existiert)
- [x] Domain DNS konfiguriert

---

## Phase 4: Polish & Launch

**Goal:** Production-ready, getestet, live.

**Tasks:**
- [ ] Mobile Testing (alle Breakpoints)
- [ ] Cross-Browser Testing
- [ ] Performance Check (Lighthouse > 90)
- [ ] SEO Basics (Meta Tags, OG Image)
- [ ] Accessibility Check
- [ ] Final Content Review
- [ ] Launch 🚀

---

## Abhängigkeiten & Blocker

| Item | Required for | Status |
|------|--------------|--------|
| Circle API Token | Phase 3 | ⏳ pending |
| Domain DNS | Phase 1 | ✅ done |
| Supabase Projekt | Phase 3 | ✅ exists |
| Content Texte | Phase 2 | ⏳ pending |

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

*Last updated: 2026-04-12*
