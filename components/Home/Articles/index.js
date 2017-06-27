import React from 'react';

import Section from '../../common/partials/Section';
import Items from '../../common/partials/Items';

const contents = [
  {
    url: 'http://memo.goodpatch.co/2016/07/beautiful-commits-with-emojis/',
    title: 'Emojiで楽しく綺麗なコミットを手に入れる',
    description:
      `This article proposes using 'Emoji Prefix' to make beautiful commits for every team.
      It also explains a useful Git technique 'commit template'.`,
  },
  {
    url: 'http://qiita.com/nownabe/items',
    title: 'Qiita',
    description:
      'Tech articles about programming, infrastructure, serverside, frontend and so on.',
  },
  {
    url: 'https://blog.nownabe.com/',
    title: 'nownab.log',
    description: 'Logging my life.',
  },
];

export default () => (
  <Section title="Articles">
    <Items contents={contents} />
  </Section>
);
