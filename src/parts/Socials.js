import React from "react"
import LinkImagesSection from "../components/organisms/LinkImagesSection"

export default () => {
  let links = [
    {url: "https://github.com/nownabe", image: "images/github.png"},
    {url: "https://qiita.com/nownabe", image: "images/qiita.png"},
    {url: "https://twitter.com/nownabe", image: "images/twitter.png"},
    {url: "https://facebook.com/nownabe", image: "images/facebook.png"}
  ]
  return <LinkImagesSection title="Socials" links={links} />
}
