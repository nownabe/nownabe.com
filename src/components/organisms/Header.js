import React from "react"
import Icon from "./ProfileIcon"
import styles from "./Header.css"

export default () => (
  <header>
    <div className={styles.titleContainer}>
      <Icon />
      <h1 className={styles.title}>nownabe.github.io</h1>
    </div>
  </header>
)
