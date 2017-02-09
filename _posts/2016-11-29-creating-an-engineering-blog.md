---
layout: post
title: Creating an Engineering Blog with GitHub Pages
date: 2016-11-29
author: a.johnston
categories: update cardano github-pages Jekyll
description: How to create a free blog site using GitHub pages which has built in markdown support from Jekyll.  Includes setting up local environment for OSX or Windows.
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
As I said above you can do this without installing or running locally just by committing to GitHub.  However if you want to do some customisation and see how it looks before pushing then you need to install Jekyll.  We run it with the watch option so any changes will be built automatically then you just have to refresh the browser to see them.  This means you can live preview your blogs.

## Docker
**UPDATE FEB 2017** <br/>
This can be even easier by [installing Docker](https://docs.docker.com/engine/installation/), no need to install anything else.  In the root of your project create a docker-compose file as below then in a terminal from teh project root run the command `docker-compose up` and jekyll will run connected live to your code.  Any changes will be automatically detected and redeployed as above. 

{% highlight yml linenos %}
version: '2'
services:

  api:
    image: jekyll/jekyll
    container_name: github-blog-local
    volumes:
      - ./:/usr/src/app
    working_dir: /usr/src/app
    command: sh -c 'jekyll serve -s /usr/src/app --watch'
    ports:
      - "4000:4000"
{% endhighlight %}
Explaination:
* We are using the official Jekyll docker image which has Jekyl fully installed and ready to run.  When you first run this file it will be downloaded from [docker hub](https://hub.docker.com/r/jekyll/jekyll/).
* We give a name to our running docker image so we can identify it when cleaning up.
* Line 7 we mount our current directory as a volume or drive available within the container.  So Jekyll can see our files.
* Line 10 we run the jekyll command line using the mapped location and watch for files changes.
* Line 11 We make the port specified in our _config file available form outside the docker image.  Left side is port for the outside world, right is the one the app is running on within the image. 

## Windows
  * *It is recomend to use docker as above. This is now just for reference*
  * Windows is not officially supported by the jekyll team but I got it working great thanks to [juthilo](http://jekyll-windows.juthilo.com/1-ruby-and-devkit/).  I had tried [Portable Jekyll](https://github.com/madhur/PortableJekyll/wiki) which sort of worked but did not support scss or themes.

## OSX
  * *It is recomend to use docker as above. This is now just for reference*
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

{% highlight html linenos %}
<head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/main.css"/>
  ...
</head>  
{% endhighlight %}

{% highlight html linenos %}
<body>
  ...
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
{% endhighlight %}

Next is and our logo so inside the assets folder (which is copied to the _site folder) I added an images folder with our favicon and logo then added this in the header.

{% highlight html linenos %}
<link rel='shortcut icon' href='/assets/images/favicon.ico' type='image/x-icon' />
{% endhighlight %}

then the logo svg in the Body

{% highlight html linenos %}
<a href="/" class="navbar-brand">
  <img src='/assets/images/cardano_logo.svg' />
</a>
{% endhighlight %}

## SCSS
You can also use SASS or SCSS files as Jekyll has a built in compiler.  Simply rename the main.css file to main.scss.  That's it.  Jekyll will place a compiled file in _site\assets\css\main.css. 

### Code Highlighting
**UPDATED** Jekyll has [pigments](http://pygments.org/) built in so you can download lots of css files which can change your code styling, such as [demisx.github.io](https://demisx.github.io/jekyll/2014/01/13/improve-code-highlighting-in-jekyll.html).  You also might want to get rid of the borders by adding this to the end of the file.
{% highlight css linenos %}
.highlight pre { border: none }
{% endhighlight %}
