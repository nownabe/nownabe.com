import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';

import styles from './styles.css';

export default () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link to="/" className={styles.link}>nownabe.github.io</Link>
    </h1>
    <div className={styles.titleContainer}>
      <Icon />
      <div className={styles.introduction}>
        <p>
          Hello. I'm Shogo Watanabe, a software engineer from Japan.
          I like coding, traveling, reading comics, playing drums, playing online games.
          Now I'm working on web development.
        </p>
      </div>
    </div>
  </header>
);
