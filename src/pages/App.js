import React from "react"
import styles from "./App.css"
import Header from "../organisms/Header"
import Presentation from "../organisms/Presentation"
import Social from "../organisms/Social"
import Footer from "../organisms/Footer"

export default () => (
  <div className={styles.container}>
    <Header />
    <Presentation />
    <Social />
    <Footer />
  </div>
)
