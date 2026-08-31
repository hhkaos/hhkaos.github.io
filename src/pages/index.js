import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
require('@site/static/img/undraw_docusaurus_react.svg').default
import HhkaosImageUrl from '@site/static/img/hhkaos-raul-jimenez-ortega.jpeg';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

const socialProfiles = [
  {
    href: 'https://www.linkedin.com/in/jimenezortegaraul/',
    alt: 'Raúl Jiménez Ortega Linkedin',
    badgeUrl: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
    rel: 'me nofollow',
  },
  {
    href: 'https://bsky.app/profile/rauljimenez.info',
    alt: 'Raúl Jiménez Ortega Bluesky',
    badgeUrl: 'https://img.shields.io/badge/bluesky-0285FF?style=for-the-badge&logo=bluesky&logoColor=white',
    rel: 'me nofollow',
  },
  {
    href: 'https://github.com/hhkaos',
    alt: 'GitHub',
    badgeUrl: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=101010',
    rel: 'me',
  },
  {
    href: 'https://www.youtube.com/hhkaos',
    alt: 'Raúl Jiménez Ortega YouTube',
    badgeUrl: 'https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white',
    rel: 'me nofollow',
  },
  {
    href: 'https://sessionize.com/hhkaos/',
    alt: 'Raúl Jiménez Ortega Sessionize',
    badgeUrl: 'https://img.shields.io/badge/sessionize-1AB394?style=for-the-badge&logo=sessionize&logoColor=white',
    rel: 'me nofollow',
  },
];

const linksProfile = {
  href: 'https://links.rauljimenez.info/',
  alt: 'Raúl Jiménez Ortega links',
  badgeUrl: 'https://img.shields.io/badge/More%20profiles-555555?style=for-the-badge&logo=linktree&logoColor=white',
  rel: 'me',
};

const profile = {
  name: 'Raúl Jiménez Ortega',
  url: 'https://www.rauljimenez.info/',
  photo: 'https://www.rauljimenez.info/img/hhkaos-raul-jimenez-ortega.jpeg',
  note: 'Principal Product Engineer, DevRel @ Esri',
  sameAs: [...socialProfiles.map(({href}) => href), linksProfile.href],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${profile.url}#me`,
  name: profile.name,
  url: profile.url,
  image: profile.photo,
  jobTitle: 'Principal Product Engineer, Developer Relations',
  worksFor: {
    '@type': 'Organization',
    name: 'Esri',
    url: 'https://www.esri.com/',
  },
  sameAs: profile.sameAs,
};

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className="u-photo rounded img-medium"
          src={HhkaosImageUrl}
          alt="Raúl Jiménez Ortega"
        />
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Go to my digital brain 🧠
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This website contain my digital brain">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </Head>
      <div className="h-card">
        <HomepageHeader />
        <main className='center mt1 social-logos'>
          <h1>
            <a className="p-name u-url" href={profile.url}>
              {profile.name}
            </a>
          </h1>
          <p className="p-note">{profile.note}</p>
          <p><Translate>You can find me in:</Translate></p>
          <p className='social-icons'>
            {socialProfiles.map(({href, alt, badgeUrl, rel}) => (
              <a className="u-url" href={href} rel={rel} key={href}>
                <img src={badgeUrl} alt={alt} data-canonical-src={badgeUrl} />
              </a>
            ))}
          </p>
          <p>
            <a className="u-url" href={linksProfile.href} rel={linksProfile.rel}>
              <img
                src={linksProfile.badgeUrl}
                alt={linksProfile.alt}
                data-canonical-src={linksProfile.badgeUrl}
              />
            </a>
          </p>
          <p>
            <Translate>More profiles and links are available there.</Translate>
          </p>
        </main>
      </div>
    </Layout>
  );
}
