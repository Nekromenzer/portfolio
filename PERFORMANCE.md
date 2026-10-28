# Performance and SEO audit — 29 October 2026

Measured against a local production build with Lighthouse 12.8.2, default mobile emulation and simulated throttling. These are individual lab runs, not field Core Web Vitals or production measurements. Scores and timings vary between runs.

| Metric | Before | After |
| --- | --- | --- |
| Home performance | 88 | 98 |
| Home LCP | 3.9 s | 2.5 s |
| Home transferred resources | 404 KiB | 290 KiB |
| Blog performance | 86 | 95 |
| Blog LCP | 4.2 s | 2.9 s |
| Blog transferred resources | 440 KiB | 321 KiB |
| Accessibility (home and blog) | 96 | 100 |
| SEO (home and blog) | 100 | 100 |

Both pages recorded zero layout shift. Homepage linked CSS fell from 107,071 to 43,218 uncompressed bytes (19,676 to 9,718 gzip bytes). Preloaded font files fell from five (147,860 bytes) to two (52,396 bytes). Linked homepage JavaScript fell from 685,009 to 658,715 uncompressed bytes. Linked asset totals include module preloads; Lighthouse transfer measurements reflect resources requested during its audit.

## Implemented

- Removed three unused font families; retained Geist Sans and Geist Mono.
- Removed obsolete layout styles from the global stylesheet and extracted 52 unchanged blog rules into a stylesheet imported by blog routes. Global source CSS fell from 60,544 to 3,899 bytes.
- Moved contact actions into a small shared module so navigation no longer imports full portfolio data into client bundles. Existing resume exports and redirect remain compatible.
- Added WebP variants for the portrait, four project logos and the blog cover. The cover source fell from 1,678,804 to 74,446 bytes; the Showloomz logo fell from 764,085 to 3,156 bytes. Existing Next.js responsive image optimization remains in use; original public image URLs remain available.
- Deferred custom visit logging until after load and browser idle time, with cleanup, restricted-storage handling and beacon fallback.
- Added the homepage canonical, Person/WebSite JSON-LD, and consistent page-specific Open Graph/Twitter metadata. Preserved blog article metadata and escaped embedded JSON-LD.
- Made unknown blog slugs return static 404s and removed artificial build-time modification dates from sitemap entries without known content dates.
- Darkened muted text slightly to pass contrast checks and aligned accessible link labels with visible text.

## Executed validation

- Production build and TypeScript: passed; 21 static build entries generated.
- ESLint and git diff whitespace checks: passed.
- All 14 sitemap content pages: HTTP 200, H1, matching canonical, social metadata, parseable JSON-LD where present, and existing local image sources.
- Unknown project/blog URLs: HTTP 404.
- Legacy resume endpoint: HTTP 307 to the shared Reactive Resume URL.
- Robots directives, WhatsApp link and existing primary navigation: checked.
- Mobile Lighthouse audits on the home and blog routes; compared their audit screenshots. All 52 extracted blog rules retain their original declarations.

## Remaining scope

Changes are local and have not been deployed. Re-run mobile audits against the deployed domain to measure hosting, compression, CDN behavior and real network latency. Search indexing/rankings and real-user performance have not been verified. Contact popover interactions, clipboard sharing and desktop layouts were not exercised in an interactive browser during this pass.

Framework metadata behavior follows the [Next.js Metadata documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).
