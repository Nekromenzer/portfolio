# Maneesha’s portfolio

A Next.js 16, React 19, TypeScript and Tailwind CSS portfolio with project case
studies, experience, social links, an interactive globe, and Markdown blog posts.

## Development

Use Node.js 22 and run:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. Run `npm run lint` to check the source.

## GitHub Pages

The site uses Next.js static export. `npm run build` writes the complete site to
`out/`; serve that directory with any static HTTP server to preview it.
`next start` requires a Next.js server and is not used for this export.

The workflow in `.github/workflows/pages.yml` installs, lints, builds and deploys
every push to `main`. In repository Settings → Pages, select **GitHub Actions**
as the publishing source. The repository must be public on GitHub Free.

The workflow reads the site URL and base path from GitHub Pages settings. It works
at `https://nekromenzer.github.io/portfolio/` and at the custom domain configured
in those settings. For a local build at the project URL:

```sh
NEXT_PUBLIC_SITE_URL=https://nekromenzer.github.io/portfolio \
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

Without environment overrides, metadata uses `https://www.nekromenzer.online`.
Use `assetPath()` from `src/lib/site.ts` for public images so project URL builds
include the correct prefix. Images are served as static files; there is no
runtime image optimization service.

## Blog and résumé

Edit or add Markdown in `content/blog/`, with images in `public/uploads/`. Changes
published to `main` trigger the Pages workflow. `/admin/` links to the GitHub
editor, where GitHub enforces write access. Decap CMS and its server password gate
have been replaced by this GitHub editing flow.

Résumé actions use the URL in `src/data/contact.ts`. The old `/api/resume/` URL
remains as a static HTML redirect with a fallback link.

GitHub Pages does not run server API routes or middleware. The visit logging
endpoint and Vercel Analytics have been removed.

## Analytics

The shared layout loads Google Tag Manager container `GTM-K9CM82HX` asynchronously
and initializes `window.dataLayer` and `gtag` on every page. Manage analytics tags
and publish container changes in Google Tag Manager. Installing the container
does not by itself verify that Google Analytics receives events.

## Domain cutover

1. Deploy and verify the default GitHub Pages URL first.
2. Set the Pages custom domain to `www.nekromenzer.online`.
3. In DNS, point `www` with a CNAME to `nekromenzer.github.io` and configure
   the apex records using [GitHub’s domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Rebuild after the custom domain is configured so metadata and assets use the
   domain root, then verify HTTPS and enable **Enforce HTTPS** in Pages settings.
5. Remove the portfolio Vercel project after the domain serves GitHub Pages.

The domain currently uses Vercel nameservers. Keep its DNS zone available when
removing the hosting project; changing nameservers requires copying all records,
including mail and verification records, to the replacement DNS provider.
