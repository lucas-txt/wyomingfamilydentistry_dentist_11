# Progress Tracker

> Resume guide. Read this first. Never delete this file.
> Trust the filesystem over this file: if they disagree, the filesystem wins.

stage: done            <!-- extract | plan | build | qa | done -->
status: done           <!-- in_progress | blocked | done -->
updated: 2026-11-19T17:45Z

## Next action
None. Delivered. The QA harness passes 75/75 and `QA_REPORT.md` records the evidence.

## Gates
- [x] extract — routes mapped (24/24)
- [x] extract — `.txt` filled (24/24)
- [x] extract — assets copied (20/20)
- [x] extract — `content-manifest.json` complete
- [x] extract — manifest validated against the `.txt` files
- [x] extract — `site_old` deleted
- [x] plan — planning appended to every `.txt` (24/24)
- [x] build — app initialized
- [x] build — layout wrappers
- [x] build — design system / tokens
- [x] build — routes implemented (24/24)
- [x] build — `.txt` removed
- [x] qa — L0 typecheck / lint / production build
- [x] qa — L1 smoke + all internal links (24/24)
- [x] qa — L2 parity (all manifest facts)
- [x] qa — L3 a11y (24/24, zero critical/serious)
- [x] qa — L4 visual (24 routes × 360/768/1440)
- [x] qa — L5 rubric (9/10)
- [x] qa — `QA_REPORT.md`

## Routes
| route | .txt | planned | implemented | parity | notes |
| --- | --- | --- | --- | --- | --- |
| `/` | `home.txt` | ✅ | ✅ | ✅ | |
| `/about-us` | `about-us.txt` | ✅ | ✅ | ✅ | |
| `/our-office` | `our-office.txt` | ✅ | ✅ | ✅ | |
| `/services` | `services.txt` | ✅ | ✅ | ✅ | |
| `/preventative-dentistry` | `preventative-dentistry.txt` | ✅ | ✅ | ✅ | |
| `/restorative-dentistry` | `restorative-dentistry.txt` | ✅ | ✅ | ✅ | |
| `/cosmetic-dentistry` | `cosmetic-dentistry.txt` | ✅ | ✅ | ✅ | |
| `/root-canal-therapy` | `root-canal-therapy.txt` | ✅ | ✅ | ✅ | |
| `/dental-implants` | `dental-implants.txt` | ✅ | ✅ | ✅ | |
| `/dental-crowns` | `dental-crowns.txt` | ✅ | ✅ | ✅ | |
| `/tmj-therapy` | `tmj-therapy.txt` | ✅ | ✅ | ✅ | |
| `/extractions` | `extractions.txt` | ✅ | ✅ | ✅ | |
| `/botox` | `botox.txt` | ✅ | ✅ | ✅ | |
| `/patient-forms` | `patient-forms.txt` | ✅ | ✅ | ✅ | |
| `/testimonials` | `testimonials.txt` | ✅ | ✅ | ✅ | |
| `/request-an-appointment` | `request-an-appointment.txt` | ✅ | ✅ | ✅ | |
| `/contact-us` | `contact-us.txt` | ✅ | ✅ | ✅ | |
| `/rate-our-office` | `rate-our-office.txt` | ✅ | ✅ | ✅ | |
| `/privacy-statement-us` | `privacy-statement-us.txt` | ✅ | ✅ | ✅ | |
| `/opt-out-preferences` | `opt-out-preferences.txt` | ✅ | ✅ | ✅ | |
| `/faq` | `faq.txt` | ✅ | ✅ | ✅ | new support route |
| `/new-patients` | `new-patients.txt` | ✅ | ✅ | ✅ | new support route |
| `/meet-the-team` | `meet-the-team.txt` | ✅ | ✅ | ✅ | new support route |
| `/insurance-payment` | `insurance-payment.txt` | ✅ | ✅ | ✅ | new support route |

## Assets
copied: 20/20
missing: none

## Blockers
- (none)

## Log
- 11:10 extract — old site mapped from snapshot + linked routes; 24 routes planned
- 11:14 extract — 24 legacy `.txt` files filled from authentic page content
- 11:17 extract — images, fonts and patient-form PDFs copied/optimized
- 11:19 extract — `content-manifest.json` written with 24 routes, 12 fact groups (38 facts), 20 assets
- 11:20 extract — manifest validated; old snapshot retained outside deliverable under `_old`
- 12:20 plan — brand, tokens, typography and page-by-page plan recorded
- 13:30 build — Next.js App Router app, design system and shared primitives complete
- 14:30 build — all 24 routes implemented; forms, metadata, sitemap, robots and JSON-LD added
- 14:55 build — `tsc`, ESLint and production build clean; manual 1440 px route pass clean
- 15:10 build — responsive pass fixed 45 px overflow on appointment/contact/insurance panels
- 15:30 qa — harness run 1: L2, L3, L4 green; L1 failed on one broken `google-icon.webp`
- 15:35 qa — reproduced the image optimizer response; source WebP is valid and smaller than the optimized JPEG
- 16:20 qa — run 2: 70/75 passed; logo optimizer broke on 3 routes, 2 transient contrast failures
- 16:35 qa — global `images.unoptimized` (all source images are pre-optimized WebP) and fade-free Reveal motion
- 16:55 qa — stress pass: lazy images reported incomplete; step numerals failed contrast; card aria-labels mismatched visible text
- 17:10 qa — all images eager; decorative numerals moved to generated content; redundant card labels removed; carousel autoplay removed
- 17:15 qa — pre-checks green: 24 routes desktop/mobile, 0 images/axe/overflow issues; 96-load image stress clean; forms and reduced motion pass
- 17:20 qa — found and fixed a wizard click swallowed by blur validation (`mode: onSubmit`); all form flows now pass first click
- 17:36 qa — final harness run: 75/75 passed, exit 0; L0–L4 green; L5 9/10
- 17:40 qa — `QA_REPORT.md` written with evidence per gate
- 17:44 cleanup — planning `.txt` files removed; `_old` snapshot deleted; manifest, assets and tracker preserved
