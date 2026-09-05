import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useWebmentions} from '@hhkaos/webmentions-widget/react';
import snapshot from '@site/src/data/webmentions.json';
import useWebmentionTargets from './useWebmentionTargets';

// Faces per group before the count alone carries the rest.
const MAX_FACES = 3;

// One counter per reaction type — the old share-counter / like-box shape:
// a few faces, an icon, a number.
const GROUPS = [
  {key: 'like-of', icon: '❤️', labels: {en: ['like', 'likes'], es: ['me gusta', 'me gusta']}},
  {key: 'repost-of', icon: '🔁', labels: {en: ['repost', 'reposts'], es: ['compartido', 'compartidos']}},
  {key: 'bookmark-of', icon: '🔖', labels: {en: ['bookmark', 'bookmarks'], es: ['guardado', 'guardados']}},
  {key: 'thread', icon: '💬', labels: {en: ['response', 'responses'], es: ['respuesta', 'respuestas']}},
];

// The strip is a chip, not decoration: it needs to say what it is counting.
const HEADING = {
  en: 'Reactions from the web',
  es: 'Reacciones desde la web',
};

function getLabel(group, count, locale) {
  const [singular, plural] = group.labels[locale] || group.labels.en;

  return `${count} ${count === 1 ? singular : plural}`;
}

function Face({mention}) {
  const author = mention.author || {};

  return (
    <li className="webmentions-summary-item">
      {author.photo ? (
        <img
          className="webmentions-summary-photo"
          src={author.photo}
          alt=""
          title={author.name || undefined}
          loading="lazy"
          width={28}
          height={28}
        />
      ) : (
        <span className="webmentions-summary-photo webmentions-summary-initial" aria-hidden="true">
          {(author.name || '?').slice(0, 1).toUpperCase()}
        </span>
      )}
    </li>
  );
}

function Counter({group, mentions, locale}) {
  const label = getLabel(group, mentions.length, locale);

  return (
    <span className="webmentions-summary-group" title={label}>
      {mentions.length ? (
        <ol className="webmentions-summary-facepile" aria-hidden="true">
          {mentions.slice(0, MAX_FACES).map((mention) => (
            <Face key={mention['wm-id'] || mention.url || mention['wm-source']} mention={mention} />
          ))}
        </ol>
      ) : null}
      <span className="webmentions-summary-icon" aria-hidden="true">{group.icon}</span>
      <span className="webmentions-summary-count" aria-hidden="true">{mentions.length}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

/**
 * A row of per-type reaction counters for the post header, linking down to the
 * full section. Reads the same snapshot as `<Webmentions />`, so it costs no
 * extra request and never disagrees with the list below.
 */
export default function WebmentionsSummary() {
  const targets = useWebmentionTargets();
  const {i18n} = useDocusaurusContext();
  const {status, groups} = useWebmentions(targets, {snapshot});

  if (status !== 'success' || !groups.total) {
    return null;
  }

  const counters = GROUPS
    .map((group) => ({
      group,
      mentions: group.key === 'thread' ? groups.threads : groups.byProperty[group.key] || [],
    }))
    .filter(({mentions}) => mentions.length > 0);

  return (
    <a className="webmentions-summary" href="#webmentions-title-heading">
      <span className="webmentions-summary-label">{HEADING[i18n.currentLocale] || HEADING.en}</span>
      {counters.map(({group, mentions}) => (
        <Counter key={group.key} group={group} mentions={mentions} locale={i18n.currentLocale} />
      ))}
      <span className="webmentions-summary-jump" aria-hidden="true">›</span>
    </a>
  );
}
