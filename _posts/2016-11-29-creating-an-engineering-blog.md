---
layout: post
title: "Creating an Engineering Blog with Github Pages"
date: 2016-11-29
author: alison_johnston
categories: update cardano github-pages jekyll
---

So You Want to Setup A Blog
---
As part of our platform uplift we wanted to start giving back to the community and sharing our experiences, which means we need a blog.  Github pages is a great way to setup a free static website and it includes Jekyll which provides a great way to setup a blog.  Your content is just static markdown pages which you commit to github, just like code.  We could have gone with something more elborate like wordpress or drupal with a database behind it and the related complications but this seems a natural and great starting point for a web development team.  The team starts using github and the github flow branching strategy just as they will be doing with code.  

Creating a Site
---
You can create a site with no local development by creating and editing the site directly on github.  Github runs Jekyll when you commit then it deploys your site.

Personally I created the site initially following the excellent guide by [Jonathon Mcglone](http://jmcglone.com/guides/github-pages).  Then to customise, add Bootstrap etc I pulled down the project locally, installed Jekly and used Visual Studio Code, on my Mac at home and Windows at work.

I am not going to add a full tutorial when there is a great one already from [Jonathon Mcglone](http://jmcglone.com/guides/github-pages) or [Barry Clark](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/).

For the markdown syntax see [basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax).

Running Jekyll Locally
---
Install Jekyll

  Windows

  * Download [Portable Jekyll](https://github.com/madhur/PortableJekyll/wiki).  Jekyll is a ruby package which is a difficult windows install.  Portable Jekyll makes the install simple.

    ```
    C:
    cd /
    git clone https://github.com/madhur/PortableJekyll.git
    cd PortableJekyll
    setpath
    ```

  OSX

  * Follow the [Jekyll instuctions](https://jekyllrb.com/docs/installation/) to install as a Ruby Gem.

To run the site goto to site root folder and run `jekyll serve --watch`  

Install gihub pages gems `gem install github-pages`.

If you get an error here like 

```shell
Unable to resolve dependencies: github-pages-health-check requires public_suffix (~> 1.4)
```

then run `gem install public_suffix -v 1.5.3`