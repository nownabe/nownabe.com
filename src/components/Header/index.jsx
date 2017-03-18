import React from "react"
import { Link } from "react-router-dom"

import Icon from "./Icon"

import styles from "./styles.css"

export default () => (
  <header>
    <div className={styles.titleContainer}>
      <Icon />
      <h1 className={styles.title}>
        <Link to="/" className={styles.link}>nownabe.github.io</Link>
      </h1>
    </div>
  </header>
)
