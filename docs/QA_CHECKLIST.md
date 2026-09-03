# FORMA — QA Checklist

Use this checklist after every implementation stage.

Not every item must be fully satisfied during early stages, but any deferred item must be explicitly reported.

## 1. Page loading

- [ ] Page loads locally.
- [ ] No missing CSS.
- [ ] No missing JavaScript.
- [ ] No broken local asset paths.
- [ ] No obvious console errors.

## 2. Navigation

- [ ] Logo returns to top.
- [ ] Проекты opens `#projects`.
- [ ] Что создаём opens `#services`.
- [ ] Процесс opens `#process`.
- [ ] FAQ opens `#faq`.
- [ ] Обсудить проект opens `#contact`.
- [ ] All section IDs exist.
- [ ] No decorative `<a>` without `href`.
- [ ] No dead buttons.

## 3. Mobile menu

- [ ] Menu opens.
- [ ] Menu closes.
- [ ] Menu closes after navigation.
- [ ] Toggle has an accessible name.
- [ ] Keyboard focus is usable.
- [ ] Body does not become horizontally scrollable.

## 4. Responsive widths

Check at minimum:

- [ ] 320 px
- [ ] 375 px
- [ ] 390 px
- [ ] 430 px
- [ ] 768 px
- [ ] 1024 px
- [ ] 1440 px

At each width verify:
- [ ] no horizontal overflow;
- [ ] no clipped text;
- [ ] no overlapping controls;
- [ ] images/media stay inside layout;
- [ ] CTA remains usable;
- [ ] headings remain readable.

## 5. Hero

- [ ] H1 is visible and legible.
- [ ] Supporting copy has reasonable line length.
- [ ] Primary CTA works.
- [ ] Secondary projects CTA works.
- [ ] Hero media does not break responsive layout.
- [ ] No fake social proof.

## 6. Projects

- [ ] Three project concepts are present.
- [ ] Each has a demo label.
- [ ] Images have meaningful alt text or correct decorative handling.
- [ ] Project presentation remains readable on mobile.

## 7. Services

- [ ] Four categories are present.
- [ ] Numbering/order is correct.
- [ ] Layout does not degrade into cramped cards on mobile.

## 8. Approach

- [ ] Approved copy is present.
- [ ] Supporting statement is visually distinct.
- [ ] Media/detail treatment does not cause overflow.

## 9. Process

- [ ] Five steps are present.
- [ ] Step order is correct.
- [ ] Copy is readable.
- [ ] Process statement about cost/time changes is present.

## 10. Materials

- [ ] Wood section/theme present.
- [ ] Stone section/theme present.
- [ ] Details section/theme present.
- [ ] CTA works.

## 11. FAQ

- [ ] Every approved question is present.
- [ ] Each answer can be opened/read.
- [ ] Keyboard interaction works.
- [ ] Focus state is visible.

## 12. Contact form

- [ ] Name field labelled.
- [ ] Contact field labelled.
- [ ] Project-description field labelled.
- [ ] Budget field labelled.
- [ ] Required fields validate.
- [ ] Errors are understandable.
- [ ] Errors are associated with fields where possible.
- [ ] Submit does not navigate to a broken URL.
- [ ] Demo success state appears.
- [ ] No real data is transmitted externally.

## 13. Footer

- [ ] Brand present.
- [ ] Useful navigation works.
- [ ] Demo disclosure present.

## 14. Accessibility

- [ ] Single logical H1.
- [ ] Heading levels make sense.
- [ ] Interactive elements are keyboard reachable.
- [ ] Focus indicators are visible.
- [ ] Form controls have labels.
- [ ] Buttons have meaningful names.
- [ ] Text contrast is reasonable.
- [ ] Images use appropriate alt handling.

## 15. Content integrity

- [ ] No fake testimonials.
- [ ] No fake star ratings.
- [ ] No fake number of clients.
- [ ] No fake years in business.
- [ ] No fake awards.
- [ ] No claim implying a real client commission.
- [ ] Demo concept is disclosed.

## 16. Visual quality

- [ ] Layout feels editorial rather than template-like.
- [ ] Card density is low.
- [ ] Typography has clear hierarchy.
- [ ] Whitespace feels intentional.
- [ ] Photography/media carries visual weight.
- [ ] No excessive gradients.
- [ ] No generic SaaS visual language.

## 17. Performance / robustness

For later stages:
- [ ] Images use appropriate sizes.
- [ ] Large assets are optimized.
- [ ] No unnecessary JS libraries.
- [ ] No layout shift from missing image dimensions where practical.
- [ ] Interactions remain usable with reduced motion.

## 18. Final portfolio check

Before publishing:
- [ ] Desktop full-page screenshot looks strong.
- [ ] Hero crop looks strong at Kwork portfolio ratio.
- [ ] Mobile screenshot looks intentional.
- [ ] No debug/demo development artifacts are visible except intentional demo disclosure.
- [ ] The page looks like something a paying business client could plausibly commission.
