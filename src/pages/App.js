import React from "react"
import styles from "./App.css"
import Header from "../organisms/Header"
import Products from "../pages/Products"
import Articles from "../pages/Articles"
import Presentations from "../pages/Presentations"
import Socials from "../pages/Socials"
import Footer from "../organisms/Footer"

export default () => (
  <div className={styles.container}>
    <Header />
    <Products />
    <Presentations />
    <Articles />
    <Socials />
    <Footer />
  </div>
)
