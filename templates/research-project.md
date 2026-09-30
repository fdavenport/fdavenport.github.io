---
# ------------------------------------------------------------------------------
# RESEARCH PROJECT TEMPLATE
#
# 1. Copy this file into the _research/ folder.
# 2. Rename it to a short, lowercase, hyphenated name, e.g. snow-drought.md.
#    The file name becomes the page address: /research/snow-drought/
# 3. Fill in the fields below, then replace the example text under the second
#    "---" line with your own. Lines starting with # are notes and are ignored.
#
# Tip: if a value contains a colon followed by a space (": "), wrap the whole
# value in double quotes, e.g.  thumbnail_alt: "Photo credit: Jane Doe"
# ------------------------------------------------------------------------------

title: A short, descriptive title for your project

# "ongoing" puts the project in the top section of the Research page;
# "previous" moves it to the Previous Research grid.
status: ongoing

# Date of your latest update to this page, as YYYY-MM-DD.
last_updated: 2026-01-31

# --- Card on the Research page -------------------------------------------------
# Put your images in their own folder: assets/images/research/<your-file-name>/
thumbnail: /assets/images/example/pexels-frank-cone-2226190.jpg
thumbnail_alt: Lightning striking hills under a stormy sky   # describe the image for screen readers
thumbnail_caption: A thunderstorm somewhere in the world.     # optional; shown under ongoing cards
summary: One or two sentences describing the project. This appears on the Research page card.

# --- Banner image at the top of this page (optional) ---------------------------
# Leave this out to use the default Earth banner.
# feature_image: /assets/images/feature/mountains.jpg

# --- Project details (all optional; delete any you don't need) -----------------
members: [Your Name, Frances Davenport]
study_areas: [Colorado, Western U.S.]
funding:
  - name: Name of the funding source
    url: https://example.org/          # optional; leave out for plain text

# --- Related publications (optional) -------------------------------------------
# List DOIs. Papers in _data/publications.yml are formatted automatically;
# anything else is shown exactly as you write it.
publications:
  - 10.1029/2021GL093787
  - "Doe, J. (2025). A paper that isn't on the group publication list. *Journal Name*."
---

Start with a paragraph or two introducing the project. Plain text is fine: write the way you would in an email. Leave a blank line between paragraphs.

You can use **bold**, *italics*, and [links](https://www.colostate.edu/). The project details, related publications, and the "Back to Research Projects" link are added automatically from the settings above, so you don't need to write them here.

## Use "##" to start a new section

Section headings are lines that start with `## `. Use `### ` for a smaller subheading.

Lists work the way you'd expect:

- A bulleted item
- Another bulleted item

1. A numbered item
2. Another numbered item

## Figures

To add a figure, put the image on one line and its caption, in *italics*, on the very next line (no blank line between them). The text in square brackets describes the image for people who can't see it.

![A thunderstorm over rolling hills](/assets/images/example/pexels-frank-cone-2226190.jpg)
*A full-width figure. The caption goes on the line right after the image.*

To place a figure beside the text instead, add `{: .right}` or `{: .left}` on the line after the caption. Put the figure **above** the paragraphs it should sit beside. On phones, figures always stack full width.

![Solar panels and a wind turbine in the snow](/assets/images/example/pexels-pixabay-433308.jpg)
*A figure floated to the right.*
{: .right}

This paragraph wraps around the figure on the right. Floated figures are a good fit for smaller images like maps, schematics, or photos that don't need the full page width. Add enough text after a floated figure to fill the space beside it; the next heading always starts below the figure.

## Next steps

Delete this example text, save the file, and preview the site locally with `bundle exec jekyll serve` (see the README). Your project appears on the Research page automatically.
