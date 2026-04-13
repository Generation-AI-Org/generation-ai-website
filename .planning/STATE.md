# Project State — Generation AI Website

> Session-Brücke für Context nach /clear

## Current Status

**Phase:** 3 → 4 Transition
**Milestone:** v1.0 Launch (Anfang Mai 2026)
**Last Updated:** 2026-04-13T06:00

## Progress

```
Phase 1: [#########] ✅ Complete
Phase 2: [#########] ✅ Complete
Phase 3: [########-] 🟡 Fast fertig (DNS pending)
Phase 4: [         ] Ready (Polish & Launch)
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

### Phase 3: Sign-up Flow 🟡
**Code komplett, wartet auf DNS-Propagation**

- ✅ Sign-up Section UI mit Fragebogen
  - Name, Email
  - Hochschule (Dropdown)
  - Studienrichtung (Dropdown)
  - KI-Level 1-5 (Button Grid)
  - Interessen (Multi-Select Chips)
- ✅ API Route `/api/auth/signup`
- ✅ Supabase Integration
  - Admin Client für User-Erstellung
  - `profiles` Tabelle mit RLS
  - Magic Link Generation
- ✅ Circle API v2 Integration
  - Member erstellen bei Signup
  - circle_member_id in Profile speichern
- ✅ Resend Email Service
  - Branded HTML Template
  - Magic Link Email
- ✅ Hero CTA → #signup Scroll
- ⏳ **DNS Migration Strato → Vercel**
  - Nameserver umgestellt
  - Alle Records in Vercel angelegt
  - Wartet auf Propagation (~30-60 Min)
- ⏳ **Resend Domain-Verifizierung**
  - generation-ai.org (EU Region)
  - DKIM, SPF, MX Records konfiguriert
  - Wird grün sobald DNS propagiert

**Zum Abschließen:**
1. DNS propagiert checken: `dig NS generation-ai.org`
2. Resend Domain verifizieren
3. End-to-End Test (Signup → Email → Login)

## Next Up

**Phase 4: Polish & Launch**
- Mobile Testing
- Performance (Lighthouse > 90)
- SEO (Meta Tags, OG Image)
- Accessibility
- Final QA
- Launch 🚀

## Key Decisions

1. **"Test Yourself" Level 1-5** im Fragebogen für KI-Erfahrung
2. **Sign-up Section auf Landing Page** statt separate Seite
3. **Soft SSO:** Supabase Auth + Circle API
4. **Resend für Emails** statt Supabase Built-in (bessere Deliverability)
5. **DNS über Vercel** statt Strato (bessere Kontrolle, MX für Resend)
6. **Launch Anfang Mai:** MVP = Website + tools-app + aktive Circle Community

## Infrastructure

- **Domain:** generation-ai.org
- **DNS:** Vercel (ns1/ns2.vercel-dns.com)
- **Hosting:** Vercel
- **Auth:** Supabase
- **Community:** Circle (community.generation-ai.org)
- **Email:** Resend (noreply@generation-ai.org)

## Cross-Project

- **tools-app:** Phase 4 Auth done, wartet auf Website Sign-up
- **Auth-Architektur:** `../Decisions/Auth-Architecture.md`
- **Shared Supabase:** wbohulnuwqrhystaamjc.supabase.co

## Context für neue Sessions

Website für Generation AI (Student KI Community DACH). 
Launch Anfang Mai. Phase 1+2 done. Phase 3 fast fertig (DNS pending).
Phase 4 (Polish & Launch) als nächstes.
Besonderheit: Terminal Splash + SignalGrid Background.
Live: https://generation-ai.org
