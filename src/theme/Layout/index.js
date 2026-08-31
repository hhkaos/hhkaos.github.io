import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Webmentions from '@site/src/components/Webmentions';

export default function Layout(props) {
  return (
    <OriginalLayout {...props}>
      {props.children}
      <Webmentions />
    </OriginalLayout>
  );
}
