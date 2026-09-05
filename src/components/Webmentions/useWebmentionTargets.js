import {useMemo} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {getCanonicalTargets} from '@hhkaos/webmentions-widget/core';

// The targets for the page being rendered. Shared by the full section and by
// the summary in the post header so both always describe the same page.
export default function useWebmentionTargets() {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();

  return useMemo(
    () => getCanonicalTargets({
      siteUrl: siteConfig.url,
      pathname: location.pathname,
      i18n: siteConfig.i18n,
    }),
    [siteConfig.url, siteConfig.i18n, location.pathname],
  );
}
