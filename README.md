# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Development

`npm run start`

### Translations

* Update the locale strings files: `npm run write-translations -- --locale es`
* Run the website in Spanish: `npm run start -- --locale es`

### Enable comments

To enable GISCUS:

In blog articles add: `enableComments: true` to the header

In the docs add the component like this:

```js
import GiscusComponent from '@site/src/components/GiscusComponent';

<GiscusComponent></GiscusComponent>
```

### Add TOC in blog articles

Use: `npm run doctoc` and the index.md file will create or update the TOC.


### Deployment

To make sure the web Git
`npm run docusaurus build`