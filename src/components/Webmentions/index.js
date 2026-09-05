import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Webmentions as WebmentionsWidget} from '@hhkaos/webmentions-widget/react';
import snapshot from '@site/src/data/webmentions.json';
import useWebmentionTargets from './useWebmentionTargets';

// The widget itself lives in https://github.com/hhkaos/webmentions-widget and is
// shared with links.rauljimenez.info and posts.rauljimenez.info. Only the bits
// that depend on Docusaurus — routing, site URL, locale — belong here.
//
// Mentions come from a snapshot refreshed daily by
// .github/workflows/webmentions-snapshot.yml, so a page view costs
// webmention.io nothing and the section survives their outages.
// No "el": the timestamp is relative while the snapshot is fresh, so "el"
// would read as "Actualizado el hace 1 hora".
const UPDATED_LABEL = {
  en: 'Updated',
  es: 'Actualizado',
};

// Verbs read inline after the author's name ("Ana Ruiz respondió · 3 sept"),
// so they are lowercase past tense rather than the widget's English nouns.
const VERBS = {
  en: {
    'like-of': 'liked this',
    'repost-of': 'reposted this',
    'bookmark-of': 'bookmarked this',
    'in-reply-to': 'replied',
    'mention-of': 'mentioned this',
  },
  es: {
    'like-of': 'le gusta esto',
    'repost-of': 'ha compartido esto',
    'bookmark-of': 'ha guardado esto',
    'in-reply-to': 'ha respondido',
    'mention-of': 'ha mencionado esto',
  },
};

const TITLE = {
  en: 'Responses from the web',
  es: 'Respuestas de la web',
};

export default function Webmentions() {
  const targets = useWebmentionTargets();
  const {i18n} = useDocusaurusContext();

  return (
    <WebmentionsWidget
      targets={targets}
      snapshot={snapshot}
      locale={i18n.currentLocale}
      title={TITLE[i18n.currentLocale] || TITLE.en}
      labels={{
        ...(VERBS[i18n.currentLocale] || VERBS.en),
        updated: UPDATED_LABEL[i18n.currentLocale] || UPDATED_LABEL.en,
      }}
      // `.webmentions .container` is what caps the section at 820px.
      innerClassName="container"
    />
  );
}
