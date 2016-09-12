import React from "react"
import LinkContentsSection from "../organisms/LinkContentsSection"

export default () => {
  let contents = [
    {
      url: "https://x86-emulator.nownabe.com/",
      title: "x86-emulator",
      description:
        "Emulator of x86 CPU to learn about x86 assembly, created with React/Redux. \
        This emulator can execute i386 assembly programs and show data in registers and memory step by step. \
        It allows you to learn x86 assembly."
    },
    {
      url: "https://rubygems.org/profiles/nownabe",
      title: "RubyGems",
      description: "All RubyGems that I released."
    }
  ]

  return <LinkContentsSection title="Products" contents={contents} />
}
