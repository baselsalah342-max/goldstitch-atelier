# Golden Thread Studio

# AURION — Complete UI/UX Concept

AURION should feel like a quiet ritual: dark fabric, gold thread, deliberate craft, and mythic symbolism. The experience should not behave like a loud fashion drop site. It should feel slower, more editorial, more tactile — closer to watching an artisan stitch gold into black cloth than browsing a typical streetwear store.

---

## 1. Creative Direction

### Core feeling

**Quiet luxury streetwear with mythic embroidery as the visual signature.**

The design should communicate:

- **Slow-made craft**
- **Heavyweight materials**
- **Gold-thread detail**
- **Mythic symbolism**
- **Dark editorial minimalism**
- **Confidence without hype**

AURION should avoid:

- Neon colors
- Oversized hype graphics
- Aggressive motion
- Flashy product badges
- Loud streetwear tropes
- Overcrowded e-commerce layouts

The site should feel more like a **dark luxury lookbook** than a conventional online shop.

---

## 2. Visual System

### Color palette

Use the provided palette with a strong hierarchy:

| Role | Color | Usage |
| --- | --- | --- |
| Ink black | `#0a0908` | Primary background |
| Deep burgundy | `#3b0d14` | Ambient glow, secondary depth |
| Burgundy light | `#5c1620` | Hover gradients, soft lighting |
| Antique gold | `#b08d57` | Borders, icons, CTA outlines, embroidery line |
| Gold light | `#d4b483` | Highlight words, emphasis, glow points |
| Bone | `#e8e2d5` | Main readable text |
| Ash | `#4a4642` | Secondary text, prices, utility copy |

### Color behavior

The site should mostly live in **black, bone, ash, and antique gold**.

Burgundy should appear as atmosphere, not decoration:

- Radial glow behind the hero
- Product-card image backdrops
- Hover gradients
- Subtle footer/nav lighting
- Soft shadows under cards

Gold should feel like thread:

- Thin lines
- Borders
- Hairline dividers
- Embroidery-like SVG strokes
- Small typographic accents
- Highlighted words

Avoid large blocks of gold except on CTA hover.

---

## 3. Typography System

### Display / Headings — Fraunces

Use Fraunces for:

- Logo
- Hero headline
- Section titles
- Product names
- Editorial statements

Recommended style:

```css
font-family: "Fraunces", serif;
font-weight: 300;
letter-spacing: -0.03em;
line-height: 0.95;
```

For logo/emphasis:

```css
font-weight: 600;
letter-spacing: 0.32em;
```

### Body — Inter

Use Inter for:

- Supporting paragraphs
- Form helper text
- Product descriptions
- Editorial copy

Recommended style:

```css
font-family: "Inter", sans-serif;
font-weight: 300;
line-height: 1.7;
```

### Utility / Labels — JetBrains Mono

Use JetBrains Mono for:

- Eyebrows
- Nav links
- Prices
- Product categories
- Captions
- Counters
- Footer
- Form labels

Recommended style:

```css
font-family: "JetBrains Mono", monospace;
text-transform: uppercase;
letter-spacing: 0.18em;
font-size: 0.72rem;
```

For more ceremonial or luxury moments, increase tracking:

```css
letter-spacing: 0.32em;
```

---

## 4. Global Layout

### Page structure

Both pages should share:

1. Fixed navbar
2. Dark background
3. Generous spacing
4. Thin gold dividers
5. Minimal footer
6. Responsive mobile-first layout

### Grid

Use a flexible layout system:

```css
--page-padding: clamp(1.25rem, 4vw, 4rem);
--section-spacing: clamp(5rem, 10vw, 9rem);
--max-width: 1440px;
```

### Overall background

Use a layered dark background:

```css
background:
  radial-gradient(circle at 50% 0%, rgba(92, 22, 32, 0.32), transparent 38rem),
  linear-gradient(180deg, #0a0908 0%, #0a0908 100%);
```

For subtle luxury texture, add a low-opacity noise overlay:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("/noise.png");
  mix-blend-mode: soft-light;
}
```

---

# PAGE 1 — Homepage

---

## Section 1: Intro Animation

### Purpose

The intro should establish AURION’s material story before the user sees any product: **gold thread slowly forming a mythic emblem on black cloth**.

This should feel like embroidery, not a loading screen.

### Duration

Approximately **5–5.5 seconds**.

### Screen

Full viewport:

```css
background: #0a0908;
color: #b08d57;
```

### Animation sequence

#### 0.0s–0.4s — Black hold

The screen remains black briefly.

This creates anticipation and avoids the animation feeling abrupt.

#### 0.4s–3.4s — Thread draw

A single continuous gold SVG path draws itself.

The emblem should be abstract, not literal.

Possible shape direction:

- Circular crest-like form
- Suggestion of a phoenix wing
- Serpent-like curve
- Dragon-tail flourish
- Stitch loops
- One continuous embroidered thread

The stroke should have:

```css
stroke: #b08d57;
stroke-width: 1.4;
stroke-linecap: round;
stroke-linejoin: round;
filter: drop-shadow(0 0 12px rgba(176, 141, 87, 0.28));
```

Animation:

```css
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
animation: stitchDraw 3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
```

Use a non-linear, handmade pacing. Slight pauses can make it feel stitched.

#### 3.4s–4.1s — Solidify mark

The drawn line gently fills or thickens into a more finished gold emblem.

Effect:

- Stroke brightens
- Fill fades in
- Glow briefly rises
- Then settles back down

```css
fill: rgba(176, 141, 87, 0);
animation: emblemFill 0.7s ease forwards;
```

#### 4.1s–4.8s — Wordmark reveal

The word **AURION** fades in below.

Treatment:

```css
font-family: "Fraunces", serif;
font-weight: 600;
letter-spacing: 0.42em;
font-size: clamp(1.4rem, 3vw, 2.4rem);
color: #d4b483;
filter: blur(10px);
opacity: 0;
animation: wordmarkReveal 0.8s ease forwards;
```

The reveal should move from blurred to sharp.

#### 4.6s–5.1s — Subtext reveal

Small mono caption:

```
Stitched, not printed
```

Treatment:

```css
font-family: "JetBrains Mono", monospace;
text-transform: uppercase;
letter-spacing: 0.24em;
font-size: 0.65rem;
color: #b08d57;
opacity: 0.72;
```

#### 5.1s–5.5s — Thread transition

A thin gold thread line drops downward from the mark or wordmark.

Then the intro slides/fades upward into the homepage.

```css
transform: translateY(-100%);
opacity: 0;
transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.6s ease;
```

### Skip behavior

The intro should support:

- Click anywhere to skip
- Tap anywhere on mobile
- Keyboard `Esc`
- Optional small label: `Skip intro`

The skip control should be subtle:

```
Skip intro
```

Position:

- Bottom-right desktop
- Bottom-center mobile

Style:

```css
font-family: "JetBrains Mono";
letter-spacing: 0.18em;
text-transform: uppercase;
color: rgba(232, 226, 213, 0.45);
```

### Reduced motion

If `prefers-reduced-motion: reduce` is enabled:

- Do not play full stitching sequence
- Show static emblem and wordmark
- Fade into homepage after approximately 1 second
- Disable long SVG draw animation

---

## Global Navbar

### Behavior

Fixed or sticky across all pages.

```css
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 50;
```

The navbar should feel like a thin editorial overlay, not a heavy app header.

### Layout

Desktop:

```
AURION                                      Collection   Lookbook   Contact   Cart (0)
```

Mobile:

```
AURION                                      Menu
```

Mobile menu opens as a full-screen dark overlay or compact dropdown.

### Logo

```css
font-family: "Fraunces", serif;
font-weight: 600;
letter-spacing: 0.32em;
color: #e8e2d5;
```

Hover:

```css
color: #d4b483;
```

### Nav links

```css
font-family: "JetBrains Mono", monospace;
text-transform: uppercase;
letter-spacing: 0.18em;
font-size: 0.68rem;
color: rgba(232, 226, 213, 0.62);
```

Hover:

```css
color: #d4b483;
```

Add a very small gold underline on hover:

```css
transform: scaleX(1);
background: #b08d57;
```

### Navbar background

At page top:

```css
background: linear-gradient(
  180deg,
  rgba(10, 9, 8, 0.82),
  rgba(10, 9, 8, 0)
);
```

On scroll:

```css
background: rgba(10, 9, 8, 0.82);
backdrop-filter: blur(18px);
border-bottom: 1px solid rgba(176, 141, 87, 0.12);
```

---

## Section 2: Homepage Hero

### Purpose

The hero should introduce the brand with restraint and atmosphere.

The first impression after the intro should be:

> This is luxury streetwear made slowly, not mass-produced hype.
> 

### Layout

Full-screen or near full-screen:

```css
min-height: 100svh;
display: grid;
align-items: center;
padding: 8rem var(--page-padding) 4rem;
```

Use a centered or slightly left-aligned editorial composition.

Recommended desktop layout:

```
[ Eyebrow ]

Woven in gold,
worn in silence

Supporting paragraph

[ View the collection ]

                  [ subtle abstract gold thread / product silhouette ]
```

If no product images exist yet, use a dark stone-like backdrop with an abstract gold stitched emblem.

### Hero background

```css
background:
  radial-gradient(circle at 50% 0%, rgba(92, 22, 32, 0.36), transparent 34rem),
  radial-gradient(circle at 80% 40%, rgba(176, 141, 87, 0.06), transparent 24rem),
  #0a0908;
```

### Eyebrow

Text:

```
Gold-thread streetwear
```

Style:

```css
font-family: "JetBrains Mono";
text-transform: uppercase;
letter-spacing: 0.24em;
font-size: 0.72rem;
color: #b08d57;
```

### Headline

Text:

```
Woven in gold, worn in silence
```

The word **gold** should be italic and gold-light.

Suggested markup:

```html



  Woven in gold,

  worn in silence



```

Style:

```css
h1 {
  font-family: "Fraunces", serif;
  font-weight: 300;
  font-size: clamp(4rem, 12vw, 11rem);
  line-height: 0.88;
  letter-spacing: -0.055em;
  color: #e8e2d5;
}

h1 em {
  color: #d4b483;
  font-style: italic;
  font-weight: 300;
}
```

### Supporting paragraph

Text:

```
Heavyweight hoodies and sweaters, each piece hand-embroidered with mythic creatures in gold thread. Slow-made, quietly loud.
```

Style:

```css
max-width: 34rem;
font-family: "Inter";
font-weight: 300;
line-height: 1.7;
font-size: clamp(1rem, 1.4vw, 1.15rem);
color: rgba(232, 226, 213, 0.62);
```

Although the token labels ash as `#4a4642`, for readable paragraph text on black, use ash as the muted color concept but with a lighter alpha version of bone:

```css
color: rgba(232, 226, 213, 0.58);
```

Reserve true ash `#4a4642` for prices, dividers, captions, and very secondary elements.

### CTA

Text:

```
View the collection
```

Default:

```css
border: 1px solid #b08d57;
color: #d4b483;
background: transparent;
```

Hover:

```css
background: #b08d57;
color: #0a0908;
box-shadow: 0 0 32px rgba(176, 141, 87, 0.18);
```

Shape:

```css
border-radius: 999px;
padding: 0.95rem 1.4rem;
```

Typography:

```css
font-family: "JetBrains Mono";
text-transform: uppercase;
letter-spacing: 0.18em;
font-size: 0.72rem;
```

### Scroll cue

Place near bottom center.

Visual:

```
thin vertical line
small dot traveling downward
```

Style:

```css
.scroll-cue {
  width: 1px;
  height: 4.5rem;
  background: rgba(176, 141, 87, 0.22);
}

.scroll-cue::after {
  width: 4px;
  height: 4px;
  background: #d4b483;
  border-radius: 50%;
  animation: scrollDot 1.8s ease-in-out infinite;
}
```

Reduced motion:

- Static dot
- No infinite animation

---

## Section 3: Collection — Horizontal Grid Scroll

### Purpose

This section should feel like a lookbook strip, not an e-commerce grid.

The user should move sideways through the drop, like sliding garments across a dark studio table.

### Section header

Left:

```
Current drop
```

Right:

```
03 pieces / limited run
```

Style:

```css
.collection-title {
  font-family: "Fraunces";
  font-weight: 300;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  color: #e8e2d5;
}

.collection-count {
  font-family: "JetBrains Mono";
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b08d57;
}
```

### Horizontal layout

Use horizontal scroll with snap behavior.

```css
.collection-rail {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(18rem, 32vw);
  gap: clamp(1rem, 2vw, 1.5rem);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  cursor: grab;
}

.collection-rail:active {
  cursor: grabbing;
}

.product-card {
  scroll-snap-align: start;
}
```

Support:

- Mouse drag
- Touch swipe
- Trackpad horizontal scroll
- Scroll-wheel mapped to horizontal movement while section is in view

### Product card content

Example pieces:

#### Product 1

```
Hoodie
Phoenix Embroidered Hoodie
EGP 4,800
```

#### Product 2

```
Sweater
Dragon Thread Sweater
EGP 5,200
```

#### Product 3

```
Hoodie
Serpent Crest Hoodie
EGP 4,600
```

### Product card visual style

Each card:

```css
background: rgba(232, 226, 213, 0.025);
border: 1px solid rgba(176, 141, 87, 0.14);
border-radius: 1.4rem;
overflow: hidden;
```

Image area:

```css
aspect-ratio: 4 / 5;
background:
  radial-gradient(circle at 50% 35%, rgba(92, 22, 32, 0.58), transparent 58%),
  linear-gradient(145deg, #11100f, #0a0908);
```

Add subtle stone/slate texture:

```css
box-shadow:
  inset 0 0 80px rgba(0, 0, 0, 0.65),
  0 24px 80px rgba(0, 0, 0, 0.28);
```

### Product placeholder motif

Instead of generic image placeholders, use abstract embroidered creature-line motifs:

- Phoenix: rising wing line
- Dragon: curled horn/spine line
- Serpent: coiled S-line

These should be thin gold SVG strokes layered inside the image area.

```css
.product-emblem {
  stroke: #b08d57;
  opacity: 0.62;
  filter: drop-shadow(0 0 18px rgba(176, 141, 87, 0.16));
}
```

### Hover state

On desktop:

```css
.product-card:hover .image-inner {
  transform: scale(1.045);
}

.product-card:hover {
  border-color: rgba(212, 180, 131, 0.34);
}
```

The hover should be subtle, almost photographic.

### Product metadata

```css
.product-tag {
  font-family: "JetBrains Mono";
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #b08d57;
}

.product-title {
  font-family: "Fraunces";
  font-weight: 300;
  color: #e8e2d5;
}

.product-price {
  font-family: "JetBrains Mono";
  color: #4a4642;
}
```

### Interaction detail

When dragging the rail, add a subtle “thread trail” feeling:

- Cards slightly parallax internally
- Background glow shifts by a few pixels
- No bouncy or playful motion

---

## Homepage Footer

### Content

```
AURION — Cairo · est. 2026
```

### Layout

Centered and minimal.

```css
footer {
  border-top: 1px solid rgba(176, 141, 87, 0.16);
  padding: 2rem var(--page-padding);
  text-align: center;
}
```

### Typography

```css
font-family: "JetBrains Mono";
text-transform: uppercase;
letter-spacing: 0.22em;
font-size: 0.68rem;
color: rgba(232, 226, 213, 0.45);
```

---

# PAGE 2 — Contact

---

## Purpose

The contact page should feel personal, restrained, and direct.

It should not feel like a generic support page. It should feel like contacting a small atelier.

---

## Layout

Use same navbar and footer.

Main page:

```css
min-height: 100svh;
padding: 9rem var(--page-padding) 4rem;
background:
  radial-gradient(circle at 20% 10%, rgba(92, 22, 32, 0.28), transparent 28rem),
  #0a0908;
```

Desktop structure:

```
[ Left editorial intro ]

Reach out
For custom requests, sizing, collaborations, or private drop access.

[ Right form ]
Name
Email
Message
[ Send message ]

Instagram   WhatsApp   Email
```

Mobile:

- Headline first
- Supporting line
- Form full width
- Social links stacked or wrapped

---

## Contact headline

Suggested text:

```
Reach out
```

Alternative:

```
Let's talk
```

Style:

```css
font-family: "Fraunces";
font-weight: 300;
font-size: clamp(4rem, 11vw, 9rem);
line-height: 0.9;
letter-spacing: -0.055em;
color: #e8e2d5;
```

Optional emphasis line:

```html


Reach out


```

With:

```css
em {
  color: #d4b483;
  font-style: italic;
}
```

---

## Supporting line

Suggested copy:

```
For custom requests, sizing, collaborations, or private drop access.
```

Style:

```css
font-family: "Inter";
font-weight: 300;
line-height: 1.7;
color: rgba(232, 226, 213, 0.58);
max-width: 28rem;
```

---

## Form Design

### Fields

- Name
- Email
- Message

### Label style

```css
label {
  font-family: "JetBrains Mono";
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.68rem;
  color: #b08d57;
}
```

### Inputs

Default:

```css
background: transparent;
border: 0;
border-bottom: 1px solid rgba(176, 141, 87, 0.28);
color: #e8e2d5;
padding: 1rem 0;
font-family: "Inter";
font-size: 1rem;
```

Focus:

```css
border-bottom-color: #d4b483;
box-shadow: 0 1px 0 #d4b483;
outline: none;
```

Placeholder:

```css
color: rgba(232, 226, 213, 0.28);
```

Textarea:

```css
min-height: 9rem;
resize: vertical;
```

### Submit button

Text:

```
Send message
```

Same styling as homepage CTA:

```css
border: 1px solid #b08d57;
color: #d4b483;
background: transparent;
border-radius: 999px;
padding: 0.95rem 1.4rem;
font-family: "JetBrains Mono";
text-transform: uppercase;
letter-spacing: 0.18em;
```

Hover:

```css
background: #b08d57;
color: #0a0908;
```

### Form interaction

- Field underline brightens on focus
- Button fill transition lasts around `350ms`
- Validation messages should be small, mono, and muted gold/burgundy
- No aggressive red errors unless necessary

Error style:

```css
color: #d4b483;
opacity: 0.75;
```

---

## Social Links

### Placement

Below the form.

### Links

```
Instagram
WhatsApp
Email
```

Optional:

```
Instagram
WhatsApp
TikTok
Email
```

### Style

```css
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.social-links a {
  font-family: "JetBrains Mono";
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  color: rgba(232, 226, 213, 0.42);
}
```

Hover:

```css
color: #d4b483;
```

Add a subtle line extension on hover:

```
Instagram —
```

or use a thin underline animation.

---

# Interaction Design

---

## Motion Principles

AURION’s motion should be:

- Slow
- Tactile
- Smooth
- Deliberate
- Minimal
- Weighted

Avoid:

- Springy motion
- Fast pop-ins
- Excessive parallax
- Gamified transitions
- Overly dramatic reveals

### Recommended easing

Use luxury/editorial easing:

```css
cubic-bezier(0.76, 0, 0.24, 1)
```

For softer fades:

```css
cubic-bezier(0.65, 0, 0.35, 1)
```

### Standard durations

| Interaction | Duration |
| --- | --- |
| Button hover | 300–400ms |
| Card hover | 500–700ms |
| Page transition | 700–900ms |
| Intro animation | 5–5.5s |
| Text reveal | 700–1000ms |

---

## Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

But avoid simply removing all feeling. Replace long animations with:

- Static emblem
- Gentle opacity change
- No continuous motion
- No scroll cue animation
- No horizontal parallax

---

# Responsive Behavior

---

## Mobile

### Navbar

- Logo left
- Menu trigger right
- Full-screen menu or minimal drawer

Menu items:

```
Collection
Lookbook
Contact
Cart (0)
```

### Hero

Mobile headline should remain dramatic but readable:

```css
font-size: clamp(3.6rem, 18vw, 6rem);
line-height: 0.92;
```

Layout:

```
Gold-thread streetwear

Woven in gold,
worn in silence

Supporting paragraph

View the collection
```

### Collection

Horizontal scroll remains the primary behavior.

Cards:

```css
grid-auto-columns: 82vw;
```

This creates a lookbook carousel feel.

### Contact

Form becomes full-width.

Social links wrap into two columns or remain inline if space allows.

---

## Tablet

Cards:

```css
grid-auto-columns: 46vw;
```

Hero remains mostly centered with generous breathing room.

---

## Desktop

Cards:

```css
grid-auto-columns: minmax(22rem, 32vw);
```

Hero can be split between text and an abstract embroidered emblem or garment image.

---

# Accessibility

---

## Contrast

The true ash color `#4a4642` is quite dark against black. Use it for decorative secondary text only.

For important paragraph text, use:

```css
rgba(232, 226, 213, 0.58)
```

For prices and captions, `#4a4642` is acceptable if not essential for task completion, but consider:

```css
rgba(232, 226, 213, 0.42)
```

for better readability.

---

## Keyboard support

Required:

- Skip intro via `Esc`
- Tab-accessible nav links
- Tab-accessible CTA
- Horizontal collection should support keyboard focus
- Product cards should be reachable with keyboard
- Form labels should be properly associated with fields

---

## Focus states

Use gold focus rings:

```css
:focus-visible {
  outline: 1px solid #d4b483;
  outline-offset: 4px;
}
```

---

## Forms

Each input should include:

- Label
- Name attribute
- Required state where appropriate
- Accessible error message
- Clear focus state

---

# Component System

---

## 1. Button

### Primary outline button

Used for:

- View the collection
- Send message

Default:

```css
.button {
  border: 1px solid #b08d57;
  color: #d4b483;
  background: transparent;
  border-radius: 999px;
  padding: 0.95rem 1.4rem;
  font-family: "JetBrains Mono";
  text-transform: uppercase;
  letter-spacing: 0.18em;
  transition:
    background 350ms ease,
    color 350ms ease,
    border-color 350ms ease,
    box-shadow 350ms ease;
}
```

Hover:

```css
.button:hover {
  background: #b08d57;
  color: #0a0908;
  box-shadow: 0 0 32px rgba(176, 141, 87, 0.18);
}
```

---

## 2. Product Card

Structure:

```
Image / embroidery motif
Tag
Title
Price
```

Behavior:

- Subtle image scale on hover
- Gold border brightens
- No loud badges
- No discount labels

---

## 3. Section Header

Structure:

```
Fraunces title
Mono counter or caption
```

Example:

```
Current drop
03 pieces / limited run
```

---

## 4. Emphasis Text

Use consistent style for words like:

- gold
- silence
- stitched
- mythic

```css
em {
  color: #d4b483;
  font-family: "Fraunces";
  font-style: italic;
  font-weight: 300;
}
```

---

## 5. Embroidery Line Motif

A reusable SVG motif should appear in:

- Intro animation
- Hero background
- Product cards
- Contact page decorative detail
- Footer divider optionally

Style:

```css
.embroidery-line {
  fill: none;
  stroke: #b08d57;
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.62;
}
```

The line should always feel hand-stitched, not like a tech vector logo.

---

# Suggested Information Architecture

---

## Homepage

```
Intro animation
Navbar
Hero
Collection horizontal strip
Footer
```

Optional future sections:

```
Material story
Embroidery process
Lookbook
Private drop signup
```

But for the current concept, keep it restrained.

---

## Contact

```
Navbar
Contact hero/form
Social links
Footer
```

---

# Copy System

---

## Brand voice

AURION copy should be:

- Short
- Quiet
- Confident
- Material-focused
- Editorial
- Slightly poetic, but not dramatic

### Avoid

```
🔥 New drop!
Limited hype release!
Shop now before it sells out!
Premium luxury vibes!
```

### Prefer

```
Slow-made in heavyweight cotton.
Gold thread, stitched by hand.
Mythic forms, quiet presence.
```

---

## Homepage copy

### Eyebrow

```
Gold-thread streetwear
```

### Headline

```
Woven in gold, worn in silence
```

### Paragraph

```
Heavyweight hoodies and sweaters, each piece hand-embroidered with mythic creatures in gold thread. Slow-made, quietly loud.
```

### CTA

```
View the collection
```

### Collection

```
Current drop
03 pieces / limited run
```

### Product names

```
Phoenix Embroidered Hoodie
Dragon Thread Sweater
Serpent Crest Hoodie
```

### Footer

```
AURION — Cairo · est. 2026
```

---

## Contact copy

### Headline

```
Reach out
```

### Supporting line

```
For custom requests, sizing, collaborations, or private drop access.
```

### Form labels

```
Name
Email
Message
```

### Submit

```
Send message
```

### Social links

```
Instagram
WhatsApp
Email
```

---

# Example Page Wireframes

---

## Homepage Desktop Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ AURION                         Collection Lookbook Contact Cart │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│        GOLD-THREAD STREETWEAR                              │
│                                                             │
│        Woven in gold,                                      │
│        worn in silence                                     │
│                                                             │
│        Heavyweight hoodies and sweaters, each piece         │
│        hand-embroidered with mythic creatures in gold       │
│        thread. Slow-made, quietly loud.                     │
│                                                             │
│        [ View the collection ]                              │
│                                                             │
│                         |                                   │
│                         •                                   │
│                         |                                   │
├─────────────────────────────────────────────────────────────┤
│ Current drop                         03 pieces / limited run │
│                                                             │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│ │             │  │             │  │             │   →       │
│ │  Phoenix    │  │  Dragon     │  │  Serpent    │           │
│ │  motif      │  │  motif      │  │  motif      │           │
│ │             │  │             │  │             │           │
│ └─────────────┘  └─────────────┘  └─────────────┘           │
│ Hoodie          Sweater          Hoodie                     │
│ Phoenix Hoodie  Dragon Sweater   Serpent Hoodie             │
│ EGP 4,800       EGP 5,200       EGP 4,600                   │
├─────────────────────────────────────────────────────────────┤
│              AURION — Cairo · est. 2026                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Contact Desktop Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ AURION                         Collection Lookbook Contact Cart │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Reach out                  NAME                             │
│                            __________________________       │
│ For custom requests,                                      │
│ sizing, collaborations,    EMAIL                            │
│ or private drop access.    __________________________       │
│                                                             │
│                            MESSAGE                          │
│                            __________________________       │
│                            __________________________       │
│                            __________________________       │
│                                                             │
│                            [ Send message ]                 │
│                                                             │
│                            Instagram  WhatsApp  Email       │
├─────────────────────────────────────────────────────────────┤
│              AURION — Cairo · est. 2026                    │
└─────────────────────────────────────────────────────────────┘
```

---

# Implementation Notes

## Recommended stack

This concept works well with:

- HTML/CSS/JS
- React / Next.js
- Framer Motion for controlled animation
- GSAP for SVG stroke draw and scroll interactions
- CSS scroll snap for horizontal collection
- Lenis only if smooth scrolling is desired, but keep it subtle

## Intro animation implementation

Use:

- SVG path
- `stroke-dasharray`
- `stroke-dashoffset`
- Timed state transition
- Skip button
- `localStorage` optional to avoid replaying intro every visit

Possible behavior:

- First visit: show full intro
- Returning visitor: show shorter 1-second emblem fade
- Always allow skip

## Horizontal scroll implementation

Use CSS scroll snap plus pointer dragging.

For mouse wheel support:

- When the collection rail is in view
- Convert vertical wheel delta to horizontal scroll
- Do not trap scrolling aggressively
- Allow normal page scroll once the rail reaches either end

---

# Final Experience Summary

AURION’s UI should feel like entering a dark atelier: black heavyweight fabric, antique gold thread, burgundy shadows, and mythic forms revealed slowly. The homepage begins with a deliberate stitched emblem animation, then opens into a restrained editorial hero. The collection behaves like a horizontal lookbook strip, emphasizing scarcity and craft rather than commerce. The contact page continues the same quiet luxury language with a minimal form, thin gold lines, and confident spacing.

The result: **a dark, slow, luxurious streetwear interface where the gold embroidery is the identity — not just a decorative accent.**                                                                                                              can u based on this copy design and build the pages to me I want only the animation and the design of pages I don't want a code

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7f88b3a5-15ba-420f-bcb3-9210dc382eba).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
