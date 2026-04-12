# Requirements — Generation AI Website

> Landing Page + Sign-up Flow für die Generation AI Community

## Milestone: v1.0 Launch

### Validated Requirements

*(None yet — project starting)*

### Active Requirements

#### Landing Page

- **LP-01**: Hero Section mit Value Proposition
  - Headline: Was ist Generation AI (kurz, catchy)
  - Subline: Für wen, was bringt's
  - CTA Button → Sign-up Flow
  - 21st.dev Hero Component mit Animation

- **LP-02**: "Was wir bieten" Section
  - Community (Circle)
  - Tools (KI-Tool-Bibliothek + Agent)
  - Wissen (Kurse, Content)
  - Feature Cards mit Icons/Illustrationen

- **LP-03**: "Für wen" Section
  - Zielgruppe klar machen: Studierende DACH
  - Pain Points ansprechen
  - Relatable, nicht corporate

- **LP-04**: Responsive Design
  - Mobile-first
  - Breakpoints: Mobile, Tablet, Desktop
  - Touch-friendly auf Mobile

- **LP-05**: Performance
  - Core Web Vitals im Grünen
  - Lighthouse Score > 90
  - Lazy Loading für Below-the-fold Content

#### Sign-up Flow

- **SU-01**: Email-Eingabe als erster Schritt
  - Validierung (echte Email-Adresse)
  - Duplicate-Check gegen Supabase

- **SU-02**: Onboarding-Fragebogen (4-5 Fragen)
  - Frage 1: "Studierst du aktuell?" → Ja / Nein / Gerade fertig
  - Frage 2: "An welcher Hochschule?" → Dropdown mit Top-Unis + Freitext
  - Frage 3: "Was interessiert dich an KI?" → Multi-Select Chips
    - Tools für Studium
    - Karriere/Jobs
    - Eigene Projekte
    - Einfach neugierig
  - Frage 4: "Was ist deine größte Hürde mit KI?" → Multi-Select Chips
    - Weiß nicht wo anfangen
    - Zu technisch
    - Keine Zeit
    - Kosten
  - Frage 5 (optional): "Wie hast du von uns gehört?"

- **SU-03**: Gatekeeping-Logik
  - Primär: Studierende willkommen
  - Nicht-Studierende: Freundliche Ablehnung oder Warteliste
  - Edge Cases definieren (Alumni, Schüler, etc.)

- **SU-04**: Success State
  - Bestätigung: "Check deine Emails!"
  - Erklärung was als nächstes kommt
  - Optional: Social Share

#### Auth-System (Backend)

- **AU-01**: Supabase Auth Integration
  - Magic Link als primäre Login-Methode
  - Optional: Passwort setzen nach erstem Login
  - Session Management

- **AU-02**: User-Profil in Supabase
  - Email (unique)
  - Fragebogen-Antworten
  - Timestamps (created, last_login)
  - Circle Member ID (nach Sync)

- **AU-03**: Circle API Integration
  - Member erstellen via Admin API
  - Profile Fields mappen (Uni, Interessen, etc.)
  - Magic Link wird von Circle gesendet
  - Error Handling (API down, Rate Limits)

- **AU-04**: Single Email Flow ("Soft SSO")
  - Circle sendet Magic Link für Community (Hauptziel)
  - Supabase Account existiert mit gleicher Email
  - tools-app Login: User gibt Email ein → Magic Link von Supabase
  - Gleiche Email = gleiche Identity, aber separate Sessions

#### Design & Branding

- **DS-01**: Farbwelt A (Blue/Green) als Default
  - Blue Ribbon (#3A3AFF) als Primary
  - Green Yellow (#CEFF32) als Accent/CTA
  - Cod Gray (#141414) für Text
  - Siehe `../v1-web-app/Design.md`

- **DS-02**: 21st.dev Components
  - Hero: Aurora Background oder Shape Landing Hero (Gradient-Effekte)
  - Headlines: Rotating Text / Text Effect (animiert)
  - Features: Cards mit Hover-Animation
  - CTA: Lamp Effect für Sign-up Section
  - Background: Sparkles oder Beams (subtle)
  - Form: Custom Chips für Fragebogen Multi-Select

- **DS-03**: Typography
  - Konsistent mit CI
  - Lesbar auf allen Devices
  - Heading Hierarchy klar

- **DS-04**: Accessibility
  - WCAG 2.1 AA Minimum
  - Keyboard Navigation
  - Screen Reader Support
  - Farbkontrast geprüft

### Out of Scope (v1.0)

- [ ] Team/About Section — nice-to-have, nicht kritisch für Launch
- [ ] Blog/Content-Bereich — später
- [ ] Partner-Showcase — später
- [ ] Events-Integration — später
- [ ] Mehrsprachigkeit (EN) — später
- [ ] Social Login (Google/Apple) — Phase 2

### Dependencies

- **Circle API Token** — muss erstellt werden (Settings → Developers)
- **Supabase Project** — existiert bereits (tools-app)
- **Domain** — generation-ai.org muss auf Vercel zeigen
- **Design Assets** — CI-Dokument, Logos, etc.

---

*Last updated: 2026-04-12*
