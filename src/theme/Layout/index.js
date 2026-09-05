import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useRouteContext from '@docusaurus/useRouteContext';
import Webmentions from '@site/src/components/Webmentions';

export default function Layout(props) {
  // Blog routes mount the section themselves, inside the post and above the
  // pagination (see src/theme/BlogPostItem). Everywhere else it goes last.
  const {plugin} = useRouteContext();
  const isBlogRoute = plugin?.name === 'docusaurus-plugin-content-blog';

  return (
    <OriginalLayout {...props}>
      {props.children}
      {!isBlogRoute && <Webmentions />}
    </OriginalLayout>
  );
}
