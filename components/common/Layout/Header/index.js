import React from 'react';
import Link from 'next/link';

import Icon from './Icon';

export default () => (
  <header>
    <h1>
      <Link href="/"><a>nownabe.github.io</a></Link>
    </h1>
    <div className="title-container">
      <Icon />
      <div className="introduction">
        <p>
          Hello. I&#39;m Shogo Watanabe, a software engineer from Japan.
          I like coding, traveling, reading comics, playing drums and playing online games.
          Now I&#39;m working on web development.
        </p>
      </div>
    </div>
    <style jsx>{`
      header {
        text-align: center;
      }

      div.title-container {
        display: inline-flex;
        align-items: center;
      }

      h1{
        margin-bottom: 2rem;
      }

      h1 > :global(a) {
        color: #3c4a60;
        text-decoration: none;
      }

      div.introduction {
        margin-left: 1rem;
        text-align: left;
      }
    `}</style>
  </header>
);
