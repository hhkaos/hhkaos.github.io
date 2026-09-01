import React, {useEffect, useMemo, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const WEBMENTION_API_URL = 'https://webmention.io/api/mentions.jf2';

function getMentionType(mention) {
  if (mention['wm-property'] === 'like-of') {
    return 'Like';
  }

  if (mention['wm-property'] === 'repost-of') {
    return 'Repost';
  }

  if (mention['wm-property'] === 'bookmark-of') {
    return 'Bookmark';
  }

  if (mention['wm-property'] === 'in-reply-to') {
    return 'Reply';
  }

  return 'Mention';
}

function getCanonicalTargets(siteUrl, pathname) {
  const url = new URL(pathname, siteUrl);
  url.hash = '';
  url.search = '';

  const hosts = url.hostname.startsWith('www.')
    ? [url.hostname, url.hostname.replace(/^www\./, '')]
    : [url.hostname, `www.${url.hostname}`];

  return [...new Set(hosts.flatMap((hostname) => {
    const targetUrl = new URL(url.toString());
    targetUrl.hostname = hostname;

    const canonicalUrl = targetUrl.toString();

    if (targetUrl.pathname === '/') {
      return [canonicalUrl];
    }

    const withoutSlash = canonicalUrl.replace(/\/$/, '');
    const withSlash = `${withoutSlash}/`;

    return [withoutSlash, withSlash];
  }))];
}

function formatDate(date) {
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export default function Webmentions() {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const [mentions, setMentions] = useState([]);
  const [status, setStatus] = useState('idle');

  const targets = useMemo(
    () => getCanonicalTargets(siteConfig.url, location.pathname),
    [siteConfig.url, location.pathname],
  );

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      'per-page': '20',
      'sort-by': 'published',
      'sort-dir': 'down',
    });

    targets.forEach((target) => params.append('target[]', target));

    setStatus('loading');

    fetch(`${WEBMENTION_API_URL}?${params.toString()}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Webmention.io responded with ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setMentions(Array.isArray(data.children) ? data.children : []);
        setStatus('success');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, [targets]);

  if (status !== 'success' || mentions.length === 0) {
    return null;
  }

  return (
    <aside className="webmentions" aria-labelledby="webmentions-title">
      <div className="container">
        <h2 id="webmentions-title">Webmentions</h2>
        <ol className="webmentions-list">
          {mentions.map((mention) => {
            const author = mention.author || {};
            const published = mention.published || mention['wm-received'];
            const formattedDate = published ? formatDate(new Date(published)) : null;
            const content = mention.content?.text;

            return (
              <li className="h-cite webmention" key={mention['wm-id'] || mention.url}>
                {author.photo ? (
                  <img
                    className="webmention-photo"
                    src={author.photo}
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                ) : null}
                <div className="webmention-body">
                  <p className="webmention-meta">
                    <a
                      className="p-author h-card u-url"
                      href={author.url || mention.url}
                      rel="nofollow noopener"
                      target="_blank">
                      <span className="p-name">{author.name || mention.url}</span>
                    </a>{' '}
                    <span>{getMentionType(mention)}</span>
                    {formattedDate ? (
                      <time className="dt-published" dateTime={published}>
                        {' '}· {formattedDate}
                      </time>
                    ) : null}
                  </p>
                  {content ? <p className="e-content webmention-content">{content}</p> : null}
                  {mention.url ? (
                    <a className="u-url webmention-source" href={mention.url}>
                      {mention.url}
                    </a>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}
