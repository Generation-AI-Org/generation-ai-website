# Roadmap — Generation AI Website

> v1.0 Launch: Landing Page + Sign-up Flow

## Milestone Overview

| Phase | Name | Goal | Status |
|-------|------|------|--------|
| 1 | Project Setup | Next.js Projekt mit Design System | ✅ done |
| 2 | Landing Page | Hero + Sections statisch | in_progress |
| 3 | Sign-up Flow | Fragebogen + Formular | pending |
| 4 | Auth Backend | Supabase + Circle Integration | pending |
| 5 | Polish & Launch | Performance, Testing, Deploy | pending |

---

## Phase 1: Project Setup

**Goal:** Funktionierendes Next.js Projekt mit Design System und 21st.dev ready.

**Requirements:** LP-04, DS-01, DS-03

**Plans:** 3 plans

Plans:
- [x] 01-01-PLAN.md — Next.js 16 + Tailwind v4 + Generation AI Farbwelt (DONE)
- [ ] 01-02-PLAN.md — shadcn/ui + Layout-Struktur + Logo Assets
- [ ] 01-03-PLAN.md — GitHub + Vercel Deployment

**Deliverables:**
- [x] Next.js 16 + React 19 Projekt erstellen
- [x] Tailwind CSS mit Generation AI Farbwelt A konfigurieren
- [ ] shadcn/ui Basis-Infrastruktur (fuer 21st.dev)
- [ ] Vercel Projekt anlegen
- [ ] Basis-Layout (Header/Footer Struktur)
- [x] Font Setup (Inter via next/font)

**Success Criteria:**
- `pnpm dev` laeuft ohne Fehler
- Tailwind Farben (blue-brand, neon, etc.) funktionieren
- Vercel Preview Deploy funktioniert

---

## Phase 2: Landing Page

**Goal:** Statische Landing Page mit allen Sections, responsive, performant.

**Requirements:** LP-01, LP-02, LP-03, LP-04, LP-05, DS-02

**Deliverables:**
- [ ] Hero Section mit 21st.dev Component (Aurora/Shape)
- [ ] Animierte Headline (Rotating Text)
- [ ] "Was wir bieten" Section mit Feature Cards
- [ ] "Fuer wen" Section
- [ ] CTA Section (Platzhalter fuer Sign-up)
- [ ] Mobile Responsive
- [ ] Lighthouse Score > 90

**Success Criteria:**
- Alle Sections sichtbar und responsive
- Animationen smooth (60fps)
- Core Web Vitals gruen

---

## Phase 3: Sign-up Flow

**Goal:** Funktionierender Fragebogen mit Multi-Step UX.

**Requirements:** SU-01, SU-02, SU-03, SU-04

**Deliverables:**
- [ ] Email-Input mit Validierung
- [ ] Fragebogen-UI (4-5 Fragen)
  - Single-Select Chips
  - Multi-Select Chips
  - Dropdown fuer Hochschule
- [ ] Form State Management (React Hook Form oder aehnlich)
- [ ] Success Page nach Submit
- [ ] Gatekeeping-Logik (Studierende vs. andere)
- [ ] Loading States & Error Handling

**Success Criteria:**
- User kann alle Fragen beantworten
- Validierung funktioniert
- Success Page erscheint nach Submit
- Mobile-friendly

---

## Phase 4: Auth Backend

**Goal:** Supabase Auth + Circle API Integration funktioniert.

**Requirements:** AU-01, AU-02, AU-03, AU-04

**Deliverables:**
- [ ] Supabase Auth Setup (Magic Link)
- [ ] User-Profil Tabelle in Supabase
- [ ] API Route: Sign-up Handler
  - Supabase User erstellen
  - Profil + Antworten speichern
  - Circle Member erstellen via API
- [ ] Circle API Integration
  - Admin API Token einrichten
  - Member erstellen mit Profile Fields
- [ ] Error Handling (API failures, duplicates)
- [ ] Email Templates (optional: Custom Supabase Template)

**Success Criteria:**
- Sign-up erstellt User in Supabase
- Circle Member wird automatisch erstellt
- Circle sendet Magic Link
- Daten in beiden Systemen konsistent

---

## Phase 5: Polish & Launch

**Goal:** Production-ready, getestet, deployed.

**Requirements:** LP-05, DS-04

**Deliverables:**
- [ ] Performance Optimierung
  - Image Optimization
  - Bundle Size Check
  - Lazy Loading
- [ ] Accessibility Audit
  - Keyboard Navigation
  - Screen Reader Test
  - Kontrast-Check
- [ ] Cross-Browser Testing
- [ ] Domain Setup (generation-ai.org -> Vercel)
- [ ] Analytics Setup (optional)
- [ ] Final Review & Launch

**Success Criteria:**
- Lighthouse Score > 90 (alle Kategorien)
- WCAG 2.1 AA compliant
- Domain live und erreichbar
- Sign-up Flow funktioniert end-to-end

---

## Dependencies & Blockers

| Dependency | Required for | Status |
|------------|--------------|--------|
| Circle API Token | Phase 4 | pending |
| Domain DNS | Phase 5 | pending |
| Design Assets (Logo, etc.) | Phase 1 | ready |
| Supabase (existiert) | Phase 4 | ready |

---

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| "Soft SSO" statt echtes SSO | Circle Business hat kein Custom SSO, Enterprise zu teuer |
| Circle sendet Magic Link | Zentrale Community-Erfahrung, tools-app ist Add-on |
| Fragebogen auf Landing Page | Gatekeeping + Daten VOR Circle-Account |
| 21st.dev Components | Moderne UI ohne alles selbst zu bauen |

---

*Last updated: 2026-04-12*
