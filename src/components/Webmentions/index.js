import React, {useEffect, useMemo, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  fetchWebmentions,
  formatMentionDate,
  getCanonicalTargets,
  getMentionContent,
  getMentionSourceUrl,
  getMentionType,
  groupWebmentions,
} from '@site/src/lib/webmentions';

export default function Webmentions() {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const [groups, setGroups] = useState({interactions: [], threads: []});
  const [status, setStatus] = useState('idle');

  const targets = useMemo(
    () => getCanonicalTargets({
      siteUrl: siteConfig.url,
      pathname: location.pathname,
      i18n: siteConfig.i18n,
    }),
    [siteConfig.url, siteConfig.i18n, location.pathname],
  );

  useEffect(() => {
    const controller = new AbortController();

    setStatus('loading');

    fetchWebmentions({
      targets,
      signal: controller.signal,
    })
      .then((mentions) => {
        setGroups(groupWebmentions(mentions));
        setStatus('success');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, [targets]);

  if (status !== 'success' || (!groups.interactions.length && !groups.threads.length)) {
    return null;
  }

  return (
    <aside className="webmentions" aria-labelledby="webmentions-title">
      <div className="container">
        <h2 id="webmentions-title">Webmentions</h2>
        {groups.interactions.length > 0 ? (
          <ol className="webmentions-facepile" aria-label="Reactions">
            {groups.interactions.map((mention) => {
              const author = mention.author || {};
              const sourceUrl = mention.url || mention['wm-source'] || author.url;

              return (
                <li className="webmention-facepile-item" key={mention['wm-id'] || sourceUrl}>
                  <a
                    className="webmention-facepile-link"
                    href={sourceUrl}
                    rel="nofollow noopener"
                    target="_blank"
                    title={`${author.name || 'Someone'} - ${getMentionType(mention)}`}>
                    {author.photo ? (
                      <img
                        className="webmention-facepile-photo"
                        src={author.photo}
                        alt=""
                        loading="lazy"
                        width="32"
                        height="32"
                      />
                    ) : (
                      <span aria-hidden="true">{(author.name || '?').slice(0, 1)}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ol>
        ) : null}
        {groups.threads.length > 0 ? (
          <ol className="webmentions-list">
            {groups.threads.map((mention) => {
              const author = mention.author || {};
              const published = mention.published || mention['wm-received'];
              const formattedDate = formatMentionDate(published);
              const content = getMentionContent(mention);
              const sourceUrl = getMentionSourceUrl(mention, content);

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
                        href={sourceUrl || author.url}
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
                      <a className="u-url webmention-source" href={sourceUrl}>
                        {mention.url}
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </aside>
  );
}
