import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
require('@site/static/img/undraw_docusaurus_react.svg').default
import HhkaosImageUrl from '@site/static/img/hhkaos-raul-jimenez-ortega.jpeg';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="rounded img-medium" src={HhkaosImageUrl} alt="Raul Jimenez photography"/>
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
      <HomepageHeader />
      <main className='center mt1 social-logos'>
        <p><Translate>You can find me in:</Translate></p>
        <p className='social-icons'>
        <a href="https://www.linkedin.com/in/jimenezortegaraul/" rel="nofollow">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="Raúl Jimenez Ortega Linkedin" data-canonical-src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" />
        </a>
        <a href="https://x.com/hhkaos" rel="nofollow">
          <img src="https://img.shields.io/badge/x-000000?style=for-the-badge&logo=x&logoColor=white&label=(former%20Twitter)" alt="Raúl Jiménez Ortega X" data-canonical-src="https://img.shields.io/badge/x-000000?style=for-the-badge&logo=x&logoColor=white&label=(former%20Twitter)" />
        </a>
        <a href="https://bsky.app/profile/rauljimenez.info" rel="nofollow">
          <img src="https://img.shields.io/badge/bluesky-0285FF?style=for-the-badge&logo=bluesky&logoColor=white" alt="Raúl Jiménez Ortega Bluesky" data-canonical-src="https://img.shields.io/badge/bluesky-0285FF?style=for-the-badge&logo=bluesky&logoColor=white" />
        </a>
        <a href="https://github.com/hhkaos">
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white&amp;labelColor=101010" alt="GitHub" data-canonical-src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white&amp;labelColor=101010" />
        </a>
        <a href="https://www.youtube.com/hhkaos" rel="nofollow">
          <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" alt="Raúl Jimenez Ortega YouTube" data-canonical-src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" />
        </a>
        <a href="https://sessionize.com/hhkaos/" rel="nofollow">
          <img src="https://img.shields.io/badge/sessionize-1AB394?style=for-the-badge&amp;logo=sessionize&amp;logoColor=white" alt="Raúl Jimenez Ortega Sessionize" data-canonical-src="https://img.shields.io/badge/sessionize-1AB394?style=for-the-badge&amp;logo=sessionize&amp;logoColor=white" />
        </a>
        <a href="https://dev.to/hhkaos" rel="nofollow">
          <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&amp;logo=dev.to&amp;logoColor=white" alt="Raúl Jimenez Ortega Dev.to" data-canonical-src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&amp;logo=dev.to&amp;logoColor=white" />
        </a>
        <a href="https://stackoverflow.com/users/3541972/hhkaos" rel="nofollow">
          <img src="https://img.shields.io/badge/StackOverflow-F48024?style=for-the-badge&amp;logo=stackoverflow&amp;logoColor=white" alt="Raúl Jimenez Ortega StackOverflow" data-canonical-src="https://img.shields.io/badge/StackOverflow-F48024?style=for-the-badge&amp;logo=stackoverflow&amp;logoColor=white" />
        </a>
        <a href="https://www.twitch.tv/hhkaos_" rel="nofollow">
          <img src="https://img.shields.io/badge/Twitch-6441A4?style=for-the-badge&amp;logo=twitch&amp;logoColor=white" alt="Raúl Jimenez Ortega Twitch" data-canonical-src="https://img.shields.io/badge/Twitch-6441A4?style=for-the-badge&amp;logo=twitch&amp;logoColor=white" />
        </a>
        
      </p>
      </main>
    </Layout>
  );
}
