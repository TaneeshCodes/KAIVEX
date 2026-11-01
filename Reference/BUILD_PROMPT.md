# Synapse: Build Prompt (reverse-engineered from `synapse.webm`)

> **Source note.** The upload was a 17.3 s screen recording (VP9, 960×608, 30 fps), not screenshots. I sampled it at 1 frame/s (17 frames) plus pixel-sampled key colors. Values marked **~** are estimates. The recording is a narrow 960 px viewport, so desktop-wide and mobile layouts are inferred, not observed. The "Preferences" and "Notes" fields in your template were still unfilled brackets, so I used the defaults below and inferred motion from frame-to-frame changes.

---

## Part 1: Analysis summary

**What it is:** a single-page, scroll-driven marketing site for a fictional AI product, "Synapse" (tagline *"Systems that answer first."*). It mixes a premium editorial feel (huge tight-tracked grotesk type, hairline mono labels) with glossy 3D and glass surfaces. The page alternates between **violet gradient**, **light lavender-white**, and **near-black** sections to pace the scroll.

**Page order (as scrolled in the video):**

| # | t≈ | Section | Background |
|---|----|---------|-----------|
| 0 | 0 s / 16 s | Hero ("Systems that answer first") + live-session glass card | Violet gradient panel, ~10 px inset, ~20 px radius |
| 1 | 1–3 s, 15 s | Showcase: giant scrolling headline + 3D tilted card carousel + "Explore the collection" | Light `~#F5F4F7` |
| 2 | 4–5 s, 14 s | "Beyond every limit": pinned, star mark, copy, stats | Near-black `~#040306` |
| 3 | 6 s, 13 s | Selected work: horizontal card rail | Near-black |
| 4 | 7–8 s, 12 s | Work gallery: zoomed-out scattered tiles in depth | Near-black |
| 5 | 9–11 s | CTA "Build beyond every limit" + 3D chrome shape | Violet gradient panel |
| 6 | 10 s | Footer: oversized wordmark + 3 link columns | Light lavender-grey `~#EBEAF0` |

A floating **pill navbar** is fixed at top throughout and **re-themes per section** (see Nav). The recording scrolls down then back up, ending on the hero again (the 16 s frame is the hero re-entering, with text mid-blur-in).

**Not copied/should be placeholders:** the sparkle/star logo (draw your own 4-point star SVG), all card artwork (generate CSS gradients/blur orbs), avatar faces (use gradient circles), the chrome 3D shape (build procedurally). Brand name "Synapse" and copy are demo content; swap freely.

---

## Part 2: The build prompt (copy everything below this line)

---

# Build: "Synapse" scroll-driven marketing site

## Goal
Recreate a single-page, scroll-choreographed marketing site for an AI product called **Synapse**. It must feel premium and fluid: oversized tight-tracked sans-serif type, glassy gradient cards, a pill navbar that changes theme per section, pinned scroll scenes, a horizontal work rail, a depth-zoom gallery, and a WebGL chrome shape in the closing CTA. Match closely (not pixel-perfect).

## Tech stack
- **Next.js 14+ (App Router) + TypeScript + Tailwind CSS**
- **Motion:** Framer Motion (`useScroll`, `useTransform`, `useSpring`) for scroll-linked transforms; **Lenis** for smooth scrolling. GSAP ScrollTrigger is an acceptable substitute for pinned scenes.
- **3D:** `three` + `@react-three/fiber` + `@react-three/drei` for the chrome shape (lazy-loaded, `dynamic(..., { ssr:false })`).
- **Fonts:** `next/font`: **Geist** (sans) and **Geist Mono**. (Fallback: Inter Tight + JetBrains Mono.)
- No UI kit. Build components by hand.

## Global design tokens
```
--bg-dark:        #040306   (~; sampled #040306–#06050A)
--bg-light:       #F5F4F7   (sampled)
--bg-footer:      #EBEAF0   (~)
--violet-900:     #1F0045   (~ sampled #1F0045–#220054)
--violet-700:     #3A0077   (~ sampled)
--violet-500:     #6913D0   (~ sampled #6913D0–#7113BE)
--lavender-300:   #A375BE   (sampled; muted headline line 2)
--glow-lilac:     #C79BE0   (~ bottom-of-hero glow, sampled #85589A–#775991 at lower opacity)
--magenta-glow:   #B724D6   (~ card orb)
--teal-glow:      #1FA383   (~ "Ops" card)
--lime-glow:      #B8F23A   (~ "Templates" card)
--amber-dot:      #F5C518   (~ LIVE dot)
--ink:            #0A0A0B   (~)
--white:          #FFFFFF
```
- Radii: pill `9999px`; cards `~20px`; hero panel `~20px`; small chips `~10px`.
- Container: full-bleed sections with `~48px` side padding at 960 px, `max-width ~1440px` on wide screens, content left-aligned to the padding (not centered).
- Display type tracking `-0.04em`, line-height `~0.95–1.05`. Mono labels `~9–10px`, uppercase, tracking `0.14em`.

## Global: Navbar (fixed, all sections)
- Floating pill, horizontally centered, `top ~16px`, height `~38px`, width ~`455px` at 960 viewport (auto-width; `padding ~4px 6px`), `z-index` top.
- Contents (left → right): 4-point star icon (~14px) · **Surfaces · Neural · Studio · Changelog · Search** (13px/500, gap ~22px) · **Get started** (inner pill button, height ~28px, padding `0 14px`).
- **Theme switching by section** (crossfade 250 ms):
  - Over violet hero/CTA: glass pill `rgba(25,8,45,.55)` + `backdrop-filter: blur(14px)`, 1px border `rgba(255,255,255,.12)`, white text; "Get started" = **white fill, dark text**.
  - Over light section: **white pill**, soft shadow `0 4px 20px rgba(20,10,40,.08)`, dark text; "Get started" = **black fill, white text**.
  - Over dark sections: `rgba(255,255,255,.06)` glass, 1px border `rgba(255,255,255,.1)`, light text; "Get started" = white fill.
- Implement with IntersectionObserver on `data-nav-theme="violet|light|dark"` section attributes.
- Hover: nav items go from 70% to 100% opacity (150 ms). Focus-visible: 2px ring `#A375BE`, 2px offset.
- Mobile (<768px): keep pill, hide the middle links behind a menu button; keep star + "Get started".
- All links anchor to sections (`#work` is confirmed by the status bar showing `…/#work`).

## Section 0: Hero (violet)
- Panel: inset `~10px` from viewport edges, radius `~20px`, min-height `100svh − 20px`. Background: layered gradient: linear from `#7113BE` (top-left) → `#220054` (center/right) → `#1F0045`, **plus** a large soft radial glow at the bottom (`#C79BE0` → transparent, ~60% width, elliptical, bottom-anchored) producing the lilac "horizon". Add subtle animated grain/noise (opacity ~4%).
- **Headline (top-left, `left ~48px`, `top ~15vh`):** two lines.
  - Line 1 "Systems that", white, **~64px** (clamp 40→88px), weight 500, line-height ~1.05, tracking −0.04em.
  - Line 2 "answer first", same style but color **`#A375BE`** at ~85% opacity.
- **Body (left, lower third, max-width ~280px):** "Turn intent into motion and attention into outcome. One ambient layer that reads context across every surface you already own." 13px/1.5, white at ~80%.
- **Buttons (row, gap 8px, below body):**
  - Secondary "See pricing": height ~36px, padding `0 16px`, radius ~10px, glass `rgba(255,255,255,.12)` + 1px border `rgba(255,255,255,.14)`, white text 13px/500.
  - Primary "Start building →": white fill, `#0A0A0B` text, same size, arrow icon 14px. Hover: translateY(-1px), arrow nudges +3px; Active: scale(.98).
- **Social-proof chip** (below buttons): pill, glass `rgba(255,255,255,.1)`, padding `4px 12px 4px 4px`; 5 overlapping 18px gradient avatar circles (−6px overlap, 1.5px ring in `#2a0a55`) + "Trusted by 4,000+ product teams" 11px.
- **Live-session card (right, ~`x 62–90%`, vertically ~40%):** portrait glass card, ~`200×280px` at 960 (scale up with vw), radius ~18px, slight 3D tilt (`rotateY(-8deg) rotateX(3deg)`), 1px border `rgba(255,255,255,.18)`, outer glow `0 30px 80px rgba(110,20,190,.45)`.
  - Top row: chip "✦ Live session" (left, dark glass pill, 10px) and "● LIVE" (right, amber dot `#F5C518`, 9px mono).
  - Upper half: animated blurred lilac/magenta orb on dark violet (CSS `radial-gradient` ×2, `filter: blur(30px)`, slow drift 8–12 s).
  - Mid: input-like bar, dark glass, text "Summarise the thread", right side a 22px white circle button with arrow.
  - Under it: **5-segment progress bar** (segments ~38×2px, gap 4px); first 3 white, last 2 at 25% opacity; animate segment fill sequentially in a 4 s loop.
  - Bottom: title "Context assembled" (13px/500 white) and sub "Context assembled in 42 ms" (10px, white 55%). Lower half has a magenta→black gradient orb.
- **Footnote (right, below card, right-aligned, max-width ~190px):** "From ambient sensing to on-device inference — Synapse keeps the whole loop under sixty milliseconds." 9px, white 55%.
- **Entry animation (on load, and when re-entering from scroll-up, seen at 16 s):** headline lines blur-in (`blur(12px)→0`, `translateY(16px)→0`, opacity 0→1, 700 ms, stagger 120 ms); body + buttons + chip stagger after; card rises and fades in (800 ms) with the glow arriving last.
- **Scroll-out:** hero translates up at ~0.5× speed; the panel keeps its rounded corners.
- Mobile: single column; headline `~44px`; card moves below buttons, centered, tilt reduced to 0; footnote hidden.

## Section 1: Showcase (light, `#F5F4F7`)
- **Background marquee headline:** one oversized line of black text (~`150px`, clamp 80→200px; weight 500; tracking −0.05em; no wrap) scrolling horizontally. Position scrubbed to scroll (translateX from ≈ +10% → −60% across the section). Visible fragments in the video: "…promise", "Design that ships", "…eed w…". Use placeholder: **"No compromise · Design that ships · Speed without limits · "** repeated.
- **Card carousel (foreground, over the text):** 5–7 portrait cards (~`210×300px` at 960 → `~22vw` wide on desktop), radius ~16px, arranged in a perspective stage (`perspective: ~1400px`).
  - Center card faces forward (`rotateY 0`, scale 1.0, full saturation). Neighbors: `rotateY(±~22°)`, scale ~0.88, translateZ negative, opacity ~0.85. Far cards: `rotateY(±~40°)`, scale ~0.7, partially desaturated/blurred (2–4px).
  - Cards slowly float (`translateY ±6px`, 6 s ease-in-out, offset per card).
  - Card anatomy: top-left tag chip (10px, glass), top-right mono domain text (e.g., `synapse.ops`, 10px, white 70%), bottom: title (~20px/500, white, tracking −0.02em) + sub (11px, white 70%).
  - Placeholder cards (art = CSS gradient + blur orb, **no images**):
    1. "Assistant · atlas.finance": violet/magenta, **"The ultimate engine for lending"**, "Ask once. It gathers the file, the risk model and the paperwork."
    2. "Templates · synapse.studio": near-black with lime orb `#B8F23A` + faint green glow, **"Browse our templates"**, "Sixty starting points, each one already wired to your data."
    3. "Ops · synapse.ops": teal/green orb on dark, **"Ship it on a Tuesday"**, "Rollouts, evals and rollbacks from one panel."
    4. Pale blue-lilac glass card, "Save what the model sees".
    5. Chrome/silver conic-gradient card (`conic-gradient(from 200deg, #f5f5f7, #8c8c94, #f5f5f7, #5a5a62, #e8e8ec)`).
    6. Violet card "Context assembled".
  - Horizontal drag/scroll moves the carousel; scroll position scrubs the rotation so cards sweep through center.
- **CTA button (centered below carousel, ~60px under cards):** "Explore the collection": black `#0A0A0B` pill, white 13px/500, height ~36px, padding `0 22px`. Hover: lift 1px + `box-shadow 0 8px 24px rgba(0,0,0,.25)`.
- Where marquee text passes behind a translucent card, the text shows through tinted (glass). Use `backdrop-filter: blur(6px)` with ~70% card alpha.
- Mobile: carousel becomes a snap-scrolling row showing one card + peek, tilt reduced; marquee at ~80px.

## Section 2: "Beyond every limit" (dark, pinned)
- Section height ~300vh; inner stage pinned (`position: sticky; top:0; height:100svh`). Background `#040306`.
- **"Beyond"** top-left, white (≈`#EDEDF0`), **~112px** (clamp 64→180px), weight 500, tracking −0.045em. **"every limit"** bottom-right, same style (right-aligned).
- **Center mark:** white 4-point star (curved-concave "sparkle", ~70px), with violet halo: `filter: drop-shadow(0 0 30px #7A2BE0)` plus a radial glow (~220px, `rgba(120,40,220,.5)`→0).
- **Body copy (bottom-left, max-width ~260px, 11px/1.55, white 60%):**
  "Synapse is a neural engine that turns intent into action — anticipating the next move before it is asked for, across every device already in the room."
  "One model, every surface: wearable, ambient and edge. No ceilings, no limits — just intelligence that keeps pace with the way you think."
- **Scroll choreography (scrubbed):**
  1. 0–35%: headline words slide in from their corners (±40px) and unblur.
  2. 35–70%: star scales ~1 → ~1.7 and brightens; headline + body fade to ~15–25% opacity with `blur(4–8px)`.
  3. 70–100%: **stats** fade up, right-aligned at right edge, vertically centered:
     - `42ms` / MEDIAN LOOP
     - `160k` / POINTS ON SCREEN
     - `1` / MODEL, EVERY SURFACE
     Stat number ~22px/500 white; label ~8px mono uppercase tracking 0.14em, white 45%. Gap ~24px between stats. Count-up from 0 over 900 ms on first reveal.
- Mobile: headline ~56px, stats stack under the star, centered.

## Section 3: Selected work (dark, pinned horizontal rail)
- Mono label top-left: **SELECTED WORK** (9px, tracking 0.16em, white 40%), `top ~15%`.
- Horizontal rail driven by vertical scroll. Cards `~290×200px` at 960 (desktop `~34vw × ~24vw`), radius ~12px, border 1px `rgba(255,255,255,.08)`, background = dark gradient + blurred color orb. Active (center-left) card is larger (~1.15×); neighbors ~0.9× and dimmer. Gap ~16px.
- Card anatomy: top row — index chip (`03` in 18px circle outline, mono 8px) + lowercase name (11px) on left, year (`2024`, mono 8px, white 40%) on right. Bottom: project name **~26px/500** (Nova, Kiln, Meridian, Logan, Zumar), subline 9px white 55% ("Brand · Motion · Web", "Product · Interface", "Systems · Identity", "Prismature · Website", "Web Design · Development"). Active card also shows **"View project →"** bottom-right (10px).
- Art per card (placeholder gradients): Nova = violet horizontal blur band; Kiln = amber/orange orb on dark brown; Meridian = teal/green; Logan = lilac-pink cloud; Zumar = concentric thin rings + white orb on grey; one with concentric-circle linework.
- Hover (desktop): card lifts `translateY(-4px)`, border → `rgba(255,255,255,.2)`, orb scales 1.08 (300 ms). Cards link to `#work/<slug>`. Bottom-left shows link URL in browser status on hover: normal anchors.
- Mobile: native horizontal snap-scroll, no pin.

## Section 4: Gallery zoom-out (dark)
- Pinned stage showing ~12–16 small tiles scattered in 3D space (varying size, depth, and x/y), simulating a camera push. As you scroll, tiles in the far field are blurred (`blur 4–10px`) and dim (`opacity .25–.5`); the "current" tile sharpens and moves to center-ish, larger (~`240×180px` at 960) while others drift past.
- Tile visuals (CSS gradients, ~6–10px radius): blue-lilac diagonal-stripe glass; chrome conic study; crimson blur; lime/green blur; violet; teal ring. Tiny label (8px, white 55%) top-left: e.g., "Chrome study", "Signal", "Field", "Ember", "Midsummer", "Nova dunes", "Void". (Names partly illegible in the video; these are placeholders.)
- Implement with a 3D container (`transform-style: preserve-3d`), each tile with `translateZ` that animates from −1200px → +400px across the scroll range; blur/opacity derived from distance to the focal plane.
- This section's scroll may be a continuation of Section 3 (same dark BG); a quick 300–400 ms dim/desaturate transition appears between them (visible grey wash at 13 s).
- Mobile: reduce to 6 tiles, disable blur, keep simple Z-parallax.

## Section 5: CTA (violet panel)
- Same inset rounded panel treatment as the hero, with an equivalent violet gradient (`#6913D0` top → `#3A0077` mid → `#1F0045`) and the lilac bottom glow.
- **Headline (left, `top ~15vh`):** "Build / beyond / *every / limit*": three-to-four short stacked lines at **~48px**, white; "every limit" in `#A375BE`. Weight 500, line-height 1.0, tracking −0.04em.
- Body: "Templates, prompts and tooling that think ahead — start shipping faster today." 13px, white 80%, max-width ~240px.
- Button: "Get started →": white fill, dark text, height ~36px, padding `0 16px`, radius ~10px.
- Fine print: "No card required · Free while you evaluate": 11px, white 60%.
- **Right: 3D chrome 4-point star** (concave, liquid-metal): R3F mesh built from a 4-arm parametric/`LatheGeometry`-like twisted surface; material `MeshPhysicalMaterial` `{ metalness: 1, roughness: .12, clearcoat: 1 }` with an HDRI (`drei <Environment preset="city" />` or a violet-tinted custom env). Size ≈ 55% of panel width, centered at ~68% x. Idle: slow rotate (0.1 rad/s) + gentle float. **Cursor-reactive:** rotation eases toward pointer (lerp 0.08). Fallback for no-WebGL/`prefers-reduced-motion`: static PNG-free CSS conic-gradient star via `clip-path`.
- Reveal: panel scales from ~0.96 and fades in as it enters; shape rotates in from −25° (900 ms, ease-out-expo).
- Mobile: shape moves above headline, ~70vw.

## Section 6: Footer (light lavender-grey)
- Background `~#EBEAF0`, top padding ~64px. Left: small purple star (`~#6A2BD9`, 14px) above a **giant "Synapse" wordmark** (~`~84px`, clamp 56→200px, weight 500, tracking −0.05em, `#0A0A0B`), and under it tagline "Systems that answer first." (11px, `#0A0A0B` at 60%).
- Right: 3 link columns, gap ~40px, aligned to the wordmark's baseline region:
  - **PRODUCT:** Surfaces · Neural core · Pricing · Changelog
  - **STUDIO:** Work · Process · Careers · Contact
  - **RESOURCES:** Docs · Templates · Status · Privacy
  - Column header: 8px mono uppercase tracking 0.14em, `#0A0A0B` at 45%. Links 11px/500, row gap ~10px; hover: underline offset 3px (150 ms).
- Mobile: wordmark full-width; columns become 2-up grid below.

## Cursor & micro-interactions
- Default OS cursor mostly; I-beam over text. A small ~10px ring cursor appears in the Showcase section (seen at 2 s). Treat as optional: "drag" ring that grows to ~56px with label "Drag" over cards.
- Buttons: 150 ms ease-out hover (lift/arrow nudge), 80 ms press scale .98, 2px lavender focus ring.
- Smooth scroll via Lenis (`lerp 0.1`). Respect `prefers-reduced-motion`: disable Lenis, pins, blurs, marquee, and 3D autorotate; show static layouts.

## Responsive breakpoints
- **Mobile < 640px**: single column; no pinned scenes except Section 2 (simplified); marquee ~80px; nav collapses to star + "Get started" + menu.
- **Tablet 640–1023px**: hero card below text or smaller right; work rail shows ~1.5 cards; footer 2 columns of links.
- **Desktop ≥ 1024px**: layouts as specified, up to container max `~1440px`; hero H1 up to ~96px, "Beyond" up to ~180px.

## Accessibility
- Semantic landmarks: `<header>` (nav), `<main>` with `<section aria-labelledby>`, `<footer>`.
- Contrast: white on `#220054`/`#040306` passes AA; **muted lavender `#A375BE` on `#3A0077`–`#220054` ≈ 3.6–4.5:1 → large text only** (OK at ≥24px). Body copy on glass cards must be ≥ white 70% on dark; verify ≥ 4.5:1.
- Visible focus rings on all interactive elements; logical tab order; skip link "Skip to content".
- Decorative art (`gradients`, orbs, stars, 3D shape): `aria-hidden="true"`; the 3D canvas gets a text alternative in the section copy. Avatars decorative (`alt=""`).
- Pinned/scrub sections must remain readable without JS: the text order in the DOM equals reading order; stats are real text.
- Marquee text is `aria-hidden` with a visually-hidden static equivalent.
- Honor `prefers-reduced-motion` and `prefers-reduced-transparency` (swap blur glass for solid `#1a0a30`).

## Placeholder content rules
- No real logos/photos. Avatars = gradient circles. Card art = CSS gradients. Logo = custom 4-point star SVG (path: concave curves between four points; draw originally). Brand name and copy are replaceable via a single `content.ts`.

## Acceptance checklist
- [ ] Sections appear in order: hero → showcase → beyond → work rail → gallery → CTA → footer.
- [ ] Navbar is a floating pill and switches violet/light/dark themes at section boundaries without flicker; "Get started" inverts correctly (white on violet/dark, black on light).
- [ ] Hero headline two-tone (white / `#A375BE`), tight tracking, blur-in on load and on re-entry.
- [ ] Live-session card has chips, LIVE amber dot, input bar with circular arrow, 5-segment progress (3 filled), "Context assembled / in 42 ms".
- [ ] Showcase marquee scrubs with scroll; ≥5 cards in perspective with center forward and sides rotated; text shows through glass; "Explore the collection" black pill below.
- [ ] "Beyond / every limit" pinned; star scales and glows; copy fades; three stats (42ms, 160k, 1) reveal at the end.
- [ ] Work rail scrolls horizontally with active-card scale; index/year metadata and "View project →" present.
- [ ] Gallery shows depth blur and a focal tile sharpening.
- [ ] CTA shows a 3D chrome star that reacts to the cursor; headline "Build beyond every limit"; fine print present.
- [ ] Footer: giant wordmark, tagline, 3 columns (Product / Studio / Resources) with 4 links each.
- [ ] Lighthouse a11y ≥ 95; no layout shift from fonts; reduced-motion path works; mobile layout has no horizontal overflow (except intentional rails).

---

## Part 3: Assumptions & Open Questions

1. **Typeface** is not identifiable with certainty. Geometry looks like Geist / Inter Tight / Neue Montreal-class grotesk; I chose Geist (the project appears to be Next.js: dev indicator "N" bottom-left, `localhost:3002`).
2. **Exact marquee copy** is only partially visible ("…promise", "Design that ships", "…eed w…"). Placeholder used.
3. **Card names in the gallery** are mostly illegible; labels are invented.
4. **Hero-card progress bar** looks animated, but I only saw one state (3 of 5 filled). The loop timing is assumed.
5. **Cursor:** a ring cursor shows once; unclear whether it's global/custom. Treated as optional.
6. **Hover/pressed/disabled states** and **forms, modals, accordions, pricing, testimonials**: not shown in the video (the CTA says "See pricing", but no pricing section was visited). I specified sensible states, but there is no source truth.
7. **Footer background** was estimated from a compressed frame (`~#EBEAF0`), as the sampled frames at that moment were mid-transition.
8. **Light/dark mode:** the site alternates by section. No user-toggled theme was shown.
9. **3D chrome shape:** specified as a procedural R3F mesh. The original may be a GLB model or shader. If you have a model, drop it in.
10. **Mobile/tablet behavior** is inferred from standard practice, since only a ~960 px viewport was recorded.
