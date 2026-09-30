# Site Review — Davenport Research Group website

_Reviewed 2026-09-30 against `master` @ `fb9723b`._

## Progress

| Item | Status |
|---|---|
| §2 Bugs (logo, jQuery snippet, `CNAME`, `url`/`description`, empty card, Bootstrap JS) | Done |
| §3 Stray files, `_pubs/`, unused theme scaffolding, service worker, Gemfile/plugins, `exclude:` | Done |
| §3 Inline CSS from `_layouts/page.html` moved to `_sass/_custom.scss` | Done |
| §3 CSS frameworks: Bootstrap removed, Alembic kept, cards/grid rewritten in `_sass/_custom.scss` | Done. `_sass/_legacy-research.scss` is a temporary stand-in for Bootstrap classes in `research/*.md` and goes away with §1 |
| §4 Mobile layout | Fixed. The `h1` negative-margin hack made every page 15px wider than a phone screen |
| §4 Typos, People photo alt text, extreme-precip card alt text | Done. Research-page image issues are deferred to §1 |
| §5 README setup steps | Done. The "add a research page" instructions will be rewritten with §1 |
| §1 Research template redesign | Done. `_research/` collection, `_layouts/research.html`, `templates/research-project.md`; four pages migrated; publications matched by DOI via `_includes/citation.html` |
| §5 README research instructions | Done |
| People and News to Markdown | Done. `_people/` collection (one file per person, bio in Markdown), `templates/person.md`; news photo uses Markdown image syntax |
| Publications to Markdown | Done. Author bolding in `_data/publications.yml` uses `**…**`; Google Scholar note is Markdown |

Every page's rendered content was compared against the original build, and screenshots were compared before and after. The only differences are the intended text fixes, plus HTML serialization details (`<br>` → `<br />`), explained in §3.

## Summary

The site builds cleanly (`bundle exec jekyll build`, Jekyll 3.10 via the `github-pages` gem, no warnings) and the live site at https://fdavenport.github.io is up. The main problem is the one you raised: research project pages are hand-written Bootstrap HTML inside `.md` files, and a new student would have to copy-edit `<div class="row"><div class="col">...<small>` blocks to add a page. A few real bugs and a lot of leftover theme scaffolding also make the repo harder to understand than it needs to be.

Top priorities:

1. **Rebuild the research page template as real Markdown.** Move layout and styling into a new `research` layout, and move per-project metadata into front matter (see §1).
2. **Fix the broken site logo.** It currently returns a 404 on the live site (§2.1).
3. **Remove the stray jQuery "link hijack" script** in `_layouts/page.html` (§2.2).
4. **Remove the theme author's `CNAME`** and set `url:` in `_config.yml` (§2.3, §2.4).
5. **Clean up backup and duplicate files**, and update the README so that a newcomer can actually get the site running (§3, §5).

---

## 1. Research project pages (main focus)

### 1.1 Current state

Adding a project currently means editing **two** files that must agree:

- `_data/research.yml`: card metadata (title, status, thumbnail, url, alt text, caption, short description, last-updated).
- `research/<slug>.md`: the page itself. Its `title` duplicates the YAML entry, and its `url` must match the filename by hand.

The page body is almost entirely HTML. For example, `research/project-example-1.md` contains:

- `<div class="row">` / `<div class="col">` Bootstrap grid wrappers around every section.
- `<p style="line-height: normal"><small>…</small></p>` around **every paragraph**. The body text is shrunk and the line height reset one paragraph at a time rather than once in CSS.
- `<div class="border border-1 p-1"><img …><p class="m-0 p-0"><small class="m-0 p-0">caption</small></p></div>` for every figure.
- Section headings written as `<b>` inside `<p>` instead of Markdown headings, so they don't appear as headings to screen readers or in the page outline.
- Recurring blocks ("Project Members", "Study Areas", "Funding Source", "Related Publications", "Back to Research Projects") re-typed by hand on each page.

The HTML is needed because the site uses kramdown, which by default does **not** process Markdown inside HTML block tags. Once a section is wrapped in `<div>`, everything inside it has to be HTML too. The fix is to stop needing the wrappers, not to add `markdown="1"` everywhere.

The existing pages have also drifted from the template. `research/water-supply-forecasting-data-driven-models.md:59-61` has inline `transform`/`z-index` styles, the ML page uses fixed pixel widths, and so on. This drift is what hand-copied HTML tends to produce.

### 1.2 Proposed design

**A. One file per project: a Jekyll collection with front matter as the single source of truth.**

Replace `_data/research.yml` plus `research/*.md` with a `_research/` collection (`output: true`, `permalink: /research/:name/`). This keeps every existing URL unchanged. Each project file would look roughly like this:

```markdown
---
title: Using data-driven models to improve forecasts of growing-season water supply in Colorado
status: ongoing                # ongoing | previous
last_updated: 2025-05-13       # YYYY-MM-DD; formatted automatically

# Card on the Research page
thumbnail: /assets/images/research/snow_melt_by_thesleepyrabbit.jpg
thumbnail_alt: A small stream surrounded by melting snow
thumbnail_caption: Snow melting in Roosevelt National Forest.
summary: One or two sentences shown on the Research page card.

# Banner image at the top of the project page (optional)
feature_image: /assets/images/feature/mountains_winter.jpg

# Sidebar details (all optional; omit any you don't need)
members: [Mike Talbot, Frances Davenport]
study_areas: [Western U.S., Colorado]
funding:
  - name: Colorado Agricultural Experiment Station
    url: https://aes.colostate.edu/about-us/
publications:
  - Davenport, F. V., et al. (2021). Title. *Journal*. https://doi.org/...
---

## Water supply forecasting in Colorado is getting harder

Plain Markdown paragraphs. **Bold**, *italics*, [links](https://...), lists — all just work.

![Snowpack peak timing graphic](/assets/images/research/2022Snowpack_Peak_en_title_lg.jpg)
*Source: [Climate Central](https://www.climatecentral.org/...)*
```

`research.md` would then loop over `site.research | where: "status", "ongoing"`, sorted by `last_updated`, instead of over `site.data.research`. This also removes the current `title: Nothing` placeholder logic.

**B. A `_layouts/research.html` layout that renders everything repetitive.**

It would draw the members / study areas / funding panel from front matter (each item only if present), render the "Related Publications" list, add the "Back to Research Projects" link, and contain the CSS that is currently written inline on every paragraph (font size, line height). The collection's `defaults` in `_config.yml` would set `layout: research`, so students never need to type it.

**C. Figures in plain Markdown.** Captions are the one thing Markdown doesn't have natively. Options, in order of friendliness:

| Option | What a student writes | Notes |
|---|---|---|
| **1. Image + italic line (recommended)** | `![alt](path)` then `*caption*` on the next line | Pure Markdown, and it previews correctly on GitHub. A CSS rule in the research layout styles an image paragraph followed by an italic paragraph as a bordered, captioned figure. |
| 2. kramdown attribute list | `![alt](path)`<br>`{: .figure-right}` | Enables float-left/right and width presets (`.half`, `.third`). A good optional add-on to option 1 for side-by-side layouts. |
| 3. Liquid include | `{% include figure.html image="…" caption="…" position="right" %}` | Already exists (`_includes/figure.html`) with Alembic styles. Most flexible, but it's template syntax rather than Markdown and doesn't preview on GitHub. |

My recommendation is option 1 as the default, with option 2's classes documented for people who want a floated or smaller image. Every image would be responsive (`max-width: 100%`), which fixes the mobile overflow in §4.

**Side-by-side text and image.** Of all the current layouts, only the two-column "image left / text right" row can't be expressed in Markdown. A floated figure (option 2) covers most cases and collapses correctly on mobile. For a true two-column layout, I'd recommend dropping it rather than keeping HTML in the template.

**D. The template itself.**

- Move the template out of the live site. `research/project-example-1.md` is currently published at `/research/project-example-1/` and listed in `sitemap.xml`. Options: a `_research/_template.md` excluded from the build, or `published: false` in its front matter.
- Write the template as its own documentation: every front-matter field gets a one-line comment, and the body shows each supported element (heading, paragraph, list, link, figure, floated figure) once, with short explanatory text instead of lorem ipsum.

**E. Migration.** Convert the four existing project pages to the new format and confirm that each renders equivalently (URLs unchanged). This is mechanical, but it needs a visual check page by page.

### 1.3 Decisions needed

1. **Collection vs. keeping `_data/research.yml`.** A collection is simpler for students (one file per project), but it changes the workflow Frances is used to. The alternative is to keep the YAML file and only convert the page bodies to Markdown.
2. **Figure syntax.** Option 1 only, or 1 + 2 (§1.2 C)?
3. **Two-column layouts.** Can they be replaced by floated figures?
4. **Related publications.** Free-text list in front matter, or references to entries in `_data/publications.yml` (e.g., by DOI) so citations are formatted consistently and not duplicated? The second option is nicer but adds some complexity.

---

## 2. Bugs

### 2.1 Site logo depends on a dead CDN path (Medium) — fixed
`_config.yml:39` pointed the logo at `https://cdn.jsdelivr.net/gh/realmiketalbot/fdavenport.github.io/assets/cloud-computing-svgrepo-com.svg`. That URL returns HTTP **404**. The repo was renamed and the file moved, and the file lives at `assets/images/logo/cloud-computing-svgrepo-com.svg` in this repo. _Correction:_ browsers still display the image, because the 404 response happens to contain a valid image. So the logo isn't visibly broken today, but it could disappear at any time. It should be a local path (`/assets/images/logo/cloud-computing-svgrepo-com.svg`) rather than a CDN link to a personal fork.

### 2.2 Leftover jQuery script that would rewrite every link (High, currently dormant)
`_layouts/page.html:122-137` contains a pasted snippet. On hover it sets every `<a>`'s `href` to `https://www.google.com`, then to `#` on mouse-out. It is dormant today only because jQuery isn't loaded, so it throws `ReferenceError: $ is not defined` on every page instead. If anyone adds jQuery later (it's a common addition), every link on the site breaks. It should be deleted.

### 2.3 `CNAME` belongs to the theme author (Medium)
`CNAME` contains `alembic.darn.es`, the Alembic theme's demo domain. The live site currently serves from `fdavenport.github.io` without redirecting, so it doesn't seem to be in effect. I'm not certain of the Pages configuration, though, and it is a risk if Pages settings are ever touched. It should be removed.

### 2.4 Empty `url` breaks SEO and sitemap output (Medium)
`_config.yml:40-41` leave `description` and `url` empty. As a result, the rendered `<link rel="canonical">` and `og:url` are just `/`, and every `<loc>` in `sitemap.xml` is a relative path, which is invalid for sitemaps. Set `url: "https://fdavenport.github.io"` and a one-line `description`.

### 2.5 Missing card description on the Research page (Low)
`_data/research.yml:20`: the water-supply project has `short-desc: ""`, so its card on `/research/` shows an empty text block.

### 2.6 Bootstrap JS placed outside `<body>` (Low)
`_layouts/default.html:69-73` puts the Bootstrap `<script>` after `</body>`. Browsers tolerate this, but it is invalid HTML. The site also doesn't appear to use any Bootstrap JavaScript components, so it may be removable.

---

## 3. Maintainability and cleanup

**Stray files committed to git.** These can be deleted (and `.gitignore` already lists `.DS_Store`, so those were committed before the ignore rule):
- Editor backups: `code.md~`, `group.md~`, `research.md~`, `_data/press_*.yml~` (5), `_pubs/press_*.yml~` (5)
- `_data/research.yml.old`, `assets/scripts/.Rhistory`, and 6 × `.DS_Store`
- The whole `_pubs/` directory. It is an older, unreferenced copy of `_data/` (no template reads it; Jekyll ignores it).

**Unused theme scaffolding.** These are features of the Alembic theme that this site doesn't use. Removing them makes the repo much less intimidating to a newcomer:
- `elements.md`: the theme demo page, published at `/elements/` with links to the theme author's site and Twitter.
- `blog/index.html` plus `jekyll-feed`, `jekyll-paginate`, `sharing_links`, and `post-*.html` includes: a blog with no posts.
- `site-search.html`, `assets/search.json`, `assets/scripts/fetch.js`, `site-form.html`, `map.html`, `video.html`: not included anywhere.
- The service worker (`assets/scripts/sw.js`, `site-sw.html`). It caches every page for offline use, falls back to an `/offline/` page that doesn't exist, and adds a way for returning visitors to see stale content. I'd recommend removing it. _(Done: `sw.js` is now a self-removing script, so browsers that installed the old worker clean up automatically.)_
- `README.md` is being published to the site as `/README.md`; add it to `exclude:`.

**Two CSS frameworks.** Alembic's Sass (`_sass/`) and Bootstrap 5 (CDN) are both loaded and both define `.container`, `.button`, and base typography. The research redesign is a good moment to decide which one owns layout. Bootstrap's grid and cards are what the People and Research index pages use, so keeping Bootstrap for those and trimming Alembic may be the smaller change. This needs a closer look before committing to it.

**Styles in the wrong place.** About 100 lines of CSS are written inline in `_layouts/page.html:7-104`, plus `style="..."` attributes throughout pages and `research.md`. These should move into `_sass/` (e.g., `_custom.scss`). The `h1 { margin: -24px … }` rule is a hack to offset Alembic's article padding, and it should go when the framework question is settled.

**`jekyll-mentions` rewrites pages containing `@`.** The plugin runs a page's body through an HTML parser whenever it contains an `@`. The `@media` rule in `page.html`'s inline `<style>` meant every page was re-serialized. Moving that CSS into Sass stopped this, which is why tags like `<br>` now come out as `<br />`; the two are equivalent. Keep it in mind if output ever changes unexpectedly after someone types an `@` in page content.

**Gemfile.** It lists both `github-pages` and `jekyll` (the former pins the latter, so the extra entry is redundant). It includes `jekyll-email-protect` and `jekyll-twitter-plugin`, which aren't enabled in `_config.yml`. `_config.yml:9` enables `jekyll-commonmark`, which has no effect here because the `github-pages` Markdown engine is kramdown. None of this breaks the build, but it misleads anyone trying to understand the setup.

---

## 4. Content and accessibility

**Images without alt text.** None of the `<img>` tags in `research/*.md` have `alt` attributes. People photos render with `alt=""` (`people.md:39`), and the extreme-precip card has `alt-text: ""`. The Markdown `![alt](path)` syntax in the new template makes alt text the natural first thing to write.

**Mobile layout (unverified).** In headless-Chrome screenshots at 390px, Research cards look clipped and the menu button isn't visible. This is the same before and after the cleanup. Headless Chrome on macOS enforces a minimum window width, so this may be an artifact; check it in a real phone or DevTools device mode.

**Fixed pixel widths.** `research/nkeeney-ml-extreme-precip.md:34, 51, 77` set `width="420px"`/`"500px"`/`"900px"` (and `px` isn't valid in the `width` attribute). The 900px image will overflow on phones.

**Typos worth fixing** (content owners should confirm):
- `index.md:8`: "research to quantifying"
- `opportunities.md:10`: "I do not have currently have"
- `research/nkeeney-ml-extreme-precip.md:25`: "decades.How" (missing space)
- `research/nkeeney-ml-extreme-precip.md:78`: "Prelinary"
- `_data/people.yml`: "abraod" (Doan), "to her pursue" (Rodgers), "undergradate" (Iliff)
- `research/flood-damages.md`, `research/rain-snow-flooding.md`: "(2021) ." / "(2020) ." (stray space before the period)

**Possible content error, flagged for the author.** `research/nkeeney-ml-extreme-precip.md:44` defines an extreme precipitation day as one where precipitation is "95% higher than the mean". That doesn't match the 95th-percentile definition given in the same sentence.

**Inconsistent dates.** `last-updated` values are free text ("May 13th, 2025" vs. "June 28, 2024"). ISO dates in front matter, formatted by the template, would fix this and allow sorting.

**Paper PDFs.** `assets/paper_pdfs/` hosts 12 publisher PDFs publicly (they're also in the sitemap). This is common practice, but I haven't checked each journal's self-archiving policy; Frances should confirm.

---

## 5. Contributor documentation (`README.md`)

The README is the entry point for future students and is missing steps:
- There is no `bundle install` step. `bundle exec jekyll serve` will fail on a fresh clone without it. It also doesn't say which Ruby version works; this environment builds with Ruby 3.1.3.
- `bundle exec jekyll build` followed by `serve` is redundant; `serve` builds.
- It tells contributors to use `project-example-1.md` as the template and match a `url` in YAML by hand. This will change with §1.
- It says nothing about where images go, image size guidance, or how to preview a page before opening a PR.

I'd suggest rewriting it (or adding `CONTRIBUTING.md`) as a short, task-oriented guide: "Add yourself to People", "Add a research project", "Add a publication", "Add a news item". Each would name exactly which file to edit, with a copy-paste snippet.

---

## 6. Suggested order of work

1. **Quick fixes** (one small PR): logo path, delete jQuery snippet, remove `CNAME`, set `url`/`description`, delete stray/backup files and `_pubs/`.
2. **Research template redesign** (§1): new layout and styles, collection or data decision, template file, migration of the four existing pages, updated `research.md`.
3. **Contributor docs** (§5), written against the new template.
4. **Optional cleanup**: remove unused theme features, consolidate CSS into `_sass/`, content and typo fixes, alt text.
