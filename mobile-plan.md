# SmartVoiceX — Mobile Redesign Plan

Goal: make the mobile experience feel intentional (not a squeezed desktop), while keeping the current visual identity (black + blue/purple) and ensuring WebGL/liquid-glass performance is sane on phones.

## 1) Breakpoints + baseline

- Define two primary breakpoints:
  - **Phone:** `max-width: 480px`
  - **Small tablet / large phone:** `481px – 820px`
- Convert layout rules to **mobile-first**:
  - default CSS targets phone
  - add desktop upgrades with `@media (min-width: ...)`
- Add a small spacing + radius scale for mobile consistency:
  - `--space-1/2/3/4` (e.g. 8/12/16/24)
  - `--radius-sm/md/lg` (align with liquid-glass radius)

## 2) Mobile navbar (highest impact)

- Keep the pill-style navbar, but simplify it for phones:
  - Left: logo
  - Right: **My Account / Sign in** + **Menu** (hamburger)
- Hamburger opens a mobile sheet/modal with:
  - Use Cases / How it works / Integrations / Pricing / FAQ
  - Primary CTA: “Talk to the AI live”
- Keep anchor navigation reliable:
  - maintain `scroll-padding-top` (currently used to avoid kicker cropping)

## 3) Hero: single-column, readable, CTA-forward

On mobile, hero becomes a clean vertical stack:
1) kicker
2) H1 (smaller, fewer line breaks)
3) subtext (shorter line length)
4) CTAs stacked full-width
5) proof pills (wrap or horizontal scroll)

Rules:
- reduce hero top/bottom padding
- avoid multi-column hero grids on phone
- side-card should become inline (not sticky) on mobile

## 4) Prevent “grid squeeze”: responsive patterns

For each section grid (`.grid`, `.split`, `.metrics`, `.how`):
- **Phone:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 3 columns where appropriate

Also:
- cards become full-width
- remove any horizontal overflow

## 5) WebGL + liquid-glass on mobile (performance-first)

Mobile performance mode:
- cap DPR lower on phones (e.g. `dprCap = 1.25`)
- reduce blur radius/samples in shader
- optionally disable tint cycling on low power devices

Fallback:
- preserve `prefers-reduced-motion`
- if WebGL fails or performance is poor, fall back to a static background (still branded)

## 6) Typography + tap targets

- minimum tappable size: **44px**
- slightly larger line-height on body text
- keep paragraphs from becoming dense blocks (limit readable width)

## 7) Section-by-section implementation order (fast wins)

1) Hero + side-card
2) Proof metrics cards
3) Capabilities + overview GIF
4) Integrations (balance + spacing)
5) How it works steps
6) Pricing + timeline slider
7) FAQ accordion animation (touch ergonomics)

For each section:
- tighten spacing
- reduce redundant copy
- ensure the section reads well in a single vertical scroll

## 8) QA checklist

Test:
- iPhone Safari
- Android Chrome
- reduced motion mode
- low-end performance scenario

Checklist:
- navbar anchors land correctly (kicker not cropped)
- modals open/close cleanly; internal scrolling works
- WebGL doesn’t tank scroll
- no horizontal overflow

## Decisions needed before implementation

1) Choose the mobile style target:
- “Apple/Stripe” (clean, whitespace)
- “Framer template” (denser, glossy)
- “Vercel” (minimal, sharp, high-contrast)

2) Mobile hero behavior:
- keep side-card near top (inline)
- or move it down as a later CTA block
