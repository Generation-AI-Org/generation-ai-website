# Phase 4: Polish & Launch - Context

**Gathered:** 2026-04-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Production-ready machen: Performance optimieren, SEO komplett einrichten, Accessibility prüfen, Mobile/Cross-Browser testen, dann Launch.

</domain>

<decisions>
## Implementation Decisions

### SEO — Vollständig umsetzen
- **D-01:** Meta Tags komplett (title, description, keywords, author, canonical)
- **D-02:** Open Graph vollständig (og:title, og:description, og:image, og:url, og:type, og:locale)
- **D-03:** Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- **D-04:** OG Image erstellen — Generation AI Branding, Logo + Tagline
- **D-05:** robots.txt mit Sitemap-Verweis
- **D-06:** sitemap.xml generieren (Next.js built-in)
- **D-07:** Schema.org JSON-LD (Organization, WebSite)

### Performance — Lighthouse > 90 auf allen Metriken
- **D-08:** Core Web Vitals optimieren (LCP, FID, CLS)
- **D-09:** Image Optimization (next/image, WebP, lazy loading)
- **D-10:** Font Loading bereits optimiert (display: swap vorhanden)
- **D-11:** Bundle Size prüfen und ggf. optimieren

### Accessibility — WCAG 2.1 AA
- **D-12:** Keyboard Navigation testen
- **D-13:** Screen Reader Kompatibilität (ARIA labels)
- **D-14:** Farbkontrast prüfen (min 4.5:1 für Text)
- **D-15:** Focus States sichtbar

### Testing — Moderne Browser + Mobile
- **D-16:** Chrome, Firefox, Safari (Desktop)
- **D-17:** Chrome, Safari (Mobile iOS/Android)
- **D-18:** Responsive Breakpoints: 375px, 768px, 1024px, 1440px

### Claude's Discretion
- OG Image Design (Farben, Layout, Typografie)
- Exakte Schema.org Struktur
- Performance-Optimierungen im Detail
- Accessibility-Fixes Priorisierung
- Testing-Reihenfolge

</decisions>

<specifics>
## Specific Ideas

- Alles "so gut wie möglich" — keine Abstriche bei Qualität
- User ist kein SEO/Performance-Experte — Best Practices anwenden ohne Rückfragen
- Launch sobald alles grün ist

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Shared Resources
- `~/projects/_shared/WEBSITE-CHECKLIST.md` — Launch-Checkliste (SEO, A11y, Performance)
- `~/projects/_shared/SEO-SNIPPETS.md` — Copy-paste Metadata, Schema, Sitemap

### Existing Code
- `app/layout.tsx` — Bestehende Metadata (erweitern, nicht ersetzen)
- `public/logos/` — Vorhandene Logo-Assets für OG Image

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `public/logos/` — SVG Logos für OG Image Erstellung
- `public/logo-blue-neon-new.jpg` / `public/logo-pink-red.jpg` — Hochauflösende Logos

### Established Patterns
- ThemeProvider für Dark/Light Mode — Farbkontrast für beide Modi prüfen
- Inter + GeistMono Fonts — bereits optimiert geladen

### Integration Points
- `app/layout.tsx` — Metadata erweitern
- `public/` — OG Image, robots.txt ablegen
- `app/sitemap.ts` — Next.js Sitemap Generator

</code_context>

<deferred>
## Deferred Ideas

None — Phase 4 ist der finale Polish vor Launch.

</deferred>

---

*Phase: 04-polish-launch*
*Context gathered: 2026-04-13*
