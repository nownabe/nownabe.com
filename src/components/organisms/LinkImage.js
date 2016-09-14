import React from "react"
import styles from "./LinkImage.css"

export default ({ url, image }) => (
  <li className={styles.item}>
    <a href={url}>
      <img src={image} className={styles.image} />
    </a>
  </li>
)
