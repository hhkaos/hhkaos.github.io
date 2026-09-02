import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Twitter from '@theme/Icon/Socials/Twitter';
import GitHub from '@theme/Icon/Socials/GitHub';
import X from '@theme/Icon/Socials/X';
import StackOverflow from '@theme/Icon/Socials/StackOverflow';
import LinkedIn from '@theme/Icon/Socials/LinkedIn';
import DefaultSocialIcon from '@theme/Icon/Socials/Default';
import Bluesky from '@theme/Icon/Socials/Bluesky';
import Instagram from '@theme/Icon/Socials/Instagram';
import Threads from '@theme/Icon/Socials/Threads';
import Youtube from '@theme/Icon/Socials/YouTube';
import Mastodon from '@theme/Icon/Socials/Mastodon';
import Twitch from '@theme/Icon/Socials/Twitch';
import Email from '@theme/Icon/Socials/Email';
import styles from './styles.module.css';

function IndieWeb(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      role="img"
      {...props}>
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="1.6" fill="#fff" />
      <rect x="4" y="4" width="7" height="16" fill="#ffb100" />
      <text x="7.5" y="15.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#111">
        I
      </text>
      <text x="16.8" y="15.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#111">
        W
      </text>
    </svg>
  );
}

const SocialPlatformConfigs = {
  twitter: {Icon: Twitter, label: 'Twitter'},
  github: {Icon: GitHub, label: 'GitHub'},
  stackoverflow: {Icon: StackOverflow, label: 'Stack Overflow'},
  linkedin: {Icon: LinkedIn, label: 'LinkedIn'},
  x: {Icon: X, label: 'X'},
  bluesky: {Icon: Bluesky, label: 'Bluesky'},
  instagram: {Icon: Instagram, label: 'Instagram'},
  threads: {Icon: Threads, label: 'Threads'},
  mastodon: {Icon: Mastodon, label: 'Mastodon'},
  youtube: {Icon: Youtube, label: 'YouTube'},
  twitch: {Icon: Twitch, label: 'Twitch'},
  email: {Icon: Email, label: 'Email'},
  indieweb: {Icon: IndieWeb, label: 'IndieWeb posts'},
};

function getSocialPlatformConfig(platformKey) {
  return (
    SocialPlatformConfigs[platformKey] ?? {
      Icon: DefaultSocialIcon,
      label: platformKey,
    }
  );
}

function SocialLink({platform, link}) {
  const {Icon, label} = getSocialPlatformConfig(platform);
  return (
    <Link className={styles.authorSocialLink} href={link} title={label} aria-label={label}>
      <Icon className={clsx(styles.authorSocialIcon)} />
    </Link>
  );
}

export default function BlogAuthorSocials({author}) {
  const entries = Object.entries(author.socials ?? {});
  return (
    <div className={styles.authorSocials}>
      {entries.map(([platform, linkUrl]) => (
        <SocialLink key={platform} platform={platform} link={linkUrl} />
      ))}
    </div>
  );
}
