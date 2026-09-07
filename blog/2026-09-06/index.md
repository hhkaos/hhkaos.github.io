---
slug: second-steps-into-the-indieweb
title: 🌿 Second steps into the IndieWeb
description: Publishing on my own domain is now a routine, but following the rest of the web from it is still an empty box.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, POSSE, Micropub, Microsub, Personal Website]
---

A few days ago I wrote about my [first steps into the IndieWeb](/blog/first-steps-into-the-indieweb): semantic data, an identity hub, Webmentions sent by hand with `curl`, and a [Micropub](https://indieweb.org/Micropub) server that had just started working.

Since then I have kept pulling the thread, and the picture has changed enough to deserve a second post. The short version: **publishing is almost solved, following is not**.

## POSSE: publish on my own site, syndicate everywhere else

[POSSE](https://indieweb.org/POSSE) was the concept that hooked me in the first post, and now it actually runs. It has two halves, and the acronym names them separately: *Publish (on your) Own Site*, meaning your own domain gets it first, and *Syndicate Elsewhere*, meaning copies are then pushed out to the platforms where people already are. The next two sections are exactly that, one per half.

### Publishing on my own site first

The publishing side has gone from theory to routine. I run a small private [Indiekit](https://getindiekit.com/) server, password-protected and not linked from anywhere, which acts as my Micropub endpoint.

When I create something there, it gets committed to a public GitHub repository, [hhkaos/posts.rauljimenez.info](https://github.com/hhkaos/posts.rauljimenez.info), and a GitHub Action renders it at [posts.rauljimenez.info](https://posts.rauljimenez.info/). Only the items explicitly marked as public are rendered, syndicated, or used to send Webmentions. My site is the canonical copy; everything else is a copy of it.

The post types I have actually published and can see live are: bookmarks, likes, replies, RSVPs, events, photos, and more recently reviews, "read" and "watched" entries. Others are configured but still untested (reposts, articles, "listen", check-ins), so I am not going to claim they work yet. The test notes I used at the beginning were deleted once they had done their job.

This is the screen I start from. Having separate types is not a whim: each one maps to specific [Microformats2](http://microformats.org/wiki/microformats2), and that is what later lets another website understand that something is a reply, a like or a review, rather than just a piece of text.

<div style={{textAlign: 'center'}}>

  ![Indiekit screen listing the available post types: Article, Bookmark, Check-in, Event, Like, Listen, Note, Photo, Read, Reply, Repost, Review, RSVP and Watch](/img/blogs/second-steps-into-the-indieweb/indiekit-post-types.png)

</div>

Two clients cover almost everything: [Quill](https://quill.p3k.io/) for notes, bookmarks, likes, replies and RSVPs, and Indiekit's own interface for the richer types like reviews, reads, watches and events. Both talk to my server through [IndieAuth](https://indieweb.org/IndieAuth), so I log in with my own domain instead of yet another account:

<div style={{textAlign: 'center'}}>

  ![The three steps of an IndieAuth login: I type my own site’s URL into Quill, my own server asks me to authorize the app and shows what it will be allowed to do, and after approving it Quill can publish to my domain](/img/blogs/second-steps-into-the-indieweb/indieauth-login.png)

</div>

### Syndicating elsewhere: Mastodon and Bluesky

If I opt a post in to syndication, it gets cross-posted to [Mastodon](https://mastodon.social/@hhkaos) and [Bluesky](https://bsky.app/profile/rauljimenez.info) a few minutes later, when the scheduled job picks it up. It is not instant, and it is not automatic for everything: it is a per-post decision — literally two checkboxes at the bottom of the form. Leave them unticked and the post stays only on my site.

<div style={{textAlign: 'center'}}>

  ![Indiekit’s form for creating a photo post, with the ’Syndicate to’ section highlighted at the bottom, offering one checkbox for Mastodon and another for Bluesky](/img/blogs/second-steps-into-the-indieweb/indiekit-create-photo-post.png)

</div>

The wording adapts to the type of activity ("🔖 Bookmarked…", "🎤 I'll be speaking at…"), a preview image is attached, and the resulting URLs are written back into the original post as `u-syndication` links, so the canonical version knows where its copies live. This is done by Indiekit with a few local syndicator wrappers, not by Bridgy's publishing feature.

Two honest limitations. First, editing a post does not update the copies: syndication happens once and that is it. Second, LinkedIn, X and Instagram still have no clean path — a paid-only API in one case, an OAuth app approval process plus a barely maintained third-party syndicator in another, and no personal-posting API at all in the third. So those stay manual for now. Not impossible forever, just not worth the effort today.

## Letting websites talk to each other

This runs in both directions: notifying others when I link to them, and being notified when somebody links to me. [Webmentions](https://indieweb.org/Webmention) are the mechanism in both cases.

### Commenting on somebody else's site

Outgoing Webmentions are no longer a `curl` command I run by hand, at least for the content created through Indiekit. When one of those posts links somewhere, the build step discovers the target's endpoint and notifies it, keeping a small ledger so the same mention is never sent twice.

This is what it looks like, and it is still my favourite part: I write [a reply on my own site](https://posts.rauljimenez.info/replies/2026/09/01/9821c), and my comment ends up under [somebody else's original article](https://www.swyx.io/learn-in-public/), without having created an account anywhere.

![On the left, a reply published on posts.rauljimenez.info responding to swyx’s ’Learn In Public’. On the right, that same comment showing up in the Webmentions section of the original article on swyx.io](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-swyx.png)

Regular blog articles like this one are still not covered by that automation, so for them I still send the mentions by hand — an open decision I have not made yet. Not with the `curl` from the previous post, though: I now use [webmention.app](https://webmention.app/), which takes the article's URL, crawls every link in it, works out which ones support Webmentions and notifies them. I am still the one pressing the button, but once per article instead of once per target. That is how the mention from [my previous post](/blog/first-steps-into-the-indieweb) ended up in the footer of [my own links page](https://links.rauljimenez.info/).

![On the left, the article ’First steps into the IndieWeb’ linking to the links page. On the right, links.rauljimenez.info showing that mention in its ’Mentions’ section](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-links.png)

### Receiving and displaying what arrives

Incoming Webmentions are received by [webmention.io](https://webmention.io/), a hosted service, and now they are actually *shown*: likes, reposts and replies appear under each post on posts.rauljimenez.info, under the blog articles here, and on [links.rauljimenez.info](https://links.rauljimenez.info/). All three use the same shared widget I extracted along the way, [@hhkaos/webmentions-widget](https://www.npmjs.com/package/@hhkaos/webmentions-widget), which takes a snapshot of the mentions at build time instead of fetching them live in the browser.

### Pulling reactions back from social networks

And [Bridgy](https://brid.gy/) closes the loop. It is connected to Mastodon and Bluesky in backfeed mode only — its publishing side is deliberately off, because Indiekit already handles that. So when somebody likes or replies to one of the syndicated copies, that reaction travels back as a Webmention to my original post. The conversation that used to be trapped in a silo ends up on my own domain.

Here it is with a real case: [Wojtek Powiertowski](https://mastodon.social/@wojtekpow) favourited on Mastodon [the post announcing my previous article](https://mastodon.social/@hhkaos/117196043964695624), and that heart ended up displayed in [the article's header](/blog/first-steps-into-the-indieweb), on my own site.

![On the right, the Mastodon post announcing ’First steps into the IndieWeb’ with one favourite. On the left, that same favourite shown as ’Reactions from the web’ in the article header on www.rauljimenez.info](/img/blogs/second-steps-into-the-indieweb/backfeed-mastodon-to-blog.png)

Putting all of the previous pieces together, the full journey of a photo looks like this: [I publish it once on my own site](https://posts.rauljimenez.info/photos/2026/09/01/e4bdf/), it gets distributed [to Mastodon](https://mastodon.social/@hhkaos/117198456449142509) and [to Bluesky](https://bsky.app/profile/did:plc:gwbqjf3ciffqeedjrpmjinfo/post/3muimbqf3ik2i), and the reactions those copies receive travel back to the original. One place to publish, one place to read what people replied.

![The full journey of a photo post: it is published on posts.rauljimenez.info, distributed to Mastodon and Bluesky, and the likes received on those copies come back as Webmentions to the original post](/img/blogs/second-steps-into-the-indieweb/posse-backfeed-photo.png)

### And the comments too

Everything so far was likes and reposts, which is the easy part: a number and a face. What I found most rewarding was confirming that **whole conversations come back as well**.

When I announced [a talk](https://posts.rauljimenez.info/events/2026/09/01/esri-european-developer-and-technology-summit/) on Mastodon and Bluesky, [Iván Sánchez](https://mastodon.social/@IvanSanchez) asked me a rather good question over on Mastodon, and it turned into a thread of several messages. All of those messages now sit under the event on my own site, in "Responses from around the web", next to the likes from Bluesky.

![The full journey of an event post: it is published on posts.rauljimenez.info, distributed to Bluesky and Mastodon, and both the reactions and the comments from the Mastodon thread come back and are displayed under the original event](/img/blogs/second-steps-into-the-indieweb/Indieweb-Event-with-comments.png)

That is the point where this stops being a technical experiment and starts to make sense: the discussion is not locked inside the network where it happened, it ends up archived on the site it came from — the only one I actually control.

## I get notified now

Reactions that happen on Mastodon or Bluesky already reach me through their own apps; I do not need to build anything for that. But what about the ones that arrive as a Webmention from somebody else's website — [like the reply I sent to swyx](#commenting-on-somebody-elses-site), only the other way round? There is no app to alert me there: they would simply show up under my post and I would find out by chance, by going in to look.

None has arrived from somebody else's site yet — everything I have comes from Bridgy or from myself. But the day one does, I should find out 😜.

Every verified incoming mention reaches me as a push notification and an email, with the type, author, source and target. Both come from a webhook that webmention.io calls on a small self-hosted service, using [ntfy](https://github.com/binwiederhier/ntfy) for the push part. This is what both look like:

![On the left, push notifications on the phone titled ’New Webmention’ with the author of each reaction. On the right, those same mentions arriving as email, each with its source and target](/img/blogs/second-steps-into-the-indieweb/ntfy-indieweb.png)

And it works the same for anything that arrives: likes and reposts from Bluesky notify me exactly like replies from Mastodon do, because nothing in the chain branches on the kind of reaction. There is no filtering yet, because the volume is tiny and every mention still feels like a small event. Although I will have to do something about my own replies inside a thread, which come back as Webmentions to my own post and notify me too 😅.

What I do *not* have is alerting for the boring failures. And they are not hypothetical: while going through Bridgy to write this, I found five real reactions that never made it. Three on Bluesky, because that post linked to a URL of mine that no longer exists, and with no live page there is no endpoint to discover. Two on Mastodon, on replies of mine that did not link to any page of my own, so Bridgy had nowhere to send the mention. Nothing warned me about any of the five: you only see them by going in to look.

## Nothing is foolproof

It only feels fair to say so. A Webmention is more fragile than it looks, and not because of any particular tool: whoever receives it fetches the source page and checks that it **links to the exact target URL**. If it does not match, there is no mention. And "does not match" covers a trailing slash too many, an `http` where it should be `https`, a `www` that is missing or spare, a redirect in the middle, or a path that no longer exists.

It happened to me replying to swyx's article: until I got the URL exactly right, verification kept failing and my comment showed up nowhere.

And it keeps happening. Going through what I have published so far, I found six real reactions that did not make it on their own, all variations of the same thing: three because the post linked to a page of mine that no longer exists, two because the copy did not link back to any page of mine, and one that had been there all along but that nobody went looking for (Bridgy only collects from the moment you connect the account).

And the bad part is not losing them, it is that **I do not find out**: notifications only fire when a mention arrives correctly. Nothing warns me about the failures.

On top of that, webmention.io had intermittent 502s this month. The display survived them without me noticing, precisely because mentions are baked in at build time rather than requested live — but it was a good reminder that the *receiving* half of my setup depends on somebody else's server.

I am weighing whether to self-host that piece. The trade-off is real: I would own the spam filtering, the uptime and the maintenance of something that today simply works, run by people who understand the problem far better than I do. For now, resilient display plus a hosted receiver feels like a reasonable place to be.

## So how do you follow someone on the IndieWeb?

Here is the part I keep postponing. Publishing is close to complete, and following is where I have barely started — I have done nothing at all.

The IndieWeb answer is [Microsub](https://indieweb.org/Microsub), and it is worth explaining what problem it solves, because it took me a while to get it. A feed reader normally does two very different jobs at once: fetching and organizing sources, and showing them to you. Microsub splits them. A server (like [Aperture](https://aperture.p3k.io/)) collects the sources — RSS/Atom feeds, the Microformats published on someone's personal site, Fediverse accounts — and keeps track of what you have already read. A separate reader app (like [Monocle](https://monocle.p3k.io/) on the web, or [Indigenous](https://indigenous.realize.be/) on mobile) connects to that server and shows everything as a single timeline. You can change the app without losing your subscriptions or your read state, and there is no platform algorithm deciding the order.

Related, and pointing the other way: [WebSub](https://indieweb.org/WebSub). Today a feed forces readers to poll — "anything new?" — every so often, which means either wasted requests or delayed updates. With WebSub, my site notifies a hub the moment I publish, and the hub pushes it to everyone subscribed. Following a website would feel as immediate as following an account.

I have the feeds already: this blog and posts.rauljimenez.info both publish Atom/RSS with autodiscovery. What I do not have is the hub, or the reader.

## What's next

And this is where my plan runs out. I have several directions open and none of them decided:

- **[Microsub](https://indieweb.org/Microsub) and a reader**, to finally read the web the same way I publish to it — maybe with a [WebSub](https://indieweb.org/WebSub) hub on top of the feeds I already have.
- **A newsletter**, for people who would rather get an update in their inbox than add yet another feed. Slightly ironic in a post about decentralization, but people read where they read.
- **A personal archive**, which is the other face of POSSE: instead of publishing here and pushing out, pulling back in what I have been posting on other platforms for years. It would also be the way in for those restricted-API platforms I cannot syndicate to.

And this is where your opinion would genuinely help: if you have a hunch about which way to go, or you have built something similar and know exactly where I am about to crash, tell me.

And if you have your own site, reply **from it**: this page advertises its Webmention endpoint, so your response would show up right below. You would be the first person to send me one from their own site, and that would honestly make my day 😜. Otherwise, [Mastodon](https://mastodon.social/@hhkaos) or [Bluesky](https://bsky.app/profile/rauljimenez.info) work fine too.

Publishing turned out to be the easy half. The other half, apparently, is where the interesting problems live.
