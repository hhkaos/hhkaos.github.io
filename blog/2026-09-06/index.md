---
slug: second-steps-into-the-indieweb
title: 🌿 Second steps into the IndieWeb
description: Publishing on my own domain is now a routine, but following the rest of the web from it is still an empty box.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, POSSE, Micropub, Microsub, Personal Website]
---

A few days ago I wrote about my [first steps into the IndieWeb](/blog/first-steps-into-the-indieweb): semantic data, an identity hub, Webmentions sent by hand with `curl`, and a [Micropub](https://indieweb.org/Micropub) server that had just started working.

Since then I have kept pulling the thread, and the picture has changed enough to deserve a second post. The short version: **publishing is almost solved, following is not**.

## Publishing my own activity, for real

The publishing side has gone from theory to routine. I run a small private [Indiekit](https://getindiekit.com/) server, password-protected and not linked from anywhere, which acts as my Micropub endpoint.

When I create something there, it gets committed to a public GitHub repository, [hhkaos/posts.rauljimenez.info](https://github.com/hhkaos/posts.rauljimenez.info), and a GitHub Action renders it at [posts.rauljimenez.info](https://posts.rauljimenez.info/). Only the items explicitly marked as public are rendered, syndicated, or used to send Webmentions. My site is the canonical copy; everything else is a copy of it.

The post types I have actually published and can see live are: bookmarks, likes, replies, RSVPs, events, photos, and more recently reviews, "read" and "watched" entries. Others are configured but still untested (reposts, articles, "listen", check-ins), so I am not going to claim they work yet. The test notes I used at the beginning were deleted once they had done their job.

Two clients cover almost everything: [Quill](https://quill.p3k.io/) for notes, bookmarks, likes, replies and RSVPs, and Indiekit's own interface for the richer types like reviews, reads, watches and events. Both talk to my server through [IndieAuth](https://indieweb.org/IndieAuth), so I log in with my own domain instead of yet another account.

## POSSE to Mastodon and Bluesky

[POSSE](https://indieweb.org/POSSE) was the concept that hooked me in the first post, and now it actually runs. If I opt a post in to syndication, it gets cross-posted to [Mastodon](https://mastodon.social/@hhkaos) and [Bluesky](https://bsky.app/profile/rauljimenez.info) a few minutes later, when the scheduled job picks it up. It is not instant, and it is not automatic for everything: it is a per-post decision.

The wording adapts to the type of activity ("🔖 Bookmarked…", "🎤 I'll be speaking at…"), a preview image is attached, and the resulting URLs are written back into the original post as `u-syndication` links, so the canonical version knows where its copies live. This is done by Indiekit with a few local syndicator wrappers, not by Bridgy's publishing feature.

Two honest limitations. First, editing a post does not update the copies: syndication happens once and that is it. Second, LinkedIn, X and Instagram still have no clean path — a paid-only API in one case, an OAuth app approval process plus a barely maintained third-party syndicator in another, and no personal-posting API at all in the third. So those stay manual for now. Not impossible forever, just not worth the effort today.

## Conversations flowing back

Outgoing Webmentions are no longer a `curl` command I run by hand, at least for the content created through Indiekit. When one of those posts links somewhere, the build step discovers the target's endpoint and notifies it, keeping a small ledger so the same mention is never sent twice. Regular blog articles like this one are still not covered by that automation, so for them I am back to sending things manually — an open decision I have not made yet.

Incoming Webmentions are received by [webmention.io](https://webmention.io/), a hosted service, and now they are actually *shown*: likes, reposts and replies appear under each post on posts.rauljimenez.info, under the blog articles here, and on [links.rauljimenez.info](https://links.rauljimenez.info/). All three use the same shared widget I extracted along the way, [@hhkaos/webmentions-widget](https://www.npmjs.com/package/@hhkaos/webmentions-widget), which takes a snapshot of the mentions at build time instead of fetching them live in the browser.

And [Bridgy](https://brid.gy/) closes the loop. It is connected to Mastodon and Bluesky in backfeed mode only — its publishing side is deliberately off, because Indiekit already handles that. So when somebody likes or replies to one of the syndicated copies, that reaction travels back as a Webmention to my original post. The conversation that used to be trapped in a silo ends up on my own domain.

## I get notified now

Every verified incoming mention also reaches me as a push notification and an email, with the type, author, source and target. Both come from a webhook that webmention.io calls on a small self-hosted service, using [ntfy](https://github.com/binwiederhier/ntfy) for the push part. There is no filtering yet, because the volume is tiny and honestly every mention still feels like a small event.

What I do *not* have is alerting for the boring failures: a syndication stuck in the queue, a render that broke, a build that silently published nothing. Those I still discover by looking.

## Reality check

webmention.io had intermittent 502s this month. The display survived them without me noticing, precisely because mentions are baked in at build time rather than requested live — but it was a good reminder that the *receiving* half of my setup depends on somebody else's server.

I am weighing whether to self-host that piece. The trade-off is real: I would own the spam filtering, the uptime and the maintenance of something that today simply works, run by people who understand the problem far better than I do. For now, resilient display plus a hosted receiver feels like a reasonable place to be.

## The other half: following

Here is the part I keep postponing. Publishing is close to complete, and following is where I have barely started — I have done nothing at all.

The IndieWeb answer is [Microsub](https://indieweb.org/Microsub), and it is worth explaining what problem it solves, because it took me a while to get it. A feed reader normally does two very different jobs at once: fetching and organizing sources, and showing them to you. Microsub splits them. A server (like [Aperture](https://aperture.p3k.io/)) collects the sources — RSS/Atom feeds, the Microformats published on someone's personal site, Fediverse accounts — and keeps track of what you have already read. A separate reader app (like [Monocle](https://monocle.p3k.io/) on the web, or [Indigenous](https://indigenous.realize.be/) on mobile) connects to that server and shows everything as a single timeline. You can change the app without losing your subscriptions or your read state, and there is no platform algorithm deciding the order.

Related, and pointing the other way: [WebSub](https://indieweb.org/WebSub). Today a feed forces readers to poll — "anything new?" — every so often, which means either wasted requests or delayed updates. With WebSub, my site notifies a hub the moment I publish, and the hub pushes it to everyone subscribed. Following a website would feel as immediate as following an account.

I have the feeds already: this blog and posts.rauljimenez.info both publish Atom/RSS with autodiscovery. What I do not have is the hub, or the reader. That is the next thing to break.

## What's next

A Microsub and reader experiment, to finally read the web the same way I publish to it. Maybe a WebSub hub on top of the existing feeds. Deciding whether this activity feed has earned a link in the site navigation, or whether it stays a quiet corner. And possibly a plain email subscription for people who would rather get an update in their inbox than add yet another feed — which does not exist today, and would be slightly ironic in a post about decentralization, but people read where they read.

Publishing turned out to be the easy half. Reading, apparently, is where the interesting problems live.
