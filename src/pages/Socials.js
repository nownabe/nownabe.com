import React from "react"
import LinkListSection from "../templates/LinkListSection"

export default () => {
  let links = [
    {url: "https://github.com/nownabe", title: "GitHub"},
    {url: "https://qiita.com/nownabe", title: "Qiita"},
    {url: "https://twitter.com/nownabe", title: "Twitter"},
    {url: "https://facebook.com/nownabe", title: "Facebook"}
  ]
  return <LinkListSection title="Socials" links={links} />
}
