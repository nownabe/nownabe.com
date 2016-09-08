import React from "react"
import styles from "./App.css"
import Header from "../organisms/Header"
import Products from "../organisms/Products"
import Articles from "../organisms/Articles"
import Presentations from "../organisms/Presentations"
import Socials from "../organisms/Socials"
import Footer from "../organisms/Footer"

export default () => (
  <div className={styles.container}>
    <Header />
    <Products />
    <Articles />
    <Presentations />
    <Socials />
    <Footer />
  </div>
)
