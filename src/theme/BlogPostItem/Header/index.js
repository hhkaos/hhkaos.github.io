import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Header from '@theme-original/BlogPostItem/Header';
import WebmentionsSummary from '@site/src/components/Webmentions/Summary';

export default function HeaderWrapper(props) {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      <Header {...props} />
      {isBlogPostPage && <WebmentionsSummary />}
    </>
  );
}
