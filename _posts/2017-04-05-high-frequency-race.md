---
layout: post
title: "High Frequency Trading"
date: 2017-04-05
author: a.arikan
description: 
categories: high frequency, hardware performance, Laplace demon, data mining, machine learning, AI, moa, samoa
---


I hope this will be my last post about QCon London 2017 (although there are still lots of interesting stuff to talk about). In this post I would like to talk about two very interesting talks at the conference showing two very different approaches about trading. One of them demonstrated the current state of high frequency traders. The other one was suggesting a new solution to the trading problem. First one was by Richard Croucher, "Coding for High Frequency Trading and other Financial Services applications" and the second one was by Albert Bifet and Eric Horesnyi, "From HFT to Laplace Demon".

[Counting Large Numbers in Small Registers](2017-03-10-counting-large-numbers.md)


Current state of HFT is a technology race where there is a potential to 
Customize everything to death.
Prevent kernel libraries, stay in user space
TCP/IP is not fast enough use Remote Direct Memory Access, 
Berkley Sockets and Memory Mapped Files
Custom fibre, even micro waves are considered for super-fast transfer rates
Getting closer to the exchanges to gain few nano seconds
Hardware limitations use FPGA's 


On the other hand
Instead of trying get in front of everyone else in the muscle race 
Albert Bifet and Eric Horesnyi suggest a different approach by using kind of approximations and rather than trying to process whole stream of data. 
They define market events as a function of [ct,x,y,z] in a three dimensional space. 

Rather than trying to be faster you can try to go infront of the race by playing with other parameters of the function. Get more data than anybody else. 

--spark processes batches 1s latency
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