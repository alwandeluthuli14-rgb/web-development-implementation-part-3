# Part 3 — JavaScript, SEO, Functionality and Testing Evidence

## JavaScript functionality
1. Mobile navigation toggle updates `aria-expanded` and opens/closes the navigation.
2. Footer year is generated dynamically.
3. Enquiry form checks required fields, email format and minimum text lengths using browser validation.
4. Form feedback is announced through an `aria-live` status region.

**Important:** the enquiry form is a front-end demonstration. It does not send, store or email submitted data.

## SEO files
- `robots.txt` permits standard crawlers and points to the sitemap.
- `sitemap.xml` lists all five site pages.
- Each page includes a title, meta description and canonical URL placeholder.
- Replace `YOUR-PUBLISHED-DOMAIN` with the real published HTTPS URL before launch.

## Functionality checklist
- [ ] All five pages load without errors.
- [ ] All navigation links open the correct page.
- [ ] Mobile menu opens and closes using mouse, touch and keyboard.
- [ ] Enquiry form blocks empty/invalid required fields.
- [ ] Valid form entries show the demonstration confirmation.
- [ ] Keyboard focus is visible.
- [ ] No horizontal overflow at mobile width.
- [ ] SEO URLs use the actual published domain.
- [ ] Sitemap XML parses successfully and robots.txt is reachable.

## Evidence to capture
Take genuine screenshots of:
- Home page at desktop, tablet and mobile widths.
- Mobile navigation in its open state.
- Enquiry form invalid-state validation.
- Enquiry form valid-state message.
- Browser showing the published site URL, if deployed.

Save images under `docs/testing-evidence/` and use clear filenames such as `home-desktop.png`, `home-tablet.png`, `home-mobile.png`, `mobile-menu-open.png`, `form-invalid.png` and `form-valid-demo.png`.

## Results log
Complete `TEST-RESULTS-TEMPLATE.md` only after running each test. Record browser/device, date, expected result, actual result, pass/fail and screenshot filename. Do not mark tests as passed without running them.
