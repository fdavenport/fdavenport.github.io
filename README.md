## instructions for group members to contribute to the site:

**One-time setup**

1. Install Ruby (3.1 is known to work) and Jekyll by following [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/).
2. Clone the site to your computer. Navigate to the directory where you want the site to live and run:
   ```bash
   git clone https://github.com/fdavenport/fdavenport.github.io
   cd fdavenport.github.io
   ```
3. Install the site's dependencies (only needed once, or after the `Gemfile` changes):
   ```bash
   bundle install
   ```

**Previewing your changes**

From the site directory, run:
```bash
bundle exec jekyll serve
```
Then open [http://127.0.0.1:4000/](http://127.0.0.1:4000/) in your browser. The site rebuilds automatically when you save a file; refresh the page to see your changes. Press `Ctrl+C` in the terminal to stop the server.

**Publishing your changes**

Make your changes on the `dev` branch or a new branch. When you are happy with them, open a pull request to merge them into `master`, which makes them live on the website.

**To add yourself to the People page:**
* Copy `templates/person.md` into the `_people/` folder and rename it to your last name in lowercase (e.g. `talbot.md`).
* Add your photo to `assets/images/profile/` using the naming convention `[Lastname].jpg`.
* Fill in your name, pronouns, and photo at the top of the file, and write your bio below it in plain Markdown. The `order` setting controls where you appear on the page.
* When someone leaves the group, change `status: current` to `status: alumni` in their file and add the years they were in the group (e.g. `years: "2023–2025"`). They move to the Alumni section, which shows only their photo, name, position, and years.

**To add a news item:**
* Add a bullet to the "Recent News" list in `index.md`, newest first. To include a photo, put it on the line right after the bullet's text, indented two spaces:
  ```markdown
  * The group presented at the AGU fall meeting.
    ![Group members in front of their poster](/assets/images/news/agu2024.jpg)
  ```

**To add a research project:**
* Copy `templates/research-project.md` into the `_research/` folder and rename it to a short, lowercase, hyphenated name (e.g. `snow-drought.md`). The file name becomes the page address (`/research/snow-drought/`).
* Put your images in a new folder, `assets/images/research/<your-file-name>/`.
* Fill in the settings at the top of the file and replace the example text with your own. The template explains each setting and shows how to add headings, lists, and figures. Everything is plain Markdown; no HTML needed.
* Your project's card appears on the Research page automatically. Set `status: previous` when the project wraps up to move it to the Previous Research section.
* To list related papers, add their DOIs under `publications:`. Papers in `_data/publications.yml` are formatted automatically.
