# SmartVoiceX — Reusable WebGL “Liquid Glass” Multi‑Card System (Implementation Plan)

This plan is derived from the two provided PDFs:
- **file_68**: *SmartVoiceX Liquid Glass System — WebGL Multi‑Card Implementation Spec (Production)*
- **file_69**: *Production-ready multi-card GLSL shader + `LiquidGlassSection` class*

Goal: replace all static translucent card backgrounds across SmartVoiceX with a **scalable, reusable WebGL liquid glass system** that supports **multiple cards per section**, uses **real-time refraction (GLSL)**, keeps **layout/content in DOM**, and remains **high performance** by **rendering on demand**.

---

## 0) Current repo mapping (what we’re integrating into)

SmartVoiceX repo structure relevant to this work:

- **Primary page to modify**
  - `SmartVoiceX/site/pages/index.html`

- **Assets directory (static hosting)**
  - `SmartVoiceX/site/assets/*` (hashed .mjs bundles, images, css, etc.)

Constraints implied by current structure:
- `index.html` is largely **self-contained** (a lot of CSS inline).
- There is **no Three.js** present currently (no `THREE` in assets).
- The site is likely deployed as a static build; therefore we should integrate via:
  - new static JS/CSS under `site/assets/` (non-hashed, human-named), and
  - small HTML edits to `site/pages/index.html` to mark sections/cards and to load the new JS/CSS.

---

## 1) Target architecture (as required): **one canvas per section**

**Final structure per section** (from PDF spec):

```
Page
└── Section (.glass-section)
    ├── WebGL canvas (1 per section)
    ├── Background texture (per section)
    ├── Card registry (JS reads DOM cards)
    └── DOM cards (.liquid-card)
```

Key design decision:
- **One renderer per section** (recommended in PDF):
  - easier coordinate mapping,
  - isolates performance,
  - avoids a global “all page” coordinate system,
  - makes incremental rollout safer (we can enable only on some sections first).

Important limitation (PDF):
- The shader refracts a **background texture** (`uBgTex`) — it **does not** refract live DOM.
- Each `.glass-section` must declare a background image/texture source (via `data-glass-bg`).

---

## 2) DOM + class strategy (required): `.glass-section` + `.liquid-card`

### 2.1 Section marker
Add `.glass-section` to any section that will have liquid glass cards.

Example pattern:
```html
<section class="section glass-section" id="use-cases" data-glass-bg="/assets/<some-bg>.jpg">
  <!-- WebGL canvas injected by JS -->
  <div class="grid">
    <div class="card liquid-card">...</div>
    <div class="card liquid-card">...</div>
  </div>
</section>
```

Notes:
- Keep existing semantic classes (e.g., `.section`, `.hero`) and add `.glass-section`.
- `data-glass-bg` is required per section. During rollout, we can reuse existing background imagery or add new dedicated bgs.

### 2.2 Card marker
Add `.liquid-card` to each DOM card that should receive the glass treatment.

Rules:
- **Content stays in DOM.** The WebGL canvas sits behind content.
- Cards should be `position: relative` and above the canvas.

### 2.3 Fallbacks / progressive enhancement
If WebGL is unavailable or disabled:
- Cards should still look OK via CSS fallback:
  - translucent background + border + blur via `backdrop-filter` (where supported).

---

## 3) Visual presets (required) + per-section overrides

PDF-provided global preset (optimized) — use as defaults:

```js
const GLASS_PRESET = {
  radius: 51,
  thickness: 60,
  bezel: 60,
  ior: 3.0,
  blur: 1.5,
  specular: 0.30,
  tint: 0.08,
  shadow: 0.25
};
```

Recommended intensity tiers (PDF guidance):
- **Strong Glass**: hero demo, pricing, navbar
- **Medium**: integrations, feature highlights
- **Light**: FAQ, dense content

Plan for overrides:
- Support `data-glass-preset` on `.glass-section` (e.g., `strong|medium|light`).
- Support explicit overrides via `data-glass-*` attributes when needed (e.g., `data-glass-blur="2.0"`).

---

## 4) Files to create/modify (explicit list)

### 4.1 New files to create
Create a small “liquid glass system” under `site/assets/liquid-glass/`:

1) **CSS**
- `SmartVoiceX/site/assets/liquid-glass/liquid-glass.css`

2) **Shader sources** (plain strings loaded by JS)
- `SmartVoiceX/site/assets/liquid-glass/shaders/liquid-glass.vert.glsl`
- `SmartVoiceX/site/assets/liquid-glass/shaders/liquid-glass.frag.glsl`
  - based on the multi-card shader in **file_69**

3) **Engine / section controller JS**
- `SmartVoiceX/site/assets/liquid-glass/liquid-glass-section.js`
  - implements `LiquidGlassSection`
  - one instance per `.glass-section`

4) **Bootstrap/init JS**
- `SmartVoiceX/site/assets/liquid-glass/init-liquid-glass.js`
  - finds all sections, instantiates controllers
  - handles feature detection + reduced motion + prefers-reduced-transparency rules

5) **Vendor dependency (if we choose Three.js)**
Option A (recommended for speed of integration):
- Load Three.js from CDN in `index.html`.

Option B (more deterministic for offline and long-term):
- Add `SmartVoiceX/site/assets/vendor/three.min.js` and reference locally.

This plan assumes **Option A during rollout**, then moves to Option B once stable.

### 4.2 Existing files to modify
1) `SmartVoiceX/site/pages/index.html`
   - add `.glass-section` and `.liquid-card` classes
   - add `data-glass-bg` to each glass section
   - add `<link rel="stylesheet" href="/assets/liquid-glass/liquid-glass.css">`
   - add `<script>` tags for Three.js (if needed) + init JS

2) (Optional) other pages with cards
   - `SmartVoiceX/site/pages/contact.html`, `about.html`, etc.
   - only after index.html is stable

---

## 5) WebGL implementation approach

### 5.1 Why this is a “system” not an effect
Per PDF:
- We are not rewriting the refraction physics.
- We are refactoring from **single-card state** to a **multi-card registry** and uniform arrays.

### 5.2 Multi-card shader (required)
We will adopt the **multi-card GLSL fragment shader** from file_69:
- `#define MAX_CARDS 20`
- Uniform arrays:
  - `uGlassRects[MAX_CARDS]` (x, y, w, h in screen space)
  - `uRadius`, `uBezel`, `uThickness`, `uIOR`, `uBlur`, `uSpecular`, `uTint`, `uShadow`

Core logic (PDF):
- Loop cards; if inside a rounded rect SDF, apply refraction with that card’s parameters.
- Otherwise, optionally apply shadow outside.

### 5.3 Card data model
As in file_68:

```js
{
  id,
  x, y,
  width, height,
  radius,
  thickness,
  bezel,
  ior,
  blur,
  specular,
  tint,
  shadow
}
```

In practice for `LiquidGlassSection`, we will store:
- `cardElements: HTMLElement[]`
- `maxCards` (default 20)
- computed layout every render (or cached, invalidated)

### 5.4 DOM → WebGL sync (required)
Implement the PDF approach:
- `ResizeObserver` on each `.liquid-card`
- window `scroll` + `resize` → `invalidate()`

Coordinate mapping (match PDF):
- Use `getBoundingClientRect()` per card
- Convert to shader space where origin is bottom-left:
  - `cx = rect.left + rect.width/2`
  - `cy = window.innerHeight - (rect.top + rect.height/2)`

### 5.5 Performance strategy (required): render on demand
We will not run a heavy full render loop.

Implementation (PDF):
- Maintain `dirty = true`.
- In animation frame tick:
  - if dirty: sync cards, update uniforms, render once, set dirty false
  - always schedule next tick (lightweight)

Further optimization (optional but recommended):
- `IntersectionObserver` per `.glass-section`:
  - if section is offscreen, suspend ticking entirely (or render at low frequency)
- clamp max cards per section to 10–20.

### 5.6 Reduced motion / accessibility
Rules:
- If `prefers-reduced-motion: reduce`, keep glass static (still OK) but avoid any pointer-driven animations.
- Provide a global flag:
  - `window.__SVX_DISABLE_LIQUID_GLASS = true` for debugging.

---

## 6) CSS layering + z-index strategy

From PDF:

```css
.glass-section { position: relative; }

.liquid-glass-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

/* Cards stay above */
.liquid-card {
  position: relative;
  z-index: 2;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04); /* fallback */
  overflow: hidden;
}
```

Additions specific to SmartVoiceX:
- Ensure any existing `.card` styling doesn’t fight the new class.
- Keep current typography/layout intact.
- Only replace the *background look*.

---

## 7) Step-by-step implementation sequence (detailed)

### Phase 1 — Inventory + tagging (HTML-only, no WebGL yet)
1) Open `site/pages/index.html` and identify card blocks:
   - `.card` appears in multiple sections (use cases, capabilities, integrations, reliability, pricing, FAQ, etc.)

2) Decide which sections become `.glass-section` first (safe rollout order):
   - Start with **one** section to validate mapping, e.g.:
     - `#use-cases` (grid of cards)

3) Add HTML class tags:
   - Add `.glass-section` to the chosen section container.
   - Add `data-glass-bg="..."`.
   - Add `.liquid-card` to the chosen `.card` elements.

4) Add CSS fallback (no canvas yet):
   - Create and include `liquid-glass.css` so `.liquid-card` has correct radius/border/background.

Deliverable of Phase 1:
- Visual design still static, but DOM strategy is in place.

### Phase 2 — Add WebGL system files (but keep it off by default)
5) Add new asset files under `site/assets/liquid-glass/`:
   - shader files
   - `liquid-glass-section.js`
   - `init-liquid-glass.js`

6) Add loader to `index.html` (but gate behind a flag):
   - include Three.js (CDN) and init script (defer)
   - init script checks:
     - WebGL support
     - `prefers-reduced-motion`
     - `window.__SVX_DISABLE_LIQUID_GLASS`

Deliverable:
- Feature exists but can be toggled.

### Phase 3 — Enable on one section + validate multi-card
7) Enable on the first section only:
   - init should instantiate `new LiquidGlassSection(section, { preset })` only for matching sections.

8) Validate:
   - correct card alignment while scrolling
   - resize behavior
   - max card clamp works
   - background texture loads and matches section visuals

9) Tune presets:
   - confirm the global preset matches desired look
   - optionally implement `data-glass-preset` levels

### Phase 4 — Roll out to all sections on index
10) Expand `.glass-section` + `.liquid-card` to remaining sections:
   - `#use-cases`
   - `#capabilities`
   - `#integrations`
   - `#reliability`
   - `#pricing`
   - possibly `#faq` (light)

11) Assign section backgrounds:
   - Choose a consistent set of background textures.
   - If no appropriate images exist, add new ones under `site/assets/liquid-glass/backgrounds/`.

12) Add optional IntersectionObserver:
   - disable rendering when section not visible

### Phase 5 — Roll out across other pages
13) Apply the same system to:
   - `site/pages/contact.html`
   - `site/pages/about.html`
   - blog index pages (if cards exist)

14) Make sure CSS is shared:
   - the CSS file is referenced across pages that use the effect.

---

## 8) Implementation details per file (what each contains)

### `site/assets/liquid-glass/liquid-glass.css`
- layering + z-index for canvas
- `.liquid-card` fallback visuals
- optional `.glass-section[data-glass-preset="strong"]` etc. to influence card border/background

### `site/assets/liquid-glass/shaders/liquid-glass.vert.glsl`
- simple passthrough vertex shader (from PDF)

### `site/assets/liquid-glass/shaders/liquid-glass.frag.glsl`
- multi-card fragment shader (from file_69)
- keep `MAX_CARDS` configurable by string replacement at build time if needed

### `site/assets/liquid-glass/liquid-glass-section.js`
Responsibilities (from file_69 + production hardening):
- create canvas, attach to section
- init Three.js renderer + orthographic camera + fullscreen plane
- load background texture
- collect `.liquid-card` elements within section
- set uniforms:
  - `uResolution`, `uGlassCount`, `uGlassRects`, per-card arrays
  - `uBgTex`, `uBgAspect`
- observe:
  - `ResizeObserver` for each card
  - `scroll`/`resize` invalidation (passive)
- performance:
  - `dirty` rendering only
  - optional `IntersectionObserver` to stop ticking when offscreen

### `site/assets/liquid-glass/init-liquid-glass.js`
- feature detection
- find all `.glass-section` nodes
- instantiate `LiquidGlassSection` per node
- parse presets from dataset

### `site/pages/index.html` changes
- include CSS file
- include Three.js + init script
- add `.glass-section` and `.liquid-card` classes
- set `data-glass-bg` per section

---

## 9) Testing / acceptance checklist

Functional:
- Multi-card rendering works for at least one section with 6–12 cards.
- Cards stay aligned during scroll.
- Resizing the viewport keeps alignment.
- No pointer-event blocking (canvas is `pointer-events:none`).

Performance:
- No always-on expensive shader loop when nothing changes.
- With IntersectionObserver enabled, offscreen sections do not render.
- No memory leaks when navigating between pages (if SPA-like navigation exists; otherwise page refresh resets state).

Fallback:
- If WebGL fails, `.liquid-card` still renders with static translucent background.

---

## 10) Rollout notes / guardrails

- Do **not** attempt to refract live DOM; use per-section background textures.
- Keep `MAX_CARDS` conservative (20).
- Start with one section in production behind a flag if possible.
- Remove all demo-only artifacts (PDF explicitly calls out):
  - control panel UI, sliders, dragger, bg picker UI, global state.

---

## Appendix A — Canonical snippet (from PDFs)

### Instantiate per section
```js
new LiquidGlassSection(document.querySelector('.glass-section'), {
  bg: '/img/bg.jpg'
});
```

### On-demand render loop
```js
let dirty = true;
function invalidate(){ dirty = true; }
function tick(){
  if(dirty){
    syncCards();
    updateUniforms();
    renderer.render(scene,camera);
    dirty = false;
  }
  requestAnimationFrame(tick);
}
```

(Our implementation will follow this pattern exactly.)
