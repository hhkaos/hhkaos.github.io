---
slug: second-steps-into-the-indieweb
title: 🌿 Second steps into the IndieWeb
description: Publishing on my own domain is now a routine, but following the rest of the web from it is still an empty box.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, POSSE, Micropub, Microsub, Personal Website]
---

A few days ago I wrote about my [first steps into the IndieWeb](/blog/first-steps-into-the-indieweb): making my HTML more semantic, turning my site into an identity hub (with `rel="me"` links, so that on the services that support it I can identify myself with my own domain instead of with accounts on platforms I do not control), referencing other sites with Webmentions sent by hand with `curl`, and a [Micropub](https://indieweb.org/Micropub) server that had just started working.

Since then I have kept adding new things, and I have changed so much that I wanted to write a second post before forgetting everything I did. The short version: **publishing is almost solved, following is not**.

## POSSE: publish on my own site, syndicate everywhere else

[POSSE](https://indieweb.org/POSSE) was the concept that hooked me into the IndieWeb, and I would say it is now genuinely working. Let's look at both halves, "POS" and "SE":
- **POS** (***P**ublish (on your) **O**wn **S**ite*): publish first on your own site/domain.
- **SE** (***S**yndicate **E**lsewhere*): then push copies out (to the platforms where people already are).

In the following sections I explain how I am implementing it.

### Publishing on my own site first

I run a small private [Indiekit](https://getindiekit.com/) server that acts as my [Micropub](https://indieweb.org/Micropub) endpoint for posting content.

When I create something there, it gets saved into a [GitHub repository](https://github.com/hhkaos/posts.rauljimenez.info), and a GitHub Action takes care of parsing it and rendering it at [posts.rauljimenez.info](https://posts.rauljimenez.info/). That way my site becomes the "canonical" copy, and everything else is a copy of it.

The post types I have started experimenting with are: likes, replies, event attendances (RSVPs), events, photos, bookmarks, reviews, check-ins, and "read" and "watched" entries. There are more types configured, but I have not used them yet (e.g. reposts, articles and "listen").

Below you can see a screenshot of Indiekit's web publishing interface with the different post types:

<div style={{textAlign: 'center'}}>

  ![Indiekit screen listing the available post types: Article, Bookmark, Check-in, Event, Like, Listen, Note, Photo, Read, Reply, Repost, Review, RSVP and Watch](/img/blogs/second-steps-into-the-indieweb/indiekit-post-types.png)

</div>

Each type has a form with different fields that captures the information later translated into specific [Microformats2](http://microformats.org/wiki/microformats2) properties. That is what afterwards lets another website understand that what I published is a reply, a like or a review, and not simply a loose piece of text.

To publish, I first tried [Quill](https://quill.p3k.io/) as a Micropub client, but as I said, in the end I only use Indiekit's own interface, which I host myself and which I have customized to be able to publish post types that were not supported there (e.g. reviews, reads, watches and events).

Thanks to [IndieAuth](https://indieweb.org/IndieAuth) and my server's API, I can actually publish with any Micropub client. Here, for example, you can see how I log into Quill using my own domain:

<div style={{textAlign: 'center'}}>

  ![The three steps of an IndieAuth login: I type my own site’s URL into Quill, my own server asks me to authorize the app and shows what it will be allowed to do, and after approving it Quill can publish to my domain](/img/blogs/second-steps-into-the-indieweb/indieauth-login.png)

</div>

<details>
  <summary><strong>ℹ️ So who do I actually depend on</strong> for my identity?</summary>

  Here the identity is the URL, not the account: my site declares which authorization endpoint it uses, and in my case that points to my own server, which is the one that authenticates me.

  If instead I delegated verification to [IndieLogin](https://indielogin.com/), I would indeed still depend on a third-party account (GitHub, my email, etc.), but on an interchangeable one: I swap it by editing the `rel="me"` links on my site and I am still the same identity.

  The dependency that does not go away is **the domain**: registrar, DNS and hosting. And it is not a small one: if I lose `rauljimenez.info`, not only does every canonical URL of mine break, but whoever registers it next could publish their own `rel="me"` links and impersonate me. The difference with a platform is that here the risk is mine and preventable (long renewals, auto-renew, registrar lock) instead of depending on somebody else's unilateral decision — but if I let it slip, there is no support desk to appeal to.

</details>

### Syndicating elsewhere: Mastodon and Bluesky

I have configured Indiekit so that when I create a new post (content), I can syndicate/publish it to [Mastodon](https://mastodon.social/@hhkaos) and [Bluesky](https://bsky.app/profile/rauljimenez.info).

While I am creating the post I have two checkboxes at the bottom of the form that I can tick. If I leave them unticked, the post stays **only** on my site. In case you were wondering, here I explain [why it makes sense to publish something on my site and not distribute it](https://posts.rauljimenez.info/about/#why-not-shared). And if I do tick them, the copies are distributed a few minutes later.

<div style={{textAlign: 'center'}}>

  ![Indiekit’s form for creating a photo post, with the ’Syndicate to’ section highlighted at the bottom, offering one checkbox for Mastodon and another for Bluesky](/img/blogs/second-steps-into-the-indieweb/indiekit-create-photo-post.png)

</div>

On top of that, for every post it distributes, Indiekit writes the URLs where it has been published back into the original post. Then, when [posts.rauljimenez.info](https://posts.rauljimenez.info/) is rendered, those URLs are output as links marked up with the `class="u-syndication"` microformat, so that any website can tell that those copies on social networks and the original are the same thing.

The main limitation of this setup is that syndication happens only once: if I later edit the post on my own site, the copies already distributed stay as they were.

And then there is the elephant in the room: popular platforms like LinkedIn, X or Instagram, whose publishing APIs either do not exist or are restricted, and to which I currently syndicate nothing. That is one of the fronts I am [considering tackling later on](#whats-next).

## Letting websites talk to each other

This is about being able to notify others when I link to them, and being notified when somebody links to me. [Webmentions](https://indieweb.org/Webmention) are the mechanism used for this.

### Commenting on somebody else's site

When one of my posts links somewhere, the "build" process discovers the target's endpoint and notifies it. This is the result: I write [a reply on my own site](https://posts.rauljimenez.info/replies/2026/09/01/9821c), and my comment ends up appearing under [somebody else's original article](https://www.swyx.io/learn-in-public/), without having created an account anywhere.

![On the left, a reply published on posts.rauljimenez.info responding to swyx’s ’Learn In Public’. On the right, that same comment showing up in the Webmentions section of the original article on swyx.io](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-swyx.png)

The regular articles I publish on this blog (using Docusaurus), like this one, are not automated yet, so for them I still have to send the mentions by hand (for now).

That said, no longer with the `curl` from the previous post: I now use [webmention.app](https://webmention.app/), which takes the article's URL, crawls every link in it, works out which ones support Webmentions and notifies them. I am still doing it manually, but once per article instead of once per target.

In fact, that is how the mention from [my previous post](/blog/first-steps-into-the-indieweb) ended up in the footer of [my own links page](https://links.rauljimenez.info/).

![On the left, the article ’First steps into the IndieWeb’ linking to the links page. On the right, links.rauljimenez.info showing that mention in its ’Mentions’ section](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-links.png)

### Receiving and displaying what arrives

For incoming Webmentions I use [webmention.io](https://webmention.io/), a hosted service run by Aaron Parecki, and thanks to it *likes*, *reposts* and replies are now displayed:
- Under the articles on this blog
- Under each post on [posts.rauljimenez.info](https://posts.rauljimenez.info/)
- Under the links on [links.rauljimenez.info](https://links.rauljimenez.info/)

All three domains use [the same widget](https://www.npmjs.com/package/@hhkaos/webmentions-widget) which, because of problems with webmention.io (which I will come back to later), uses a daily "archive" or "snapshot" of the mentions instead of fetching them in real time. After all, I do not get so many visits that anyone will miss it, and what I really want is to be able to keep a copy and unify this presence and interaction.

### Pulling reactions back from social networks

And the piece that closes the loop is [Bridgy](https://brid.gy/). It is connected to Mastodon and Bluesky in *[backfeed](https://indieweb.org/backfeed)* mode only. What it does is make sure that when somebody gives a *like*/*fav*, a *repost*, or replies to one of the copies syndicated on social networks, that reaction travels back (as a Webmention) to my original post. That way the conversation that used to stay inside a single network ends up on my own domain.

Here it is with a real case: [Wojtek Powiertowski](https://mastodon.social/@wojtekpow) favourited on Mastodon [the post announcing my previous article](https://mastodon.social/@hhkaos/117196043964695624), and that heart ended up appearing in [the article's header](/blog/first-steps-into-the-indieweb), on my own site.

![On the right, the Mastodon post announcing ’First steps into the IndieWeb’ with one favourite. On the left, that same favourite shown as ’Reactions from the web’ in the article header on www.rauljimenez.info](/img/blogs/second-steps-into-the-indieweb/backfeed-mastodon-to-blog.png)

Putting all of the previous pieces together, the full journey of, say, a photo looks like this: [I publish it once on my own site](https://posts.rauljimenez.info/photos/2026/09/01/e4bdf/), it gets distributed [to Mastodon](https://mastodon.social/@hhkaos/117198456449142509) and [to Bluesky](https://bsky.app/profile/did:plc:gwbqjf3ciffqeedjrpmjinfo/post/3muimbqf3ik2i), and the reactions those copies receive on social networks travel back to the original version on my site. One place to publish, **one place to unify and read everything people reply**.

![The full journey of a photo post: it is published on posts.rauljimenez.info, distributed to Mastodon and Bluesky, and the likes received on those copies come back as Webmentions to the original post](/img/blogs/second-steps-into-the-indieweb/posse-backfeed-photo.png)

### And the comments too

So far we have only talked about *likes* and *reposts*, but **conversations come back as well**.

For example, when I announced [the talks I am going to give at the next Esri DevTech Summit](https://posts.rauljimenez.info/events/2026/09/01/esri-european-developer-and-technology-summit/) on Mastodon and Bluesky, [Iván Sánchez](https://mastodon.social/@IvanSanchez) asked me a rather good question over on Mastodon, and it turned into a thread of several messages. All of those messages now sit under the event on my own site, in "Responses from around the web", next to the *likes* from Bluesky.

![The full journey of an event post: it is published on posts.rauljimenez.info, distributed to Bluesky and Mastodon, and both the reactions and the comments from the Mastodon thread come back and are displayed under the original event](/img/blogs/second-steps-into-the-indieweb/Indieweb-Event-with-comments.png)

What I like most is that the conversation does not stay only on the platform where it happened: it also ends up archived on the site it came from, which is the only one I actually control.

## Notifications

And how do I find out about all this? Reactions that happen on Mastodon or Bluesky already reach me through their own apps; I do not need to build anything for that. But what about the ones that arrive as a Webmention from somebody else's website — [like the reply I sent to swyx](#commenting-on-somebody-elses-site), only the other way round? There is no app to alert me there: they get stored on webmention.io, they would show up under my post, and I would only find out whenever I went in to look.

> I have to admit that none has arrived from somebody else's site yet... everything I have comes from Bridgy or from myself 😅. But the day one does, I should find out 😜.

That is why I have set the system up so that, for every mention, I get a push notification on my phone and an email (which are my favourite channels). Both come from a webhook that webmention.io calls on a small self-hosted service ([ntfy](https://github.com/binwiederhier/ntfy)), which pushes to the [ntfy Android app](https://play.google.com/store/apps/details?id=io.heckel.ntfy&hl=en) on my phone. Here is what it looks like:

![On the left, push notifications on the phone titled ’New Webmention’ with the author of each reaction. On the right, those same mentions arriving as email, each with its source and target](/img/blogs/second-steps-into-the-indieweb/ntfy-indieweb.png)

## Nothing is foolproof

I think I should say this too. Webmentions are more fragile than I thought, and not because of any particular tool: whoever receives one fetches the source page and checks what it **links to exactly** against the target URL. If it does not match, there is no mention. And "does not match" covers a trailing slash too many, an `http` where it should be `https`, a `www` that is missing or spare, a redirect in the middle, or a path that no longer exists.

It happened to me replying to swyx's article. I had linked to `https://swyx.io/learn-in-public`, which is a perfectly valid URL: you open it in the browser and the article is right there. But the canonical one, the one his site actually publishes, is `https://www.swyx.io/learn-in-public/` — with `www` and with a trailing slash. Two characters of difference and a redirect in the middle were enough to make verification fail and my comment show up nowhere, until I realized and copied the URL exactly as it appears on the original page.

And it keeps happening. Going through what I have published so far, I found six real reactions that never made it to my site, all variations of the same thing: three because the post linked to a page of mine that no longer exists, two because replies on social networks did not link to any page of mine (even though they were part of the conversation), and one that was not shown because Bridgy only collects from the moment you connect the account (although it does offer a *Discover* mechanism to re-check posts).

Not seeing them on my site is one problem, but what "worries" me most is that **I never find out**: notifications only fire when a mention arrives correctly. Nothing warns you about these failures.

On another note, webmention.io has been intermittently returning 502 errors this weekend, which reminded me that the *receiving* half of my setup depends on somebody else's server. So I asked myself whether I should self-host that piece.

After thinking about it for a while, I do not want to take that decision lightly and underestimate the work it could involve: if I did it, I would probably have to worry about spam, uptime and the maintenance of something that so far seems to have worked pretty well, run by people who know far more about this than I do. So for now I have decided to make the display more "resilient", and to keep using this hosted receiver.

## So how do you follow someone on the IndieWeb?

Publishing is nearly complete (I think). On the following side I still have a lot to learn.

From what I have read and seen, [Microsub](https://indieweb.org/Microsub) is what has been created for this, and I am going to explain what problem it solves, because it took me a while to get it 😅.

If we stop to think about it, in feed readers we normally have a client and a server bundled together, which between them let you do several things: manage the sources (RSS, people, ...), but also fetch and display what is new in each source, organize those sources, remember what you have already seen, etc.

With Microsub the separation is clearer:
- **A server** (like [Aperture](https://aperture.p3k.io/)) does the hard work of collecting all kinds of information from the sources: RSS/Atom feeds, the Microformats published on someone's personal site, [Fediverse](https://en.wikipedia.org/wiki/Fediverse) accounts, etc., and it keeps track of what you have already read.
- **A separate reader app** (like [Monocle](https://monocle.p3k.io/) on the web) connects to that server and shows everything as a single timeline. There used to be [IndiePass](https://indieweb.org/IndiePass) as a mobile app, but it is no longer maintained.

One of the advantages of this model is that you can change apps without losing your subscriptions or what you have already read, and another is that there is no platform algorithm deciding for you "what is most relevant", or slipping ads in.

The obvious downside seems to be how volatile some tools in the ecosystem are 😅.

Another key piece of this puzzle is [WebSub](https://indieweb.org/WebSub). Without it, reader clients have to ask "anything new?" every so often, with the well-known consequence of wasted requests and delayed updates.

With WebSub, a site can notify a hub the moment I publish, and the hub pushes it to everyone subscribed ([more info](https://indieweb.org/How_to_publish_and_consume_WebSub)). With this model you can "follow a website" and have it be as immediate as following an account on a social network — interesting, to say the least, isn't it?

In my case I already have the feeds (both RSS and Microformats), but I still have neither the hub nor the reader.

## What's next

> *And what are you going to do next, Raúl?*

I am glad you asked, because I have not got the faintest idea 🤣🤣. I am still working out what I feel like exploring next. Options I am considering:

- **[Microsub](https://indieweb.org/Microsub) and a reader**, to finally read the web the same way I publish to it. Maybe with a [WebSub](https://indieweb.org/WebSub) hub on top of the feeds I already have.
- **A newsletter**, in case anyone is interested in getting what I publish on my site straight in their inbox. Slightly ironic in a post about decentralization... but people read where they read 😅.
- **A browser extension** for platforms whose publishing APIs either do not exist or are restricted (LinkedIn, X, Instagram...). The idea would be for it to make it easy to pull in the content I have already published on my own site and republish it there, even if the last step still has to be done by hand.
- **A personal archive**, which is the other face of POSSE: pulling back what I have been posting on other platforms for years (X, LinkedIn, Google products, ...) and then doing a *[backfill](https://indieweb.org/backfill)* (importing part of that content here). It would also potentially be a way to keep feeding this site (every so often) with content from those platforms that offer no way to import it automatically.

Thanks for reading! I hope you found it interesting and that it helped you understand a bit better how all this IndieWeb stuff works.

If you want to help me, you can give me your opinion: for example, if you have any advice, or you have built something similar and know exactly where I am about to crash, I would appreciate you telling me.

And if you have your own site, I encourage you to reply **from it**: this page advertises its Webmention endpoint, so your response would show up right below. You would be the first person to send me one from their own site, and that would honestly make my day 😜. Otherwise, [Mastodon](https://mastodon.social/@hhkaos) or [Bluesky](https://bsky.app/profile/rauljimenez.info) work fine too.

P.S.: I get the feeling publishing turned out to be "the easy half", and that the other half is where the interesting problems/challenges live 😅.
