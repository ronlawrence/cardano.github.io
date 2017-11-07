---
layout: post
title: Real world use cases for Reactive Programming
date: 2017-11-07
author: m.cannon
categories: javascript rxjs
description: Using rxjs and reactive programming principles on real world problems
---

The purpose of this post is to provide a brief introduction into Reactive Programming and walk through some real world 
examples to show how a library like rxjs can supercharge your applications.   

* * *

## INTRO

If you've never come across RxJs or a Reactive library before then I like to think of it as a network of water pipes. 

You have a source, our water tank, and then a series of pipes and connectors which may divert flows to various rooms or even change the water into something else. 

{% highlight javascript %}
import Rx from 'rxjs'

Rx.Observable.of('water')
	.map(item => 'wine')
	.subscribe(result => console.log(result))
	
// output: wine
{% endhighlight %}

This is the structure of an Rx 'program', you have a source observable which 'emits' items, in this case the string 'water', then we use the map operator to change 'water' to 'wine', then lastly we have the subscribe method. 
This activates the observable, and data will start flowing through it (turning on the tap). 

This model is essentially the Observer pattern.

* * *

## REAL WORLD

#### Retry
Suppose that I want to connect to a temperamental database that has a habit of exploding in my face, but I want to give it the benefit of a doubt and retry a few times.

Using RxJs I can do the following:

{% highlight javascript %}
// MyDatabase has a function called connect which returns a promise
const myDatabase = new MyDatabase()

Rx.Observable
	.defer(() => myDatabase.connect())
	.retry(3)
	.subscribe()
{% endhighlight %}
The defer method takes a function which can return a promise. This is a nice way to wrap up a normal javascript promise and bring us into observable land. 

We can then start chaining operators, and in this case if the connect method throws an error, then the whole chain before the retry will be retried.

We can even get more granular and retry by any logic we see fit. For example we may want to retry every 5 seconds:

{% highlight javascript %}
const interval$ = Rx.Observable
	.interval(1000)
	.map(n => {
	  if(n === 2){
	    throw 'error'
	  }
	  return n
	 })
	.retryWhen(errors => errors.delay(5000))
	.subscribe(val => console.log(val))
{% endhighlight %}
This creates an observable which emits the natural number sequence from 0 every second. When n is 2 an error is thrown. As soon as an error is thrown we wait 5 seconds before trying the whole thing again.

***

#### Error handling
Suppose I'm building an fx system that requires the latest spot price for a currency pair (USD/CAD).

I have two data sources, Reuters and Bloomberg (other market data providers are available), but say I always prefer Bloomberg and only take Reuters if Bloomberg is down. I can do something like the following:

{% highlight javascript %}
const loonie = 'USDCAD'

Bloomberg.getSpotPrice$(loonie)
	.catch(err => {
		console.log('Bloomberg explode. Much panic, trying Reuters.')
		return Reuters.getSpotPrice$(loonie)
	})
	.subscribe(price => console.log(price))
{% endhighlight %}
 
Catch expects a function that returns an observable so you can 'switch' to the other data stream if an error is thrown in the first.

***

#### Racing
We could also have the case where we actually just want the fastest price. I.e pit Bloomberg and Reuters against each other. This could look like:

{% highlight javascript %}
Rx.Observable.race(Bloomberg.getSpotPrice$(loonie), Reuters.getSpotPrice$(loonie))
  .subscribe(price => console.log(price))
{% endhighlight %}
