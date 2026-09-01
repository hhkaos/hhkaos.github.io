import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';

function stripLeadingSymbols(value) {
  return String(value || '').replace(/^[^A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]+/, '').trim();
}

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { siteConfig } = useDocusaurusContext();

  const { frontMatter, permalink, date, title, description } = metadata
  const { enableComments } = frontMatter
  const canonicalUrl = permalink ? new URL(permalink, siteConfig.url).toString() : null
  const semanticTitle = stripLeadingSymbols(title)
  const summary = description || frontMatter.description || semanticTitle

  return (
    <>
      <article className="h-entry">
        <meta className="p-name" content={semanticTitle} />
        {canonicalUrl ? <link className="u-url" href={canonicalUrl} /> : null}
        {date ? <time className="dt-published" dateTime={date} /> : null}
        <span className="p-author h-card" hidden>
          <a className="p-name u-url" href="https://www.rauljimenez.info/">
            Raúl Jiménez Ortega
          </a>
        </span>
        {summary ? <p className="e-content" hidden>{summary}</p> : null}
        <BlogPostItem {...props} />
      </article>
      {(enableComments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}
