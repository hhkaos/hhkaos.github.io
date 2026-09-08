import React, {useEffect, useMemo} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function UsesRedirect() {
  const {i18n} = useDocusaurusContext();
  const target = useMemo(() => {
    if (i18n.currentLocale === 'es') {
      return '/es/docs/about-me/uses';
    }

    return '/docs/about-me/uses';
  }, [i18n.currentLocale]);
  const canonicalUrl = `https://www.rauljimenez.info${target}`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <Layout title="Uses" description="Tools, hardware, software, and setup used by Raúl Jiménez Ortega.">
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className="container margin-vert--lg">
        <h1>Uses</h1>
        <p>
          Redirecting to <Link to={target}>my uses page</Link>.
        </p>
      </main>
    </Layout>
  );
}
