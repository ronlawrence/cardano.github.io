---
layout: post
title: ""
date: 2017-03-10
author: a.arikan
description:  Counting Large Numbers in Small Registers
categories: programming rules requirements
---

This week I attended #QConLondon 2007 and it was really exciting to see lots of practitioners from all over the world sharing their experiences, fails and successes. There were very interesting streams of talks. However, I will focus on such a simple idea that may help us with the way we think about the problems we encounter every day.  The simple idea is not a new one or something that is revolutionary rather it is a different way of thinking about certain problems.

During their talk Eric Horesnyi (@erichoresnyi) asked the simple question of "How many items can you count using an 8 bit register?". In the past having programmed various microprocessors and being dealt with micro optimisations in pursuit of getting the right code for the right clock cycle, I could relate to the problem. 

The question reminded me those days where you need to read your processor blueprint before you can program it. You need to know if you can use interrupts, which registers need to be used for certain tasks, supported clock speed and some others. The processor specifications strictly defines the environment you need to operate. In the well-defined world of squares the question was easy to answer for the binary minded people like many of us. If you start from 0 you can count 256 items (2^8). However before answering the question there is another question to ask. How precise would you like to be? 

Eric Horesnyi pointed to the paper "Counting Large Numbers of Events in Small Registers" (Morris 1978) which proposes a solution to the question. The simple idea is to rather than exactly counting the occurrences of events, one can count much larger numbers by accepting a small error rate. This is the similar sort of problem when picking between doubles or decimals. It all boils down to desired precision. Maybe the idea behind this is not really new or ground breaking. What intrigued me was that the ability to approach a problem by not strictly following the blueprints/rules but by looking at the requirements.

Now let's begin the fun part if we try to answer the question using the methodology described in Morris 1978 paper it turns out the number of items you can count using an 8 bit register is around 130.000 items with a small amount of error. 

The calculations are easy to replicate using

<!--Insert Equation, -->

where a controls the precision and maximum count and v is the maximum number that can be stored. Plugging a=30 and 
v=255 gives 128331 as the maximum number items that can be counted. To give some idea how the algorithm works I created below chart to demonstrate the difference between the stored, retrieved numbers and the error amount. X-axis shows the counter, Y-axis shows the stored number and the columns represent the actual count, retrieved number and the error between the two.

<!--Insert Chart-->

