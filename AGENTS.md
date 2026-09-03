# FORMA — Project Instructions for Codex

## Project purpose

FORMA is a **demonstration portfolio project** for a freelance web developer's Kwork landing-page service.

The site represents a fictional studio that designs and produces custom kitchens and built-in furniture.

This is not a real client business. The final site must make that clear without harming the premium presentation.

## Primary objective

Build a polished, credible, production-like business landing page that a prospective freelance client can inspect and think:

> "I could hire this developer to build a landing page of this quality for my business."

The project must demonstrate:
- strong commercial landing-page structure;
- refined visual design;
- responsive implementation;
- reliable navigation and interactions;
- clean, maintainable code;
- attention to accessibility and QA.

## Source of truth

Before making changes, read:

1. `docs/PROJECT_BRIEF.md`
2. `docs/VISUAL_DIRECTION.md`
3. `docs/REFERENCES.md`
4. the currently assigned task file, e.g. `docs/TASK_01_FOUNDATION.md`
5. `docs/QA_CHECKLIST.md`

Do not invent a new product direction when these documents already define one.

If documents conflict, stop and report the conflict instead of silently choosing.

## Scope discipline

Work only on the current task.

Do not move ahead to future stages unless explicitly instructed.

For example, if the current task is foundation/structure:
- do not spend time on final animation polish;
- do not add complex dependencies;
- do not redesign the approved information architecture;
- do not invent additional sections without a clear reason.

## Portfolio honesty

Never fabricate or imply real client proof.

Do NOT add:
- fake testimonials;
- fake client logos;
- fake review scores;
- fake project counts;
- fake years of experience;
- fake awards;
- fake production statistics;
- fake press mentions.

If sample/project data is needed, label it clearly as a demo concept.

The site should include a subtle statement that it is a demonstration portfolio project.

## Functional integrity

No decorative dead controls.

Every interactive element must either:
- perform a valid action;
- link to a real section;
- or be intentionally disabled with clear semantics.

Never create `<a>` elements without a meaningful `href`.

Do not ship:
- anchors pointing to missing IDs;
- broken asset paths;
- buttons that do nothing;
- forms that fail silently;
- JavaScript console errors.

## Form behavior

This is a demo project.

The contact form should:
- validate required fields;
- provide useful inline feedback;
- simulate successful submission locally;
- clearly state that this is a demo form;
- not send user data to any real external service unless explicitly requested later.

## Responsive behavior

Mobile is not a shrunk desktop layout.

Design and verify mobile intentionally.

No horizontal scrolling at supported viewport widths.

Target QA widths:
- 320
- 375
- 390
- 430
- 768
- 1024
- 1440

## Accessibility baseline

Use semantic HTML.

Required baseline:
- sensible heading hierarchy;
- visible keyboard focus;
- accessible labels for form controls;
- sufficient contrast;
- meaningful alt text for content imagery;
- decorative imagery marked appropriately;
- mobile navigation usable by keyboard/touch;
- interactive controls must have clear accessible names.

## Implementation principles

Prefer simple, durable solutions.

Default preference:
- semantic HTML;
- modern CSS;
- minimal JavaScript;
- no framework unless the task explicitly calls for one.

Avoid adding packages only for trivial UI behavior.

Do not introduce animation libraries unless they create clear value and are explicitly approved.

## Visual discipline

The site should feel:
- warm;
- editorial;
- restrained;
- architectural;
- premium without luxury clichés.

Avoid:
- SaaS card soup;
- excessive badges;
- generic icon grids;
- heavy gradients;
- neon accents;
- fake glassmorphism;
- overuse of rounded cards;
- template-like "3 benefits + 4 cards + stats" composition.

Photography and typography should carry much of the visual identity.

## Before finishing any task

1. Review your changes against the task's acceptance criteria.
2. Check all anchors and controls.
3. Check for obvious responsive issues.
4. Check for missing assets.
5. Check for console errors if the project is runnable.
6. Report:
   - what changed;
   - what you verified;
   - what is intentionally deferred;
   - any unresolved risk or assumption.

Do not claim something was tested if it was not actually tested.
