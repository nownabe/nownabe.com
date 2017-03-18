import React from "react"

import Section from "common/partials/Section"

import styles from "./styles.css"

const contents = [
  {url: "https://github.com/nownabe", image: "images/github.png"},
  {url: "https://qiita.com/nownabe", image: "images/qiita.png"},
  {url: "https://twitter.com/nownabe", image: "images/twitter.png"},
  {url: "https://facebook.com/nownabe", image: "images/facebook.png"}
]

export default () => (
  <Section title="Socials">
    <ul>
      {contents.map((content, i) => (
        <li className={styles.item} key={i}>
          <a href={content.url}>
            <img src={content.image} className={styles.image} />
          </a>
        </li>
      ))}
    </ul>
  </Section>
)
