import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from '@theme-original/BlogPostItem';
import Webmentions from '@site/src/components/Webmentions';

const author = {
  name: 'Raúl Jiménez Ortega',
  url: 'https://www.rauljimenez.info/',
  photo: 'https://www.rauljimenez.info/img/hhkaos-raul-jimenez-ortega.jpeg',
};

function stripLeadingSymbols(value) {
  return String(value || '').replace(/^[^A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]+/, '').trim();
}

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { siteConfig } = useDocusaurusContext();

  const { permalink, date, title } = metadata
  const canonicalUrl = permalink ? new URL(permalink, siteConfig.url).toString() : null
  const semanticTitle = stripLeadingSymbols(title)

  return (
    <>
      <article className="h-entry">
        <meta className="p-name" content={semanticTitle} />
        {canonicalUrl ? <link className="u-url" href={canonicalUrl} /> : null}
        {date ? <time className="dt-published" dateTime={date} /> : null}
        <span className="p-author h-card" hidden>
          <img className="u-photo" src={author.photo} alt="" />
          <a className="p-name u-url" href={author.url}>
            {author.name}
          </a>
        </span>
        <BlogPostItem {...props} />
      </article>
      {/* Here rather than in the Layout so the section lands above the
          previous/next pagination, where the comments used to be. */}
      {isBlogPostPage && <Webmentions />}
    </>
  );
}
