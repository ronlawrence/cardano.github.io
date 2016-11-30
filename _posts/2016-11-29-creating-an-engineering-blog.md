---
layout: post
title: "Creating an Engineering Blog with GitHub Pages"
date: 2016-11-29
author: alison_johnston
categories: update cardano github-pages Jekyll
---

# So You Want to Setup A Blog
As part of our platform uplift we wanted to start giving back to the community and sharing our experiences, which means we need a blog.  GitHub pages is a great way to setup a free static website and it includes Jekyll which provides a great way to setup a blog.  Your content is just static markdown pages which you commit to github, just like code.  

We could have gone with something more elaborate like WordPress or Drupal with a database behind it and the related complications but this seems a natural and great starting point for a web development team.  The team starts using github and the github flow branching strategy just as they will be doing with code.  

# Creating a Site
You can create a site with no local development by creating and editing the site directly on github.  GitHub runs Jekyll when you commit then it deploys your site.

Personally I created the site initially following the excellent guide by [Jonathon Mcglone](http://jmcglone.com/guides/github-pages).  Then to customise, add Bootstrap etc I pulled down the project locally, installed Jekyll and used Visual Studio Code, on my Mac at home and Windows at work.

I am not going to add a full tutorial when there is a great one already from [Jonathon Mcglone](http://jmcglone.com/guides/github-pages) or [Barry Clark](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/).

For the markdown syntax see [basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax).

# Running Jekyll Locally
As I said above you can do this without installing or running locally just by committing to GitHub.  However if you want to do some customisation and see how it looks before pushing then you need to install Jekyll.

## Windows

  * Windows is not officially supported by the jekyll team but I got it working great thanks to [juthilo](http://jekyll-windows.juthilo.com/1-ruby-and-devkit/).  I had tried [Portable Jekyll](https://github.com/madhur/PortableJekyll/wiki) which sort of worked but did not support scss or themes.

## OSX

  * Follow the [Jekyll instructions](https://jekyllrb.com/docs/installation/) to install as a Ruby Gem.

To run the site goto to site root folder and run `jekyll serve --watch`  

Install GitHub Pages gem `gem install github-pages`.

If you get an error here like 

```shell
Unable to resolve dependencies: github-pages-health-check requires public_suffix (~> 1.4)
```

then run `gem install public_suffix -v 1.5.3`


# Styling
We wanted to add bootstrap styling and our own stylesheet.  You can take a look at our code.

## Bootstrap

[_layouts/default.html](https://github.com/cardano/cardano.github.io/blob/master/_layouts/default.html)

```js
<head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/main.css"/>
  ...
</head>  
```

```js
<body>
  ...
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
```

Next is and our logo so inside the assets folder (which is copied to the _site folder) I added an images folder with our favicon and logo then added this in the header.

```js
<link rel='shortcut icon' href='/assets/images/favicon.ico' type='image/x-icon' />
```

then the logo svg in the Body

```js
<a href="/" class="navbar-brand">
  <img src='/assets/images/cardano_logo.svg' />
</a>
```

## SCSS
You can also use SASS or SCSS files as Jekyll has a built in compiler.  Simply rename the main.css file to main.scss.  That's it.  Jekyll will place a compiled file in _site\assets\css\main.css. 
