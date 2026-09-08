import React, {useEffect, useMemo} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function NowRedirect() {
  const {i18n} = useDocusaurusContext();
  const target = useMemo(() => {
    if (i18n.currentLocale === 'es') {
      return '/es/docs/about-me/now';
    }

    return '/docs/about-me/now';
  }, [i18n.currentLocale]);
  const canonicalUrl = `https://www.rauljimenez.info${target}`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <Layout title="Now" description="What Raúl Jiménez Ortega is focused on now.">
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className="container margin-vert--lg">
        <h1>Now</h1>
        <p>
          Redirecting to <Link to={target}>my now page</Link>.
        </p>
      </main>
    </Layout>
  );
}
