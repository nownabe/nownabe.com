import React from "react"

import styles from "./styles.css"

export default ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
)
