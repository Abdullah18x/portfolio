# Abdullah Akram — Portfolio

A personal portfolio site for a Senior Full Stack Engineer.
Built with **React + TypeScript + Vite + Material UI**, designed around a matte
finish with a light/dark theme, sidebar navigation, and a focus on being fast,
accessible, and easy to maintain.

Live areas: Hero · About · Strengths · Experience · Projects · Open Source ·
Skills · Education · Certifications · Languages · Contact.

---

## Stack

- **React 18 + TypeScript**
- **Vite** for the build
- **Material UI v5** as the component foundation, theme-customized so it doesn't look like a default MUI app
- **Lucide React** for icons
- **CSS variables + per-component CSS** for matte styling and animations
- No backend, no Framer Motion, no router

---

## Features

### Theming
- Light and dark modes, derived from a single matte palette
- User choice persisted to `localStorage`
- Theme is applied **synchronously before first paint** (via an inline script in `index.html`), so reloads don't flash the wrong mode
- All accent surfaces (buttons, borders, active nav, project arrows, etc.) read from `var(--accent)` so theme changes cascade automatically

### Navigation
- **Persistent sidebar** on desktop with section icons, indices, and active-section highlighting via `IntersectionObserver`
- Sidebar **collapses to an icon rail** (76px) — preference persisted
- **Drawer + sticky topbar** on mobile/tablet
- Smooth scrolling between sections via anchor links

### Loader
- Lightweight loader rendered directly inside `index.html` so it shows **before the JS bundle parses**
- Cycles through playful gerund-style words (`Pondering`, `Brewing coffee`, etc.)
- Reads the saved theme synchronously so it appears in the correct mode on reload
- Fades out automatically once React mounts (with a min-visible window to avoid flashing)

### Sections
- Each section is its own folder under `src/components/`, with a `.tsx` + `.css` pair
- All long-form content is **data-driven** — edit the files in `src/data/` and the UI updates everywhere
- On mobile, sections are **collapsible** via a `CollapsibleSection` wrapper (uses a `grid-template-rows: 0fr → 1fr` animation, no JS height measurement)
- Pagination + slide animations on the **Projects** and **Certifications** sections, kicking in only when there are more items than fit on one page
- Certifications also support a **category filter dropdown** with per-category counts
- Image lightbox on certification thumbnails with backdrop fade, scale-in animation, `Esc` to close, and click-outside-to-dismiss

### Accessibility & SEO
- Semantic HTML throughout (`header`, `nav`, `main`, `section`, `article`, `footer`)
- One `<h1>`, then `<h2>`/`<h3>` hierarchy
- Meta title, description, Open Graph, Twitter Card, and JSON-LD `Person` schema in `index.html`
- ARIA labels on icon buttons, focus-visible outlines, color contrast checked in both modes
- `prefers-reduced-motion` honoured by every animation in the project

---

## Project structure

```
src/
  assets/
  components/
    About/             — intro + stats grid
    Certifications/    — card grid, dropdown filter, pagination, slide animation, lightbox
    CollapsibleSection/— mobile collapse wrapper used by every section
    Contact/           — email/phone/call/résumé/social buttons
    Education/         — degree list, "Ongoing" badge
    Experience/        — timeline of roles
    GitHubActivity/    — (optional, currently disabled)
    Hero/              — name, tagline, primary CTAs, portrait
    ImageLightbox/     — reusable modal for image previews
    Languages/         — spoken languages with CEFR levels and flags
    OpenSource/        — published packages and tools
    Projects/          — card grid, pagination, slide animation
    SectionHeading/    — shared eyebrow + h2 + description block
    Sidebar/           — desktop sidebar + mobile topbar/drawer
    Skills/            — skill groups with category icons
    Strengths/         — core strengths grid
    ThemeToggle/       — light/dark switcher
  data/
    certificationsData.ts
    contactData.ts
    educationData.ts
    experienceData.ts
    openSourceData.ts
    projectsData.ts
    resumeData.ts       — name, title, tagline, photo, about copy, core strengths
    skillsData.ts
  pages/
    Home/               — composes all sections in order
  theme/
    theme.ts            — palette, typography, MUI overrides
  styles/
    global.css          — section/eyebrow/animation primitives
  App.tsx
  main.tsx
```

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
npm run preview   # serve the built site locally
```

---

## Editing content

Almost everything lives in `src/data/`. You shouldn't need to touch components
for normal content updates.

| File | What's in it |
| --- | --- |
| `resumeData.ts` | Name, title, tagline, location, contact links, photo path, about copy, core strengths, spoken languages |
| `experienceData.ts` | Work history — role, company, period, summary, highlights, stack |
| `projectsData.ts` | Featured projects + URLs. `PROJECTS_PER_PAGE` controls the pagination size |
| `openSourceData.ts` | Published packages and OSS tools |
| `skillsData.ts` | Skill groups (Languages, Frontend, Backend, …) |
| `educationData.ts` | Degrees, with an optional `status: 'ongoing'` flag for the in-progress badge |
| `certificationsData.ts` | Certifications, with `category` for the filter and an optional `image` for the lightbox preview. `CERTS_PER_PAGE` controls pagination |
| `contactData.ts` | Contact links + the section list used by the sidebar |
| `src/theme/theme.ts` | Colors, typography, MUI component overrides |
| `index.html` | Meta tags, Open Graph, JSON-LD, and the pre-mount loader |

---

## Assets

Drop these into `public/` (subfolders are fine; just update the matching path
in `src/data/resumeData.ts`):

- `images/profile.png` — main portrait used in the hero
- `images/profile2.png` — square avatar used in the sidebar and topbar
- `images/*.png` — certificate thumbnails referenced from `certificationsData.ts`
- `documents/resume.pdf` — résumé file linked from the hero/contact buttons
- `icons/favicon.svg` — favicon
- `og-image.png` *(optional)* — 1200×630 social share card

---

## Conventions

- **Each component has its own folder**, with `Component.tsx` and `Component.css`. Add new components the same way.
- **Lucide for line icons.** No emoji icons except where intentionally used (e.g. language flags).
- **No inline styles** for anything reusable — prefer CSS variables and the component's `.css` file.
- **No new dependencies without a reason** — the goal is a fast, light bundle.

---

## License

Personal portfolio — code is shared as a reference. Content (copy, photos,
résumé) belongs to Abdullah Akram.
