import React from "react"
import styles from "./Section.css"

export default ({ title, child }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {child}
  </section>
)
