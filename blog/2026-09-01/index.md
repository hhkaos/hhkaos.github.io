---
slug: first-steps-into-the-indieweb
title: 🌱 First steps into the IndieWeb
description: How OpenTechEvents led me to revisit the IndieWeb, add semantic data to my site, and start experimenting with Webmentions.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, Semantic Web, OpenTechEvents, Personal Website]
enableComments: true
---

Over the last few weeks, while working on [OpenTechEvents](https://opentechevents.org/), I ended up pulling a thread I had only touched lightly before: the [IndieWeb](https://indieweb.org/).

And, honestly, it makes a lot of sense that I got there from a project about open tech events.

The funny thing is that the IndieWeb is not new at all. The movement started around 2010, but some of its ideas feel even more relevant now than they probably did back then.

OpenTechEvents is making me think again about how we publish information on the web, how we connect communities, and how we make things discoverable without depending too much on a single platform. The more I read, the more I found myself nodding along with some IndieWeb ideas: owning your identity, publishing on your own domain, making content more interoperable, and letting websites talk to each other again.

I still have a lot to learn, but I have taken a few first steps.

I added more semantic data to this website using [JSON-LD](https://json-ld.org/) and [Microformats2](http://microformats.org/wiki/microformats2), so my homepage describes me a bit better as a person, not just as a collection of HTML elements. I also updated my [links page](https://links.rauljimenez.info/) so it can act as a clearer identity hub, with `rel="me"` links and better compatibility with [IndieLogin](https://indielogin.com/).

One concept that especially resonates with me is [POSSE](https://indieweb.org/POSSE): publish on your own site, then syndicate elsewhere. In a way, it is similar to what I already do with [Buffer](https://buffer.com/): publishing from one place and distributing to different platforms. The important difference is that, with POSSE, my own website becomes the source of truth, and the rest of the platforms become copies or distribution channels. Understanding it properly can get technical quite quickly, but the idea is very attractive to me: use my own domain as the canonical place for my content and activity, and then distribute copies to the platforms where most people already are.

That does not mean leaving social platforms entirely. If I want to interact with most people, I still need to be present where most people are. But I do like the idea of not being completely tied to platforms that may close, start charging, restrict APIs, or change the rules. I have already seen versions of that story with Meetup.com, Twitter/X, LinkedIn, and other services. We should be the owners of what we share, even if we still participate in other people's platforms.

If you have never heard of [Aaron Parecki](https://aaronparecki.com/), he is one of the people behind IndieWebCamp. He is also a geogeek: he co-founded [Geoloqi](https://geoloqi.com/esri-faq/), a location platform acquired by Esri, where he later worked from 2012 to 2016 according to his [LinkedIn experience](https://www.linkedin.com/in/aaronparecki/details/experience/). Beyond his IndieWeb work, I have learned a lot about OAuth from his [courses and material](https://www.udemy.com/user/aaron-parecki-2/), which I credited in my 2023 Commit Conf talk, [OAuth, OpenID Connect and JWT para dummies](https://youtu.be/I6ZYVsUuPU8?si=LC44P3NiscHMVQgq&t=217).

If someone wants to understand what joining the IndieWeb can look like in practice, Aaron's website is a living example of what it means to own your content on your own domain.

And now I have also enabled [Webmentions](https://webmention.io/).

While testing this, I also realized that receiving a Webmention is only half of the story. If I want other tools to understand the context properly, my posts need to expose useful metadata too. So I started marking articles with Microformats2 values such as `h-entry`, `p-name`, `dt-published`, `p-author`, `u-url`, and `e-content`, so services can extract the title, author, date, canonical URL, and the actual content being mentioned. I still need to extend this more consistently across the rest of the site, including my digital brain.

That means that, at least in theory, if someone writes a post linking to one of my articles, that mention can be discovered and shown here. It feels small, but I like the direction: instead of conversations being trapped only inside social networks, a personal website can receive signals from the rest of the web.

I'm not pretending this is a finished migration to the IndieWeb. It is more like opening a door and putting one foot inside.

There is also one important piece I have not solved yet: automating the outgoing Webmentions. For now, when I link to a site that supports Webmentions, I still have to send the notification manually, usually with a small `curl` command. Not ideal, but good enough for a first experiment.

I also want to find time to experiment with other pieces of the IndieWeb ecosystem, such as [Micropub](https://indieweb.org/Micropub) and [Microsub](https://indieweb.org/Microsub).

And, related but different, I also want to finally understand the [Fediverse](https://en.wikipedia.org/wiki/Fediverse) properly. The IndieWeb and the Fediverse are not the same thing, although both are part of a broader movement towards a more decentralized internet and more control over our own data. They feel like sibling ecosystems with similar philosophies, but different technologies and approaches. I had never gone deep enough into the Fediverse, but this has definitely woken up that curiosity again.

But I like what it represents.

[Since 2023](../2023-04-18/index.md) I have treated this site as my digital brain. Maybe, little by little, it can also become more like a digital twin of my online presence: a better representation of what I publish, like, bookmark, RSVP to, and share across the web.

Let's see where this path leads 😅.
