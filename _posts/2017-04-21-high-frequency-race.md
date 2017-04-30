---
layout: post
title: "Trading"
date: 2017-04-21
author: a.arikan
description: 
categories: high frequency, hardware performance, Laplace demon, stream data mining, machine learning, AI, moa, apache samoa
---

I hope this will be my last post about #QConLondon2017 (although there are still lots of interesting stuff to talk about). In this post I would like to mention two very interesting talks from the conference showing two different approaches to trading. One of them demonstrated the current state of high frequency trading. The other one was suggesting an alternative to HFT. First talk was by Richard Croucher, [Coding for High Frequency Trading and other Financial Services applications](https://qconlondon.com/london-2017/presentation/coding-for-high-frequency-trading) and the second one was by Albert Bifet and Eric Horesnyi, [From HFT to Laplace Demon](https://qconlondon.com/london-2017/presentation/hft-laplace-demon). At Cardano we started working on a big project to streamline our portfolio management and trading activities. We certainly operate on a very different model than that are mentioned in this article however it was quite useful to see the latest trends in IT and development and how technology interacts with trading activity.

Latency = Propagation + Serialization + Processing

Current state of HFT is a technology race where most of the time physical limitations are hit and replaced by new ones. Generally the task is to benefit from arbitrage opportunities between markets. The basic idea is to minimise latency and be faster than others. From hardware to software, every component is customised or purpose built for this race. Different rules and techniques apply when you are in the HFT race. Some of the techniques mentioned cover both software and hardware as well as infrastructure. 

Some of the techniques used
* Avoiding kernel libraries and staying in the user space. 
* Instead of TCP/IP using remote direct memory access RDMA. 
* For intra process communication using Berkley Sockets, and for fast IO using memory mapped files. 
* Use of FPGA's instead of CPU's. 
* Getting closer to the exchange you are trading in, will gain few more nanoseconds.

This list is showing just a small sample without going into details but it doesn't end there. People invested in 
[Straight fibre between New York and Chicago](http://www.zerohedge.com/news/chicago-new-york-and-back-85-milliseconds) to gain few milliseconds. Then from there you go to the question of `Speed of light in fibre of air?` [Fiber cables made of air](https://arstechnica.com/information-technology/2013/03/fiber-cables-made-of-air-move-data-at-99-7-percent-the-speed-of-light/). 

Albert Bifet and Eric Horesnyi has a different approach to the problem. Rather than being faster than everyone else in the market, they suggest being `smarter` than everyone. Their approach is similar to the example they use
[Counting Large Numbers in Small Registers](2017-03-10-counting-large-numbers.md). Big data stream processing to continuously train AI/machine learning algorithms is their underlying idea. Market events are defined as a function of [ct,x,y,z] where ct is time, and others represent the coordinates. HFT traders try to play with time and aim to be there before everyone else. Alternatively one can play with the coordinates. Rather than trying to be faster, the goal is to process more data than anyone else. This way, markets will be curved 
by gravity rather than the speed. 

Some highlights
* Gradient descent can be done in 100 million dimensions and back propagation improves the model continuously. 
* Stream data mining rather than batch processing static data sets helps keeping a responsive model. 
* Rather than having one big model, the task is to continuously updating the model with streaming data. 
* With a small amount of error, but high probability, good results could be achieved. 
* MOA/SAMOA is used to process the data. 
* The generated model can be enriched by any type of unrelated looking data. 
* Processing the stream one by one (storm, apex) gives better performance rather than processing in batches (Spark stream).

