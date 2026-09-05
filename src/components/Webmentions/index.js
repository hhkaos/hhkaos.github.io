import React, {useMemo} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {getCanonicalTargets} from '@hhkaos/webmentions-widget/core';
import {Webmentions as WebmentionsWidget} from '@hhkaos/webmentions-widget/react';

// The widget itself lives in https://github.com/hhkaos/webmentions-widget and is
// shared with links.rauljimenez.info and posts.rauljimenez.info. Only the bits
// that depend on Docusaurus — routing, site URL, locale — belong here.
export default function Webmentions() {
  const location = useLocation();
  const {siteConfig, i18n} = useDocusaurusContext();

  const targets = useMemo(
    () => getCanonicalTargets({
      siteUrl: siteConfig.url,
      pathname: location.pathname,
      i18n: siteConfig.i18n,
    }),
    [siteConfig.url, siteConfig.i18n, location.pathname],
  );

  return (
    <WebmentionsWidget
      targets={targets}
      locale={i18n.currentLocale}
      // `.webmentions .container` is what caps the section at 820px.
      innerClassName="container"
    />
  );
}
