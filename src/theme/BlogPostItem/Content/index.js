import React from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';

export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage} = useBlogPost();

  return (
    <div
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', 'e-content', className)}
      itemProp="articleBody">
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
