# DESIGN.md — Synapse

Design system reverse-engineered from a 960×608 screen recording. Values marked **~** are estimates; unmarked hex values were pixel-sampled from the video (compression affects exact values by a few points).

---

## 1. Design principles & mood

**Mood:** confident, cinematic, calm-technical. A product site that feels like a film title sequence: huge quiet type, glowing gradients, glass, and a single metallic hero object.

**Principles**
1. **Type is the layout.** Display headlines are huge, tightly tracked, medium-weight (not bold), and positioned to the edges (top-left / bottom-right) rather than centered.
2. **Two-tone headlines.** The second phrase is a muted lavender echo of the first ("answer first", "every limit").
3. **Light as material.** Depth comes from blurred glowing orbs, gradient horizons, and translucent glass, not hard shadows or flat fills.
4. **Rhythm by contrast.** Sections alternate violet → light → black → violet → light so each scroll beat feels like a new "scene".
5. **Chrome and chrome-adjacent.** Metallic/conic surfaces (the CTA shape, "Chrome study" tile) are the one tactile counterpoint to the soft glows.
6. **Restraint in UI chrome.** Controls are small (13px text, 36–38px height), pill or softly rounded, almost always white or black fills: the content carries the color.
7. **Motion is scroll.** Most animation is scrubbed to scroll position (pinned scenes, marquee, depth zoom); ambient motion is slow (6–12 s) and subtle.

**Voice:** short declaratives, product-as-system language ("Context assembled in 42 ms", "Ship it on a Tuesday"), sentence case, em-dash asides, no exclamation marks.

---

## 2. Color system

### 2.1 Core tokens
| Token | Hex | Usage |
|---|---|---|
| `bg-dark` | `#040306` (sampled `#040306`–`#06050A`) | Dark sections (Beyond, Work, Gallery) |
| `bg-light` | `#F5F4F7` (sampled) | Showcase section |
| `bg-footer` | `~#EBEAF0` | Footer |
| `ink` | `~#0A0A0B` | Text on light; black buttons; wordmark |
| `white` | `#FFFFFF` | Text on dark/violet; primary button fill on dark/violet |

### 2.2 Violet scale (hero/CTA gradient)
| Token | Hex | Usage |
|---|---|---|
| `violet-950` | `~#150030` | Deepest gradient stop |
| `violet-900` | `#1F0045` (sampled) | Hero lower-right / CTA base |
| `violet-850` | `#220054` (sampled) | Hero center |
| `violet-700` | `#3A0077` (sampled) | Mid gradient |
| `violet-500` | `#6913D0` (sampled) – `#7113BE` | Top-left gradient start |
| `violet-400` | `~#8A3FE0` | Halo/glow on dark |
| `lavender-300` | `#A375BE` (sampled) | Muted second headline line |
| `lilac-glow` | `~#C79BE0` | Bottom "horizon" glow on violet panels |

### 2.3 Accent / orb colors (card art only)
| Token | Hex | Usage |
|---|---|---|
| `orb-magenta` | `~#B724D6` | Live-session card orb |
| `orb-teal` | `~#1FA383` | "Ops" card |
| `orb-lime` | `~#B8F23A` | "Templates" card |
| `orb-amber` | `~#E39A3B` | "Kiln" work card |
| `orb-blue` | `~#6C8FE8` | Blue-lilac glass tile |
| `chrome-light/dark` | `~#F5F5F7` / `~#5A5A62` | Conic chrome surfaces |

### 2.4 Semantic
| Token | Hex | Usage |
|---|---|---|
| `live` | `~#F5C518` | "LIVE" status dot |
| `success` | `~#2FBF86` | (not shown; recommended) |
| `error` | `~#F0506E` | (not shown; recommended) |
| `focus-ring` | `#A375BE` (on dark/violet) / `#6913D0` (on light) | Focus indicator |

### 2.5 Text & border alphas
| Token | Value | Usage |
|---|---|---|
| `text-on-dark-1` | `rgba(255,255,255,.92)` | Headlines |
| `text-on-dark-2` | `rgba(255,255,255,.70–.80)` | Body on violet |
| `text-on-dark-3` | `rgba(255,255,255,.45–.60)` | Captions, mono labels |
| `text-on-light-1` | `ink` | Headings |
| `text-on-light-2` | `rgba(10,10,11,.60)` | Tagline |
| `text-on-light-3` | `rgba(10,10,11,.45)` | Footer column headers |
| `border-glass` | `rgba(255,255,255,.10–.18)` | Cards, nav pill, chips |
| `surface-glass` | `rgba(255,255,255,.06–.12)` | Glass fill on dark/violet |
| `surface-nav-violet` | `~rgba(25,8,45,.55)` (+blur 14px) | Nav on violet |

### 2.6 Usage rules
- Violet gradients are reserved for **hero** and **final CTA** panels. Never use them on body sections.
- Muted lavender text is for **large display text only** (≥24px): contrast on violet is ~3.6–4.5:1.
- Accent orb colors appear **only inside card art**, never as UI fills, links, or text.
- At most one saturated hue per card.

### 2.7 Gradients
```css
--grad-hero:
  radial-gradient(60% 40% at 50% 105%, rgba(199,155,224,.85) 0%, rgba(199,155,224,0) 70%),
  linear-gradient(135deg, #6913D0 0%, #3A0077 35%, #220054 65%, #1F0045 100%);
--grad-chrome: conic-gradient(from 200deg, #f5f5f7, #8c8c94, #f5f5f7, #5a5a62, #e8e8ec, #f5f5f7);
--grad-orb-violet: radial-gradient(closest-side, rgba(199,120,255,.9), rgba(105,19,208,.0));
```

---

## 3. Typography

**Families:** Sans — **Geist** (best match; alt: Inter Tight, Neue Montreal). Mono — **Geist Mono** (alt: JetBrains Mono). Display tracking is very tight.

**Scale** (px at ~960 viewport → fluid `clamp()` for desktop):
| Token | Size (~) | Fluid clamp | Weight | Line-height | Tracking | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | 150px | `clamp(80px, 15.5vw, 220px)` | 500 | 0.95 | −0.05em | Showcase marquee |
| `display-l` | 112px | `clamp(64px, 11.7vw, 180px)` | 500 | 0.95 | −0.045em | "Beyond / every limit" |
| `display-m` | 84px | `clamp(56px, 8.75vw, 200px)` | 500 | 0.95 | −0.05em | Footer wordmark |
| `h1` | 64px | `clamp(40px, 6.7vw, 96px)` | 500 | 1.05 | −0.04em | Hero headline |
| `h2` | 48px | `clamp(36px, 5vw, 72px)` | 500 | 1.0 | −0.04em | CTA headline |
| `card-title-l` | 26px | `clamp(20px, 2.7vw, 36px)` | 500 | 1.05 | −0.03em | Work card names |
| `card-title` | 20px | 20px | 500 | 1.1 | −0.02em | Showcase card titles |
| `stat` | 22px | 22–28px | 500 | 1.1 | −0.02em | Stat numbers |
| `body` | 13px | 13–15px | 400 | 1.5 | −0.005em | Hero/CTA paragraphs |
| `body-sm` | 11px | 11–12px | 400 | 1.55 | 0 | Card subtext, footer links, dark body |
| `button` | 13px | 13px | 500 | 1 | 0 | Buttons, nav |
| `caption` | 9–10px | 9–10px | 400 | 1.4 | 0 | Footnotes, card meta |
| `mono-label` | 8–9px | 8–10px | 400–500 | 1.2 | +0.14–0.16em, UPPERCASE | SELECTED WORK, MEDIAN LOOP, footer col heads, years |

**Rules**
- Headline weight is **500**, never bold. Use `font-feature-settings: "ss01","cv11"` if available.
- Two-tone headlines: line 1 `white`, line 2 `lavender-300` (opacity ~85%).
- Never underline except link hover in the footer.

---

## 4. Spacing & layout

**Scale (4px base):** 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120.

**Containers**
- Sections are full-bleed; content sits inside `padding-inline: ~48px` at 960px (`clamp(20px, 5vw, 72px)`), `max-width ~1440px` centered on ultra-wide.
- Hero and CTA are **inset panels**: `margin: ~10px`, radius `~20px`.
- Content is edge-anchored (left/right/corners), not center-column.

**Grid**
- No strict column grid is visible; layouts are two-zone: text zone (left ~40%) + object zone (right ~50%).
- Footer: left brand block + 3 equal link columns (gap ~40px) on the right.
- Work rail: single row, card gap ~16px.

**Vertical rhythm**
- Hero text: headline at ~15vh from top; paragraph ~65% down; buttons ~+24px; chip ~+16px.
- Section heights: Hero 100svh; Showcase ~150vh; Beyond ~300vh (pinned); Work ~250vh (pinned); Gallery ~250vh (pinned); CTA 100svh; Footer ~70vh.

**Breakpoints**
| Name | Min width | Behavior |
|---|---|---|
| `sm` | 640px | 2-col footer links, nav shows more |
| `md` | 768px | Full nav links visible |
| `lg` | 1024px | Hero two-zone layout, pinned scenes enabled |
| `xl` | 1280px | Max display sizes |
| `2xl` | 1536px | Container cap ~1440px |

---

## 5. Elevation, borders & radius

**Radius**
| Token | Value | Usage |
|---|---|---|
| `radius-pill` | 9999px | Nav, buttons (showcase), chips, avatars |
| `radius-panel` | ~20px | Hero/CTA panel |
| `radius-card` | ~16–18px | Showcase / live-session cards |
| `radius-work` | ~12px | Work rail cards |
| `radius-tile` | ~6–10px | Gallery tiles |
| `radius-btn` | ~10px | Hero buttons (rounded-rect, not full pill) |

**Borders**
- Glass hairline: `1px solid rgba(255,255,255,.10–.18)` on dark/violet.
- Work cards: `1px solid rgba(255,255,255,.08)`.
- Light surfaces use shadow rather than borders.

**Shadows / glows**
| Token | Value | Usage |
|---|---|---|
| `shadow-nav-light` | `0 4px 20px rgba(20,10,40,.08)` | White nav pill |
| `shadow-card-light` | `0 24px 60px rgba(20,10,40,.22)` | Showcase cards on light |
| `glow-violet` | `0 30px 80px rgba(110,20,190,.45)` | Live-session card |
| `shadow-btn-hover` | `0 8px 24px rgba(0,0,0,.25)` | Black button hover |

**Glass / blur**
- Nav and chips: `backdrop-filter: blur(14px)`; cards over marquee text: `blur(6px)`.
- Depth blur (gallery): `filter: blur(0–10px)` by distance.
- Orbs: `filter: blur(24–40px)`.

---

## 6. Components

### 6.1 Navbar (floating pill)
- Position fixed, top ~16px, centered. Height ~38px; padding `4px 6px`; gap between items ~22px; radius pill.
- Items: star icon (14px), 5 links (13px/500), "Get started" inner button (~28px high, padding `0 14px`).
- **Themes:**
  | Theme | Pill | Links | Button |
  |---|---|---|---|
  | violet | `rgba(25,8,45,.55)` + blur, border glass | white 85% | white fill / ink text |
  | light | white, `shadow-nav-light` | ink 80% | ink fill / white text |
  | dark | `rgba(255,255,255,.06)` + blur, border glass | white 80% | white fill / ink text |
- States: link hover → opacity 70→100% (150 ms); focus-visible → 2px `focus-ring`, 2px offset; active → scale .98.
- Theme transition: background/color/border 250 ms ease.
- Mobile: star + "Get started" + menu button; links in a full-screen sheet.

### 6.2 Buttons
| Variant | Spec |
|---|---|
| **Primary (light)** | Fill `#FFF`, text `ink`, 13px/500, height ~36px, padding `0 16px`, radius ~10px (hero) / pill (nav). Optional trailing arrow 14px. |
| **Primary (dark)** | Fill `ink`, text `#FFF`, height ~36px, padding `0 22px`, pill. ("Explore the collection") |
| **Secondary (glass)** | Fill `rgba(255,255,255,.12)`, border `rgba(255,255,255,.14)`, text white. ("See pricing") |
| **Icon (circle)** | 22–24px circle, white fill, ink arrow. (Live-card send) |

States (all): hover — translateY(−1px), arrow +3px, 150 ms ease-out; active — scale .98, 80 ms; focus-visible — 2px ring; disabled (assumed) — opacity .4, no pointer events.

### 6.3 Chips / badges
- **Tag chip** (e.g., "✦ Live session", "Assistant", "Ops"): height ~20px, padding `0 8px`, radius pill, glass fill `rgba(255,255,255,.12)`, 10px/500 white.
- **Status badge** ("● LIVE"): 9px mono uppercase, amber dot 5px (`live`), glass fill.
- **Index chip** (`03`): 18px circle outline `rgba(255,255,255,.25)`, mono 8px.
- **Social-proof chip:** pill, glass `rgba(255,255,255,.1)`, padding `4px 12px 4px 4px`; 5 avatars 18px (overlap −6px, 1.5px ring `#2a0a55`); text 11px white.

### 6.4 Live-session card (hero)
- ~200×280px (scales with vw), radius ~18px, border glass, `glow-violet`, 3D tilt `rotateY(−8deg) rotateX(3deg)`.
- Layout (top→bottom): chips row → animated orb (upper half) → input bar (dark glass, 11px text + circle send button) → 5-segment progress (38×2px, gap 4px; 3 on, 2 at 25%) → orb (magenta) → title + sub.
- Ambient motion: orb drift 8–12 s; progress segments cycle on a ~4 s loop.

### 6.5 Showcase card (3D carousel)
- ~210×300px, radius ~16px, glass border; top: tag chip (left) + mono domain (right, 10px, white 70%); bottom: title 20px + sub 11px.
- Perspective states: center (rotateY 0, scale 1), near (±22°, .88), far (±40°, .7, blur 2–4px).
- Idle float: translateY ±6px, 6 s ease-in-out, staggered.
- Hover (desktop): center card scale 1.02, glow intensifies (300 ms).

### 6.6 Work card (rail)
- ~290×200px (active ×1.15), radius ~12px, border `rgba(255,255,255,.08)`.
- Top row: index chip + lowercase name | year mono. Bottom: name 26px, sub 9px; active shows "View project →" (10px).
- Hover: translateY −4px, border → `.2` alpha, orb scale 1.08, 300 ms.
- Focus-visible: 2px ring.

### 6.7 Gallery tile
- Small card (~60–240px wide by depth), radius ~6–10px, gradient/blur art, 8px label top-left.
- Depth rules: blur = `|z − focal| × k` (0–10px); opacity .25–1.

### 6.8 Stats block
- Right-aligned stack, gap ~24px. Number 22px/500 white; label 8px mono uppercase tracking .14em, white 45%.
- Count-up animation 900 ms ease-out on first reveal.

### 6.9 Footer
- Brand block (star 14px purple + wordmark `display-m` + tagline 11px) | 3 link columns.
- Column header: 8px mono uppercase tracking .14em, ink 45%. Links 11px/500, row gap ~10px; hover: underline (offset 3px), 150 ms.

### 6.10 Not shown in source (assumed spec, for completeness)
- **Inputs:** height 44px, radius 12px, glass fill on dark / white on light, 1px border, focus ring 2px `focus-ring`; error border `error`.
- **Tabs / accordion / modal / table:** none appear. If added, use glass surface, 12–16px radius, 250 ms ease-out transitions.

---

## 7. Iconography & imagery

**Icons**
- Brand mark: **4-point concave star** ("sparkle"). Sizes 14px (nav, footer), ~70px (Beyond, with glow), large chrome 3D version (CTA).
- UI icons: thin-stroke arrows (→), 1.5px stroke, round caps, 14px; style ≈ Lucide/Feather. Only arrows appear.
- Avatars: 18px gradient circles (placeholders; use abstract gradients, not photos).

**Imagery**
- No photography. All "imagery" is generated: blurred color orbs on dark, conic chrome, diagonal-line glass, concentric rings.
- Card art recipe: dark base `#0a0710`–`#14081f` + 1–2 radial orbs (`filter: blur(24–40px)`) + optional fine texture (diagonal lines 1px @ 8% opacity, or concentric rings).
- 3D: a single chrome concave 4-point star on the CTA, lit by a violet-tinted environment map; metalness 1, roughness ~.12.
- Don't add stock photos, illustrations of people, or emoji.

---

## 8. Motion & interaction

**Easing tokens**
```
--ease-out-expo: cubic-bezier(.16, 1, .3, 1);
--ease-in-out:   cubic-bezier(.65, 0, .35, 1);
--ease-out:      cubic-bezier(.22, 1, .36, 1);
```
**Durations:** micro 80–150 ms · hover 150–300 ms · theme swaps 250 ms · entry reveals 700–900 ms · ambient loops 4–12 s.

| Moment | Trigger | Behavior |
|---|---|---|
| Hero entry | load / re-enter viewport | Headline lines blur(12px→0) + translateY(16px→0) + fade, 700 ms, stagger 120 ms; then body/buttons/chip; card rises 800 ms |
| Hero exit | scroll | Panel translates at ~0.5× scroll speed |
| Nav theme | section crossing | 250 ms crossfade of pill/text/button colors |
| Marquee | scroll (scrubbed) | translateX ≈ +10% → −60% over the section |
| Carousel | scroll + drag | Cards sweep through center; rotateY/scale/blur interpolated by distance from center |
| Beyond (pinned) | scroll (scrubbed) | Words slide from corners & unblur → star scale 1→~1.7 while text fades to ~15–25% + blur → stats fade up |
| Stats | first reveal | Count-up 900 ms |
| Work rail | scroll (scrubbed) | Vertical scroll → horizontal translate; active card scale 1.15 |
| Gallery | scroll (scrubbed) | translateZ −1200 → +400; blur/opacity by focal distance |
| Section wash | between work → gallery | ~300–400 ms dim/desaturate |
| CTA shape | pointer | Rotation eases toward cursor (lerp ~.08); idle 0.1 rad/s |
| Buttons | hover/active | See 6.2 |
| Ambient | continuous | Orb drift 8–12 s; card float 6 s; progress bar cycle ~4 s |

**Smooth scroll:** Lenis, `lerp ≈ 0.1`.
**Reduced motion:** disable Lenis, pinned scrubs, marquee, blur transitions, 3D autorotate; render static composed layouts.

---

## 9. Accessibility

- **Contrast:** white on `violet-850` and `bg-dark` ≫ 7:1. `lavender-300` on violet ≈ 3.6–4.5:1 → large text only. Caption text at white 45% on dark ≈ 5:1 on `#040306` but lower on violet: don't use 45% on violet.
- **Focus:** 2px solid ring (`#A375BE` on dark/violet, `#6913D0` on light), 2px offset, on all interactive elements. Never `outline: none` without replacement.
- **Targets:** ≥ 36px height for buttons (nav inner button 28px is small; add ≥ 44px hit area via padding on touch).
- **Semantics:** `<header>/<nav>/<main>/<section aria-labelledby>/<footer>`; one `<h1>`; stats as real text; links are `<a>`, actions are `<button>`.
- **Decorative media:** gradients, orbs, stars, 3D canvas → `aria-hidden`; marquee has a hidden static equivalent.
- **Motion:** honor `prefers-reduced-motion`; no flashing; pinned sections must degrade to a normal scrolling flow.
- **Transparency:** honor `prefers-reduced-transparency` / `prefers-contrast: more` → solid `#1a0a30` surfaces and stronger borders.
- **Keyboard:** carousel and work rail operable via arrow keys; skip link to main content.

---

## 10. Tokens: CSS variables & Tailwind config

### 10.1 CSS variables
```css
:root {
  /* Surfaces */
  --bg-dark: #040306;
  --bg-light: #F5F4F7;
  --bg-footer: #EBEAF0;
  --ink: #0A0A0B;
  --white: #FFFFFF;

  /* Violet */
  --violet-950: #150030;
  --violet-900: #1F0045;
  --violet-850: #220054;
  --violet-700: #3A0077;
  --violet-500: #6913D0;
  --violet-400: #8A3FE0;
  --lavender-300: #A375BE;
  --lilac-glow: #C79BE0;

  /* Orbs */
  --orb-magenta: #B724D6;
  --orb-teal: #1FA383;
  --orb-lime: #B8F23A;
  --orb-amber: #E39A3B;
  --orb-blue: #6C8FE8;

  /* Semantic */
  --live: #F5C518;
  --success: #2FBF86;
  --error: #F0506E;
  --focus: #A375BE;

  /* Alphas */
  --on-dark-1: rgba(255,255,255,.92);
  --on-dark-2: rgba(255,255,255,.75);
  --on-dark-3: rgba(255,255,255,.50);
  --glass: rgba(255,255,255,.08);
  --glass-border: rgba(255,255,255,.14);
  --nav-violet: rgba(25,8,45,.55);

  /* Radius */
  --r-pill: 9999px;
  --r-panel: 20px;
  --r-card: 16px;
  --r-work: 12px;
  --r-btn: 10px;
  --r-tile: 8px;

  /* Shadows */
  --shadow-nav-light: 0 4px 20px rgba(20,10,40,.08);
  --shadow-card-light: 0 24px 60px rgba(20,10,40,.22);
  --glow-violet: 0 30px 80px rgba(110,20,190,.45);

  /* Type */
  --font-sans: "Geist", "Inter Tight", system-ui, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", ui-monospace, monospace;

  /* Motion */
  --ease-out-expo: cubic-bezier(.16,1,.3,1);
  --ease-in-out: cubic-bezier(.65,0,.35,1);
  --dur-micro: 120ms;
  --dur-hover: 200ms;
  --dur-reveal: 800ms;
}

body { background: var(--bg-dark); color: var(--on-dark-1); font-family: var(--font-sans); }

.display-xl { font-size: clamp(80px, 15.5vw, 220px); line-height: .95; letter-spacing: -.05em; font-weight: 500; }
.display-l  { font-size: clamp(64px, 11.7vw, 180px); line-height: .95; letter-spacing: -.045em; font-weight: 500; }
.display-m  { font-size: clamp(56px, 8.75vw, 200px); line-height: .95; letter-spacing: -.05em; font-weight: 500; }
.h1         { font-size: clamp(40px, 6.7vw, 96px);  line-height: 1.05; letter-spacing: -.04em; font-weight: 500; }
.h2         { font-size: clamp(36px, 5vw, 72px);    line-height: 1;    letter-spacing: -.04em; font-weight: 500; }
.mono-label { font: 500 9px/1.2 var(--font-mono); letter-spacing: .15em; text-transform: uppercase; }

:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

### 10.2 Tailwind config (`tailwind.config.ts`)
```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { dark: "#040306", light: "#F5F4F7", footer: "#EBEAF0" },
        ink: "#0A0A0B",
        violet: {
          950: "#150030", 900: "#1F0045", 850: "#220054",
          700: "#3A0077", 500: "#6913D0", 400: "#8A3FE0",
        },
        lavender: { 300: "#A375BE" },
        lilac: { glow: "#C79BE0" },
        orb: { magenta: "#B724D6", teal: "#1FA383", lime: "#B8F23A", amber: "#E39A3B", blue: "#6C8FE8" },
        live: "#F5C518",
        success: "#2FBF86",
        error: "#F0506E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter Tight", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(80px,15.5vw,220px)", { lineHeight: ".95", letterSpacing: "-0.05em", fontWeight: "500" }],
        "display-l":  ["clamp(64px,11.7vw,180px)", { lineHeight: ".95", letterSpacing: "-0.045em", fontWeight: "500" }],
        "display-m":  ["clamp(56px,8.75vw,200px)", { lineHeight: ".95", letterSpacing: "-0.05em", fontWeight: "500" }],
        h1: ["clamp(40px,6.7vw,96px)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "500" }],
        h2: ["clamp(36px,5vw,72px)", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "500" }],
        body: ["13px", { lineHeight: "1.5" }],
        "body-sm": ["11px", { lineHeight: "1.55" }],
        caption: ["10px", { lineHeight: "1.4" }],
        mono: ["9px", { lineHeight: "1.2", letterSpacing: "0.15em" }],
      },
      borderRadius: { panel: "20px", card: "16px", work: "12px", btn: "10px", tile: "8px" },
      boxShadow: {
        "nav-light": "0 4px 20px rgba(20,10,40,.08)",
        "card-light": "0 24px 60px rgba(20,10,40,.22)",
        "glow-violet": "0 30px 80px rgba(110,20,190,.45)",
      },
      backgroundImage: {
        hero: "radial-gradient(60% 40% at 50% 105%, rgba(199,155,224,.85) 0%, rgba(199,155,224,0) 70%), linear-gradient(135deg,#6913D0 0%,#3A0077 35%,#220054 65%,#1F0045 100%)",
        chrome: "conic-gradient(from 200deg,#f5f5f7,#8c8c94,#f5f5f7,#5a5a62,#e8e8ec,#f5f5f7)",
      },
      transitionTimingFunction: { "out-expo": "cubic-bezier(.16,1,.3,1)" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(-6px)" }, "50%": { transform: "translateY(6px)" } },
        drift: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(6%,-4%) scale(1.08)" } },
      },
      animation: { float: "float 6s ease-in-out infinite", drift: "drift 10s ease-in-out infinite" },
    },
  },
} satisfies Config;
```

---

## 11. Do's and Don'ts

**Do**
- Set headlines at weight 500 with tight negative tracking; make them *big*.
- Anchor type to edges/corners and let negative space breathe.
- Use two-tone headlines (white + muted lavender) for emphasis.
- Build depth with blurred orbs, gradients, and glass, not drop-shadows on dark.
- Keep UI controls small and monochrome (white or black pills).
- Switch the nav theme per section so it always reads against the background.
- Tie big animations to scroll; keep ambient motion slow and subtle.
- Use mono uppercase micro-labels for metadata (year, index, stat labels).
- Provide reduced-motion and reduced-transparency fallbacks.

**Don't**
- Don't use bold (700+) display type or positive letter-spacing on headlines.
- Don't introduce a second accent color into the UI chrome. Orb colors live only in card art.
- Don't use lavender text for small copy (contrast fails).
- Don't put violet gradients behind long-form text sections.
- Don't use photography, stock imagery, or emoji.
- Don't use hard, dark drop-shadows on dark backgrounds, or thick borders (> 1px).
- Don't center-align everything; avoid centered hero headlines.
- Don't add fast looping animations or autoplay anything that can't be paused/disabled.
- Don't copy the original logo or artwork; use original placeholders.
