![Cardano](http://cardano.github.io/cardano.github.io/assets/images/cardano_logo.svg)

# Cardano Engineering
Source for the home of Cardano Engineering [cardano.github.io](cardano.github.io)

## Visitors
Please go to our site are [cardano.github.io](cardano.github.io) for information about Cardano and our engineering team.

## Contributors
Please follow the [github flow](https://guides.github.com/introduction/flow/) to make changes.
### Initial Contribution
The first time you contribute you will need to get a copy of the code.  For subsequent changes you can skip to the Subsequent Contributions section.
* Open a terminal.  For windows you will need a [Git Bash terminal](https://git-scm.com/).
* Change to the parent directory in which you want to place the project.
* Download the project to your machine:
```shell
git checkout https://github.com/cardano/cardano.github.io.git
```
* Create a branch and switch to that branch.   For the {branch-name} replace this with the title of the blog.  Uses dashes not underscores.
```shell
git checkout -b {branch-name}
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
* Push the change to GitHub (replace {branch-name} with your branch name from above)
```shell
git push -u origin {branch-name}
```
* Create a pull request.
  * Go to [Cardano github](https://github.com/cardano/cardano.github.io).
  * Click "New Pull Request".
  * Choose your new branch in the "compare" dropdown.
  * Enter requested details.
* Look for comments and make any changes.
* Once approved your changes will be merged and released then the branch deleted.