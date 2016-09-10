import React from "react"
import styles from "./LinkContent.css"

export default ({ title, url, description }) => (
  <section>
    <h3 className={styles.title}>
      <a href={url} className={styles.link}>{title}</a>
    </h3>
    <p className={styles.description}>{description}</p>
  </section>
)
