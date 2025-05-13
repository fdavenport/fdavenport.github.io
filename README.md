## instructions for group members to contribute to the site:

First, you will need to install jekyll: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

Next, clone the site locally so that you can preview and test your changes. Navigate to a directory on your computer where you want to site to be located. Clone the site with the following command:  
```bash
git clone https://github.com/fdavenport/fdavenport.github.io
```
You can use the dev branch or create a new branch to make your changes. Once you are satisfied with your changes, you can create a pull request to merge your new changes into the master branch, which will make them live on the website. 

Within the site directory, use the following terminal commands to run the site locally. You will likely need to copy the server address into your browser to view the site. By default, the address is usually http://127.0.0.1:4000/. 
```bash
bundle exec jekyll build

bundle exec jekyll serve
```

**To add your profile information:**
* Add your information to _data/people.yml following the same format as existing group members.
* Add your profile picture to assets/images/profile using the naming convention [Lastname].jpg. 

**To contribute a research page:**
* Add your research page information to _data/research.yml. This will create a new "card" on the main research page
* Create a new markdown file in research/ with your project information. You can use project-example-1.md as a template. The name of this file should match whatever url you chose for your project in the previous step

