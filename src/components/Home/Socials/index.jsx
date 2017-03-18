import React from 'react';

import Section from 'common/partials/Section';

import styles from './styles.css';

const contents = [
  { url: 'https://github.com/nownabe', image: 'images/github.png', alt: 'GitHub' },
  { url: 'https://qiita.com/nownabe', image: 'images/qiita.png', alt: 'Qiita' },
  { url: 'https://twitter.com/nownabe', image: 'images/twitter.png', alt: 'Twitter' },
  { url: 'https://facebook.com/nownabe', image: 'images/facebook.png', alt: 'Facebook' },
];

export default () => (
  <Section title="Socials">
    <ul>
      {contents.map(content => (
        <li className={styles.item} key={content.url}>
          <a href={content.url}>
            <img src={content.image} alt={content.alt} className={styles.image} />
          </a>
        </li>
      ))}
    </ul>
  </Section>
);
