import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';

const ACTIVITY_URLS = {
  es: 'https://posts.rauljimenez.info/?lang=es',
};

export default function ActivityNavbarItem({type, ...props}) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  return (
    <DefaultNavbarItem
      {...props}
      href={ACTIVITY_URLS[currentLocale] || 'https://posts.rauljimenez.info/'}
      target="_self"
    />
  );
}
