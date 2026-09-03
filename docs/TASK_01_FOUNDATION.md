# TASK 01 — Foundation + Semantic Page Structure + Design System

## Goal

Create the first working foundation of the FORMA landing page.

This task is NOT the final visual implementation.

The objective is to establish:
- project structure;
- semantic HTML;
- approved information architecture;
- base design tokens;
- typography foundation;
- responsive layout primitives;
- working navigation;
- working demo form behavior;
- accessible baseline.

Final imagery, sophisticated compositions, motion polish and detailed visual refinement are intentionally deferred.

## Read first

Before coding, read:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/VISUAL_DIRECTION.md`
- `docs/REFERENCES.md`
- `docs/QA_CHECKLIST.md`

## Required outcome

At the end of Task 01, the project should run locally and contain all eight approved sections in the correct order:

1. Hero
2. Selected Projects
3. What We Make
4. Approach
5. Process
6. Materials & Details
7. FAQ
8. Final CTA / Contact

The exact approved Russian copy from `PROJECT_BRIEF.md` should be used unless there is a clear technical reason not to.

## Technical direction

Default to a simple static implementation unless the repository already has a justified stack.

Preferred baseline:
- HTML;
- CSS;
- vanilla JavaScript.

Do not add a frontend framework unless explicitly requested.

Do not add a build system just for convenience.

## Required files

A reasonable minimal structure could be:

```text
/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── ...
├── AGENTS.md
└── docs/
    └── ...
```

You may improve this structure if useful, but keep it simple.

## Task scope

### 1. Semantic page skeleton

Implement all main sections with stable IDs:

- `#top`
- `#projects`
- `#services`
- `#approach`
- `#process`
- `#materials`
- `#faq`
- `#contact`

Use semantic elements such as:
- `header`;
- `nav`;
- `main`;
- `section`;
- `footer`;
- form elements.

### 2. Navigation

Desktop navigation must work.

Links:
- Проекты → `#projects`
- Что создаём → `#services`
- Процесс → `#process`
- FAQ → `#faq`
- Обсудить проект → `#contact`

Logo/brand should navigate or scroll to `#top`.

### 3. Mobile navigation

Implement a real mobile menu.

Requirements:
- opens;
- closes;
- closes after selecting a link;
- has an accessible button label;
- keyboard usable;
- does not create horizontal overflow.

Keep animation simple.

### 4. Base design system

Create CSS custom properties for at least:
- colors;
- typography;
- container width;
- spacing;
- radii if needed;
- borders;
- transition timing.

Use the visual direction as a starting point.

Do not finalize every value yet.

### 5. Typography foundation

Establish:
- display heading style;
- body style;
- eyebrow/label style;
- section heading style;
- CTA style.

If using external web fonts, choose fonts with reliable Cyrillic support.

Do not introduce multiple unnecessary font families.

### 6. Layout primitives

Create reusable classes for:
- main container;
- section spacing;
- editorial grid;
- text column;
- media placeholder;
- CTA/button;
- labels/eyebrows.

Task 01 may use temporary media placeholders.

These placeholders must look intentional, not like broken images.

### 7. Hero

Implement the approved content and basic layout.

Do not attempt final art direction yet.

Hero must contain:
- eyebrow;
- H1;
- supporting copy;
- primary CTA;
- secondary projects action;
- media area.

### 8. Selected Projects

Implement all three approved demo projects.

Use semantic project items.

Temporary images/placeholders are acceptable.

Each project must visibly include its `DEMO CONCEPT` label.

### 9. What We Make

Implement the four approved categories.

Do not use a generic four-card component unless absolutely necessary.

Prefer a numbered list/editorial structure.

### 10. Approach

Implement approved copy and supporting statement.

Include a media/detail placeholder.

### 11. Process

Implement the five approved steps.

Use accessible ordered-list semantics if appropriate.

### 12. Materials

Implement:
- heading;
- intro;
- Wood;
- Stone;
- Details;
- CTA.

Final macro photography is deferred.

### 13. FAQ

Implement all approved FAQ items.

Use an accessible accordion OR semantic `<details>` / `<summary>`.

The FAQ must actually open/close.

### 14. Contact form

Implement fields:
- name;
- phone/Telegram;
- project description;
- budget.

Requirements:
- explicit labels;
- required-field validation where appropriate;
- basic contact validation;
- inline error feedback;
- demo submit behavior;
- success state.

The form must not send data to an external server.

Success message:

> Спасибо. Это демонстрационная версия формы.

Supporting message:

> В реальном проекте заявка может отправляться в Telegram, CRM или на почту.

### 15. Footer

Implement:
- FORMA brand;
- supporting line;
- navigation;
- demo disclosure.

Disclosure:

> Демонстрационный проект для портфолио веб-разработчика.

### 16. Metadata

Implement:
- page title;
- meta description;
- viewport;
- basic Open Graph metadata where reasonable.

## Explicitly deferred to Task 02+

Do NOT spend significant time on:
- final photography;
- art-directed image crops;
- advanced project-grid composition;
- scroll-triggered animations;
- parallax;
- complex hover image switching;
- advanced lightboxes;
- external form integrations;
- CRM/Telegram integration;
- full SEO work;
- performance micro-optimization;
- sophisticated motion.

## Acceptance criteria

Task 01 is complete only if:

- page loads without broken local assets;
- all eight sections exist;
- all navigation anchors point to real IDs;
- no `<a>` controls exist without meaningful `href`;
- mobile menu works;
- FAQ works;
- contact form validates and shows demo success;
- there are no obvious console errors;
- no horizontal overflow at 320, 375, 390, 430, 768 and 1440 px;
- focus states are visible;
- content hierarchy is semantic;
- fake testimonials/ratings/statistics are absent;
- demo disclosure is present;
- project labels identify demo concepts;
- code is clean enough to continue with Task 02.

## Required completion report

After implementation, report:

1. files created/changed;
2. what was implemented;
3. what was actually tested;
4. viewport sizes tested;
5. any remaining limitation;
6. what was intentionally deferred to Task 02.

Do not start Task 02.
