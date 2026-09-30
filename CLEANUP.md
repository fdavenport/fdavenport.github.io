# Site cleanup (2026)

A summary of the restructuring on the `site-cleanup` branch. See the README for how to add content.

## Content is now Markdown-first
- **Research projects:** one Markdown file per project in `_research/`, rendered by `_layouts/research.html`. Start from `templates/research-project.md`. Related publications are listed by DOI and pulled from `_data/publications.yml`.
- **People:** one Markdown file per person in `_people/`. Start from `templates/person.md`. Setting `status: alumni` moves someone to a compact Alumni section (photo, name, position, years).
- **News:** items live in `_data/news.yml`. The home page shows the 5 newest; `/news/` keeps the full history.
- **Publications:** author names are bolded with Markdown (`**...**`) instead of HTML, and citations share one format (`_includes/citation.html`).

## Styling
- Removed Bootstrap. The site uses the Alembic theme (`_sass/`) plus site-specific styles in `_sass/_custom.scss`.
- Fixed a layout bug that made every page scroll sideways on phones.

## Fixes and removals
- Fixed the logo path, set the site `url` and `description`, and removed the theme author's `CNAME`.
- Removed a stray script that would have rewritten every link on hover.
- Replaced the service worker with one that uninstalls itself.
- Removed unused theme features (blog, search, forms, demo page), unused plugins, `_pubs/`, and editor backup files.
