import React from "react"
import Section from "./Section"
import LinkImage from "./LinkImage"

export default ({ title, links }) => {
  let list = links.map((link, i) => (
    <LinkImage {...link} key={i} />
  ))
  let child = <ul>{list}</ul>

  return <Section title={title} child={child} />
}
