import React from "react"
import LinkContent from "./LinkContent"
import Section from "./Section"

export default ({ title, contents }) => {
  let child = contents.map((content, i) => (
    <LinkContent {...content} key={i} />
  ))

  return <Section title={title} child={child} />
}
