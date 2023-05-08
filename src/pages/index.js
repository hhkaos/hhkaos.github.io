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
      <main className='center mt1'>
        <p><Translate>You can find me in:</Translate></p>
        <p className='social-icons'>
        <a href="https://twitter.com/hhkaos" rel="nofollow">
          <img src="https://camo.githubusercontent.com/5d03c86f6a75f7cbe80d135d9162fbf6dc46a31253cf30a8e9bb8279b4d574d3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547769747465722d3144413146323f7374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572266c6f676f436f6c6f723d7768697465" alt="René Rubalcava Twitter" data-canonical-src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&amp;logo=twitter&amp;logoColor=white" />
        </a>
        <a href="https://www.youtube.com/hhkaos" rel="nofollow">
          <img src="https://camo.githubusercontent.com/d79c5549652f9c7690992eb49571d216a70a480681561cbd93bfbfc77c491e54/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75547562652d4646303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d796f7574756265266c6f676f436f6c6f723d7768697465" alt="René Rubalcava YouTube" data-canonical-src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" />
        </a>
        <a href="https://www.twitch.tv/hhkaos_" rel="nofollow">
          <img src="https://camo.githubusercontent.com/b20b01f840eedc8242362f038807811519d27b6e196418339646a188cdcf546b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5477697463682d3634343141343f7374796c653d666f722d7468652d6261646765266c6f676f3d747769746368266c6f676f436f6c6f723d7768697465" alt="René Rubalcava Twitch" data-canonical-src="https://img.shields.io/badge/Twitch-6441A4?style=for-the-badge&amp;logo=twitch&amp;logoColor=white" />
        </a>
        <a href="https://www.linkedin.com/in/jimenezortegaraul/" rel="nofollow">
          <img src="https://camo.githubusercontent.com/a80d00f23720d0bc9f55481cfcd77ab79e141606829cf16ec43f8cacc7741e46/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d3030373742353f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="René Rubalcava Linkedin" data-canonical-src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" />
        </a>
        <a href="https://stackoverflow.com/users/3541972/hhkaos" rel="nofollow">
          <img src="https://camo.githubusercontent.com/85d2cf964c0f89eea92af0345b3aecb87c098f2ba5324f8617f5486adffe0c32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f537461636b4f766572666c6f772d4634383032343f7374796c653d666f722d7468652d6261646765266c6f676f3d737461636b6f766572666c6f77266c6f676f436f6c6f723d7768697465" alt="René Rubalcava StackOverflow" data-canonical-src="https://img.shields.io/badge/StackOverflow-F48024?style=for-the-badge&amp;logo=stackoverflow&amp;logoColor=white" />
        </a>
        <a href="https://dev.to/hhkaos" rel="nofollow">
          <img src="https://camo.githubusercontent.com/a9a2d68ad493ff831774f24528ff151a3fd455c80122dcaa44af2475300b51b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6465762e746f2d3041304130413f7374796c653d666f722d7468652d6261646765266c6f676f3d6465762e746f266c6f676f436f6c6f723d7768697465" alt="René Rubalcava Dev.to" data-canonical-src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&amp;logo=dev.to&amp;logoColor=white" />
        </a>
      </p>
      </main>
    </Layout>
  );
}
