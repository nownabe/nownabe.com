import React from "react"
import LinkContentsSection from "../organisms/LinkContentsSection"

export default () => {
  let contents = [
    {
      url: "https://x86-emulator.nownabe.com/",
      title: "x86-emulator",
      description: "x86 assembler and x86 emulator for learning about x86 assembly."
    },
    {
      url: "https://rubygems.org/profiles/nownabe",
      title: "RubyGems",
      description: "All RubyGems"
    }
  ]

  return <LinkContentsSection title="Products" contents={contents} />
}
