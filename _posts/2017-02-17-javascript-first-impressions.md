---
layout: post
title: JavaScript First Impressions - From a C# Developer POV
date: 2017-02-17
author: v.thong
categories: cardano javascript c#
description: My first impressions of JavaScript, likes, dislikes, interesting behaviour
---

Cardano Engineering has recently decided to do web development and as someone who has mostly done desktop development and not much experience in any web development, I'm quite excited about it. I decided to start with the basic, JavaScript. I'll list some of the things I like or find interesting and also things I don't quite like or seem counterintuitive about JavaScript. I'll put a disclaimer here that this is all my personal opinion and first impressions as a C# developer who's never had any commercial exposure to JavaScript and I might be seriously biased towards C# and unconsciously comparing it with C# with a love-hate feeling and quite possibly more hate in this case.

# Like
## Syntax-wise similar to C#
<table>
    <tr>
        <td />
        <td align="center">C#</td>
        <td align="center">JavaScript</td>
    </tr>
    <tr>
        <td>Variable declaration</td>
        <td>
            <pre lang="csharp" style="font-size:8pt">
            var x = "bla bla";
            </pre>
        </td>
        <td>
            <pre lang="javascript" style="font-size:8pt">
             var x = "bla bla";
            </pre>
        </td>
    </tr>
    <tr>
        <td>Object initialisation</td>
        <td>
            <pre lang="csharp" style="font-size:8pt">
            var x = new 
            {
                Name = "John",
                LastName = "Doe"
            };
            </pre>
        </td>
        <td>
            <pre lang="javascript" style="font-size:8pt">
             var x = {
                name: “John”,
                lastName: “Doe”
             };
            </pre>
        </td>
    </tr>
    <tr>
        <td>Class declaration</td>
        <td>
            <pre lang="csharp" style="font-size:8pt">
            class MyClass : MyBaseClass
            {
                ...
            }
            </pre>
        </td>
        <td>
            <pre lang="javascript" style="font-size:8pt">
            class MyClass extends MyBaseClass {
                ...
            }
            </pre>
        </td>
    </tr>
</table>
And many others I cannot list here.


## No property declaration needed
```javascript
> var myObject = new Object();
> myObject.NewProperty = "hello";
hello
```

# Dislike
## Equality operators
JavaScript has two kinds of equality operators:
* strict equality using ===
* loose equality using ==

Both equality compares two values for equality. The == operator is called _loose_ because two values may be considered the same even if they are of different type. The == equality converts both values to a common type (type coercion) before comparing the values. This can potentially hide bugs and many JavaScript basic tutorial articles recommends to always use === operator. If this is the case, why bother having two equality operators in the first place? I'm sure there's a reason why the == equality is introduced, but I haven't made it my priority to look into it.


## Usage of ```this``` keyword
In C# ```this``` keyword would refer to the current object. A function that wants to access the value of ```this``` should be defined inside the class. All variables in C# is lexically scoped. In JavaScript this is not always the case. The value of ```this``` is determined by how a function is called i.e. the same function will have different ```this``` value depending on how it's called. 
```javascript
> var myObject = new Object();
> myObject.x = 0;
>
> var myFunction = function() { 
>  this.x = 55; // what is "this" here?
> };  
>
> myObject.CallFunction = myFunction;  // Now 'myObject' has a method called 'CallFunction', which is 'myFunction'.
> myObject.CallFunction();  // This executes 'myFunction', "this" now belongs to 'myObject'
> myObject.x; 
55
```

## Weak typing
We can add number and string together for example.
```javascript
> var x = "5" + 1 + 2
512
> var y = 1 + 2 + "5" + 6
356
```
Here we see that if we put a number in quotes, the rest of the numbers will be treated as strings and concatenated, while the previous numbers are treated as numbers. This is actually an interesting behaviour. JavaScript is smart enough to figure out what type of data we have and then make the necessary adjustments so that we don't have to redefine it. However, coming from a strongly typed language like C#, this behaviour irks me. In a strong typed language environment, the compiler will tell me right away that I'm trying to operate on two different data types. With JavaScript, I won't get any compilation error, but I could get a different result than what I expected. I know this is a rather weak argument. Developers should know the behaviour of the language they're using, but this kind of problem seems appropriate for this blog.


# Conclusion
The syntax similarity to C# in my case is unfortunately misleading because it distorts my expectations of how easy it is to switch between the two languages. This is in some way reminds me of my experience learning English and Dutch as they're quite similar to me when I first started. It's quite easy to mix both English and Dutch words in a single sentence without even realising I was doing this or thinking in English while trying to speak or construct sentences in Dutch (or the other way around). Like any language, it is up to us to learn how to use the language as it's meant to be used. We should avoid falling into the trap of thinking in one language we feel more comfortable with, while we should be thinking in the other. It is a painful process, but I believe that when we invest time to become familiar with it and stop lamenting over what it is not or what it should've been, we'll start seeing the power of the language and with experience we can easily decide which language is better suited for a specific problem we're trying to solve.
