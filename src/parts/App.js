import React from "react"
import styles from "./App.css"
import Header from "../components/organisms/Header"
import Products from "./Products"
import Articles from "./Articles"
import Presentations from "./Presentations"
import Socials from "./Socials"
import Footer from "../components/organisms/Footer"

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
