---
layout: post
title: Web Stack Bootcamp Training 
date: 2017-02-24
author: Jason Lee
categories: cardano javascript training 
description: Up-skilling the team in web technologies
---


# 5 days of concentrated brain juice
As you may have gathered from previous posts, Cardano Engineering's technical stack is moving to the JavaScript world.  We decided to up-skill the whole team and on top of the 10% time, we needed a boost in the form of old fashioned classroom training away from the daily demands of the office.  I think I speak for the team when I say that we all appreciate the opportunity to add modern coding skills to our software engineering arsenal and to apply them in upcoming projects.

We were really fortunate to have [Maurice](https://twitter.com/MauriceDB) as a trainer- he is experienced as a web consultant, trainer with an appreciation for our .Net background and a great guy to boot.  The content was customised for our needs, delivered in an engaging manner with up-to-the-minute tidbits to keep us informed on the latest trends in the JavaScript world.  Each topic had accompanying labs with Maurice on hand when we tripped or got lost.  We covered a lot of ground (4 labs per day), and I even dreamt in JavaScript for a few nights afterwards!

# Gotchas/minute
Diving in at the deep end with JavaScript libraries really hits the peak of Gotchas per minute.  Maybe some of these will resonate with the JavaScript newbies out there:
* NPM: Running CLI eslint through NPM requires a double set of '--', i.e.
```javascript
npm run eslint -- --fix 
```
* [React](https://facebook.github.io/react/docs/handling-events.html): remember to use Bind this (in the class constructor) to link the callback from HTML component to the library, e.g.
```javascript
this.handleClick = this.handleClick.bind(this);
```

# Putting it all together
The challenge when covering so much ground in so little time, is that memory leaks eventually leave you with a patchy imprint of the learning.  As an *aide-memoire* I created a visual splash of all the libraries/frameworks that we covered:

<img src="/assets/images/post-images/javascript-training-summary.png" alt="javascript-summary" style="width: 60%; max-width: 350px;
    display: block;
    margin: 0 auto" />

# Summarising
We all had a fantastic week of learning.  The proof in the pudding is how we use our new-found skills in the office (and beyond).  More on that later...
