import React from "react"

import styles from "./styles.css"

export default () => (
  <footer className={styles.footer}>
    <p className={styles.message}>
      Copyright &copy; 2016
      <img src="images/nownabe.svg" className={styles.icon} />
      nownabe All Rights Reserved.
    </p>
  </footer>
)
