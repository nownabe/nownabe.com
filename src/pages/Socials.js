import React from "react"
import LinkImagesSection from "../organisms/LinkImagesSection"

export default () => {
  let links = [
    {url: "https://github.com/nownabe", image: "github.png"},
    {url: "https://qiita.com/nownabe", image: "github.png"},
    {url: "https://twitter.com/nownabe", image: "github.png"},
    {url: "https://facebook.com/nownabe", image: "github.png"}
  ]
  return <LinkImagesSection title="Socials" links={links} />
}
