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

**To add your profile information:**
* Add your information to _data/people.yml following the same format as existing group members.
* Add your profile picture to assets/images/profile using the naming convention [Lastname].jpg. 

**To contribute a research page:**
* Add your research page information to _data/research.yml. This will create a new "card" on the main research page
* Create a new markdown file in research/ with your project information. You can use project-example-1.md as a template. The name of this file should match whatever url you chose for your project in the previous step

