# TASK 02 — Visual Build + Real Imagery + Responsive Art Direction

## Status

Task 01 is complete and accepted.

Task 02 starts from the existing working foundation.  
Do **not** rebuild the site from scratch.

The current semantic structure, approved copy, navigation, FAQ, demo form and base accessibility should remain intact unless a visual implementation change requires a small structural adjustment.

## Goal

Transform the current FORMA foundation into a polished portfolio-level landing page that visually communicates:

**warm editorial premium**

The final page should feel like a credible custom-furniture studio website that a prospective Kwork client could plausibly commission.

The result should move from:

> clean technical foundation

to:

> visually distinctive, photography-led, premium commercial landing page

without sacrificing reliability, responsiveness or clarity.

---

# Read first

Before changing anything, read:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/VISUAL_DIRECTION.md`
- `docs/REFERENCES.md`
- `docs/QA_CHECKLIST.md`
- this file

Also inspect the current implementation from Task 01 before editing.

Do not begin by rewriting the entire CSS.

---

# Core visual direction

Use the already approved reference DNA:

- **45% SemiCreative**
  - whitespace
  - disciplined grid
  - restraint
  - typography-led composition

- **35% Home Société**
  - editorial rhythm
  - photography-first storytelling
  - large imagery
  - visual character

- **20% Baden Concept**
  - commercial clarity
  - practical business structure
  - credible CTA placement

Do not copy any reference 1:1.

The intended result is **FORMA**, not a clone.

---

# Task scope

Task 02 includes:

1. real / final-quality imagery
2. typography upgrade
3. art-directed hero
4. editorial project composition
5. visual refinement of all sections
6. mobile-specific composition
7. hover/focus states
8. restrained motion
9. image optimization
10. visual QA

Task 02 does **not** include:
- CRM integration
- Telegram integration
- real form submission
- CMS
- backend
- complex 3D/WebGL
- heavy animation frameworks
- full SEO work
- deployment
- final Kwork screenshots

Those are deferred.

---

# 1. Imagery strategy

Photography is the main premium signal.

Use a small number of strong images rather than many mediocre ones.

All imagery must be:
- visually coherent
- high quality
- relevant to custom kitchens / built-in furniture
- free of obvious AI geometry defects
- free of watermarks
- legally usable for a demonstration portfolio project

Preferred sources:
- royalty-free photography
- appropriately licensed stock
- original generated imagery if needed

Do not copy images from the reference websites.

Store final assets locally in the project.

Do not hotlink critical portfolio imagery from third-party websites.

---

# 2. Required image set

Prepare approximately 8–10 final visual assets.

## Hero image

One large architectural kitchen/interior image.

Requirements:
- warm materials
- wood / stone
- quiet modern composition
- enough negative space for crop flexibility
- premium but believable
- no visible brand logos

The hero image must carry major visual weight.

---

## Project 01 — Kitchen

Theme:

**Тёплый дуб и светлый камень**

Need:
- one primary project image
- optional secondary detail crop if it improves composition

Visual direction:
- warm oak
- light stone
- integrated storage
- restrained geometry

---

## Project 02 — Built-in storage

Theme:

**Хранение без визуального шума**

Need:
- one primary image

Visual direction:
- wall-to-wall built-in cabinetry
- flush or visually quiet fronts
- strong architectural integration

---

## Project 03 — Wardrobe

Theme:

**Гардеробная как часть интерьера**

Need:
- one primary image

Visual direction:
- elegant wardrobe / dressing room
- open + closed storage
- controlled lighting
- warm material palette

---

## Approach section

Need:
- one detail-oriented image

Possible subject:
- joinery
- cabinetry edge
- hardware
- wall-to-furniture junction
- material transition

This should feel architectural, not decorative.

---

## Materials section

Need three close-up / material images:

1. Wood
2. Stone
3. Hardware / detail

These should feel tactile and visually different from the project images.

---

# 3. Typography upgrade

The current Georgia fallback is only temporary.

Replace it with a deliberate serif + grotesk system.

## Display serif

Choose one final serif with strong Cyrillic support.

Preferred direction:
- Instrument Serif if Cyrillic support is reliable in the chosen source
- Cormorant Garamond
- another editorial serif with verified Cyrillic

Do not use a font that breaks Russian text.

## Body / UI

Use one neutral grotesk with strong Cyrillic support.

Preferred direction:
- Manrope
- Inter
- another similarly restrained sans-serif

## Requirements

Typography should create hierarchy through:
- scale
- line length
- spacing
- family contrast
- controlled line breaks

Do not overuse bold weights.

Avoid generic "corporate" typography.

---

# 4. Hero art direction

The hero is the highest-priority section.

It should feel like a premium editorial furniture landing page.

## Desktop

Target composition:
- text occupies roughly 35–45%
- image occupies roughly 55–65%
- asymmetry is allowed
- image should feel integrated into the layout, not placed in a card

Keep:
- eyebrow
- H1
- supporting copy
- primary CTA
- secondary projects link

Remove all remaining placeholder styling.

The hero should have:
- strong crop
- clear hierarchy
- generous whitespace
- refined interaction states

Do not add:
- ratings
- fake statistics
- icons
- badges
- extra marketing chips

---

# 5. Selected Projects

This section should become one of the strongest visual moments.

Do not turn the projects into three equal cards.

Use editorial/asymmetric composition.

Recommended direction:
- alternating alignment
- large image areas
- generous spacing
- project number
- category label
- short title
- short description

Project 02 may remain offset opposite to Projects 01 and 03.

The section should read like an interior magazine spread.

On mobile:
- simplify to a clear vertical sequence
- preserve visual quality
- do not attempt to preserve desktop asymmetry literally

---

# 6. What We Make

Keep the numbered list approach.

Do not convert it into four cards.

Visual improvement may include:
- stronger type hierarchy
- subtle active/hover state
- supporting image treatment
- refined separators

If adding image switching:
- keep implementation lightweight
- keyboard/focus behavior must remain usable
- do not introduce a large JS dependency

A static editorial composition is preferred over an unnecessarily complex interaction.

---

# 7. Approach section

Strengthen the relationship between copy and imagery.

The detail image should visually support:

**Сначала пространство. Потом мебель.**

The statement block should feel like an editorial pull quote / principle, not an alert box.

Avoid decorative UI.

---

# 8. Process section

Keep the linear process structure.

Improve:
- vertical rhythm
- numbering
- separators
- line lengths
- responsive behavior

Do not add icons.

Do not add cards.

The process should feel calm and precise.

---

# 9. Materials section

This section should feel tactile and visually rich.

Use:
- three different image proportions
- macro texture
- controlled asymmetry
- short labels

The current unequal composition is a good foundation and may be refined rather than replaced.

Photography should do most of the work.

---

# 10. FAQ

Keep the FAQ restrained.

Prefer native `<details>/<summary>` behavior.

Review the current JavaScript keyboard handler for FAQ.

If native browser behavior already provides correct keyboard interaction, remove unnecessary custom keyboard toggling rather than layering duplicate behavior.

Keep:
- visible focus
- clean open/closed states
- subtle plus/minus treatment

Do not animate heavily.

---

# 11. Contact section

Keep the existing demo-form behavior.

Visual goal:
- premium dark closing section
- high contrast
- calm form treatment
- form should feel integrated with the page

Do not make inputs look like generic SaaS form cards.

Keep demo disclosure visible but visually secondary.

No external data transmission.

---

# 12. Header / navigation

Refine sticky header behavior if needed.

Desired qualities:
- lightweight
- elegant
- does not dominate the page
- readable over scroll
- mobile menu remains functional

Do not add unnecessary navigation items.

---

# 13. Motion

Use motion sparingly.

Allowed:
- image reveal
- subtle text entrance
- hover transitions
- gentle opacity / transform
- smooth anchor scroll

Optional:
- very light parallax on one or two images

Avoid:
- GSAP unless genuinely necessary
- animation libraries for trivial effects
- scroll-jacking
- horizontal site navigation
- page transitions
- WebGL
- decorative motion that hurts usability

Respect `prefers-reduced-motion`.

---

# 14. Responsive art direction

Mobile must be designed intentionally.

Do not rely on:

> desktop grid → one column

as the entire mobile strategy.

Review and intentionally adjust:

- hero crop
- hero order
- headline scale
- project image order
- project spacing
- materials composition
- process layout
- form layout
- navigation
- image aspect ratios

Target widths:

- 320
- 375
- 390
- 430
- 768
- 1024
- 1440

No horizontal overflow.

Important:

Do not rely on `overflow-x: clip` to hide geometry bugs.

If an element exceeds the viewport, fix the underlying layout.

---

# 15. Image performance

For final imagery:

- use appropriate formats
- prefer WebP / AVIF where practical
- use responsive sizing where useful
- avoid huge source images if smaller versions are sufficient
- add width/height or aspect-ratio where appropriate to reduce layout shift
- lazy-load below-the-fold imagery
- do not lazy-load the primary hero image if it harms perceived loading

Do not over-optimize at the expense of implementation clarity.

---

# 16. Accessibility preservation

Task 02 must not regress Task 01 accessibility.

Preserve / verify:

- semantic heading hierarchy
- visible focus
- accessible mobile menu
- form labels
- form errors
- accessible FAQ
- useful alt text
- keyboard interaction
- sufficient contrast

Decorative imagery should not receive noisy alt text.

---

# 17. Visual anti-patterns

Do NOT introduce:

- fake social proof
- fake testimonials
- fake awards
- fake years of experience
- generic icon benefit grid
- SaaS card soup
- heavy gradients
- glassmorphism
- neon accents
- excessive rounded corners
- excessive shadows
- 3D for decoration
- stock-photo cliché of workers measuring furniture
- obvious AI-generated geometry errors

---

# 18. Portfolio criterion

The final Task 02 result should already be visually strong enough that:

1. a desktop screenshot could plausibly be shown in a Kwork portfolio;
2. the hero crop feels premium;
3. the mobile version looks intentionally designed;
4. the site does not look like a generic template;
5. the site does not look like an AI-generated mockup;
6. a prospective business client can understand what kind of result the developer can produce.

Task 02 is not complete if it is merely "clean".

It must be visually memorable.

---

# 19. Required browser QA

After implementation, run the site and verify in browser.

Check:

## Desktop
- 1440 px
- 1024 px

## Tablet
- 768 px

## Mobile
- 430 px
- 390 px
- 375 px
- 320 px

At each size check:
- no horizontal overflow
- no clipped headings
- no broken image crops
- no overlapping content
- readable navigation
- usable CTA
- functional FAQ
- functional demo form

Also verify:
- console errors
- broken asset requests
- missing images
- bad font loading
- layout shift where obvious

---

# 20. Acceptance criteria

Task 02 is complete only if:

- placeholders are replaced with final-quality imagery;
- hero feels photography-led and premium;
- typography has been upgraded;
- project section is editorial, not card-based;
- materials section feels tactile;
- mobile has intentional composition;
- all existing navigation still works;
- mobile menu still works;
- FAQ still works;
- demo form still works;
- no fake social proof was introduced;
- no horizontal overflow exists at target widths;
- console is clean;
- no broken assets exist;
- reduced-motion behavior is respected where animation is added;
- page is visually strong enough for portfolio review.

---

# 21. Required completion report

After Task 02, report:

1. all files changed;
2. all new image/font assets added;
3. image sources / licensing notes where relevant;
4. major visual decisions;
5. what was changed specifically for mobile;
6. what interactions/motion were added;
7. what was actually browser-tested;
8. viewport sizes tested;
9. console/network findings;
10. unresolved risks;
11. what remains for Task 03.

Do not start Task 03.

---

# 22. Reviewer note

Do not self-approve the final portfolio quality.

Task 02 ends when the implementation and QA are complete.

After that, an external reviewer will inspect:
- code
- visual result
- mobile behavior
- imagery quality
- portfolio readiness

Wait for review before proceeding.
