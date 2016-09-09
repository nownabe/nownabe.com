import React from "react"
import LinkListSection from "../templates/LinkListSection"

export default () => {
  let links = [
    {
      url: "https://x86-emulator.nownabe.com/",
      title: "x86-emulator"
    },
    {
      url: "https://rubygems.org/profiles/nownabe",
      title: "RubyGems"
    }
  ]

  return <LinkListSection title="Products" links={links} />
}
