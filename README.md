# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Development

`npm run start`

### Translations

* Update the locale strings files: `npm run write-translations -- --locale es`
* Run the website in Spanish: `npm run start -- --locale es`

### Comments

Comments are pending a replacement for giscus — see
[issue #8](https://github.com/hhkaos/hhkaos.github.io/issues/8) (Remark42, no GitHub
account required).

Once implemented, comments are on by default on every blog post and doc page.
To turn them off on a single page, add to its front matter:

```yaml
comments: false
```

Reactions received from other sites (likes, reposts, replies) are a separate
thing and are always shown: see `src/components/Webmentions`.

### Add TOC in blog articles

Use: `npm run doctoc` and the index.md file will create or update the TOC.


### Deployment

To make sure the web Git
`npm run docusaurus build`