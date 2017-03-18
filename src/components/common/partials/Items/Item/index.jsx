import React from "react"

import { Link } from "react-router-dom"

import styles from "./styles.css"

export default ({ url, link, title, description }) => {
  let titleLink
  if (url) {
    titleLink = <a href={url} className={styles.link}>{title}</a>
  } else {
    titleLink = <Link to={link} className={styles.link}>{title}</Link>
  }

  return (
    <section>
      <h3 className={styles.title}>{titleLink}</h3>
      <p className={styles.description}>{description}</p>
    </section>
  )
}
