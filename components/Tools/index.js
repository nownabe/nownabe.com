import React from 'react';

import Section from '../common/partials/Section';
import Items from '../common/partials/Items';

const golang = [
  {
    url: 'https://github.com/nownabe/cryptography',
    title: 'cryptography',
    description:
      `A simple CLI tool to encrypt/decrypt files with secret password.
      It is written by Golang.`,
  },
  {
    url: 'https://github.com/nownabe/brainfuck-go',
    title: 'brainfuck-go',
    description:
      `A brainf*ck processor.
      You can create your original programming language like brainf*ck with it.`,
  },
];

export default () => (
  <div>
    <Section title="Golang">
      <Items contents={golang} />
    </Section>
  </div>
);
