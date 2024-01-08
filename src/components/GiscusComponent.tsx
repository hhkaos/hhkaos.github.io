import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <div id="comments">
      <Giscus    
        repo="hhkaos/hhkaos.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkyODA0Nzg4MQ"
        category="General"
        categoryId="DIC_kwDOAav6Cc4CWZRQ"  // E.g. id of "General"
        mapping="url"                 // Important! To map comments to URL
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    </div>
  );
}