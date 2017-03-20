---
layout: post
title: QCon conference reflections 
date: 2017-03-08
author: j.lee
categories: qcon conferences 
description: Reflections on the state of software engineering industry at QCon
---


<img src="/assets/images/post-images/QCon-london-view2.jpg" alt="view from QCon QE2" style="width: 80%; 
    display: block; border-radius:8px;
    margin: 0 auto" />

# QCon
This was my first experience of [QCon](https://qconlondon.com/).  I had seen some of the InfoQ material on the sister website and was hoping to see the quality reflected in the conference.  I was not disappointed.  The venue although cramped around the lifts and toilets was well presented and located.  I rate the food highly- the attention to quality here was evident: beverages in every break, decent snacks and a balanced tasty but healthy lunch.  Afterall if you don't have decent fuel in your engine, how can you expect the car to perform?  

Enough about my stomach... moving on to the reason for QCon- the tech content.

# Tracks
I'd been to other multi-day conferences where the tracks persisted across the whole duration, but here the tracks changed daily.  I thought this worked really well, to fulfil the goal of keeping up with technology in a broad way.  Each track is owned by a SME, who selects the topics- they presented each track in the morning to help illustrate the day ahead.  The cool thing is that QCon advertise openly how the tracks are formed/organised and the topics chosen.  Finally, it wasn't obvious to me initially but QCon has regional specialities, e.g. London fintech.

# Topics
I felt spoilt for choice- throughout the day I had trouble choosing because so many were enticing.  I flitted between what would be applicable in the coming projects, genuine future gazing, geeking out on techy stuff and finding out about technologies I'd never heard of.

# Highlights
## Techie horror show
The [opening keynote](https://qconlondon.com/london-2017/keynote/security-war-stories-the-battle-for-the-internet-of-things) was a jolt to the security-minded.  Alasdair Allan recanted stories both personal and industry-renowned hacks that burned a hole in my head to check all my security patches when I got home.

The fear came back a couple days later in the 'Security: Lessons from being Pwned' track, in Joe DeMesy's [Out of the browser into the fire](https://qconlondon.com/london-2017/presentation/out-browser-fire).  He showed us some clever exploits of chat clients through URIs running JavaScript accessing the file system on an unsuspecting user. 

<div style="display:block; text-align: center; ">
<img src="/assets/images/post-images/brower-fire-script-close.jpg" alt="scary 1" style="width: 40%; max-width: 300px; border-radius:8px" />
<img src="/assets/images/post-images/browser-fire-onfocus.jpg" alt="scary 2" style="width: 40%; max-width: 300px; border-radius:8px"  />
</div>



## Learning from the greats
One thing I'd hoped to achieve was take away some lessons from failures or gotchas that speakers were brave enough to share.  The [BBC iPlayer](https://qconlondon.com/london-2017/presentation/microservices-at-the-heart-of-BBC-iPlayer) story of implementing large scale microservices resonated with me, as we are about to embark on a similar journey, albeit on a smaller scale.  The benefits of well-architected decisions were clear, in six months the latency had dropped from 5000ms to 10ms; along with the expected ones of scalability, failover management, and quick deployment.

My fascination of architectures behind household name products was also sated with a behind-the-scenes look at [Facebook Live](https://qconlondon.com/london-2017/presentation/scaling-facebook-live-videos-billion-users).  A blend of sensible standard streaming protocol choice, clever caching strategy, implemented in a scalable architecture allowed the team to go from hackathon concept to full production in four months!

# Trends
Microservices is no longer a hot topic, it's an assumption; hand-in-hand Cloud and Container tech is evolving, to meet these needs.  AI and data science are intermingled in this eco system.  The cautionary tale background to the latest and greatest was security, and the fact that we are not solving problems with new solutions- some have been documented since the 70s, e.g. Agile.


# Insight?
When I sat down to digest the vast amount of information, I was overwhelmed.  How could I condense three days of techie goodness into succinct insightful wisdom?  
Forcing myself to summarise, I would say: Technologies, languages, libraries, frameworks and products are evolving quickly, they allow us to stand on the shoulders of giants.  Yes, we should leverage the scale, the security, the X-factor but don't over-engineer.  Quoting from [Spotify's Kinshuk Mishra](https://qconlondon.com/london-2017/presentation/evolution-spotifys-ads-architecture): 
_Think for tomorrow but solve for today_

# Closing
When I get back to the office, I will still need to do more digesting.  We learn daily and this has been one big learning fest.

