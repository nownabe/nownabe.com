import React from 'react';

import Section from '../../common/partials/Section';

const contents = [
  { url: 'https://github.com/nownabe', image: '/static/images/github.png', alt: 'GitHub' },
  { url: 'https://qiita.com/nownabe', image: '/static/images/qiita.png', alt: 'Qiita' },
  { url: 'https://twitter.com/nownabe', image: '/static/images/twitter.png', alt: 'Twitter' },
  { url: 'https://facebook.com/nownabe', image: '/static/images/facebook.png', alt: 'Facebook' },
];

export default () => (
  <Section title="Socials">
    <ul>
      {contents.map(content => (
        <li key={content.url}>
          <a href={content.url}>
            <img src={content.image} alt={content.alt} />
          </a>
        </li>
      ))}
    </ul>
    <style jsx>{`
      li {
        display: inline-block;
        list-style-type: none;
        margin-left: 1rem;
      }

      img {
        width: 64px;
        height: 64px;
      }
    `}</style>
  </Section>
);
