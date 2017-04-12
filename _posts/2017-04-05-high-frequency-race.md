---
layout: post
title: "High Frequency Trading"
date: 2017-04-05
author: a.arikan
description: 
categories: high frequency, hardware performance, Laplace demon, stream data mining, machine learning, AI, moa, apache samoa
---

I hope this will be my last post about QCon London 2017 (although there are still lots of interesting stuff to talk about). In this post I would like to talk about two very interesting talks at the conference showing two very different approaches to trading. One of them demonstrated the current state of high frequency trading. The other one was suggesting a new solution to the trading problem similar problem HFT tries to solve. First talk was by Richard Croucher, [Coding for High Frequency Trading and other Financial Services applications](https://qconlondon.com/london-2017/presentation/coding-for-high-frequency-trading) and the second one was by Albert Bifet and Eric Horesnyi, [From HFT to Laplace Demon](https://qconlondon.com/london-2017/presentation/hft-laplace-demon). 

Current state of HFT is a technology race where most of the time physical limitations are hit and replaced by new ones. Generally the task is to benefit from arbitrage opportunities between markets. From hardware to software, every component is customised or purpose built for this race. Different rules and techniques apply when you are in the HFT race. Some of the techniques mentioned cover both software and hardware as well as infrastructure. 

Some of the techniques used
* Avoiding kernel libraries and staying in the user space. 
* Instead of TCP/IP using remote direct memory access RDMA. 
* For intra process communication using Berkley Sockets, and for fast IO using memory mapped files. 
* Use of FPGA's instead of CPU. 
* Getting closer to the exchange you are trading in, to gain few more nanoseconds.

[Straight fibre between New York and Chicago](http://www.zerohedge.com/news/chicago-new-york-and-back-85-milliseconds) to gain few milliseconds. Then from there you go to `Speed of light in fibre of air?` [Fiber cables made of air...](https://arstechnica.com/information-technology/2013/03/fiber-cables-made-of-air-move-data-at-99-7-percent-the-speed-of-light/).

Latency = Propagation + Serialization + Processing

Albert Bifet and Eric Horesnyi has a different approach to the problem. Rather than being faster than everyone else in the market, they suggest being `smarter` than everyone. Their approach is similar to the example they use
[Counting Large Numbers in Small Registers](2017-03-10-counting-large-numbers.md). Processing as much of data as you can to continuously train your AI gives an edge. Market events are defined as a function of [ct,x,y,z] where ct is time, and others represent the coordinates. HFT traders try to play with time and aim to be there before everyone else. Albert Bifet and Eric Horesnyi try to play with the coordinates. Rather than trying to be faster the goal is to process more data than anyone else. This way markets will be curved by gravity rather than the speed. 

Gradient descent can be done in 100 million dimensions. Using back propagation to improve the model. Stream data mining rather than batch processing static data sets helps keeping a responsive model. Rather than having one big model, the task is to continuously updating the model with streaming data. With a small amount of error but high probability good results could be achieved. MOA/SAMOA is used to process the data. The generated model can be enriched by any type of unrelated looking data. Processing the stram one by one (storm, apex) rather than in batches (Spark stream) gives better performance.


<!--
Instead of trying get in front of everyone else in the muscle race 
Albert Bifet and Eric Horesnyi suggest a different approach by using kind of approximations and rather than trying to process whole stream of data. 
They define market events as a function of [ct,x,y,z] in a three dimensional space. 

Rather than trying to be faster you can try to go infront of the race by playing with other parameters of the function. Get more data than anybody else. 

--spark streaming processes batches 1s latency
--other one processes one by one, latency is around milliseconds

FPGA's, RDMA instead of 

Straight fiber between NY and Chicago to cut few milliseconds
Then you go to speed of light in fiber or speed of light in air?
10y ago, like formula, exclusive Race

Latency = Propagation + Serialization + Processing

Big data stream processing using AI/machine learning. This can be done really in a very large scale moa/samoa can be used. The data can also be enriched with unrelated looking but important data. 

Gradient descent: can be done in 100 million features
Back propagation: Get the prediction from the NN and back propagate the error to neural network to improve the weights and predictions.

Overfitting? How do you switch from bullish to bearish market?

Batch setting: standard approach where data is static

Train the model continuously update the model as the data arrives. The model should be super fast rather than being very precise (see Counting large numbers). 

Customize everything to death. Prevent kernel libraries, stay in user space. TCP/IP is not fast enough use Remote Direct Memory Access, Berkley Sockets and Memory Mapped Files
Custom fibre, even micro waves are considered for super-fast transfer rates
Getting closer to the exchanges to gain few nano seconds
Hardware limitations use FPGA's -->