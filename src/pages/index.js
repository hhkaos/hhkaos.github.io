import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

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
    href: 'https://mastodon.social/@hhkaos',
    alt: 'Raúl Jiménez Ortega Mastodon',
    badgeUrl: 'https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white',
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
  sameAs: [...socialProfiles.map(({href}) => href), linksProfile.href],
};

const organizations = [
  {
    name: 'Esri',
    href: 'https://www.esri.com/',
  },
  {
    name: 'GeoDevelopers',
    href: 'https://www.youtube.com/geo-developers',
  },
  {
    name: 'Community Builders',
    href: 'https://communitybuilders.dev/',
  },
  {
    name: 'GeoVoluntarios',
    href: 'https://www.youtube.com/watch?v=okN5qpQegiQ',
  },
];

const communityMetrics = [
  {
    value: '26+',
    label: {
      en: 'years involved in communities',
      es: 'años participando en comunidades',
    },
  },
  {
    value: '16',
    label: {
      en: 'communities & organizations',
      es: 'comunidades y organizaciones',
    },
  },
  {
    value: '9',
    label: {
      en: 'founded or co-founded',
      es: 'fundadas o cofundadas',
    },
  },
];

const featuredLinks = [
  {
    title: {
      en: 'Open culture',
      es: 'Cultura abierta',
    },
    description: {
      en: 'Communities, open knowledge, and the trail of projects that shaped how I work.',
      es: 'Comunidades, conocimiento abierto y proyectos que han marcado mi forma de trabajar.',
    },
    href: '/docs/about-me/open-culture',
  },
  {
    title: {
      en: 'Public speaking',
      es: 'Charlas',
    },
    description: {
      en: 'Talks, workshops, and conference material gathered over the years.',
      es: 'Charlas, talleres y material de conferencias recopilado a lo largo de los años.',
    },
    href: '/docs/about-me/public-speaking',
  },
  {
    title: {
      en: 'Digital brain',
      es: 'Cerebro digital',
    },
    description: {
      en: 'Notes, resources, and references I keep open instead of leaving them in a drawer.',
      es: 'Notas, recursos y referencias que prefiero mantener abiertas antes que dejarlas en un cajón.',
    },
    href: '/docs/digital-brain',
  },
];

const localizedContent = {
  en: {
    notePrefix: 'Principal Product Engineer (Developer Relations) at ',
    noteSuffix: '. I work where geospatial technology, developer communities, and open knowledge meet.',
    context: 'I like building useful things, connecting people who can help each other, and sharing what I learn along the way.',
    description: 'Raúl Jiménez Ortega is Principal Product Engineer (Developer Relations) at Esri, founder of GeoDevelopers, co-founder of Community Builders, and an open knowledge advocate with 26+ years in technical communities.',
    communityTitle: 'Community journey',
    communityText: 'I started helping people in IRC and hacking forums, later joined the Free Software Office, helped launch one of the first GDGs in Spain, and kept creating collaborative spaces around open culture.',
    communityBuildersPrefix: 'Today I am helping grow ',
    communityBuildersSuffix: ', a meta-community of community leaders.',
    startHere: 'Start here',
    social: 'You can find me in:',
  },
  es: {
    notePrefix: 'Principal Product Engineer (Developer Relations) en ',
    noteSuffix: '. Trabajo en el punto donde se encuentran la tecnología geoespacial, las comunidades de desarrolladores y el conocimiento abierto.',
    context: 'Me gusta construir cosas útiles, conectar a personas que pueden ayudarse entre sí y compartir lo que voy aprendiendo por el camino.',
    description: 'Raúl Jiménez Ortega es Principal Product Engineer (Developer Relations) en Esri, fundador de GeoDevelopers, cofundador de Community Builders y defensor del conocimiento abierto, con más de 26 años en comunidades técnicas.',
    communityTitle: 'Trayectoria en comunidades',
    communityText: 'Empecé ayudando a otras personas en IRC y foros de hacking, después participé en la Oficina de Software Libre, ayudé a lanzar uno de los primeros GDGs en España y seguí creando espacios colaborativos alrededor de la cultura abierta.',
    communityBuildersPrefix: 'Actualmente impulso ',
    communityBuildersSuffix: ', una metacomunidad de community leaders.',
    startHere: 'Empieza aquí',
    social: 'Puedes encontrarme en:',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${profile.url}#me`,
  name: profile.name,
  url: profile.url,
  image: profile.photo,
  description: localizedContent.en.description,
  jobTitle: 'Principal Product Engineer, Developer Relations',
  worksFor: {
    '@type': 'Organization',
    name: 'Esri',
    url: 'https://www.esri.com/',
  },
  affiliation: organizations.map(({name, href}) => ({
    '@type': 'Organization',
    name,
    url: href,
  })),
  knowsAbout: [
    'Developer Relations',
    'Community building',
    'Geospatial technology',
    'Developer communities',
    'Open knowledge',
    'Parenting',
  ],
  sameAs: profile.sameAs,
};

function HomepageHeader() {
  const photoUrl = useBaseUrl('/img/hhkaos-raul-jimenez-ortega.jpeg');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className="u-photo rounded img-medium"
          src={photoUrl}
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
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'es' ? 'es' : 'en';
  const content = localizedContent[locale];

  return (
    <Layout
      title={profile.name}
      description={content.description}>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Raul Jimenez posts RSS feed"
          href="https://posts.rauljimenez.info/feed.xml"
        />
        <script type="application/ld+json">
          {JSON.stringify({...personJsonLd, description: content.description})}
        </script>
      </Head>
      <div className="h-card">
        <HomepageHeader />
        <main className={styles.homeMain}>
          <section className={styles.intro}>
            <h1>
              <a className="p-name u-url" href={profile.url}>
                {profile.name}
              </a>
            </h1>
            <p className={clsx('p-note', styles.lede)}>
              {content.notePrefix}
              <a href="https://www.esri.com/">Esri</a>
              {content.noteSuffix}
            </p>
            <p className={styles.context}>{content.context}</p>
          </section>

          <section className={styles.communityJourney} aria-labelledby="community-journey">
            <div>
              <h2 id="community-journey">{content.communityTitle}</h2>
              <p>
                {content.communityText} {content.communityBuildersPrefix}
                <a href="https://communitybuilders.dev/">Community Builders</a>
                {content.communityBuildersSuffix}
              </p>
            </div>
            <dl className={styles.metrics}>
              {communityMetrics.map(({value, label}) => (
                <div key={value}>
                  <dt>{value}</dt>
                  <dd>{label[locale]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.pathways} aria-labelledby="start-here">
            <h2 id="start-here">
              {content.startHere}
            </h2>
            <div className={styles.pathwayGrid}>
              {featuredLinks.map(({title, description, href}) => (
                <Link className={styles.pathway} to={href} key={href}>
                  <strong>{title[locale]}</strong>
                  <span>{description[locale]}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className={clsx('center mt1 social-logos', styles.socialBlock)} aria-label="Social profiles">
            <p>{content.social}</p>
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
          </section>
        </main>
      </div>
    </Layout>
  );
}
