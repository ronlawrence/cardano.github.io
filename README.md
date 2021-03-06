![Cardano](https://cardano.github.io/assets/images/cardano-logo.svg)

# Cardano Engineering
Source for the home of Cardano Engineering [cardano.github.io](https://cardano.github.io).  This site uses the Jekyll blog library and is published using github.io.

## Visitors
Please go to our site are [cardano.github.io](https://cardano.github.io) for information about Cardano and our engineering team.

## Contributors
Add Your Avatar
* Use something like [My Blue Robot](https://mybluerobot.com/create-your-own-avatar/) to create an avatar or yourself.
* Save it locally.
* Add it to the project at /assets/images/avatars.
* Create a reference to yourself in /_data/authors.xml.  Add this in alphabetical order by your first name.

## Editing
You can edit directly using [Github Markdown](https://help.github.com/categories/writing-on-github/) in Github or download the project and edit it, optionally run it locally as below but you don't have to.  Always work on a branch, not master.  Submit a pull request for approval then notify the Slack channel.  Your changes are deployed as soon as the pull request is merged.

### Code Syntax
See other posts for the syntax used.

### Pictures
Add them to /assets/images/post-images/ then reference.  See other posts for examples. 
* _Make sure you set the background of the image to transparent_

### Using GitHub
* Create a new file in the GitHub UI.
* Edit it using [Github Markdown](https://help.github.com/categories/writing-on-github/).
* Submit a pull request.

### Local Editing
You can clone locally then edit and optoinally run the site locally.

#### Initial Contribution
The first time you contribute you will need to get a copy of the code.  For subsequent changes you can skip to the Subsequent Contributions section.
* Open a terminal.  For windows you will need a [Git Bash terminal](https://git-scm.com/).
* Change to the parent directory in which you want to place the project.
* Download the project to your machine:
```shell
git clone https://github.com/cardano/cardano.github.io.git
```
#### Initial and Subsequent Commits
* Create a branch and switch to that branch.   
* For the **branch-name** replace this with the title of the blog.  Uses dashes not underscores.
```shell
git checkout -b branch-name
```
* Create a copy of an existing blog in the \_posts directory and rename the file with the date and subject.
* Write your blog post. 
* If you want to save your file temporarily then commit and push to the branch as below but do not create a merge request intil the blog is complete.  Pushing makses sure you don't loose your change on your local machine.
* Add the file to git.  If you have an editor with git integration just use that, else use the terminal command which add all files and removes deleted:
```shell
git add --all
```
* Commit the change.
```shell
git commit -m "add a message about the blog"
```
* Push the change to GitHub (replace **branch-name** with your branch name from above)
```shell
git push -u origin branch-name
```
* Create a pull request.
  * Go to [Cardano github](https://github.com/cardano/cardano.github.io).
  * Click "New Pull Request".
  * Choose your new branch in the "compare" dropdown.
  * Enter requested details.
* Add the CTO and ask him to take a look.
* Look for comments and make any changes.
* Once approved your changes will be merged and released then the branch deleted.

#### Running Locally
Because we are use file watching, changes are added live so just save your change then refresh the browser to see changes.  Makes it easy to see your edits as they will look in the site.
* [Install Docker](https://docs.docker.com/engine/installation/). 
* Install docker-compose (for linux: sudo apt install docker-compose)
* Open a terminal at the root of the project.
* Run `docker-compose up`
* Open your browser at [http://0.0.0.0:8080](http://0.0.0.0:8080).
* Make changes, save, refresh browser to see them.
When you are finished in the terminal press CTRL-C to stop the server.

## Helpful Links
[Github Markdown](https://help.github.com/categories/writing-on-github/)

[Markdown editing with Visual Studio Code](https://code.visualstudio.com/Docs/languages/markdown)
