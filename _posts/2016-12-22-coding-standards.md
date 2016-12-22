---
layout: post
title: "Coding Standards"
date: 2016-12-22
author: j.asafo
description: Coding standards are often a problem in real production environments, find out how we resolve these problems at Cardano Engineering.
categories: style-guide best-practises lint
---

# Coding Standards
Fans of the hit show Silicon Valley, may remember an episode in season 3, which highlighted the epic battle between tabs and spaces where the situation got a little heated (I love that episode). Let's face it whether you use tabs or spaces the most important thing is that you have a coding style, and in big enterprise projects this particularly true.

We all learn to code in different ways and soon you will find you always define functions or variables in the same way, this is fine when it is just you. The problem the occurs when you start to contribute code to a larger code base and other developers have a different coding styles, then all sorts of chaos breaks loose (cue the Nerf gun fight). Without a coding style guide the maintainability and the readability are both deeply affected.

So how do we fix this? Before we get to the solution a quote from Robert C. Martin aka Uncle Bob, “Every programmer has his own favourite formatting rules, but if he works in a team, then the team rules.”

The problem can be solved in two simple steps; the first step is to create a style guide and place it in an area where all team members can access it, such as a Wiki or on GitHub. Below is an example of how a style guide is laid out normally there is a topic with an example of a way and a bad way to write the code.

![Style Code Example](/assets/images/post-images/code-example.png)

The second step is to install a lint plug-in on your favourite Integrated Development Environment(IDE), once you have incorporated the style guide rules in your lint configuration, you are good to go. You will get instant feedback from your IDE as you write code, warning and error messages will appear if you break any of the style rules.

![Lint Code Example](/assets/images/post-images/lint-example.png)

An extra step, for those who use Git could be to add a git commit hook that checks the code against the lint rules before it allows you to commit.

At Cardano engineering we based our JavaScript coding style on the rules created by Airbnb. We started off by forking the Airbnb guide and overtime we are continually editing and inserting rules to suit our needs.

Where do I sit in this epic battle between spaces and tabs I guess I am somewhere in-between, you probably sighing thinking what a cop-out. Let me explain, I configure my IDE to use to set tab to length to two spaces.  
